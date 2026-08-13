"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Building2,
  Users,
  ShieldCheck,
  Calendar,
  Briefcase,
  ChevronRight,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  Award,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";

// ─── Left Sidebar Menu Data ───
const INVESTOR_MENU = [
  { label: "Corporate Governance", slug: "corporate-governance", icon: ShieldCheck },
  { label: "Shareholding Pattern", slug: "shareholding-pattern", icon: Users },
  { label: "Shareholders Meetings", slug: "shareholders-meetings", icon: Calendar },
  { label: "Board Meeting", slug: "board-meeting", icon: Briefcase },
  { label: "Financial Results", slug: "financial-results", icon: TrendingUp },
  { label: "Annual Reports", slug: "annual-reports", icon: FileText },
  { label: "Annual Returns", slug: "annual-returns", icon: FileText },
  { label: "Shareholder Information", slug: "shareholder-information", icon: Building2 },
  { label: "Investor Contacts", slug: "investor-contacts", icon: Phone },
  { label: "Disclosure (Reg 46 of LODR)", slug: "disclosure-regulation-46", icon: FileText },
];

// ─── Slugs Data List matching user screenshots exactly ───

const CORPORATE_GOVERNANCE_DATA: any[] = [
  { title: "Composition of Board of Directors and Committees", hasLink: true },
  { title: "Memorandum and Articles of Association", hasLink: true },
  { title: "Policies and Codes", hasLink: true },
];

const SHAREHOLDING_DATA: any[] = [
  { quarter: "Shareholding Pattern 30.09.2024" },
  { quarter: "Shareholding Pattern 31.03.2024" },
  { quarter: "Shareholding Pattern 30.09.2023" },
  { quarter: "Shareholding Pattern 31.03.2023" },
  { quarter: "Shareholding Pattern 30.09.2022" },
  { quarter: "Shareholding Pattern 31.03.2022" },
];

const SHAREHOLDERS_MEETINGS_DATA: any[] = [
  { title: "Notice of 19th Annual General Meeting 2024-25" },
  { title: "Notice of 18th AGM for the year 2023-24" },
  { title: "Outcome of 18th AGM for the year 2023-24" },
  { title: "Notice of 17th Annual General Meeting" },
  { title: "Outcome of 17th AGM for the year 2022-23" },
  { title: "Notice of 16th Annual General Meeting" },
  { title: "Outcome of 16th AGM for the year 2021-22" },
  { title: "Notice of 15th Annual General Meeting" },
  { title: "Outcome of 15th AGM for the year 2020-21" },
  { title: "Notice of 14th Annual General Meeting" },
  { title: "Outcome of 14th AGM for the year 2019-20" },
  { title: "Notice of 13th Annual General Meeting" },
  { title: "Outcome of 13th AGM for the year 2018-19" },
  { title: "Notice of 12th Annual General Meeting" },
  { title: "Outcome of 12th AGM for the year 2017-18" },
  { title: "Notice of Extra Ordinary General Meeting to be held on 20.08.2018" },
  { title: "Outcome of Extra Ordinary General Meeting held on 20.08.2018" },
  { title: "Notice of 11th Annual General Meeting" },
  { title: "Outcome of 11th AGM for the year 2016-17" },
];

const BOARD_MEETINGS_DATA: any[] = [
  { title: "Outcome of Board Meeting held on 14.11.2024" },
  { title: "Intimation of Board Meeting to be held on 14.11.2024" },
  { title: "Outcome of Board Meeting held on 23.10.2024" },
  { title: "Intimation of Board Meeting to be held on 23.10.2024" },
  { title: "Outcome of Board Meeting held on 13.08.2024" },
  { title: "Intimation of Board Meeting to be held on 13.08.2024" },
  { title: "Outcome of Board Meeting held on 28.05.2024" },
  { title: "Outcome of Board Meeting held on 13.02.2024" },
  { title: "Intimation of Board Meeting to be held on 13.02.2024" },
];

