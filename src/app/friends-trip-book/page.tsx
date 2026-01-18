import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import FriendsTripBookContent from "./FriendsTripBookContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friends Trip Book - Split Trip Costs Without Splitting Friendships",
  description:
    "Track and split travel expenses effortlessly with friends. From road trips to destination getaways, Zedger Trip Book handles the math so you can focus on making memories.",
  keywords: [
    "split trip expenses",
    "travel expense tracker",
    "group trip spending",
    "friends trip calculator",
    "vacation expense splitter",
    "road trip costs",
    "travel money sharing",
    "trip expense app",
    "group travel budget",
  ],
  openGraph: {
    title: "Friends Trip Book - Split Trip Costs Without Splitting Friendships | Zedger",
    description:
      "Track and split travel expenses effortlessly with friends. Handle the math so you can focus on making memories.",
    url: "https://tryzedger.com/friends-trip-book",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger Friends Trip Book - Split Travel Expenses",
      },
    ],
  },
  twitter: {
    title: "Friends Trip Book - Split Trip Costs Without Splitting Friendships | Zedger",
    description:
      "Track and split travel expenses effortlessly with friends. No more post-trip money drama.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/friends-trip-book",
  },
};

export default function FriendsTripBookPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="Split Trip Costs Without Splitting Friendships"
        subtitle={
          <>
            Group trips are amazing until it&apos;s time to split the bill. The{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            Trip Book tracks every expense in real-time, so you can focus on creating memories instead of counting receipts.
          </>
        }
      />
      <FriendsTripBookContent />
      <Footer />
    </main>
  );
}
