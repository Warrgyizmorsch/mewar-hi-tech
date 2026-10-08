import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Mewar Hi-Tech",
  description: "Read the terms of use that apply when you visit and use the Mewar Hi-Tech website, its content, forms and downloadable resources.",
  alternates: {
    canonical: "https://www.mewarhitech.com/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use | Mewar Hi-Tech",
    description: "Read the terms of use that apply when you visit and use the Mewar Hi-Tech website, its content, forms and downloadable resources.",
    url: "https://www.mewarhitech.com/terms-of-use",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | Mewar Hi-Tech",
    description: "Read the terms of use that apply when you visit and use the Mewar Hi-Tech website, its content, forms and downloadable resources.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
