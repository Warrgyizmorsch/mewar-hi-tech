"use client";

import React, { useState, useEffect } from "react";
import { Download, Play, X, BookOpen, FileText, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileCarousel from "@/components/ui/MobileCarousel";
import BlobButton from "@/components/ui/BlobButton";
import Container from "../ui/Container";

const YOUTUBE_VIDEO_ID = "5M9sopYgqR4";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`;

const BROCHURE_CARDS = [
  {
    title: "PRODUCT BROCHURE",
    icon: BookOpen,
    desc: "Comprehensive overview of features, benefits and applications.",
    image: "/images/brochure/cone-crusher-brochure.webp",
  },
  {
    title: "TECHNICAL DATASHEET",
    icon: FileText,
    desc: "Detailed technical specifications and performance data.",
    image: "/images/brochure/datasheet-cone-crusher.webp",
  },
  {
    title: "OPERATION & MAINTENANCE MANUAL",
    icon: Wrench,
    desc: "Step-by-step guide for safe operation, maintenance and best practices.",
    image: "/images/brochure/operational-and-maintenece-manual.webp",
  },
];

const FlagshipProductsGrid: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDownloadClick = () => {
    window.dispatchEvent(new Event("open-brochure-modal"));
  };

  return (
    <section id="brochures" className="bg-background section-padding lg:section-padding text-left select-none border-t border-border/80">
      <Container className="space-y-12">
        
        {/* Section Header */}
        <div className="mx-auto text-center space-y-3">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
            <span className="text-primary eyebrow">
              DOWNLOAD RESOURCES
            </span>
          </div>
          <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
            TECHNICAL <span className="text-primary">DOCUMENTATION &amp; BROCHURES</span>
          </h2>
          <p className="text-sm text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Get instant access to complete product brochures, technical datasheets, and maintenance manuals for Mewar Hi-Tech machinery.
          </p>
        </div>

        {/* Mobile Auto Carousel Slider (1 Card at a time, 2 sec) */}
        <div className="block md:hidden">
          <MobileCarousel autoSlideInterval={2000}>
            {BROCHURE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-card rounded-[20px] p-5 border border-border/80 shadow-sm flex items-center gap-4 group min-h-[230px] w-full"
                >
                  <div className="w-[45%] shrink-0 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto max-h-[190px] object-contain drop-shadow-md"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mb-2">
                        <Icon size={16} className="stroke-[2.2]" />
                      </div>

                      <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#0A1A3B] dark:text-white leading-snug line-clamp-2">
                        {card.title}
                      </h3>
                      
                      <div className="w-6 h-[2px] bg-primary rounded-full my-1.5" />

                      <p className="text-[10px] text-muted-foreground font-medium leading-relaxed line-clamp-2">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleDownloadClick}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-[10px] font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                      >
                        <span>DOWNLOAD PDF</span>
                        <Download size={11} className="stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </MobileCarousel>
        </div>

        {/* Desktop 3 Brochure Cards Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BROCHURE_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-card rounded-[20px] p-6 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-5 group min-h-[250px]"
              >
                {/* Left Side: 3D Standing Cover Image standing tall */}
                <div className="w-[45%] shrink-0 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto max-h-[210px] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Side: Details & Action */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
                  <div>
                    {/* Orange Outline Icon */}
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mb-3">
                      <Icon size={16} className="stroke-[2.2]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A1A3B] dark:text-white leading-snug min-h-[36px] flex items-center">
                      {card.title}
                    </h3>
                    
                    {/* Orange Accent Bar */}
                    <div className="w-8 h-[2px] bg-primary rounded-full my-2" />

                    {/* Card Description */}
                    <p className="text-[11px] text-muted-foreground font-medium leading-relaxed min-h-[44px] flex items-center">
                      {card.desc}
                    </p>
                  </div>

                  {/* Outline Download PDF Button */}
                  <div className="pt-3">
                    <button
                      onClick={handleDownloadClick}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      <span>DOWNLOAD PDF</span>
                      <Download size={12} className="stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Video Banner Card */}
        <div className="bg-card p-6 sm:p-8 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-border/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-grow space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
              <span className="text-primary eyebrow">
                SEE IT IN ACTION
              </span>
            </div>
            <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-bold text-[#0A1A3B] dark:text-white leading-tight uppercase tracking-tight">
              MACHINES THAT WORK FOR YOU
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium max-w-lg leading-relaxed">
              Watch our heavy crushers, feeders, and conveyors in action and see how they perform under extreme loading conditions.
            </p>
            <div className="pt-2">
              <BlobButton
                variant="primary"
                onClick={() => setIsVideoOpen(true)}
                className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <span>Watch Operation Videos</span>
                <Play size={14} className="fill-current" />
              </BlobButton>
            </div>
          </div>

          <div className="shrink-0 mx-auto lg:mx-0">
            <div 
              onClick={() => setIsVideoOpen(true)}
              className="relative w-48 sm:w-60 aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-border group cursor-pointer"
            >
              <img
                src="/images/video_thumbnail.webp"
                alt="Video Thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center bg-black/40 shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={16} className="text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>

      {/* Fullscreen Video Popup Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div className="absolute top-6 right-6 z-20">
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={YOUTUBE_EMBED_URL}
                title="Mewar Hi-Tech Machines That Work For You Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FlagshipProductsGrid;
