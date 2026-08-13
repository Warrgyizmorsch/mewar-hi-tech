"use client";

import React from "react";
import { Cog, Truck, Headset, Award } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

import MobileCarousel from "@/components/ui/MobileCarousel";

const LEFT_ICONS = [
  {
    icon: Cog,
    title: "ENGINEERING EXCELLENCE",
    desc: "Advanced design.",
  },
  {
    icon: Truck,
    title: "TURNKEY SOLUTIONS",
    desc: "End-to-end setup.",
  },
  {
    icon: Headset,
    title: "EXPERT SUPPORT",
    desc: "24/7 service.",
  },
  {
    icon: Award,
    title: "CERTIFIED QUALITY",
    desc: "ISO 9001:2008.",
  },
];

const TOP_IMAGES = [
  {
    title: "BUILT TOUGH",
    src: "/images/built_tough.webp",
    colSpan: "col-span-12 sm:col-span-6",
  },
  {
    title: "LOW OPERATING COST",
    src: "/images/low_operating_cost.webp",
    colSpan: "col-span-12 sm:col-span-6",
  },
  {
    title: "MAXIMUM PRODUCTIVITY",
    src: "/images/maximum_productivity.webp",
    colSpan: "col-span-12 sm:col-span-7",
  },
  {
    title: "GLOBAL SUPPORT",
    src: "/images/global_support.webp",
    colSpan: "col-span-12 sm:col-span-5",
  },
];

const BOTTOM_IMAGES = [
  { title: "PREMIUM QUALITY", src: "/images/premium_quality.webp" },
  { title: "FAST DELIVERY", src: "/images/export-projects-1.jpg" },
  { title: "EASY MAINTENANCE", src: "/images/after-sales-1.jpg" },
  { title: "ECO FRIENDLY", src: "/images/latest-projects-2.jpg" },
];

const ALL_FEATURE_IMAGES = [...TOP_IMAGES, ...BOTTOM_IMAGES];

export default function WhyChooseUs() {
  return (
    <section className="bg-background text-foreground section-padding-sm relative overflow-hidden select-none border-y border-border/80">
      <Container className="relative z-10 space-y-6 sm:space-y-4">
        {/* Top Section: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Left Column: Text & Icons */}
          <div className="lg:col-span-5 space-y-8 lg:pr-6 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  WHY CHOOSE US
                </span>
              </div>
              <h2 className="heading-primary leading-[1.05] text-[#0A1A3B] dark:text-white">
                ENGINEERED TO{" "}
                <span className="text-primary block">DELIVER MORE.</span>
              </h2>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-md pt-2 text-center">
                At Mewar Hi-Tech, we deliver high-performance crushing
                technology engineered for durability, maximum uptime, and
                unmatched customer support across all sites. Here, every machine
                plays a part in building world-class infrastructure.
              </p>
            </div>

            {/* Icons Grid (4 columns side by side) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {LEFT_ICONS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center space-y-3 group border-r border-border/40 last:border-0 pr-4 last:pr-0"
                  >
                    <div className="w-12 h-12 rounded-xl bg-card border border-border/80 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm">
                      <IconComponent size={22} className="stroke-[2]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-bold text-foreground uppercase tracking-wider leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[9px] text-muted-foreground font-medium leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column (Desktop / Tablet): Top 4 Images */}
          <div className="hidden sm:block lg:col-span-7">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {TOP_IMAGES.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`${img.colSpan} relative rounded-xl overflow-hidden group shadow-sm bg-muted h-[180px] lg:h-[220px]`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Bottom Text Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0A1A3B] border-t border-white/10 p-2.5 sm:p-3">
                    <h3 className="text-white text-[10px] sm:eyebrow inline- text-center">
                      {img.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Auto Carousel Slider (1 Card at a time, 2 sec) */}
        <div className="block sm:hidden pt-2">
          <MobileCarousel autoSlideInterval={2000}>
            {ALL_FEATURE_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden shadow-sm bg-muted h-[220px] w-full"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A1A3B] border-t border-white/10 p-3">
                  <h3 className="text-white eyebrow inline- text-center">
                    {img.title}
                  </h3>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>

        {/* Bottom Section (Desktop / Tablet): Full Width 4 Images */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {BOTTOM_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="relative rounded-xl overflow-hidden group shadow-sm bg-muted h-[180px] lg:h-[220px]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Text Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0A1A3B] border-t border-white/10 p-2.5 sm:p-3">
                <h3 className="text-white text-[10px] sm:eyebrow inline- text-center">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
