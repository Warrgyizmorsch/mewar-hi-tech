"use client";

import React from "react";
import Link from "next/link";
import { Recycle, Hammer, Mountain, Grid, Waves, Pickaxe, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Mountain,
    name: "Quarrying",
    slug: "quarrying",
    desc: "Heavy-duty primary jaw and cone crushers built for blasting and granite quarrying.",
  },
  {
    icon: Pickaxe,
    name: "Mining",
    slug: "mining",
    desc: "Continuous 24/7 crushing and sizing systems for iron ore, bauxite, and heavy minerals.",
  },
  {
    icon: Waves,
    name: "M-Sand Production",
    slug: "m-sand",
    desc: "VSI sand makers and bucket wheel sand washers producing IS 383 Zone II concrete sand.",
  },
  {
    icon: Hammer,
    name: "Road Construction",
    slug: "road-construction",
    desc: "High-performance grading equipment for highways, paving base (GSB/WMM), and runways.",
  },
  {
    icon: Recycle,
    name: "Recycling & Slag",
    slug: "recycling",
    desc: "Heavy processing solutions for demolition rubble, recycled concrete (RCA), and industrial slag.",
  },
  {
    icon: Grid,
    name: "Aggregates",
    slug: "aggregates",
    desc: "Precision multi-deck sizing for commercial RMC plants and high-strength concrete mixes.",
  },
];

const IndustriesGrid: React.FC = () => {
  return (
    <section className="section-padding bg-background select-none border-t border-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 text-center md:text-left mx-auto md:mx-0">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
            <span className="text-primary eyebrow">
              INDUSTRIES WE SERVE
            </span>
          </div>
          <h2 className="heading-primary text-[#0A1A3B] dark:text-white mt-3 leading-tight">
            POWERING HEAVY <span className="text-primary inline-block">SECTORS</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3">
            Explore dedicated crushing, screening, and sizing solutions engineered for your exact operational requirements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href={`/industries/${ind.slug}`}
              id={ind.slug}
              className="group bg-card border-2 border-border p-8 rounded-none hover:shadow-xl hover:border-primary transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Yellow top accent indicator line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-primary text-primary-foreground rounded-none mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ind.icon size={26} strokeWidth={2} />
                </div>

                {/* Name */}
                <h3 className="common-heading text-foreground text-lg mb-3 tracking-wide group-hover:text-primary transition-colors">
                  {ind.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  {ind.desc}
                </p>
              </div>

              {/* Link CTA */}
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary pt-4 border-t border-border/60">
                <span>View Dedicated Solutions</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;