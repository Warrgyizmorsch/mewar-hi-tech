"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Search, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlobButton from "@/components/ui/BlobButton";
import { useTheme } from "@/components/ui/ThemeContext";
import BrochureModal from "@/components/ui/BrochureModal";

/* ─── Navigation Data ─── */
type NavItemChild = {
  label: string;
  to?: string;
  heading?: boolean;
  children?: NavItemChild[];
};

type NavItem = {
  label: string;
  to?: string;
  children?: NavItemChild[];
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: [
      { label: "Our Case Studies", to: "/case-studies"},
      { label: "About Mewar Hitech", to: "/about" },
      { label: "Events", to: "/events" },
      { label: "Career", to: "/careers" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "Crusher", heading: true,
        children: [
          { label: "Double Toggle Oil Jaw Crusher", to: "/products/double-toggle-oil-jaw-crusher" },
          { label: "Single Toggle Grease Jaw Crusher", to: "/products/single-toggle-grease-jaw-crusher" },
          { label: "Double Toggle Grease Jaw Crusher", to: "/products/double-toggle-grease-jaw-crusher" },
          { label: "Cone Crusher", to: "/products/cone-crusher" },
          { label: "Roll Crusher", to: "/products/roll-crusher" },
        ]
      },
      { label: "Impactor", heading: true,
        children: [
          { label: "Horizontal Shaft Impactor", to: "/products/horizontal-shaft-impactor" },
          { label: "Vertical Shaft Impactor", to: "/products/vertical-shaft-impactor" },
          { label: "Sand Making Machine", to: "/products/sand-making-machine" },
        ]
      },
      { label: "Screen", heading: true,
        children: [
          { label: "Vibrating Screen", to: "/products/vibrating-screen" },
          { label: "Sand Washer", to: "/products/sand-washer" },
          { label: "Belt Conveyor", to: "/products/belt-conveyor" },
        ]
      },
      { label: "Feeder", heading: true,
        children: [
          { label: "Vibro Feeder", to: "/products/vibro-feeder" },
          { label: "Single Shaft Feeders", to: "/products/single-shaft-feeders" },
        ]
      },
    ],
  },
  {
    label: "Projects",
    children: [
      { label: "Stationery Projects", to: "/projects/stationery-projects" },
      { label: "Mobile Plants", heading: true },
      { label: "Track Mounted", to: "/projects/track-mounted-mobile-projects" },
      { label: "Wheel Mounted", to: "/projects/wheel-mounted-mobile-projects" },
    ],
  },
  {
    label: "Infrastructure",
    children: [
      { label: "Manufacturing", to: "/infrastructure/manufacturing" },
      { label: "Casting", to: "/infrastructure/casting" },
      { label: "Latest Process Machinery", to: "/infrastructure/latest-process-machinery" },
      { label: "R & D and Design", to: "/infrastructure/r-d-design" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "After Sales", to: "/services/after-sales" },
      { label: "Spare Parts", to: "/services/spare-parts" },
      { label: "Erection & Commissioning", to: "/services/erection-commissioning" },
    ],
  },
  { label: "Investors", to: "/investors" },
  { label: "Blog", to: "/blogs" },
  { label: "Contact", to: "/contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleOpenBrochure = () => {
      setIsBrochureOpen(true);
    };
    window.addEventListener("open-brochure-modal", handleOpenBrochure);
    return () => window.removeEventListener("open-brochure-modal", handleOpenBrochure);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      setScrolled(currentScrollY > 24);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 800);

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const themes: Array<{ key: "light" | "dark"; color: string; label: string }> = [
    { key: "light", color: "bg-white border border-gray-300", label: "Light" },
    { key: "dark", color: "bg-gray-800", label: "Dark" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 select-none transition-transform duration-500 ease-in-out ${
          visible || open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Main nav bar */}
        <div
        className={`w-full px-6 lg:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
          theme === "light"
            ? "bg-white border-b border-gray-200 shadow-sm"
            : "bg-secondary border-b border-border shadow-md"
        }`}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Mewar Hi-Tech home"
        >
          <div className="w-[100px] rounded flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src={theme === "dark" ? "/logos/logo-dark.png" : "/logos/logo.png"}
              alt="Mewar Hi-Tech Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-0.7"
          aria-label="Primary navigation"
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group py-2">
                <button
                  type="button"
                  className={`relative text-[13px] font-semibold tracking-wide flex items-center gap-1 px-3 py-1.5 transition-colors duration-200 group-hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                    theme === "light" 
                      ? "text-gray-800" 
                      : "text-secondary-foreground/80"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={13} className="opacity-60 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {item.label === "Products" ? (
                  /* Horizontal Mega Menu Dropdown for Products */
                  <div
                    className="absolute top-[calc(100%+14px)] left-[-200px] mt-0 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent shadow-2xl rounded-none opacity-0 invisible -translate-y-2 origin-top group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 p-8 w-[950px] max-w-[calc(100vw-48px)] bg-primary text-white"
                  >
                    <div className="grid grid-cols-4 gap-0 divide-x divide-white/20">
                      {item.children.map((group) => (
                        <div key={group.label} className="flex flex-col gap-4 px-6 first:pl-0 last:pr-0">
                          <h4 className="text-[14px] font-bold uppercase tracking-wider text-black/80">
                            {group.label}
                          </h4>
                          <div className="flex flex-col gap-2.5">
                            {group.children?.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.to ?? "/products"}
                                className="block text-[13px] font-medium text-black/80 hover:text-black hover:translate-x-1.5 transition-all duration-400"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Standard Vertical Dropdown for others */
                  <div
                    className="absolute top-[calc(100%+14px)] left-0 mt-0 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent shadow-xl rounded-none opacity-0 invisible -translate-y-2 origin-top group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 p-5 min-w-[240px] bg-primary text-white"
                  >
                    <div className="flex flex-col gap-3">
                      {item.children.map((child) => (
                        child.heading ? (
                          <h4
                            key={child.label}
                            className="text-[12px] font-bold uppercase tracking-wider mt-3 mb-1 border-t border-black/10 pt-4 first:mt-0 first:border-0 first:pt-0 text-black/80"
                          >
                            {child.label}
                          </h4>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.to ?? "/"}
                            className="block text-[14px] font-medium text-black/80 hover:text-black hover:translate-x-1.5 transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : item.label === "Brochure" ? (
              <button
                key={item.label}
                type="button"
                onClick={() => setIsBrochureOpen(true)}
                className={`relative text-[13px] font-semibold tracking-wide px-3 py-1.5 transition-colors duration-200 hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                  theme === "light" ? "text-gray-800" : "text-secondary-foreground/80"
                }`}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.to ?? "/"}
                className={`relative text-[13px] font-semibold tracking-wide flex items-center px-3 py-1.5 transition-colors duration-200 hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                  theme === "light" 
                    ? "text-gray-800" 
                    : "text-secondary-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side: Icons + Theme + CTA */}
        <div className="flex items-center gap-1">
          {/* Theme toggle pills */}
          <div className="hidden lg:flex items-center gap-1.5 mr-1">
            {themes.map((t) => (
              <button
                key={t.key}
                onClick={() => setTheme(t.key)}
                className={`w-5 h-5 rounded-full transition-all duration-200 ${t.color} ${
                  theme === t.key
                    ? "ring-2 ring-primary ring-offset-1 ring-offset-secondary scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Switch to ${t.label} theme`}
                title={t.label}
              />
            ))}
          </div>

          {/* Brochure CTA */}
          <div className="hidden lg:block">
            <BlobButton
              variant="primary"
              onClick={() => setIsBrochureOpen(true)}
              className="!py-2.5 !px-5 ml-1 !text-[11px] !font-bold"
            >
              Brochure
            </BlobButton>
          </div>

          {/* Mobile menu trigger */}
          <button
            className={`xl:hidden p-2 rounded-lg transition-colors ${
              theme === "light" 
                ? "text-gray-800 hover:bg-black/5" 
                : "text-secondary-foreground hover:bg-white/5"
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Slide-out Drawer */}
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`absolute top-0 right-0 w-[300px] sm:w-[340px] h-full shadow-2xl flex flex-col justify-between ${
              theme === "light" ? "bg-white text-gray-900" : "bg-secondary text-secondary-foreground"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className={`p-4 flex items-center justify-between border-b ${
              theme === "light" ? "border-gray-150" : "border-border/20"
            }`}>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="w-28 h-8 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={theme === "dark" ? "/logos/logo-dark.png" : "/logos/logo.png"}
                    alt="Mewar Hi-Tech Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation links inside drawer */}
            <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
              {navItems.map((item) => {
                const isExpanded = expandedSubmenu === item.label;

                return (
                  <div key={item.label} className="rounded-lg overflow-hidden">
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedSubmenu(isExpanded ? null : item.label)
                          }
                          className={`w-full px-4 py-3 flex items-center justify-between text-sm font-bold uppercase tracking-wider transition-colors ${
                            theme === "light"
                              ? "text-gray-800 hover:text-primary"
                              : "text-secondary-foreground hover:text-primary"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            size={16}
                            className={`transition-transform duration-200 ${
                              isExpanded ? "rotate-90 text-primary" : "text-muted-foreground"
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="overflow-hidden bg-black/[0.03]"
                            >
                              <div className="py-2 pl-4 flex flex-col gap-1">
                                {item.children!.map((child) => (
                                  child.children ? (
                                    <div key={child.label} className="mt-2 mb-1">
                                      <div className={`px-4 py-1 text-xs font-bold uppercase tracking-wider ${
                                        theme === "light" ? "text-gray-900" : "text-secondary-foreground"
                                      }`}>
                                        {child.label}
                                      </div>
                                      <div className="pl-2 flex flex-col gap-0.5">
                                        {child.children.map((sub) => (
                                          <Link
                                            key={sub.label}
                                            href={sub.to ?? "/products"}
                                            onClick={() => setOpen(false)}
                                            className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors block ${
                                              theme === "light"
                                                ? "text-gray-600 hover:text-primary"
                                                : "text-secondary-foreground/70 hover:text-primary"
                                            }`}
                                          >
                                            {sub.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ) : (
                                  child.heading ? (
                                    <div
                                      key={child.label}
                                      className={`px-4 py-2 mt-2 text-xs font-bold uppercase tracking-wider ${
                                        theme === "light" ? "text-gray-900 border-t border-gray-100 pt-3" : "text-gray-200 border-t border-white/5 pt-3"
                                      }`}
                                    >
                                      {child.label}
                                    </div>
                                  ) : (
                                    <Link
                                      key={child.label}
                                      href={child.to ?? "/"}
                                      onClick={() => setOpen(false)}
                                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors block ${
                                        theme === "light"
                                          ? "text-gray-600 hover:text-primary"
                                          : "text-secondary-foreground/70 hover:text-primary"
                                      }`}
                                    >
                                      {child.label}
                                    </Link>
                                  )
                                  )
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : item.label === "Brochure" ? (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          setIsBrochureOpen(true);
                        }}
                        className={`w-full px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors text-left block ${
                          theme === "light"
                            ? "text-gray-800 hover:text-primary"
                            : "text-secondary-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.to ?? "/"}
                        onClick={() => setOpen(false)}
                        className={`px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors block ${
                          theme === "light"
                            ? "text-gray-800 hover:text-primary"
                            : "text-secondary-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Drawer footer CTA */}
            <div className={`p-4 border-t ${
              theme === "light" ? "border-gray-150" : "border-border/20"
            }`}>
              <BlobButton
                variant="primary"
                onClick={() => {
                  setOpen(false);
                  setIsBrochureOpen(true);
                }}
                className="!w-full !py-3 !text-xs !font-bold"
              >
                Brochure
              </BlobButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Brochure Download Popup Modal */}
    <BrochureModal
      isOpen={isBrochureOpen}
      onClose={() => setIsBrochureOpen(false)}
    />
  </>
  );
};

export default Header;
