"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  Phone,
  Mail,
  MapPin,
  User,
  Building2,
  Printer,
  Send,
  ShieldCheck,
  Clock,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    message: "",
  });

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
          type: "Contact",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit enquiry");
      }

      toast.success(
        "Thank you for contacting Mewar Hi-Tech. Our sales team will respond shortly."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        message: "",
      });
    } catch (error: any) {
      toast.error(error.message || "Failed to send enquiry. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />

      <main>
        {/* ── 1. Page Hero Section ── */}
        <PageHero
          label="Get In Touch"
          title="Contact Mewar Hi-Tech"
          description="Connect with our sales directors, spare parts division, and after-sales engineering specialists for queries, quotes, and technical support."
          image="/images/slider/about-mewar-hi-tech1.jpg"
        />

        {/* ── 2. Modern Contact Information & Enquiry Form Section ── */}
        <section className="section-padding bg-background border-b border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              
              {/* Left Column: Detailed Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 text-center lg:text-left"
              >
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      MOBILE CRUSHER MANUFACTURERS
                    </span>
                  </div>
                  <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-tight">
                    DIRECT CONTACT <span className="text-primary inline-block">DETAILS</span>
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Have questions about our crushing, screening, or feeding machinery? Get in touch with our dedicated department managers directly.
                  </p>
                </div>

                {/* Contact Cards Stack */}
                <div className="flex flex-col justify-between flex-1 gap-4">
                  
                  {/* Sales & Marketing Card */}
                  <div className="p-5 rounded-xl bg-card border border-border shadow-md space-y-2.5 hover:border-primary/50 transition-colors flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <User size={20} />
                      </div>
                      <div>
                        <h3 className="common-heading text-base text-foreground tracking-wide">
                          Sales &amp; Marketing
                        </h3>
                        <p className="text-[11px] text-primary font-bold uppercase tracking-wider">
                          Vaibhav Singh Rathore <span className="text-muted-foreground font-normal">(Managing Director)</span>
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-muted-foreground font-medium">
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-primary shrink-0" />
                        <span>Mob: (+91) 9001999721, (+91) 9001113333</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-primary shrink-0" />
                        <span>vsr@kingsoncrusher.com | sales@kingsoncrusher.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Spare Parts Division Card */}
                  <div className="p-5 rounded-xl bg-card border border-border shadow-md space-y-2.5 hover:border-primary/50 transition-colors flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <h3 className="common-heading text-base text-foreground tracking-wide">
                          Spare Parts Division
                        </h3>
                        <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
                          Genuine Equipment Replacement Parts
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-muted-foreground font-medium">
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-primary shrink-0" />
                        <span>Mob: +91 8003191278 | Ph: 0294-2440234</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Printer size={14} className="text-primary shrink-0" />
                        <span>Fax: 0294-2440235</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-primary shrink-0" />
                        <span>spares@kingsoncrusher.com</span>
                      </div>
                    </div>
                  </div>

                  {/* After Sales Service Card */}
                  <div className="p-5 rounded-xl bg-card border border-border shadow-md space-y-2.5 hover:border-primary/50 transition-colors flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="common-heading text-base text-foreground tracking-wide">
                          After Sales Service
                        </h3>
                        <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
                          Erection, Commissioning &amp; On-Site Support
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-muted-foreground font-medium">
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-primary shrink-0" />
                        <span>Mob: +91 9928013652 | Ph: 0294-2440234</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Printer size={14} className="text-primary shrink-0" />
                        <span>Fax: 0294-2440235</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-primary shrink-0" />
                        <span>aftersales@kingsoncrusher.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Registered Factory Address Card */}
                  <div className="p-5 rounded-xl bg-card border border-border shadow-md space-y-2.5 hover:border-primary/50 transition-colors flex-1 flex flex-col justify-center">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="common-heading text-base text-foreground tracking-wide">
                          Factory &amp; Registered Office
                        </h3>
                        <p className="text-xs text-muted-foreground font-medium leading-relaxed mt-1">
                          Mewar Hi-Tech Engineering Ltd.<br />
                          Hawa Magri Industrial Area, Sukher, Udaipur - 313001, Rajasthan, India
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* Right Column: Modern Stylish Enquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 flex flex-col h-full"
              >
                <div className="p-8 lg:p-10 rounded-xl bg-card border border-border shadow-2xl space-y-6 relative overflow-hidden flex flex-col justify-between h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                      <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                      <span className="text-primary eyebrow">
                        QUICK ASSISTANCE
                      </span>
                    </div>
                    <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                      ENQUIRY <span className="text-primary inline-block">NOW</span>
                    </h2>
                    <p className="text-xs text-muted-foreground font-semibold mt-1">
                      Fill out the form below and our engineering team will get back to you with specs &amp; pricing.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
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
                          className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
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
                          className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Enter your company name"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label htmlFor="address" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Delivery / Plant Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Requirement Details / Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Enter your requirement details or message..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border px-4 py-3 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold resize-none"
                      />
                    </div>

                    {/* Disclaimer Note */}
                    <div className="p-3.5 rounded-xl bg-muted/50 border border-border/80 flex items-start gap-2.5 text-[11px] text-muted-foreground">
                      <ShieldCheck size={16} className="text-primary shrink-0 mt-0.5" />
                      <p>
                        <strong>Disclaimer:</strong> Information collected will be used strictly for responding to your inquiry and will not be shared with any third party.
                      </p>
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
                          <span>{submitting ? "Sending Request..." : "Send Enquiry"}</span>
                        </span>
                      </BlobButton>
                    </div>
                  </form>
                </div>
              </motion.div>

            </div>
          </Container>
        </section>

        {/* ── 3. Interactive Map & Address Section at Bottom ── */}
        <section className="section-padding bg-muted/40 border-b border-border select-none">
          <Container className="space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <div className="hidden sm:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                  <span className="text-primary eyebrow">
                    VISIT OUR PLANT
                  </span>
                </div>
                <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                  PLANT LOCATION &amp; <span className="text-primary inline-block">INTERACTIVE MAP</span>
                </h2>
              </div>
              <a
                href="https://maps.google.com/?q=Mewar+Hi+Tech+Engineering+Ltd+Sukher+Udaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-foreground transition-colors uppercase tracking-wider"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Google Map Embed Card */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
              <iframe
                title="Mewar Hi-Tech Engineering Ltd Location Map"
                src="https://maps.google.com/maps?q=Mewar+Hi+Tech+Engineering+Ltd+Hawa+Magri+Industrial+Area+Sukher+Udaipur+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[400px] sm:h-[480px] filter contrast-[1.05] brightness-[0.98]"
              ></iframe>

              {/* Overlay Location Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto max-w-md p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <MapPin size={15} />
                  <span>Factory Location</span>
                </div>
                <h4 className="common-heading text-sm">
                  Mewar Hi-Tech Engineering Ltd.
                </h4>
                <p className="text-[11px] text-gray-300 font-medium leading-relaxed">
                  Hawa Magri Industrial Area, Sukher, Udaipur - 313001, Rajasthan, India
                </p>
              </div>
            </div>

          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
