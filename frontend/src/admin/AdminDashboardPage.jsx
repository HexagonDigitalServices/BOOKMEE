  const changeWithdrawalStatus = async () => {
    if (!pendingWithdrawalAction) return;

    const { withdrawal, status } = pendingWithdrawalAction;
    setUpdatingWithdrawalId(withdrawal._id);

    try {
      const { data } = await updateWithdrawalStatus(withdrawal._id, { status });
      setDashboard((prev) => {
        if (!prev) return prev;

        return {
          ...prev,
          summary: data.summary || prev.summary,
          withdrawals: prev.withdrawals.map((withdrawal) =>
            withdrawal._id === data.withdrawal._id
              ? data.withdrawal
              : withdrawal,
          ),
        };
      });
      setMessage(data.message || `Withdrawal marked as ${status}`);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Could not update withdrawal",
      );
    } finally {
      setUpdatingWithdrawalId("");
      setPendingWithdrawalAction(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const summary = dashboard?.summary || {};
  const pendingWithdrawal = pendingWithdrawalAction?.withdrawal;
  const WithdrawalConfirmIcon =
    pendingWithdrawalAction?.status === "rejected" ? XOctagon : ShieldCheck;
  const isConfirmingWithdrawal =
    pendingWithdrawal && updatingWithdrawalId === pendingWithdrawal._id;

  // Helpers for dynamic classes from styles
  const getPayoutStatusClass = (isComplete) =>
    isComplete ? s.userPayoutReady : s.userPayoutPending;

  const getWithdrawalStatusClass = (status) =>
    s.withdrawalStatusColors[status] || s.withdrawalStatusDefault;

  const statCards = [
    {
      label: "Total Users",
      value: summary.users || 0,
      icon: Users,
      bg: s.statBg1,
      c: s.statColor1,
    },
    {
      label: "Paid Bookings",
      value: summary.paidBookings || 0,
      icon: CheckCircle,
      bg: s.statBg2,
      c: s.statColor2,
    },
    {
      label: "Gross Revenue",
      value: formatMoney(summary.grossRevenue),
      icon: TrendingUp,
      bg: s.statBg3,
      c: s.statColor3,
    },
    {
      label: "Platform Fees",
      value: formatMoney(summary.platformFees),
      icon: IndianRupee,
      bg: s.statBg4,
      c: s.statColor4,
    },
    {
      label: "Provider Payouts",
      value: formatMoney(summary.providerPayouts),
      icon: Wallet,
      bg: s.statBg5,
      c: s.statColor5,
    },
    {
      label: "Withdrawal Hold",
      value: formatMoney(summary.withdrawalHolds),
      icon: Landmark,
      bg: s.statBg6,
      c: s.statColor6,
    },
  ];



          {/* Recent bookings table */}
        <section className={s.recentBookingsCard}>
          <h2 className={`${s.tableTitle} ${s.sectionTitleSpacing}`}>
            <CheckCircle className={s.tableTitleIcon} /> Recent Paid Bookings
          </h2>
          <div className={s.tableScrollContainer}>
            <table className={s.table}>
              <thead>
                <tr className={s.tableHeadRow}>
                  <th className={s.th}>Provider</th>
                  <th className={s.th}>Service</th>
                  <th className={s.th}>Gross</th>
                  <th className={s.th}>Fees</th>
                  <th className={s.th}>Provider Share</th>
                  <th className={s.th}>Status</th>
                </tr>
              </thead>
              <tbody className={s.tbody}>
                {(dashboard?.recentBookings || []).map((booking) => (
                  <tr key={booking._id} className={s.tr}>
                    <td className={s.tdBold}>
                      {booking.userId?.businessName || booking.userId?.name}
                    </td>
                    <td className={s.tdMuted}>
                      {booking.serviceId?.name || "Service"}
                    </td>
                    <td className={s.tdBold}>{formatMoney(booking.amount)}</td>
                    <td className={s.tdFees}>
                      {formatMoney(booking.platformFeeAmount)}
                    </td>
                    <td className={s.tdEarnings}>
                      {formatMoney(booking.providerPayoutAmount)}
                    </td>
                    <td className={s.td}>
                      <span className={s.bookingPayoutBadge}>
                        {booking.payoutStatus}
                      </span>
                    </td>
                  </tr>
                ))}
                {dashboard && dashboard.recentBookings?.length === 0 && (
                  <tr>
                    <td colSpan="6" className={s.emptyTableCell}>
                      No recent transactions.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {pendingWithdrawalAction && (
        <div className={s.confirmModalOverlay}>
          <div
            className={s.confirmModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="withdrawal-confirm-title"
          >
            <div className={s.confirmModalIconRow}>
              <span className={s.confirmModalIconWrap}>
                <WithdrawalConfirmIcon className={s.confirmModalIcon} />
              </span>
              <span
                className={`${s.withdrawalStatusBadge} ${getWithdrawalStatusClass(pendingWithdrawalAction.status)}`}
              >
                {pendingWithdrawalAction.status}
              </span>
            </div>
            <h3 id="withdrawal-confirm-title" className={s.confirmModalTitle}>
              Confirm withdrawal status
            </h3>
            <p className={s.confirmModalText}>
              Are you sure you want to mark this withdrawal as{" "}
              {formatStatusLabel(pendingWithdrawalAction.status)}?
            </p>
            <div className={s.confirmModalMeta}>
              <span>
                {pendingWithdrawal?.userId?.businessName ||
                  pendingWithdrawal?.userId?.name ||
                  "Provider"}
              </span>
              <strong>{formatMoney(pendingWithdrawal?.amount)}</strong>
            </div>
            <div className={s.confirmModalActions}>
              <button
                type="button"
                onClick={closeWithdrawalConfirm}
                disabled={isConfirmingWithdrawal}
                className={s.confirmModalCancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={changeWithdrawalStatus}
                disabled={isConfirmingWithdrawal}
                className={s.confirmModalConfirmBtn}
              >
                {isConfirmingWithdrawal
                  ? "Confirming..."
                  : `Confirm ${formatStatusLabel(pendingWithdrawalAction.status)}`}
              </button>
            </div>
          </div>
        </div>
      )}