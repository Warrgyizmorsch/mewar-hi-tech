import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import IndustriesGrid from "@/components/shared/IndustriesGrid";
import PlaceholderSection from "@/components/shared/PlaceholderSection";

export const metadata = {
  title: "Quarrying, Mining & Recycling Applications | Mewar Hi-Tech",
  description: "See how Mewar Hi-Tech crushing and screening equipment serves quarrying, mining, recycling and road and infrastructure work.",
  alternates: {
    canonical: "https://www.mewarhitech.com/industries",
  },
  openGraph: {
    title: "Quarrying, Mining & Recycling Applications | Mewar Hi-Tech",
    description: "See how Mewar Hi-Tech crushing and screening equipment serves quarrying, mining, recycling and road and infrastructure work.",
    url: "https://www.mewarhitech.com/industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quarrying, Mining & Recycling Applications | Mewar Hi-Tech",
    description: "See how Mewar Hi-Tech crushing and screening equipment serves quarrying, mining, recycling and road and infrastructure work.",
  },
};

export default function Industries() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Industries"
          title="Sectors We Power"
          description="Our machinery serves critical industries across mining, construction, energy, and infrastructure."
          image="/images/backgorund.webp"
        />
        <IndustriesGrid />
        <PlaceholderSection pageName="Industries" />
      </main>
      <Footer />
    </div>
  );
}
