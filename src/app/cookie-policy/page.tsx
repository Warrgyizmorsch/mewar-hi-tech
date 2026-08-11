"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlobButton from "@/components/ui/BlobButton";
import Container from "@/components/ui/Container";
import { Cookie, Mail } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="bg-background min-h-screen text-foreground select-none">
      <Header />

      <main>
        <PageHero
          label="Legal Documentation"
          title="COOKIE POLICY"
          description="Learn about how we use cookies to improve your browsing experience on our website."
          image="/images/infrastructure-2.jpg"
        />

        <section className="section-padding bg-background">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Top summary card */}
            <div className="p-8 rounded-xl bg-card border border-border/80 flex items-start gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Cookie size={24} className="text-primary stroke-[2.2]" />
              </div>
              <div className="space-y-2">
                <h2 className="common-heading text-2xl font-bold text-foreground">Our Use of Cookies</h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  Mewar Hitech Engineering Ltd. uses cookies and similar technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. This policy explains what cookies are, how we use them, and your choices regarding their use.
                </p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
              
              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  What Are Cookies?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide valuable analytical information to the owners of the site.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  How We Use Cookies
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  We use cookies for several reasons:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground font-semibold pt-2">
                  <li><strong>Essential Cookies:</strong> Required for the operation of our website, enabling you to navigate and use its features securely.</li>
                  <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works.</li>
                  <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our website, enabling us to personalize content and remember your preferences.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Managing Your Cookie Preferences
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg uppercase tracking-tight text-foreground font-heading border-b border-border/60 pb-2">
                  Third-Party Cookies
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  In addition to our own cookies, we may also use various third-party cookies (such as Google Analytics) to report usage statistics and improve site performance. These cookies are subject to the respective privacy policies of these external services.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border/80 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="common-heading text-xl font-bold text-foreground tracking-tight">Questions About Cookies?</h3>
                  <p className="text-xs text-muted-foreground font-semibold">
                    If you have any questions or concerns about our use of cookies, please contact us.
                  </p>
                </div>
                <a href="mailto:sales@kingsoncrusher.com">
                  <BlobButton variant="primary" className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center gap-2 whitespace-nowrap">
                    <span>Contact Support</span>
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
