"use client";

import React from "react";
import { TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { CaseStudy } from "@/data/case-studies-data";

interface CaseStudyPerformanceProps {
  study: CaseStudy;
}

export default function CaseStudyPerformance({
  study,
}: CaseStudyPerformanceProps) {
  // Stats matching the exact approved design screenshot
  const stats = [
    {
      value: study.stats?.[0]?.value || "35%",
      label: study.stats?.[0]?.label || "HIGHER PRODUCTIVITY",
      description:
        "Improved production efficiency with advanced VSI technology.",
      icon: TrendingUp,
    },
    {
      value: study.stats?.[1]?.value || "20%",
      label: study.stats?.[1]?.label || "LOWER DOWNTIME",
      description: "Optimized design reduced overall energy consumption.",
      icon: Zap,
    },
    {
      value: study.stats?.[2]?.value || "98%",
      label: study.stats?.[2]?.label || "MATERIAL CONSISTENCY",
      description:
        "Consistent product quality meeting IS 383 Zone II standards.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="bg-background text-foreground select-none">
      <Container>
        {/* ─── WARM CREAM CARD CONTAINER ─── */}
        <div className="bg-[#FFF9ED] dark:bg-[#0E1624] border border-[#FDE6B8] dark:border-amber-500/20 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Eyebrow & Section Heading */}
          <div className="mb-6 sm:mb-8 space-y-1.5">
            <span className="eyebrow text-primary font-heading font-bold text-xs uppercase tracking-widest block">
              PERFORMANCE RESULTS &amp; ROI
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-extrabold font-heading text-[#0A1A3B] dark:text-white uppercase tracking-tight leading-tight">
              Proven Performance, Measurable Impact
            </h2>
          </div>

          {/* 3 Metrics Grid (Horizontal on Desktop, Stacked on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-card rounded-2xl p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] border border-black/[0.04] dark:border-white/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    {/* Top Row: Small Circular Icon on Left + Value & Label on Right */}
                    <div className="flex items-start gap-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[8px] bg-[#FFF5DC] dark:bg-amber-500/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <IconComponent size={20} className="stroke-[2.5]" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-2xl sm:text-[28px] font-black font-heading text-[#0A1A3B] dark:text-white tracking-tight leading-none">
                          {stat.value}
                        </div>
                        <div className="text-[11px] sm:text-xs font-black font-heading text-[#0A1A3B] dark:text-gray-100 uppercase tracking-wider mt-1.5">
                          {stat.label}
                        </div>
                        {/* Explanatory Paragraph */}
                        <p className="text-xs sm:text-[13px] text-gray-600 dark:text-gray-300 font-sans leading-relaxed mt-5">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
