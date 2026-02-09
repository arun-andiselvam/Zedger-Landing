import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Zedger - Learn how we collect, use, and protect your personal information when using our shared expense tracking app.",
  keywords: [
    "zedger privacy policy",
    "expense app privacy",
    "data protection",
    "user privacy",
  ],
  openGraph: {
    title: "Privacy Policy | Zedger",
    description:
      "Learn how Zedger collects, uses, and protects your personal information.",
    url: "https://www.tryzedger.com/privacy-policy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger Privacy Policy",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy | Zedger",
    description:
      "Learn how Zedger collects, uses, and protects your personal information.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.tryzedger.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2, 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Zedger. Zedger (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the &quot;Service&quot;).
            </p>
            <p className="text-gray-600">
              By using Zedger, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information that you provide directly to us and information that is automatically collected when you use our Service.</p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
              <li><strong>Account Information:</strong> When you create an account, we collect your phone number, name, and email address.</li>
              <li><strong>Profile Information:</strong> You may choose to add a profile picture to personalize your account.</li>
              <li><strong>Expense Data:</strong> Information about shared expenses, payments, settlements, and ledger books you create or participate in.</li>
              <li><strong>Communications:</strong> When you contact us for support or feedback, we collect the information you provide in those communications.</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information.</li>
              <li><strong>Push Notification Tokens:</strong> To deliver notifications about your shared expenses and account activity.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Service, including features used and actions taken.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Device Permissions</h2>
            <p className="text-gray-600 mb-4">Zedger may request the following device permissions:</p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">3.1 Camera Access</h3>
            <p className="text-gray-600 mb-4">
              We request camera access to allow you to take photos of receipts and capture profile pictures. Photos are only captured when you explicitly choose to use this feature. We do not access your camera in the background or without your active participation.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">3.2 Photo Library Access</h3>
            <p className="text-gray-600 mb-4">
              We may request access to your photo library to allow you to select existing photos for receipts or profile pictures. We only access photos you specifically select.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">3.3 Notifications</h3>
            <p className="text-gray-600">
              We request permission to send push notifications to keep you informed about expense updates, payment reminders, and activity in your shared ledger books.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>To provide, maintain, and improve our Service</li>
              <li>To create and manage your account</li>
              <li>To process and track shared expenses and settlements</li>
              <li>To send you notifications about activity in your ledger books</li>
              <li>To respond to your comments, questions, and support requests</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To analyze usage patterns and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">5.1 With Other Users</h3>
            <p className="text-gray-600 mb-4">
              When you participate in shared ledger books, your name, profile picture, and expense information will be visible to other members of that book.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">5.2 Service Providers</h3>
            <p className="text-gray-600 mb-4">
              We may share information with third-party service providers who perform services on our behalf, such as cloud hosting, analytics, and customer support.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">5.3 Legal Requirements</h3>
            <p className="text-gray-600">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">Our Service uses the following third-party services:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Firebase (Google):</strong> For authentication, database, and push notifications. Please refer to <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
              <li><strong>Analytics Services:</strong> To understand how users interact with our app and improve our Service.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is transmitted using secure encryption (HTTPS/TLS) and stored on protected servers. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Data Retention</h2>
            <p className="text-gray-600">
              We retain your personal information for as long as your account is active or as needed to provide you with our Service. You may request deletion of your account and associated data at any time by contacting us. We may retain certain information as required by law or for legitimate business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information.</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format.</li>
              <li><strong>Opt-out:</strong> Opt out of receiving promotional communications.</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where consent is the legal basis.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-gray-600">
              Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-600">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We take appropriate safeguards to ensure that your personal information remains protected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes. Changes are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">13. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
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
