"use client";

import React, { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Video,
  Info,
  Send,
  ShieldCheck,
  Zap,
  ChevronRight,
  Flame,
  Wrench,
  TrendingUp,
  Download,
  Home,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  Cpu,
  Compass,
  Pickaxe,
  Building2,
  Truck,
  Factory,
  Share2,
  PhoneCall,
  FileCheck,
  Sparkles,
  Layers,
  Award,
} from "lucide-react";
import { toast } from "react-toastify";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";
import { PRODUCTS_DATA } from "../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.id;

  // Find product by slug
  const product = PRODUCTS_DATA.find((item) => item.slug === slug);

  // Form State
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I am interested in the ${product?.name || "equipment"}. Please send me the technical specifications and a quote.`,
  });

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Active Main Image in Gallery Section
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);

  const featuresCarouselRef = useRef<HTMLDivElement>(null);
  const applicationsCarouselRef = useRef<HTMLDivElement>(null);
  const brochuresCarouselRef = useRef<HTMLDivElement>(null);
  const quoteCarouselRef = useRef<HTMLDivElement>(null);
  const relatedCarouselRef = useRef<HTMLDivElement>(null);
  const statsCarouselRef = useRef<HTMLDivElement>(null);

  // Auto-play all sliders on mobile
  useEffect(() => {
    const refs = [
      featuresCarouselRef,
      applicationsCarouselRef,
      brochuresCarouselRef,
      quoteCarouselRef,
      relatedCarouselRef,
      statsCarouselRef
    ];

    const interval = setInterval(() => {
      // Only auto-slide on mobile screens (less than 640px)
      if (window.innerWidth >= 640) return;
      
      refs.forEach(ref => {
        if (ref.current) {
          const { scrollLeft, scrollWidth, clientWidth } = ref.current;
          // If we reached the end, snap back to start
          if (scrollLeft + clientWidth >= scrollWidth - 20) {
            ref.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            // Scroll by approx one card width
            ref.current.scrollBy({ left: window.innerWidth * 0.85, behavior: "smooth" });
          }
        }
      });
    }, 2500); // Auto slide every 2.5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "Product",
          productName: product?.name,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry");
      }

      toast.success("Engineering enquiry submitted! Our technical team will reach out within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: `I am interested in the ${product?.name || "equipment"}. Please send me the technical specifications and a quote.`,
      });
    } catch (error) {
      toast.error("Failed to send enquiry. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  // Fallback 404 UI
  if (!product) {
    return (
      <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
        <Header />
        <main className="flex-grow pt-36 pb-24 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md px-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto">
              <Info size={32} />
            </div>
            <h1 className="common-heading text-3xl sm:text-4xl text-foreground">
              Equipment Not Found
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-semibold">
              The requested machinery model could not be found in our database. Please explore our complete heavy machinery catalog.
            </p>
            <div className="pt-2">
              <Link href="/products">
                <BlobButton
                  variant="primary"
                  className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Catalog</span>
                </BlobButton>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Dynamic title split for dual-line typography
  let firstHalf = product.name;
  let secondHalf = "";
  const lowerName = product.name.toLowerCase();

  const splitKeywords = [
    "jaw crusher", "cone crusher", "roll crusher", "impactor",
    "screen", "washer", "feeder", "conveyor", "machine", "crusher"
  ];

  let matchedKeyword = splitKeywords.find((kw) => lowerName.includes(kw));

  if (matchedKeyword) {
    const idx = lowerName.indexOf(matchedKeyword);
    firstHalf = product.name.slice(0, idx).trim();
    secondHalf = product.name.slice(idx).trim();
  } else {
    const nameWords = product.name.split(" ");
    const halfLength = Math.ceil(nameWords.length / 2);
    firstHalf = nameWords.slice(0, halfLength).join(" ");
    secondHalf = nameWords.slice(halfLength).join(" ");
  }

  // Related Products
  const relatedProducts = PRODUCTS_DATA.filter(
    (item) => item.slug !== product.slug && (item.category === product.category || item.subCategory === product.subCategory)
  ).slice(0, 3);

  // Gallery items including mainImage
  const allImages = [product.mainImage, ...(product.gallery || [])];

  // Quick info metrics extracted dynamically from specs or defaults
  const quickMetrics = [
    {
      icon: Flame,
      label: "Heavy Crushing",
      value: "High Reduction",
      sub: "Optimal Efficiency",
    },
    {
      icon: ShieldCheck,
      label: "Structural Body",
      value: "Certified Steel",
      sub: "Reinforced Chassis",
    },
    {
      icon: Wrench,
      label: "Maintenance",
      value: "Enclosed System",
      sub: "Minimal Wear",
    },
    {
      icon: TrendingUp,
      label: "Plant Tonnage",
      value: "High Output",
      sub: "Max TPH Capacity",
    },
  ];

  // Applications list
  const applications = [
    {
      icon: Pickaxe,
      title: "Mining & Ore Extraction",
      desc: "Primary & secondary reduction of hard iron ore, copper, bauxite, and gold deposits.",
    },
    {
      icon: Compass,
      title: "Hard Rock Quarrying",
      desc: "High-tonnage crushing of granite, basalt, limestone, and river gravel.",
    },
    {
      icon: Building2,
      title: "Infrastructure & Roads",
      desc: "Producing precise cubical aggregates for high-grade highway & asphalt mixtures.",
    },
    {
      icon: Factory,
      title: "Aggregate Processing",
      desc: "Manufactured sand (M-Sand) and washed fines sizing for ready-mix concrete plants.",
    },
    {
      icon: Truck,
      title: "Recycling & Demolition",
      desc: "Processing concrete debris, asphalt pavement, and industrial slag for reuse.",
    },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        
        {/* ── 1. PREMIUM INDUSTRIAL HERO SECTION ── */}
        <section className="relative z-20 bg-[#0B0D0F] text-white pt-24 pb-16 lg:pt-36 lg:pb-32 overflow-hidden border-b border-border/10">
          
          {/* Subtle Background Mesh & Light Lighting */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-[#0D1015] to-[#07080A] pointer-events-none" />
          <div 
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Decorative Subtle Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

          {/* Main Hero Container */}
          <Container className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Breadcrumb, Titles, CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-4 lg:space-y-6 text-left"
            >
              
              {/* Breadcrumb Navigation */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Home size={12} />
                  <span>Home</span>
                </Link>
                <ChevronRight size={10} className="text-primary" />
                <Link href="/products" className="hover:text-primary transition-colors">
                  Equipment
                </Link>
                <ChevronRight size={10} className="text-primary" />
                <span className="text-primary font-bold">{product.name}</span>
              </div>

              {/* Sub-Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-[10px] font-bold uppercase tracking-widest">
                <Sparkles size={12} />
                <span>{product.category} &bull; {product.subCategory}</span>
              </div>

              {/* Dynamic Styled Product Title */}
              <h1 className="common-heading text-2xl sm:text-4xl lg:text-[56px] leading-[1.1] tracking-tight font-bold">
                <span className="text-white">{firstHalf} </span>
                {secondHalf && (
                  <span className="text-primary block mt-1">{secondHalf}</span>
                )}
              </h1>

              {/* Subheading Badge & Accent Divider */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-10 h-[3px] bg-primary rounded-full" />
                <p className="text-[10px] sm:eyebrow inline- text-primary">
                  Engineered for Maximum Tonnage &bull; Built to Last
                </p>
              </div>

              {/* Intro Text Description */}
              <p className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed max-w-xl">
                Heavy-duty industrial crushing and material handling system designed for high reduction ratios, maximum continuous uptime, and reliable operating efficiency.
              </p>

              {/* Quick Specifications Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {product.subCategory && (
                  <span className="text-[10px] font-bold bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-lg">
                    Class: {product.subCategory}
                  </span>
                )}
                <span className="text-[10px] font-bold bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-lg">
                  Heavy Steel Body
                </span>
                <span className="text-[10px] font-bold bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-lg">
                  Continuous Lubrication
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <BlobButton
                  onClick={() => document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" })}
                  variant="primary"
                  className="!w-full sm:!w-auto !px-6 sm:!px-8 !h-[44px] sm:!h-[50px] !text-[10px] sm:!text-xs !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2 whitespace-nowrap shadow-lg !text-primary-foreground"
                >
                  <FileText size={16} />
                  <span>Request Engineering Quote</span>
                  <ArrowRight size={16} />
                </BlobButton>
                
                <BlobButton
                  onClick={() => window.dispatchEvent(new Event("open-brochure-modal"))}
                  variant="secondary"
                  className="!w-full sm:!w-auto !px-5 sm:!px-7 !h-[44px] sm:!h-[50px] !text-[10px] sm:!text-xs !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2 whitespace-nowrap !border-white/30 !text-white hover:!bg-white hover:!text-black"
                >
                  <Download size={16} />
                  <span>Download Spec Sheet</span>
                </BlobButton>
              </div>
            </motion.div>

            {/* Right Column: Hero Floating Image Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              {/* Soft Radial Ambient Lighting */}
              <div className="absolute w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

              {/* Main Hero Machine Image directly shown */}
              <div 
                className="relative z-10 w-full group flex items-center justify-center cursor-pointer" 
                onClick={() => {
                  setSelectedGalleryIndex(0);
                  setLightboxOpen(true);
                }}
                title="View Full Resolution"
              >
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="max-h-[300px] sm:max-h-[500px] lg:max-h-[600px] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 filter drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
                />
                
                {/* Hover Expand Icon */}
                <div className="absolute bottom-0 right-0 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            </motion.div>

          </Container>
        </section>

        {/* ── 2. QUICK INFO METRIC STRIP ── */}
        <section className="relative z-30 bg-[#0F1216] border-b border-border/10 section-padding-sm">
          <Container>
            <div 
              ref={statsCarouselRef}
              className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-4 sm:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0"
            >
              {quickMetrics.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="w-[85vw] sm:w-auto shrink-0 snap-center p-3.5 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all duration-300 text-left space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {item.label}
                      </span>
                      <IconComponent size={18} className="text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {item.value}
                    </div>
                    <div className="text-[10px] font-semibold text-primary/90">
                      &bull; {item.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ── 3. EQUIPMENT OVERVIEW & FEATURES SECTION ── */}
        <section className="section-padding bg-background border-b border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Left Column: Comprehensive Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-6 text-center lg:text-left"
              >
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      EQUIPMENT NARRATIVE &bull; OVERVIEW
                    </span>
                  </div>
                  <h2 className="font-sans text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight uppercase text-[#0A1A3B] dark:text-white leading-tight">
                    ENGINEERED FOR PRECISION, CONTINUOUS TONNAGE &amp; <span className="text-primary inline-block">HEAVY DUTY LIFE</span>
                  </h2>
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-semibold">
                  {product.introText}
                </p>

                {/* Key Machine Features Bullet Points */}
                <div className="space-y-4 pt-4">
                  <h3 className="common-heading text-sm uppercase tracking-wider text-foreground">
                    Core Design Highlights &amp; Mechanisms:
                  </h3>
                  <div 
                    ref={featuresCarouselRef}
                    className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-3 sm:gap-3.5 pb-4 sm:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0"
                  >
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="w-[85vw] sm:w-auto shrink-0 snap-center flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card border border-border/80 shadow-sm"
                      >
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-[11px] sm:text-xs text-muted-foreground font-semibold leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Interactive 3D Model / High Resolution View Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative rounded-xl overflow-hidden bg-card border border-border/80 p-6 sm:p-8 shadow-xl w-full flex flex-col items-center justify-center group">
                  <div className="absolute top-4 right-4 z-20 flex flex-wrap items-center gap-1.5 sm:gap-2 max-w-[60%] sm:max-w-none justify-end">
                    {product.model3d && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20 flex items-center gap-1.5 shadow-sm">
                        <Sparkles size={11} className="animate-pulse" />
                        <span>3D Interactive</span>
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-muted text-foreground text-[10px] font-bold uppercase tracking-wider border border-border">
                      {product.subCategory}
                    </span>
                  </div>

                  {product.model3d ? (
                    <div className="w-full h-[280px] sm:h-[360px] lg:h-[420px] flex items-center justify-center relative mt-4">
                      <model-viewer
                        src={product.model3d}
                        alt={product.name}
                        auto-rotate
                        camera-controls
                        ar
                        shadow-intensity="1.5"
                        auto-rotate-delay="1000"
                        camera-orbit="45deg 75deg 105%"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ) : (
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="max-h-[380px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className="w-full mt-4 pt-4 border-t border-border flex items-center justify-between text-left">
                    <div>
                      <h4 className="text-xs font-bold text-foreground uppercase">{product.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-bold">
                        {product.model3d ? "Rotate 360° • Zoom • Inspect" : "Primary Industrial Material Handler"}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedGalleryIndex(0);
                        setLightboxOpen(true);
                      }}
                      className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Expand View</span>
                      <Maximize2 size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ── 4. INDUSTRIAL APPLICATIONS SHOWCASE ── */}
        <section className="section-padding bg-muted/30 border-b border-border">
          <Container className="space-y-12">
            
            <div className="max-w-2xl space-y-3 text-center md:text-left mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  TARGET OPERATIONS &bull; APPLICATIONS
                </span>
              </div>
              <h2 className="font-sans text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight uppercase text-[#0A1A3B] dark:text-white">
                VERSATILE INDUSTRIAL OPERATING <span className="text-primary inline-block">ENVIRONMENTS</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground font-semibold">
                Designed to operate under extreme crushing forces across diverse mineral processing sectors.
              </p>
            </div>

            <div 
              ref={applicationsCarouselRef}
              className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-6 sm:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 text-left"
            >
              {applications.map((app, idx) => {
                const IconComponent = app.icon;
                return (
                  <div
                    key={idx}
                    className="w-[85vw] sm:w-auto shrink-0 snap-center p-4 sm:p-6 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300 space-y-3 sm:space-y-4 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <IconComponent size={20} />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="common-heading text-sm sm:text-base text-foreground font-bold">
                        {app.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                        {app.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Extra Summary Card */}
              <div className="w-[85vw] sm:w-auto shrink-0 snap-center p-4 sm:p-6 rounded-xl bg-primary text-primary-foreground shadow-lg flex flex-col justify-between space-y-3 sm:space-y-4 text-left">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="common-heading text-lg font-bold uppercase text-white">
                    Custom Plant Setup?
                  </h3>
                  <p className="text-xs font-semibold text-white/90 leading-relaxed">
                    Our team provides custom engineering flowsheet designs for complete circuit integration.
                  </p>
                </div>
                <BlobButton
                  onClick={() => document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" })}
                  variant="primary"
                  className="!w-full !py-3.5 !text-xs !font-bold !uppercase !tracking-wider"
                >
                  <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                    <span>Consult An Engineer</span>
                    <ArrowRight size={15} />
                  </span>
                </BlobButton>
              </div>
            </div>
          </Container>
        </section>

        {/* ── 5. DYNAMIC MEDIA SHOWCASE (GALLERY & VIDEO) ── */}
        {(allImages.length > 1 || product.video) && (
          <section className="section-padding bg-background border-b border-border">
            <Container className="space-y-8 lg:space-y-12">
              
              <div className="max-w-3xl space-y-2 text-center md:text-left mx-auto md:mx-0">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    VISUAL MEDIA &bull; TECHNICAL ASSETS
                  </span>
                </div>
                <h2 className="font-sans text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight uppercase text-[#0A1A3B] dark:text-white">
                  ON-SITE INSPECTION &amp; <span className="text-primary inline-block">WORKING VIDEO</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                
                {/* Left: Gallery & Lightbox Trigger */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase text-foreground">
                        <FileText size={16} className="text-primary" />
                        <span>Machine Gallery &amp; Diagrams</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-muted-foreground font-semibold hidden sm:inline">
                        Click image to view full resolution
                      </span>
                    </div>

                    {/* Main Selected Image Preview */}
                    <div 
                      onClick={() => setLightboxOpen(true)}
                      className="relative rounded-xl overflow-hidden border border-border shadow-xl bg-card aspect-[4/3] sm:aspect-[16/10] cursor-pointer group flex items-center justify-center"
                    >
                      <img
                        src={allImages[selectedGalleryIndex]}
                        alt={`${product.name} view ${selectedGalleryIndex + 1}`}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                          allImages[selectedGalleryIndex].toLowerCase().includes(".png")
                            ? "object-contain p-6"
                            : "object-cover"
                        }`}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2">
                          <Maximize2 size={14} />
                          <span>Open Lightbox</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Selector Strip */}
                  {allImages.length > 1 && (
                    <div className="flex items-center gap-3 overflow-x-auto pb-1 pt-1">
                      {allImages.map((imgUrl, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedGalleryIndex(i)}
                          className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                            selectedGalleryIndex === i
                              ? "border-primary shadow-lg ring-2 ring-primary/40 opacity-100"
                              : "border-border/60 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt={`Thumbnail ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Working Video */}
                {product.video && (
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-foreground">
                      <Video size={16} className="text-primary" />
                      <span>Operational Video Footage</span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-black aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center group">
                      <video
                        src={product.video}
                        poster={product.mainImage}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase text-white flex items-center gap-1.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span>LIVE FOOTAGE</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </Container>
          </section>
        )}

        {/* ── 6. TECHNICAL SPECIFICATIONS TABLE ── */}
        {product.specsTable && (
          <section className="section-padding bg-muted/20 border-b border-border">
            <Container className="space-y-10">
              
              <div className="max-w-3xl space-y-2 text-center md:text-left mx-auto md:mx-0">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    ENGINEERING MATRIX &bull; TECHNICAL DATA
                  </span>
                </div>
                <h2 className="font-sans text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight uppercase text-[#0A1A3B] dark:text-white">
                  MACHINE SPECIFICATIONS &amp; <span className="text-primary inline-block">TONNAGE CHART</span>
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold">
                  Detailed dimensional, power, and capacity metrics for model selection.
                </p>
              </div>

              {/* Responsive Specs Table Wrapper */}
              <div className="overflow-x-auto rounded-xl border border-border shadow-xl bg-card max-h-[600px] overflow-y-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="sticky top-0 z-20 bg-muted/90 backdrop-blur-md border-b border-border text-foreground font-bold uppercase tracking-wider">
                    <tr>
                      {product.specsTable.headers.map((header, idx) => (
                        <th 
                          key={idx} 
                          className={`p-3 sm:p-4 lg:p-5 text-center whitespace-nowrap ${
                            idx === 0 ? "sticky left-0 bg-muted z-30 shadow-md text-left" : ""
                          }`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {product.specsTable.sections.map((section, sIdx) => (
                      <React.Fragment key={sIdx}>
                        {/* Section Header Row */}
                        <tr className="bg-primary/10 text-primary font-bold uppercase tracking-wider">
                          <td
                            colSpan={product.specsTable.headers.length}
                            className="p-4 pl-6 text-left whitespace-nowrap"
                          >
                            &bull; {section.title}
                          </td>
                        </tr>
                        {/* Rows */}
                        {section.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="hover:bg-muted/50 transition-colors font-medium text-muted-foreground odd:bg-card even:bg-muted/20"
                          >
                            {row.map((val, cellIdx) => (
                              <td
                                key={cellIdx}
                                className={`p-3 sm:p-4 text-center whitespace-nowrap ${
                                  cellIdx === 0
                                    ? "font-bold text-foreground text-left sticky left-0 bg-card z-10 border-r border-border/40"
                                    : cellIdx === 1 || cellIdx === 2
                                    ? "text-foreground font-bold"
                                    : ""
                                }`}
                              >
                                {val}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Specs Note Callout Box */}
              {product.specsNote && (
                <div className="p-5 rounded-xl bg-card border border-border/80 flex items-start gap-3.5 text-xs text-muted-foreground leading-relaxed text-left max-w-4xl shadow-sm">
                  <Info size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="font-semibold">{product.specsNote}</p>
                </div>
              )}

            </Container>
          </section>
        )}

        {/* ── 7. DOCUMENTATION & DOWNLOADS ── */}
        <section className="section-padding bg-background border-b border-border">
          <Container className="space-y-10">
            
            <div className="max-w-2xl space-y-2 text-center md:text-left mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  TECHNICAL DOCUMENTATION
                </span>
              </div>
              <h2 className="font-sans text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight uppercase text-[#0A1A3B] dark:text-white">
                DOWNLOAD PRODUCT BROCHURES &amp; <span className="text-primary inline-block">LAYOUTS</span>
              </h2>
            </div>

            <div 
              ref={brochuresCarouselRef}
              className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-4 sm:gap-6 pb-6 sm:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 text-left"
            >
              
              {/* Card 1: Main Product Brochure */}
              <div className="w-[85vw] sm:w-auto shrink-0 snap-center p-4 sm:p-6 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 transition-all space-y-3 sm:space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                    <FileText size={22} />
                  </div>
                  <h3 className="common-heading text-sm sm:text-base text-foreground font-bold">
                    Official Product Catalog
                  </h3>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                    Complete brochure with dimension diagrams, capacity formulas, and CSS settings.
                  </p>
                </div>
                <BlobButton
                  onClick={() => window.dispatchEvent(new Event("open-brochure-modal"))}
                  variant="secondary"
                  className="!w-full !px-2 !py-2.5 sm:!py-3 !text-[10px] xl:!text-[11px] !font-bold !uppercase !tracking-wider flex flex-col xl:flex-row items-center justify-center gap-1.5 text-center leading-tight"
                >
                  <Download size={16} className="shrink-0 mb-0.5 xl:mb-0" />
                  <span>Download Catalog (PDF)</span>
                </BlobButton>
              </div>

              {/* Card 2: Technical Data Sheet */}
              <div className="w-[85vw] sm:w-auto shrink-0 snap-center p-4 sm:p-6 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 transition-all space-y-3 sm:space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                    <Cpu size={22} />
                  </div>
                  <h3 className="common-heading text-sm sm:text-base text-foreground font-bold">
                    Technical Data Sheet
                  </h3>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                    Engineering tolerances, lubrication schedules, and power requirement matrix.
                  </p>
                </div>
                <BlobButton
                  onClick={() => window.dispatchEvent(new Event("open-brochure-modal"))}
                  variant="secondary"
                  className="!w-full !px-2 !py-2.5 sm:!py-3 !text-[10px] xl:!text-[11px] !font-bold !uppercase !tracking-wider flex flex-col xl:flex-row items-center justify-center gap-1.5 text-center leading-tight"
                >
                  <Download size={16} className="shrink-0 mb-0.5 xl:mb-0" />
                  <span>Request Spec Sheet</span>
                </BlobButton>
              </div>

              {/* Card 3: Civil Foundations */}
              <div className="w-[85vw] sm:w-auto shrink-0 snap-center p-4 sm:p-6 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 transition-all space-y-3 sm:space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                    <Layers size={22} />
                  </div>
                  <h3 className="common-heading text-sm sm:text-base text-foreground font-bold">
                    Civil Foundation Layouts
                  </h3>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                    Detailed AutoCAD diagrams for base foundations and anchor bolt placements.
                  </p>
                </div>
                <BlobButton
                  onClick={() => document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" })}
                  variant="secondary"
                  className="!w-full !px-2 !py-2.5 sm:!py-3 !text-[10px] xl:!text-[11px] !font-bold !uppercase !tracking-wider flex flex-col xl:flex-row items-center justify-center gap-1.5 text-center leading-tight"
                >
                  <FileCheck size={16} className="shrink-0 mb-0.5 xl:mb-0" />
                  <span>Request CAD Layout</span>
                </BlobButton>
              </div>

            </div>
          </Container>
        </section>

        {/* ── 8. REDESIGNED ENGINEERING INQUIRY FORM ── */}
        <section id="quote-section" className="section-padding bg-muted/30 border-b border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Info Column */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      DIRECT FACTORY QUOTE REQUEST
                    </span>
                  </div>
                  <h2 className="font-sans text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight uppercase text-[#0A1A3B] dark:text-white leading-tight">
                    REQUEST PRICING &amp; CUSTOM FLOWSHEET <span className="text-primary inline-block">DESIGN</span>
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-semibold">
                    Interested in integrating the <strong className="text-foreground">{product.name}</strong> into your crushing plant? Submit your application requirements below.
                  </p>
                </div>

                <div 
                  ref={quoteCarouselRef}
                  className="flex overflow-x-auto lg:flex-col gap-4 pb-4 lg:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0"
                >
                  {/* Trust Badge 1 */}
                  <div className="w-[85vw] lg:w-auto shrink-0 snap-center p-3.5 sm:p-5 rounded-xl bg-card border border-border shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="common-heading text-sm text-foreground font-bold">
                        Instant Technical Consultation
                      </h4>
                      <p className="text-xs text-muted-foreground font-semibold">
                        Direct support on Closed Side Settings (CSS) and capacity selection.
                      </p>
                    </div>
                  </div>

                  {/* Trust Badge 2 */}
                  <div className="w-[85vw] lg:w-auto shrink-0 snap-center p-3.5 sm:p-5 rounded-xl bg-card border border-border shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <h4 className="common-heading text-sm text-foreground font-bold">
                        Direct Factory Support
                      </h4>
                      <p className="text-xs text-muted-foreground font-semibold">
                        Call us directly at +91 9001113333 or email sales@kingsoncrusher.com
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Form Column */}
              <div className="lg:col-span-7">
                <div className="p-5 sm:p-8 lg:p-10 rounded-xl bg-card border border-border shadow-xl space-y-4 sm:space-y-6 relative overflow-hidden flex flex-col justify-between h-full text-left">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <span className="text-primary eyebrow mb-1">
                      Technical Enquiry
                    </span>
                    <h3 className="common-heading text-lg sm:text-2xl text-foreground font-bold">
                      Equipment Spec &amp; Price Request
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold text-foreground"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold text-foreground"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Phone No. *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter your mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold text-foreground"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Requirement Details &bull; Target Material / TPH *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Enter your requirement details..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold resize-none text-foreground"
                      />
                    </div>

                    {/* Disclaimer Note */}
                    <div className="p-3.5 rounded-xl bg-muted/50 border border-border/80 flex items-start gap-2.5 text-[11px] text-muted-foreground">
                      <ShieldCheck size={16} className="text-primary shrink-0 mt-0.5" />
                      <p className="font-semibold">
                        <strong>Privacy Notice:</strong> Your information is handled securely according to our privacy policy and will be used exclusively for your equipment quotation.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <BlobButton
                        type="submit"
                        disabled={submitting}
                        variant="primary"
                        className="!w-full !py-3.5 sm:!py-4 !text-[10px] sm:!text-xs !font-bold !uppercase !tracking-wider"
                      >
                        <span className="inline-flex items-center justify-center gap-2">
                          <Send size={15} />
                          <span>{submitting ? "Submitting..." : "Submit Quote Request"}</span>
                        </span>
                      </BlobButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── 9. RELATED PRODUCTS CAROUSEL / GRID ── */}
        {relatedProducts.length > 0 && (
          <section className="pt-6 md:pt-8 lg:pt-10 pb-0 bg-background border-b border-border">
            <Container className="space-y-8 lg:space-y-12">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-center sm:text-left">
                <div className="space-y-2">
                  <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                    <div className="hidden sm:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      PRODUCT PORTFOLIO
                    </span>
                  </div>
                  <h2 className="font-sans text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight uppercase text-[#0A1A3B] dark:text-white">
                    RELATED HEAVY <span className="text-primary inline-block">EQUIPMENT</span>
                  </h2>
                </div>

                <Link 
                  href="/products"
                  className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider hover:underline"
                >
                  <span>Explore Full Catalog</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div 
                ref={relatedCarouselRef}
                className="flex overflow-x-auto gap-5 sm:gap-6 lg:gap-8 pb-4 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 text-left cursor-grab active:cursor-grabbing"
              >
                {relatedProducts.map((relItem) => (
                  <Link
                    key={relItem.slug}
                    href={`/products/${relItem.slug}`}
                    className="w-[85vw] sm:w-[320px] lg:w-[360px] xl:w-[400px] shrink-0 snap-center group rounded-xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="p-4 sm:p-6 bg-muted/30 border-b border-border flex items-center justify-center h-[160px] sm:h-[220px] relative overflow-hidden">
                      <img
                        src={relItem.mainImage}
                        alt={relItem.name}
                        className="max-h-[140px] sm:max-h-[180px] w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase text-white">
                        {relItem.category}
                      </span>
                    </div>

                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="common-heading text-sm sm:text-lg text-foreground font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {relItem.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-semibold line-clamp-2 leading-relaxed break-words">
                          {relItem.introText}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-border/60">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                          View Specifications
                        </span>
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </Container>
          </section>
        )}

      </main>

      {/* ── STICKY MOBILE BOTTOM ACTION BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] sm:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
        <div className="flex gap-3">
          <button
            onClick={() => document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-1 h-[44px] rounded-xl bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-[0.97] transition-transform"
          >
            <FileText size={15} />
            <span>Get Quote</span>
          </button>
          <a
            href="tel:+919001113333"
            className="flex-1 h-[44px] rounded-xl bg-card border border-border text-foreground text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-[0.97] transition-transform"
          >
            <PhoneCall size={15} />
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-primary transition-colors"
            >
              <X size={20} />
            </button>

            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedGalleryIndex((prev) =>
                      prev === 0 ? allImages.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-primary transition-colors z-50"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() =>
                    setSelectedGalleryIndex((prev) =>
                      prev === allImages.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-primary transition-colors z-50"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Main Lightbox Image */}
            <div className="max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center p-4">
              <img
                src={allImages[selectedGalleryIndex]}
                alt={`${product.name} enlarged view`}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
