
  useEffect(() => {
    const loadUser = async () => {
      if (!localStorage.getItem("token")) {
        setMessage("Please log in before editing your profile");
        return;
      }

      try {
        const { data } = await getMe();
        const nextUser = data?.user;

        if (!nextUser) {
          setMessage("Could not load profile details");
          return;
        }

        setUser(nextUser);
        setForm({
          businessName: nextUser.businessName || "Mental Clinic",
          businessDescription: nextUser.businessDescription || "",
          timezone: nextUser.timezone || "Asia/Kolkata",
          brandTheme: nextUser.brandTheme || "emerald",
          brandAccent: nextUser.brandAccent || "#6C47FF",
        });
      } catch (error) {
        setMessage(
          error.response?.data?.message || "Could not load profile details",
        );
      }
    };

    loadUser();
  }, []);

  const handleChange = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const chooseTheme = (theme) => {
    setForm((prev) => ({
      ...prev,
      brandTheme: theme.id,
      brandAccent: theme.accent,
    }));
  };

  const copyPublicLink = async () => {
    if (!publicLink) return;
    await navigator.clipboard.writeText(publicLink);
    setCopyMessage("Copied!");
    window.setTimeout(() => setCopyMessage(""), 1800);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!localStorage.getItem("token")) {
      setMessage("Please log in before editing your profile");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const { data } = await updateProfile(form);
      setUser(data.user);
      setMessage("Profile updated successfully");
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const connectGoogleCalendar = async () => {
    setConnectingCalendar(true);
    setMessage("");

    try {
      const { data } = await getGoogleConnectUrl();
      window.location.href = data.url;
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Could not start Google Calendar connection",
      );
      setConnectingCalendar(false);
    }
  };

  const getMessageBannerClass = (msg) => {
    if (!msg) return "";
    return msg.toLowerCase().includes("success") || msg.includes("updated")
      ? s.messageBannerSuccess
      : s.messageBannerError;
  };

  return (
    <AppLayout>
      <div className={s.pageLayout}>
        {/* LEFT COLUMN */}
        <div className={s.leftColumn}>
          {/* Header & Illustration */}
          <div className={s.headerRow}>
            <div className={s.headerTextBlock}>
              <h3 className={s.profileLabel}>Profile</h3>
              <h1 className={s.mainHeading}>
                Shape your{" "}
                <span className={s.headingGradientPublic}>public</span>
                <br />
                <span className={s.headingGradientBooking}>
                  booking{" "}
                  <span className={s.headingGradientBookingInner}>
                    experience
                  </span>
                </span>
              </h1>
              <p className={s.subHeading}>
                Personalize your booking page, connect your tools, and share
                your link with confidence.
              </p>
            </div>
            <div className={s.illustrationContainer}>
              <img
                src={p2Image}
                alt="Profile illustration"
                className={s.illustrationImg}
              />
            </div>
          </div>

          {/* Public Booking Link Card */}
          <div className={s.linkCard}>
            <h4 className={s.linkCardTitle}>Public booking link</h4>
            <div className={s.linkRow}>
              <div className={s.linkBar}>
                <span className={s.linkText}>{publicLink}</span>
                <button
                  onClick={copyPublicLink}
                  className={s.linkCopyButtonSmall}
                >
                  <Copy className={s.iconSmall} />
                </button>
              </div>
              <button onClick={copyPublicLink} className={s.linkCopyButtonMain}>
                <Wand2 className={s.iconSmall} />
                {copyMessage || "Copy link"}
              </button>
            </div>
            <div className={s.linkLiveIndicator}>
              <BadgeCheck className={s.iconSmall} />
              <span>Your link is live and ready to share!</span>
            </div>
          </div>

          {/* Integrations Grid */}
          <div className={s.integrationsGrid}>
            {/* Stripe */}
            <div className={s.integrationCard}>
              <div className={s.integrationHeader}>
                <div className={s.integrationLogoBox}>
                  <img
                    src={stripeLogo}
                    alt="Stripe"
                    className={s.integrationLogoImg}
                  />
                </div>
                <span className={s.integrationLabel}>Stripe</span>
              </div>
              <h4 className={s.integrationStatusConfigured}>
                Configured <BadgeCheck className={s.integrationCheckIcon} />
              </h4>
              <p className={s.integrationDesc}>
                Collect payments securely via Stripe.
              </p>
              <div className={s.integrationInfoPill}>
                Platform payment gateway
              </div>
            </div>

            {/* Google Calendar */}
            <div className={s.integrationCard}>
              <div className={s.integrationHeader}>
                <div className={s.integrationLogoBox}>
                  <img
                    src={googleCalendarLogo}
                    alt="Calendar"
                    className={s.integrationLogoImg}
                  />
                </div>
                <span className={s.integrationLabel}>Calendar</span>
              </div>
              <h4 className={s.integrationStatusConnected}>
                Connected <BadgeCheck className={s.integrationCheckIcon} />
              </h4>
              <p className={s.integrationDesc}>
                Bookings will sync automatically.
              </p>
              <button
                onClick={connectGoogleCalendar}
                disabled={connectingCalendar}
                className={s.integrationManageButton}
              >
                {connectingCalendar ? "Wait..." : "Manage"}
              </button>
            </div>

            {/* Email Notifications */}
            <div className={s.integrationCard}>
              <div className={s.integrationHeader}>
                <div className={s.integrationLogoBox}>
                  <img
                    src={gmailLogo}
                    alt="Emails"
                    className={s.integrationLogoImg}
                  />
                </div>
                <span className={s.integrationLabel}>Emails</span>
              </div>
              <h4 className={s.integrationStatusConfigured}>
                Configured <BadgeCheck className={s.integrationCheckIcon} />
              </h4>
              <p className={s.integrationDesc}>
                Customers receive email updates.
              </p>
              <div className={s.integrationInfoPill}>
                Automatic booking emails
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={s.rightColumn}>
          <div className={s.formHeader}>
            <div className={s.formHeaderIcon}>
              <Users className={s.formHeaderUserIcon} />
            </div>
            <div>
              <h2 className={s.formTitle}>Business details</h2>
              <p className={s.formSubtitle}>Update your profile info</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={s.form}>
            {/* Business Name */}
            <div>
              <label className={s.inputLabel}>Business Name</label>
              <div className={s.inputWrapper}>
                <input
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  className={s.textInput}
                />
                <Globe className={s.inputIconRight} />
              </div>
            </div>

            {/* Business Description */}
            <div>
              <label className={s.inputLabel}>Business Description</label>
              <textarea
                name="businessDescription"
                value={form.businessDescription}
                onChange={handleChange}
                rows={3}
                className={s.textareaInput}
              />
            </div>

            <div className={s.twoColGrid}>
              {/* Timezone */}
              <div>
                <label className={s.inputLabel}>Timezone</label>
                <div className={s.inputWrapper}>
                  <Globe className={s.inputIconLeft} />
                  <select
                    name="timezone"
                    value={form.timezone}
                    onChange={handleChange}
                    className={s.selectInput}
                  >
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">America/New_York</option>
                  </select>
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <label className={s.inputLabel}>Accent color</label>
                <div className={s.colorInputRow}>
                  <input
                    name="brandAccent"
                    type="color"
                    value={form.brandAccent}
                    onChange={handleChange}
                    className={s.colorPicker}
                  />
                  <input
                    type="text"
                    value={form.brandAccent.toUpperCase()}
                    onChange={handleChange}
                    className={s.colorTextInput}
                  />
                </div>
              </div>
            </div>

            {/* Theme */}
            <div>
              <label className={s.inputLabel}>Theme</label>
              <div className={s.themeSwatches}>
                {brandThemeOptions.map((theme) => {
                  const isSelected = form.brandTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => chooseTheme(theme)}
                      className={
                        isSelected ? s.themeBtnActive : s.themeBtnInactive
                      }
                    >
                      <span className={`${s.themeSwatch} ${theme.swatch}`} />
                      {theme.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Save Button */}
            <button type="submit" disabled={loading} className={s.saveButton}>
              <Save className={s.saveButtonIcon} />
              {loading ? "Saving..." : "Save profile settings"}
            </button>
            {message && (
              <div
                className={`${s.messageBanner} ${getMessageBannerClass(
                  message,
                )}`}
              >
                <BadgeCheck className={s.messageBannerIcon} />
                {message}
              </div>
            )}
          </form>
        </div>

        {/* BOTTOM FULL WIDTH AREA (Preview + Customer View) */}
        <div className={s.bottomFullWidth} style={brandStyleVars}>
          {/* Public Preview Block */}
          <div className={s.previewContainer}>
            <div className={s.previewBanner}>
              <div className={s.previewBannerBg}>
                <img
                  src={previewBannerImage}
                  alt="3D Illustration"
                  className={s.previewBannerImg}
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent, black 80%)",
                    maskImage:
                      "linear-gradient(to right, transparent, black 80%)",
                  }}
                />
                <div className={s.previewBannerOverlay} />
              </div>

              <div className={s.previewBannerContent}>
                <div className={s.previewAvatarRow}>
                  <div className={s.previewAvatar}>
                    {(form.businessName || "M").slice(0, 1).toUpperCase()}
                  </div>
                  <div>
                    <div className={s.previewLabel}>Public preview</div>
                    <h2 className={s.previewTitle}>
                      {form.businessName || "Mental Clinic"}
                    </h2>
                  </div>
                </div>
                {form.businessDescription && (
                  <p className={s.previewDesc}>{form.businessDescription}</p>
                )}
              </div>
            </div>

            {/* Overlapping White feature card */}
            <div className={s.previewFeatureCard}>
              <div className={s.featureItem}>
                <div className={s.featureIconBox}>
                  <CalendarDays className={s.featureIcon} />
                </div>
                <div>
                  <h5 className={s.featureTitle}>Easy Booking</h5>
                  <p className={s.featureText}>
                    Book your session in just a few clicks.
                  </p>
                </div>
              </div>
              <div className={s.featureItem}>
                <div className={s.featureIconBox}>
                  <Shield className={s.featureIcon} />
                </div>
                <div>
                  <h5 className={s.featureTitle}>Secure Payments</h5>
                  <p className={s.featureText}>
                    Powered by Stripe for safe transactions.
                  </p>
                </div>
              </div>
              <div className={s.featureItem}>
                <div className={s.featureIconBox}>
                  <BellRing className={s.featureIcon} />
                </div>
                <div>
                  <h5 className={s.featureTitle}>Instant Updates</h5>
                  <p className={s.featureText}>
                    Get email & calendar reminders.
                  </p>
                </div>
              </div>
              <div className={s.featureItem}>
                <div className={s.featureIconBox}>
                  <Zap className={s.featureIcon} />
                </div>
                <div>
                  <h5 className={s.featureTitle}>Hassle-free</h5>
                  <p className={s.featureText}>
                    Manage bookings anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer View Section */}
          <div className={s.customerViewContainer}>
            <div className={s.customerViewLabel}>Customer view</div>

            <div className={`${s.customerViewCard} ${dynamicThemeUI.bg}`}>
              <div
                className={`${s.customerViewOverlay} ${dynamicThemeUI.gradient}`}
              />
              <div className={s.customerViewContent}>
                <div
                  className={s.customerAvatar}
                  style={{ backgroundColor: form.brandAccent }}
                >
                  {(form.businessName || "M").slice(0, 1).toUpperCase()}
                </div>
                <h3 className={s.customerName}>
                  {form.businessName || "Mental Clinic"}
                </h3>
                <div className={s.customerMeta}>
                  <span className={s.customerMetaItem}>
                    <Clock className={s.customerMetaIcon} /> 60 min
                  </span>
                  <span className={s.customerMetaItem}>
                    <IndianRupee className={s.customerMetaIcon} />{" "}
                    {form.duration || 900}
                  </span>
                </div>
                <div className={s.customerTimeslotSection}>
                  <div className={s.timeslotLabel}>Select Time</div>
                  <button
                    className={s.timeslotActiveBtn}
                    style={{ backgroundColor: form.brandAccent }}
                  >
                    10:00 AM
                  </button>
                  <button className={s.timeslotInactiveBtn}>11:30 AM</button>
                </div>
              </div>
            </div>

            <div className={s.customerViewHint}>
              <Wand2 className={s.hintIcon} />
              <span>
                Preview your public booking page.
                <br />
                Accent color applies to buttons.
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );