"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Globe2,
  Maximize2,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import BlobButton from "@/components/ui/BlobButton";
import Link from "next/link";

interface EventItem {
  id: number;
  title: string;
  year: string;
  location: string;
  category: "India Expos" | "International Expos";
  image: string;
  description: string;
}

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Excon 2013",
    year: "2013",
    location: "Bangalore, India",
    category: "India Expos",
    image: "/images/events-1.jpg",
    description:
      "Showcased heavy-duty mobile jaw crushers and vibratory screeners at South Asia's premier construction equipment exhibition.",
  },
  {
    id: 2,
    title: "Bauma Noida 2014",
    year: "2014",
    location: "Greater Noida, India",
    category: "India Expos",
    image: "/images/events-2.jpg",
    description:
      "Unveiled next-generation tracked cone crushers and high-capacity feeders to international mining stakeholders.",
  },
  {
    id: 3,
    title: "Construction Expo Colombo 2014",
    year: "2014",
    location: "Colombo, Sri Lanka",
    category: "International Expos",
    image: "/images/events-3.jpg",
    description:
      "Expanded our footprint across South Asia presenting complete quarry aggregate plant setups and technical support.",
  },
  {
    id: 4,
    title: "Ispe Brazil 2015",
    year: "2015",
    location: "São Paulo, Brazil",
    category: "International Expos",
    image: "/images/events-4.jpg",
    description:
      "Demonstrated robust mining machinery engineering for South American mineral processing and crushing contracts.",
  },
  {
    id: 5,
    title: "Nepal Buildcon 2015",
    year: "2015",
    location: "Kathmandu, Nepal",
    category: "International Expos",
    image: "/images/events-5.jpg",
    description:
      "Brought high-efficiency mobile crushing plants and sand washers to Himalayan infrastructure development projects.",
  },
  {
    id: 6,
    title: "Bauma Conexpo 2016",
    year: "2016",
    location: "Gurgaon, India",
    category: "India Expos",
    image: "/images/events-6.jpg",
    description:
      "Exhibited our flag-bearer single-toggle and double-toggle jaw crushing technology to aggregate producers.",
  },
  {
    id: 7,
    title: "Conmac Guwahati 2017",
    year: "2017",
    location: "Guwahati, Assam, India",
    category: "India Expos",
    image: "/images/events-7.jpg",
    description:
      "Displayed specialized stone size-reduction equipment tailored for North-East Indian mining and quarry conditions.",
  },
  {
    id: 8,
    title: "IMME Dubai Exhibition",
    year: "2018",
    location: "Dubai, UAE",
    category: "International Expos",
    image: "/images/events-8.jpg",
    description:
      "Middle East heavy machinery trade fair highlighting high-tonnage aggregate crushers, screening plants, and conveyors.",
  },
  {
    id: 9,
    title: "IMME Kolkata",
    year: "2022",
    location: "Kolkata, India",
    category: "India Expos",
    image: "/images/events-9.jpg",
    description:
      "International Mining & Machinery Exhibition presenting industrial foundry castings and heavy crawler crushers.",
  },
  {
    id: 10,
    title: "Bauma Conexpo 2024",
    year: "2024",
    location: "Greater Noida, India",
    category: "India Expos",
    image: "/images/events-10.jpg",
    description:
      "Our flagship booth displaying our latest zero-emission electric-drive crusher and screener innovations.",
  },
];

