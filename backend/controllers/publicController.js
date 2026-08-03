export const verifyPublicBookingOtp = async (req, res) => {
  try {
    const { customerEmail, emailOtp } = req.body;
    
    if (!customerEmail || !emailOtp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    const otpResult = await verifyEmailOtp({
      email: customerEmail,
      purpose: 'booking',
      code: emailOtp,
      consume: false,
    });

    if (!otpResult.verified) {
      return res.status(400).json({ message: otpResult.reason || 'Invalid OTP' });
    }

    res.json({ message: 'OTP verified' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createPublicBooking = async (req, res) => {
  try {
    const { serviceId, customerName, customerEmail, customerAvatar, date, startTime, endTime, notes, emailOtp } = req.body;

    if (!serviceId || !customerName || !customerEmail || !date || !startTime || !endTime) {
      return res.status(400).json({ message: 'All booking fields are required' });
    }

    const normalizedCustomerEmail = customerEmail.toLowerCase().trim();

    const business = await getBusinessBySlug(req.params.slug);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }

    const service = await Service.findOne({
      _id: serviceId,
      userId: business._id,
      isActive: true,
      isDeleted: { $ne: true },
    });
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const bookings = await findActiveSlotBookings({ userId: business._id, date });

    const hasConflict = bookings.some((booking) => (
      timesOverlap(startTime, endTime, booking.startTime, booking.endTime)
    ));

    if (hasConflict) {
      return res.status(409).json({ message: 'That slot is no longer available' });
    }

    const otpResult = await verifyEmailOtp({
      email: normalizedCustomerEmail,
      purpose: 'booking',
      code: emailOtp,
      consume: true,
    });

    if (!otpResult.verified) {
      return res.status(400).json({ message: otpResult.reason || 'Email verification is required' });
    }

    const amount = toStripeAmount(service.price);
    const { platformFeeAmount, providerPayoutAmount } = calculatePlatformSplit(amount);
    const currency = 'inr';
    const stripe = amount > 0 ? getStripe() : null;

    if (amount > 0 && !stripe) {
      return res.status(503).json({ message: 'Stripe payments are not configured yet' });
    }

    const customerCalendarUrl = buildCustomerCalendarUrl({
      business,
      service,
      booking: { date, startTime, endTime, customerName, customerEmail: normalizedCustomerEmail, notes },
    });

    const booking = await Booking.create({
      userId: business._id,
      serviceId,
      customerName,
      customerEmail: normalizedCustomerEmail,
      customerAvatar: customerAvatar || 'A1.png',
      date,
      startTime,
      endTime,
      notes: notes || '',
      amount,
      platformFeeAmount,
      providerPayoutAmount,
      payoutStatus: amount > 0 ? 'pending' : 'not_required',
      currency,
      paymentStatus: amount > 0 ? 'pending' : 'not_required',
      status: amount > 0 ? 'pending_payment' : 'confirmed',
      customerCalendarUrl,
    });

    if (amount === 0) {
      try {
        const calendarResult = await createBookingCalendarEvent({ business, service, booking });
        booking.googleEventId = calendarResult.googleEventId || '';
        booking.customerCalendarUrl = calendarResult.customerCalendarUrl;
        await booking.save();
      } catch (calendarError) {
        booking.customerCalendarUrl = customerCalendarUrl;
        await booking.save();
      }

      let emailResult = { sent: 'processing' };
      sendBookingNotification({ business, service, booking, type: 'confirmed' })
        .catch(emailError => console.error('Booking confirmation email failed:', emailError.message));

      return res.status(201).json({
        message: 'Booking confirmed',
        booking,
        customerCalendarUrl: booking.customerCalendarUrl,
        email: emailResult,
      });
    }

    const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: normalizedCustomerEmail,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount: amount,
            product_data: {
              name: service.name,
              description: `${date} ${startTime}-${endTime}`,
            },
          },
        },
      ],
      metadata: {
        bookingId: String(booking._id),
      },
      success_url: `${clientUrl}/booking/success?session_id={CHECKOUT_SESSION_ID}&slug=${business.slug}`,
      cancel_url: `${clientUrl}/booking/cancelled?booking_id=${booking._id}&slug=${business.slug}`,
    });

    booking.stripeSessionId = session.id;
    await booking.save();

    res.status(201).json({
      message: 'Continue to payment',
      bookingId: booking._id,
      checkoutUrl: session.url,
    });
  } catch (error) {
    const errorMsg = error.type?.includes('Stripe') ? (error.raw?.message || error.message) : 'Server error: ' + error.message;
    res.status(error.statusCode || 500).json({ message: errorMsg, error: error.message });
  }
};

