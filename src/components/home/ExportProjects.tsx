"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Maximize2,
  CheckCircle2,
  Award,
} from "lucide-react";
import Container from "../ui/Container";

interface ExportProjectItem {
  id: number;
  src: string;
  title: string;
  location: string;
  capacity: string;
  tag: string;
}

const EXPORT_PROJECTS_DATA: ExportProjectItem[] = [
  {
    id: 1,
    src: "/images/export-projects-1.jpg",
    title: "250 TPH Complete Primary & Secondary Plant",
    location: "Dar es Salaam, Tanzania",
    capacity: "250 TPH",
    tag: "African Turnkey",
  },
  {
    id: 2,
    src: "/images/export-projects-2.jpg",
    title: "Heavy Duty Mining Screen Installation",
    location: "Mwanza, Tanzania",
    capacity: "300 TPH",
    tag: "Mining Sector",
  },
  {
    id: 3,
    src: "/images/export-projects-3.jpg",
    title: "Turnkey Gold Ore Crushing Installation",
    location: "Geita, Tanzania",
    capacity: "200 TPH",
    tag: "Gold Mining",
  },
  {
    id: 4,
    src: "/images/export-projects-4.jpg",
    title: "Aggregate Processing & Washing Complex",
    location: "Arusha, Tanzania",
    capacity: "180 TPH",
    tag: "Quarrying",
  },
  {
    id: 5,
    src: "/images/export-projects-5.jpg",
    title: "Primary Jaw & Secondary Cone Setup",
    location: "Dodoma, Tanzania",
    capacity: "220 TPH",
    tag: "Heavy Infrastructure",
  },
  {
    id: 6,
    src: "/images/export-projects-6.jpg",
    title: "High Capacity Sand Washing Plant",
    location: "Tanga, Tanzania",
    capacity: "150 TPH",
    tag: "Aggregate Plant",
  },
  {
    id: 7,
    src: "/images/export-projects-7.jpg",
    title: "Modular Mobile Crushing Station",
    location: "Mbeya, Tanzania",
    capacity: "160 TPH",
    tag: "Mobile Plant",
  },
  {
    id: 8,
    src: "/images/export-projects-8.jpg",
    title: "Industrial Quarry Screening Line",
    location: "Morogoro, Tanzania",
    capacity: "280 TPH",
    tag: "Industrial Site",
  },
];

export default function ExportProjects() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? EXPORT_PROJECTS_DATA.length - 1 : prev! - 1
      );
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === EXPORT_PROJECTS_DATA.length - 1 ? 0 : prev! + 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const featuredExport = EXPORT_PROJECTS_DATA[0];
  const remainingExports = EXPORT_PROJECTS_DATA.slice(1);

  return (
    <section className="section-padding-sm bg-background border-b border-border/60 relative overflow-hidden select-none">
      {/* Decorative Global Map Accent Background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
              <span className="text-primary eyebrow">
                INTERNATIONAL EXPORTS & PROJECTS
              </span>
            </div>
            <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
              EXPORT PROJECTS <span className="text-primary inline-block">(TANZANIA)</span>
            </h2>
            <p className="text-sm text-muted-foreground font-medium max-w-xl leading-relaxed">
              Demonstrating engineered reliability across East Africa with robust, high-tonnage turnkey installations.
            </p>
          </div>

          {/* Turnkey African Badge */}
          <div className="flex items-center gap-3 bg-card border border-border/80 p-2.5 px-4 rounded-xl shadow-sm shrink-0 self-start md:self-end">
            <div className="w-9 h-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-bold">
              <Award size={18} />
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                Export Operations
              </span>
              <span className="text-sm font-bold text-foreground">
                Turnkey African Installations
              </span>
            </div>
          </div>
        </div>

        {/* Bento Grid Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Featured Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setLightboxIndex(0)}
            className="lg:col-span-7 relative min-h-[420px] lg:min-h-[520px] rounded-xl overflow-hidden border border-border bg-card group shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end"
          >
            <img
              src={featuredExport.src}
              alt={featuredExport.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Top Badge */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-md">
                Featured Export Site
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                {featuredExport.capacity}
              </span>
            </div>

            {/* Expand Icon */}
            <div className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-md">
              <Maximize2 size={18} />
            </div>

            {/* Bottom Content Card */}
            <div className="relative z-20 p-6 sm:p-8 space-y-2 text-left">
              <div className="flex items-center gap-2 text-primary font-bold text-xs">
                <MapPin size={14} />
                <span>{featuredExport.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide font-heading">
                {featuredExport.title}
              </h3>
              <div className="flex items-center gap-2 text-white/80 text-xs font-semibold pt-2">
                <span>Click to view full installation photo</span>
                <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Secondary Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {remainingExports.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx + 1) * 0.1 }}
                onClick={() => setLightboxIndex(idx + 1)}
                className="relative h-[155px] lg:h-[160px] rounded-xl overflow-hidden border border-border bg-card group shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex items-end p-4"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />

                <div className="relative z-20 flex items-center justify-between w-full text-left">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">
                      {item.tag} • {item.location}
                    </span>
                    <h4 className="text-sm font-bold text-white uppercase tracking-tight line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Eye size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Horizontal Grid of Remaining Installations (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {remainingExports.slice(3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setLightboxIndex(idx + 4)}
              className="relative h-[220px] rounded-xl overflow-hidden border border-border bg-card group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between p-5"
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 z-10" />

              {/* Tag Badge */}
              <div className="relative z-20 flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase">
                  {item.tag}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Eye size={13} />
                </div>
              </div>

              {/* Title & Location */}
              <div className="relative z-20 text-left space-y-1">
                <div className="flex items-center gap-1 text-[11px] text-primary font-bold">
                  <MapPin size={12} />
                  <span>{item.location}</span>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight line-clamp-1">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
          >
            {/* Header controls */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white z-20">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase">
                  {EXPORT_PROJECTS_DATA[lightboxIndex].tag}
                </span>
                <span className="text-sm font-semibold text-white/80">
                  {lightboxIndex + 1} of {EXPORT_PROJECTS_DATA.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Lightbox Image Preview */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[80vh] aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src={EXPORT_PROJECTS_DATA[lightboxIndex].src}
                alt={EXPORT_PROJECTS_DATA[lightboxIndex].title}
                className="w-full h-full object-contain bg-black"
              />

              {/* Bottom Project Details Bar */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-left text-white flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                <div>
                  <div className="flex items-center gap-2 text-primary text-xs font-bold mb-1">
                    <MapPin size={14} />
                    <span>{EXPORT_PROJECTS_DATA[lightboxIndex].location}</span>
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    {EXPORT_PROJECTS_DATA[lightboxIndex].title}
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold">
                  Capacity: {EXPORT_PROJECTS_DATA[lightboxIndex].capacity}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
