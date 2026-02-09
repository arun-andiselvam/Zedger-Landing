import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import ContactContent from "./ContactContent";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us | Zedger",
  description:
    "Get in touch with the Zedger team. We'd love to hear from you - whether you have questions, feedback, or need support.",
  keywords: [
    "contact zedger",
    "zedger support",
    "zedger help",
    "expense tracker support",
  ],
  openGraph: {
    title: "Contact Us | Zedger",
    description:
      "Get in touch with the Zedger team. We'd love to hear from you.",
    url: "https://www.tryzedger.com/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Zedger",
      },
    ],
  },
  twitter: {
    title: "Contact Us | Zedger",
    description:
      "Get in touch with the Zedger team. We'd love to hear from you.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.tryzedger.com/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Zedger",
  description: "Get in touch with the Zedger team for questions, feedback, or support.",
  url: "https://www.tryzedger.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Zedger",
    email: "support@tryzedger.com",
    url: "https://www.tryzedger.com",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Header />
      <SubHeroSection
        title="Contact Us"
        subtitle="Have questions or feedback? We'd love to hear from you."
      />
      <ContactContent />
      <Footer />
    </main>
  );
}
