"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MachineCategory } from "./types";
import { MachineFooter } from "./MachineFooter";
import { cardTransition, hoverOverlayVariants } from "./animations";

interface MachineCardProps {
  category: MachineCategory;
  index: number;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export const MachineCard: React.FC<MachineCardProps> = ({
  category,
  index,
  isHovered,
  isAnyHovered,
  onHoverStart,
  onHoverEnd,
}) => {
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(category.to);
    }
  };

  return (
    <motion.div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      onClick={() => router.push(category.to)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Explore our ${category.title} solutions`}
      className="relative h-full min-h-[400px] lg:min-h-0 lg:h-[480px] bg-white dark:bg-[#0A1A3B] rounded-xl overflow-hidden cursor-pointer select-none border-2 border-border shadow-md group outline-none focus-visible:ring-2 focus-visible:ring-primary flex flex-col transition-[flex] duration-300 ease-out"
      style={{
        flex: `${isHovered ? 2.2 : isAnyHovered ? 0.8 : 1} 1 0%`,
      }}
    >
      {/* Clean White Card Background Texture */}
      <div className="absolute inset-0 bg-white dark:bg-[#070E1B] z-0 pointer-events-none overflow-hidden">
        {/* Subtle center warm backlight to make machine renders stand out */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,180,0,0.06)_0%,transparent_70%)]" />
      </div>

      {/* 
        PRODUCT IMAGE DISPLAY AREA:
        - Dedicated container bounded strictly above the footer and below the top badge.
        - Safe padding: pt-16 top clearance below icon badge, px-6 side margins, dynamic pb above footer.
        - Dynamic bottom padding adjustment on hover ensures the machine never collides with expanding footer.
        - Flexbox centering (justify-center items-center) keeps PNG centered in available space.
        - object-contain guarantees 100% full visibility with zero cropping or aspect ratio distortion.
        - Subtle scale (1.03) and Y-lift (-6px) give a premium product float feel without leaving card bounds.
      */}
      <motion.div
        animate={{
          paddingBottom: isHovered ? "150px" : "85px",
        }}
        transition={cardTransition}
        className="absolute inset-0 pt-16 px-6 z-10 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.03 : 1,
            y: isHovered ? -6 : 0,
          }}
          transition={cardTransition}
          className="relative w-full h-full flex items-center justify-center"
        >
          <Image
            src={category.image}
            alt={category.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={index === 0}
            className="object-contain drop-shadow-2xl transition-all duration-300"
          />
        </motion.div>
      </motion.div>

      {/* Category Icon Badge in Top-Left Corner (Solid, architectural) */}
      <div className="absolute top-5 left-5 z-20 bg-primary text-primary-foreground p-2.5 rounded shadow-sm group-hover:scale-105 transition-transform duration-300">
        {React.createElement(category.icon, { size: 18, strokeWidth: 2.5 })}
      </div>

      {/* Footer Element */}
      <MachineFooter category={category} isHovered={isHovered} />
    </motion.div>
  );
};
