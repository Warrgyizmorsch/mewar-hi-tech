"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import BlobButton from "@/components/ui/BlobButton";

const insights = [
  {
    title: "Company Expansion: New Machinery Testing Yard Launched",
    date: "January 14, 2026",
    image: "/images/events-1.jpg",
  },
  {
    title: "Event Highlight: Keestrack Showcases Hybrid Crushers",
    date: "February 03, 2026",
    image: "/images/events-2.jpg",
  },
  {
    title: "Technical Guide: Maximizing Mobile Jaw Crusher Tooth Plate Life",
    date: "March 20, 2026",
    image: "/images/events-3.jpg",
  },
];

const publications = [
  {
    title: "Keestrack General Catalog",
    size: "PDF | 8.4 MB",
  },
  {
    title: "Mobile Screens & Crushers Overview",
    size: "PDF | 4.2 MB",
  },
  {
    title: "After-Sales & Maintenance Catalog",
    size: "PDF | 5.7 MB",
  },
];

const exhibitions = [
  {
    title: "EXCON 2026",
    date: "December 12 - 16, 2026",
    location: "BIEC, Bangalore, India",
  },
  {
    title: "BAUMA 2026",
    date: "April 07 - 13, 2026",
    location: "Munich, Germany",
  },
];

const InsightsPublicationsSection: React.FC = () => {
  return (
    <section className="section-padding bg-background select-none border-t border-border/30 space-y-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Sub-section 1: Insights */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  OUR NEWS
                </span>
              </div>
              <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-none">
                Insights Worth{" "}
                <span className="text-primary inline-block">Exploring</span>
              </h2>
            </div>
            <Link href="/blogs">
              <BlobButton variant="secondary" className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2">
                <span>See all</span>
                <ArrowRight size={14} />
              </BlobButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border bg-card rounded-xl overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-muted-foreground text-xs font-semibold mb-2 block">
                      {item.date}
                    </span>
                    <h3 className="common-heading text-sm text-foreground mb-6 leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <Link
                    href="/blogs"
                    className="text-primary hover:text-foreground text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20 my-16" />

        {/* Grid for Publications & Exhibitions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sub-section 2: Publications (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="heading-primary text-[#0A1A3B] dark:text-white tracking-wide">
                OUR <span className="text-primary inline-block">PUBLICATIONS</span>
              </h2>
              <Link href="/about">
                <BlobButton variant="secondary" className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2">
                  <span>See all</span>
                  <ArrowRight size={14} />
                </BlobButton>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="border border-border p-5 rounded-xl bg-card flex flex-col justify-between min-h-[160px] hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div>
                    <div className="w-8 h-8 flex items-center justify-center border border-red-200 text-red-500 bg-red-50 rounded-lg mb-4">
                      <Download size={16} />
                    </div>
                    <h4 className="common-heading text-xs text-foreground leading-snug group-hover:text-primary transition-colors mb-2">
                      {pub.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                    {pub.size}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sub-section 3: Upcoming Exhibitions (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="heading-primary text-[#0A1A3B] dark:text-white tracking-wide">
              UPCOMING <span className="text-primary inline-block">EXHIBITIONS</span>
            </h2>

            <div className="space-y-4">
              {exhibitions.map((ex, index) => (
                <motion.div
                  key={ex.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border p-5 rounded-xl bg-card flex items-center justify-between hover:shadow-md transition-all group"
                >
                  <div className="space-y-2">
                    <h4 className="common-heading text-sm text-foreground tracking-wider group-hover:text-primary transition-colors">
                      {ex.title}
                    </h4>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Calendar size={12} className="text-primary" />
                        {ex.date}
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold">
                        <MapPin size={12} className="text-primary" />
                        {ex.location}
                      </span>
                    </div>
                  </div>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border group-hover:bg-primary text-foreground group-hover:text-primary-foreground transition-colors shrink-0 cursor-pointer">
                    <ArrowRight size={16} />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsightsPublicationsSection;