const confirmPaidBooking = async ({ booking, business, service, session }) => {
  if (booking.status === 'confirmed' && booking.paymentStatus === 'paid') {
    return booking;
  }

  const conflictingBookings = await Booking.find({
    _id: { $ne: booking._id },
    userId: booking.userId,
    date: booking.date,
    status: 'confirmed',
  });

  const hasConflict = conflictingBookings.some((candidate) => (
    timesOverlap(booking.startTime, booking.endTime, candidate.startTime, candidate.endTime)
  ));

  if (hasConflict) {
    booking.status = 'payment_failed';
    booking.paymentStatus = 'failed';
    await booking.save();
    throw new Error('This slot is no longer available. No booking was created.');
  }

  booking.status = 'confirmed';
  booking.paymentStatus = 'paid';
  booking.payoutStatus = booking.providerPayoutAmount > 0 ? 'available' : 'not_required';

  try {
    const calendarResult = await createBookingCalendarEvent({ business, service, booking });
    booking.googleEventId = calendarResult.googleEventId || '';
    booking.customerCalendarUrl = calendarResult.customerCalendarUrl || booking.customerCalendarUrl;
  } catch (calendarError) {
    console.error('Google Calendar confirmation failed:', calendarError.message);
  }

  await booking.save();
  await createBookingPayoutTransaction({
    booking,
    description: `Booking payment from ${booking.customerName || 'Customer'}`,
  });

  sendBookingNotification({ business, service, booking, type: 'confirmed' })
    .catch(emailError => console.error('Booking confirmation email failed:', emailError.message));

  return booking;
};

export const getBookingStatus = async (req, res) => {
  try {
    const { session_id: sessionId, booking_id: bookingId } = req.query;
    const query = sessionId ? { stripeSessionId: sessionId } : { _id: bookingId };

    if (!sessionId && !bookingId) {
      return res.status(400).json({ message: 'Booking identifier is required' });
    }

    let booking = await Booking.findOne(query).populate('serviceId', 'name duration price');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (sessionId && booking.status === 'pending_payment') {
      const stripe = getStripe();
      if (!stripe) {
        return res.status(503).json({ message: 'Stripe payments are not configured yet' });
      }

      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session.payment_status !== 'paid') {
        booking.status = 'payment_failed';
        booking.paymentStatus = 'failed';
        await booking.save();
        return res.status(402).json({ message: 'Payment was not successful. No booking was created.', booking });
      }

      const [business, service] = await Promise.all([
        User.findById(booking.userId),
        Service.findById(booking.serviceId),
      ]);

      if (!business || !service) {
        return res.status(404).json({ message: 'Booking business or service was not found' });
      }

      await confirmPaidBooking({ booking, business, service, session });
      booking = await Booking.findById(booking._id).populate('serviceId', 'name duration price');
    }

    res.json({ booking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const cancelPublicBookingPayment = async (req, res) => {
  try {
    const { booking_id: bookingId } = req.body;

    if (!bookingId) {
      return res.status(400).json({ message: 'Booking identifier is required' });
    }

    const booking = await Booking.findOne({ _id: bookingId, status: 'pending_payment' });
    if (!booking) {
      return res.json({ message: 'No pending booking to cancel' });
    }

    booking.status = 'payment_failed';
    booking.paymentStatus = 'failed';
    await booking.save();

    res.json({ message: 'Payment was not completed. No booking was created.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
