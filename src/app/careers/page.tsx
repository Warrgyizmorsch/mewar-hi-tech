"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import {
  Briefcase,
  GraduationCap,
  Clock,
  MapPin,
  Mail,
  Phone,
  Upload,
  Send,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
  Award,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import MultiCardCarousel from "@/components/ui/MultiCardCarousel";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";
import SelectionDropdown from "@/components/ui/SelectionDropdown";
import { useTheme } from "@/components/ui/ThemeContext";

// Slider Images Data
const CULTURE_SLIDES = [
  {
    id: 1,
    src: "/images/slider/slide1.jpg",
    title: "Engineering Excellence & Teamwork",
    desc: "Collaborate with industry-leading engineers on heavy crushing machinery.",
    badge: "Workplace",
  },
  {
    id: 2,
    src: "/images/slider/slide2.jpg",
    title: "Advanced In-House Production",
    desc: "Operate state-of-the-art CNC, plasma cutting, and foundry facilities.",
    badge: "Machining",
  },
  {
    id: 3,
    src: "/images/slider/slide3.jpg",
    title: "Continuous Growth & Skill Development",
    desc: "Empowering our workforce with continuous technical training and career advancement.",
    badge: "Skill Growth",
  },
  {
    id: 4,
    src: "/images/slider/slide4.jpg",
    title: "Global Machinery Supply Chain",
    desc: "Deliver high-capacity crushing equipment to aggregate and mining clients worldwide.",
    badge: "Global Logistics",
  },
  {
    id: 5,
    src: "/images/slider/about-mewar-hi-tech1.jpg",
    title: "Heavy-Duty Crusher Assembly",
    desc: "Precision assembly of double toggle and single toggle jaw crushers.",
    badge: "Assembly",
  },
  {
    id: 6,
    src: "/images/slider/about-mewar-hi-tech2.jpg",
    title: "Foundry & Casting Operations",
    desc: "In-house induction furnaces casting MS and high-manganese steel parts.",
    badge: "Foundry",
  },
  {
    id: 7,
    src: "/images/slider/about-mewar-hi-tech3.jpg",
    title: "On-Site Field Support & Testing",
    desc: "Dedicated field engineers conducting load trials and commissioning.",
    badge: "Field Ops",
  },
  {
    id: 8,
    src: "/images/slider/about-mewar-hi-tech4.jpg",
    title: "Quality Control & Metrology Cell",
    desc: "Rigorous ultrasonic, hardness, and dimensional tolerance checks.",
    badge: "Quality Cell",
  },
];

// Open Positions Data from Original Site Content
const OPENINGS = [
  {
    id: "hr-exec",
    title: "HR Executive",
    dept: "Human Resources",
    exp: "3 Years in Manufacturing Industry HR",
    edu: "HR Graduate Required",
    loc: "Sukher Industrial Area, Udaipur",
    type: "Full-Time",
  },
  {
    id: "mkt-exec",
    title: "Marketing Executive",
    dept: "Sales & Marketing",
    exp: "2 Years in Construction Equipment Sales Required",
    edu: "Commerce Graduate Preferred",
    loc: "Sukher Industrial Area, Udaipur",
    type: "Full-Time",
  },
  {
    id: "prod-sup",
    title: "Production Supervisor",
    dept: "Manufacturing & Engineering",
    exp: "5 Years in Manufacturing Industry Required",
    edu: "Diploma or Graduation in Mechanical Engineering",
    loc: "Sukher Industrial Area, Udaipur",
    type: "Full-Time",
  },
  {
    id: "pur-mgr",
    title: "Purchase Manager",
    dept: "Procurement & Supply Chain",
    exp: "5 Years in Manufacturing Industry",
    edu: "Commerce Graduation Required",
    loc: "Sukher Industrial Area, Udaipur",
    type: "Full-Time",
  },
];

