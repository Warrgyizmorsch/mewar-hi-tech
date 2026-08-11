"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import MobileCarousel from "@/components/ui/MobileCarousel";
import { Star, MapPin, User } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  experience: string;
  rating: number;
  review: string;
  projectTag: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Rajesh Mehta",
    role: "Managing Director",
    company: "Apex Mining & Aggregates Ltd.",
    location: "Rajasthan, India",
    experience: "5+ Years with Mewar Machinery",
    rating: 5,
    review:
      "Working with Mewar Hi-Tech has transformed our quarry operations. We achieved a 35% throughput increase with virtually zero unexpected downtime over 2 years of continuous heavy operation.",
    projectTag: "300 TPH Plant",
  },
  {
    name: "Vikramaditya Singh",
    role: "Chief Operating Officer",
    company: "Deccan Infrastructure Projects",
    location: "Hyderabad, India",
    experience: "4+ Years with Mewar Machinery",
    rating: 5,
    review:
      "Their track-mounted mobile screens and crushing units offer exceptional structural durability. The local technical support and spare parts availability in India are second to none.",
    projectTag: "Track Mobile Plant",
  },
  {
    name: "Emmanuel Nkurunziza",
    role: "General Manager",
    company: "East African Quarry Solutions",
    location: "Dar es Salaam, Tanzania",
    experience: "3+ Years with Mewar Machinery",
    rating: 5,
    review:
      "Importing the 250 TPH turnkey plant for our Tanzania quarry site was smooth and on-schedule. Mewar Hi-Tech delivered heavy-duty engineering that effortlessly handles hard basalt.",
    projectTag: "Tanzania Export Site",
  },
  {
    name: "Sneha Jadhav",
    role: "Design & Plant Lead",
    company: "Marwar Infra & Cement",
    location: "Gujarat, India",
    experience: "6+ Years with Mewar Machinery",
    rating: 5,
    review:
      "Mewar Hi-Tech gives us the platform to learn, innovate and scale our plant outputs. The supportive technical team and continuous engineering improvements strengthen our site productivity.",
    projectTag: "VSI Sand Plant",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding-sm bg-muted/30 border-b border-border relative overflow-hidden select-none">
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
              <span className="text-primary eyebrow">
                VERIFIED CLIENT REVIEWS
              </span>
            </div>
            <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
              TRUSTED BY <span className="text-primary inline-block">INDUSTRY LEADERS</span>
            </h2>
            <p className="text-sm text-muted-foreground font-medium max-w-xl leading-relaxed">
              Hear directly from quarry owners, mining executives, and infrastructure contractors who rely on our machinery daily.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-card border border-border/80 p-4 px-6 rounded-2xl shadow-sm shrink-0 self-start md:self-end">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <div className="text-left border-l border-border/60 pl-4">
              <span className="block text-base font-bold text-foreground leading-none">
                4.9 / 5.0 Rating
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                BASED ON 320+ CLIENT REVIEWS
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Auto Carousel Slider (1 Card at a time, 2 sec) */}
        <div className="block md:hidden">
          <MobileCarousel autoSlideInterval={2000}>
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl p-6 border border-border/80 shadow-sm flex flex-col justify-between relative group text-left w-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                    {t.projectTag}
                  </span>
                  <span className="text-primary font-serif text-3xl leading-none font-bold select-none">
                    “
                  </span>
                </div>

                <div className="flex-1 mb-6">
                  <p className="text-foreground/90 text-xs leading-relaxed font-medium">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-slate-800 border border-border/80 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0 shadow-inner">
                      <User size={22} className="stroke-[2]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-xs uppercase tracking-wide text-foreground truncate">
                        {t.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-semibold truncate">
                        {t.role}
                      </p>
                      <p className="text-[10px] text-muted-foreground/80 font-medium truncate">
                        {t.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-0.5 text-primary">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={12} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      <MapPin size={10} className="text-primary" />
                      <span className="truncate">{t.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>

        {/* Desktop Testimonials Cards Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                  {t.projectTag}
                </span>
                <span className="text-primary font-serif text-3xl leading-none font-bold select-none">
                  “
                </span>
              </div>

              <div className="flex-1 mb-6">
                <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed font-medium">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-slate-800 border border-border/80 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0 shadow-inner">
                    <User size={22} className="stroke-[2]" />
                  </div>

                  {/* Author Details */}
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wide text-foreground truncate">
                      {t.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-muted-foreground font-semibold truncate">
                      {t.role}
                    </p>
                    <p className="text-[10px] text-muted-foreground/80 font-medium truncate">
                      {t.experience}
                    </p>
                  </div>
                </div>

                {/* Rating & Location Row */}
                <div className="flex items-center justify-between pt-1 border-t border-border/40">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    <MapPin size={10} className="text-primary" />
                    <span className="truncate">{t.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}