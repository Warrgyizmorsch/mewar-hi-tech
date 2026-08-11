"use client";

import React from "react";
import { motion } from "framer-motion";

const RevolutionBanner: React.FC = () => {
  return (
    <section
      className="relative section-padding overflow-hidden select-none bg-secondary border-b border-border/10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(244, 180, 0, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(244, 180, 0, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundPosition: "center center",
      }}
    >
      {/* Radial soft primary glowing light in the background */}
      <div className="absolute left-[30%] top-[-20%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[30%] bottom-[-20%] w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Text */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="common-heading text-4xl sm:text-6xl lg:text-7xl text-secondary-foreground tracking-[0.2em] text-center leading-none"
        >
          Join the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#F8C025] to-[#FFF0B3] drop-shadow-[0_0_20px_rgba(244,180,0,0.3)]">
            revolution
          </span>
          .
        </motion.h2>
      </div>
    </section>
  );
};

export default RevolutionBanner;
