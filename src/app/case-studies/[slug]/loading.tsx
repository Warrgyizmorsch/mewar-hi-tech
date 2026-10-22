import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function CaseStudyDetailLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />

      <main className="flex-1 pb-16 pt-24 sm:pt-28">
        <Container>
          {/* Breadcrumb Skeleton */}
          <div className="flex items-center gap-2 mb-6 animate-pulse">
            <div className="h-4 w-14 bg-muted rounded" />
            <div className="h-4 w-4 bg-muted/60 rounded" />
            <div className="h-4 w-28 bg-muted rounded" />
            <div className="h-4 w-4 bg-muted/60 rounded" />
            <div className="h-4 w-40 bg-muted rounded" />
          </div>

          {/* Header Skeleton */}
          <div className="max-w-4xl space-y-4 mb-8 animate-pulse">
            <div className="h-6 w-32 bg-primary/20 rounded-full" />
            <div className="h-10 sm:h-14 w-full bg-muted rounded-xl" />
            <div className="h-10 sm:h-14 w-3/4 bg-muted rounded-xl" />
          </div>

          {/* Hero Image Skeleton */}
          <div className="w-full h-[300px] sm:h-[450px] rounded-2xl bg-muted animate-pulse mb-12 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          </div>

          {/* Content Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-6 animate-pulse">
              <div className="h-5 w-full bg-muted rounded" />
              <div className="h-5 w-full bg-muted rounded" />
              <div className="h-5 w-4/5 bg-muted rounded" />
              <div className="h-8 w-1/2 bg-muted rounded mt-8" />
              <div className="h-5 w-full bg-muted rounded" />
              <div className="h-5 w-3/4 bg-muted rounded" />
            </div>

            <div className="hidden lg:block lg:col-span-4 space-y-6 animate-pulse">
              <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
                <div className="h-5 w-32 bg-muted rounded" />
                <div className="h-4 w-full bg-muted/70 rounded" />
                <div className="h-4 w-full bg-muted/70 rounded" />
                <div className="h-10 w-full bg-primary/30 rounded-xl mt-4" />
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
