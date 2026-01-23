import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import MonthlyRecurringBookContent from "./MonthlyRecurringBookContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Bill Splitting App for Roommates - Split Rent & Utilities | Zedger",
  description:
    "Zedger is the best bill splitting app for roommates. An automated bill splitting app to split bills with roommates, track rent and utilities, and manage shared subscriptions. The ultimate roommate bill splitter.",
  keywords: [
    "bill splitting app for roommates",
    "app to split bills with roommates",
    "roommate bill splitter",
    "rent and utility tracker",
    "monthly expense manager",
    "shared subscription tracker",
    "automated bill splitting app",
    "apartment expense ledger",
    "split rent app",
    "roommate expense tracker",
    "flatmate expenses",
  ],
  openGraph: {
    title: "Best Bill Splitting App for Roommates | Zedger",
    description:
      "The best app to split bills with roommates. Automated bill splitting for rent, utilities, and shared subscriptions.",
    url: "https://tryzedger.com/bill-splitting-app-for-roommates",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger - Best Bill Splitting App for Roommates",
      },
    ],
  },
  twitter: {
    title: "Best Bill Splitting App for Roommates | Zedger",
    description:
      "The best app to split bills with roommates. Automated bill splitting for rent and utilities.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/bill-splitting-app-for-roommates",
  },
};

export default function MonthlyRecurringBookPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="The Best Bill Splitting App for Roommates"
        subtitle={
          <>
            Looking for an app to split bills with roommates?{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            is the ultimate roommate bill splitter — an automated bill splitting app that tracks rent, utilities, and shared subscriptions.
          </>
        }
      />
      <MonthlyRecurringBookContent />
      <Footer />
    </main>
  );
}
