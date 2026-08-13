"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Wrench,
  Factory,
  Cpu,
  Flame,
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import StatsCounter from "@/components/shared/StatsCounter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/shared/CTASection";
import BlobButton from "@/components/ui/BlobButton";

import MultiCardCarousel from "@/components/ui/MultiCardCarousel";

// Slider Images Data
const SLIDER_IMAGES = [
  {
    id: 1,
    src: "/images/slider/about-mewar-hi-tech1.jpg",
    title: "Heavy-Duty Machinery Manufacturing",
    subtitle: "State-of-the-art production facility in Udaipur, Rajasthan",
    badge: "Plant Facility",
  },
  {
    id: 2,
    src: "/images/slider/about-mewar-hi-tech2.jpg",
    title: "100% In-House Precision Engineering",
    subtitle: "Skilled engineers and dedicated Quality Assurance Cell",
    badge: "Engineering",
  },
  {
    id: 3,
    src: "/images/slider/about-mewar-hi-tech3.jpg",
    title: "Kingson Crushers & Heavy Equipment",
    subtitle: "Engineered for maximum output, speed and stroke throw",
    badge: "Crushing Plant",
  },
  {
    id: 4,
    src: "/images/slider/about-mewar-hi-tech4.jpg",
    title: "Global Supply & After-Sales Service",
    subtitle: "Trusted by clients across mining and aggregate sectors worldwide",
    badge: "Global Network",
  },
  {
    id: 5,
    src: "/images/slider/slide1.jpg",
    title: "Advanced In-House Production",
    subtitle: "Heavy CNC plasma cutting and annealing furnaces",
    badge: "Machining",
  },
  {
    id: 6,
    src: "/images/slider/slide2.jpg",
    title: "Foundry & Alloy Steel Castings",
    subtitle: "Molding jaw plates, manganese liners, and rotor bars",
    badge: "Foundry",
  },
  {
    id: 7,
    src: "/images/slider/slide3.jpg",
    title: "Assembly & Quality Inspection",
    subtitle: "Comprehensive quality checks on every machine produced",
    badge: "Inspection",
  },
  {
    id: 8,
    src: "/images/slider/slide4.jpg",
    title: "Tracked Mobile Crusher Lineup",
    subtitle: "Mobile crushing units ready for field deployment",
    badge: "Mobile Equipment",
  },
];

