import React from "react";
import type { Metadata } from "next";
import { PRODUCTS_DATA } from "../data";
import CategoryHubView from "@/components/products/CategoryHubView";

export const metadata: Metadata = {
  title: "Vibrating Screens, Sand Washers & Conveyors | Mewar Hi-Tech",
  description:
    "Explore circular motion vibrating screens, high-recovery sand washing plants, and overland belt conveyors engineered for precise aggregate sizing and silt classification by Mewar Hi-Tech.",
  alternates: {
    canonical: "https://www.mewarhitech.com/products/screens",
  },
  openGraph: {
    title: "Vibrating Screens, Sand Washers & Conveyors | Mewar Hi-Tech",
    description:
      "Explore circular motion vibrating screens, high-recovery sand washing plants, and overland belt conveyors engineered for precise aggregate sizing and silt classification by Mewar Hi-Tech.",
    url: "https://www.mewarhitech.com/products/screens",
    siteName: "Mewar Hi-Tech Engineering Ltd",
    images: [
      {
        url: "https://www.mewarhitech.com/images/vibrating-screen-hero.webp",
        width: 1200,
        height: 630,
        alt: "Mewar Hi-Tech Heavy Duty Screening & Washing Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibrating Screens, Sand Washers & Conveyors | Mewar Hi-Tech",
    description:
      "Explore circular motion vibrating screens, high-recovery sand washing plants, and overland belt conveyors engineered for precise aggregate sizing and silt classification by Mewar Hi-Tech.",
    images: ["https://www.mewarhitech.com/images/vibrating-screen-hero.webp"],
  },
};

export default function ScreensCategoryPage() {
  const screenProducts = PRODUCTS_DATA.filter((p) => p.category === "Screens");

  return (
    <CategoryHubView
      slug="screens"
      categoryName="Screens"
      title="Heavy-Duty Vibrating Screens, Washers & Handling"
      subtitle="Engineered for high-capacity multi-fraction material classification, efficient silt desliming, and reliable bulk material handling across processing plants."
      description="Mewar Hi-Tech designs circular throw vibrating screens, bucket-wheel sand washers, and heavy-duty conveyor systems. Built with huck-bolted side frames, heavy-duty spherical roller bearings, and customizable deck options (wire mesh, perforated plate, or polyurethane), our classification systems ensure precise product grading with zero blinding."
      heroImage="/images/vibrating-screen-hero.webp"
      stats={[
        { label: "Deck Options", value: "2 to 4 Decks" },
        { label: "Screening Capacity", value: "Up to 400 TPH" },
        { label: "Washing Efficiency", value: "< 3% Silt Content" },
        { label: "Bearing Design", value: "Self-Aligning Roller" },
      ]}
      advantages={[
        {
          title: "Circular Throw Motion",
          desc: "Optimal circular throw generates positive material stratification, keeping screen openings clean and eliminating pegging or blinding even in damp, sticky aggregates.",
        },
        {
          title: "Huck-Bolted Frame Integrity",
          desc: "Cold-riveted and huck-bolted side plates completely eliminate localized weld stress fractures, ensuring structural reliability under extreme repetitive vibrational stress.",
        },
        {
          title: "High-Recovery Bucket Sand Washing",
          desc: "Slow-turning bucket wheel with integrated dewatering screen separates deleterious silt and clay particles while reclaiming valuable 75-150 micron fine sand fractions.",
        },
        {
          title: "Modular Deck Versatility",
          desc: "Compatible with tensioned woven wire cloth, perforated steel plates, and snap-in polyurethane modular panels for rapid changeovers tailored to exact fraction specs.",
        },
      ]}
      applications={[
        "Multi-Fraction Aggregate Classification (10mm, 20mm, 40mm)",
        "M-Sand Washing, Desliming & Dewatering",
        "Quarry Scalping Ahead of Secondary Plants",
        "Overland Bulk Material Transfer & Stockpiling",
        "Demolition Aggregate & Road Scraping Screening",
      ]}
      products={screenProducts}
    />
  );
}
