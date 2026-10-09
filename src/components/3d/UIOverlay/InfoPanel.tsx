"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useExperience } from "../ExperienceManager";
import { X, ChevronRight } from "lucide-react";

const InfoPanel = () => {
  const { activeHotspot, setActiveHotspot } = useExperience();
  const [activeTab, setActiveTab] = useState<"overview" | "specification">("overview");

  return (
    <AnimatePresence>
      {activeHotspot && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute top-0 left-0 bottom-0 w-full md:w-[400px] bg-[#050505]/95 backdrop-blur-2xl border-r border-white/10 z-30 flex flex-col shadow-2xl pointer-events-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white leading-tight pr-4">
                {activeHotspot.partName}
              </h2>
              <p className="text-white/50 text-sm mt-1 uppercase tracking-wider">
                (Standard Feature)
              </p>
            </div>
            <button 
              onClick={() => setActiveHotspot(null)}
              className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors shrink-0"
            >
              <X size={24} />
            </button>
          </div>

          {/* Image (Placeholder if none provided) */}
          <div className="w-full h-48 bg-gradient-to-br from-white/5 to-transparent border-b border-white/10 flex items-center justify-center p-6 relative overflow-hidden">
            {activeHotspot.image ? (
              <Image src={activeHotspot.image} alt={activeHotspot.partName} className="object-contain w-full h-full"  loading="lazy" width={800} height={600} />
            ) : (
              <div className="text-white/20 font-oswald text-4xl tracking-widest font-bold opacity-30">
                MEWAR HI-TECH
              </div>
            )}
            {/* Subtle glow overlay */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          </div>

          {/* Tabs */}
          <div className="flex w-full border-b border-white/10">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 py-4 text-sm font-bold tracking-wide uppercase transition-colors relative ${
                activeTab === "overview" ? "text-primary" : "text-white/50 hover:text-white"
              }`}
            >
              Overview
              {activeTab === "overview" && (
                <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("specification")}
              className={`flex-1 py-4 text-sm font-bold tracking-wide uppercase transition-colors relative ${
                activeTab === "specification" ? "text-primary" : "text-white/50 hover:text-white"
              }`}
            >
              Specification
              {activeTab === "specification" && (
                <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>

          {/* Content */}
          <div className="p-6 flex-grow overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {activeTab === "overview" ? (
                  <p className="text-white/80 leading-relaxed text-sm">
                    {activeHotspot.overview}
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {activeHotspot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                        <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Footer Navigation */}
          <div className="p-6 border-t border-white/10 flex justify-end">
            <button className="flex items-center gap-2 text-white hover:text-primary font-bold text-sm tracking-wide uppercase transition-colors group">
              Next Feature
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoPanel;
