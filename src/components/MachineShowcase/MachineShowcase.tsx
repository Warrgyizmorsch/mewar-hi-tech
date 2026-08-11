"use client";

import React, { useState, useRef, useEffect } from "react";
import { Hammer, Layers, ArrowLeftRight, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MachineCard } from "./MachineCard";
import { MachineCategory } from "./types";

const CATEGORIES: MachineCategory[] = [
  {
    title: "Crushers",
    desc: "High performance crushing solutions for every need.",
    image: "/images/cone-crusher.webp",
    icon: Hammer,
    to: "/products?category=crushers",
    exploreLabel: "Explore Crushers",
  },
  {
    title: "Screeners",
    desc: "Efficient screening for precise separation and high productivity.",
    image: "/images/vibrating-screen.webp",
    icon: Layers,
    to: "/products?category=screens",
    exploreLabel: "Explore Screeners",
  },
  {
    title: "Sand Making",
    desc: "Advanced aggregate processing solutions for easy washing and sizing.",
    image: "/images/sand-making-machine.webp",
    icon: ArrowLeftRight,
    to: "/products",
    exploreLabel: "Explore Sand Making",
  },
  {
    title: "Feeders",
    desc: "Reliable feeding equipment for continuous performance.",
    image: "/images/vibro-feeder.webp",
    icon: Settings,
    to: "/products?category=feeders",
    exploreLabel: "Explore Feeders",
  },
];

export const MachineShowcase: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileIdx, setMobileIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIdx((prev) => (prev + 1) % CATEGORIES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* 1. Desktop Layout (lg and up) - Interactive Expanding Cards */}
      <div className="hidden lg:flex flex-row gap-4 w-full items-stretch">
        {CATEGORIES.map((cat, idx) => (
          <MachineCard
            key={cat.title}
            category={cat}
            index={idx}
            isHovered={hoveredIdx === idx}
            isAnyHovered={hoveredIdx !== null}
            onHoverStart={() => setHoveredIdx(idx)}
            onHoverEnd={() => setHoveredIdx(null)}
          />
        ))}
      </div>

      {/* 2. Tablet Layout (md to lg) - Grid Layout */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 w-full">
        {CATEGORIES.map((cat, idx) => (
          <div key={cat.title} className="h-[400px] w-full">
            <MachineCard
              category={cat}
              index={idx}
              isHovered={false}
              isAnyHovered={false}
              onHoverStart={() => {}}
              onHoverEnd={() => {}}
            />
          </div>
        ))}
      </div>

      {/* 3. Mobile Layout (below md) - Auto-sliding Carousel */}
      <div className="block md:hidden w-full overflow-hidden relative rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${mobileIdx * 100}%)` }}
        >
          {CATEGORIES.map((cat, idx) => (
            <div key={cat.title} className="w-full shrink-0 h-[400px]">
              <MachineCard
                category={cat}
                index={idx}
                isHovered={false}
                isAnyHovered={false}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
              />
            </div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10">
          {CATEGORIES.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === mobileIdx ? "w-6 bg-primary" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* <div className="flex justify-center md:hidden mt-2">
        <Link
          href="/products"
          className="text-foreground font-bold hover:text-primary transition-colors flex items-center gap-1 text-sm border-b-2 border-primary pb-0.5"
        >
          <span>Explore All Machines</span>
          <ArrowRight size={16} className="text-primary stroke-[2.5]" />
        </Link>
      </div> */}
    </div>
  );
};
