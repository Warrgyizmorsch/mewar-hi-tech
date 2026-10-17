"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";
import { CaseStudy } from "@/data/case-studies-data";

interface CaseStudyCTAProps {
  study: CaseStudy;
}

export default function CaseStudyCTA({ study }: CaseStudyCTAProps) {
  return (
    <section className="pb-16 select-none bg-background">
      <Container>
        <div className="space-y-6 lg:space-y-8">
          {/* ═══════════════════════════════════════════════════════════════════
              CTA 1: DISCOVER MORE SAND PLANT CASE STUDIES
              ═══════════════════════════════════════════════════════════════════ */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0B1528] border border-white/10 shadow-[0_12px_45px_rgba(0,0,0,0.12)] p-6 sm:p-8 lg:p-12">
            {/* Atmospheric Quarry Backdrop */}
            <div className="absolute inset-0 bg-[url('/images/background-hero.webp')] bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060D18]/95 via-[#0A1A3B]/85 to-[#060D18]/95 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-10">
              {/* Text Left */}
              <div className="max-w-2xl">
                <span className="eyebrow text-[#F4B400] font-heading font-bold text-xs uppercase tracking-widest block mb-2">
                  EXPLORE MORE
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold font-heading text-white tracking-tight leading-tight mb-2.5">
                  Discover More {study.category || "Sand Plant"} Case Studies
                </h3>
                <p className="text-sm sm:text-[15px] text-gray-300 font-sans leading-relaxed">
                  See how our customized sand manufacturing solutions are helping businesses across India achieve higher productivity, lower downtime and consistent quality.
                </p>
              </div>

              {/* Button Right */}
              <div className="w-full md:w-auto shrink-0">
                <Link
                  href="/case-studies"
                  className="bg-[#F4B400] hover:bg-[#E5A000] text-[#0A1A3B] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all w-full md:w-auto text-center"
                >
                  <span>VIEW ALL CASE STUDIES</span>
                  <ArrowRight size={16} strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              CTA 2: READY TO BUILD YOUR PLANT? LET'S DISCUSS YOUR PROJECT
              ═══════════════════════════════════════════════════════════════════ */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F4B400] text-[#0A1A3B] shadow-[0_10px_40px_rgba(244,180,0,0.25)] p-6 sm:p-8 lg:p-10 border border-amber-400">
            {/* Top Right Speech Bubble Icon matching mobile/desktop design */}
            <div className="absolute right-5 sm:right-8 top-5 sm:top-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#0A1A3B] flex items-center justify-center text-[#0A1A3B] opacity-90">
              <MessageSquare size={22} className="stroke-[2.5]" />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-10 relative z-10">
              {/* Text Left */}
              <div className="max-w-2xl pr-12 md:pr-0">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0A1A3B] block mb-1.5">
                  READY TO BUILD YOUR PLANT?
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading text-[#0A1A3B] tracking-tight leading-tight">
                  Let&apos;s Discuss Your Project
                </h3>
                <p className="text-xs sm:text-sm lg:text-[15px] text-[#0A1A3B]/85 font-medium font-sans mt-2">
                  Get a customized sand manufacturing solution tailored to your site conditions and production goals.
                </p>
              </div>

              {/* Enquire Now Button Right */}
              <div className="w-full md:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="bg-[#0A1A3B] hover:bg-[#071120] text-white font-bold text-sm sm:text-[15px] px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full flex items-center justify-between sm:justify-center gap-3 shadow-xl active:scale-95 transition-all w-full md:w-auto"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={16} strokeWidth={3} className="text-[#F4B400]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
