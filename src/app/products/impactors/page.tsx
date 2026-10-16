import React from "react";
import type { Metadata } from "next";
import { PRODUCTS_DATA } from "../data";
import CategoryHubView from "@/components/products/CategoryHubView";

export const metadata: Metadata = {
  title: "Impactors & Sand Making Machines - VSI & HSI Plants | Mewar Hi-Tech",
  description:
    "Discover Mewar Hi-Tech's Horizontal Shaft Impactors (HSI), Vertical Shaft Impactors (VSI), and Sand Making Machines designed for cubical aggregate shaping and high-spec M-sand production.",
  alternates: {
    canonical: "https://www.mewarhitech.com/products/impactors",
  },
  openGraph: {
    title: "Impactors & Sand Making Machines - VSI & HSI Plants | Mewar Hi-Tech",
    description:
      "Discover Mewar Hi-Tech's Horizontal Shaft Impactors (HSI), Vertical Shaft Impactors (VSI), and Sand Making Machines designed for cubical aggregate shaping and high-spec M-sand production.",
    url: "https://www.mewarhitech.com/products/impactors",
    siteName: "Mewar Hi-Tech Engineering Ltd",
    images: [
      {
        url: "https://www.mewarhitech.com/images/horizontal-shaft-impactor-hero.webp",
        width: 1200,
        height: 630,
        alt: "Mewar Hi-Tech High-Performance Impactors & Sand Makers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impactors & Sand Making Machines - VSI & HSI Plants | Mewar Hi-Tech",
    description:
      "Discover Mewar Hi-Tech's Horizontal Shaft Impactors (HSI), Vertical Shaft Impactors (VSI), and Sand Making Machines designed for cubical aggregate shaping and high-spec M-sand production.",
    images: ["https://www.mewarhitech.com/images/horizontal-shaft-impactor-hero.webp"],
  },
};

export default function ImpactorsCategoryPage() {
  const impactorProducts = PRODUCTS_DATA.filter((p) => p.category === "Impactors");

  return (
    <CategoryHubView
      slug="impactors"
      categoryName="Impactors"
      title="Industrial Impactors & M-Sand Making Machines"
      subtitle="Engineered for superior cubical aggregate shape, tight flakiness control, and high-yield manufactured sand production in aggregate and mining installations."
      description="Mewar Hi-Tech's Impactor series features state-of-the-art Horizontal Shaft Impactors (HSI) and Vertical Shaft Impactors (VSI). Utilizing high-velocity kinetic energy, precision rotors, and wear-resistant chromium alloys, our machines deliver cubical product shapes with flakiness indices under 15% while maximizing fine sand conversion."
      heroImage="/images/horizontal-shaft-impactor-hero.webp"
      stats={[
        { label: "Throughput Range", value: "20 - 350 TPH" },
        { label: "Flakiness Index", value: "< 15% Cubical" },
        { label: "M-Sand Output", value: "IS 383 Zone II" },
        { label: "Alloy Quality", value: "High-Chrome Blow Bars" },
      ]}
      advantages={[
        {
          title: "Superior Cubical Aggregate Sizing",
          desc: "Impact kinetic reduction breaks rocks along natural cleavage planes, yielding cubical aggregate shapes required for high-strength concrete and asphalt mix specifications.",
        },
        {
          title: "Rock-on-Rock Autogenous Crushing",
          desc: "In our VSI configurations, rock collides with rock inside the crushing chamber, cutting wear part consumption by up to 60% compared to conventional anvil crushers.",
        },
        {
          title: "Reversible High-Chrome Blow Bars",
          desc: "Multi-position, reversible wear parts engineered from metallurgical grade high-chromium white iron guarantee extended operational hours before changeover.",
        },
        {
          title: "Hydraulic Chamber Opening",
          desc: "Assisted hydraulic hood lift ensures rapid and safe inspections, blow bar rotations, and liner maintenance with minimal labor and zero crane dependence.",
        },
      ]}
      applications={[
        "Manufactured Sand (M-Sand & Plaster Sand)",
        "High-Grade Cubical Concrete Aggregates",
        "Asphalt Road Surfacing Aggregates",
        "Secondary & Tertiary Limestone Crushing",
        "Recycled Concrete & Asphalt Crushing",
      ]}
      products={impactorProducts}
    />
  );
}
