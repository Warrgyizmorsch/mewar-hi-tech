"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Truck,
  Phone,
  Mail,
  CheckCircle2,
  Compass,
  ArrowRight,
  Maximize2,
  X,
  Headset,
  Award,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlobButton from "@/components/ui/BlobButton";
import StatsCounter from "@/components/shared/StatsCounter";
import CTASection from "@/components/shared/CTASection";

const SERVICE_STAGES = [
  {
    id: "pre-sales",
    step: "01",
    title: "Kingson Pre-Sales Consultancy",
    subtitle: "Rational Equipment Selection & Custom Plant Design",
    icon: Compass,
    description:
      "We act as a technical defense consultant and right-hand partner to our clients, empowering them to make rational, high-ROI equipment choices.",
    bullets: [
      "Technical site survey & material hardness assessment",
      "Custom crusher model & plant layout selection",
      "Process flow simulation & TPH optimization",
      "Bespoke engineering tailored to specific site geology",
    ],
  },
  {
    id: "during-sale",
    step: "02",
    title: "Services During The Sale",
    subtitle: "Pre-Delivery Inspection (PDI) & Plan Finalization",
    icon: CheckCircle2,
    description:
      "Rigorous quality verification protocols ensure complete peace of mind before equipment dispatch from our manufacturing plant.",
    bullets: [
      "100% Factory Pre-Delivery Inspection (PDI)",
      "Civil foundation drawing & electrical schematics alignment",
      "Client inspection sign-off before dispatch",
      "Logistics planning & safe heavy machinery transport",
    ],
  },
  {
    id: "after-sales",
    step: "03",
    title: "Service After Sale & Maintenance",
    subtitle: "On-Site Installation, Training & Lifelong Support",
    icon: Wrench,
    description:
      "Our field service engineers remain dedicated to your operational success throughout the complete working lifecycle of your equipment.",
    bullets: [
      "On-site erection, alignment & trial run fine-tuning",
      "Comprehensive hands-on operator & technician training",
      "Scheduled preventive health audits & oil sampling",
      "Rapid on-site troubleshooting & 48-hour response SLA",
    ],
  },
];

const SERVICE_TAB_CONTENT = [
  {
    id: "after-sales",
    title: "After-Sales Technical Service",
    badge: "Field Engineering",
    tagline: "48-Hour Response Anywhere In India",
    description:
      "We provide specialized technical service to assist our clients in keeping their plant operating at peak efficiency. As soon as a service request is logged, our certified engineer is dispatched within 48 hours anywhere in India and within a week to any international site.",
    features: [
      "24/7 Technical Service Hotline & Remote Guidance",
      "Field Service Engineers equipped with diagnostic tools",
      "Guarantee to Repair, Replace & Return assurance policy",
      "Emergency breakdown support for zero extended downtime",
    ],
    image: "/images/after-sales-1.jpg",
  },
  {
    id: "spare-parts",
    title: "Genuine OEM Spare Parts",
    badge: "Parts Logistics",
    tagline: "100% High-Manganese Castings & Precision Components",
    description:
      "Maximize equipment longevity and crushing efficiency with original Kingson spare parts. Manufactured in our in-house alloy casting foundry, our jaw plates, cone liners, blow bars, and shafts undergo rigorous metallurgy checks.",
    features: [
      "18% & 22% Mn Jaw Plates & Heavy Duty Cheek Plates",
      "Manganese Cone Crusher Mantles & Concaves",
      "High-Chrome HSI Blow Bars & VSI Anvils / Rotors",
      "Forged Alloy Shafts, Spherical Bearings & Toggle Plates",
    ],
    image: "/images/video_thumbnail.webp",
  },
  {
    id: "erection-commissioning",
    title: "Erection & Commissioning",
    badge: "Turnkey Setup",
    tagline: "Heavy Field Erection & Turnkey Plant Integration",
    description:
      "From greenfield site excavation to full trial load crushing, our erection team manages complete plant assembly. We deploy heavy crane rigs, align conveyor structures, calibrate electrical control panels, and fine-tune crusher stroke throws.",
    features: [
      "Structural steel erection & heavy crane rigging",
      "Crusher, feeder & vibrating screen mechanical alignment",
      "Control panel wiring, PLC automation & safety interlocks",
      "No-load and full-load trial commissioning with material",
    ],
    image: "/images/after-sales-2.jpg",
  },
];

