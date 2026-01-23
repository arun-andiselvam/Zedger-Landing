import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import FriendsTripBookContent from "./FriendsTripBookContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Travel Expense Splitter - App for Sharing Expenses with Friends | Zedger",
  description:
    "Zedger is the best travel expense splitter and app for sharing expenses with friends. One of the top apps for bill splitting on trips — track and split travel expenses effortlessly.",
  keywords: [
    "travel expense splitter",
    "app for sharing expenses with friends",
    "apps for bill splitting",
    "split trip expenses",
    "travel expense tracker",
    "group trip spending",
    "friends trip calculator",
    "vacation expense splitter",
    "trip expense app",
    "group travel budget",
  ],
  openGraph: {
    title: "Best Travel Expense Splitter - App for Sharing Expenses with Friends | Zedger",
    description:
      "The best travel expense splitter and app for sharing expenses with friends. Split trip costs effortlessly.",
    url: "https://tryzedger.com/travel-expense-split-app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger - Best Travel Expense Splitter",
      },
    ],
  },
  twitter: {
    title: "Best Travel Expense Splitter | Zedger",
    description:
      "The best app for sharing expenses with friends. One of the top apps for bill splitting on trips.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/travel-expense-split-app",
  },
};

export default function FriendsTripBookPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="The Best Travel Expense Splitter for Friends"
        subtitle={
          <>
            Looking for an app for sharing expenses with friends?{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            is one of the best apps for bill splitting — a travel expense splitter that tracks every expense in real-time.
          </>
        }
      />
      <FriendsTripBookContent />
      <Footer />
    </main>
  );
}