const FINANCIAL_RESULTS_DATA: any[] = [
  { title: "Unaudited Financial Results as on 30.09.2024" },
  { title: "Audited Financial Results for 31.03.2024" },
  { title: "Audited Financial Results for 31.03.2023" },
  { title: "Revised Cash Flow Statement for 31.03.2023" },
  { title: "Unaudited Financial Results as on 30.09.2023" },
  { title: "Audited Financial Results for 31.03.2022" },
  { title: "Unaudited Financial Results as on 30.09.2022" },
  { title: "Audited Financial Results for 31.03.2021" },
  { title: "Revised Cash Flow Statement along with Unaudited Financial Results for the half year ended on 30.09.2021" },
  { title: "Unaudited Financial Results as on 30.09.2021" },
  { title: "Audited Financial Results for 31.08.2020" },
  { title: "Revised Cash Flow statement for the year ended on 31.03.2020" },
  { title: "Unaudited Financial Results as on 30.09.2020" },
  { title: "Audited Financial Results for 31.03.2019" },
  { title: "Unaudited Financial Results as on 30.09.2019" },
  { title: "Audited Financial Results for 31.03.2019" },
  { title: "Unaudited Financial Results as on 30.09.2018" },
  { title: "Unaudited Financial Results as on 30.09.2017" },
  { title: "Audited Financial Results for 31.03.2017" },
  { title: "Unaudited Financial Results as on 30.09.2016" },
];

const ANNUAL_REPORTS_DATA: any[] = [
  { title: "Annual Report (2024-2025)", year: "2024-2025" },
  { title: "Annual Report (2023-2024)", year: "2023-2024" },
  { title: "Annual Report (2022-2023)", year: "2022-2023" },
  { title: "Annual Report (2021-2022)", year: "2021-2022" },
  { title: "Annual Report (2020-2021)", year: "2020-2021" },
  { title: "Annual Report (2018-2019)", year: "2018-2019" },
  { title: "Annual Report (2019-2020)", year: "2019-2020" },
  { title: "EGM Notice", year: "Notice" },
  { title: "MHT Annual Report (2016-17)", year: "2016-2017" },
  { title: "MHT Annual Report (2017-18)", year: "2017-2018" },
];

const ANNUAL_RETURNS_DATA: any[] = [
  { title: "Annual Return (2022-2023)", year: "2022-2023" },
  { title: "Annual Return (2021-2022)", year: "2021-2022" },
  { title: "Annual Return (2020-2021)", year: "2020-2021" },
  { title: "Annual Return (2019-2020)", year: "2019-2020" },
  { title: "Annual Return (2018-2019)", year: "2018-2019" },
  { title: "Annual Return (2017-2018)", year: "2017-2018" },
  { title: "Annual Return (2016-2017)", year: "2016-2017" },
];

