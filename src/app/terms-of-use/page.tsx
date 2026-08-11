"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";
import { ShieldCheck, Mail, Scale } from "lucide-react";

export default function TermsOfUsePage() {
  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />

      <main>
        <PageHero
          label="Legal Documentation"
          title="TERMS OF USE"
          description="Read our comprehensive terms and conditions for using the Mewar Hitech platforms and services."
          image="/images/infrastructure-1.jpg"
        />

        <section className="section-padding bg-background">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Top summary card */}
            <div className="p-8 rounded-xl bg-card border border-border/80 flex items-start gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Scale size={24} className="text-primary stroke-[2.2]" />
              </div>
              <div className="space-y-2">
                <h2 className="common-heading text-2xl font-bold text-foreground">Terms and Conditions</h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
              
              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  1. Intellectual Property
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  The site and its original content, features, and functionality are owned by Mewar Hitech Engineering Ltd. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  2. Use of Content
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions. You must not republish, sell, rent, or sub-license material from the website.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  3. User Warranties
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  You warrant and represent that your use of the website will comply with these terms of use and all applicable local, national and international laws, rules and regulations.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  4. Limitation of Liability
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  Mewar Hitech Engineering Ltd. shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Mewar Hitech has been advised of the possibility of such damages.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  5. Governing Law
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  This Agreement is governed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Udaipur, Rajasthan.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border/80 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="common-heading text-xl font-bold text-foreground tracking-tight">Legal Queries</h3>
                  <p className="text-xs text-muted-foreground font-semibold">
                    If you have any questions regarding these terms, please contact our legal department.
                  </p>
                </div>
                <a href="mailto:sales@kingsoncrusher.com">
                  <BlobButton variant="primary" className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2 whitespace-nowrap">
                    <span>Contact Legal</span>
                    <Mail size={16} />
                  </BlobButton>
                </a>
              </div>

            </div>
            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
