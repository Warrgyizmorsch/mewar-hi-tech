"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { CaseStudy } from "@/data/case-studies-data";

interface CaseStudyGalleryProps {
  study: CaseStudy;
}

export default function CaseStudyGallery({ study }: CaseStudyGalleryProps) {
  const defaultImages = [
    "/images/case-studies/gallery-1.jpg",
    "/images/case-studies/gallery-2.jpg",
    "/images/case-studies/gallery-3.jpg",
    "/images/case-studies/gallery-4.jpg",
  ];

  const galleryImages = study.gallery && study.gallery.length > 0 ? study.gallery : defaultImages;

  // Active index for mobile featured carousel and desktop lightbox
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = () => {
    setActiveIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-8 md:py-12 bg-background text-foreground select-none">
      <Container>
        {/* ═══════════════════════════════════════════════════════════════════
            DESKTOP VIEW (MD & UP): 4-IMAGE PHOTO GRID
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block">
          {/* Eyebrow & Section Heading */}
          <div className="mb-8 sm:mb-10 space-y-2">
            <span className="eyebrow text-[#F4B400] font-heading font-bold text-xs uppercase tracking-widest block">
              PROJECT GALLERY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading text-[#0A1A3B] dark:text-white uppercase tracking-tight leading-tight">
              Plant Installation &amp; On-Site Photos
            </h2>
          </div>

          {/* 4-Column Photo Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {galleryImages.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveIdx(idx);
                  setLightboxOpen(true);
                }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-black/[0.06] dark:border-white/10 group cursor-pointer bg-slate-100 dark:bg-slate-800"
              >
                <Image
                  src={img}
                  alt={`${study.title} installation photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#0A1A3B] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200 flex items-center justify-center shadow-lg">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            MOBILE VIEW (< MD): SLIDER CARD WITH THUMBNAIL SELECTOR
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="block md:hidden">
          <div className="bg-white dark:bg-[#0B1528] rounded-3xl p-5 sm:p-6 shadow-sm border border-black/[0.05] dark:border-white/10">
            {/* Header with Title on Left and 'View All' on Right */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="eyebrow text-[#F4B400] font-heading font-bold text-xs uppercase tracking-widest block">
                  PLANT INSTALLATION &amp;
                </span>
                <h3 className="text-lg font-extrabold font-heading text-[#0A1A3B] dark:text-white uppercase tracking-tight leading-tight">
                  ON-SITE PHOTOS
                </h3>
              </div>

              <button
                onClick={() => setLightboxOpen(true)}
                className="bg-[#F4B400] hover:bg-[#E5A000] text-[#0A1A3B] font-bold text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1 shadow-sm active:scale-95 transition-all"
              >
                View All <ArrowRight size={13} strokeWidth={3} />
              </button>
            </div>

            {/* Main Featured Photo with Navigation Arrows */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-black/[0.05] bg-slate-100 dark:bg-slate-800">
              <Image
                src={galleryImages[activeIdx]}
                alt={`${study.title} featured photo`}
                fill
                className="object-cover transition-opacity duration-300"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous photo"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 text-[#F4B400] shadow-md flex items-center justify-center absolute left-2.5 top-1/2 -translate-y-1/2 active:scale-90 transition-transform z-10"
              >
                <ChevronLeft size={18} strokeWidth={3} />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next photo"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 text-[#F4B400] shadow-md flex items-center justify-center absolute right-2.5 top-1/2 -translate-y-1/2 active:scale-90 transition-transform z-10"
              >
                <ChevronRight size={18} strokeWidth={3} />
              </button>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-3 gap-2.5 mt-3.5">
              {galleryImages.slice(0, 3).map((thumb, tIdx) => {
                const isActive = activeIdx === tIdx;
                return (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => setActiveIdx(tIdx)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                      isActive
                        ? "border-2 border-[#F4B400] ring-1 ring-[#F4B400]/40 scale-[1.02]"
                        : "border border-black/[0.08] dark:border-white/10 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={thumb}
                      alt={`Thumbnail ${tIdx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            FULLSCREEN LIGHTBOX MODAL
            ═══════════════════════════════════════════════════════════════════ */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none">
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X size={22} />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-50"
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-50"
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>

            {/* Modal Image */}
            <div className="relative w-full max-w-4xl h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[activeIdx]}
                alt={`Photo ${activeIdx + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-4 py-1.5 rounded-full font-mono">
              {activeIdx + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
