import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import MonthlyRecurringBookContent from "./MonthlyRecurringBookContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Recurring Book - Split Rent, Bills & Shared Expenses",
  description:
    "Automatically track and split recurring expenses with roommates and flatmates. Rent, utilities, groceries — the Monthly Recurring Book handles it all without the awkward reminders.",
  keywords: [
    "split rent app",
    "roommate expense tracker",
    "shared bills app",
    "recurring expense splitting",
    "flatmate expenses",
    "utility bill splitter",
    "shared living expenses",
    "monthly expense tracker",
  ],
  openGraph: {
    title: "Monthly Recurring Book - Split Rent, Bills & Shared Expenses | Zedger",
    description:
      "Automatically track and split recurring expenses with roommates and flatmates. No more awkward reminders or mental math.",
    url: "https://tryzedger.com/monthly-recurring-book",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger Monthly Recurring Book - Split Shared Expenses",
      },
    ],
  },
  twitter: {
    title: "Monthly Recurring Book - Split Rent, Bills & Shared Expenses | Zedger",
    description:
      "Automatically track and split recurring expenses with roommates and flatmates. No more awkward reminders.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/monthly-recurring-book",
  },
};

export default function MonthlyRecurringBookPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="Split Rent, Bills & Groceries — Without the Awkward Reminders"
        subtitle={
          <>
            Living with roommates or flatmates? The Monthly Recurring Book from{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            automatically tracks who owes what, every single month.
          </>
        }
      />
      <MonthlyRecurringBookContent />
      <Footer />
    </main>
  );
}
