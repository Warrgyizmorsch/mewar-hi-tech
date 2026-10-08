import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import PlaceholderSection from "@/components/shared/PlaceholderSection";

export const metadata = {
  title: "Photo & Video Gallery | Mewar Hi-Tech",
  description: "See photos and videos of Mewar Hi-Tech machines, plant installations, the Udaipur factory and crushers working in the field.",
  alternates: {
    canonical: "https://www.mewarhitech.com/gallery",
  },
  openGraph: {
    title: "Photo & Video Gallery | Mewar Hi-Tech",
    description: "See photos and videos of Mewar Hi-Tech machines, plant installations, the Udaipur factory and crushers working in the field.",
    url: "https://www.mewarhitech.com/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo & Video Gallery | Mewar Hi-Tech",
    description: "See photos and videos of Mewar Hi-Tech machines, plant installations, the Udaipur factory and crushers working in the field.",
  },
};

export default function Gallery() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="Gallery"
          title="Our Work in Action"
          description="A visual archive of manufacturing, installations, and machinery in the field."
          image="/images/backgorund.webp"
        />
        <PlaceholderSection pageName="Gallery" />
      </main>
      <Footer />
    </div>
  );
}
