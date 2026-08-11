"use client";

import React from "react";
import { motion } from "framer-motion";
import { Recycle, Hammer, Mountain, Grid, Waves } from "lucide-react";

const industries = [
  {
    icon: Recycle,
    name: "Recycling",
    desc: "Mobile processing solutions for demolition waste, concrete, and recycled asphalt.",
  },
  {
    icon: Hammer,
    name: "Road Construction",
    desc: "High-performance grading equipment for highways, paving base, and infrastructure.",
  },
  {
    icon: Grid,
    name: "Aggregates",
    desc: "Precision crushing and sizing for concrete aggregate and building materials.",
  },
  {
    icon: Waves,
    name: "Sand & Gravel",
    desc: "Reliable mobile machinery for sand washing, screening, and wet gravel sizing.",
  },
  {
    icon: Mountain,
    name: "Quarrying",
    desc: "Heavy-duty primary jaw and cone crushers built for blasting and mining applications.",
  },
];

const IndustriesGrid: React.FC = () => {
  return (
    <section className="section-padding bg-background select-none border-t border-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
            <span className="text-primary eyebrow">
              INDUSTRIES WE SERVE
            </span>
          </div>
          <h2 className="heading-primary text-[#0A1A3B] dark:text-white mt-3 leading-tight">
            POWERING HEAVY <span className="text-primary inline-block">SECTORS</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="group bg-card border-2 border-border p-8 rounded-none hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Yellow top accent indicator line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-primary text-primary-foreground rounded-none mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <ind.icon size={26} strokeWidth={2} />
              </div>

              {/* Name */}
              <h3 className="common-heading text-foreground text-base mb-3 tracking-wide">
                {ind.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-xs leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;