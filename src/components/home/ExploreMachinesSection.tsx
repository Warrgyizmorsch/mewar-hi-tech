"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MachineShowcase } from "../MachineShowcase";
import BlobButton from "../ui/BlobButton";
import Container from "../ui/Container";

const ExploreMachinesSection: React.FC = () => {
  return (
    <section className="bg-muted section-padding-sm select-none text-left border-b border-border/10">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-center mx-auto space-y-2">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="hidden sm:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
            <span className="text-primary eyebrow">
              OUR MACHINERY
            </span>
          </div>
          <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
            EXPLORE{" "}
            <span className="text-primary inline-block">OUR MACHINES</span>
          </h2>
        </div>

        {/* Main Cards Showcase (Full-Width) */}
        <div className="w-full">
          <MachineShowcase />
        </div>

        {/* Centered Explore All Machines Button at the bottom */}
        <div className="w-full flex justify-center mt-12">
          <Link href="/products" className="cursor-pointer">
            <BlobButton
              variant="secondary"
              className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2"
            >
              <span>Explore All Machines</span>
              <ArrowRight size={14} />
            </BlobButton>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ExploreMachinesSection;
