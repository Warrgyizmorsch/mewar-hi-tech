import React from "react";
import type { Metadata } from "next";


import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ClientLogosMarquee from "@/components/home/ClientLogosMarquee";
import VerifiedTrustStrip from "@/components/home/VerifiedTrustStrip";
import WelcomeTeaser from "@/components/home/WelcomeTeaser";
import WhyKingsonSection from "@/components/home/WhyKingsonSection";
import ExploreMachinesSection from "@/components/home/ExploreMachinesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SectorGrid from "@/components/home/SectorGrid";
import VideoShowcase from "@/components/home/VideoShowcase";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TeamSection from "@/components/home/TeamSection";
import AboutTeaser from "@/components/home/AboutTeaser";

import FlagshipProductsGrid from "@/components/home/FlagshipProductsGrid";

export const metadata = {
  title: "Crusher Manufacturer in India | Mewar Hi-Tech",
  description: "Mewar Hi-Tech makes jaw crushers, cone crushers, screens, feeders and sand making machines in Udaipur, Rajasthan. Request a quote today.",
  alternates: {
    canonical: "https://www.mewarhitech.com/",
  },
  openGraph: {
    title: "Crusher Manufacturer in India | Mewar Hi-Tech",
    description: "Mewar Hi-Tech makes jaw crushers, cone crushers, screens, feeders and sand making machines in Udaipur, Rajasthan. Request a quote today.",
    url: "https://www.mewarhitech.com/",
    siteName: "Mewar Hi-Tech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/slider/about-mewar-hi-tech1.jpg",
        width: 1200,
        height: 630,
        alt: "Mewar Hi-Tech Crushing Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crusher Manufacturer in India | Mewar Hi-Tech",
    description: "Mewar Hi-Tech makes jaw crushers, cone crushers, screens, feeders and sand making machines in Udaipur, Rajasthan. Request a quote today.",
    images: ["/images/slider/about-mewar-hi-tech1.jpg"],
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <main>

        {/* 1. Hero: BUILT TO CRUSH. MADE TO LAST. */}
        <HeroSection />

        {/* 2. Client Partner Logos Marquee */}
        <ClientLogosMarquee />

        {/* 3. Verified Certification & Trust Strip (ISO 9001:2008, #1 Supplier, Leading Provider) */}
        <VerifiedTrustStrip />

        {/* 4. Welcome Teaser: copy and stacked index image collage */}
        <WelcomeTeaser />

        {/* 5. Why Kingson: Machinery, Infrastructure, Project cards */}
        <WhyKingsonSection />

        {/* 6. Explore Our Machines: 4 category expanding cards */}
        <ExploreMachinesSection />

        {/* 7. Why Choose Us: 4 pillar trust cards with section header */}
        <WhyChooseUs />

        {/* 8. Find Your Perfect Machine + 3D Experience */}
        <SectorGrid />

        {/* 9. Heavy Engineering Video Showcase */}
        <VideoShowcase />

        {/* 10. Featured Case Studies: Success stories grid matching reference UI */}
        <CaseStudiesSection />

        {/* 11. Verified Client Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 13. Management Team: Executive leadership profiles */}
        <TeamSection />

        {/* 14. Our Impact: Stats + Gold Trophy */}
        <AboutTeaser />

        {/* 16. Technical Downloads Center & Video Popup */}
        <FlagshipProductsGrid />
      </main>
      <Footer />
    </div>
  );
}
