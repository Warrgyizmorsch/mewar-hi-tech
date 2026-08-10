"use client";

import React from "react";
import { Wrench, Factory, ClipboardCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

import MobileCarousel from "@/components/ui/MobileCarousel";

const CARDS_DATA = [
  {
    icon: Wrench,
    title: "HEAVY MACHINERY",
    description:
      "Wide range of high-capacity jaw crushers, cone units, screeners, and feeders built to withstand severe crushing environments.",
    link: "/products",
    image: "/images/heavy_machinery_card_1785825248756.webp",
  },
  {
    icon: Factory,
    title: "ADVANCED INFRASTRUCTURE",
    description:
      "State-of-the-art casting foundry and assembly halls equipped with modern CNC tools and heavy lathe machines.",
    link: "/infrastructure/manufacturing",
    image: "/images/advanced_infrastructure_card_1785825261337.webp",
  },
  {
    icon: ClipboardCheck,
    title: "TURNKEY PROJECTS",
    description:
      "Complete plant installations spanning design layout, equipment manufacturing, field erection, and maintenance.",
    link: "/projects",
    image: "/images/turnkey_projects_card_1785825275121.webp",
  },
];

export default function WhyKingsonSection() {
  return (
    <section
      className="py-10 lg:py-14 text-white select-none relative"
      style={{
        backgroundImage: "url('/images/construction_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 text-left space-y-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
            <span className="text-primary font-bold text-[16px] sm:text-sm uppercase tracking-widest block font-sans">
              WHY PARTNER WITH US
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white">
            SUPPLIERS OF HEAVY DUTY{" "}
            <span className="text-primary block">CRUSHING PLANTS</span>
          </h2>
          <p className="text-sm text-white/80 font-medium leading-relaxed max-w-2xl pt-1">
            Engineering superiority with robust casting foundries, heavy
            manufacturing facilities, and turnkey project capabilities across
            India & global markets.
          </p>
        </div>

        {/* Mobile Auto Carousel Slider (1 Card at a time, 2 sec) */}
        <div className="block md:hidden">
          <MobileCarousel autoSlideInterval={2000}>
            {CARDS_DATA.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  href={card.link}
                  key={card.title}
                  className="block group w-full"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg min-h-[300px] flex flex-col justify-end">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent opacity-90" />
                    <div className="relative z-10 p-6 flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <div className="text-primary mt-1 shrink-0">
                          <Icon size={32} className="stroke-[2]" />
                        </div>
                        <div>
                          <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-white mb-2">
                            {card.title}
                          </h3>
                          <p className="text-sm text-gray-300 font-medium leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </MobileCarousel>
        </div>

        {/* Desktop 3 Grid Cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS_DATA.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link href={card.link} key={card.title} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px] lg:min-h-[340px] flex flex-col justify-end"
                >
                  {/* Background Image */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark gradient overlay (bottom heavy) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Card Content */}
                  <div className="relative z-10 p-6 lg:p-8 flex flex-col gap-4">
                    {/* Icon & Title row */}
                    <div className="flex items-start gap-4">
                      {/* Left Orange Icon */}
                      <div className="text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} className="stroke-[2]" />
                      </div>

                      {/* Texts */}
                      <div>
                        <h3 className="font-sans text-xl lg:text-2xl font-bold uppercase tracking-wide text-white mb-2 group-hover:text-primary transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
