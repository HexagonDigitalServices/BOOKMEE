import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import logo from "../assets/logo.png";

export default function TermsOfServicePage() {
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
            <FileText className="w-7 h-7 text-[#7D57F5]" />
          </div>
          <div>
            <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-slate-900 leading-tight">
              Terms of Service
            </h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Last updated: May 26, 2026</p>
          </div>
        </div>

        <div className="bg-white rounded-[24px] border border-slate-200 p-8 md:p-12 shadow-sm space-y-8">
          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              By accessing or using BookMe (the "Service"), you agree to be bound by these Terms of
              Service ("Terms"). If you do not agree to these Terms, you may not access or use the
              Service. These Terms apply to all visitors, users, and others who access or use the
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">2. Description of Service</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              BookMe is an online appointment scheduling and booking management platform. The Service
              allows business owners ("Providers") to create booking pages, manage services and
              availability, accept payments, and communicate with their customers ("Clients"). Clients
              can discover available appointment slots, book services, and receive confirmations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">3. User Accounts</h2>
            <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-600 leading-relaxed ml-2">
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for safeguarding your account credentials and for all activities under your account.</li>
              <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">4. Booking & Payments</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              By using the booking and payment features, you agree to the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-600 leading-relaxed ml-2">
              <li>All payments are processed securely through Stripe. BookMe does not directly handle or store credit card information.</li>
              <li>Providers set their own service prices and are responsible for the accuracy of those prices.</li>
              <li>A platform fee may be deducted from each transaction as outlined in the Provider's dashboard.</li>
              <li>Refund policies are managed by individual Providers. BookMe facilitates the payment process but is not responsible for disputes between Providers and Clients.</li>
              <li>Booking cancellations and rescheduling are subject to the Provider's policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">5. Third-Party Integrations</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              The Service integrates with third-party platforms to enhance functionality:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-600 leading-relaxed ml-2">
              <li><span className="font-semibold text-slate-700">Google Calendar:</span> Optionally connect your Google Calendar to automatically sync booking events. You may disconnect at any time from your Profile settings.</li>
              <li><span className="font-semibold text-slate-700">Gmail:</span> Used to send booking confirmations, cancellation notices, and OTP verification emails to customers.</li>
              <li><span className="font-semibold text-slate-700">Stripe:</span> Required for processing payments. By using payment features, you also agree to Stripe's Terms of Service.</li>
            </ul>
            <p className="text-[15px] text-slate-600 leading-relaxed mt-3">
              We are not responsible for the availability, reliability, or policies of any third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">6. Acceptable Use</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-600 leading-relaxed ml-2">
              <li>Violate any applicable laws, rules, or regulations</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Engage in any conduct that restricts or inhibits any other user from using the Service</li>
              <li>Use the Service for any fraudulent, deceptive, or misleading purposes</li>
              <li>Attempt to gain unauthorized access to other users' accounts or data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">7. Intellectual Property</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              The Service and its original content (excluding content provided by users), features, and
              functionality are and will remain the exclusive property of BookMe and Hexagon Digital
              Services. The Service is protected by copyright, trademark, and other applicable laws.
              You are granted a limited, non-exclusive, non-transferable license to use the Service for
              its intended purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">8. Limitation of Liability</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              To the maximum extent permitted by applicable law, BookMe and its affiliates, officers,
              directors, employees, and agents shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not limited to loss of profits,
              data, use, or other intangible losses, resulting from your access to or use of (or
              inability to access or use) the Service, even if we have been advised of the possibility
              of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">9. Disclaimer of Warranties</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any
              kind, whether express or implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, non-infringement, or course of
              performance. We do not warrant that the Service will function uninterrupted, secure, or
              error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">10. Termination</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We may terminate or suspend your account and bar access to the Service immediately,
              without prior notice or liability, for any reason whatsoever, including without limitation
              if you breach these Terms. Upon termination, your right to use the Service will cease
              immediately. You may also terminate your account at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">11. Changes to Terms</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion.
              If a revision is material, we will provide at least 30 days' notice prior to any new terms
              taking effect. What constitutes a material change will be determined at our sole discretion.
              By continuing to access or use the Service after those revisions become effective, you
              agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">12. Governing Law</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of India, without
              regard to its conflict of law provisions. Any disputes arising from these Terms or the
              Service shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">13. Contact Us</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              If you have questions about these Terms, please contact us at:{" "}
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
