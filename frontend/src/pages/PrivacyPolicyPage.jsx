import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import logo from "../assets/logo.png";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="BookMe" className="h-8 w-auto" />
            <span className="custom-brand-font text-[22px] text-slate-900 tracking-tight">BookMe</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#F4F0FF] flex items-center justify-center">
            <Shield className="w-7 h-7 text-[#7D57F5]" />
          </div>
          <div>
            <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-slate-900 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Last updated: May 26, 2026</p>
          </div>
        </div>

        <div className="bg-white rounded-[24px] border border-slate-200 p-8 md:p-12 shadow-sm space-y-8">
          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">1. Introduction</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Welcome to BookMe ("we," "our," or "us"). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our web application and related
              services (collectively, the "Service").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">2. Information We Collect</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-600 leading-relaxed ml-2">
              <li><span className="font-semibold text-slate-700">Account Information:</span> Name, email address, business name, and profile details when you create an account.</li>
              <li><span className="font-semibold text-slate-700">Booking Information:</span> Customer names, email addresses, appointment dates and times, and service selections.</li>
              <li><span className="font-semibold text-slate-700">Payment Information:</span> Payment details are processed securely by our third-party payment processor (Stripe). We do not store your full payment card information on our servers.</li>
              <li><span className="font-semibold text-slate-700">Calendar Data:</span> When you connect Google Calendar, we access calendar event data to sync your bookings and avoid scheduling conflicts.</li>
              <li><span className="font-semibold text-slate-700">Communication Data:</span> Email addresses used for OTP verification and booking notifications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-600 leading-relaxed ml-2">
              <li>To provide, operate, and maintain the Service</li>
              <li>To process bookings, payments, and send appointment confirmations</li>
              <li>To send OTP verification codes for secure booking authentication</li>
              <li>To sync booking events with your connected Google Calendar</li>
              <li>To send booking-related email notifications to customers and service providers</li>
              <li>To improve and personalize the Service experience</li>
              <li>To detect and prevent fraudulent or unauthorized activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">4. Third-Party Services</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              We integrate with the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-600 leading-relaxed ml-2">
              <li><span className="font-semibold text-slate-700">Stripe:</span> For processing payments securely. Stripe's privacy policy governs payment data handling.</li>
              <li><span className="font-semibold text-slate-700">Google Calendar API:</span> For syncing booking events. We request only the minimum permissions needed (calendar event creation and management).</li>
              <li><span className="font-semibold text-slate-700">Gmail API:</span> For sending booking notifications and OTP verification emails through your connected Gmail account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">5. Google API Services — Limited Use Disclosure</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              BookMe's use and transfer of information received from Google APIs adheres to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noreferrer"
                className="text-[#7D57F5] font-semibold hover:underline"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements. We only use Google data to provide and improve
              the calendar synchronization and email notification features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">6. Data Security</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your
              personal data, including encryption of data in transit (HTTPS/TLS), secure token-based
              authentication, and limited access controls. However, no method of electronic
              transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">7. Data Retention</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to
              provide you with the Service. Booking records are retained for business record-keeping
              purposes. You may request deletion of your account and associated data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">8. Your Rights</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-600 leading-relaxed ml-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for data processing at any time</li>
              <li>Disconnect third-party integrations (Google Calendar, Stripe) from your profile settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">9. Cookies</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We use essential cookies and local storage tokens to maintain your authentication session.
              We do not use tracking cookies or third-party advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">10. Changes to This Policy</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              updating the "Last updated" date at the top of this page. We encourage you to review this
              Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">11. Contact Us</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              If you have questions or concerns about this Privacy Policy, please contact us at:{" "}
              <a
                href="mailto:support@hexagondigitalservices.com"
                className="text-[#7D57F5] font-semibold hover:underline"
              >
                support@hexagondigitalservices.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
