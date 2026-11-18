"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Container from "@/components/ui/Container";
import { homeFaqs, homeArticleContent } from "@/data/homeContent";

export default function HomeFaqAndArticle() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isArticleExpanded, setIsArticleExpanded] = useState(false);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* ── Structured FAQ Schema for SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. FREQUENTLY ASKED QUESTIONS (FAQ) ── */}
      <section className="py-14 lg:py-20 bg-background border-t border-border">
        <Container className="w-full space-y-8 lg:space-y-12">
          <div className="max-w-3xl space-y-3 text-center mx-auto">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              Got Questions?
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight uppercase text-[#0A1A3B] dark:text-white">
              FREQUENTLY ASKED <span className="text-primary inline-block">QUESTIONS</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
              Find answers to common questions about stone crusher machines, equipment selection, and complete plant setups.
            </p>
          </div>

          <div className="max-w-4xl mx-auto w-full space-y-3.5">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`w-full rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-card border-primary/50 shadow-sm"
                      : "bg-card border-border/80 hover:border-primary/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-foreground text-xs sm:text-sm md:text-base leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed border-t border-border/40 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 2. EDITORIAL ARTICLE / SEO CONTENT SECTION ── */}
      <section className="py-14 lg:py-20 bg-muted/20 border-t border-b border-border relative">
        <Container className="w-full">
          <div className="mx-auto max-w-4xl relative">
            <div
              className={`blog-content transition-all duration-700 ease-in-out overflow-hidden [&>h2:first-child]:!mt-0 ${
                isArticleExpanded ? "max-h-[12000px]" : "max-h-[280px]"
              }`}
              dangerouslySetInnerHTML={{ __html: homeArticleContent }}
            />

            {!isArticleExpanded && (
              <div className="absolute bottom-14 left-0 right-0 h-36 bg-gradient-to-t from-muted/80 dark:from-background to-transparent pointer-events-none" />
            )}

            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={() => setIsArticleExpanded(!isArticleExpanded)}
                className="group flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>{isArticleExpanded ? "Read Less" : "Read More"}</span>
                {isArticleExpanded ? (
                  <ChevronUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

