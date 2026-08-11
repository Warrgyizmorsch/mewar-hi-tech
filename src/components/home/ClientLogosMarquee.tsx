"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";

const brands = [
  "LAFARGE",
  "CEMEX",
  "HOLCIM",
  "VULCAN Materials Company",
  "Heidelberg Materials",
  "Buzzi Unicem",
  "LAFARGE",
  "CEMEX",
  "HOLCIM",
  "VULCAN Materials Company",
  "Heidelberg Materials",
  "Buzzi Unicem",
];

const logoImages = [
  "/images/new-logo/customer-1.png",
  "/images/new-logo/customer-2.png",
  "/images/new-logo/customer-3.png",
  "/images/new-logo/customer-4.png",
  "/images/new-logo/customer-5.png",
  "/images/new-logo/customer-6.png",
  "/images/new-logo/customer-7.png",
  "/images/new-logo/customer-8.png",
  "/images/new-logo/customer-9.png",
  "/images/new-logo/customer-10.png",
  "/images/new-logo/customer-11.png",
  "/images/new-logo/customer-12.png",
];

const ClientLogosMarquee: React.FC = () => {
  return (
    <section className="section-padding-sm bg-background select-none border-y border-border/30 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-center mb-8 md:mb-12">
          <h2 className="heading-primary text-[#0A1A3B] dark:text-white text-center">
            TRUSTED BY <span className="text-primary inline-block">INDUSTRY LEADERS</span>
          </h2>
        </div>
      </Container>

      {/* Marquee Track */}
      <Container className="animate-marquee">
        {[...logoImages, ...logoImages].map((logoSrc, i) => (
          <div
            key={`${logoSrc}-${i}`}
            className="flex items-center justify-center px-8 lg:px-12 shrink-0"
          >
            <img
              src={logoSrc}
              alt={brands[i % brands.length]}
              className="h-12 lg:h-16 w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default ClientLogosMarquee;
