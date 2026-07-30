


const toUserResponse = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  slug: user.slug,
  businessName: user.businessName,
  businessDescription: user.businessDescription,
  brandTheme: user.brandTheme,
  brandAccent: user.brandAccent,
  timezone: user.timezone,
  googleCalendarConnected: user.googleCalendarConnected,
  googleCalendarId: user.googleCalendarId,
  payoutDetails: user.payoutDetails,
  stripeConfigured: Boolean(process.env.STRIPE_SECRET_KEY),
});






export const updateProfile = async (req, res) => {
  try {
    const { businessName, businessDescription, timezone, brandTheme, brandAccent } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (businessName !== undefined) user.businessName = businessName;
    if (businessDescription !== undefined) user.businessDescription = businessDescription;
    if (timezone !== undefined) user.timezone = timezone;
    if (brandTheme !== undefined) user.brandTheme = brandTheme;
    if (brandAccent !== undefined) user.brandAccent = brandAccent;

    const baseSlug = slugify(user.businessName || user.name) || 'business';
    let finalSlug = baseSlug;
    let counter = 1;

    while (await User.findOne({ slug: finalSlug, _id: { $ne: user._id } })) {
      finalSlug = `${baseSlug}-${counter}`;
      counter += 1;
    }

    user.slug = finalSlug;

    await user.save();

    res.json({
      message: 'Profile updated successfully',
      user: toUserResponse(user),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};