"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Cog, 
  CheckCircle2, 
  ArrowRight, 
  X,
  Building2,
  Calendar,
  Layers,
  ChevronRight
} from "lucide-react";
import MobileCarousel from "@/components/ui/MobileCarousel";
import Container from "../ui/Container";
import BlobButton from "@/components/ui/BlobButton";
import { CASE_STUDIES, CaseStudy } from "@/data/case-studies-data";

export default function CaseStudiesSection() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  // Helper to render icon based on stat type
  const renderStatIcon = (iconType: string) => {
    switch (iconType) {
      case "chart":
        return <TrendingUp size={16} className="text-primary" />;
      case "clock":
        return <Clock size={16} className="text-primary" />;
      case "shield":
        return <ShieldCheck size={16} className="text-primary" />;
      case "zap":
        return <Zap size={16} className="text-primary" />;
      case "cog":
        return <Cog size={16} className="text-primary" />;
      default:
        return <CheckCircle2 size={16} className="text-primary" />;
    }
  };

  // Display top 4 featured case studies on homepage
  const featuredStudies = CASE_STUDIES.slice(0, 4);

  return (
    <section className="section-padding bg-background text-foreground relative select-none border-b border-border/60">
      <Container>
        {/* Section Header */}
        <div className="mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="hidden sm:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
            <span className="text-primary eyebrow">
              RELATED CASE STUDIES
            </span>
          </div>
          
          <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
            EXPLORE MORE <span className="text-primary inline-block">SUCCESS STORIES</span>
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            Discover how Mewar Hi-Tech's innovative solutions have helped industries achieve higher efficiency, reliability and maximum ROI.
          </p>
        </div>

        {/* Mobile Auto Carousel Slider (1 Card at a time, 2 sec) */}
        <div className="block md:hidden">
          <MobileCarousel autoSlideInterval={2000}>
            {featuredStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className="group bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between cursor-pointer w-full"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold tracking-wider px-3 py-1 rounded-md uppercase shadow-md">
                      {study.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-[#0A1A3B] dark:text-white leading-snug line-clamp-2 min-h-[44px] flex items-center">
                      {study.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold pb-2 border-b border-border/50">
                      <MapPin size={14} className="text-primary shrink-0" />
                      <span>{study.location}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {study.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex flex-col items-center text-center space-y-1">
                          <div className="flex items-center gap-1">
                            {renderStatIcon(stat.icon)}
                            <span className="text-sm font-bold text-foreground">
                              {stat.value}
                            </span>
                          </div>
                          <span className="text-[10px] text-muted-foreground font-medium leading-tight line-clamp-2">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-muted/40 border-t border-border/60 flex items-center justify-center text-xs font-bold text-[#0A1A3B] dark:text-white uppercase tracking-wider gap-2">
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>

        {/* Desktop Case Studies Grid (4 Cards) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedStudy(study)}
              className="group bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Top Image Container with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold tracking-wider px-3 py-1 rounded-md uppercase shadow-md">
                    {study.category}
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-[#0A1A3B] dark:text-white group-hover:text-primary transition-colors leading-snug line-clamp-2 min-h-[44px] flex items-center">
                    {study.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold pb-2 border-b border-border/50">
                    <MapPin size={14} className="text-primary shrink-0" />
                    <span>{study.location}</span>
                  </div>

                  {/* 3 Metric Highlights */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {study.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col items-center text-center space-y-1">
                        <div className="flex items-center gap-1">
                          {renderStatIcon(stat.icon)}
                          <span className="text-sm font-bold text-foreground">
                            {stat.value}
                          </span>
                        </div>
                        <span className="text-[10px] text-muted-foreground font-medium leading-tight line-clamp-2">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-5 py-3.5 bg-muted/40 border-t border-border/60 flex items-center justify-center text-xs font-bold text-[#0A1A3B] dark:text-white group-hover:text-primary group-hover:bg-primary/5 transition-all uppercase tracking-wider gap-2">
                <span>VIEW CASE STUDY</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Projects CTA */}
        <div className="mt-12 flex justify-center">
          <Link href="/case-studies">
            <BlobButton
              variant="primary"
              className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2"
            >
              <span>Explore All Projects &amp; Case Studies</span>
              <ArrowRight size={14} />
            </BlobButton>
          </Link>
        </div>
      </Container>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudy(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card text-card-foreground border border-border/80 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Banner */}
              <div className="relative aspect-[16/8] bg-muted overflow-hidden">
                <Image
                  src={selectedStudy.image}
                  alt={selectedStudy.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <span className="bg-primary text-primary-foreground text-xs font-bold tracking-wider px-3 py-1 rounded-md uppercase self-start mb-2">
                    {selectedStudy.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {selectedStudy.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Meta details strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-muted/60 border border-border/50 text-xs">
                  <div className="space-y-1">
                    <span className="text-muted-foreground font-medium flex items-center gap-1">
                      <MapPin size={13} className="text-primary" /> Location
                    </span>
                    <p className="font-bold text-foreground">{selectedStudy.location}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground font-medium flex items-center gap-1">
                      <Layers size={13} className="text-primary" /> Capacity
                    </span>
                    <p className="font-bold text-foreground">{selectedStudy.capacity || "Custom TPH"}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground font-medium flex items-center gap-1">
                      <Building2 size={13} className="text-primary" /> Client
                    </span>
                    <p className="font-bold text-foreground truncate">{selectedStudy.client || "Industrial Client"}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground font-medium flex items-center gap-1">
                      <Calendar size={13} className="text-primary" /> Year
                    </span>
                    <p className="font-bold text-foreground">{selectedStudy.year || "2024"}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedStudy.description}
                  </p>
                </div>

                {/* Stats grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Performance Results &amp; ROI
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedStudy.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-xl bg-card border border-border/80 flex flex-col items-center text-center space-y-1">
                        <div className="flex items-center gap-1.5 text-primary">
                          {renderStatIcon(stat.icon)}
                          <span className="text-lg font-bold text-foreground">{stat.value}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                {selectedStudy.highlights && selectedStudy.highlights.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Key Technical Highlights
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {selectedStudy.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <ChevronRight size={15} className="text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Modal Footer Link */}
                <div className="pt-2 flex justify-end">
                  <Link href="/case-studies">
                    <BlobButton
                      variant="primary"
                      className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2"
                    >
                      <span>Explore All Case Studies</span>
                      <ArrowRight size={14} />
                    </BlobButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
