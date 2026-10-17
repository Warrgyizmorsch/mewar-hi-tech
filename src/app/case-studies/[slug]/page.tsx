import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/data/case-studies-data";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyOverview from "@/components/case-studies/CaseStudyOverview";
import CaseStudyPerformance from "@/components/case-studies/CaseStudyPerformance";
import CaseStudyChallengeSolution from "@/components/case-studies/CaseStudyChallengeSolution";
import CaseStudyTechnicalHighlights from "@/components/case-studies/CaseStudyTechnicalHighlights";
import CaseStudyProcessFlow from "@/components/case-studies/CaseStudyProcessFlow";
import CaseStudyGallery from "@/components/case-studies/CaseStudyGallery";
import CaseStudyTestimonial from "@/components/case-studies/CaseStudyTestimonial";
import CaseStudyCTA from "@/components/case-studies/CaseStudyCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  CASE_STUDIES.forEach((cs) => {
    if (cs.slug) {
      params.push({ slug: cs.slug });
    }
    params.push({ slug: cs.id });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Mewar Hi-Tech",
    };
  }

  const title = `${study.title} | Case Study | Mewar Hi-Tech`;
  const description =
    study.subtitle || study.description || "Industrial crushing & sand plant case study by Mewar Hi-Tech.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: study.image,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
      type: "article",
    },
    alternates: {
      canonical: `https://www.mewarhitech.com/case-studies/${study.slug || study.id}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  // Structured Data Schema for Rich Google Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.subtitle || study.description,
    image: `https://www.mewarhitech.com${study.image}`,
    author: {
      "@type": "Organization",
      name: "Mewar Hi-Tech",
      url: "https://www.mewarhitech.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Mewar Hi-Tech",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mewarhitech.com/logos/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mewarhitech.com/case-studies/${study.slug || study.id}`,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* SECTION 1: HERO SECTION */}
        <CaseStudyHero study={study} />

        {/* SECTION 2: PROJECT OVERVIEW & VIDEO */}
        <CaseStudyOverview study={study} />

        {/* SECTION 3: PROVEN PERFORMANCE & ROI */}
        <CaseStudyPerformance study={study} />

        {/* SECTION 4: CLIENT CHALLENGE & OUR SOLUTION */}
        <CaseStudyChallengeSolution study={study} />

        {/* SECTION 5: KEY TECHNICAL HIGHLIGHTS */}
        <CaseStudyTechnicalHighlights study={study} />

        {/* SECTION 6: PLANT PROCESS FLOW */}
        <CaseStudyProcessFlow study={study} />

        {/* SECTION 7: PLANT INSTALLATION & ON-SITE PHOTOS */}
        <CaseStudyGallery study={study} />

        {/* SECTION 8: CLIENT TESTIMONIAL */}
        <CaseStudyTestimonial study={study} />

        {/* SECTION 9: DUAL CTA BANNERS */}
        <CaseStudyCTA study={study} />
      </main>

      <Footer />
    </div>
  );
}
