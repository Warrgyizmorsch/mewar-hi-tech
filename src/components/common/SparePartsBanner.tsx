"use client";

import React, { useState } from "react";
import { Wrench, ShieldCheck, ArrowRight, PhoneCall, Sparkles, Truck, CheckCircle2 } from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";
import EnquiryModal from "@/components/ui/EnquiryModal";

interface SparePartsBannerProps {
  title?: string;
  subtitle?: string;
  defaultMachine?: string;
  className?: string;
}

export default function SparePartsBanner({
  title = "LOOKING FOR GENUINE SPARE PARTS & WEAR LINERS?",
  subtitle = "Direct manufacturer supply of high-manganese crusher jaw plates, cone mantles, blow bars, screen wire mesh, and precision mechanical spares for maximum uptime.",
  defaultMachine = "",
  className = "",
}: SparePartsBannerProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className={`py-12 lg:py-16 bg-muted/40 border-y border-border/80 relative overflow-hidden ${className}`}>
        {/* Subtle Background Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="rounded-2xl border border-border/90 bg-card/90 backdrop-blur-md p-6 sm:p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            {/* Left Content */}
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Wrench size={13} />
                <span>Heavy Duty Equipment Spares &amp; Replacements</span>
              </div>

              <h2 className="common-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                {title.split("&").map((chunk, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="text-primary inline-block">&amp;</span>} {chunk.trim()}
                  </React.Fragment>
                ))}
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                {subtitle}
              </p>

              {/* Quality Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <CheckCircle2 size={15} className="text-primary shrink-0 stroke-[2.5]" />
                  <span>14%, 18% &amp; 22% Mn Heavy Wear Liners</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Truck size={15} className="text-primary shrink-0 stroke-[2.5]" />
                  <span>Fast Plant Site Dispatch Across India</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <ShieldCheck size={15} className="text-primary shrink-0 stroke-[2.5]" />
                  <span>100% OEM Compatibility Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Sparkles size={15} className="text-primary shrink-0 stroke-[2.5]" />
                  <span>Ready Stock for Standard Crusher Sizes</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3.5 items-stretch sm:items-center lg:items-stretch">
              <BlobButton
                onClick={() => setModalOpen(true)}
                variant="primary"
                className="!py-3.5 !px-8 !text-xs sm:!text-sm !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer whitespace-nowrap"
              >
                <Wrench size={16} />
                <span>Enquire Spare Parts</span>
                <ArrowRight size={16} />
              </BlobButton>

              <a
                href="tel:+919001113333"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-muted text-foreground text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <PhoneCall size={14} className="text-primary" />
                <span>Call Hotline: +91 9001113333</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultEnquiryType="SparePart"
        defaultMachine={defaultMachine}
      />
    </>
  );
}

