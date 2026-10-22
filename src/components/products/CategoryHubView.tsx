"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import CTASection from "@/components/shared/CTASection";

export interface CategoryHubProps {
  slug: string;
  categoryName: string;
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  stats?: { label: string; value: string }[];
  advantages?: { title: string; desc: string }[];
  applications?: string[];
  products: {
    slug: string;
    name: string;
    subCategory?: string;
    introText: string;
    mainImage: string;
    heroImage?: string;
    gallery?: string[];
    features?: string[];
  }[];
}

const CATEGORIES_NAV = [
  { name: "Crushers", slug: "crushers" },
  { name: "Impactors", slug: "impactors" },
  { name: "Screens", slug: "screens" },
  { name: "Feeders", slug: "feeders" },
];

const SHORT_DESCRIPTIONS: Record<string, string> = {
  "jaw-crusher": "Heavy-duty industrial crushing and material handling system designed for high reduction ratios and maximum continuous uptime.",
  "double-toggle-oil-jaw-crusher": "Heavy-duty primary crushing for high-capacity ore and rock reduction.",
  "single-toggle-grease-jaw-crusher": "High-efficiency primary jaw crusher engineered for lower power utilization.",
  "double-toggle-grease-jaw-crusher": "Robust crushing units built for tough aggregate and mining applications.",
  "cone-crusher": "Precision secondary crushing engineered for consistent particle shape.",
  "roll-crusher": "Efficient compression crushing for medium-hard and soft materials.",
  "horizontal-shaft-impactor": "High-reduction secondary impactor delivering cubical aggregates with tight flakiness control.",
  "vertical-shaft-impactor": "Tertiary impact crusher for high-spec manufactured sand and aggregate shaping.",
  "sand-making-machine": "Advanced sand maker producing high-grade concrete sand from crushed rock.",
  "vibrating-screen": "High-frequency screening for precise material grading and separation.",
  "sand-washer": "Advanced washing systems delivering clean, high-quality manufactured sand.",
  "belt-conveyor": "Durable belt conveyors engineered for continuous material transport.",
  "vibro-feeder": "Controlled, uniform feeding of bulk material into crushing circuits.",
  "single-shaft-feeders": "Reliable grizzly feeding and scalping in crushing and screening plants.",
};

export default function CategoryHubView({
  slug,
  categoryName,
  title,
  description = "",
  products,
}: CategoryHubProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mewarhitech.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.mewarhitech.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: `https://www.mewarhitech.com/products/${slug}`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: `https://www.mewarhitech.com/products/${slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((prod, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: prod.name,
        url: `https://www.mewarhitech.com/products/${prod.slug}`,
      })),
    },
  };

  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Header />

      <main className="flex-grow pt-[72px] lg:pt-[80px]">
        {/* Category Header & Filter Navigation */}
        <section className="bg-card border-b border-border py-6">
          <Container>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Breadcrumb & Category Title */}
              <div>
                <nav
                  className="flex items-center text-xs text-muted-foreground flex-wrap gap-2 mb-2"
                  aria-label="Breadcrumb"
                >
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/products" className="hover:text-primary transition-colors">
                    Products
                  </Link>
                  <span>/</span>
                  <span className="text-foreground font-semibold">{categoryName}</span>
                </nav>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#0A1A3B] dark:text-white">
                  {categoryName}
                </h1>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                  Categories:
                </span>
                {CATEGORIES_NAV.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition whitespace-nowrap ${
                      cat.slug === slug
                        ? "bg-primary text-black font-extrabold shadow-sm"
                        : "bg-muted text-foreground/80 hover:text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Products Grid Section - Matching ProductsSection Card Design */}
        <section className="section-padding bg-background">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => {
                const shortDesc =
                  SHORT_DESCRIPTIONS[product.slug] ||
                  product.introText.slice(0, 90) + "...";

                return (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="block group h-full"
                  >
                    <article className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between h-full">
                      <div>
                        {/* Machine Image Container */}
                        <div className="overflow-hidden h-56 bg-muted p-4 relative flex items-center justify-center">
                          <Image
                            src={product.mainImage || product.heroImage || product.gallery?.[0] || "/images/jaw-crusher-site-1.webp"}
                            alt={`${product.name} industrial machine`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>

                        {/* Card Title & Concise Description */}
                        <div className="p-6 text-left">
                          <h3 className="common-heading text-lg text-foreground font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                            {shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom CTA */}
                      <div className="px-6 pb-6 pt-2 text-left">
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-foreground group-hover:text-primary transition-colors duration-200 uppercase tracking-wider">
                          <span>View Details</span>
                          <ArrowUpRight
                            size={16}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                          />
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
