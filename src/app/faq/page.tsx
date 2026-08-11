"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { ChevronDown, MessageSquare, Wrench, PackageSearch, Truck } from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";
import Link from "next/link";

const FAQ_CATEGORIES = [
  {
    id: "general",
    icon: MessageSquare,
    title: "General Inquiries",
    faqs: [
      {
        question: "What types of equipment does Mewar Hitech manufacture?",
        answer: "We manufacture a wide range of heavy-duty crushing, screening, and size reduction equipment, including Double Toggle Jaw Crushers, Cone Crushers, Vertical Shaft Impactors (VSI), Vibrating Screens, and Sand Washers."
      },
      {
        question: "Is Mewar Hitech ISO certified?",
        answer: "Yes, Mewar Hitech Engineering Ltd is an ISO 9001:2008 certified company, committed to delivering high-quality and reliable industrial solutions."
      },
      {
        question: "Can I get a custom plant designed for my specific needs?",
        answer: "Absolutely. Our expert design team can tailor complete crushing and screening plants from 50 TPH to 500 TPH based on your specific feed size, required output, and material type."
      }
    ]
  },
  {
    id: "technical",
    icon: Wrench,
    title: "Technical Support",
    faqs: [
      {
        question: "Do you provide installation and commissioning services?",
        answer: "Yes, our certified field engineers provide complete on-site installation, structural alignment, and trial commissioning for all plants and heavy equipment."
      },
      {
        question: "What is your standard SLA for technical support?",
        answer: "We guarantee a 48-hour SLA response time for our service engineers to reach any site within India, and typically within a week globally."
      },
      {
        question: "Where can I find the manuals or specifications for my machine?",
        answer: "Detailed specifications are provided during delivery. For additional copies or technical manuals, you can contact our After-Sales support team directly."
      }
    ]
  },
  {
    id: "spares",
    icon: PackageSearch,
    title: "Spares & Maintenance",
    faqs: [
      {
        question: "Do you supply genuine spare parts for older models?",
        answer: "Yes, we maintain an extensive inventory of genuine spare parts including jaw plates, cone mantles, blow bars, and screens for both current and older models."
      },
      {
        question: "How do I order replacement wear parts?",
        answer: "You can order spare parts directly through our 'Spare Parts' section under the Services menu or by contacting our dedicated spares department at spares@kingsoncrusher.com."
      },
      {
        question: "Do you offer maintenance contracts?",
        answer: "We offer comprehensive Annual Maintenance Contracts (AMC) to ensure your equipment runs optimally with minimized downtime."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].id);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />

      <main>
        <PageHero
          label="Support & Help Center"
          title="FREQUENTLY ASKED QUESTIONS"
          description="Find quick answers to common questions about our machinery, spare parts, and after-sales support."
          image="/images/infrastructure-2.jpg"
        />

        <section className="section-padding bg-background relative overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Sidebar - Categories */}
              <div className="lg:col-span-4">
                <div className="bg-card border border-border/80 rounded-xl p-6 shadow-sm sticky top-24 space-y-8">
                  
                  {/* Categories List */}
                  <div>
                    <h3 className="eyebrow inline- text-primary mb-4 pl-2">
                      FAQ Categories
                    </h3>
                    <div className="space-y-2">
                      {FAQ_CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === category.id;
                        return (
                          <button
                            key={category.id}
                            onClick={() => { setActiveCategory(category.id); setOpenFaqId(null); }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                              isActive 
                                ? "bg-primary text-white shadow-md shadow-primary/20" 
                                : "hover:bg-muted text-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-xl ${isActive ? "bg-white/20" : "bg-muted-foreground/10"}`}>
                                <Icon size={18} className={isActive ? "text-white" : "text-primary"} />
                              </div>
                              <span className="font-bold text-sm">{category.title}</span>
                            </div>
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform duration-300 ${isActive ? "-rotate-90 text-white/80" : "-rotate-90 text-muted-foreground opacity-0 group-hover:opacity-100"}`} 
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Still need help? Card */}
                  <div className="bg-muted/40 rounded-xl p-5 border border-border/50 text-center">
                    <h4 className="font-bold text-foreground mb-2">Still have questions?</h4>
                    <p className="text-xs font-semibold text-muted-foreground mb-4">
                      Can't find the answer you're looking for? Please chat to our friendly team.
                    </p>
                    <Link href="/contact" className="block w-full">
                      <BlobButton variant="primary" className="!w-full !py-3 !text-xs !font-bold !uppercase !tracking-wider">
                        Contact Us
                      </BlobButton>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Content - Questions */}
              <div className="lg:col-span-8 min-h-[500px]">
                <AnimatePresence mode="wait">
                  {FAQ_CATEGORIES.map((category) => (
                    activeCategory === category.id && (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="mb-8">
                          <h2 className="text-2xl sm:text-3xl font-bold font-sans uppercase tracking-tight text-foreground flex items-center gap-3">
                            <category.icon className="text-primary hidden sm:block" size={32} />
                            {category.title}
                          </h2>
                          <div className="w-16 h-1 bg-primary mt-4 mb-2"></div>
                        </div>

                        {category.faqs.map((faq, index) => {
                          const faqId = `${category.id}-${index}`;
                          const isOpen = openFaqId === faqId;
                          return (
                            <div 
                              key={faqId} 
                              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                                isOpen 
                                  ? "bg-card border-primary/30 shadow-md shadow-primary/5" 
                                  : "bg-card border-border/60 hover:border-primary/30 hover:bg-muted/30"
                              }`}
                            >
                              <button
                                onClick={() => toggleFaq(faqId)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                              >
                                <span className="font-bold text-foreground pr-8 text-sm sm:text-base leading-tight">
                                  {faq.question}
                                </span>
                                <div className={`shrink-0 p-1 rounded-full transition-colors duration-300 ${isOpen ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                                  <ChevronDown 
                                    size={16} 
                                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                                  />
                                </div>
                              </button>
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                  >
                                    <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground font-semibold leading-relaxed border-t border-border/30 mx-5">
                                      {faq.answer}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