const REGULATION_46_DATA: any[] = [
  { id: 1, text: "Details of business", status: "Available", link: "/about" },
  { id: 2, text: "Terms and conditions of appointment of independent directors", status: "Available" },
  { id: 3, text: "Composition of various committees of board of directors", status: "Available" },
  { id: 4, text: "Code of conduct of board of directors and senior management personnel", status: "Available" },
  { id: 5, text: "Details of establishment of vigil mechanism/ Whistle Blower policy", status: "Available" },
  { id: 6, text: "Criteria of making payments to non-executive directors", status: "Not Applicable" },
  { id: 7, text: "Policy on dealing with related party transactions", status: "Available" },
  { id: 8, text: "Policy for determining 'material' subsidiaries", status: "Not Applicable" },
  { id: 9, text: "Familiarization Programme for Independent Directors", status: "Available" },
  { id: 10, text: "The email address for grievance redressal and other relevant details", status: "Available" },
  { id: 11, text: "Contact information of the designated officials for assisting investors", status: "Available" },
  {
    id: 12,
    text: "Financial information including Board Meeting notice, quarterly financial results, and annual reports",
    status: "Available",
  },
  { id: 13, text: "Shareholding pattern", status: "Available" },
  { id: 14, text: "Details of agreements entered into with the media companies", status: "Not Applicable" },
  { id: 15, text: "Schedule of analyst or institutional investors meet", status: "Not Applicable" },
  { id: 16, text: "New name and the old name of the listed entity", status: "Not Applicable" },
  { id: 17, text: "Items in Reg. 47(1) - Financial Results & Notices published in newspaper", status: "Available" },
  { id: 18, text: "Credit ratings", status: "Not Applicable" },
  { id: 19, text: "Audited Financial Statements of Subsidiary Companies", status: "Not Applicable" },
  { id: 20, text: "Secretarial Compliance Report under reg 24A of SEBI (LODR)", status: "Not Applicable" },
  { id: 21, text: "Policy for determining materiality of an event or information", status: "Available" },
  { id: 22, text: "Disclosure of contact details of KMP authorized to determine materiality", status: "Available" },
  { id: 23, text: "Disclosure under Reg. 30(8) of SEBI (LODR)", status: "Available" },
  { id: 24, text: "Statement of deviations or variations", status: "Not Applicable" },
  { id: 25, text: "Dividend Distribution Policy", status: "Not Applicable" },
  { id: 26, text: "Annual Return as provided under Section 92 of the Companies Act, 2013", status: "Available" },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function InvestorPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const [activeSlug, setActiveSlug] = useState(resolvedParams.slug || "corporate-governance");
  const [searchTerm, setSearchTerm] = useState("");

  const pageTitle = INVESTOR_MENU.find((item) => item.slug === activeSlug)?.label || "Corporate Governance";

  // Filter lists based on search input
  const filterList = <T extends { title?: string; text?: string; quarter?: string }>(list: T[]) => {
    return list.filter((item) => {
      const matchText = (item.title || item.text || item.quarter || "").toLowerCase();
      return matchText.includes(searchTerm.toLowerCase());
    });
  };

  const handleTabChange = (slug: string) => {
    setActiveSlug(slug);
    setSearchTerm("");
    if (typeof window !== "undefined") {
      const newUrl = `/investors?tab=${slug}`;
      window.history.replaceState({ path: newUrl }, "", newUrl);
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />

      <main>
        {/* 1. Page Hero Banner */}
        <PageHero
          label="Investors Center"
          title={pageTitle.toUpperCase()}
          description="Access Kingson's statutory filings, corporate policies, financial reports, and investor disclosures."
          image="/images/after-sales-1.jpg"
        />

        {/* 2. Top Assurances Indicators Strip */}
        <section className="section-padding-sm bg-card border-b border-border/80 relative overflow-hidden">
          <Container className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-border/60">
              <div className="flex items-center gap-3 px-4 pt-4 md:pt-0 first:pt-0">
                <ShieldCheck size={20} className="text-primary shrink-0 stroke-[2.2]" />
                <div className="text-left font-sans">
                  <span className="block text-xs font-bold uppercase text-foreground">Verified Governance</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">SEBI LODR Compliance</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 pt-4 md:pt-0">
                <Clock size={20} className="text-primary shrink-0 stroke-[2.2]" />
                <div className="text-left font-sans">
                  <span className="block text-xs font-bold uppercase text-foreground">Continuous Filing</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Quarterly &amp; Annual Filings</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 pt-4 md:pt-0">
                <Award size={20} className="text-primary shrink-0 stroke-[2.2]" />
                <div className="text-left font-sans">
                  <span className="block text-xs font-bold uppercase text-foreground">ISO Certified</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">ISO 9001:2008 Standard</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Main Content Grid */}
        <section className="section-padding bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Sidebar (Cols 1-4) */}
              <div className="lg:col-span-4 bg-card border border-border/85 rounded-xl p-5 space-y-2 shadow-xs">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block pl-3 mb-2 font-sans">
                  Investor Categories
                </span>
                <nav className="space-y-1">
                  {INVESTOR_MENU.map((menuItem) => {
                    const Icon = menuItem.icon;
                    const isActive = menuItem.slug === activeSlug;
                    return (
                      <button
                        type="button"
                        key={menuItem.slug}
                        onClick={() => handleTabChange(menuItem.slug)}
                        className={`w-full flex items-center justify-between p-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-xs translate-x-1"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={16} className="shrink-0" />
                          <span className="text-left font-sans">{menuItem.label}</span>
                        </div>
                        <ChevronRight size={14} className={isActive ? "text-primary-foreground" : "text-muted-foreground/50"} />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Right Content Panel (Cols 5-12) */}
              <div className="lg:col-span-8 space-y-6 text-left">
                
                {/* Search Bar */}
                {activeSlug !== "corporate-governance" && activeSlug !== "investor-contacts" && activeSlug !== "shareholder-information" && (
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <input
                      type="text"
                      placeholder="Search documents or filings..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full border border-border bg-card pl-11 pr-4 py-3.5 text-xs rounded-xl focus:outline-none focus:border-primary text-foreground font-semibold"
                    />
                  </div>
                )}

                {/* CORPORATE GOVERNANCE PANEL */}
                {activeSlug === "corporate-governance" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      Corporate Governance Policies
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                      Composition of Board of Directors, Articles of Association, and official corporate guidelines.
                    </p>
                    <div className="space-y-3 pt-2">
                      {CORPORATE_GOVERNANCE_DATA.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-background border border-border/60 rounded-xl hover:border-primary/45 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-primary shrink-0 stroke-[2.5]" />
                            <span className="text-xs font-bold text-foreground leading-tight">{item.title}</span>
                          </div>
                          <BlobButton href={item.link}
                            variant="secondary"
                            className="!py-2 !px-4 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap shrink-0"
                          >
                            <span className="flex items-center gap-1.5">
                              <span>Click Here</span>
                              <ExternalLink size={10} />
                            </span>
                          </BlobButton>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SHAREHOLDING PATTERN PANEL */}
                {activeSlug === "shareholding-pattern" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      Shareholding Patterns
                    </h3>
                    <div className="space-y-3">
                      {filterList(SHAREHOLDING_DATA).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-background border border-border/60 rounded-xl"
                        >
                          <span className="text-xs font-bold text-foreground">{item.quarter}</span>
                          <BlobButton href={item.link}
                            variant="secondary"
                            className="!py-2 !px-4 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap"
                          >
                            <span className="flex items-center gap-1.5">
                              <span>Click Here</span>
                              <Download size={11} />
                            </span>
                          </BlobButton>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SHAREHOLDERS MEETINGS PANEL */}
                {activeSlug === "shareholders-meetings" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      Shareholders Meetings &amp; Resolutions
                    </h3>
                    <div className="max-h-[500px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                      {filterList(SHAREHOLDERS_MEETINGS_DATA).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-background border border-border/60 rounded-xl"
                        >
                          <span className="text-xs font-bold text-foreground leading-snug">{item.title}</span>
                          <BlobButton href={item.link}
                            variant="secondary"
                            className="!py-2 !px-4 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap"
                          >
                            <span className="flex items-center gap-1.5">
                              <span>Click Here</span>
                              <ExternalLink size={11} />
                            </span>
                          </BlobButton>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* BOARD MEETINGS PANEL */}
                {activeSlug === "board-meeting" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      Board Meetings Notices &amp; Outcomes
                    </h3>
                    <div className="max-h-[500px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                      {filterList(BOARD_MEETINGS_DATA).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-background border border-border/60 rounded-xl"
                        >
                          <span className="text-xs font-bold text-foreground leading-snug">{item.title}</span>
                          <BlobButton href={item.link}
                            variant="secondary"
                            className="!py-2 !px-4 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap"
                          >
                            <span className="flex items-center gap-1.5">
                              <span>Click Here</span>
                              <ExternalLink size={11} />
                            </span>
                          </BlobButton>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FINANCIAL RESULTS PANEL */}
                {activeSlug === "financial-results" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      Financial Performance Results
                    </h3>
                    <div className="max-h-[500px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                      {filterList(FINANCIAL_RESULTS_DATA).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-background border border-border/60 rounded-xl"
                        >
                          <span className="text-xs font-bold text-foreground leading-relaxed">{item.title}</span>
                          <BlobButton href={item.link}
                            variant="secondary"
                            className="!py-2 !px-4 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap"
                          >
                            <span className="flex items-center gap-1.5">
                              <span>Click Here</span>
                              <Download size={11} />
                            </span>
                          </BlobButton>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ANNUAL REPORTS PANEL */}
                {activeSlug === "annual-reports" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      Annual Reports Directory
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filterList(ANNUAL_REPORTS_DATA).map((item, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl bg-background border border-border/60 hover:border-primary/45 transition-colors flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                              <FileText size={18} />
                            </div>
                            <div className="text-left font-sans">
                              <span className="block text-xs font-bold text-foreground leading-tight">{item.title}</span>
                              <span className="text-[9px] font-bold text-muted-foreground uppercase mt-0.5 block">{item.year} Report</span>
                            </div>
                          </div>
                          <BlobButton href={item.link}
                            variant="secondary"
                            className="!py-1.5 !px-3 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap shrink-0"
                          >
                            <span>View</span>
                          </BlobButton>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ANNUAL RETURNS PANEL */}
                {activeSlug === "annual-returns" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      Annual Returns (MGT-7) Filings
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filterList(ANNUAL_RETURNS_DATA).map((item, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl bg-background border border-border/60 hover:border-primary/45 transition-colors flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                              <FileText size={18} />
                            </div>
                            <div className="text-left font-sans">
                              <span className="block text-xs font-bold text-foreground leading-tight">{item.title}</span>
                              <span className="text-[9px] font-bold text-muted-foreground uppercase mt-0.5 block">Year: {item.year}</span>
                            </div>
                          </div>
                          <BlobButton href={item.link}
                            variant="secondary"
                            className="!py-1.5 !px-3 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap shrink-0"
                          >
                            <span>View</span>
                          </BlobButton>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SHAREHOLDER INFORMATION PANEL */}
                {activeSlug === "shareholder-information" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      Shareholder Information &amp; Scrutinizer Reports
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Section 1: Disclosure and Information */}
                      <div className="p-6 rounded-xl bg-background border border-border/60 space-y-4">
                        <h4 className="text-sm font-bold text-primary uppercase font-heading">
                          1. Disclosure and Information
                        </h4>
                        
                        {/* 2024-25 */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                            Financial Year 2024-25
                          </span>
                          <div className="space-y-2 pl-2 border-l-2 border-primary/20">
                            {[
                              { title: "Mewar Hi-Tech_Intimation under reg 30 about the resignation of ID", link: "/investors-data/shareholders_information_files/2024-25/Mewar Hi-Tech_Intimation under reg 30 about the resignation of ID.pdf" },
                              { title: "Mewar_Disclosure Under reg 30_Appointment of CS", link: "/investors-data/shareholders_information_files/2024-25/Mewar_Disclosure Under reg 30_Appointment of CS.pdf" },
                              { title: "Mewar_Disclosure Under reg 30_Appointment of Internal Auditor", link: "/investors-data/shareholders_information_files/2024-25/Mewar_Disclosure Under reg 30_Appointment of Internal Auditor.pdf" },
                            ].map((doc, idx) => (
                              <div key={idx} className="flex items-center justify-between text-xs font-bold py-1">
                                <span className="text-foreground leading-snug">{doc.title}</span>
                                <BlobButton href={doc.link} variant="secondary" className="!py-1 !px-2.5 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap shrink-0">
                                  <span>Open File</span>
                                </BlobButton>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 2023-24 */}
                        <div className="space-y-2 pt-3 border-t border-border/60">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                            Financial Year 2023-24
                          </span>
                          <div className="space-y-2 pl-2 border-l-2 border-primary/20">
                            {[
                              { title: "Mewar Hi-Tech_Intimation for ROC Extension Order_10.10.2023", link: "/investors-data/shareholders_information_files/2023-24/Mewar Hi-Tech_Intimation for ROC Extension Order_10.10.2023.pdf" },
                              { title: "Mewar_Consolidated Scrutinizer's Report along with Voting Results_17th AGM 2023", link: "/investors-data/shareholders_information_files/2023-24/Mewar_Consolidated Scrutinizer's Report along with Voting Results_17th AGM 2023.pdf" },
                              { title: "Disclosure under reg 30 of SEBI(LODR) Reg 2015", link: "/investors-data/shareholders_information_files/2023-24/Disclosure under reg 30 of SEBI(LODR) Reg 2015.pdf" },
                            ].map((doc, idx) => (
                              <div key={idx} className="flex items-center justify-between text-xs font-bold py-1">
                                <span className="text-foreground leading-snug">{doc.title}</span>
                                <BlobButton href={doc.link} variant="secondary" className="!py-1 !px-2.5 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap shrink-0">
                                  <span>Open File</span>
                                </BlobButton>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Section 2: Investor Forms */}
                      <div className="p-6 rounded-xl bg-background border border-border/60 flex items-center justify-between hover:border-primary/45 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                            <FileText size={18} />
                          </div>
                          <div className="text-left font-sans">
                            <span className="block text-xs font-bold text-foreground">2. Investors Forms</span>
                            <span className="text-[9px] font-bold text-muted-foreground uppercase mt-0.5 block">Statutory Downloads</span>
                          </div>
                        </div>
                        <BlobButton variant="secondary" className="!py-1.5 !px-3 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap">
                          <span>View Files</span>
                        </BlobButton>
                      </div>
                    </div>
                  </div>
                )}

                {/* INVESTOR CONTACTS PANEL */}
                {activeSlug === "investor-contacts" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      Investor Contacts &amp; Redressal
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-background border border-border/60 rounded-xl hover:border-primary/45 transition-colors">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-primary shrink-0 stroke-[2.5]" />
                          <span className="text-xs font-bold text-foreground leading-tight">Investor Contact &amp; Compliance Cell</span>
                        </div>
                        <BlobButton
                          href="/investors-data/investor_contact/Investor Contact.pdf"
                          variant="secondary"
                          className="!py-2 !px-4 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap"
                        >
                          <span className="flex items-center gap-1.5">
                            <span>Click Here</span>
                            <ExternalLink size={10} />
                          </span>
                        </BlobButton>
                      </div>
                    </div>
                  </div>
                )}

                {/* DISCLOSURE REGULATION 46 PANEL */}
                {activeSlug === "disclosure-regulation-46" && (
                  <div className="bg-card border border-border/80 p-8 rounded-xl space-y-6 shadow-sm">
                    <h3 className="common-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-tight">
                      SEBI LODR Regulation 46 Disclosures
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                      Complete compliance filings of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.
                    </p>
                    
                    <div className="max-h-[500px] overflow-auto border border-border/80 rounded-xl scrollbar-thin">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-muted border-b border-border/80 text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
                            <th className="p-4 w-12 text-center">No.</th>
                            <th className="p-4">Disclosure Item</th>
                            <th className="p-4 w-28 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60 font-semibold">
                          {filterList(REGULATION_46_DATA).map((item) => (
                            <tr key={item.id} className="hover:bg-muted/10 transition-colors">
                              <td className="p-4 text-center font-bold text-muted-foreground">{item.id}</td>
                              <td className="p-4 text-foreground leading-relaxed">{item.text}</td>
                              <td className="p-4 text-center">
                                {item.status === "Available" ? (
                                  <BlobButton
                                    href={item.link}
                                    variant="secondary"
                                    className="!py-1 !px-2.5 !text-[9px] !font-medium uppercase tracking-wider whitespace-nowrap"
                                  >
                                    <span>Click Here</span>
                                  </BlobButton>
                                ) : (
                                  <span className="inline-block px-2.5 py-1 rounded-full bg-muted border border-border text-[9px] font-bold uppercase text-muted-foreground">
                                    N/A
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
