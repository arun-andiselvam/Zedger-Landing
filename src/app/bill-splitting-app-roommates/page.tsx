import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import MonthlyRecurringBookContent from "./MonthlyRecurringBookContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bill Splitting App for Roommates - Split Rent & Utilities",
  description:
    "Split rent, utilities and recurring bills with roommates in one shared Book. No bank linking, works offline. Free plan available - download Zedger today.",
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
    url: "https://www.tryzedger.com/bill-splitting-app-roommates",
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
    canonical: "https://www.tryzedger.com/bill-splitting-app-roommates",
  },
};

export default function MonthlyRecurringBookPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="The Best Utility Bill Splitting App for Roommates"
        subtitle={
          <>
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            is the bill splitting app for roommates. Whether you want a splitting bill app, an app for bill splitting, or one of the apps for splitting bills with flatmates, Zedger is the app for splitting the bill on electricity, WiFi, gas, water, and rent — no spreadsheet needed.
          </>
        }
      />
      <MonthlyRecurringBookContent />
      <Footer />
    </main>
  );
}
