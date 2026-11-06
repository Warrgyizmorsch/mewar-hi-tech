"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import EnquiryModal from "@/components/ui/EnquiryModal";

interface FloatingEnquiryWidgetProps {
  defaultMachine?: string;
}

export default function FloatingEnquiryWidget({
  defaultMachine = "",
}: FloatingEnquiryWidgetProps) {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Do not render during SSR or on any admin panel routes (/admin, /admin/login, /admin/*)
  if (!mounted || pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 sm:bottom-8 right-3.5 sm:right-6 z-40 select-none print:hidden">
        <button
          onClick={() => setModalOpen(true)}
          className="group relative flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:py-3 rounded-full bg-[#0A1A3B] hover:bg-[#0D224C] text-white border-2 border-[#F5A623] shadow-[0_8px_25px_rgba(245,166,35,0.35),0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_35px_rgba(245,166,35,0.55),0_6px_16px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Quick Enquiry"
          title="Quick Enquiry"
        >
          <Send size={17} className="text-[#F5A623] group-hover:translate-x-0.5 transition-transform" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
            Quick Enquiry
          </span>
        </button>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultEnquiryType="Product"
        defaultMachine={defaultMachine}
      />
    </>
  );
}
