"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { ArrowRight, Box, Compass, Layers } from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";

const PROJECT_CATEGORIES = [
  {
    slug: "stationery-projects",
    title: "Stationery Projects",
    description: "Global stationary crushing and size-reduction plants with heavy engineering solutions.",
    image: "/images/stationery-projects/stationery-projects-1.jpg",
    count: 29,
    icon: Layers,
  },
  {
    slug: "track-mounted-mobile-projects",
    title: "Track Mounted Mobile Projects",
    description: "Highly versatile track-mounted crushers and screeners built for rough mining fields.",
    image: "/images/track-mounted-mobile-projects/track-mounted-mobile-projects-1.jpg",
    count: 9,
    icon: Compass,
  },
  {
    slug: "wheel-mounted-mobile-projects",
    title: "Wheel Mounted Mobile Projects",
    description: "Chassis wheel-integrated high-output mobile crushers and screen assemblies.",
    image: "/images/wheel-mounted-mobile-projects/wheel-mounted-mobile-projects-1.jpg",
    count: 21,
    icon: Box,
  },
];

export default function ProjectsLandingPage() {
  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        {/* Page Hero Header */}
        <PageHero
          label="Our Operations"
          title="Featured Engineering Projects"
          description="Explore our complete line of stationary and mobile plant installations active across mining, quarrying, and recycling sites."
          image="/images/backgorund.webp"
        />

        {/* Categories Section */}
        <section className="section-padding bg-background">
          <Container>
            <div className="max-w-3xl mb-12 text-center md:text-left mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  PORTFOLIO CLASSIFICATION
                </span>
              </div>
              <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                PROJECT <span className="text-primary inline-block">INSTALLATIONS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROJECT_CATEGORIES.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300 group"
                  >
                    {/* Image Header wrapper */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur border border-border text-[11px] font-bold uppercase tracking-wider text-foreground px-3 py-1 rounded-full">
                        {category.count} Images
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col justify-between gap-6 text-left">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary">
                          <Icon size={16} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            Mewar Portfolio
                          </span>
                        </div>
                        <h3 className="common-heading text-xl font-bold text-foreground">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed font-semibold">
                          {category.description}
                        </p>
                      </div>

                      <Link href={`/projects/${category.slug}`} className="block">
                        <BlobButton variant="primary" className="!w-full !px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2">
                          <span>Browse Gallery</span>
                          <ArrowRight size={14} />
                        </BlobButton>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
