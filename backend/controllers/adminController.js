const getAdminSummary = async () => {
  const [usersCount, bookingTotals, walletTotals, withdrawalTotals] = await Promise.all([
    User.countDocuments(),
    Booking.aggregate([
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
          paidBookings: {
            $sum: { $cond: [{ $eq: ['$paymentStatus', 'paid'] }, 1, 0] },
          },
          grossRevenue: {
            $sum: { $cond: [{ $eq: ['$paymentStatus', 'paid'] }, '$amount', 0] },
          },
          platformFees: {
            $sum: { $cond: [{ $eq: ['$paymentStatus', 'paid'] }, '$platformFeeAmount', 0] },
          },
          paidProviderPayouts: {
            $sum: { $cond: [{ $eq: ['$paymentStatus', 'paid'] }, '$providerPayoutAmount', 0] },
          },
          confirmedProviderPayouts: {
            $sum: { $cond: [{ $eq: ['$status', 'confirmed'] }, '$providerPayoutAmount', 0] },
          },
          activeProviderPayouts: {
            $sum: {
              $cond: [
                { $in: ['$status', ['cancelled', 'payment_failed']] },
                0,
                '$providerPayoutAmount',
              ],
            },
          },
        },
      },
    ]),
    WalletTransaction.aggregate([
      {
        $group: {
          _id: '$type',
          total: { $sum: '$amount' },
        },
      },
    ]),
    Withdrawal.aggregate([
      {
        $group: {
          _id: '$status',
          total: { $sum: '$amount' },
        },
      },
    ]),
  ]);

  const bookingSummary = bookingTotals[0] || {};
  const walletMap = sumByKey(walletTotals);
  const withdrawalMap = sumByKey(withdrawalTotals);
  const paidProviderPayouts = bookingSummary.paidProviderPayouts || 0;
  const confirmedProviderPayouts = bookingSummary.confirmedProviderPayouts || 0;
  const activeProviderPayouts = bookingSummary.activeProviderPayouts || 0;
  const walletEarned = walletMap.booking_payout || 0;
  const heldWithdrawals = walletMap.withdrawal_hold || 0;
  const reversedWithdrawals = walletMap.withdrawal_reversal || 0;
  const providerPayouts = Math.max(
    paidProviderPayouts,
    confirmedProviderPayouts,
    activeProviderPayouts,
    walletEarned,
  );
  const pendingWithdrawals = (withdrawalMap.pending || 0) + (withdrawalMap.processing || 0);
  const paidWithdrawals = withdrawalMap.paid || 0;
  const usersAvailableBalance = Math.max(0, walletEarned - heldWithdrawals + reversedWithdrawals);
  const walletWithdrawalHold = usersAvailableBalance + pendingWithdrawals;
  const bookingWithdrawalHold = Math.max(0, providerPayouts - paidWithdrawals);

  return {
    users: usersCount,
    bookings: bookingSummary.count || 0,
    paidBookings: bookingSummary.paidBookings || 0,
    grossRevenue: bookingSummary.grossRevenue || 0,
    platformFees: bookingSummary.platformFees || 0,
    providerPayouts,
    walletEarned,
    usersAvailableBalance,
    pendingWithdrawals,
    paidWithdrawals,
    withdrawalHolds: Math.max(walletWithdrawalHold, bookingWithdrawalHold),
  };
};


export const getAdminDashboard = async (req, res) => {
  try {
    const [
      users,
      summary,
      withdrawals,
      recentBookings,
    ] = await Promise.all([
      User.find().select('name email businessName slug payoutDetails createdAt').sort({ createdAt: -1 }).limit(100),
      getAdminSummary(),
      Withdrawal.find().populate('userId', 'name email businessName').sort({ createdAt: -1 }).limit(50),
      Booking.find({ paymentStatus: 'paid' })
        .populate('userId', 'name email businessName')
        .populate('serviceId', 'name')
        .sort({ updatedAt: -1 })
        .limit(10),
    ]);

    res.json({
      summary,
      users,
      withdrawals,
      recentBookings,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateWithdrawalStatus = async (req, res) => {
  try {
    const { status, adminNote } = req.body;
    const allowedStatuses = ['pending', 'processing', 'paid', 'rejected'];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid withdrawal status' });
    }

    const withdrawal = await Withdrawal.findById(req.params.id);
    if (!withdrawal) {
      return res.status(404).json({ message: 'Withdrawal not found' });
    }

    if (terminalWithdrawalStatuses.includes(withdrawal.status)) {
      return res.status(400).json({
        message: `Withdrawal is already ${withdrawal.status} and cannot be changed`,
      });
    }

    if (status === 'rejected' && withdrawal.status !== 'rejected') {
      const existingReversal = await WalletTransaction.findOne({
        withdrawalId: withdrawal._id,
        type: 'withdrawal_reversal',
      });

      if (!existingReversal) {
        await WalletTransaction.create({
          userId: withdrawal.userId,
          withdrawalId: withdrawal._id,
          type: 'withdrawal_reversal',
          amount: withdrawal.amount,
          status: 'reversed',
          description: 'Withdrawal rejected and funds returned',
        });
      }
    }

    withdrawal.status = status;
    withdrawal.adminNote = adminNote || withdrawal.adminNote;
    await withdrawal.save();
    const [summary] = await Promise.all([
      getAdminSummary(),
      withdrawal.populate('userId', 'name email businessName'),
    ]);

    res.json({ message: `Withdrawal marked as ${status}`, withdrawal, summary });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
