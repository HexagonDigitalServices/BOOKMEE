
      {/* Booking cards */}
      <section className={s.bookingListSection}>
        {bookings.length === 0 && (
          <div className={s.emptyStateContainer}>
            <CalendarDays className={s.emptyStateIcon} />
            <p className={s.emptyStateText}>No bookings match these filters.</p>
          </div>
        )}

        {bookings.map((booking) => (
          <article key={booking._id} className={s.cardContainer}>
            <div className={s.cardInnerLayout}>
              {/* Left: booking info */}
              <div className={s.cardLeftBlock}>
                <div className={s.badgesContainer}>
                  <span
                    className={`${s.statusBadgeBase} ${s.statusBadgeClassMap[booking.status] || s.statusBadgeClassMap.default}`}
                  >
                    <Check className={s.badgeIcon} />
                    {booking.status.replace("_", " ")}
                  </span>
                  <span
                    className={`${s.paymentBadgeBase} ${s.paymentBadgeClassMap[booking.paymentStatus] || s.paymentBadgeClassMap.default}`}
                  >
                    <CreditCard className={s.badgeIcon} />
                    Payment:{" "}
                    {booking.paymentStatus?.replace("_", " ") || "Not Required"}
                  </span>
                  {booking.rescheduleCount > 0 && (
                    <span
                      className={`${s.paymentBadgeBase} bg-orange-100 text-orange-700 ml-2`}
                    >
                      <RefreshCcw className={s.badgeIcon} />
                      Rescheduled ({booking.rescheduleCount})
                    </span>
                  )}
                </div>

                <div className={s.customerInfoRow}>
                  <div className={s.customerAvatarContainer}>
                    <img
                      src={AVATAR_MAP[booking.customerAvatar || "A1.png"]}
                      alt={booking.customerName}
                      className={s.customerAvatarImg}
                    />
                  </div>
                  <div>
                    <h2 className={s.customerName}>{booking.customerName}</h2>
                    <p className={s.customerEmail}>{booking.customerEmail}</p>
                  </div>
                </div>

                <div className={s.bookingDetailsRow}>
                  <div className={s.bookingDetailsIconContainer}>
                    <CalendarDays className={s.bookingDetailsIcon} />
                  </div>
                  <div className={s.bookingDetailsTextContainer}>
                    <p className={s.bookingDateTimeText}>
                      {booking.date} • {booking.startTime} - {booking.endTime}
                    </p>
                    <div className={s.bookingServiceRow}>
                      <div className={s.bookingServiceDot}></div>
                      <p className={s.bookingServiceText}>
                        {booking.serviceId?.name || "Meeting"}
                        {booking.notes ? ` • ${booking.notes}` : " • GGH"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={s.timestampsContainer}>
                  <span className={s.timestampSpan}>
                    <Clock className={s.timestampIcon} />
                    Created: {formatTimestamp(booking.createdAt)}
                  </span>
                  <span className={s.timestampSpan}>
                    <RefreshCcw className={s.timestampIcon} />
                    Last updated: {formatTimestamp(booking.updatedAt)}
                  </span>
                </div>

                <div className={s.calendarSyncRow}>
                  <Calendar className={s.timestampIcon} />
                  Calendar:{" "}
                  {booking.googleEventId ? "Synced to Google" : "Not synced"}
                </div>

                {booking.customerCalendarUrl ? (
                  <a
                    href={booking.customerCalendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={s.calendarLinkButton}
                  >
                    Customer calendar link
                    <ExternalLink className={s.calendarLinkIcon} />
                  </a>
                ) : (
                  <span className={s.calendarLinkUnavailable}>
                    Calendar link unavailable
                    <ExternalLink className={s.calendarLinkIcon} />
                  </span>
                )}
              </div>

              {/* Right: action buttons */}
              <div className={s.cardRightBlock}>
                <div className={s.actionButtonsContainer}>
                  {booking.status !== "cancelled" &&
                    booking.status !== "payment_failed" && (
                      <>
                        <button
                          type="button"
                          onClick={() => setRescheduleModalBooking(booking)}
                          className={s.rescheduleButton}
                        >
                          <CalendarDays className={s.actionIcon} />
                          Reschedule
                        </button>
                        <button
                          type="button"
                          onClick={() => setCancelModalBookingId(booking._id)}
                          className={s.cancelButton}
                        >
                          <XCircle className={s.actionIcon} />
                          Cancel
                        </button>
                      </>
                    )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Modals */}
      {cancelModalBookingId && (
        <div className={s.modalOverlay}>
          <div className={s.modalContent}>
            <div className={s.modalHeader}>
              <h2 className={s.modalTitle}>Cancel Booking</h2>
              <button
                onClick={() => setCancelModalBookingId(null)}
                className={s.modalCloseBtn}
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className={s.modalBody}>
              <p className={s.modalMessage}>
                Are you sure you want to cancel this booking? This action cannot
                be undone, and the customer will be notified.
              </p>
            </div>
            <div className={s.modalFooter}>
              <button
                onClick={() => setCancelModalBookingId(null)}
                className={s.modalButtonSecondary}
              >
                Keep Booking
              </button>
              <button
                onClick={() => {
                  setStatus({ _id: cancelModalBookingId }, "cancelled");
                  setCancelModalBookingId(null);
                }}
                className={s.modalButtonDanger}
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {rescheduleModalBooking && (
        <div className={s.modalOverlay}>
          <div className={s.modalContent}>
            <div className={s.modalHeader}>
              <h2 className={s.modalTitle}>Reschedule Booking</h2>
              <button
                onClick={() => {
                  setRescheduleModalBooking(null);
                  setReschedules((prev) => ({
                    ...prev,
                    [rescheduleModalBooking._id]: undefined,
                  }));
                }}
                className={s.modalCloseBtn}
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className={s.modalBody}>
              <div className={s.rescheduleGrid}>
                <div className={s.rescheduleInputContainer}>
                  <CalendarDays className={s.rescheduleInputIcon} />
                  <input
                    type="date"
                    value={
                      reschedules[rescheduleModalBooking._id]?.date ??
                      rescheduleModalBooking.date
                    }
                    onChange={(event) =>
                      updateRescheduleDraft(
                        rescheduleModalBooking,
                        "date",
                        event.target.value,
                      )
                    }
                    className={s.rescheduleInputField}
                  />
                </div>
                <div className={s.rescheduleInputContainer}>
                  <Clock className={s.rescheduleInputIcon} />
                  <input
                    type="time"
                    value={
                      reschedules[rescheduleModalBooking._id]?.startTime ??
                      rescheduleModalBooking.startTime
                    }
                    onChange={(event) =>
                      updateRescheduleDraft(
                        rescheduleModalBooking,
                        "startTime",
                        event.target.value,
                      )
                    }
                    className={s.rescheduleInputField}
                  />
                </div>
                <div className={s.rescheduleInputContainer}>
                  <Clock className={s.rescheduleInputIcon} />
                  <input
                    type="time"
                    value={
                      reschedules[rescheduleModalBooking._id]?.endTime ??
                      rescheduleModalBooking.endTime
                    }
                    onChange={(event) =>
                      updateRescheduleDraft(
                        rescheduleModalBooking,
                        "endTime",
                        event.target.value,
                      )
                    }
                    className={s.rescheduleInputField}
                  />
                </div>
              </div>
            </div>
            <div className={s.modalFooter}>
              <button
                onClick={() => {
                  setRescheduleModalBooking(null);
                  setReschedules((prev) => ({
                    ...prev,
                    [rescheduleModalBooking._id]: undefined,
                  }));
                }}
                className={s.modalButtonSecondary}
              >
                Discard
              </button>
              <button
                onClick={() => {
                  submitReschedule(rescheduleModalBooking);
                  setRescheduleModalBooking(null);
                }}
                className={s.modalButtonPrimary}
              >
                Confirm Reschedule
              </button>
            </div>
          </div>
        </div>
      )}
