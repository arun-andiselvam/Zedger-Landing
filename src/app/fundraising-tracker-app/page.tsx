import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import FundraisingBookContent from "./FundraisingBookContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Fundraising Tracker App - Fundraising Goal Tracker | Zedger",
  description:
    "Zedger is the best fundraising tracker app and fundraising goal tracker. Perfect event planning budget tracker for birthday gifts, farewell funds, and group collections.",
  keywords: [
    "fundraising tracker app",
    "fundraising goal tracker",
    "event planning budget tracker",
    "group money collection",
    "birthday gift collection app",
    "farewell fund tracker",
    "event contribution tracker",
    "office collection app",
    "money pool app",
    "contribution tracker",
  ],
  openGraph: {
    title: "Best Fundraising Tracker App - Fundraising Goal Tracker | Zedger",
    description:
      "The best fundraising tracker app for birthday gifts, farewell funds, and event contributions. Track your fundraising goal easily.",
    url: "https://tryzedger.com/fundraising-tracker-app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger - Best Fundraising Tracker App",
      },
    ],
  },
  twitter: {
    title: "Best Fundraising Tracker App | Zedger",
    description:
      "The best fundraising goal tracker for group collections. Track who paid and hit your target.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/fundraising-tracker-app",
  },
};

export default function FundraisingBookPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="The Best Fundraising Tracker App"
        subtitle={
          <>
            Looking for a fundraising goal tracker?{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            is the ultimate event planning budget tracker — track who paid, who didn&apos;t, and hit your target without awkward follow-ups.
          </>
        }
      />
      <FundraisingBookContent />
      <Footer />
    </main>
  );
}
