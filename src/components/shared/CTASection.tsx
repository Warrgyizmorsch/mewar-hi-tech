"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BlobButton from "@/components/ui/BlobButton";

const CTASection: React.FC = () => {
  return (
    <section className="relative section-padding bg-secondary overflow-hidden select-none">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/backgorund.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <div className="text-left space-y-4 max-w-2xl">
          <h2 className="heading-primary text-white">
            NEED INDUSTRIAL <span className="text-primary inline-block">SOLUTIONS?</span>
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-none" />
          <p className="text-secondary-foreground/75 text-base sm:text-lg font-medium leading-relaxed">
            Partner with Mewar Hi-Tech for reliable, high-performance machinery engineered to
            maximize your operational output.
          </p>
        </div>
        <div className="shrink-0 w-full lg:w-auto">
          <Link href="/contact" className="block w-full">
            <BlobButton variant="primary" className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2 w-full lg:w-auto shadow-xl">
              <span>Request Quote</span>
              <ArrowRight size={14} />
            </BlobButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;