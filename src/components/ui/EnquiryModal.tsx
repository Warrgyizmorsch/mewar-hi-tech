"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ShieldCheck } from "lucide-react";
import { toast } from "react-toastify";
import BlobButton from "@/components/ui/BlobButton";

export type EnquiryTypeOption = "Product" | "SparePart" | "Both";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEnquiryType?: EnquiryTypeOption;
  defaultMachine?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultEnquiryType = "Product",
}: EnquiryModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [enquiryType, setEnquiryType] = useState<EnquiryTypeOption>(defaultEnquiryType);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    message: "",
  });

  useEffect(() => {
    if (defaultEnquiryType) {
      setEnquiryType(defaultEnquiryType);
    }
  }, [defaultEnquiryType, isOpen]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || undefined,
          address: formData.address || undefined,
          message: formData.message,
          type: enquiryType,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit enquiry");
      }

      toast.success("Thank you for contacting Mewar Hi-Tech. Our sales team will respond shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        message: "",
      });
      onClose();
    } catch (err: any) {
      toast.error(err.message || "Failed to submit enquiry. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-xl max-h-[96vh] rounded-2xl bg-card border border-border shadow-2xl text-foreground p-4 sm:p-5 sm:px-6 z-10 my-auto overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="text-left space-y-0.5 pr-8">
              <h3 className="common-heading text-[#F5A623] text-lg sm:text-xl font-black text-foreground uppercase tracking-tight">
                REQUEST PRICE QUOTE
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground font-medium leading-tight">
                Connect directly with Mewar Hi-Tech engineers for quick pricing, brochures, and technical feasibility.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 mt-3 text-left">
              {/* Radio Button Selector for Enquiry Type */}
              <div className="space-y-1">
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  I AM ENQUIRING FOR *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border cursor-pointer transition text-xs font-bold ${
                      enquiryType === "Product"
                        ? "border-primary bg-primary/15 text-primary shadow-xs"
                        : "border-border bg-muted/40 text-foreground hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="modalEnquiryType"
                      value="Product"
                      checked={enquiryType === "Product"}
                      onChange={() => setEnquiryType("Product")}
                      className="w-3.5 h-3.5 accent-[#F5A623] cursor-pointer"
                    />
                    <span className="text-[11px] sm:text-xs">Enquiry for Product</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border cursor-pointer transition text-xs font-bold ${
                      enquiryType === "SparePart"
                        ? "border-primary bg-primary/15 text-primary shadow-xs"
                        : "border-border bg-muted/40 text-foreground hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="modalEnquiryType"
                      value="SparePart"
                      checked={enquiryType === "SparePart"}
                      onChange={() => setEnquiryType("SparePart")}
                      className="w-3.5 h-3.5 accent-[#F5A623] cursor-pointer"
                    />
                    <span className="text-[11px] sm:text-xs">Enquiry for Spare Parts</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border cursor-pointer transition text-xs font-bold ${
                      enquiryType === "Both"
                        ? "border-primary bg-primary/15 text-primary shadow-xs"
                        : "border-border bg-muted/40 text-foreground hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="modalEnquiryType"
                      value="Both"
                      checked={enquiryType === "Both"}
                      onChange={() => setEnquiryType("Both")}
                      className="w-3.5 h-3.5 accent-[#F5A623] cursor-pointer"
                    />
                    <span className="text-[11px] sm:text-xs">Both (Product &amp; Parts)</span>
                  </label>
                </div>
              </div>

              {/* Your Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border px-3 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border px-3 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold text-foreground"
                  />
                </div>
              </div>

              {/* Phone No & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                    PHONE NO *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border px-3 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border px-3 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold text-foreground"
                  />
                </div>
              </div>

              {/* Delivery / Plant Address */}
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                  DELIVERY / PLANT ADDRESS
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-3 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold text-foreground"
                />
              </div>

              {/* Requirement Details / Message */}
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                  REQUIREMENT DETAILS / MESSAGE *
                </label>
                <textarea
                  name="message"
                  rows={2}
                  required
                  placeholder="Enter your requirement details or message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-3 py-1.5 sm:py-2 text-xs bg-muted/40 focus:bg-background focus:outline-none focus:border-primary transition font-semibold resize-none text-foreground"
                />
              </div>

              {/* Disclaimer Note */}
              <div className="p-2 sm:p-2.5 rounded-lg bg-muted/40 border border-border/70 flex items-center gap-2 text-[10px] sm:text-[11px] text-muted-foreground">
                <ShieldCheck size={15} className="text-primary shrink-0" />
                <p className="leading-tight">
                  <strong>Disclaimer:</strong> Information collected will be used strictly for responding to your inquiry and will not be shared with any third party.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <BlobButton
                  type="submit"
                  disabled={submitting}
                  variant="primary"
                  className="!w-full !py-2.5 sm:!py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-primary/20"
                >
                  <Send size={14} />
                  <span>{submitting ? "Sending..." : "Send Enquiry"}</span>
                </BlobButton>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
