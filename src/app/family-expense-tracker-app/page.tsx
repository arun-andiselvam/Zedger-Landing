import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import FamilyBookContent from "./FamilyBookContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Family Expense Tracker App - Track Family Expenses Together | Zedger",
  description:
    "Zedger is the best family expense tracker app to track family expenses together. Free expense tracking app for family with shared ledger books. The ultimate family expense manager app.",
  keywords: [
    "family expense tracker app",
    "family expense tracker",
    "expense tracking app for family",
    "family expense manager app",
    "best family expense tracker app",
    "app to track family expenses",
    "family expense tracker app free",
    "best expense tracking app for family",
    "household expenses",
    "family budget",
    "family finances",
  ],
  openGraph: {
    title: "Best Family Expense Tracker App - Track Family Expenses | Zedger",
    description:
      "Zedger is the best family expense tracker app. Track family expenses together with our free expense tracking app for family.",
    url: "https://tryzedger.com/family-expense-tracker-app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger - Best Family Expense Tracker App",
      },
    ],
  },
  twitter: {
    title: "Best Family Expense Tracker App - Track Family Expenses | Zedger",
    description:
      "Zedger is the best family expense tracker app. Free expense tracking app for family.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/family-expense-tracker-app",
  },
};

export default function FamilyBookPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="The Best Family Expense Tracker App"
        subtitle={
          <>
            Looking for an app to track family expenses?{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            is the best expense tracking app for family — a modern shared ledger that brings transparency and simplicity to household finances.
          </>
        }
      />
      <FamilyBookContent />
      <Footer />
    </main>
  );
}
