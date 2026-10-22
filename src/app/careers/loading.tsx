import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function CareersLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />

      <main className="flex-1 pb-16 pt-24 sm:pt-28">
        {/* Hero Skeleton */}
        <section className="py-12 lg:py-16 bg-muted/40 border-b border-border">
          <Container>
            <div className="max-w-3xl space-y-4 animate-pulse">
              <div className="h-4 w-32 bg-primary/20 rounded-full" />
              <div className="h-10 sm:h-12 w-3/4 bg-muted rounded-xl" />
              <div className="h-4 w-full bg-muted/70 rounded" />
              <div className="h-4 w-2/3 bg-muted/70 rounded" />
            </div>
          </Container>
        </section>

        {/* Stats Strip Skeleton */}
        <section className="py-8 bg-card border-b border-border">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="h-8 w-20 bg-muted rounded mx-auto" />
                  <div className="h-4 w-28 bg-muted/70 rounded mx-auto" />
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Open Positions Skeleton */}
        <section className="section-padding">
          <Container>
            <div className="text-center space-y-3 mb-10 animate-pulse">
              <div className="h-4 w-28 bg-primary/20 rounded-full mx-auto" />
              <div className="h-8 sm:h-10 w-64 bg-muted rounded-xl mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-6 lg:p-8 rounded-xl bg-card border border-border shadow-md space-y-5 animate-pulse"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-24 bg-primary/20 rounded-full" />
                    <div className="h-4 w-20 bg-muted rounded" />
                  </div>
                  <div className="h-7 w-3/4 bg-muted rounded-lg" />
                  <div className="space-y-2 pt-2 border-t border-border/60">
                    <div className="h-4 w-full bg-muted/70 rounded" />
                    <div className="h-4 w-5/6 bg-muted/70 rounded" />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="h-4 w-28 bg-muted rounded" />
                    <div className="h-10 w-32 bg-primary/30 rounded-xl" />
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
