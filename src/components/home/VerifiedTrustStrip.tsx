"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";

const TRUST_BADGES = [
  {
    title: "LEADING PROVIDER",
    subtitle: "OF INDUSTRIAL SOLUTIONS",
    icon: Award,
  },
  {
    title: "NUMBER 1",
    subtitle: "SUPPLIER IN INDIA",
    icon: Trophy,
  },
  {
    title: "CERTIFIED",
    subtitle: "ISO 9001:2008",
    icon: ShieldCheck,
  },
];

export default function VerifiedTrustStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TRUST_BADGES.length);
    }, 1500); // ~1.5s to account for animation time, effectively 1 sec visible
    return () => clearInterval(timer);
  }, []);

  const renderBadge = (badge: typeof TRUST_BADGES[0], isMobile: boolean) => {
    const IconComp = badge.icon;
    return (
      <div
        className={`flex flex-row items-center justify-center ${isMobile ? "gap-4" : "gap-4"} px-2 md:px-4 lg:px-6 group w-full`}
      >
        {/* Raw Icon Container */}
        <div className="text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          <IconComp className={`${isMobile ? "w-10 h-10" : "w-8 h-8 lg:w-10 lg:h-10"} stroke-[2.5]`} />
        </div>

        {/* Typography Block */}
        <div className="text-left">
          <h3 className={`font-bold text-foreground uppercase tracking-normal font-heading leading-tight ${isMobile ? "text-xl" : "text-lg lg:text-2xl"}`}>
            {badge.title}
          </h3>
          <p className={`font-bold text-muted-foreground uppercase tracking-wide font-sans ${isMobile ? "text-xs" : "text-sm"}`}>
            {badge.subtitle}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-1 md:py-2 bg-card border-b-4 border-border relative overflow-hidden select-none">
      <Container className="relative z-10">
        {/* Desktop & Tablet View */}
        <div className="hidden md:grid grid-cols-3 gap-x-4 lg:gap-x-8 items-center divide-x-2 divide-border">
          {TRUST_BADGES.map((badge, idx) => (
            <React.Fragment key={idx}>
              {renderBadge(badge, false)}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View Slider */}
        <div className="md:hidden relative h-[70px] w-full flex flex-row items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute w-full"
            >
              {renderBadge(TRUST_BADGES[activeIndex], true)}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
