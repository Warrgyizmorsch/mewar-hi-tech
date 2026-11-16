"use client";

import React from "react";
import { Sparkles, ArrowUpRight, Award, Calendar } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc1gMvd2FC_WiY9Hx4gu8QkJ5a_Vj7qTz300U6A-snzNBblew/viewform";

export default function CelebrationMeetBanner() {
  return (
    <section className="relative w-full overflow-hidden border-b border-primary/20 bg-gradient-to-b from-[#0a0f1d] via-[#0d1527] to-[#080c18] text-white">
      {/* Decorative top accent line with golden shimmer */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Background Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle 25 Years Giant Watermark in Background */}
      <div
        aria-hidden="true"
        className="absolute right-4 sm:right-12 lg:right-24 top-1/2 -translate-y-1/2 text-[7rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] font-black text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter"
      >
        25
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 relative z-10">
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl border border-primary/30 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-primary/[0.05] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-primary hover:shadow-[0_0_35px_rgba(248,192,37,0.25)] hover:-translate-y-0.5"
          aria-label="MEWAR HITECH 25 Years Celebration - Customer Meet & Product Showcase Registration"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
            {/* Left Content Area */}
            <div className="flex-1 space-y-3 sm:space-y-4">
              {/* Badges / Eyebrows */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  MEWAR HITECH ENGINEERING LIMITED
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  25 Years Celebration
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Customer Meet 2026
                
              </h2>

              {/* Tagline */}
              <p className="text-sm sm:text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-3xl">
                Celebrating 25 Years of Excellence, Innovation &amp; Partnership
              </p>

        
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 w-full sm:w-auto pt-2 lg:pt-0">
              <div className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base uppercase tracking-wider text-black bg-gradient-to-r from-primary via-yellow-400 to-primary shadow-lg shadow-primary/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(248,192,37,0.5)]">
                <span>Register Now</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

