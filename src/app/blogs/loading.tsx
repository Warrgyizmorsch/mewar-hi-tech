import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function BlogsLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />

      <main className="flex-1 pb-16 pt-24 sm:pt-28">
        {/* Hero Section Skeleton */}
        <section className="relative py-12 lg:py-16 bg-muted/40 border-b border-border">
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
              {[80, 110, 130, 100, 120].map((width, idx) => (
                <div
                  key={idx}
                  className="h-9 rounded-full bg-muted shrink-0"
                  style={{ width: `${width}px` }}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Article Skeleton */}
        <section className="section-padding">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 bg-card border border-border rounded-2xl overflow-hidden shadow-md animate-pulse">
              <div className="lg:col-span-3 h-[240px] sm:h-[300px] lg:h-[400px] bg-muted flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              </div>
              <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-center space-y-4">
                <div className="h-4 w-28 bg-primary/20 rounded-full" />
                <div className="h-8 w-full bg-muted rounded-lg" />
                <div className="h-8 w-4/5 bg-muted rounded-lg" />
                <div className="flex items-center gap-3 pt-1">
                  <div className="h-3 w-24 bg-muted rounded" />
                  <div className="h-3 w-20 bg-muted rounded" />
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-3.5 w-full bg-muted rounded" />
                  <div className="h-3.5 w-full bg-muted rounded" />
                  <div className="h-3.5 w-2/3 bg-muted rounded" />
                </div>
                <div className="h-5 w-32 bg-primary/20 rounded mt-4" />
              </div>
            </div>
          </Container>
        </section>

        {/* Blog Grid Skeleton */}
        <section className="section-padding-sm bg-muted/30">
          <Container>
            <div className="text-center space-y-3 mb-10 animate-pulse">
              <div className="h-4 w-32 bg-primary/20 rounded-full mx-auto" />
              <div className="h-8 sm:h-10 w-64 bg-muted rounded-xl mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm animate-pulse flex flex-col"
                >
                  <div className="h-[200px] bg-muted relative" />
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-20 bg-primary/20 rounded" />
                        <div className="h-3 w-16 bg-muted rounded" />
                      </div>
                      <div className="h-5 w-full bg-muted rounded" />
                      <div className="h-5 w-3/4 bg-muted rounded" />
                      <div className="h-3.5 w-full bg-muted/70 rounded pt-1" />
                      <div className="h-3.5 w-4/5 bg-muted/70 rounded" />
                    </div>
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-muted" />
                        <div className="h-3 w-20 bg-muted rounded" />
                      </div>
                      <div className="h-3 w-12 bg-primary/20 rounded" />
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
