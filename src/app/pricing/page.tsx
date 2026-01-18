import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import PricingContent from "./PricingContent";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pricing - Fair Pricing for Real People | Zedger",
  description:
    "Zedger pricing plans: Free, Pro, and VIP tiers. Start free with 4 books and 5 members. Upgrade for unlimited history, more members, advanced reports, and ad-free experience.",
  keywords: [
    "zedger pricing",
    "expense tracker pricing",
    "shared ledger app cost",
    "family expense app pricing",
    "group expense tracker plans",
    "free expense app",
    "expense splitting app price",
    "roommate expense app cost",
  ],
  openGraph: {
    title: "Pricing - Fair Pricing for Real People | Zedger",
    description:
      "Start free, upgrade when you need more. No hidden fees, no surprise charges. Plans starting at $0/month.",
    url: "https://tryzedger.com/pricing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger Pricing Plans",
      },
    ],
  },
  twitter: {
    title: "Pricing - Fair Pricing for Real People | Zedger",
    description:
      "Start free, upgrade when you need more. Plans starting at $0/month.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/pricing",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I try Pro before paying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Start a 7-day free trial of Pro — no card required. Downgrade anytime.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I downgrade from Pro to Free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Books beyond the limit become view-only. Members beyond 5 per book can still view but can't add expenses. History older than 6 months becomes archived. No data is deleted.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a refund policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Refunds are handled through Google Play or App Store based on their respective policies. Contact us if you need assistance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer student discounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Students with a valid .edu email get 50% off Pro. Email support@tryzedger.com with proof.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay annually?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Save 25% with annual billing: Pro at $8.99/year, VIP at $17.99/year.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <SubHeroSection
        title="Fair Pricing for Real People"
        subtitle={
          <>
            <Link href="/" className="underline underline-offset-2 hover:text-primary-foreground">
              Zedger
            </Link>{" "}
            is free to start and free to use for most people. We only charge when you need more — more members, more books, more history.
          </>
        }
      />
      <PricingContent />
      <Footer />
    </main>
  );
}
