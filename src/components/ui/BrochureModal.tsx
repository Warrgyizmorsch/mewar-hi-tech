"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ShieldCheck, FileText } from "lucide-react";
import { toast } from "react-toastify";
import BlobButton from "@/components/ui/BlobButton";
import { useTheme } from "@/components/ui/ThemeContext";
import SelectionDropdown from "@/components/ui/SelectionDropdown";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

const PRODUCT_BROCHURE_OPTIONS = [
  "Complete Company Brochure (All Products)",
  "Jaw Crusher",
  "Double Toggle Oil Jaw Crusher",
  "Single Toggle Grease Jaw Crusher",
  "Double Toggle Grease Jaw Crusher",
  "Cone Crusher",
  "Roll Crusher",
  "HSI Crusher (Horizontal Shaft Impactor)",
  "VSI Crusher (Vertical Shaft Impactor)",
  "SMM Crusher (Sand Making Machine)",
  "Vibrating Screen",
  "Sand Washer",
  "Belt Conveyor",
  "Vibro Feeder",
  "Single Shaft Feeders",
  "Stationary Crushing Plant",
  "Mobile Crushing Plant",
  "Crusher Spare Parts",
];

export default function BrochureModal({
  isOpen,
  onClose,
  defaultProduct = "Complete Company Brochure (All Products)",
}: BrochureModalProps) {
  const { theme } = useTheme();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    productName: defaultProduct,
    query: "",
  });

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, productName: defaultProduct }));
    }
  }, [defaultProduct, isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProductChange = (val: string) => {
    setFormData((prev) => ({ ...prev, productName: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const messageContent = [
        `Requested Brochure: ${formData.productName}`,
        formData.query ? `User Query: ${formData.query}` : "",
      ]
        .filter(Boolean)
        .join("\n");

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
          message: messageContent,
          type: "Product",
          productName: formData.productName,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry");
      }

      toast.success(
        `Thank you! Brochure request for "${formData.productName}" has been submitted.`
      );
      setFormData({
        name: "",
        email: "",
        mobile: "",
        company: "",
        productName: defaultProduct || "Complete Company Brochure (All Products)",
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 select-none overflow-y-auto">
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
            className={`relative w-full max-w-md sm:max-w-lg rounded-2xl p-4 sm:p-5 shadow-2xl border z-10 overflow-visible my-auto space-y-2.5 ${
              theme === "light"
                ? "bg-white border-gray-200/80 text-gray-900"
                : "bg-secondary border-border/40 text-white"
            }`}
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="space-y-0.5 pr-8 text-left">
              <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-wider">
                <FileText size={14} />
                <span>BROCHURE REQUEST</span>
              </div>
              <h2 className="common-heading text-lg sm:text-xl text-foreground font-black">
                FILL THIS FORM &amp; GET BROCHURE
              </h2>
              <p className="text-[11px] text-muted-foreground font-medium leading-tight">
                Fill in your details below to instantly receive our technical catalog and machine specifications.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5 text-left">
              {/* Name */}
              <div>
                <label
                  htmlFor="brochure-name"
                  className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5"
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
                  className="w-full rounded-xl border border-border px-3.5 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold text-foreground"
                />
              </div>

              {/* Email & Mobile Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {/* Email */}
                <div>
                  <label
                    htmlFor="brochure-email"
                    className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5"
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
                    className="w-full rounded-xl border border-border px-3.5 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold text-foreground"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label
                    htmlFor="brochure-mobile"
                    className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5"
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
                    className="w-full rounded-xl border border-border px-3.5 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold text-foreground"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="brochure-company"
                  className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5"
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
                  className="w-full rounded-xl border border-border px-3.5 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold text-foreground"
                />
              </div>

              {/* Product Selection Field - Placed After Company Name with Upward Opening Custom Dropdown */}
              <div>
                <label
                  htmlFor="brochure-product"
                  className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5"
                >
                  Select Product / Machine Brochure *
                </label>
                <SelectionDropdown
                  id="brochure-product"
                  value={formData.productName}
                  onChange={handleProductChange}
                  options={PRODUCT_BROCHURE_OPTIONS}
                  placeholder="Select Product / Machine..."
                  dropUp={true}
                  className="w-full text-xs font-semibold"
                  buttonClassName="border rounded-xl px-3.5 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background text-left font-semibold"
                />
              </div>

              {/* Query */}
              <div>
                <label
                  htmlFor="brochure-query"
                  className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5"
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
                  className="w-full rounded-xl border border-border px-3.5 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold resize-none text-foreground"
                />
              </div>

              {/* Disclaimer */}
              <div className="p-2 rounded-lg bg-muted/40 border border-border/70 flex items-start gap-2 text-[10px] sm:text-[11px] text-muted-foreground">
                <ShieldCheck size={14} className="text-primary shrink-0 mt-0.5" />
                <p className="leading-tight">
                  <strong>Disclaimer:</strong> Information collected would be for our own use will not be shared with any one.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <BlobButton
                  type="submit"
                  disabled={submitting}
                  variant="primary"
                  className="!w-full !py-2.5 sm:!py-3 !text-xs !font-bold !uppercase !tracking-wider shadow-md shadow-primary/20"
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