// Machinery Equipment List Data
const MACHINERY_LIST = [
  {
    title: "Horizontal Boring Machine",
    spec: "Crusher Body Machining",
    desc: "Bores all required openings with high precision, ensuring accurate parallel and control distances.",
    icon: Factory,
  },
  {
    title: "Table Type Horizontal Boring",
    spec: "15-Micron Parallelism",
    desc: "Achieves ultra-precise 15-micron parallelism and accuracy for heavy-duty structural alignment.",
    icon: Cpu,
  },
  {
    title: "CNC Plasma Cutting",
    spec: "Digital CAD Storage & Fast Cutting",
    desc: "Fast, high-rate cutting as per drawing with automated design storage for repeatable accuracy.",
    icon: Sparkles,
  },
  {
    title: "CNC Lathe Machine",
    spec: "High-Volume Precision Machining",
    desc: "Designed for large-quantity component turnings with micron-level tolerances.",
    icon: Wrench,
  },
  {
    title: "Hobbing Machine",
    spec: "In-House Gear Production",
    desc: "In-house manufacturing of worm reduction gears for maximum transmission reliability.",
    icon: TrendingUp,
  },
  {
    title: "Shot Blasting Machine",
    spec: "Fast Surface Preparation",
    desc: "Rapid, thorough surface cleaning and preparation prior to coating and finishing.",
    icon: ShieldCheck,
  },
  {
    title: "Annealing Furnace",
    spec: "15-Ton Capacity Relief",
    desc: "Handles up to 15-ton crusher bodies for thermal stress relieving of cast and fabricated parts.",
    icon: Flame,
  },
  {
    title: "Induction Furnaces",
    spec: "MS & Alloy Steel Castings",
    desc: "Casts high-grade MS and Alloy Steel parts in-house to ensure precise metallurgical composition.",
    icon: Award,
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play machinery slider on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-slide on mobile screens (less than 640px)
      if (window.innerWidth >= 640) return;
      
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // If we reached the end, snap back to start
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by approx one card width
          carouselRef.current.scrollBy({ left: window.innerWidth * 0.85, behavior: "smooth" });
        }
      }
    }, 2500); // Auto slide every 2.5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground select-none">
      <Header />

      <main>
        {/* ── 1. Page Hero ── */}
        <PageHero
          label="Pioneers in Heavy Industrial Machinery"
          title="About Mewar Hi-Tech"
          description="Manufacturer of Crushing, Screening and Size Reduction Equipment. Combining 100% in-house manufacturing, cutting-edge technology, and unyielding quality."
          image="/images/slider/about-mewar-hi-tech1.jpg"
        />

        {/* ── 2. Interactive Multi-Card Image Showcase / Carousel ── */}
        <section className="section-padding bg-muted/40 border-b border-border">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-center sm:text-left">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <div className="hidden sm:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    FACTORY &amp; ENGINEERING SHOWCASE
                  </span>
                </div>
                <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                  MANUFACTURING <span className="text-primary inline-block">FACILITY GALLERY</span>
                </h2>
              </div>
              <p className="text-xs text-muted-foreground font-semibold max-w-md">
                100% in-house production, heavy machining, induction furnaces, and quality testing setups.
              </p>
            </div>

            <MultiCardCarousel slides={SLIDER_IMAGES} autoPlayInterval={2000} />
          </div>
        </section>

        {/* ── 3. 100% In-House Manufacturing Section ── */}
        <section className="section-padding bg-background border-b border-border">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Text Content */}
              <div
                className="lg:col-span-7 space-y-6 text-center lg:text-left"
              >
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      CRUSHER MANUFACTURING PIONEERS
                    </span>
                  </div>
                  <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-tight">
                    100% IN-HOUSE &amp; <span className="text-primary inline-block">HI-TECH MANUFACTURING</span>
                  </h2>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Mewar Hitech is a leading and pioneering enterprise providing top-notch services in the industry. The decisive elements for success such as technology, innovation, quality and service, combine to set us apart.
                </p>

                <div className="space-y-4 text-sm text-foreground/80 leading-relaxed font-normal">
                  <p>
                    We believe in innovation and strive to please our customers. All our products are manufactured under the strict supervision of skilled and qualified engineers. This enables us to stand out with our high-grade quality. Our Quality Assurance Cell ensures the best-engineered crushers with a robust design.
                  </p>
                  <p>
                    With our contemporary and hi-tech crushers, we have helped our customers in <strong className="text-primary font-bold">increasing productivity by around 20%</strong>. Because of our complete in-house manufacturing facilities and a modern approach, we pride ourselves on our powerful design which is high-grade affordable without compromising on quality.
                  </p>
                  <p>
                    All the materials, including castings done in-house, are pretested and continuously monitored by our Quality Assurance Cell. From conception to design and final products, we carefully observe every step to assist our clients to the optimum level.
                  </p>
                </div>

                {/* Highlight badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-none bg-card border-2 border-border flex items-center gap-3">
                    <TrendingUp size={24} className="text-primary shrink-0" />
                    <div>
                      <h4 className="common-heading text-lg text-foreground">20%+</h4>
                      <p className="text-[11px] text-muted-foreground font-semibold uppercase">Higher Output</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-none bg-card border-2 border-border flex items-center gap-3">
                    <Factory size={24} className="text-primary shrink-0" />
                    <div>
                      <h4 className="common-heading text-lg text-foreground">100%</h4>
                      <p className="text-[11px] text-muted-foreground font-semibold uppercase">In-House Castings</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-none bg-card border-2 border-border flex items-center gap-3">
                    <ShieldCheck size={24} className="text-primary shrink-0" />
                    <div>
                      <h4 className="common-heading text-lg text-foreground">Strict QA</h4>
                      <p className="text-[11px] text-muted-foreground font-semibold uppercase">Assurance Cell</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Image with Industrial Frame */}
              <div
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-none overflow-hidden shadow-2xl border-2 border-border group">
                  <img
                    src="/images/about-mewar-hi-tech-1.jpg"
                    alt="Mewar Hi-Tech Manufacturing Plant Exterior"
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-none bg-black border-2 border-primary text-white">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Manufacturing Excellence</p>
                    <p className="text-sm font-semibold mt-1">Industrial Plant &amp; Foundry Campus in Udaipur, Rajasthan</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. Robust Design & Quality Policy Section ── */}
        <section className="section-padding bg-muted border-b border-border">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Left Box: Robust Design */}
              <div
                className="p-8 lg:p-10 rounded-none bg-card border-2 border-border shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      ENGINEERING MASTERY
                    </span>
                  </div>
                  <h3 className="heading-primary text-[#0A1A3B] dark:text-white">
                    A POWERFUL &amp; <span className="text-primary inline-block">ROBUST DESIGN</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Kingson Crushers by Mewar Hitech are modern Hi-tech crushers. Powerfully designed with a blend of speed and stroke to throw which promises fine crushing capability and high output performance along to ensure maximum profitability.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The crushers not only have a sturdy structure, but they are also rugged and reliable and suitable for heavy-duty mining in turn. We take all the necessary initiatives at every level of the production process to ensure that top-notch quality remains an inherent part of our offerings.
                  </p>
                </div>

                {/* Image & Caption */}
                <div className="relative rounded-none overflow-hidden border-2 border-border">
                  <img
                    src="/images/robust_crusher_design.webp"
                    alt="Heavy-Duty Mining & Rock Reduction Crusher"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Heavy-Duty Mining &amp; Rock Reduction Machinery
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>High Stroke &amp; Speed Throw</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Heavy Duty Mining Grade</span>
                  </div>
                </div>
              </div>

              {/* Right Box: Quality Policy with Image */}
              <div
                className="p-8 lg:p-10 rounded-none bg-card border-2 border-border shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      ZERO COMPROMISE
                    </span>
                  </div>
                  <h3 className="heading-primary text-[#0A1A3B] dark:text-white">
                    QUALITY <span className="text-primary inline-block">POLICY</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We, at Mewar Hitech, pay high attention to the quality of materials used in the manufacturing of our equipment and machinery. All of these materials, including castings done in-house, are pre-tested and continuously monitored by our Quality Assurance Cell.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    As regards technological improvements and production processes, no stone is left unturned by us. Our CMD, Mr. CS Rathore, personally monitors the quality of the equipment and machinery manufactured by us.
                  </p>
                </div>

                {/* Image & Caption */}
                <div className="relative rounded-none overflow-hidden border-2 border-border">
                  <img
                    src="/images/about-mewar-hi-tech-2.jpg"
                    alt="CNC Plasma Cutting Machinery in Action"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      CNC Plasma Laser Cutting &amp; In-House Testing
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. 3D Model Viewer & Team Experts ── */}
        <section className="section-padding bg-background border-b border-border">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* 3D Model Viewer Container */}
            <div
              className="lg:col-span-6 w-full"
            >
              <div className="relative rounded-none overflow-hidden shadow-2xl border-2 border-border bg-card p-4">
                <div className="absolute top-6 left-6 z-10 bg-black px-3.5 py-1.5 rounded-none border-2 border-primary">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-widest">
                    Interactive 3D Equipment Model
                  </span>
                </div>
                <model-viewer
                  src="/3dmodel/Meshy_AI_Hammer_Mill_0704071611_texture.glb"
                  poster="/images/backgorund.webp"
                  alt="3D Industrial Hammer Mill Machinery Model"
                  auto-rotate
                  camera-controls
                  ar
                  shadow-intensity="1"
                  interaction-prompt="none"
                  auto-rotate-delay="0"
                  className="w-full h-[380px] sm:h-[450px] rounded-none bg-muted"
                  style={{ width: "100%", height: "420px" }}
                ></model-viewer>
              </div>
            </div>

            {/* Team Dedicated of Experts Content */}
            <div
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                  <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    HUMAN EXCELLENCE &amp; EXPERTISE
                  </span>
                </div>
                <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-tight">
                  A TEAM DEDICATED <span className="text-primary inline-block">OF EXPERTS</span>
                </h2>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We have a qualified and experienced team, who are strongly committed to our business philosophy. Our only goal is to serve our customers in the finest way. Over the years we have acquired a deep knowledge base and the experience to help our customers choose the best option as per their requirements.
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed">
                From conception to design and final products, we carefully monitor every step to assist our clients to the optimum level. The company endeavours to maintain competitive price and stock to prompt sales requirements. We look forward to not only offering the best quality crushers but also developing a relationship of mutual trust and knowledge with our customers.
              </p>

              <div className="pt-2">
                <Link href="/contact">
                  <BlobButton variant="primary" className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2">
                    <span>Talk to Our Engineers</span>
                    <ArrowRight size={14} />
                  </BlobButton>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ── 6. Advanced In-House Machinery & Equipment Capabilities ── */}
        <section className="section-padding bg-secondary text-secondary-foreground border-b border-border/20">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="hidden sm:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  RESPECT, MISSION &amp; PHILOSOPHY
                </span>
              </div>
              <h2 className="heading-primary text-white">
                OUR 100% IN-HOUSE <span className="text-primary inline-block">PRECISION EQUIPMENT</span>
              </h2>
              <p className="text-secondary-foreground/70 text-sm sm:text-base font-medium">
                Mewar Hitech has a strong and committed team of highly qualified engineers. We ensure a steady supply of top-tier crushing and screening machinery through our advanced in-house setup:
              </p>
            </div>

            {/* Machinery Grid / Slider on Mobile */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-6 sm:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0"
            >
              {MACHINERY_LIST.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="w-[85vw] sm:w-auto shrink-0 snap-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <IconComp size={22} />
                      </div>
                      <div>
                        <h4 className="common-heading text-base text-white tracking-wide">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mt-0.5">
                          {item.spec}
                        </span>
                      </div>
                      <p className="text-secondary-foreground/70 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── 7. Our Mission & Team Photo Celebration Section ── */}
        <section className="section-padding bg-background border-b border-border">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6 text-center lg:text-left"
              >
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      OUR SHARED VISION
                    </span>
                  </div>
                  <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-tight">
                    WE THRIVE ONLY WHEN <span className="text-primary inline-block">OUR ASSOCIATES DO</span>
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Our mission is to manufacture and supply quality equipment, the process of which is preceded by a thorough understanding of the client’s requirements and followed by the servicing of that equipment in a promised timeframe.
                  </p>
                  <p>
                    We provide rock-solid support to our clients with prompt after-sales service. We pledge to serve our customers in an unprecedented and always better than the best service and would feel elated to be associated with your esteemed organization at all times.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-card border border-border space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                    <Target size={18} />
                    <span>Uncompromising Quality Commitment</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    From engineering calculations to final load tests, every machine built by Mewar Hi-Tech bears the guarantee of heavy-duty reliability.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Team Award Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border group">
                  <img
                    src="/images/about-mewar-hi-tech-3.jpg"
                    alt="Mewar Hi-Tech Team Celebration & Award Presentation"
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Corporate Excellence</p>
                    <p className="text-sm font-semibold mt-1">Recognizing Outstanding Team Milestones &amp; Client Success</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 8. Global Stats Counter ── */}
        <StatsCounter />

        {/* ── 9. Why Choose Us ── */}
        <WhyChooseUs />

        {/* ── 10. Call to Action ── */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
