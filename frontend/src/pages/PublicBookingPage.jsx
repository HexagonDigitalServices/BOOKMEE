import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createPublicBooking,
  getPublicBusiness,
  getPublicSlots,
  requestPublicBookingOtp,
  verifyPublicBookingOtp,
} from "../api/public";
import {
  Clock,
  CalendarDays,
  User,
  Mail,
  Lock,
  BadgeCheck,
  Shield,
  Check,
} from "lucide-react";
import greenBanner from "../assets/green.png";
import purpleBanner from "../assets/purple.png";
import redBanner from "../assets/red.png";
import whiteBanner from "../assets/white.png";
import yellowBanner from "../assets/yellow.png";
import C1 from "../assets/icons/C1.png";
import C2 from "../assets/icons/C2.png";
import C3 from "../assets/icons/C3.png";
import C4 from "../assets/icons/C4.png";
import C5 from "../assets/icons/C5.png";
import C6 from "../assets/icons/C6.png";
import C7 from "../assets/icons/C7.png";
import C8 from "../assets/icons/C8.png";
import A1 from "../assets/avatars/A1.png";
import A2 from "../assets/avatars/A2.png";
import A3 from "../assets/avatars/A3.png";
import A4 from "../assets/avatars/A4.png";
import A5 from "../assets/avatars/A5.png";
import A6 from "../assets/avatars/A6.png";
import A7 from "../assets/avatars/A7.png";
import A8 from "../assets/avatars/A8.png";
import A9 from "../assets/avatars/A9.png";
import A10 from "../assets/avatars/A10.png";
import A11 from "../assets/avatars/A11.png";
import A12 from "../assets/avatars/A12.png";
import A13 from "../assets/avatars/A13.png";
import A15 from "../assets/avatars/A15.png";
import A16 from "../assets/avatars/A16.png";
import {
  getBrandThemeStyle,
  publicBookingPageStyles as s,
} from "../assets/dummyStyles";

const today = new Date().toISOString().slice(0, 10);

const ICON_MAP = {
  "C1.png": C1,
  "C2.png": C2,
  "C3.png": C3,
  "C4.png": C4,
  "C5.png": C5,
  "C6.png": C6,
  "C7.png": C7,
  "C8.png": C8,
};

const AVATAR_MAP = {
  "A1.png": A1,
  "A2.png": A2,
  "A3.png": A3,
  "A4.png": A4,
  "A5.png": A5,
  "A6.png": A6,
  "A7.png": A7,
  "A8.png": A8,
  "A9.png": A9,
  "A10.png": A10,
  "A11.png": A11,
  "A12.png": A12,
  "A13.png": A13,
  "A15.png": A15,
  "A16.png": A16,
};

const themeBannerImages = {
  emerald: greenBanner,
  indigo: purpleBanner,
  rose: redBanner,
  amber: yellowBanner,
  slate: whiteBanner,
};

