"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";
import { CheckCircle2, ShieldCheck, Lock, FileText, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />

      <main>
        <PageHero
          label="Legal Documentation"
          title="PRIVACY POLICY"
          description="We value your privacy and are committed to protecting your personal data."
          image="/images/after-sales-1.jpg"
        />

        <section className="section-padding bg-background">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Top summary card */}
            <div className="p-8 rounded-xl bg-card border border-border/80 flex items-start gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} className="text-primary stroke-[2.2]" />
              </div>
              <div className="space-y-2">
                <h2 className="common-heading text-2xl font-bold text-foreground">Our Privacy Policy</h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  Mewar Hitech Engineering Ltd. values your privacy and takes it very seriously. This privacy policy describes the privacy practices of Mewar Hitech Engineering Ltd. by explaining how we collect, use, and protect your personal information. Please read this Privacy Policy carefully before using our website.
                </p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
              
              {/* Section Block */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  When The Policy Applies
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  This Privacy Policy applies to all the information we collect from you, whether you are communicating with us online or offline. By using our website or interacting with our services, you agree to the practices outlined in this policy.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Information We Collect and Track
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  We collect two main types of information: (1) information that you voluntarily submit to us, and (2) information we automatically collect when you interact with our website.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Information That You Submit
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  You may choose to provide us with personal information when you fill out forms, request quotes, or contact our support teams. This information may include your name, email address, phone number, company name, and other relevant details required to fulfill your requests.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Information That We Collect
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  Additionally, we automatically collect certain technical information when you visit our website. This includes your IP address, browser type, operating system, and browsing behavior on our platform to help us improve user experience and site performance.
                </p>
              </div>

              {/* Special Section with List */}
              <div className="space-y-4 p-8 rounded-xl bg-muted/20 border border-border/60">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading">
                  How We Use Your Information
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  We use the information we collect for various business purposes, primarily to provide and improve our services. These purposes include, but are not limited to:
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    "Responding to your inquiries and service requests.",
                    "Fulfilling orders and delivering requested materials.",
                    "Improving website functionality and user experience.",
                    "Sending promotional emails and relevant updates (which you can opt out of)."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0 stroke-[2.5]" />
                      <span className="text-sm font-bold text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  How Long Your Information Is Stored
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable laws and regulations.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  How Your Information Is Protected
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-card border border-border/80 flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <Lock size={18} className="text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                    We implement a variety of security measures to maintain the safety of your personal information. These include secure server hosting, data encryption, and restricted access protocols. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Other Communications
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  We may occasionally send you information regarding new products, services, or events. You may opt out of receiving these communications at any time by following the unsubscribe instructions included in the emails.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Links to Third-Party Websites
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  Our website may contain links to third-party sites. Please note that we are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of every website that collects personal information.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Cookies
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  Mewar Hitech uses cookies to enhance user experience. A cookie is a small data file stored on your computer's hard drive. You can choose to accept or decline cookies through your browser settings. However, declining cookies may prevent you from taking full advantage of the website.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Compliance with Laws
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  We reserve the right to disclose your personal information as required by law and when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process served on our website.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Applicable Laws
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  This Privacy Policy is governed by the laws of India. Any disputes arising in connection with this policy shall be subject to the exclusive jurisdiction of the courts located in Udaipur, Rajasthan.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Changes in the Policy
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border/80 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="common-heading text-xl font-bold text-foreground tracking-tight">Your Rights Under the Policy</h3>
                  <p className="text-xs text-muted-foreground font-semibold">
                    If you have any questions regarding this policy or wish to exercise your rights concerning your personal data, please contact us.
                  </p>
                </div>
                <a href="mailto:sales@kingsoncrusher.com">
                  <BlobButton variant="primary" className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2 whitespace-nowrap">
                    <span>Contact Privacy Team</span>
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
