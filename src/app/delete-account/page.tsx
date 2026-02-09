import { Metadata } from "next";
import Link from "next/link";
import DeleteAccountForm from "./DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "Request to delete your Zedger account and all associated data. We process deletion requests within 48 hours.",
  keywords: [
    "delete zedger account",
    "remove account",
    "data deletion",
    "account removal",
  ],
  openGraph: {
    title: "Delete Account | Zedger",
    description:
      "Request to delete your Zedger account and all associated data.",
    url: "https://www.tryzedger.com/delete-account",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Delete Zedger Account",
      },
    ],
  },
  twitter: {
    title: "Delete Account | Zedger",
    description:
      "Request to delete your Zedger account and all associated data.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.tryzedger.com/delete-account",
  },
};

export default function DeleteAccount() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Delete Account</h1>
          <p className="text-gray-500 mb-8">Request to delete your Zedger account and data</p>

          <DeleteAccountForm />
        </div>
      </div>
    </div>
  );
}
