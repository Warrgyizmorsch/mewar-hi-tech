"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  image?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  label,
  title,
  description,
  image = "/images/background-hero.webp",
}) => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 bg-secondary overflow-hidden select-none border-b-4 border-border">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div
        className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-5"
      >
        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest border border-primary">
          {label}
        </span>
        <h1 className="common-heading text-4xl sm:text-5xl lg:text-7xl text-secondary-foreground leading-[1.1] font-bold uppercase max-w-4xl tracking-tight">
          {title}
        </h1>
        <div className="w-16 h-1.5 bg-primary rounded-none mt-6 mb-6" />
        <p className="text-secondary-foreground/70 text-base sm:text-xl max-w-2xl font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;