"use client";

import React, { useState } from "react";
import {
  Building2,
  Handshake,
  Wrench,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Award,
  User,
  Cog,
} from "lucide-react";
import Container from "../ui/Container";
import MobileCarousel from "@/components/ui/MobileCarousel";

const LEADERSHIP_MEMBERS = [
  {
    id: "chatar-singh",
    department: "EXECUTIVE BOARD",
    icon: ShieldCheck,
    name: "MR. CHATAR SINGH RATHORE",
    role: "Chairman & Managing Director (CMD)",
    focusTag: "Strategic Vision & Governance",
  },
  {
    id: "vaibhav-singh",
    department: "MANAGING DIRECTOR",
    icon: User,
    name: "MR. VAIBHAV SINGH RATHORE",
    role: "Managing Director (MD)",
    focusTag: "Corporate Expansion & Growth",
  },
  {
    id: "sonu-singh",
    department: "PRODUCTION & TECHNICAL",
    icon: Cog,
    name: "MR. SONU SINGH CHUNDAWAT",
    role: "Production Head",
    focusTag: "Plant Quality & Engineering",
  },
];

export default function TeamSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative section-padding-sm bg-[#FBFAF7] dark:bg-[#0B1020] text-foreground transition-colors duration-300 border-t border-b border-border/80 overflow-hidden select-none">
      {/* Background Masked Grid & Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(#0A1A3B 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-1/4 left-[-100px] w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-100px] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-8 lg:mb-10 px-4 mt-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="hidden sm:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
            <span className="text-primary eyebrow">
              OUR TEAM. YOUR SUPPORT.
            </span>
          </div>

          <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
            EXECUTIVE LEADERSHIP{" "}
            <span className="text-primary inline-block">DIRECTORY</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Connect with the right leadership for your specific needs. Our
            executive leaders are ready to guide your crushing and screening
            solutions.
          </p>
        </div>

        {/* Mobile Auto Carousel Slider (1 Card at a time, 2 sec) */}
        <div className="block md:hidden">
          <MobileCarousel autoSlideInterval={2000}>
            {LEADERSHIP_MEMBERS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative bg-card rounded-[18px] p-5 border border-border/80 shadow-sm flex flex-col justify-between overflow-hidden cursor-pointer w-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-border/40">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0 shadow-xs">
                          <Icon size={18} className="stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="font-sans text-xs font-bold text-[#0A1A3B] dark:text-white tracking-wider uppercase">
                            {item.department}
                          </h3>
                          <div className="w-6 h-[2px] bg-primary rounded-full mt-1" />
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-border/80 flex items-center justify-center text-slate-500 shrink-0 overflow-hidden shadow-inner">
                        <svg
                          className="w-9 h-9 text-slate-400 dark:text-slate-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>

                      <div className="space-y-1 text-left min-w-0 flex-1">
                        <h4 className="font-sans font-bold text-[#0A1A3B] dark:text-white text-sm uppercase tracking-tight leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[11px] font-semibold text-muted-foreground leading-snug">
                          {item.role}
                        </p>

                        <div className="pt-1.5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-muted/60 text-muted-foreground border border-border/60 whitespace-nowrap">
                            <Award
                              size={10}
                              className="shrink-0 text-primary"
                            />
                            <span className="truncate">{item.focusTag}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </MobileCarousel>
        </div>

        {/* Desktop 3 Leadership Cards Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LEADERSHIP_MEMBERS.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative bg-card rounded-[18px] p-6 border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-xl ${
                  isHovered
                    ? "border-primary shadow-lg ring-1 ring-primary/30"
                    : "border-border/80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/40">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                        <Icon size={20} className="stroke-[2.2]" />
                      </div>
                      <div>
                        <h3 className="font-sans text-xs font-bold text-[#0A1A3B] dark:text-white tracking-wider uppercase">
                          {item.department}
                        </h3>
                        <div className="w-7 h-[2px] bg-primary rounded-full mt-1 group-hover:w-12 transition-all duration-300" />
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-border/80 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0 overflow-hidden shadow-inner">
                      <svg
                        className="w-10 h-10 text-slate-400 dark:text-slate-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>

                    <div className="space-y-1 text-left min-w-0 flex-1">
                      <h4 className="font-sans font-bold text-[#0A1A3B] dark:text-white text-sm sm:text-base group-hover:text-primary transition-colors duration-300 uppercase tracking-tight leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-xs font-semibold text-muted-foreground leading-snug">
                        {item.role}
                      </p>

                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted/60 text-muted-foreground border border-border/60 whitespace-nowrap">
                          <Award size={11} className="shrink-0 text-primary" />
                          <span className="truncate">{item.focusTag}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Response Assurance Bar */}
        <div className="mt-8 pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-primary shrink-0" />
            <span>
              We ensure your query reaches the right leadership team for a quick
              and effective response.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} className="text-primary shrink-0" />
            <span>
              Average Response Time:{" "}
              <strong className="text-foreground">Within 24 Hours</strong>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
