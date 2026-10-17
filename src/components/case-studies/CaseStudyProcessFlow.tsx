"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mountain, Cog, Droplets, Sparkles, LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { CaseStudy } from "@/data/case-studies-data";

interface CaseStudyProcessFlowProps {
  study: CaseStudy;
}

export default function CaseStudyProcessFlow({ study }: CaseStudyProcessFlowProps) {
  // 6-step Desktop Flow defaults
  const desktopSteps = [
    {
      step: 1,
      title: "Raw Material",
      subtitle: "(Stone Feed)",
      desktopIcon: "/images/case-studies/flow-icon-1.png",
    },
    {
      step: 2,
      title: "Primary Crushing",
      subtitle: "",
      desktopIcon: "/images/case-studies/flow-icon-2.png",
    },
    {
      step: 3,
      title: "VSI Sand Making",
      subtitle: "(Secondary Crushing)",
      desktopIcon: "/images/case-studies/flow-icon-3.png",
    },
    {
      step: 4,
      title: "Washing &",
      subtitle: "Classification",
      desktopIcon: "/images/case-studies/flow-icon-4.png",
    },
    {
      step: 5,
      title: "Dewatering",
      subtitle: "",
      desktopIcon: "/images/case-studies/flow-icon-5.png",
    },
    {
      step: 6,
      title: "Final Product",
      subtitle: "(M-Sand)",
      desktopIcon: "/images/case-studies/flow-icon-6.png",
    },
  ];

  // 4-step Mobile Timeline defaults
  const mobileSteps = [
    {
      step: 1,
      title: "Raw Material Feeding",
      description: "Natural rock is fed into the plant.",
      image: "/images/case-studies/flow-step-1.png",
      icon: Mountain,
      iconColor: "text-[#F4B400]",
    },
    {
      step: 2,
      title: "Crushing & Screening",
      description: "Material is crushed and screened to desired size.",
      image: "/images/case-studies/flow-step-2.png",
      icon: Cog,
      iconColor: "text-[#F4B400]",
    },
    {
      step: 3,
      title: "Sand Washing",
      description: "Washed to remove dust and impurities.",
      image: "/images/case-studies/flow-step-3.png",
      icon: Droplets,
      iconColor: "text-[#2563EB]", // Blue droplet on mobile screenshot
    },
    {
      step: 4,
      title: "Final M-Sand",
      description: "Consistent, high-quality manufactured sand.",
      image: "/images/case-studies/flow-step-4.png",
      icon: Sparkles,
      iconColor: "text-[#F4B400]",
    },
  ];

  return (
    <section className="select-none">
      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP VIEW (MD & UP): FULL DARK QUARRY PROCESS FLOW BANNER
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block bg-[#081220] relative overflow-hidden py-8 lg:py-12 border-y border-white/10">
        {/* Dark Industrial Quarry Backdrop Overlay */}
        <div className="absolute inset-0 bg-[url('/images/background-hero.webp')] bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D18]/90 via-[#081220]/80 to-[#060D18]/90 pointer-events-none" />

        <Container className="relative z-10">
          {/* Eyebrow & Section Heading */}
          <div className="mb-10 lg:mb-12 space-y-2">
            <span className="eyebrow text-[#F4B400] font-heading font-bold text-xs uppercase tracking-widest block">
              PLANT PROCESS FLOW
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading text-white tracking-tight leading-tight">
              From Raw Material to High-Quality M-Sand
            </h2>
          </div>

          {/* 6 Horizontal Steps with Golden Connecting Arrows */}
          <div className="flex items-center justify-between gap-1 sm:gap-2 lg:gap-3 max-w-5xl mx-auto">
            {desktopSteps.map((stepItem, idx) => (
              <React.Fragment key={idx}>
                {/* Step Item */}
                <div className="flex flex-col items-center flex-1 max-w-[130px] group">
                  {/* Circular White Badge */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-white overflow-hidden flex items-center justify-center p-2.5 sm:p-3 shadow-[0_6px_25px_rgba(0,0,0,0.35)] group-hover:scale-108 transition-transform duration-300">
                    <Image
                      src={stepItem.desktopIcon}
                      alt={stepItem.title}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-3.5 text-center">
                    <span className="text-xs sm:text-[13px] lg:text-[14px] font-bold font-heading text-white leading-tight block">
                      {stepItem.title}
                    </span>
                    {stepItem.subtitle && (
                      <span className="text-[10px] sm:text-[11px] text-gray-400 font-sans leading-tight mt-0.5 block">
                        {stepItem.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Golden Arrow Between Steps */}
                {idx < desktopSteps.length - 1 && (
                  <div className="shrink-0 text-[#F4B400] -mt-8 flex items-center justify-center opacity-85">
                    <ArrowRight size={20} className="stroke-[2.5]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE VIEW (< MD): VERTICAL PROCESS TIMELINE CARD
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden py-10 bg-background">
        <Container>
          <div className="bg-white dark:bg-[#0B1528] rounded-3xl p-6 sm:p-7 shadow-sm border border-black/[0.05] dark:border-white/10">
            {/* Eyebrow & Heading */}
            <div className="mb-7 space-y-1.5">
              <span className="eyebrow text-[#F4B400] font-heading font-bold text-xs uppercase tracking-widest block">
                PROCESS FLOW
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#0A1A3B] dark:text-white tracking-tight leading-tight">
                From Raw Material to High-Quality M-Sand
              </h2>
            </div>

            {/* Vertical Process Timeline */}
            <div className="relative space-y-6">
              {/* Continuous Golden Dashed Connecting Line (precisely centered through 32px icon badges at x=102px) */}
              <div className="absolute left-[102px] -translate-x-1/2 top-4 bottom-8 w-0.5 border-l-2 border-dashed border-[#F4B400]/70 z-0 pointer-events-none" />

              {mobileSteps.map((mStep, idx) => {
                const IconComponent = mStep.icon;

                return (
                  <div key={idx} className="flex items-center gap-3 relative z-10">
                    {/* Left Circular Photo Thumbnail */}
                    <div className="w-[74px] h-[74px] rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-md shrink-0 bg-slate-100 relative">
                      <Image
                        src={mStep.image}
                        alt={mStep.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Middle Circular Icon Badge */}
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-[#FDE6B8] dark:border-amber-500/30 shadow-sm flex items-center justify-center shrink-0">
                      <IconComponent size={15} className={`${mStep.iconColor} stroke-[2.5]`} />
                    </div>

                    {/* Right Step Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-bold font-heading text-[#0A1A3B] dark:text-white leading-tight">
                        {mStep.title}
                      </h4>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 font-sans leading-snug mt-1">
                        {mStep.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
