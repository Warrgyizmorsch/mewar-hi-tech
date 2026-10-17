"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { CaseStudy } from "@/data/case-studies-data";

interface CaseStudyOverviewProps {
  study: CaseStudy;
}

export default function CaseStudyOverview({ study }: CaseStudyOverviewProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Content for sand plant or fallback to study description
  const overviewTitle =
    study.overviewTitle || "Delivering High-Quality Manufactured Sand";

  const p1 =
    study.overviewP1 ||
    "This project involved the design, supply, installation and commissioning of a state-of-the-art sand making machine and washing system to produce high-grade manufactured sand (M-Sand) as per Zone II IS 383 specifications.";

  const p2 =
    study.overviewP2 ||
    "The plant is engineered for consistent product quality, higher efficiency and sustainable operations, supporting the growing demand for construction-grade sand in the region.";

  const videoThumb = study.videoThumbnail || study.image || "/images/latest-projects-2.jpg";

  return (
    <section className="section-padding bg-background text-foreground select-none">
      <Container>
        {/* ─── DESKTOP LAYOUT (md and up) ─── */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-4">
            <span className="eyebrow text-primary">
              PROJECT OVERVIEW
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0A1A3B] dark:text-white uppercase tracking-tight leading-tight">
              {overviewTitle}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground font-sans leading-relaxed pt-1">
              <p>{p1}</p>
              <p>{p2}</p>
            </div>
          </div>

          {/* Right Column: Video Thumbnail Card */}
          <div className="lg:col-span-5">
            <div
              onClick={() => setIsVideoOpen(true)}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-black/20 border border-border/80 shadow-xl group cursor-pointer"
            >
              <Image
                src={videoThumb}
                alt={`${study.title} Video Preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20 group-hover:bg-black/30 transition-colors" />

              {/* Play Button & Label Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <button
                  type="button"
                  aria-label="Play plant video"
                  className="w-16 h-16 rounded-full bg-primary text-black flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-primary/40 transition duration-300"
                >
                  <Play size={24} className="fill-black translate-x-0.5" />
                </button>

                <div className="mt-3 px-4 py-1.5 rounded-full bg-[#0A1A3B]/85 backdrop-blur-md text-white text-xs font-bold tracking-wide uppercase border border-white/10 shadow-md">
                  Watch Plant Video
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MOBILE LAYOUT (under md: Unified Card matching screenshot) ─── */}
        <div className="md:hidden">
          <div className="bg-card text-card-foreground rounded-3xl p-6 border border-border/80 shadow-sm space-y-4">
            <span className="eyebrow text-primary">
              PROJECT OVERVIEW
            </span>

            <h2 className="text-xl font-extrabold font-heading text-[#0A1A3B] dark:text-white uppercase tracking-tight leading-snug">
              {overviewTitle}
            </h2>

            <div className="space-y-3 text-xs text-muted-foreground font-sans leading-relaxed">
              <p>{p1}</p>
              <p>{p2}</p>
            </div>

            {/* Video Thumbnail in Mobile Card */}
            <div
              onClick={() => setIsVideoOpen(true)}
              className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/20 border border-border/60 shadow-md group cursor-pointer pt-2"
            >
              <Image
                src={videoThumb}
                alt={`${study.title} Video Preview`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-lg active:scale-95 transition">
                  <Play size={20} className="fill-black translate-x-0.5" />
                </div>
                <div className="mt-2.5 px-3 py-1 rounded-full bg-[#0A1A3B]/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wide uppercase border border-white/10">
                  Watch Plant Video
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ─── INTERACTIVE VIDEO MODAL ─── */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card text-card-foreground border border-border rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-primary text-white hover:text-black flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close video"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-video w-full bg-black">
                <video
                  src="/videos/home-page.mp4"
                  autoPlay
                  controls
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-4 sm:p-6 bg-card border-t border-border flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-heading text-foreground uppercase">
                    {study.title} - Plant Installation Video
                  </h4>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    {study.location} • {study.capacity || "200 TPH"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-xs font-bold uppercase tracking-wider text-foreground transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