const ASSURANCES = [
  {
    icon: ShieldCheck,
    title: "Guarantee to Repair, Replace & Return",
    desc: "Firm commitment to product quality, backed by explicit contractual guarantees on all manufactured equipment.",
  },
  {
    icon: Clock,
    title: "48-Hour Engineer Response SLA",
    desc: "Service engineer reaches within 48 hours anywhere in India and within 7 days for global installations.",
  },
  {
    icon: Award,
    title: "100% In-House OEM Standards",
    desc: "All spare parts and replacement components are produced in our ISO 9001:2008 certified foundry and CNC machine shop.",
  },
  {
    icon: Headset,
    title: "24/7 Dedicated Technical Support",
    desc: "Direct access to senior mechanical & electrical engineers for real-time troubleshooting and plant guidance.",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("after-sales");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Form State
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMachine, setFormMachine] = useState("Jaw Crusher");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormName("");
      setFormPhone("");
      setFormEmail("");
      setFormMessage("");
      setFormSubmitted(false);
    }, 4000);
  };

  const currentTab = SERVICE_TAB_CONTENT.find((t) => t.id === activeTab) || SERVICE_TAB_CONTENT[0];

  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />

      <main>
        {/* 1. Page Hero */}
        <PageHero
          label="Engineering Services & Support"
          title="AFTER SALES & TECHNICAL SUPPORT"
          description="End-to-end plant installation, on-site commissioning, OEM spare parts delivery, and rapid 48-hour response maintenance worldwide."
          image="/images/after-sales-1.jpg"
        />

        {/* 2. SLA & Guarantees Trust Banner */}
        <section className="section-padding-sm bg-card border-b border-border/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ASSURANCES.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 rounded-xl bg-background border border-border/70 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <IconComp size={22} className="stroke-[2.2]" />
                    </div>
                    <div className="space-y-1 text-left">
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-tight font-heading leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Overview Section */}
        <section className="section-padding bg-background border-b border-border/60">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      OUR OPERATIONAL ASSURANCE
                    </span>
                  </div>
                  <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-tight">
                    RELIABLE SERVICE BUILT <span className="text-primary inline-block">AROUND YOUR UPTIME</span>
                  </h2>
                </div>

                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed font-medium">
                  <p>
                    We provide specialized technical services to assist our clients in selecting the most appropriate crushing gear and executing every project with optimal machine design. Our equipment and support services ensure your infrastructure operates efficiently with maximum throughput.
                  </p>
                  <p>
                    We stand firmly by our <strong className="text-foreground font-bold">Guarantee to Repair, Replace, and Return</strong>. With three core assurances—Assurance of Product Quality, Credible Contracts, and Excellent Service—we provide prompt resolution to any technical issue on-site.
                  </p>
                </div>
              </div>

              {/* Right Column: Featured Image Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-2xl group">
                  <img
                    src="/images/after-sales-1.jpg"
                    alt="Kingson After Sales Support"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-left space-y-1">
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest block">
                      Active Field Support
                    </span>
                    <h4 className="font-bold text-sm uppercase tracking-wider font-heading">
                      On-Site Plant Fine-Tuning
                    </h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Complete 3-Stage Service Lifecycle */}
        <section className="section-padding bg-muted/30 border-b border-border/60">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-14 text-center md:text-left space-y-3 mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  END-TO-END ENGAGEMENT
                </span>
              </div>
              <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                OUR 3-STAGE <span className="text-primary inline-block">SERVICE LIFECYCLE</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICE_STAGES.map((stage, idx) => {
                const IconComp = stage.icon;
                return (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="p-8 rounded-xl bg-card border border-border/80 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left space-y-6 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComp size={24} className="stroke-[2.2]" />
                      </div>
                      <span className="text-3xl font-bold text-primary/30 font-heading">
                        {stage.step}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="common-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {stage.title}
                        </h3>
                        <p className="text-[11px] font-bold text-primary uppercase tracking-wider mt-1">
                          {stage.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                        {stage.description}
                      </p>

                      <ul className="space-y-2 pt-2 border-t border-border/60">
                        {stage.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-xs font-bold text-foreground/90">
                            <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5 stroke-[2.5]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Capabilities Tabs with links to slug pages */}
        <section className="section-padding bg-background border-b border-border/60">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12 text-center md:text-left space-y-3 mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  CORE CAPABILITIES
                </span>
              </div>
              <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                SPECIALIZED <span className="text-primary inline-block">SERVICE OFFERINGS</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 mb-10 border-b border-border/80 pb-4">
              {SERVICE_TAB_CONTENT.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                        : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/40"
                    }`}
                  >
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl p-8 lg:p-12 border border-border/80 shadow-md text-left"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider inline-block">
                        {currentTab.badge}
                      </span>
                      <h3 className="common-heading text-2xl sm:text-3xl font-bold text-foreground">
                        {currentTab.title}
                      </h3>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">
                        {currentTab.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                      {currentTab.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <Link href={`/services/${currentTab.id}`}>
                        <BlobButton variant="primary" className="!py-3 !px-6 text-xs font-bold uppercase tracking-wider">
                          <span className="flex items-center gap-2">
                            <span>View Dedicated Page</span>
                            <ArrowRight size={14} />
                          </span>
                        </BlobButton>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div
                      onClick={() => setLightboxImage(currentTab.image)}
                      className="relative rounded-xl overflow-hidden border border-border bg-black aspect-[4/3] cursor-pointer group shadow-lg"
                    >
                      <img
                        src={currentTab.image}
                        alt={currentTab.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 6. Form Section */}
        <section className="section-padding bg-muted/30 border-b border-border/60">
          <div className="max-w-[1720px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Info Box */}
              <div className="lg:col-span-5 bg-card border border-border/80 p-8 lg:p-10 rounded-xl flex flex-col justify-between text-center lg:text-left space-y-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      IMMEDIATE ASSISTANCE
                    </span>
                  </div>
                  <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                    REACH OUR AFTER-SALES <span className="text-primary inline-block">TECHNICAL DESK</span>
                  </h2>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40 border border-border/60">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                      <Phone size={20} className="stroke-[2.2]" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                        Mobile Service Hotline
                      </span>
                      <a href="tel:+919928019652" className="text-sm font-bold text-foreground hover:text-primary transition-colors block">
                        +91-9928019652
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40 border border-border/60">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                      <Mail size={20} className="stroke-[2.2]" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                        Service Desk Email
                      </span>
                      <a href="mailto:aftersales@kingsoncrusher.com" className="text-xs font-bold text-foreground hover:text-primary transition-colors block">
                        aftersales@kingsoncrusher.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7 bg-card border border-border/80 p-8 lg:p-10 rounded-xl text-left shadow-sm flex flex-col justify-between">
                <div>
                  <div className="space-y-2 mb-8">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                      <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                      <span className="text-primary eyebrow">
                        REQUEST TECHNICAL VISIT
                      </span>
                    </div>
                    <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                      LOG A <span className="text-primary inline-block">SERVICE TICKET</span>
                    </h2>
                  </div>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 rounded-xl bg-primary/10 border-2 border-primary text-center space-y-3"
                    >
                      <CheckCircle2 size={44} className="text-primary mx-auto stroke-[2.2]" />
                      <h4 className="common-heading text-xl font-bold text-foreground">
                        Service Ticket Created!
                      </h4>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4 font-semibold">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-muted-foreground mb-1 tracking-wider">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rajesh Sharma"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full border border-border bg-background px-4 py-3 text-xs rounded-xl focus:outline-none focus:border-primary text-foreground"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase text-muted-foreground mb-1 tracking-wider">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +91 9876543210"
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            className="w-full border border-border bg-background px-4 py-3 text-xs rounded-xl focus:outline-none focus:border-primary text-foreground"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-muted-foreground mb-1 tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. rajesh@miningcorp.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="w-full border border-border bg-background px-4 py-3 text-xs rounded-xl focus:outline-none focus:border-primary text-foreground"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-muted-foreground mb-1 tracking-wider">
                          Requirement *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Describe your service requirement or spares needed..."
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                          className="w-full border border-border bg-background p-4 text-xs rounded-xl focus:outline-none focus:border-primary text-foreground resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <BlobButton
                          type="submit"
                          variant="primary"
                          className="!py-3.5 !px-8 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                          <span>Submit Ticket</span>
                          <ArrowRight size={16} />
                        </BlobButton>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        <StatsCounter />
        <CTASection />
      </main>

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
