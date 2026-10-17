"use client";

import React from "react";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { CaseStudy } from "@/data/case-studies-data";

interface CaseStudyTestimonialProps {
  study: CaseStudy;
}

export default function CaseStudyTestimonial({ study }: CaseStudyTestimonialProps) {
  // Testimonial content defaults matching screenshots
  const defaultTestimonial = {
    quote:
      "The 200 TPH sand manufacturing plant has delivered excellent performance with consistent quality and high output. The entire team was professional and supportive throughout the project.",
    client: "Marwar Aggregates & Industries",
    location: "Rajasthan",
  };

  const testimonial = study.testimonial || defaultTestimonial;

  return (
    <section className="py-8 md:py-12 bg-background text-foreground select-none">
      <Container>
        {/* ═══════════════════════════════════════════════════════════════════
            DESKTOP VIEW (MD & UP): TWO-COLUMN WIDE TESTIMONIAL BANNER
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block relative bg-[#FFF9F1] dark:bg-[#0B1528] rounded-2xl sm:rounded-3xl border border-[#F6EAD2] dark:border-white/10 p-5 sm:p-7 lg:py-8 lg:px-10 shadow-[0_2px_15px_rgba(0,0,0,0.02)] overflow-hidden">
          {/* Top-Right Decorative Quote Mark */}
          <Quote
            size={28}
            className="absolute top-3.5 right-4 sm:top-4 sm:right-6 text-[#F6D37B]/60 fill-[#F6D37B]/60 dark:text-amber-400/25 dark:fill-amber-400/25 stroke-none pointer-events-none select-none"
          />

          {/* Bottom-Right Decorative Quote Mark */}
          <Quote
            size={28}
            className="absolute bottom-3.5 right-4 sm:bottom-4 sm:right-6 text-[#F6D37B]/60 fill-[#F6D37B]/60 dark:text-amber-400/25 dark:fill-amber-400/25 stroke-none pointer-events-none select-none"
          />

          <div className="flex flex-row items-center justify-between gap-6 lg:gap-10 relative z-10 pr-10 lg:pr-12">
            {/* Left: Quote Badge + Eyebrow + Quote Body */}
            <div className="flex items-start gap-3.5 sm:gap-4 lg:gap-5 flex-1 max-w-2xl">
              {/* Quote Icon Badge */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FCF0D9] dark:bg-amber-500/20 flex items-center justify-center shrink-0 text-[#F4B400] shadow-xs mt-0.5">
                <Quote size={20} className="fill-[#F4B400] text-[#F4B400] rotate-180" />
              </div>

              {/* Content: Eyebrow + Quote */}
              <div className="flex-1 min-w-0">
                <span className="text-[#F4B400] font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider block mb-1">
                  CLIENT TESTIMONIAL
                </span>
                <blockquote className="text-xs sm:text-[13.5px] lg:text-[14.5px] text-gray-700 dark:text-gray-200 font-sans italic leading-relaxed font-normal">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Right: Client Details & Yellow Dash */}
            <div className="shrink-0 flex flex-col justify-center min-w-[200px] sm:min-w-[220px]">
              <h4 className="text-sm sm:text-[15px] lg:text-base font-bold font-sans text-gray-900 dark:text-white leading-tight">
                {testimonial.client}
              </h4>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-sans mt-0.5 block">
                Client
              </span>
              {/* Yellow Dash Line right-aligned with the client name */}
              <div className="w-7 h-[2px] bg-[#F4B400] rounded-full mt-3.5 self-end" />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            MOBILE VIEW (< MD): EXACT MATCH WITH REFERENCE SCREENSHOT
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="block md:hidden bg-[#FFF9F1] dark:bg-[#0B1528] rounded-3xl border border-[#F6EAD2] dark:border-white/10 p-6 sm:p-7 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
          {/* Eyebrow */}
          <span className="text-[#F4B400] font-heading font-bold text-xs uppercase tracking-wider block mb-3">
            CLIENT TESTIMONIAL
          </span>

          {/* Top-Left Opening Quote Icon */}
          <Quote
            size={30}
            className="fill-[#F4B400] text-[#F4B400] rotate-180 mb-3"
          />

          {/* Quote Body */}
          <blockquote className="text-[13.5px] sm:text-sm text-gray-800 dark:text-gray-200 font-sans leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Gold Accent Line */}
          <div className="w-8 h-[2.5px] bg-[#F4B400] rounded-full my-4" />

          {/* Bottom Row: Client Attribution & Bottom-Right Closing Quote */}
          <div className="flex items-end justify-between gap-3">
            <div>
              <h4 className="text-sm sm:text-[15px] font-bold font-sans text-gray-900 dark:text-white leading-tight">
                {testimonial.client}
              </h4>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-sans mt-0.5 block">
                Client{testimonial.location ? `, ${testimonial.location}` : ""}
              </span>
            </div>

            {/* Bottom-Right Closing Quote Icon */}
            <Quote
              size={28}
              className="fill-[#F4B400] text-[#F4B400] shrink-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
