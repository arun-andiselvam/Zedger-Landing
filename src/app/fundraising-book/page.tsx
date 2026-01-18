import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import FundraisingBookContent from "./FundraisingBookContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money Collection Book - Collect Group Funds Without the Chaos",
  description:
    "Track birthday gifts, farewell funds, event contributions and more. See who paid, who didn't, and hit your target without awkward follow-ups. Free group money collection tracker.",
  keywords: [
    "group money collection",
    "birthday gift collection app",
    "farewell fund tracker",
    "event contribution tracker",
    "office collection app",
    "wedding gift fund",
    "group payment tracker",
    "money pool app",
    "contribution tracker",
    "fundraising tracker",
  ],
  openGraph: {
    title: "Money Collection Book - Collect Group Funds Without the Chaos | Zedger",
    description:
      "Track birthday gifts, farewell funds, event contributions and more. Hit your target without awkward follow-ups.",
    url: "https://tryzedger.com/fundraising-book",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger Money Collection Book - Group Fund Tracker",
      },
    ],
  },
  twitter: {
    title: "Money Collection Book - Collect Group Funds Without the Chaos | Zedger",
    description:
      "Track who paid, who didn't, and hit your target without awkward follow-ups.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/fundraising-book",
  },
};

export default function FundraisingBookPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="Collect Money From Groups Without the Chaos"
        subtitle={
          <>
            Birthday gifts, farewell funds, event contributions — the{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            Money Collection Book tracks who paid, who didn&apos;t, and helps you hit your target without awkward follow-ups.
          </>
        }
      />
      <FundraisingBookContent />
      <Footer />
    </main>
  );
}
