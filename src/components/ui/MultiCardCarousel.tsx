"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface CarouselSlide {
  id?: string | number;
  src: string;
  title: string;
  subtitle?: string;
  desc?: string;
  badge?: string;
}

interface MultiCardCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number; // e.g. 2000ms
}

export default function MultiCardCarousel({
  slides,
  autoPlayInterval = 2000,
}: MultiCardCarouselProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  const N = slides.length;

  // Triplicated slides array for seamless loop
  const extendedSlides = useMemo(() => {
    if (!N) return [];
    return [...slides, ...slides, ...slides];
  }, [slides, N]);

  // Start in middle set (index N)
  const [rawIndex, setRawIndex] = useState(N);

  // Responsive visible count
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (isPaused || !N) return;

    const timer = setInterval(() => {
      setEnableTransition(true);
      setRawIndex((prev) => prev + 1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, N, autoPlayInterval]);

  // Handle seamless wrap when animation finishes
  const handleAnimationComplete = () => {
    if (rawIndex >= N * 2) {
      setEnableTransition(false);
      setRawIndex(N);
    } else if (rawIndex < N) {
      setEnableTransition(false);
      setRawIndex(N * 2 - 1);
    }
  };

  const handleNext = () => {
    setEnableTransition(true);
    setRawIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setEnableTransition(true);
    setRawIndex((prev) => prev - 1);
  };

  const gap = 20; // gap in px

  const activeDotIndex = ((rawIndex % N) + N) % N;

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Viewport */}
      <div className="overflow-hidden py-3 px-1 rounded-xl">
        <motion.div
          className="flex"
          style={{ gap: `${gap}px` }}
          animate={{
            x: `calc(-${rawIndex} * ((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount} + ${gap}px))`,
          }}
          transition={
            enableTransition
              ? { duration: 0.75, ease: [0.25, 1, 0.5, 1] }
              : { duration: 0 }
          }
          onAnimationComplete={handleAnimationComplete}
        >
          {extendedSlides.map((slide, idx) => (
            <div
              key={`${slide.id || idx}-${idx}`}
              className="flex-shrink-0 flex-grow-0"
              style={{
                width: `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`,
              }}
            >
              <div className="group relative rounded-xl overflow-hidden bg-card border border-border shadow-xl min-h-[320px] sm:min-h-[380px] h-full flex flex-col justify-end transition-all duration-300 hover:border-primary/60 hover:shadow-2xl">
                {/* Image */}
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  {slide.badge ? (
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider">
                      {slide.badge}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary border border-primary/30 text-[10px] font-bold uppercase tracking-wider">
                      Facility {(idx % N) + 1}
                    </span>
                  )}
                  <span className="w-8 h-8 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Maximize2 size={14} />
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 sm:p-6 text-white space-y-1.5">
                  <h3 className="common-heading text-lg sm:text-xl tracking-wide leading-tight text-white group-hover:text-primary transition-colors">
                    {slide.title}
                  </h3>
                  {(slide.subtitle || slide.desc) && (
                    <p className="text-xs text-gray-300 font-medium leading-relaxed line-clamp-2">
                      {slide.subtitle || slide.desc}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-primary backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 z-20 shadow-lg hover:scale-110"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-primary backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 z-20 shadow-lg hover:scale-110"
      >
        <ChevronRight size={22} />
      </button>

      {/* Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setEnableTransition(true);
              setRawIndex(N + idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeDotIndex === idx
                ? "w-8 bg-primary"
                : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
