"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SelectionDropdown from "@/components/ui/SelectionDropdown";
import { CASE_STUDIES, CaseStudy } from "@/data/case-studies-data";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Cog, 
  CheckCircle2, 
  ArrowRight, 
  X,
  Globe,
  Building2,
  Calendar,
  Layers,
  ChevronRight,
  Filter
} from "lucide-react";

import PageHero from "@/components/layout/PageHero";

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState<"all" | "national" | "international">("all");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (filter === "national") return study.type === "national";
    if (filter === "international") return study.type === "international";
    return true;
  });

  const renderStatIcon = (iconType: string) => {
    switch (iconType) {
      case "chart":
        return <TrendingUp size={16} className="text-primary" />;
      case "clock":
        return <Clock size={16} className="text-primary" />;
      case "shield":
        return <ShieldCheck size={16} className="text-primary" />;
      case "zap":
        return <Zap size={16} className="text-primary" />;
      case "cog":
        return <Cog size={16} className="text-primary" />;
      default:
        return <CheckCircle2 size={16} className="text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1 pb-20 select-none">
        {/* Page Hero Banner matching exact reference UI design */}
        <PageHero
          label="SUCCESS STORIES & PROJECTS"
          title="PROJECT CASE STUDIES"
          description="Explore our proven track record of heavy-duty crushing and screening plants deployed across India and globally."
          image="/images/backgorund.webp"
        />

        <Container className="pt-12">

          {/* Filter Tab Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-border/60">
            <div className="flex w-full md:w-auto items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
              <Filter size={15} className="text-primary" />
              <span>Filter Projects:</span>
            </div>

            {/* Mobile Dropdown */}
            <div className="w-full md:hidden">
              <SelectionDropdown
                value={filter}
                onChange={(val) => setFilter(val as any)}
                options={[
                  { value: "all", label: `All Projects (${CASE_STUDIES.length})` },
                  { value: "national", label: `National (India) (${CASE_STUDIES.filter(s => s.type === "national").length})` },
                  { value: "international", label: `International (${CASE_STUDIES.filter(s => s.type === "international").length})` }
                ]}
                className="text-xs font-semibold"
              />
            </div>

            {/* Desktop Pill Buttons */}
            <div className="hidden md:flex items-center p-1 rounded-2xl bg-muted border border-border/80 shadow-inner">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === "all"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Projects ({CASE_STUDIES.length})
              </button>
              
              <button
                onClick={() => setFilter("national")}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === "national"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                National (India) ({CASE_STUDIES.filter(s => s.type === "national").length})
              </button>

              <button
                onClick={() => setFilter("international")}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === "international"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                International ({CASE_STUDIES.filter(s => s.type === "international").length})
              </button>
            </div>
          </div>

          {/* Case Studies Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredStudies.map((study, idx) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedStudy(study)}
                  className="group bg-card border border-border/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
                >
                  <div>
                    {/* Top Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Number Counter Badge */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white font-mono font-bold text-xs flex items-center justify-center border border-white/20 shadow-lg">
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      {/* Category Tag */}
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-bold tracking-wider px-3 py-1 rounded-md uppercase shadow-md">
                        {study.category}
                      </div>

                      {/* Type Badge (National vs International) */}
                      <div className="absolute bottom-3 right-3 bg-[#0A1A3B]/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase border border-white/10">
                        {study.type}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-lg font-bold text-[#0A1A3B] dark:text-white group-hover:text-primary transition-colors leading-snug line-clamp-2 min-h-[52px] flex items-center">
                        {study.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold pb-3 border-b border-border/60">
                        <MapPin size={15} className="text-primary shrink-0" />
                        <span>{study.location}</span>
                      </div>

                      <p className="text-xs text-muted-foreground font-medium leading-relaxed line-clamp-2">
                        {study.description}
                      </p>

                      {/* Stats Section */}
                      <div className="grid grid-cols-3 gap-2 pt-2 bg-muted/40 p-3 rounded-2xl border border-border/50">
                        {study.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="flex flex-col items-center text-center space-y-1">
                            <div className="flex items-center gap-1">
                              {renderStatIcon(stat.icon)}
                              <span className="text-xs font-bold text-foreground">
                                {stat.value}
                              </span>
                            </div>
                            <span className="text-[9px] text-muted-foreground font-medium leading-tight line-clamp-2">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="px-6 py-4 bg-muted/30 border-t border-border/60 flex items-center justify-between text-xs font-bold text-[#0A1A3B] dark:text-white group-hover:text-primary group-hover:bg-primary/10 transition-all uppercase tracking-wider">
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </main>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudy(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card text-card-foreground border border-border/80 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-auto"
            >
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-[16/8] bg-muted overflow-hidden">
                <img
                  src={selectedStudy.image}
                  alt={selectedStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold tracking-wider px-3 py-1 rounded-md uppercase">
                      {selectedStudy.category}
                    </span>
                    <span className="bg-white/20 text-white text-xs font-bold tracking-wider px-3 py-1 rounded-md uppercase backdrop-blur-md">
                      {selectedStudy.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {selectedStudy.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-muted/60 border border-border/50 text-xs">
                  <div className="space-y-1">
                    <span className="text-muted-foreground font-medium flex items-center gap-1">
                      <MapPin size={13} className="text-primary" /> Location
                    </span>
                    <p className="font-bold text-foreground">{selectedStudy.location}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground font-medium flex items-center gap-1">
                      <Layers size={13} className="text-primary" /> Capacity
                    </span>
                    <p className="font-bold text-foreground">{selectedStudy.capacity || "Custom TPH"}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground font-medium flex items-center gap-1">
                      <Building2 size={13} className="text-primary" /> Client
                    </span>
                    <p className="font-bold text-foreground truncate">{selectedStudy.client || "Industrial Client"}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground font-medium flex items-center gap-1">
                      <Calendar size={13} className="text-primary" /> Year
                    </span>
                    <p className="font-bold text-foreground">{selectedStudy.year || "2024"}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedStudy.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Performance Metrics &amp; ROI
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedStudy.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-xl bg-card border border-border/80 flex flex-col items-center text-center space-y-1">
                        <div className="flex items-center gap-1.5 text-primary">
                          {renderStatIcon(stat.icon)}
                          <span className="text-lg font-bold text-foreground">{stat.value}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedStudy.highlights && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Key Technical Highlights
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {selectedStudy.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <ChevronRight size={15} className="text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
