"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlobButton from "@/components/ui/BlobButton";
import Container from "../ui/Container";

const WELCOME_IMAGES = [
  {
    src: "/images/index-1.jpg",
    alt: "Plant installation assembly",
  },
  {
    src: "/images/index-2.jpg",
    alt: "Crusher component parts",
  },
  {
    src: "/images/index-3.jpg",
    alt: "Welcome project deployment",
  }
];

export default function WelcomeTeaser() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WELCOME_IMAGES.length);
    }, 3000); // 1.5s for smooth transitions
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="section-padding-sm bg-background overflow-hidden border-b border-border/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  WELCOME TO MEWAR
                </span>
              </div>
              <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                MEWAR HITECH <span className="text-primary inline-block">ENGINEERING LIMITED</span>
              </h2>
            </div>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4 font-medium">
              <p>
                Mewar Hitech is a leading manufacturer and exporter of
                heavy-duty crushing, screening, and size reduction equipment.
                With decades of industrial expertise, we design machines
                engineered for maximum durability, high performance, and
                continuous operation under extreme loads.
              </p>
              <p>
                We offer complete turnkey projects including plant layout
                design, manufacturing, supply, erection, commissioning, and
                dedicated maintenance support. Our state-of-the-art
                manufacturing plant is equipped with modern tooling and
                precision machinery to ensure every equipment meets strict
                quality standards.
              </p>
            </div>
            <div className="pt-2">
              <Link href="/about">
                <BlobButton
                  variant="primary"
                  className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={14} />
                </BlobButton>
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 w-full">
            {/* Desktop Collage */}
            <div className="hidden lg:flex justify-center relative aspect-[4/3] w-full max-w-[550px] mx-auto">
              {/* Image 1 (Background left) */}
              <div className="absolute left-0 top-[10%] w-[45%] aspect-square rounded-xl overflow-hidden border border-border shadow-lg rotate-[-3deg] hover:rotate-0 hover:z-20 transition-all duration-300">
                <img
                  src={WELCOME_IMAGES[0].src}
                  alt={WELCOME_IMAGES[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image 2 (Background right) */}
              <div className="absolute right-0 top-[15%] w-[40%] aspect-square rounded-xl overflow-hidden border border-border shadow-lg rotate-[4deg] hover:rotate-0 hover:z-20 transition-all duration-300">
                <img
                  src={WELCOME_IMAGES[1].src}
                  alt={WELCOME_IMAGES[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image 3 (Foreground center) */}
              <div className="absolute left-[20%] top-[25%] w-[60%] aspect-[4/3] rounded-xl overflow-hidden border border-primary/20 shadow-2xl rotate-[-1deg] hover:rotate-0 z-10 hover:z-20 hover:border-primary/40 transition-all duration-300 bg-card">
                <img
                  src={WELCOME_IMAGES[2].src}
                  alt={WELCOME_IMAGES[2].alt}
                  className="w-full h-full object-cover p-2.5 bg-card"
                />
              </div>
            </div>

            {/* Mobile Auto Slider */}
            <div className="flex lg:hidden justify-center items-center w-full relative h-[300px] sm:h-[400px] overflow-hidden rounded-xl border border-border shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={WELCOME_IMAGES[activeIndex].src}
                    alt={WELCOME_IMAGES[activeIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-[6px] border-card pointer-events-none rounded-xl" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
