export const updatePayoutDetails = async (req, res) => {
  try {
    const { accountHolderName, bankName, accountNumber, ifsc, upiId } = req.body;

    if (!accountHolderName || (!accountNumber && !upiId)) {
      return res.status(400).json({ message: 'Account holder and a bank account or UPI ID are required' });
    }

    const payoutDetails = {
      accountHolderName,
      bankName: bankName || '',
      accountLast4: accountNumber ? maskAccountNumber(accountNumber) : '',
      ifsc: ifsc || '',
      upiId: upiId || '',
      isComplete: Boolean(accountHolderName && (accountNumber || upiId)),
      updatedAt: new Date(),
    };

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { payoutDetails },
      { new: true }
    ).select('payoutDetails');

    res.json({ message: 'Payout details saved', payoutDetails: user.payoutDetails });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const requestWithdrawal = async (req, res) => {
  try {
    const userId = toObjectId(req.user.id);
    const amount = Math.round(Number(req.body.amount || 0));
    const user = await User.findById(userId).select('payoutDetails');

    if (!user?.payoutDetails?.isComplete) {
      return res.status(400).json({ message: 'Add payout details before requesting a withdrawal' });
    }

    const summary = await getWalletSummary(userId);
    if (!amount || amount < 100) {
      return res.status(400).json({ message: 'Withdrawal amount must be at least 100 paise' });
    }

    if (amount > summary.available) {
      return res.status(400).json({ message: 'Withdrawal amount exceeds available balance' });
    }

    const withdrawal = await Withdrawal.create({
      userId,
      amount,
      payoutSnapshot: user.payoutDetails,
    });

    await WalletTransaction.create({
      userId,
      withdrawalId: withdrawal._id,
      type: 'withdrawal_hold',
      amount,
      status: 'pending',
      description: 'Withdrawal requested',
    });

    res.status(201).json({ message: 'Withdrawal requested', withdrawal });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
