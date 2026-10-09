import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center pt-32 pb-24 bg-background">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="common-heading text-7xl text-primary mb-4">404</p>
          <h1 className="common-heading text-2xl text-foreground mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full hover:bg-primary/80 hover:scale-105 transition duration-200"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
