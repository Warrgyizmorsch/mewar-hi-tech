"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlobButton from "@/components/ui/BlobButton";

const YellowDealerBanner: React.FC = () => {
  return (
    <section
      className="relative section-padding select-none overflow-hidden bg-primary border-y border-primary-hover/30 shadow-sm"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-20 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-20c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm20 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' fill='%23d89b00' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E"),
          linear-gradient(to right, hsl(var(--primary)), #F8C025, hsl(var(--primary)))
        `,
      }}
    >
      {/* Decorative left/right soft glows */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Text */}
        <motion.h3
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="common-heading text-lg md:text-xl lg:text-2xl text-primary-foreground tracking-wider text-center md:text-left"
        >
          Find an authorized Keestrack Dealer
        </motion.h3>

        {/* Right Button */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/contact">
            <BlobButton
              variant="secondary"
              className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2"
            >
              <span>Dealer Locator</span>
              <ArrowRight size={14} />
            </BlobButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default YellowDealerBanner;
