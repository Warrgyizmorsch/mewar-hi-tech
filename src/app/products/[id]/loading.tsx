import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />

      <main className="flex-1 pb-16 pt-24 sm:pt-28">
        <Container>
          {/* Breadcrumb Skeleton */}
          <div className="flex items-center gap-2 mb-6 animate-pulse">
            <div className="h-4 w-14 bg-muted rounded" />
            <div className="h-4 w-4 bg-muted/60 rounded" />
            <div className="h-4 w-20 bg-muted rounded" />
            <div className="h-4 w-4 bg-muted/60 rounded" />
            <div className="h-4 w-40 bg-muted rounded" />
          </div>

          {/* Main Product Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
            {/* Left 3D / Image Showcase Box Skeleton */}
            <div className="lg:col-span-7 space-y-4 animate-pulse">
              <div className="relative rounded-2xl bg-card border border-border overflow-hidden h-[340px] sm:h-[420px] lg:h-[480px] flex items-center justify-center p-8 shadow-sm">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="h-6 w-28 bg-primary/20 rounded-full" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              </div>

              {/* Thumbnails Skeleton */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-16 rounded-xl bg-muted shrink-0 border border-border"
                  />
                ))}
              </div>
            </div>

            {/* Right Product Details Panel Skeleton */}
            <div className="lg:col-span-5 space-y-6 animate-pulse">
              {/* Category Pill */}
              <div className="h-6 w-32 bg-primary/20 rounded-full" />

              {/* Title Skeleton */}
              <div className="space-y-2">
                <div className="h-10 sm:h-12 w-full bg-muted rounded-xl" />
                <div className="h-10 sm:h-12 w-2/3 bg-muted rounded-xl" />
              </div>

              {/* Tagline */}
              <div className="h-4 w-3/4 bg-muted/70 rounded" />

              {/* Highlights 3 Pills Skeleton */}
              <div className="grid grid-cols-3 gap-3 py-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-card border border-border space-y-2"
                  >
                    <div className="h-3 w-12 bg-muted/60 rounded" />
                    <div className="h-5 w-16 bg-muted rounded" />
                  </div>
                ))}
              </div>

              {/* Description Paragraphs Skeleton */}
              <div className="space-y-2 pt-2">
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-5/6 bg-muted rounded" />
              </div>

              {/* Key Features Bullets Skeleton */}
              <div className="space-y-3 pt-3 border-t border-border">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-primary/30 shrink-0" />
                    <div className="h-4 w-4/5 bg-muted rounded" />
                  </div>
                ))}
              </div>

              {/* CTA Buttons Skeleton */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <div className="h-12 flex-1 rounded-xl bg-primary/40" />
                <div className="h-12 flex-1 rounded-xl bg-muted border border-border" />
              </div>
            </div>
          </div>

          {/* Technical Specifications Table Skeleton */}
          <section className="py-10 border-t border-border space-y-6 animate-pulse">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-primary/20 rounded-full" />
              <div className="h-8 w-64 bg-muted rounded-xl" />
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="h-12 bg-muted" />
              <div className="divide-y divide-border">
                {[1, 2, 3, 4, 5].map((row) => (
                  <div key={row} className="h-12 flex items-center px-6 gap-6">
                    <div className="h-4 w-28 bg-muted rounded" />
                    <div className="h-4 w-24 bg-muted/60 rounded" />
                    <div className="h-4 w-32 bg-muted/60 rounded" />
                    <div className="h-4 w-20 bg-muted/60 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
