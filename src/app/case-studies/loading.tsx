import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function CaseStudiesLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />

      <main className="flex-1 pb-16 pt-24 sm:pt-28">
        <section className="py-12 lg:py-16 bg-muted/40 border-b border-border">
          <Container>
            <div className="max-w-3xl space-y-4 animate-pulse">
              <div className="h-4 w-32 bg-primary/20 rounded-full" />
              <div className="h-10 sm:h-12 w-3/4 bg-muted rounded-xl" />
              <div className="h-4 w-full bg-muted/70 rounded" />
            </div>
          </Container>
        </section>

        <section className="section-padding">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm animate-pulse flex flex-col"
                >
                  <div className="h-[220px] bg-muted relative" />
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="h-4 w-24 bg-primary/20 rounded-full" />
                      <div className="h-6 w-full bg-muted rounded-lg" />
                      <div className="h-4 w-full bg-muted/70 rounded" />
                      <div className="h-4 w-4/5 bg-muted/70 rounded" />
                    </div>
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                      <div className="h-4 w-28 bg-muted rounded" />
                      <div className="h-4 w-16 bg-primary/20 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
