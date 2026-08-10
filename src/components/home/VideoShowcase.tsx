"use client";

import React, { useState, useEffect } from "react";
import { Play, X, Video, Cog, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Close player when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPlaying(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="pt-8 pb-8 lg:pb-10 bg-background relative overflow-hidden">
      {/* Optional decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary font-bold text-[16px] sm:text-sm uppercase tracking-widest block font-sans">
                  INDUSTRIAL FOOTPRINTS
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-[#0A1A3B] dark:text-white leading-tight">
                HEAVY ENGINEERING{" "}
                <span className="text-primary inline-block">OPERATIONS</span>
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify font-medium max-w-md">
                Take a virtual tour of our heavy machinery assembly shop floor
                and active quarry installations. Witness our crushers, feeders,
                and conveyors executing high-throughput screening and size
                reduction under extreme loading cycles.
              </p>
            </div>

            {/* Visual badge info blocks */}
            <div className="space-y-4 max-w-md">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl bg-card border border-border/50 shadow-sm flex items-center gap-4 hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Video size={22} className="stroke-[2]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-foreground">
                    Shop Floor & Field Footage
                  </h4>
                  <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                    High-definition mechanism demonstration of primary crushing
                    plants and mobile tracks.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl bg-card border border-border/50 shadow-sm flex items-center gap-4 hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Cog size={22} className="stroke-[2]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-foreground">
                    Advanced Engineering
                  </h4>
                  <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                    Precision-engineered components designed for extreme
                    environments and heavy loads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video Cover Block */}
          <div className="lg:col-span-7">
            <div
              onClick={() => setIsPlaying(true)}
              className="relative rounded-[2rem] overflow-hidden border-4 border-background bg-muted aspect-[16/10] cursor-pointer group shadow-2xl ring-1 ring-border/50"
            >
              {/* Silent looping preview video with fallback industrial poster */}
              <video
                src="/videos/home-page.mp4"
                poster="/images/hero-crusher.webp"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Darkening overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Floating Play Button - Centered */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground flex items-center justify-center shadow-[0_0_40px_rgba(var(--primary),0.5)] scale-95 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                <Play size={32} className="fill-current ml-2" />
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <Play size={14} className="fill-current" />
                  Click to Watch Tour
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen lightboxed video player */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(false)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsPlaying(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Lightbox Video tag */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/videos/home-page.mp4"
                poster="/images/video_thumbnail.webp"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
