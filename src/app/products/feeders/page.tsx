import React from "react";
import type { Metadata } from "next";
import { PRODUCTS_DATA } from "../data";
import CategoryHubView from "@/components/products/CategoryHubView";

export const metadata: Metadata = {
  title: "Vibro Feeders & Grizzly Feeders | Mewar Hi-Tech",
  description:
    "Explore Mewar Hi-Tech's robust Vibro Feeders and Single Shaft Grizzly Feeders designed for uniform primary crusher feeding, continuous throughput, and scalping fines.",
  alternates: {
    canonical: "https://www.mewarhitech.com/products/feeders",
  },
  openGraph: {
    title: "Vibro Feeders & Grizzly Feeders | Mewar Hi-Tech",
    description:
      "Explore Mewar Hi-Tech's robust Vibro Feeders and Single Shaft Grizzly Feeders designed for uniform primary crusher feeding, continuous throughput, and scalping fines.",
    url: "https://www.mewarhitech.com/products/feeders",
    siteName: "Mewar Hi-Tech Engineering Ltd",
    images: [
      {
        url: "https://www.mewarhitech.com/images/vibro-feeder-hero.webp",
        width: 1200,
        height: 630,
        alt: "Mewar Hi-Tech Heavy Duty Vibro & Grizzly Feeders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibro Feeders & Grizzly Feeders | Mewar Hi-Tech",
    description:
      "Explore Mewar Hi-Tech's robust Vibro Feeders and Single Shaft Grizzly Feeders designed for uniform primary crusher feeding, continuous throughput, and scalping fines.",
    images: ["https://www.mewarhitech.com/images/vibro-feeder-hero.webp"],
  },
};

export default function FeedersCategoryPage() {
  const feederProducts = PRODUCTS_DATA.filter((p) => p.category === "Feeders");

  return (
    <CategoryHubView
      slug="feeders"
      categoryName="Feeders"
      title="Heavy-Duty Vibrating & Grizzly Feeders"
      subtitle="Engineered for smooth, high-tonnage primary dump feeding, aggressive fines scalping, and reliable hopper surge protection in crushing plants."
      description="Mewar Hi-Tech (KINGSON) Vibro Feeders and Single Shaft Grizzly Feeders deliver uniform, controlled material flow into primary and secondary crushers. By bypassing undersized rock and natural dirt through tapered grizzly bars, our feeders reduce wear on downstream crushers and increase overall crushing plant throughput by up to 25%."
      heroImage="/images/vibro-feeder-hero.webp"
      stats={[
        { label: "Feed Capacities", value: "50 - 600 TPH" },
        { label: "Pan Construction", value: "Hardox / AR Liners" },
        { label: "Grizzly Taper", value: "Stepped Self-Cleaning" },
        { label: "Drive System", value: "Dual Vibratory Motors" },
      ]}
      advantages={[
        {
          title: "Stepped Self-Cleaning Grizzly Bars",
          desc: "Tapered cantilever grizzly bars separate dirt and quarry fines before they reach the jaw crusher, preventing liner wear and eliminating wedge-blocking.",
        },
        {
          title: "High-Amplitude Linear Vibration",
          desc: "Self-synchronizing unbalance vibratory motors produce strong directional linear throws, reliably conveying heavy boulder dumps even with sticky wet clay mixtures.",
        },
        {
          title: "Replaceable Wear-Resistant Liners",
          desc: "Feed trough base and side walls are protected by bolted Hardox / high-manganese abrasion-resistant replaceable liner plates for infinite structural lifetime.",
        },
        {
          title: "Heavy-Duty Coil Spring Suspension",
          desc: "High-capacity helical steel isolation springs isolate dynamic vibration from the plant chassis and civil foundations, preventing structural fatigue.",
        },
      ]}
      applications={[
        "Primary Dump Hopper Stations (Truck / Loader Dumps)",
        "Quarry Scalping Ahead of Primary Jaw Crushers",
        "Surge Bin & Stockpile Reclaim Feeding",
        "Secondary Feeder Stations for Cone & Impactor Circuits",
        "Demolition Aggregate & Heavy Ore Infeed Control",
      ]}
      products={feederProducts}
    />
  );
}
