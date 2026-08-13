"use client";

import React, { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye, LayoutGrid } from "lucide-react";
import Container from "@/components/ui/Container";

// Generate project images lists matching local assets
const STATIONERY_IMAGES = Array.from(
  { length: 29 },
  (_, i) => `/images/stationery-projects/stationery-projects-${i + 1}.jpg`
);
const TRACK_IMAGES = Array.from(
  { length: 9 },
  (_, i) => `/images/track-mounted-mobile-projects/track-mounted-mobile-projects-${i + 1}.jpg`
);
const WHEEL_IMAGES = Array.from(
  { length: 21 },
  (_, i) => `/images/wheel-mounted-mobile-projects/wheel-mounted-mobile-projects-${i + 1}.jpg`
);

interface ProjectConfig {
  title: string;
  description: string;
  images: string[];
}

const PROJECTS_CONFIG: Record<string, ProjectConfig> = {
  "stationery-projects": {
    title: "Stationery Projects",
    description: "Heavy-duty stationary crushing, screening, and size-reduction plant installations deployed globally.",
    images: STATIONERY_IMAGES,
  },
  "track-mounted-mobile-projects": {
    title: "Track Mounted Mobile Projects",
    description: "High-mobility track-mounted crushing and screening plants engineered for rapid setup and rough terrain.",
    images: TRACK_IMAGES,
  },
  "wheel-mounted-mobile-projects": {
    title: "Wheel Mounted Mobile Projects",
    description: "Heavy-duty wheel-mounted chassis configurations combining crushers, screeners, and feeders into high-output mobile plant systems.",
    images: WHEEL_IMAGES,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const project = PROJECTS_CONFIG[slug];

  if (!project) {
    notFound();
  }

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Navigation handlers for lightbox
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? project.images.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === project.images.length - 1 ? 0 : prev! + 1));
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, slug]);

  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        {/* Page Hero Header */}
        <PageHero
          label="Featured Installations"
          title={project.title}
          description={project.description}
          image="/images/backgorund.webp"
        />

        {/* Project Gallery Grid */}
        <section className="section-padding bg-background">
          <Container>
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    INSTALLATION PORTFOLIO
                  </span>
                </div>
                <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                  {project.title} <span className="text-primary inline-block">GALLERY</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted/40 border border-border/80 px-4 py-2 rounded-xl shrink-0 self-start md:self-end">
                <LayoutGrid size={14} className="text-primary" />
                <span>Showing {project.images.length} Images</span>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.images.map((src, idx) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                  onClick={() => setLightboxIndex(idx)}
                  className="relative rounded-xl overflow-hidden border border-border bg-card aspect-[4/3] cursor-pointer group shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={src}
                    alt={`${project.title} installation ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                      <Eye size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      {/* Interactive Lightbox / Modal Carousel */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top Bar with counter and close btn */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Image {lightboxIndex + 1} of {project.images.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Image display */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.images[lightboxIndex]}
                alt={`Expanded expanded view ${lightboxIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/5"
              />
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
