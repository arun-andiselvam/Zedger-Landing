import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for Zedger - Read our terms of service, usage policies, and user guidelines for our shared expense tracking app.",
  keywords: [
    "zedger terms",
    "terms of service",
    "user agreement",
    "expense app terms",
  ],
  openGraph: {
    title: "Terms and Conditions | Zedger",
    description:
      "Read the terms of service and usage policies for Zedger shared expense tracking app.",
    url: "https://www.tryzedger.com/terms-and-conditions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger Terms and Conditions",
      },
    ],
  },
  twitter: {
    title: "Terms and Conditions | Zedger",
    description:
      "Read the terms of service and usage policies for Zedger.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.tryzedger.com/terms-and-conditions",
  },
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-gray-500 mb-8">Last updated: January 13, 2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Zedger. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Zedger mobile application and related services (collectively, the &quot;Service&quot;) provided by Zedger (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            </p>
            <p className="text-gray-600">
              By downloading, installing, or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-4">
              Zedger is a mobile application that enables users to create shareable ledger books for tracking and managing shared expenses. The Service allows you to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Create and manage personal and shared ledger books</li>
              <li>Track expenses with family, friends, roommates, and groups</li>
              <li>Record payments and settlements</li>
              <li>Invite others to collaborate on shared expense tracking</li>
              <li>View expense summaries and balances</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Subscription Terms</h2>
            <p className="text-gray-600 mb-4">
              Zedger offers subscription-based plans to access premium features. By subscribing, you agree to the following:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Subscriptions are auto-renewable</li>
              <li>Payment will be charged to your App Store or Google Play account at confirmation of purchase</li>
              <li>Subscription automatically renews unless cancelled at least 24 hours before the end of the current period</li>
              <li>Manage or cancel your subscription in your App Store or Google Play account settings</li>
              <li>No refunds are provided for any unused portion of a subscription period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Plans Available</h2>
            <p className="text-gray-600 mb-4">
              Zedger offers the following subscription plans:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 font-semibold">Free Plan</p>
                <p className="text-gray-600">4 Books &amp; 10 Members</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 font-semibold">Pro Plan</p>
                <p className="text-gray-600">Length: 1 Month</p>
                <p className="text-gray-600">Price: ₹99/month</p>
                <p className="text-gray-600">20 Books &amp; 50 Members</p>
                <p className="text-gray-500 text-sm italic">Automatically renews unless cancelled</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 font-semibold">VIP Plan</p>
                <p className="text-gray-600">Length: 1 Month</p>
                <p className="text-gray-600">Price: ₹199/month</p>
                <p className="text-gray-600">Unlimited Books &amp; Unlimited Members</p>
                <p className="text-gray-500 text-sm italic">Automatically renews unless cancelled</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Cancellation</h2>
            <p className="text-gray-600">
              You can cancel your subscription anytime through your App Store or Google Play account settings. Cancellation will take effect at the end of the current billing period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Account Registration</h2>
            <p className="text-gray-600 mb-4">
              To use certain features of the Service, you must create an account. When creating an account, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You must be at least 13 years old to create an account and use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. User Conduct</h2>
            <p className="text-gray-600 mb-4">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Interfere with or disrupt the Service or its servers</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Collect or harvest user information without consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. User Content</h2>
            <p className="text-gray-600 mb-4">
              You retain ownership of any content you submit, post, or display through the Service (&quot;User Content&quot;). By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and process your content solely for the purpose of providing the Service.
            </p>
            <p className="text-gray-600">
              You are solely responsible for your User Content and the consequences of sharing it. You represent that you have all necessary rights to submit your User Content and that it does not violate any third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Shared Ledger Books</h2>
            <p className="text-gray-600 mb-4">
              When you create or join a shared ledger book, you acknowledge that:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Other members of the ledger book can view your name, profile picture, and expense entries</li>
              <li>You are responsible for the accuracy of expense information you enter</li>
              <li>Zedger does not guarantee the accuracy of information entered by other users</li>
              <li>Disputes between users regarding expenses or settlements are to be resolved between the parties involved</li>
              <li>Zedger is not responsible for facilitating actual monetary transactions between users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The Service and its original content (excluding User Content), features, and functionality are owned by Zedger and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-600">
              You may not copy, modify, distribute, sell, or lease any part of our Service or included software, nor may you reverse engineer or attempt to extract the source code of that software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Third-Party Services</h2>
            <p className="text-gray-600">
              The Service may contain links to or integrate with third-party websites, services, or applications. We are not responsible for the content, privacy policies, or practices of any third-party services. Your use of third-party services is at your own risk and subject to the terms and conditions of those services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">12. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-600">
              We do not warrant that the Service will be uninterrupted, secure, or error-free, that defects will be corrected, or that the Service is free of viruses or other harmful components.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">13. Limitation of Liability</h2>
            <p className="text-gray-600">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZEDGER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">14. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify, defend, and hold harmless Zedger and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Service, your User Content, or your violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">15. Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-gray-600">
              Upon termination, your right to use the Service will immediately cease. You may also delete your account at any time through the app settings or by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">16. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">17. Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Zedger operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved in the courts of that jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">18. Severability</h2>
            <p className="text-gray-600">
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">19. Privacy Policy</h2>
            <p className="text-gray-600">
              Your privacy is important to us. Please review our Privacy Policy at{" "}
              <a href="https://www.tryzedger.com/privacy-policy" className="text-primary hover:underline">
                https://www.tryzedger.com/privacy-policy
              </a>{" "}
              to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">20. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 font-medium">Zedger Support</p>
              <p className="text-gray-600">Email: <a href="mailto:info@tryzedger.com" className="text-primary hover:underline">info@tryzedger.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
