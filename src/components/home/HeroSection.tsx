"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Custom SVG Separator Component
const Separator = () => (
  <div className="hidden lg:flex items-center text-white/50 shrink-0">
    <svg width="48" height="12" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="9" y1="6" x2="39" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="42" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </div>
);

const highlights = [
  {
    title: "India's Leading",
    subtitle: "Crusher Manufacturer",
  },
  {
    title: "35+ Years of Trust in",
    subtitle: "Crushing & Screening",
  },
  {
    title: "From Mining to Crushing",
    subtitle: "We Power Every Industry",
  }
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-30 bg-background select-none min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-20">
      
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/video_thumbnail.webp"
          preload="none"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/home-page.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for contrast removed per user request */}
      </div>



      {/* Bottom Horizontal Highlight Strip (Puzzolana Style) */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-8 pt-12 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-[1720px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 xl:gap-12">
            {highlights.map((item, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <h3 className="text-white font-bold text-lg lg:text-xl xl:text-[22px] uppercase whitespace-nowrap mb-1 tracking-wide drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-[15px] tracking-wide drop-shadow-sm">
                    {item.subtitle}
                  </p>
                </motion.div>
                
                {idx < highlights.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
