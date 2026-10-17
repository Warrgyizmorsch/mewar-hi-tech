import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Zap,
  Layers,
  ChevronRight,
  Activity,
  Cpu,
  Factory,
  Compass,
  FileCheck,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import CTASection from "@/components/shared/CTASection";
import BlobButton from "@/components/ui/BlobButton";
import { INDUSTRIES_DATA } from "@/data/industries-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((item) => item.slug === slug);

  if (!industry) {
    return {
      title: "Industry Solutions | Mewar Hi-Tech",
    };
  }

  const canonicalUrl = `https://www.mewarhitech.com/industries/${industry.slug}`;

  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: industry.seoTitle,
      description: industry.seoDescription,
      url: canonicalUrl,
      siteName: "Mewar Hi-Tech Engineering Ltd",
      images: [
        {
          url: `https://www.mewarhitech.com${industry.heroImage}`,
          width: 1200,
          height: 630,
          alt: `${industry.name} Crushing and Screening Equipment`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.seoTitle,
      description: industry.seoDescription,
      images: [`https://www.mewarhitech.com${industry.heroImage}`],
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  const otherIndustries = INDUSTRIES_DATA.filter((item) => item.slug !== industry.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mewarhitech.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://www.mewarhitech.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.shortName,
        item: `https://www.mewarhitech.com/industries/${industry.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.name,
    description: industry.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Mewar Hi-Tech Engineering Ltd",
      url: "https://www.mewarhitech.com",
    },
    areaServed: "Global",
    serviceType: "Heavy Machinery & Crushing Plant Engineering",
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Header />

      <main className="flex-1 pt-[72px] lg:pt-[80px]">
        {/* Navigation & Applications Filter Bar */}
        <section className="bg-card border-b border-border py-4">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Breadcrumb */}
              <nav
                className="flex items-center text-xs text-muted-foreground flex-wrap gap-2"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Industries
                </Link>
                <span>/</span>
                <span className="text-foreground font-semibold">{industry.shortName}</span>
              </nav>

              {/* Quick Applications Filter Switcher */}
              <div className="flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                  Applications:
                </span>
                {INDUSTRIES_DATA.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition whitespace-nowrap ${
                      ind.slug === industry.slug
                        ? "bg-primary text-black font-extrabold shadow-sm"
                        : "bg-muted text-foreground/80 hover:text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {ind.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Overview & Key Statistics */}
        <section className="py-16 lg:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-[2.5px] bg-primary rounded-full" />
                  <span className="text-primary text-xs uppercase tracking-widest font-bold">
                    ENGINEERED FOR HEAVY SECTORS
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-foreground leading-tight mb-6">
                  Driving High-Yield Performance in{" "}
                  <span className="text-primary">{industry.shortName}</span>
                </h1>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {industry.overview.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact">
                    <BlobButton>Request Plant Proposal</BlobButton>
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-border hover:border-primary text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                  >
                    <span>View Machinery Lineup</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Stats Highlights */}
              <div className="lg:col-span-5">
                <div className="bg-card border-2 border-border p-8 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                    Operational Benchmarks
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {industry.keyBenefits.map((item, idx) => (
                      <div key={idx} className="border-b border-border/60 pb-4">
                        <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                          {item.stat}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                          {item.label}
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Technical Challenges & Engineering Solutions */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-[2.5px] bg-primary rounded-full" />
                <span className="text-primary text-xs uppercase tracking-widest font-bold">
                  OVERCOMING SITE CHALLENGES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                Engineered to Solve Your Toughest Processing Hurdles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.challenges.map((ch, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border p-7 relative hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-5 group-hover:bg-primary group-hover:text-black transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3 leading-snug">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ch.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 3: Typical Crushing & Screening Circuit Flow */}
        <section className="py-16 lg:py-20">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-[2.5px] bg-primary rounded-full" />
                <span className="text-primary text-xs uppercase tracking-widest font-bold">
                  PROCESS CIRCUIT
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                Optimized Plant Flowsheet for {industry.shortName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.processFlow.map((step) => (
                <div
                  key={step.step}
                  className="bg-card border-2 border-border p-6 relative group hover:border-primary transition-colors"
                >
                  <div className="text-3xl font-black text-primary/30 group-hover:text-primary transition-colors mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 4: Recommended Machinery Lineup */}
        <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-[2.5px] bg-primary rounded-full" />
                  <span className="text-primary text-xs uppercase tracking-widest font-bold">
                    RECOMMENDED EQUIPMENT
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                  Heavy-Duty Machinery for {industry.shortName}
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
              >
                <span>View Full Equipment Catalog</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.recommendedProducts.map((prod) => (
                <div
                  key={prod.slug}
                  className="bg-card border border-border flex flex-col group hover:border-primary hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] bg-black/5 dark:bg-white/5 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-black text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                      {prod.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                        {prod.description}
                      </p>
                    </div>

                    <Link
                      href={`/products/${prod.slug}`}
                      className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary hover:underline pt-3 border-t border-border/60"
                    >
                      <span>Explore Machine</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 5: Technical Specifications Table */}
        <section className="py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-foreground text-center mb-8">
                Typical Plant Specifications & Parameters
              </h2>
              <div className="bg-card border-2 border-border overflow-hidden">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-border">
                    {industry.specifications.map((spec, i) => (
                      <tr key={i} className="hover:bg-muted/40 transition-colors">
                        <td className="px-6 py-4 font-bold text-foreground/80 w-1/3 bg-muted/20">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 6: Explore Other Applications */}
        <section className="py-16 bg-muted/20 border-t border-border">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-primary text-xs uppercase tracking-widest font-bold block mb-2">
                APPLICATION EXPERTISE
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-foreground">
                Explore Other Heavy Sectors We Power
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {otherIndustries.slice(0, 5).map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="bg-card border border-border p-4 hover:border-primary hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {ind.shortName}
                  </span>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground group-hover:text-primary">
                    <span>View Solutions</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
