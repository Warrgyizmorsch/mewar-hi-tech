"use client";

import React from "react";
import Image from "next/image";
import { Settings2, Filter, Layers, Cpu, LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { CaseStudy } from "@/data/case-studies-data";

interface CaseStudyTechnicalHighlightsProps {
  study: CaseStudy;
}

export default function CaseStudyTechnicalHighlights({ study }: CaseStudyTechnicalHighlightsProps) {
  // Default highlights matching approved designs
  const defaultHighlights = [
    {
      title: "Vertical Shaft Impactor (VSI)",
      description: "High efficiency crushing for superior cubical shape.",
      image: "/images/case-studies/tech-vsi.png",
      icon: "crusher",
    },
    {
      title: "Hydrocyclone Sand Washer",
      description: "Effective removal of silt and impurities.",
      image: "/images/case-studies/tech-washer.png",
      icon: "washer",
    },
    {
      title: "Dewatering Screen",
      description: "Ensures low moisture content for better usability.",
      image: "/images/case-studies/tech-screen.png",
      icon: "screen",
    },
    {
      title: "Automation & Control",
      description: "Reliable operation with minimal downtime.",
      image: "/images/case-studies/tech-control.png",
      icon: "automation",
    },
  ];

  const highlights = study.technicalHighlights && study.technicalHighlights.length >= 4
    ? study.technicalHighlights
    : defaultHighlights;

  const getHighlightIcon = (iconName?: string, index: number = 0): LucideIcon => {
    switch (iconName) {
      case "crusher":
        return Settings2;
      case "washer":
        return Filter;
      case "screen":
        return Layers;
      case "automation":
        return Cpu;
      default:
        return [Settings2, Filter, Layers, Cpu][index % 4];
    }
  };

  return (
    <section className="py-8 md:py-12 bg-background text-foreground select-none">
      <Container>
        {/* Eyebrow & Section Heading */}
        <div className="mb-8 sm:mb-10 space-y-2">
          <span className="eyebrow text-[#F4B400] font-heading font-bold text-xs uppercase tracking-widest block">
            KEY TECHNICAL HIGHLIGHTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading text-[#0A1A3B] dark:text-white uppercase tracking-tight leading-tight">
            Engineered for Efficiency and Reliability
          </h2>
        </div>

        {/* 4 Cards Grid (Desktop: 4 columns vertical; Mobile: Stacked horizontal cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {highlights.map((item, idx) => {
            const IconComp = getHighlightIcon(item.icon, idx);

            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0B1528] rounded-2xl border border-black/[0.05] dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-black/10 dark:hover:border-white/20 transition-all duration-300 group overflow-hidden flex flex-row md:flex-col justify-between p-4 sm:p-5 lg:p-6 gap-4 md:gap-0"
              >
                {/* Details Section: On mobile right side, on desktop top side */}
                <div className="flex-1 order-2 md:order-1 flex flex-col justify-center md:justify-start">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFF5DC] dark:bg-amber-500/20 text-[#F4B400] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <IconComp size={14} className="stroke-[2.5]" />
                    </div>
                    <h4 className="text-[12px] sm:text-[13px] lg:text-[14px] font-bold font-heading text-[#0A1A3B] dark:text-white leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-500 dark:text-gray-400 font-sans leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Machine Image: On mobile left thumbnail, on desktop bottom full-width */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-40 lg:h-44 shrink-0 order-1 md:order-2 flex items-center justify-center p-1 md:p-2 md:mt-4 bg-slate-50/70 dark:bg-slate-900/40 md:bg-transparent rounded-xl md:rounded-none">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={260}
                    height={190}
                    className="object-contain max-h-full max-w-full drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
