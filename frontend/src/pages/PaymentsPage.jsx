

          {/* Wallet cards */}
          <div className={s.walletCardsGrid}>
            <div className={s.walletCard}>
              <div className={s.walletCardHeader}>
                <div className={s.walletIconBoxAvailable}>
                  <Wallet className="h-4 w-4 text-emerald-600" />
                </div>
                <span className={s.walletCardLabel}>Available</span>
              </div>
              <h2 className={s.walletAmount}>
                {formatMoney(wallet.available)}
              </h2>
            </div>
            <div className={s.walletCard}>
              <div className={s.walletCardHeader}>
                <div className={s.walletIconBoxEarned}>
                  <TrendingUp className="h-4 w-4 text-[#7D57F5]" />
                </div>
                <span className={s.walletCardLabel}>Total earned</span>
              </div>
              <h2 className={s.walletAmount}>{formatMoney(wallet.earned)}</h2>
            </div>
            <div className={s.walletCard}>
              <div className={s.walletCardHeader}>
                <div className={s.walletIconBoxPending}>
                  <Clock className="h-4 w-4 text-amber-600" />
                </div>
                <span className={s.walletCardLabel}>Pending payouts</span>
              </div>
              <h2 className={s.walletAmount}>
                {formatMoney(wallet.pendingWithdrawals)}
              </h2>
              <p className={s.paidOutText}>
                Paid out: {formatMoney(wallet.paidWithdrawals)}
              </p>
            </div>
          </div>

          {/* Withdraw section */}
          <section className={s.withdrawSection}>
            <h2 className={s.withdrawTitle}>
              <ArrowDownToLine className={s.withdrawIcon} />
              Withdraw balance
            </h2>
            <form onSubmit={submitWithdrawal} className={s.withdrawForm}>
              <div className={s.withdrawInputContainer}>
                <IndianRupee className={s.withdrawInputIcon} />
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  value={withdrawAmount}
                  onChange={(event) => setWithdrawAmount(event.target.value)}
                  placeholder={availableRupees}
                  className={s.withdrawInput}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !payoutDetails.isComplete}
                className={s.requestButton}
              >
                <ArrowDownToLine className={s.requestButtonIcon} />
                Request
              </button>
            </form>
            {!payoutDetails.isComplete && (
              <p className={s.withdrawWarning}>
                Save payout details before requesting a withdrawal.
              </p>
            )}
          </section>
        </div>

        {/* RIGHT */}
        <div className={s.rightColumn}>
          {/* Payout details form */}
          <section className={s.payoutDetailsSection}>
            <h2 className={s.payoutTitle}>
              <Building2 className={s.payoutTitleIcon} />
              Payout details
            </h2>
            <p className={s.payoutDescription}>
              We store only masked account information. Use Stripe Connect or a
              payout provider before moving real money in production.
            </p>
            <form onSubmit={savePayoutDetails} className={s.payoutForm}>
              <label className={s.inputLabel}>
                Account holder
                <input
                  name="accountHolderName"
                  value={form.accountHolderName}
                  onChange={handleChange}
                  className={s.textInput}
                />
              </label>
              <label className={s.inputLabel}>
                Bank name
                <input
                  name="bankName"
                  value={form.bankName}
                  onChange={handleChange}
                  className={s.textInput}
                />
              </label>
              <label className={s.inputLabel}>
                Account number
                <input
                  name="accountNumber"
                  value={form.accountNumber}
                  onChange={handleChange}
                  placeholder={
                    payoutDetails.accountLast4
                      ? `Saved ending ${payoutDetails.accountLast4}`
                      : ""
                  }
                  className={s.textInput}
                />
              </label>
              <div className={s.payoutGridTwoCol}>
                <label className={s.inputLabel}>
                  IFSC
                  <input
                    name="ifsc"
                    value={form.ifsc}
                    onChange={handleChange}
                    className={s.textInput}
                  />
                </label>
                <label className={s.inputLabel}>
                  UPI ID
                  <input
                    name="upiId"
                    value={form.upiId}
                    onChange={handleChange}
                    className={s.textInput}
                  />
                </label>
              </div>
              <button type="submit" disabled={loading} className={s.saveButton}>
                <Save className={s.saveIcon} />
                {loading ? "Saving..." : "Save payout details"}
              </button>
              {message && <p className={s.messageBox}>{message}</p>}
            </form>
          </section>

          {/* Recent activity */}
          <section className={s.recentActivitySection}>
            <div className={s.recentActivityHeader}>
              <h2 className={s.recentActivityTitle}>
                <CreditCard className={s.recentActivityTitleIcon} />
                Recent activity
              </h2>
              <Link to="/bookings" className={s.bookingsLink}>
                Bookings
                <ExternalLink className={s.bookingsLinkIcon} />
              </Link>
            </div>
            <div className={s.transactionList}>
              {(overview?.transactions || []).map((transaction) => {
                const amount = transactionAmount(transaction);
                const isNegative = amount < 0;
                return (
                  <div key={transaction._id} className={s.transactionItem}>
                    <div className={s.transactionLeft}>
                      <div
                        className={
                          isNegative
                            ? s.transactionIconBoxNegative
                            : s.transactionIconBoxPositive
                        }
                      >
                        {isNegative ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownLeft className="h-4 w-4" />
                        )}
                      </div>
                      <span className={s.transactionLabel}>
                        {transactionLabel(transaction)}
                      </span>
                    </div>
                    <strong
                      className={
                        isNegative
                          ? s.transactionAmountNegative
                          : s.transactionAmountPositive
                      }
                    >
                      {formatMoney(amount)}
                    </strong>
                  </div>
                );
              })}
              {overview && overview.transactions?.length === 0 && (
                <p className={s.emptyText}>No wallet activity yet.</p>
              )}
            </div>
          </section>
        </div>
 