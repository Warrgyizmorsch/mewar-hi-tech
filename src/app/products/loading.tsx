import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function ProductsLoading() {
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

        {/* Categories Bar Skeleton */}
        <section className="py-6 border-b border-border/80 sticky top-16 z-30 bg-background/95 backdrop-blur">
          <Container>
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none animate-pulse">
              {[100, 120, 110, 130, 90].map((width, idx) => (
                <div
                  key={idx}
                  className="h-10 rounded-full bg-muted shrink-0"
                  style={{ width: `${width}px` }}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Product Cards Grid Skeleton */}
        <section className="section-padding">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm animate-pulse flex flex-col"
                >
                  <div className="h-[240px] bg-muted relative flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="h-4 w-24 bg-primary/20 rounded-full" />
                      <div className="h-6 w-3/4 bg-muted rounded-lg" />
                      <div className="h-4 w-full bg-muted/70 rounded" />
                      <div className="h-4 w-5/6 bg-muted/70 rounded" />
                    </div>
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                      <div className="h-4 w-28 bg-muted rounded" />
                      <div className="h-9 w-28 bg-primary/30 rounded-xl" />
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
