"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Layers, 
  Building2, 
  Calendar, 
  Share2, 
  ChevronRight, 
  Check 
} from "lucide-react";
import Container from "@/components/ui/Container";
import { CaseStudy } from "@/data/case-studies-data";

interface CaseStudyHeroProps {
  study: CaseStudy;
}

// Helper to format breadcrumb items to Title Case with acronym preservation (e.g. "200 TPH Sand Manufacturing Plant")
function formatBreadcrumbText(str?: string): string {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => {
      if (/^(tph|vsi|iso|ce|m-sand|is)$/i.test(word)) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export default function CaseStudyHero({ study }: CaseStudyHeroProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: study.title,
          text: study.subtitle || study.description,
          url,
        });
      } catch {
        // User cancelled or share failed
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative w-full mt-10 md:mt-0 pt-12 pb-0 md:pt-24 md:pb-12 bg-[#071120] text-white overflow-hidden select-none">
      {/* ─── DESKTOP HERO BACKGROUND (Visible on md and up) ─── */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={study.image}
          alt={study.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center"
        />
        {/* Cinematic Gradient Overlays: Deep Navy on left, fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/95 via-45% to-[#071120]/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-black/40 z-10" />
      </div>

      {/* ─── MOBILE HERO BACKGROUND (Visible under md) ─── */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src={study.image}
          alt={study.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        {/* Mobile Gradient Overlays: Deep Navy at top for text readability, clear in middle for machine, soft gradient at bottom behind card */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071120] via-[#071120]/80 via-40% to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#071120] to-transparent z-10" />
      </div>

      <Container className="relative z-20">
        {/* ─── DESKTOP VIEW (md and up) ─── */}
        <div className="hidden md:flex flex-col justify-between min-h-[460px] lg:min-h-[500px]">
          {/* Top Row: Breadcrumbs & Share Button */}
          <div className="flex items-center justify-between gap-4 pt-1 pb-6">
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs sm:text-[13px] text-gray-300 font-sans">
              <Link href="/" className="hover:text-white transition-colors border-b-2 border-primary pb-0.5">
                Home
              </Link>
              <ChevronRight size={12} strokeWidth={2.5} className="text-gray-400 shrink-0" />
              <Link href="/case-studies" className="hover:text-white transition-colors">
                Case Studies
              </Link>
              <ChevronRight size={12} strokeWidth={2.5} className="text-gray-400 shrink-0" />
              <Link href="/case-studies" className="hover:text-white transition-colors">
                {formatBreadcrumbText(study.category)}
              </Link>
              <ChevronRight size={12} strokeWidth={2.5} className="text-gray-400 shrink-0" />
              <span className="text-white font-semibold truncate max-w-[280px] lg:max-w-none">
                {formatBreadcrumbText(study.title)}
              </span>
            </nav>

            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold backdrop-blur-md transition active:scale-95 shrink-0"
              aria-label="Share case study"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={14} className="text-primary" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

          {/* Main Hero Content */}
          <div className="py-8 max-w-2xl space-y-4">
            {/* Category Pill Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="bg-primary text-primary-foreground font-heading font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                {study.category}
              </span>
              {study.type && (
                <span className="bg-white/10 text-white/90 border border-white/15 font-heading font-semibold text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                  {study.type}
                </span>
              )}
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white uppercase tracking-tight leading-[1.15]">
              {study.title}
            </h1>

            {/* Lead Description */}
            <p className="text-sm lg:text-base text-gray-300 font-sans leading-relaxed max-w-2xl font-normal pt-1">
              {study.subtitle || study.description}
            </p>
          </div>

          {/* Bottom Meta Spec Strip */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                <MapPin size={20} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block">
                  Location
                </span>
                <p className="text-xs sm:text-sm font-bold text-white truncate tracking-wide font-sans">
                  {study.location}
                </p>
              </div>
            </div>

            {/* Capacity */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                <Layers size={20} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block">
                  Capacity
                </span>
                <p className="text-xs sm:text-sm font-bold text-white truncate tracking-wide font-sans">
                  {study.capacity || "Custom TPH"}
                </p>
              </div>
            </div>

            {/* Client */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                <Building2 size={20} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block">
                  Client
                </span>
                <p className="text-xs sm:text-sm font-bold text-white truncate tracking-wide font-sans">
                  {study.client || "Industrial Client"}
                </p>
              </div>
            </div>

            {/* Year */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                <Calendar size={20} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block">
                  Year
                </span>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide font-sans">
                  {study.year || "2024"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MOBILE VIEW (Exact 1:1 match with reference design) ─── */}
        <div className="md:hidden flex flex-col justify-between min-h-[580px] sm:min-h-[640px] pt-1 pb-2">
          {/* Top Section: Breadcrumb, Category Badge, Title, Description */}
          <div className="space-y-3.5">
            {/* Breadcrumb Row */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center flex-wrap gap-1.5 text-xs text-gray-300 font-sans leading-normal"
            >
              <Link
                href="/"
                className="hover:text-white transition-colors border-b-2 border-primary pb-0.5"
              >
                Home
              </Link>
              <ChevronRight
                size={11}
                strokeWidth={2.5}
                className="text-gray-400 shrink-0"
              />
              <Link
                href="/case-studies"
                className="hover:text-white transition-colors"
              >
                Case Studies
              </Link>
              <ChevronRight
                size={11}
                strokeWidth={2.5}
                className="text-gray-400 shrink-0"
              />
              <span className="text-white font-semibold">
                {formatBreadcrumbText(study.title)}
              </span>
            </nav>

            {/* Category Pill Tag */}
            <div className="pt-2">
              <span className="inline-block bg-[#F4B400] text-[#0A1A3B] font-heading font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-sm">
                {study.category}
              </span>
            </div>

            {/* Title / H1 */}
            <h1 className="text-[26px] sm:text-3xl font-extrabold font-heading text-white uppercase tracking-tight leading-[1.12]">
              {study.title}
            </h1>

            {/* Lead Description */}
            <p className="text-xs sm:text-[13px] text-gray-200 font-sans leading-relaxed max-w-sm font-normal">
              {study.subtitle || study.description}
            </p>
          </div>

          {/* Middle Spacer to frame the plant machinery photo */}
          <div className="min-h-[140px] sm:min-h-[180px] pointer-events-none" />

          {/* Bottom 2x2 Meta Specs Card */}
          <div className="w-full max-w-md mx-auto bg-[#0B1728]/95 backdrop-blur-md rounded-2xl border border-white/10 p-4 sm:p-5 shadow-2xl">
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {/* Location */}
              <div className="flex items-start gap-2.5">
                <div className="text-[#F4B400] shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-[#F4B400] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C7.589 2 4 5.589 4 10c0 5.25 7.23 11.455 7.538 11.719a.75.75 0 00.924 0C12.77 21.455 20 15.25 20 10c0-4.411-3.589-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-gray-300 font-medium block">
                    Location
                  </span>
                  <p className="text-xs sm:text-[13px] font-bold text-white mt-0.5 truncate font-sans">
                    {study.location}
                  </p>
                </div>
              </div>

              {/* Capacity */}
              <div className="flex items-start gap-2.5">
                <div className="text-[#F4B400] shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-[#F4B400] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="14" width="3.5" height="7" rx="1.5" />
                    <rect x="10" y="8" width="3.5" height="13" rx="1.5" />
                    <rect x="17" y="3" width="3.5" height="18" rx="1.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-gray-300 font-medium block">
                    Capacity
                  </span>
                  <p className="text-xs sm:text-[13px] font-bold text-white mt-0.5 truncate font-sans">
                    {study.capacity || "200 TPH"}
                  </p>
                </div>
              </div>

              {/* Client */}
              <div className="flex items-start gap-2.5">
                <div className="text-[#F4B400] shrink-0 mt-0.5">
                  <Building2 size={20} className="stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-gray-300 font-medium block">
                    Client
                  </span>
                  <p className="text-xs sm:text-[13px] font-bold text-white mt-0.5 leading-snug font-sans">
                    {study.client || "Marwar Aggregates & Industries"}
                  </p>
                </div>
              </div>

              {/* Year */}
              <div className="flex items-start gap-2.5">
                <div className="text-[#F4B400] shrink-0 mt-0.5">
                  <Calendar size={20} className="stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-gray-300 font-medium block">
                    Year
                  </span>
                  <p className="text-xs sm:text-[13px] font-bold text-white mt-0.5 font-sans">
                    {study.year || "2023"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