const CATEGORIES = ["All", "India Expos", "International Expos"] as const;

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredEvents =
    activeCategory === "All"
      ? EVENTS
      : EVENTS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredEvents.length);
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredEvents.length) % filteredEvents.length
      );
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <Header />

      <main>
        {/* ── 1. Page Hero ── */}
        <PageHero
          label="Events &amp; Exhibitions"
          title="Global Industry Presence &amp; Expos"
          description="Connecting with mining leaders, infrastructure developers, and aggregate producers across world-class trade fairs and global industrial expos."
          image="/images/slider/about-mewar-hi-tech3.jpg"
        />

        {/* ── 2. Commitment & Value Pillars ── */}
        <section className="section-padding bg-background border-b border-border">
          <Container className="space-y-12">
            
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  OUR GLOBAL EXHIBITIONS
                </span>
              </div>
              <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-tight">
                ENGINEERING VALUE &amp; <span className="text-primary inline-block">GLOBAL TRADE FAIRS</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
                Mewar Hi-Tech is profoundly dedicated to offering high-performance crushing machinery and prompt technical support. Every single action is carefully created to give genuine incentive and long-term reliability to our clients.
              </p>
            </div>

            {/* Quality Commitment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm space-y-3 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="common-heading text-lg text-foreground tracking-wide">
                  Repair, Replace &amp; Return
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Assurance of machine build quality, credible contracts, and immediate engineering response to resolve technical issues promptly.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border shadow-sm space-y-3 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Globe2 size={24} />
                </div>
                <h3 className="common-heading text-lg text-foreground tracking-wide">
                  Global Expo Network
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Exhibiting continuously across India, Brazil, UAE, Sri Lanka, Nepal, and Germany to showcase next-generation crushing setups.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border shadow-sm space-y-3 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="common-heading text-lg text-foreground tracking-wide">
                  48-Hour On-Site Support
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  We reach within 48 hours anywhere in India and within 7 days to anywhere on the planet for installation &amp; servicing.
                </p>
              </div>

            </div>
          </Container>
        </section>

        {/* ── 3. Exhibitions Gallery & Filter Tabs ── */}
        <section className="section-padding bg-muted/40 border-b border-border">
          <Container className="space-y-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    PHOTO SHOWCASE
                  </span>
                </div>
                <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                  EXHIBITION <span className="text-primary inline-block">GALLERY ({filteredEvents.length})</span>
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Photo Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => openLightbox(index)}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-black/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Calendar size={12} className="text-primary" />
                        <span>{item.year}</span>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Maximize2 size={14} />
                      </span>
                    </div>

                    {/* Bottom Title inside Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <div className="flex items-center gap-1.5 text-primary font-bold text-[11px] uppercase tracking-wider mb-1">
                        <MapPin size={13} />
                        <span>{item.location}</span>
                      </div>
                      <h3 className="common-heading text-lg tracking-wide leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body Description */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-2">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary group-hover:text-foreground transition-colors uppercase tracking-wider">
                      <span>View Exhibition Photo</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── 4. Next Exhibition Meeting CTA Section ── */}
        <section className="section-padding bg-background border-b border-border">
          <Container>
            <div className="p-8 sm:p-12 rounded-xl bg-secondary text-secondary-foreground shadow-2xl border border-border/30 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    CONNECT WITH OUR ENGINEERS
                  </span>
                </div>
                <h2 className="heading-primary text-white">
                  MEET US AT THE NEXT <span className="text-primary inline-block">GLOBAL INDUSTRIAL EXPO</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                  Planning to visit our booth or need personalized machinery consultation for your aggregate quarry? Schedule an appointment with our Managing Director &amp; Technical Sales Team.
                </p>
              </div>

              <div className="shrink-0">
                <Link href="/contact">
                  <BlobButton
                    variant="primary"
                    className="!py-3.5 !px-8 !text-xs !font-bold !uppercase !tracking-wider"
                  >
                    Schedule Exhibition Meeting
                  </BlobButton>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* ── 5. Lightbox Modal Preview ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-primary text-white backdrop-blur-md transition-colors"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>

              {/* Lightbox Main Image */}
              <div className="relative h-[320px] sm:h-[450px] w-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={filteredEvents[lightboxIndex].image}
                  alt={filteredEvents[lightboxIndex].title}
                  className="w-full h-full object-contain"
                />

                {/* Left & Right Controls */}
                <button
                  onClick={prevLightbox}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-primary backdrop-blur-md text-white flex items-center justify-center transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={nextLightbox}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-primary backdrop-blur-md text-white flex items-center justify-center transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Lightbox Content Info */}
              <div className="p-6 sm:p-8 space-y-3 bg-card border-t border-border">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider">
                      {filteredEvents[lightboxIndex].year}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-semibold">
                      <MapPin size={14} className="text-primary" />
                      {filteredEvents[lightboxIndex].location}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">
                    Photo {lightboxIndex + 1} of {filteredEvents.length}
                  </span>
                </div>

                <h3 className="common-heading text-2xl text-foreground tracking-wide">
                  {filteredEvents[lightboxIndex].title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                  {filteredEvents[lightboxIndex].description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
