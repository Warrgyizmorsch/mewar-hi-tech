"use client";

import React from "react";
import {
  Scale,
  Award,
  Filter,
  Gauge,
  Zap,
  ShieldCheck,
  Cog,
  Layers,
  Wrench,
  LucideIcon,
  Building2,
  Droplets,
  Waves,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { CaseStudy } from "@/data/case-studies-data";

interface CaseStudyChallengeSolutionProps {
  study: CaseStudy;
}

export default function CaseStudyChallengeSolution({ study }: CaseStudyChallengeSolutionProps) {
  // Default fallback data matching the approved design
  const defaultChallenge = {
    eyebrow: "CLIENT CHALLENGE",
    title: "Meeting Growing Demand with Consistent Quality",
    description:
      "The client required a reliable and efficient solution to produce high-quality manufactured sand to meet the increasing demand from the construction sector. Key challenges included:",
    points: [
      {
        text: "Maintaining consistent sand quality as per IS 383 standards",
        icon: "quality",
      },
      {
        text: "Minimizing silt and dust contamination",
        icon: "filter",
      },
      {
        text: "Achieving higher production capacity with lower energy consumption",
        icon: "energy",
      },
      {
        text: "Ensuring long-term operational reliability",
        icon: "reliability",
      },
    ],
  };

  const defaultSolution = {
    eyebrow: "OUR SOLUTION",
    title: "A Complete Sand Manufacturing Solution",
    description:
      "We delivered a fully integrated solution featuring a Vertical Shaft Impactor (VSI) sand making machine and an advanced washing system, designed for efficiency, durability and superior product quality.",
    points: [
      {
        text: "High efficiency Vertical Shaft Impactor (VSI)",
        icon: "vsi",
      },
      {
        text: "Integrated washing system with hydrocyclone and dewatering screen",
        icon: "washing",
      },
      {
        text: "Designed for zero silt contamination",
        icon: "silt",
      },
      {
        text: "Optimized for higher output and lower energy consumption",
        icon: "energy",
      },
      {
        text: "Complete installation, commissioning and technical support",
        icon: "support",
      },
    ],
  };

  const challenge = study.challenge || defaultChallenge;
  const solution = study.solution || defaultSolution;

  // Resolve challenge icon
  const getChallengeIcon = (iconName?: string, index: number = 0): LucideIcon => {
    switch (iconName) {
      case "quality":
        return Scale;
      case "filter":
        return Filter;
      case "energy":
        return Gauge;
      case "reliability":
        return ShieldCheck;
      case "building":
        return Building2;
      case "cog":
        return Cog;
      default:
        return [Scale, Filter, Gauge, ShieldCheck][index % 4];
    }
  };

  // Resolve solution icon
  const getSolutionIcon = (iconName?: string, index: number = 0): LucideIcon => {
    switch (iconName) {
      case "vsi":
        return Layers;
      case "washing":
        return Waves;
      case "silt":
        return ShieldCheck;
      case "energy":
        return Zap;
      case "support":
        return Award;
      default:
        return [Layers, Waves, ShieldCheck, Zap, Award][index % 5];
    }
  };

  return (
    <section className="py-8 md:py-12 bg-background text-foreground select-none">
      <Container>
        {/* Outer Split Card Container (Desktop: Single 2-col card; Mobile: Stacked cards) */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-0 lg:rounded-3xl lg:overflow-hidden lg:shadow-[0_12px_45px_rgba(0,0,0,0.06)] lg:border border-black/[0.06] dark:border-white/10">
          {/* ─── LEFT: CLIENT CHALLENGE (DARK NAVY) ─── */}
          <div className="bg-[#0B1528] rounded-2xl lg:rounded-none p-6 sm:p-8 md:p-10 lg:p-12 text-white flex flex-col justify-between border border-white/10 lg:border-0 relative overflow-hidden">
            {/* Subtle Industrial Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10">
              {/* Eyebrow */}
              <span className="text-[#F4B400] font-heading font-bold text-xs uppercase tracking-widest block mb-2.5">
                {challenge.eyebrow || "CLIENT CHALLENGE"}
              </span>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold font-heading text-white tracking-tight leading-snug mb-4">
                {challenge.title}
              </h3>

              {/* Description Paragraph */}
              <p className="text-gray-300 font-sans text-sm sm:text-[15px] leading-relaxed mb-5 lg:mb-8">
                {challenge.description}
              </p>

              {/* Challenge Points */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:border-0 lg:bg-transparent lg:p-0 space-y-4 sm:space-y-5">
                {challenge.points.map((pt, idx) => {
                  const text = typeof pt === "string" ? pt : pt.text;
                  const iconName = typeof pt === "string" ? undefined : pt.icon;
                  const IconComp = getChallengeIcon(iconName, idx);

                  return (
                    <div key={idx} className="flex items-center gap-3.5 sm:gap-4 group">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#18263E] border border-[#F4B400]/30 flex items-center justify-center text-[#F4B400] shrink-0 group-hover:scale-105 group-hover:border-[#F4B400] transition-all duration-200">
                        <IconComp size={18} className="stroke-[2.2]" />
                      </div>
                      <span className="text-sm sm:text-[14.5px] text-gray-200 font-medium font-sans leading-snug">
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── RIGHT: OUR SOLUTION (WHITE / LIGHT) ─── */}
          <div className="bg-white dark:bg-[#0E182A] rounded-2xl lg:rounded-none p-6 sm:p-8 md:p-10 lg:p-12 text-foreground flex flex-col justify-between border border-black/[0.06] dark:border-white/10 lg:border-0 shadow-sm lg:shadow-none relative">
            <div>
              {/* Eyebrow */}
              <span className="text-[#F4B400] font-heading font-bold text-xs uppercase tracking-widest block mb-2.5">
                {solution.eyebrow || "OUR SOLUTION"}
              </span>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold font-heading text-[#0A1A3B] dark:text-white tracking-tight leading-snug mb-4">
                {solution.title}
              </h3>

              {/* Description Paragraph */}
              <p className="text-gray-600 dark:text-gray-300 font-sans text-sm sm:text-[15px] leading-relaxed mb-5 lg:mb-8">
                {solution.description}
              </p>

              {/* Solution Points */}
              <div className="rounded-2xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-4 sm:p-5 lg:border-0 lg:bg-transparent lg:p-0 space-y-4 sm:space-y-5">
                {solution.points.map((pt, idx) => {
                  const text = typeof pt === "string" ? pt : pt.text;
                  const iconName = typeof pt === "string" ? undefined : pt.icon;
                  const IconComp = getSolutionIcon(iconName, idx);

                  return (
                    <div key={idx} className="flex items-center gap-3.5 sm:gap-4 group">
                      {/* Gold Circular Icon Badge matching user's reference screenshot */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FEF6E4] dark:bg-amber-500/20 border border-[#FDE6B8]/60 dark:border-amber-500/30 flex items-center justify-center text-[#F4B400] shrink-0 group-hover:scale-105 group-hover:border-[#F4B400] transition-all duration-200">
                        <IconComp size={18} className="stroke-[2.2]" />
                      </div>
                      <span className="text-sm sm:text-[14.5px] text-[#0A1A3B] dark:text-gray-100 font-medium font-sans leading-snug">
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
