import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AccordionSection from "@/components/landing/AccordionSection";
import CTASection from "@/components/landing/CTASection";
import AccessSection from "@/components/landing/AccessSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AccordionSection />
      <CTASection />
      <AccessSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
