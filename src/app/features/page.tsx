import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import FeaturesContent from "./FeaturesContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - Everything You Need for Shared Money Management",
  description:
    "Discover all Zedger features: Family Book, Trip Book, Monthly Recurring, Money Collection. Track expenses, smart splitting, real-time sync, and more. Free shared ledger app.",
  keywords: [
    "expense tracking features",
    "shared ledger app",
    "expense splitting app",
    "family finance app",
    "trip expense tracker",
    "money collection app",
    "roommate expense app",
    "group expense features",
    "multi-currency expense tracker",
    "offline expense app",
  ],
  openGraph: {
    title: "Features - Everything You Need for Shared Money Management | Zedger",
    description:
      "Discover all Zedger features for families, roommates, travelers, and groups. Track, split, and settle expenses effortlessly.",
    url: "https://tryzedger.com/features",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger Features - Shared Ledger App",
      },
    ],
  },
  twitter: {
    title: "Features - Everything You Need for Shared Money Management | Zedger",
    description:
      "Discover all Zedger features for families, roommates, travelers, and groups.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/features",
  },
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="Every Feature You Need. Nothing You Don't."
        subtitle={
          <>
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            is built for real-life money management — families, roommates, travelers, and groups. Here&apos;s everything under the hood.
          </>
        }
      />
      <FeaturesContent />
      <Footer />
    </main>
  );
}
