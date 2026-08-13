"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import BlobButton from "@/components/ui/BlobButton";

const AboutTeaser: React.FC = () => {
  return (
    <section className="bg-card text-foreground section-padding-sm select-none text-left border-y border-border overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* 1. Trophy Graphic & Divider */}
          <div className="flex items-center gap-8 shrink-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center relative">
              <Image
                src="/images/gold_trophy.webp"
                alt="3D Gold Trophy"
                width={200}
                height={224}
                className="h-40 sm:h-56 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,184,0,0.15)] dark:drop-shadow-[0_0_15px_rgba(255,184,0,0.25)]"
              />
            </div>
            <div className="hidden lg:block w-[1px] h-20 bg-border shrink-0" />
          </div>

          {/* 2. Text Copy Panel & Divider */}
          <div className="flex-grow lg:px-4 space-y-3 max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
              <span className="text-primary eyebrow">
                AWARD WINNING
              </span>
            </div>
            <h2 className="heading-secondary text-[#0A1A3B] dark:text-white leading-tight">
              RECOGNIZED EXCELLENCE.  <span className="text-primary inline-block">TRUSTED WORLDWIDE.</span> 
            </h2>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed">
              Our commitment to innovation, quality and performance has earned global recognition and trust.
            </p>
            <div className="pt-1.5 flex justify-center lg:justify-start">
              <Link href="/about">
                <BlobButton
                  variant="primary"
                  className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2"
                >
                  <span>View Awards &amp; Achievements</span>
                  <ArrowRight size={14} />
                </BlobButton>
              </Link>
            </div>
          </div>

          {/* 3. Divider before Badges */}
          <div className="hidden lg:block w-[1px] h-20 bg-border shrink-0" />

          {/* 4. Awards Badges Panel */}
          <div className="flex items-center gap-6 lg:gap-8 flex-wrap justify-center lg:pl-8 shrink-0">
            
            {/* Reddot Winner */}
            <div className="text-center flex flex-col items-center">
              <Image
                src="/images/reddot_badge.webp"
                alt="Red Dot Winner 2023"
                width={112}
                height={112}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain dark:opacity-90"
              />
              <p className="text-[10px] text-muted-foreground/80 uppercase tracking-widest font-bold mt-1">
                Product Design
              </p>
            </div>

            {/* Divider between badges */}
            <div className="hidden md:block w-[1px] h-12 bg-border shrink-0" />

            {/* iF Gold Award */}
            <div className="text-center flex flex-col items-center">
              <Image
                src="/images/if_gold_badge.webp"
                alt="iF Gold Award 2023"
                width={112}
                height={112}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain dark:opacity-90"
              />
              <p className="text-[10px] text-muted-foreground/80 uppercase tracking-widest font-bold mt-1">
                Industrial Design
              </p>
            </div>

            {/* Divider between badges */}
            <div className="hidden md:block w-[1px] h-12 bg-border shrink-0" />

            {/* EquipmentWatch */}
            <div className="text-center flex flex-col items-center">
              <Image
                src="/images/equipment_watch_badge.webp"
                alt="EquipmentWatch Highest Retained Value 2023"
                width={112}
                height={112}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain dark:opacity-90"
              />
              <p className="text-[9px] text-muted-foreground/80 uppercase tracking-widest font-bold mt-1">
                Highest Value
              </p>
              <p className="text-[8px] text-primary uppercase font-bold">
                2023
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutTeaser;
