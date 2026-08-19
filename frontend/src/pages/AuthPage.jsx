

        {/* Right: auth form */}
        <section className={s.formCard}>
          <h2 className={s.formHeading}>
            {isRegister ? "Create account" : "Welcome back"}
          </h2>
          <p className={s.formSubtitle}>
            {isRegister
              ? "Set up your business in minutes"
              : "Log in to manage your bookings"}
          </p>

          <form onSubmit={handleSubmit} className={s.form}>
            {isRegister && (
              <>
                <div>
                  <label className={s.inputLabel}>Name</label>
                  <div className={s.inputWrapper}>
                    <User className={s.inputIcon} />
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={s.inputField}
                    />
                  </div>
                </div>

                <div>
                  <label className={s.inputLabel}>Business Name</label>
                  <div className={s.inputWrapper}>
                    <Building2 className={s.inputIcon} />
                    <input
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      placeholder="Your business name"
                      className={s.inputField}
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className={s.inputLabel}>Email</label>
              <div className={s.inputWrapper}>
                <Mail className={s.inputIcon} />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={s.inputField}
                />
              </div>
            </div>

            {isRegister && (
              <div className={s.otpContainer}>
                <label className={s.otpLabel}>Email verification code</label>
                <div className={s.otpGrid}>
                  <input
                    name="emailOtp"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={form.emailOtp}
                    onChange={handleChange}
                    className={s.otpField}
                    placeholder="Enter 6-digit code"
                    autoComplete="one-time-code"
                    pattern="[0-9]*"
                  />
                  {otpVerified ? (
                    <button
                      type="button"
                      disabled
                      className={s.otpVerifiedButton}
                    >
                      <BadgeCheck className={s.otpVerifiedIcon} />
                      Verified
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={sendOtp}
                      disabled={otpLoading || !form.email || otpCooldown > 0}
                      className={s.otpButton}
                    >
                      {otpLoading
                        ? "Sending..."
                        : otpCooldown > 0
                          ? `Resend code (${otpCooldown}s)`
                          : otpSentTo === form.email.trim().toLowerCase()
                            ? "Resend code"
                            : "Send code"}
                    </button>
                  )}
                </div>
              </div>
            )}

            <div>
              <label className={s.inputLabel}>Password</label>
              <div className={s.inputWrapper}>
                <Lock className={s.inputIcon} />
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={s.inputField}
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className={s.submitBtn}>
              {loading
                ? "Please wait..."
                : isRegister
                  ? "Create account"
                  : "Log in"}
              <ArrowRight className={s.submitIcon} />
            </button>

            {message && <p className={s.message}>{message}</p>}
          </form>

          <button
            type="button"
            onClick={() => {
              setMode(isRegister ? "login" : "register");
              setMessage("");
            }}
            className={s.toggleMode}
          >
            {isRegister
              ? "Already have an account? Log in"
              : "Need an account? Register"}
          </button>
        </section>
     