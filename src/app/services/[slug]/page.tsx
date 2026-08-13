"use client";

import React, { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  Compass,
  ArrowRight,
  Maximize2,
  X,
  ChevronRight,
  Headset,
  Award,
  MapPin,
  Settings,
  FileText,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import BlobButton from "@/components/ui/BlobButton";
import StatsCounter from "@/components/shared/StatsCounter";
import CTASection from "@/components/shared/CTASection";

// ─── Data Strategy for 3 Sub-pages ───

const PAGES_DATA: Record<
  string,
  {
    title: string;
    label: string;
    description: string;
    heroImage: string;
    intro: string;
    contacts: {
      mob: string;
      phone: string;
      fax: string;
      email: string;
    };
    // For After Sales Page
    sections?: {
      title: string;
      desc: string;
      bullets?: string[];
    }[];
    // For Spare Parts & Erection Pages
    galleryPrefix?: string;
    galleryCount?: number;
    galleryTitle?: string;
  }
> = {
  "after-sales": {
    label: "Customer Support",
    title: "AFTER SALES TECHNICAL SERVICE",
    heroImage: "/images/after-sales-1.jpg",
    description:
      "Assurance of product quality, credible contracts, and excellent service engineering to resolve technical issues promptly.",
    intro:
      "We provide specialized technical service to assist our clients to select the most appropriate crusher and related gear and execute the task with most appropriate machine design that will make their business a triumph. Our Crusher machine products and associated services can help our clients to operate more efficiently while promoting a successful and reliable infrastructure.",
    contacts: {
      mob: "+91-9928019652",
      phone: "0294-2440234",
      fax: "0294-2440235",
      email: "aftersales@kingsoncrusher.com",
    },
    sections: [
      {
        title: "1. Kingson's Pre-sales services",
        desc: "We go about as a detent consultant and right hand to the customers, empowering them to make a rational choice. We assist them in selecting the perfect crusher equipment model or crusher range, design and manufacture products according to their requirements.",
      },
      {
        title: "2. Services during the sale",
        desc: "Pre-Delivery Inspection (PDI) so that the client is fully satisfied before accepting the delivery of the equipment. Help clients to draft and conclude plans.",
      },
      {
        title: "3. Service after sale",
        desc: "We firmly stand by our Guarantee to Repair, Replace and Return. Assurances include:",
        bullets: [
          "On-site installation and fine-tuning the equipment.",
          "Provide training to the operators on site.",
          "Examine the crusher equipment regularly.",
          "Attend the complaints and solve them rapidly at the client site.",
          "Deliver perfect service.",
          "Provide technical support.",
          "Maintenance of equipment and plants.",
        ],
      },
    ],
  },
  "spare-parts": {
    label: "Wear Components",
    title: "GENUINE CRUSHER SPARE PARTS",
    heroImage: "/images/spare-parts/spare-parts-3.jpg",
    description:
      "High-grade high-manganese cast jaw plates, cone mantles, HSI blow bars, and structural parts.",
    intro:
      "We manufacture and supply all kinds of spare equipments, which are used in size reduction equipment and the spare parts, components and wearing parts for crushers. All parts undergo comprehensive quality assurance checks in our alloy foundry.",
    contacts: {
      mob: "+91-8095191278",
      phone: "0294-2440234",
      fax: "0294-2440235",
      email: "spares@kingsoncrusher.com",
    },
    galleryPrefix: "/images/spare-parts/spare-parts",
    galleryCount: 20,
    galleryTitle: "Spare Parts Catalog & Storage",
  },
  "erection-commissioning": {
    label: "Erection & Commissioning",
    title: "FIELD ERECTION & INTEGRATION",
    heroImage: "/images/after-sales-2.jpg",
    description:
      "Structural alignment, precision machinery installation, trial commissioning, and electrical controls.",
    intro:
      "Our field crew carries out complete erection of plant structures, crusher housings, feeders, screens, and conveyors. Our specialized technical engineers ensure every component is accurately aligned, pre-calibrated, and fully tested under load condition.",
    contacts: {
      mob: "+91-9928019652",
      phone: "0294-2440234",
      fax: "0294-2440235",
      email: "aftersales@kingsoncrusher.com",
    },
    galleryPrefix: "/images/erection/erection",
    galleryCount: 15,
    galleryTitle: "On-Site Erection Projects Gallery",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceSlugPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const pageData = PAGES_DATA[slug] || PAGES_DATA["after-sales"];
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const trustStripRef = useRef<HTMLDivElement>(null);
  const sectionsCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 768) return;
      
      const refs = [trustStripRef, sectionsCarouselRef];
      
      refs.forEach(ref => {
        if (ref.current) {
          const { scrollLeft, scrollWidth, clientWidth } = ref.current;
          if (scrollLeft + clientWidth >= scrollWidth - 20) {
            ref.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            ref.current.scrollBy({ left: window.innerWidth * 0.85, behavior: "smooth" });
          }
        }
      });
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  // Generate local gallery files if needed
  const galleryImages: string[] = [];
  if (pageData.galleryPrefix && pageData.galleryCount) {
    for (let i = 1; i <= pageData.galleryCount; i++) {
      galleryImages.push(`${pageData.galleryPrefix}-${i}.jpg`);
    }
  }

  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />

      <main>
        {/* 1. Dynamic Page Hero */}
        <PageHero
          label={pageData.label}
          title={pageData.title}
          description={pageData.description}
          image={pageData.heroImage}
        />

        <section className="section-padding-sm bg-card border-b border-border/80 relative overflow-hidden">
          <Container className="relative z-10">
            <div 
              ref={trustStripRef}
              className="flex overflow-x-auto md:grid md:grid-cols-3 gap-0 md:gap-6 items-center divide-x-0 md:divide-x divide-border/60 pb-2 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
            >
              <div className="shrink-0 snap-center w-[85vw] md:w-auto p-4 md:p-0 flex items-center justify-center gap-3">
                <ShieldCheck size={20} className="text-primary shrink-0 stroke-[2.2]" />
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase text-foreground">Guaranteed Quality</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Repair, Replace &amp; Return</span>
                </div>
              </div>
              <div className="shrink-0 snap-center w-[85vw] md:w-auto p-4 md:p-0 flex items-center justify-center gap-3">
                <Clock size={20} className="text-primary shrink-0 stroke-[2.2]" />
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase text-foreground">48-Hr SLA response</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Anywhere in India</span>
                </div>
              </div>
              <div className="shrink-0 snap-center w-[85vw] md:w-auto p-4 md:p-0 flex items-center justify-center gap-3">
                <Award size={20} className="text-primary shrink-0 stroke-[2.2]" />
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase text-foreground">ISO Certified</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">ISO 9001:2008 Standard</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Introduction Section */}
        <section className="section-padding bg-background border-b border-border/60">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Description & Contacts */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                  OVERVIEW &amp; <span className="text-primary inline-block">COMMITMENT</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed font-semibold">
                  {pageData.intro}
                </p>

                {/* Assistance Notice */}
                {slug === "after-sales" && (
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs font-bold text-muted-foreground leading-relaxed">
                    Assurance of product quality of our equipment, credible contracts, and excellent service. Our service engineer attends the issue and reaches within 48 hours anywhere in India and within a week to any place in the world.
                  </div>
                )}

                {/* Direct Contacts Info Box */}
                <div className="p-6 rounded-xl bg-card border border-border/80 space-y-4">
                  <h3 className="font-bold text-sm uppercase text-foreground font-heading">
                    Direct Contact Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-xs font-bold">
                      <Phone size={16} className="text-primary shrink-0 stroke-[2.2]" />
                      <div>
                        <span className="block text-[10px] text-muted-foreground uppercase">Mobile No:</span>
                        <a href={`tel:${pageData.contacts.mob}`} className="hover:text-primary transition-colors">
                          {pageData.contacts.mob}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold">
                      <Headset size={16} className="text-primary shrink-0 stroke-[2.2]" />
                      <div>
                        <span className="block text-[10px] text-muted-foreground uppercase">Phone / Landline:</span>
                        <span className="text-foreground">{pageData.contacts.phone}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold">
                      <Mail size={16} className="text-primary shrink-0 stroke-[2.2]" />
                      <div>
                        <span className="block text-[10px] text-muted-foreground uppercase">Email Desk:</span>
                        <a href={`mailto:${pageData.contacts.email}`} className="hover:text-primary transition-colors">
                          {pageData.contacts.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold">
                      <FileText size={16} className="text-primary shrink-0 stroke-[2.2]" />
                      <div>
                        <span className="block text-[10px] text-muted-foreground uppercase">Fax Support:</span>
                        <span className="text-foreground">{pageData.contacts.fax}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image Preview */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-lg">
                  <img
                    src={pageData.heroImage}
                    alt={pageData.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* 4. Page Specific Details: Bullet Sections (For After Sales) */}
        {pageData.sections && (() => {
          const withoutBullets = pageData.sections.filter(s => !s.bullets);
          const withBullets = pageData.sections.filter(s => s.bullets);

          return (
            <section className="section-padding bg-muted/20 border-b border-border/60">
              <Container>
                {/* Mobile: vertical stack */}
                <div className="flex flex-col md:hidden gap-4">
                  {pageData.sections.map((sect, sidx) => (
                    <div
                      key={sidx}
                      className="p-6 rounded-xl bg-card border border-border/80 flex flex-col justify-start text-left space-y-4 shadow-xs"
                    >
                      <div className="space-y-3">
                        <h3 className="font-bold text-base text-foreground font-heading">
                          {sect.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                          {sect.desc}
                        </p>
                      </div>
                      {sect.bullets && (
                        <ul className="space-y-2 pt-3 border-t border-border/60">
                          {sect.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-xs font-bold text-foreground/90 leading-snug">
                              <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5 stroke-[2.5]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* Desktop: smart 2-column layout — short cards left, tall card right */}
                <div className="hidden md:grid md:grid-cols-2 gap-8">
                  {/* Left column: cards without bullets stacked */}
                  <div className="flex flex-col gap-6">
                    {withoutBullets.map((sect, sidx) => (
                      <div
                        key={sidx}
                        className="flex-1 p-6 rounded-xl bg-card border border-border/80 flex flex-col justify-start text-left space-y-4 shadow-xs hover:shadow-md hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="space-y-3">
                          <h3 className="font-bold text-base text-foreground font-heading">
                            {sect.title}
                          </h3>
                          <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                            {sect.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right column: card with bullets */}
                  <div className="flex flex-col">
                    {withBullets.map((sect, sidx) => (
                      <div
                        key={sidx}
                        className="flex-1 p-6 rounded-xl bg-card border border-border/80 flex flex-col justify-start text-left space-y-4 shadow-xs hover:shadow-md hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="space-y-3">
                          <h3 className="font-bold text-base text-foreground font-heading">
                            {sect.title}
                          </h3>
                          <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                            {sect.desc}
                          </p>
                        </div>
                        {sect.bullets && (
                          <ul className="space-y-2 pt-3 border-t border-border/60">
                            {sect.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-2 text-xs font-bold text-foreground/90 leading-snug">
                                <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5 stroke-[2.5]" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          );
        })()}

        {/* 5. Dynamic Page Galleries (For Spare Parts & Erection) */}
        {galleryImages.length > 0 && (
          <section className="section-padding bg-muted/20 border-b border-border/60">
            <Container>
              
              {/* Header */}
              <div className="max-w-3xl mb-10 text-center md:text-left space-y-2 mx-auto md:mx-0">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    VISUAL DIRECTORY
                  </span>
                </div>
                <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                  {pageData.galleryTitle}
                </h2>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {galleryImages.map((src, gidx) => (
                  <div
                    key={gidx}
                    onClick={() => setLightboxImage(src)}
                    className="relative aspect-square rounded-xl overflow-hidden border border-border bg-black cursor-pointer group shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={src}
                      alt={`Gallery view item ${gidx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={12} />
                    </div>
                  </div>
                ))}
              </div>

            </Container>
          </section>
        )}

        {/* 6. Form Section */}
        <section className="section-padding bg-background border-b border-border/60">
          <Container className="text-left">
            <div className="p-8 lg:p-12 rounded-xl bg-card border border-border/80 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-sm">
              <div className="space-y-3">
                <h3 className="common-heading text-2xl font-bold text-foreground">
                  Need Help or Urgent Callback?
                </h3>
                <p className="text-xs text-muted-foreground font-semibold max-w-xl">
                  Contact our support lines or write to us directly. We guarantee immediate dispatch of certified field engineers to troubleshoot your equipment.
                </p>
              </div>
              <Link href="/contact">
                <BlobButton variant="primary" className="!py-3.5 !px-8 text-xs font-bold uppercase tracking-wider shrink-0 flex items-center gap-2">
                  <span>Contact Service Manager</span>
                  <ArrowRight size={15} />
                </BlobButton>
              </Link>
            </div>
          </Container>
        </section>

        <StatsCounter />
        <CTASection />
      </main>

      {/* Lightbox Modal for Gallery Images */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div className="absolute top-6 right-6 z-20">
              <button
                onClick={() => setLightboxImage(null)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Enlarged view"
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}