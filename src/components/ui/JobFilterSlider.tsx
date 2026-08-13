"use client";

import React, { useEffect } from "react";
import { X, Filter, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface JobFilterSliderProps {
  isOpen: boolean;
  onClose: () => void;
  jobs: any[];
  filters: {
    department: string[];
    experience: string[];
    education: string[];
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    department: string[];
    experience: string[];
    education: string[];
  }>>;
}

export default function JobFilterSlider({
  isOpen,
  onClose,
  jobs,
  filters,
  setFilters,
}: JobFilterSliderProps) {
  // Extract unique values
  const departments = Array.from(new Set(jobs.map((j) => j.department))).filter(Boolean);
  const experiences = Array.from(new Set(jobs.map((j) => j.experience))).filter(Boolean);
  const educations = Array.from(new Set(jobs.map((j) => j.education))).filter(Boolean);

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({
      department: [],
      experience: [],
      education: [],
    });
  };

  const totalActiveFilters =
    filters.department.length + filters.experience.length + filters.education.length;

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Slider Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-card shadow-2xl z-[101] border-l border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-primary" />
                <h3 className="font-bold text-lg text-foreground tracking-wide">Filter Jobs</h3>
                {totalActiveFilters > 0 && (
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {totalActiveFilters}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-background rounded-full border border-border hover:border-primary"
              >
                <X size={18} />
              </button>
            </div>

            {/* Filter Content */}
            <div className="p-6 overflow-y-auto flex-1 space-y-8">
              {/* Department Filter */}
              {departments.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
                    Department
                  </h4>
                  <div className="space-y-2">
                    {departments.map((dept) => (
                      <label key={dept} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                            filters.department.includes(dept)
                              ? "bg-primary border-primary text-white"
                              : "border-muted-foreground/40 group-hover:border-primary/50"
                          }`}
                        >
                          {filters.department.includes(dept) && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {dept}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Filter */}
              {experiences.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
                    Experience
                  </h4>
                  <div className="space-y-2">
                    {experiences.map((exp) => (
                      <label key={exp} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                            filters.experience.includes(exp)
                              ? "bg-primary border-primary text-white"
                              : "border-muted-foreground/40 group-hover:border-primary/50"
                          }`}
                        >
                          {filters.experience.includes(exp) && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Filter */}
              {educations.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
                    Qualification
                  </h4>
                  <div className="space-y-2">
                    {educations.map((edu) => (
                      <label key={edu} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                            filters.education.includes(edu)
                              ? "bg-primary border-primary text-white"
                              : "border-muted-foreground/40 group-hover:border-primary/50"
                          }`}
                        >
                          {filters.education.includes(edu) && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {edu}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border bg-muted/30 grid grid-cols-2 gap-4">
              <button
                onClick={clearFilters}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-foreground border border-border bg-background hover:bg-muted transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
