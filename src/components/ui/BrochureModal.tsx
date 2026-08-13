"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ShieldCheck, FileText, Download } from "lucide-react";
import { toast } from "react-toastify";
import BlobButton from "@/components/ui/BlobButton";
import { useTheme } from "@/components/ui/ThemeContext";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const { theme } = useTheme();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    query: "",
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
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          company: formData.company || undefined,
          message: formData.query || "Brochure request submitted via website popup.",
          type: "Product",
          productName: "Brochure Request",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry");
      }

      toast.success(
        "Thank you! Your brochure enquiry has been submitted. Our team will reach out shortly."
      );
      setFormData({
        name: "",
        email: "",
        mobile: "",
        company: "",
        query: "",
      });
      onClose();
    } catch (error: any) {
      toast.error("Failed to send enquiry. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-md sm:max-w-lg rounded-xl p-5 sm:p-6 shadow-2xl border z-10 overflow-y-auto max-h-[88vh] space-y-4 ${
              theme === "light"
                ? "bg-white border-gray-200/80 text-gray-900"
                : "bg-secondary border-border/30 text-white"
            }`}
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="space-y-1 pr-6 text-left">
              <div className="flex items-center gap-2 text-primary eyebrow inline-">
                <FileText size={15} />
                <span>Brochure Request</span>
              </div>
              <h2 className="common-heading text-xl sm:text-2xl text-foreground">
                Fill this form &amp; get brochure
              </h2>
              <p className="text-[11px] text-muted-foreground font-semibold">
                Fill in your details below to instantly receive our technical catalog and machine specifications.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name */}
              <div>
                <label
                  htmlFor="brochure-name"
                  className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1"
                >
                  Name *
                </label>
                <input
                  id="brochure-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border px-3.5 py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                />
              </div>

              {/* Email & Mobile Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email */}
                <div>
                  <label
                    htmlFor="brochure-email"
                    className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1"
                  >
                    Email *
                  </label>
                  <input
                    id="brochure-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border px-3.5 py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label
                    htmlFor="brochure-mobile"
                    className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1"
                  >
                    Mob *
                  </label>
                  <input
                    id="brochure-mobile"
                    name="mobile"
                    type="tel"
                    required
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border px-3.5 py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="brochure-company"
                  className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1"
                >
                  Company Name
                </label>
                <input
                  id="brochure-company"
                  name="company"
                  type="text"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border px-3.5 py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold"
                />
              </div>

              {/* Query */}
              <div>
                <label
                  htmlFor="brochure-query"
                  className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1"
                >
                  Share your query
                </label>
                <textarea
                  id="brochure-query"
                  name="query"
                  rows={2}
                  placeholder="Enter your query or requirement..."
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border px-3.5 py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition-all font-semibold resize-none"
                />
              </div>

              {/* Disclaimer */}
              <div className="p-2.5 rounded-xl bg-muted/50 border border-border/80 flex items-start gap-2 text-[10px] text-muted-foreground">
                <ShieldCheck size={14} className="text-primary shrink-0 mt-0.5" />
                <p>
                  <strong>Disclaimer:</strong> Information collected would be for our own use will not be shared with any one.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <BlobButton
                  type="submit"
                  disabled={submitting}
                  variant="primary"
                  className="!w-full !py-2.5 !text-xs !font-bold !uppercase !tracking-wider"
                >
                  <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
                    <Send size={14} />
                    <span>{submitting ? "Sending Request..." : "SEND"}</span>
                  </span>
                </BlobButton>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
