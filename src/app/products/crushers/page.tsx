import React from "react";
import type { Metadata } from "next";
import { PRODUCTS_DATA } from "../data";
import CategoryHubView from "@/components/products/CategoryHubView";

export const metadata: Metadata = {
  title: "Crushers - Heavy-Duty Jaw, Cone & Roll Crushing Equipment | Mewar Hi-Tech",
  description:
    "Explore Mewar Hi-Tech's robust industrial stone crushers including Double Toggle Oil, Single Toggle Grease, Cone, and Roll Crushers engineered for mining, quarrying, and high-tonnage aggregate production.",
  alternates: {
    canonical: "https://www.mewarhitech.com/products/crushers",
  },
  openGraph: {
    title: "Crushers - Heavy-Duty Jaw, Cone & Roll Crushing Equipment | Mewar Hi-Tech",
    description:
      "Explore Mewar Hi-Tech's robust industrial stone crushers including Double Toggle Oil, Single Toggle Grease, Cone, and Roll Crushers engineered for mining, quarrying, and high-tonnage aggregate production.",
    url: "https://www.mewarhitech.com/products/crushers",
    siteName: "Mewar Hi-Tech Engineering Ltd",
    images: [
      {
        url: "https://www.mewarhitech.com/images/hero_crusher.webp",
        width: 1200,
        height: 630,
        alt: "Mewar Hi-Tech Heavy Duty Industrial Crushers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crushers - Heavy-Duty Jaw, Cone & Roll Crushing Equipment | Mewar Hi-Tech",
    description:
      "Explore Mewar Hi-Tech's robust industrial stone crushers including Double Toggle Oil, Single Toggle Grease, Cone, and Roll Crushers engineered for mining, quarrying, and high-tonnage aggregate production.",
    images: ["https://www.mewarhitech.com/images/hero_crusher.webp"],
  },
};

export default function CrushersCategoryPage() {
  const crusherProducts = PRODUCTS_DATA.filter((p) => p.category === "Crushers");

  return (
    <CategoryHubView
      slug="crushers"
      categoryName="Crushers"
      title="Heavy-Duty Industrial Stone & Mineral Crushers"
      subtitle="Engineered with three decades of metallurgy excellence to deliver uncompromising primary, secondary, and tertiary reduction across demanding quarry and mining operations."
      description="Mewar Hi-Tech (KINGSON) manufactures an industry-leading lineup of heavy-duty crushers. Built around our proprietary 'Crushing without Rubbing' technology and automated continuous lubrication, our jaw, cone, and roll crushers minimize operating cost per ton while maximizing throughput on abrasive granites, iron ore, limestone, and hard rock."
      heroImage="/images/hero_crusher.webp"
      stats={[
        { label: "Capacity Range", value: "10 - 520 TPH" },
        { label: "Max Feed Gape", value: "Up to 1500 mm" },
        { label: "Design Life", value: "25+ Years" },
        { label: "Global Deployments", value: "1,500+ Units" },
      ]}
      advantages={[
        {
          title: "Crushing Without Rubbing",
          desc: "Our double toggle jaw geometry applies direct perpendicular compressive force, eliminating wear-inducing friction on jaw plates and doubling manganese liner lifespan.",
        },
        {
          title: "Continuous Forced Lubrication",
          desc: "Totally enclosed coupling oil pump systems provide continuous high-pressure lubrication, enabling non-stop 24/7 operation in extreme dust and ambient heat.",
        },
        {
          title: "High-Tensile Cast Steel Construction",
          desc: "Stress-relieved heavy steel fabrication with cast steel swing jaws and massive forged eccentric shafts built to withstand uncrushable tramp material shock loads.",
        },
        {
          title: "Precise Hydraulic CSS Adjustment",
          desc: "Fast, ergonomic closed-side setting adjustments minimize changeover downtime and deliver pinpoint output gradations for downstream processing.",
        },
      ]}
      applications={[
        "Hard Rock & Granite Quarrying",
        "Iron Ore, Bauxite & Mineral Mining",
        "Railway Ballast Production",
        "Concrete Aggregate Crushing Plants",
        "Slag & Ferroalloy Crushing",
      ]}
      products={crusherProducts}
    />
  );
}