export default function PublicBookingPage() {
  const { slug } = useParams();
  const [business, setBusiness] = useState(null);
  const [services, setServices] = useState([]);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [message, setMessage] = useState("");
  const [calendarUrl, setCalendarUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpSentTo, setOtpSentTo] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpCooldown, setOtpCooldown] = useState(0);
  const [form, setForm] = useState({
    serviceId: "",
    date: today,
    customerName: "",
    customerEmail: "",
    customerAvatar: "A1.png",
    emailOtp: "",
    notes: "",
  });

  const selectedService = useMemo(
    () => services.find((service) => service._id === form.serviceId),
    [services, form.serviceId],
  );

  const brandTheme = getBrandThemeStyle(business?.brandTheme);
  const accent = business?.brandAccent || brandTheme.accent;
  const brandStyleVars = {
    "--brand-accent": accent,
    "--brand-panel": brandTheme.panel,
  };
  const bannerImage = themeBannerImages[business?.brandTheme] || greenBanner;

  useEffect(() => {
    if (otpCooldown <= 0) return;
    const interval = setInterval(() => {
      setOtpCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [otpCooldown]);

  useEffect(() => {
    const loadBusiness = async () => {
      try {
        const { data } = await getPublicBusiness(slug);
        setBusiness(data.business);
        setServices(data.services || []);
        setForm((prev) => ({
          ...prev,
          serviceId: data.services?.[0]?._id || "",
        }));
      } catch (error) {
        setMessage(
          error.response?.data?.message || "Could not load booking page",
        );
      }
    };

    loadBusiness();
  }, [slug]);

  useEffect(() => {
    const loadSlots = async () => {
      if (!form.serviceId || !form.date) return;
      setSelectedSlot(null);

      try {
        const { data } = await getPublicSlots(slug, {
          serviceId: form.serviceId,
          date: form.date,
        });
        setSlots(data.slots || []);
      } catch (error) {
        setSlots([]);
        setMessage(error.response?.data?.message || "Could not load slots");
      }
    };

    loadSlots();
  }, [slug, form.serviceId, form.date]);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    if (name === "emailOtp") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 6);
      setForm((prev) => ({ ...prev, emailOtp: digitsOnly }));
      if (otpVerified) setOtpVerified(false);

      if (digitsOnly.length === 6 && form.customerEmail) {
        try {
          await verifyPublicBookingOtp(slug, {
            customerEmail: form.customerEmail,
            emailOtp: digitsOnly,
          });
          setOtpVerified(true);
          setMessage("Email verified successfully.");
        } catch (error) {
          setOtpVerified(false);
          setMessage(error.response?.data?.message || "Invalid OTP");
        }
      }
      return;
    }
    if (name === "customerEmail") {
      setOtpVerified(false);
      setOtpSentTo("");
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendBookingOtp = async () => {
    if (!form.customerEmail) {
      setMessage("Enter your email first");
      return;
    }

    setOtpLoading(true);
    setMessage("");

    try {
      await requestPublicBookingOtp(slug, form.customerEmail);
      setOtpSentTo(form.customerEmail.trim().toLowerCase());
      setOtpCooldown(30);
      setMessage("Verification code sent to your email");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Could not send verification code",
      );
    } finally {
      setOtpLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedSlot) {
      setMessage("Choose a time slot");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const { data } = await createPublicBooking(slug, {
        ...form,
        startTime: selectedSlot.startTime,
        endTime: selectedSlot.endTime,
      });

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }

      setMessage(
        data.customerCalendarUrl
          ? "Your booking is confirmed. You can add it to Google Calendar below."
          : "Your booking is confirmed",
      );
      setCalendarUrl(data.customerCalendarUrl || "");
      setSelectedSlot(null);
      setOtpVerified(true);
    } catch (error) {
      setMessage(error.response?.data?.message || "Could not create booking");
    } finally {
      setLoading(false);
    }
  };

  const renderIcon = (service, isActive, customColor) => {
    return (
      <div
        className={s.serviceIconBase}
        style={{ boxShadow: isActive ? `0 0 0 2px ${customColor}` : "none" }}
      >
        <img
          src={ICON_MAP[service.icon || "C1.png"]}
          alt={service.name}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className={s.pageContainer} style={brandStyleVars}>
      <main className={s.mainGrid}>
        {/* LEFT: Business sidebar */}
        <section className={s.leftPanel}>
          <div className={s.bgImageContainer}>
            <img
              src={bannerImage}
              alt="3D Visual"
              className={s.bgImage}
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom right, transparent, black 60%)",
                maskImage:
                  "linear-gradient(to bottom right, transparent, black 60%)",
              }}
            />
            <div className={s.bgImageOverlay}></div>
          </div>
          <div className={s.bgFadeOverlay}></div>

          <div className={s.leftContent}>
            <div className={s.businessInfoRow}>
              <div className={s.businessAvatar}>
                {(business?.businessName || business?.name || "M")
                  .slice(0, 1)
                  .toUpperCase()}
              </div>
              <p className={s.bookOnlineLabel}>Book online</p>
            </div>

            <h1 className={s.businessName}>
              {business?.businessName || business?.name || "Mental Clinic"}
            </h1>
            {business?.businessDescription && (
              <p className={s.businessDesc}>{business.businessDescription}</p>
            )}
          </div>

          <div className={s.serviceList}>
            {services.map((service) => {
              const isActive = form.serviceId === service._id;

              return (
                <button
                  key={service._id}
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({ ...prev, serviceId: service._id }))
                  }
                  className={
                    isActive ? s.serviceBtnActive : s.serviceBtnInactive
                  }
                >
                  {renderIcon(service, isActive, accent)}
                  <div className={s.serviceTextBlock}>
                    <span
                      className={
                        isActive ? s.serviceNameActive : s.serviceNameInactive
                      }
                    >
                      {service.name}
                    </span>
                    <p
                      className={
                        isActive
                          ? s.serviceDetailActive
                          : s.serviceDetailInactive
                      }
                    >
                      {service.duration} min · ₹
                      {Number(service.price).toLocaleString()}
                    </p>
                    {service.description && (
                      <p
                        className={
                          isActive ? s.serviceDescActive : s.serviceDescInactive
                        }
                      >
                        {service.description}
                      </p>
                    )}
                  </div>

                  <div
                    className={`${s.selectorIconBase} ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundColor: accent }}
                  >
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* RIGHT: Booking form */}
        <section className={s.rightPanel}>
          <h2 className={s.bookingTitle}>Choose your appointment</h2>

          {selectedService ? (
            <p className={s.selectedServiceInfo}>
              <Clock className="h-4 w-4" style={{ color: accent }} />
              <span style={{ color: accent }}>{selectedService.name}</span>
              <span className="text-slate-300">·</span>
              {selectedService.duration} minutes
              <span className="text-slate-300">·</span>₹
              {Number(selectedService.price).toLocaleString()}
            </p>
          ) : (
            <p className={s.noServiceText}>Select a service to begin</p>
          )}

          <form onSubmit={handleSubmit} className={s.form}>
            {/* Date */}
            <div>
              <label className={s.inputLabel}>Date</label>
              <div className={s.inputWrapper}>
                <CalendarDays className={s.inputIcon} />
                <input
                  type="date"
                  name="date"
                  min={today}
                  value={form.date}
                  onChange={handleChange}
                  className={s.dateInput}
                  style={{ "--tw-ring-color": accent }}
                  onFocus={(e) => {
                    e.target.style.borderColor = accent;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                  }}
                />
              </div>
            </div>

            {/* Available times */}
            <div className="pt-2">
              <p className={s.inputLabel}>Available times</p>
              <div className={s.timeSlotGrid}>
                {slots.map((slot) => {
                  const isSlotSelected =
                    selectedSlot?.startTime === slot.startTime;
                  return (
                    <button
                      key={`${slot.startTime}-${slot.endTime}`}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`${s.slotBtnBase} ${
                        isSlotSelected ? s.slotBtnSelected : s.slotBtnUnselected
                      }`}
                      style={
                        isSlotSelected ? { backgroundColor: accent } : undefined
                      }
                    >
                      {slot.startTime}
                      {isSlotSelected && <BadgeCheck className="h-4 w-4" />}
                    </button>
                  );
                })}
              </div>
              {slots.length === 0 && (
                <p className={s.noSlotsText}>
                  No times available for this date.
                </p>
              )}
            </div>

            {/* Name & Email */}
            <div className={s.nameEmailGrid}>
              <div>
                <label className={s.inputLabel}>Your name</label>
                <div className={s.inputWrapper}>
                  <User className={s.inputIcon} />
                  <input
                    name="customerName"
                    value={form.customerName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={s.textInput}
                    onFocus={(e) => {
                      e.target.style.borderColor = accent;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                    }}
                  />
                </div>
              </div>
              <div>
                <label className={s.inputLabel}>Email address</label>
                <div className={s.inputWrapper}>
                  <Mail className={s.inputIcon} />
                  <input
                    name="customerEmail"
                    type="email"
                    value={form.customerEmail}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={s.emailInput}
                    onFocus={(e) => {
                      e.target.style.borderColor = accent;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* OTP */}
            <div className={s.otpBlock}>
              <label className={s.otpLabel} style={{ color: accent }}>
                Email verification code
              </label>
              <div className={s.otpRow}>
                <input
                  name="emailOtp"
                  inputMode="numeric"
                  maxLength={6}
                  value={form.emailOtp}
                  onChange={handleChange}
                  className={s.otpInput}
                  placeholder="Enter 6-digit code"
                  autoComplete="one-time-code"
                  onFocus={(e) => {
                    e.target.style.borderColor = accent;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                  }}
                />
                {otpVerified ? (
                  <button
                    type="button"
                    disabled
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold cursor-default"
                  >
                    <BadgeCheck className="w-4 h-4" />
                    Verified
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={sendBookingOtp}
                    disabled={
                      otpLoading || !form.customerEmail || otpCooldown > 0
                    }
                    className={s.otpButton}
                  >
                    {otpLoading
                      ? "Sending..."
                      : otpCooldown > 0
                        ? `Resend code (${otpCooldown}s)`
                        : otpSentTo === form.customerEmail.trim().toLowerCase()
                          ? "Resend code"
                          : "Send code"}
                  </button>
                )}
              </div>
            </div>

            {/* Avatar selector */}
            <div className="pt-2">
              <label className={s.inputLabel}>Choose your avatar</label>
              <div className={s.avatarGrid}>
                {Object.keys(AVATAR_MAP)
                  .slice(0, 15)
                  .map((avatarName) => (
                    <button
                      key={avatarName}
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          customerAvatar: avatarName,
                        }))
                      }
                      className={`${s.avatarBtnBase} ${
                        form.customerAvatar === avatarName
                          ? s.avatarBtnSelected
                          : s.avatarBtnUnselected
                      }`}
                      style={
                        form.customerAvatar === avatarName
                          ? { borderColor: accent, "--tw-ring-color": accent }
                          : undefined
                      }
                    >
                      <img
                        src={AVATAR_MAP[avatarName]}
                        alt="Customer Avatar"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
              </div>
            </div>

            {/* Notes */}
            <div className="pt-2">
              <label className={s.inputLabel}>
                Notes{" "}
                <span className="font-medium text-slate-400 ml-1">
                  (Optional)
                </span>
              </label>
              <textarea
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                placeholder="Add any notes or special requests..."
                className={s.notesTextarea}
                onFocus={(e) => {
                  e.target.style.borderColor = accent;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                }}
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className={s.submitButton}
                style={{ backgroundColor: accent }}
              >
                <Lock className="h-4.5 w-4.5" />
                {loading
                  ? "Preparing..."
                  : Number(selectedService?.price || 0) > 0
                    ? `Pay ₹${Number(selectedService.price).toLocaleString()} and Book Appointment`
                    : "Confirm booking"}
              </button>

              <p className={s.securePaymentText}>
                <Shield className="h-4 w-4 text-slate-400" />
                Secure payments powered by Stripe
              </p>
            </div>

            {message && (
              <div
                className={`${s.messageBase} ${
                  message.toLowerCase().includes("confirmed") ||
                  message.toLowerCase().includes("sent")
                    ? s.messageSuccess
                    : s.messageInfo
                }`}
              >
                {message}
              </div>
            )}

            {calendarUrl && (
              <a
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
                className={s.calendarLink}
                style={{ color: accent }}
              >
                Add to Google Calendar
              </a>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}