export default function CareersPage() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedJob, setSelectedJob] = useState<string>("HR Executive");
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const benefitsCarouselRef = useRef<HTMLDivElement>(null);

  // Auto-play benefits slider on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-slide on mobile screens (less than 640px)
      if (window.innerWidth >= 640) return;
      
      if (benefitsCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = benefitsCarouselRef.current;
        // If we reached the end, snap back to start
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          benefitsCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by approx one card width
          benefitsCarouselRef.current.scrollBy({ left: window.innerWidth * 0.85, behavior: "smooth" });
        }
      }
    }, 2500); // Auto slide every 2.5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Theme-aware illustration image
  const careerIllustration =
    theme === "dark" ? "/images/career-dark.webp" : "/images/career-light.webp";

  // Auto-play slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CULTURE_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CULTURE_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CULTURE_SLIDES.length) % CULTURE_SLIDES.length);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const fileInput = (e.target as HTMLFormElement).querySelector('input[type="file"]') as HTMLInputElement;
      const file = fileInput?.files?.[0];

      if (!file) {
        toast.error("Please attach your resume.");
        setSubmitting(false);
        return;
      }

      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("position", selectedJob);
      submitData.append("experience", formData.experience);
      submitData.append("resume", file);

      const res = await fetch("/api/career", {
        method: "POST",
        body: submitData,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit application");
      }

      toast.success(
        "Application submitted successfully. Our HR team will review your profile shortly."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
      });
      setFileName("");
      
      if (fileInput) fileInput.value = "";
    } catch (error: any) {
      toast.error(error.message || "Failed to submit application. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <Header />

      <main>
        {/* ── 1. Page Hero ── */}
        <PageHero
          label="Careers at Mewar Hi-Tech"
          title="Build The Future of Heavy Machinery"
          description="At Mewar Hitech, you'll work with the country's most talented engineers, dedicated workforce, and thought leaders to shape the future of the crushing and screening industry."
          image="/images/slider/slide1.jpg"
        />

        {/* ── 2. Culture & Facilities Multi-Card Slider Carousel ── */}
        <section className="section-padding bg-muted/40 border-b border-border">
          <Container className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-center sm:text-left">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <div className="hidden sm:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    WORKPLACE &amp; ENGINEERING ENVIRONMENT
                  </span>
                </div>
                <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                  LIFE AT <span className="text-primary inline-block">MEWAR HI-TECH</span>
                </h2>
              </div>
              <p className="text-xs text-muted-foreground font-semibold max-w-md">
                Modern facilities, CNC machining workshops, foundry plants, and continuous skill development.
              </p>
            </div>

            <MultiCardCarousel slides={CULTURE_SLIDES} autoPlayInterval={2000} />
          </Container>
        </section>

        {/* ── 3. Intro & Theme-Aware Career Illustration Section ── */}
        <section className="section-padding bg-background border-b border-border">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Vision & Culture */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                  <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    ENGINEERING &amp; GROWTH
                  </span>
                </div>
                <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-tight">
                  WHY WORK WITH <span className="text-primary inline-block">MEWAR HI-TECH?</span>
                </h2>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                At Mewar Hitech, you&apos;ll work with the country&apos;s most talented engineers and dedicated workforce and thought leaders to shape the future of the industry.
              </p>

              <div 
                ref={benefitsCarouselRef}
                className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-4 pt-2 pb-4 sm:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0"
              >
                <div className="w-[85vw] sm:w-auto shrink-0 snap-center p-4 rounded-xl bg-card border border-border space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                    <Sparkles size={18} />
                    <span>Cutting-Edge Tech</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Work with modern CNC plasma cutters, 15-ton annealing furnaces, and heavy machinery CAD design suites.
                  </p>
                </div>

                <div className="w-[85vw] sm:w-auto shrink-0 snap-center p-4 rounded-xl bg-card border border-border space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                    <Users size={18} />
                    <span>Collaborative Staff</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Our supportive team culture empowers engineers and staff to learn, innovate, and excel together.
                  </p>
                </div>

                <div className="w-[85vw] sm:w-auto shrink-0 snap-center p-4 rounded-xl bg-card border border-border space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                    <Award size={18} />
                    <span>Recognized Excellence</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Be part of an award-winning brand trusted across 40+ countries worldwide for industrial reliability.
                  </p>
                </div>

                <div className="w-[85vw] sm:w-auto shrink-0 snap-center p-4 rounded-xl bg-card border border-border space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                    <CheckCircle2 size={18} />
                    <span>Career Advancement</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Clear growth paths for mechanical engineers, sales executives, and manufacturing supervisors.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Theme-Aware Career Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative -rotate-12 w-full flex items-center justify-center group">
                <img
                  src={careerIllustration}
                  alt="Career at Mewar Hi-Tech Illustration"
                  className="max-h-[380px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

          </Container>
        </section>

        {/* ── 4. Current Job Openings Section ── */}
        <section className="section-padding bg-muted/40 border-b border-border">
          <Container className="space-y-10">
            
            <div className="max-w-3xl space-y-2 text-center md:text-left mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                <span className="text-primary eyebrow">
                  IMMEDIATE HIRING
                </span>
              </div>
              <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                CURRENT <span className="text-primary inline-block">JOB OPENINGS</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground font-semibold">
                Explore available roles at our Sukher manufacturing plant and corporate office in Udaipur.
              </p>
            </div>

            {/* Openings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OPENINGS.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 lg:p-8 rounded-xl bg-card border border-border shadow-md hover:border-primary/50 transition-all duration-300 space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                          {job.dept}
                        </span>
                        <h3 className="common-heading text-xl text-foreground tracking-wide">
                          {job.title}
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider shrink-0">
                        {job.type}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-muted-foreground font-medium border-t border-border/60 pt-4">
                      <div className="flex items-start gap-2.5">
                        <Clock size={16} className="text-primary shrink-0 mt-0.5" />
                        <span><strong>Experience:</strong> {job.exp}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <GraduationCap size={16} className="text-primary shrink-0 mt-0.5" />
                        <span><strong>Qualification:</strong> {job.edu}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                        <span><strong>Location:</strong> {job.loc}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <BlobButton
                      onClick={() => {
                        setSelectedJob(job.title);
                        document.getElementById("career-apply")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-muted/70 hover:bg-primary hover:text-white text-foreground transition-colors duration-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-border"
                    >
                      <Briefcase size={14} />
                      <span>Apply For Position</span>
                    </BlobButton>
                  </div>
                </motion.div>
              ))}
            </div>

          </Container>
        </section>

        {/* ── 5. Resume Application Form & Direct Contact Section ── */}
        <section id="career-apply" className="section-padding bg-background border-b border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              
              {/* Left Column: Direct Resume Submission Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 text-center lg:text-left"
              >
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      DIRECT RESUME SUBMISSION
                    </span>
                  </div>
                  <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-tight">
                    APPLY WITH YOUR <span className="text-primary inline-block">DETAILED RESUME</span>
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed font-medium">
                    Interested candidates can apply online using the form or email their resume directly to our recruitment manager.
                  </p>
                </div>

                <div className="p-6 lg:p-8 rounded-xl bg-card border border-border shadow-lg space-y-6 flex-1 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="common-heading text-base text-foreground">
                          Email Your CV
                        </h4>
                        <a
                          href="mailto:vsr@kingsoncrusher.com"
                          className="text-xs font-bold text-primary hover:underline block mt-0.5"
                        >
                          vsr@kingsoncrusher.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="common-heading text-base text-foreground">
                          Telephone Contact
                        </h4>
                        <span className="text-xs font-bold text-muted-foreground block mt-0.5">
                          0294-2440234
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="common-heading text-base text-foreground">
                          HR &amp; Plant Address
                        </h4>
                        <p className="text-xs text-muted-foreground font-medium leading-relaxed mt-0.5">
                          <strong>Mewar Hi-Tech Engineering Ltd.</strong><br />
                          Hawa Magri, Sukher Industrial Area, NH 8, Sukher, Udaipur - 313001, Rajasthan, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Modern Application Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 flex flex-col h-full"
              >
                <div className="p-8 lg:p-10 rounded-xl bg-card border border-border shadow-2xl space-y-6 relative overflow-hidden flex flex-col justify-between h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                      <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                      <span className="text-primary eyebrow">
                        ONLINE JOB APPLICATION
                      </span>
                    </div>
                    <h3 className="heading-primary text-[#0A1A3B] dark:text-white">
                      SUBMIT <span className="text-primary inline-block">YOUR PROFILE</span>
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
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
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Phone No *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="Enter your mobile number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                        />
                      </div>

                      {/* Position */}
                      <div>
                        <label htmlFor="position" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Position Applied For *
                        </label>
                        <SelectionDropdown
                          id="position"
                          value={selectedJob}
                          onChange={setSelectedJob}
                          options={OPENINGS.map(j => j.title)}
                          className="w-full text-xs font-semibold"
                        />
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <label htmlFor="experience" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Total Experience &amp; Current Company
                      </label>
                      <input
                        id="experience"
                        name="experience"
                        type="text"
                        placeholder="Enter years of experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                      />
                    </div>

                    {/* Resume Upload Box */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Attach Resume (PDF / DOCX) *
                      </label>
                      <div className="border-2 border-dashed border-border hover:border-primary transition-colors rounded-xl p-4 text-center cursor-pointer relative bg-muted/30">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          required
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Upload size={20} className="mx-auto text-primary mb-1" />
                        <span className="block text-xs font-bold text-foreground">
                          {fileName ? fileName : "Click or Drag & Drop Resume File"}
                        </span>
                        <span className="block text-[10px] text-muted-foreground uppercase mt-0.5">
                          PDF, DOC, DOCX up to 10MB
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <BlobButton
                        type="submit"
                        disabled={submitting}
                        variant="primary"
                        className="!w-full !py-3.5 !text-xs !font-bold !uppercase !tracking-wider"
                      >
                        <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
                          <Send size={15} />
                          <span>{submitting ? "Submitting..." : "Submit Application"}</span>
                        </span>
                      </BlobButton>
                    </div>
                  </form>
                </div>
              </motion.div>

            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
