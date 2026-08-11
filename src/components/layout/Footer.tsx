"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ui/ThemeContext";
import { toast } from "react-toastify";

/* ─── Footer Column Data ─── */
const footerColumns = [
  {
    title: "COMPANY INFO",
    links: [
      { label: "Home", to: "/" },
      { label: "About Mewar Hitech", to: "/about" },
      { label: "Events", to: "/events" },
      { label: "Career", to: "/careers" },
      { label: "Contact", to: "/contact" },
      { label: "Blog", to: "/blogs" },
      { label: "Privacy Policy", to: "/privacy-policy" },
    ],
  },
  {
    title: "OUR PRODUCT",
    links: [
      { label: "Double Toggle Oil Jaw Crusher", to: "/products/double-toggle-oil-jaw-crusher" },
      { label: "Single Toggle Grease Jaw Crusher", to: "/products/single-toggle-grease-jaw-crusher" },
      { label: "Double Toggle Grease Jaw Crusher", to: "/products/double-toggle-grease-jaw-crusher" },
      { label: "Cone Crusher", to: "/products/cone-crusher" },
      { label: "Roll Crusher", to: "/products/roll-crusher" },
      { label: "Horizontal Shaft Impactor", to: "/products/horizontal-shaft-impactor" },
      { label: "Vertical Shaft Impactor", to: "/products/vertical-shaft-impactor" },
      { label: "Sand Making Machine", to: "/products/sand-making-machine" },
      { label: "Vibrating Screen", to: "/products/vibrating-screen" },
      { label: "Vibro Feeder", to: "/products/vibro-feeder" },
      { label: "Single Shaft Feeders", to: "/products/single-shaft-feeders" },
      { label: "Sand Washer", to: "/products/sand-washer" },
      { label: "Belt Conveyor", to: "/products/belt-conveyor" },
    ],
  },
  {
    title: "SUPPORT & SERVICES",
    links: [
      { label: "Parts & Services", to: "/services/spare-parts" },
      { label: "Technical Support", to: "/services/after-sales" },
      { label: "Field Erection", to: "/services/erection-commissioning" },
      { label: "Service Network", to: "/services" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "APPLICATIONS",
    links: [
      { label: "Quarrying", to: "/industries" },
      { label: "Mining", to: "/industries" },
      { label: "Recycling", to: "/industries" },
      { label: "Road & Infra", to: "/industries" },
      { label: "View all Applications", to: "/industries" },
    ],
  },
];

/* ─── Inline SVG Social Icons ─── */
const SocialLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const SocialFacebook = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const SocialYouTube = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  { Icon: SocialLinkedIn, label: "LinkedIn" },
  { Icon: SocialYouTube, label: "YouTube" },
  { Icon: SocialFacebook, label: "Facebook" },
  { Icon: SocialInstagram, label: "Instagram" },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { theme } = useTheme();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || "Failed to subscribe");
      }

      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error: any) {
      toast.error(error.message || "Failed to subscribe. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground select-none">
      
      {/* Upper Footer */}
      <div className="max-w-[1720px] mx-auto px-6 lg:px-8 py-12 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between items-start gap-8 text-left">
        
        {/* Column 1: Logo, Brand & Contact Info */}
        <div className="w-full sm:w-[45%] lg:w-[220px] space-y-5 shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-full h-[64px] rounded flex items-center justify-center shrink-0 overflow-hidden ${theme === "dark" ? "" : "bg-white border border-border shadow-sm"}`}>
              <img
                src={theme === "dark" ? "/logos/logo-dark.png" : "/logos/logo.png"}
                alt="Mewar Hi-Tech Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          <div className="space-y-4">
            <p className="text-secondary-foreground/60 text-xs leading-relaxed">
              Engineered to perform.
              <br />
              Built to crush. Made to last.
            </p>

            <div className="text-secondary-foreground/60 text-xs leading-relaxed space-y-2">
              <p className="font-bold text-secondary-foreground">Contact Info</p>
              <p>Mewar Hitech Engineering LTD.</p>
              <p>Hawa Magri Industrial Area, Sukher, Udaipur</p>
              <p>Contact No. 9001113333</p>
              <p>Email Add. <a href="mailto:sales@kingsoncrusher.com" className="hover:text-primary transition-colors">sales@kingsoncrusher.com</a></p>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-2.5 pt-2">
            {socialLinks.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-7 h-7 rounded border border-secondary-foreground/10 bg-white/5 flex items-center justify-center text-secondary-foreground/75 hover:text-primary hover:border-primary transition-all duration-200"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Columns 2 to 5: Link Columns */}
        {footerColumns.map((col) => (
          <div key={col.title} className="w-auto space-y-3 shrink-0">
            <h4 className="font-sans font-bold text-[10px] uppercase tracking-wider text-secondary-foreground">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 6: Newsletter Subscribe */}
        <div className="w-full sm:w-[45%] lg:w-auto lg:max-w-[260px] space-y-3 shrink-0">
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-wider text-secondary-foreground">
            NEWSLETTER
          </h4>
          <p className="text-secondary-foreground/60 text-xs leading-relaxed">
            Stay updated with the latest news, products, and solutions.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-0 mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={submitting}
              className="flex-1 px-4 py-2 text-xs bg-white/5 border border-secondary-foreground/10 rounded-l text-secondary-foreground placeholder:text-secondary-foreground/30 outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-r transition-colors flex items-center justify-center shrink-0 disabled:opacity-50"
              aria-label="Subscribe"
            >
              {submitting ? (
                <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin block"></span>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar Divider */}
      <div className="border-t border-secondary-foreground/5">
        <div className="max-w-[1720px] mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-secondary-foreground/50">
          
          {/* Copyright & Sub Links */}
          <div className="flex flex-wrap gap-3 md:gap-5 items-center justify-center md:justify-start">
            <p>Copyright &copy; {new Date().getFullYear()} Mewar Hi-Tech. All rights reserved.</p>
            <span className="text-secondary-foreground/20">|</span>
            <Link href="/privacy-policy" className="hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="text-secondary-foreground/20">|</span>
            <Link href="/terms-of-use" className="hover:text-secondary-foreground transition-colors">
              Terms of Use
            </Link>
            <span className="text-secondary-foreground/20">|</span>
            <Link href="/cookie-policy" className="hover:text-secondary-foreground transition-colors">
              Cookie Settings
            </Link>
          </div>

          {/* Designed Motto & Accent Line */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-secondary-foreground/60 tracking-wider uppercase text-[10px]">
              DESIGNED FOR PERFORMANCE. BUILT TO LAST.
            </span>
            <div className="w-12 h-[2px] bg-primary rounded-full hidden md:block"></div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;