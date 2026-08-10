"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MachineCategory } from "./types";
import { cardTransition, footerContentVariants } from "./animations";
import BlobButton from "../ui/BlobButton";

interface MachineFooterProps {
  category: MachineCategory;
  isHovered: boolean;
}

export const MachineFooter: React.FC<MachineFooterProps> = ({
  category,
  isHovered,
}) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 bg-[#0A1A3B] border-t border-border/40 flex flex-col justify-end overflow-hidden shadow-lg"
    >
      {/* Title & Arrow Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-base sm:text-[17px] font-bold uppercase tracking-wider select-none font-heading">
          {category.title}
        </h3>
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0 }}
          transition={cardTransition}
          className="text-white shrink-0"
        >
          <ArrowRight size={18} className="stroke-[2.5]" />
        </motion.div>
      </div>

      {/* Expanded Description and CTA Link (Native CSS Grid Accordion) */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
          isHovered ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`mt-3.5 space-y-4 transition-all duration-200 ease-out ${
              isHovered ? "opacity-100 translate-y-0 [transition-delay:50ms]" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-white/80 text-[11px] font-semibold leading-relaxed text-left max-w-sm select-none">
              {category.desc}
            </p>
            <Link href={category.to} className="cursor-pointer inline-block">
              <BlobButton variant="primary" className="!py-2.5 !px-6 text-[10px] font-bold">
                <span>Read More</span>
                <ArrowRight size={12} className="stroke-[3]" />
              </BlobButton>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
