import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import FamilyBookContent from "./FamilyBookContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Book - Shared Expense Tracking for Families",
  description:
    "Track household expenses together with your family. Zedger Family Book is the modern shared ledger app that brings transparency and simplicity to family finances.",
  keywords: [
    "family expense tracking",
    "shared ledger app",
    "household expenses",
    "family budget",
    "expense sharing",
    "family finances",
    "joint expenses",
  ],
  openGraph: {
    title: "Family Book - Shared Expense Tracking for Families | Zedger",
    description:
      "Track household expenses together with your family. The modern shared ledger app that brings transparency and simplicity to family finances.",
    url: "https://tryzedger.com/family-book",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger Family Book - Shared Family Expense Tracking",
      },
    ],
  },
  twitter: {
    title: "Family Book - Shared Expense Tracking for Families | Zedger",
    description:
      "Track household expenses together with your family. The modern shared ledger app for family finances.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/family-book",
  },
};

export default function FamilyBookPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="The Kitchen Table Ledger, Digitized."
        subtitle={
          <>
            Remember when families kept a notebook to track household expenses?{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            is the modern shared ledger app that brings back that simplicity.
          </>
        }
      />
      <FamilyBookContent />
      <Footer />
    </main>
  );
}
