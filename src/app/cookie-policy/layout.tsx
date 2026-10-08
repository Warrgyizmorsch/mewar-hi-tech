import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Mewar Hi-Tech",
  description: "Learn which cookies the Mewar Hi-Tech website uses, why they are used, and how you can manage or change your cookie settings.",
  alternates: {
    canonical: "https://www.mewarhitech.com/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Mewar Hi-Tech",
    description: "Learn which cookies the Mewar Hi-Tech website uses, why they are used, and how you can manage or change your cookie settings.",
    url: "https://www.mewarhitech.com/cookie-policy",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Mewar Hi-Tech",
    description: "Learn which cookies the Mewar Hi-Tech website uses, why they are used, and how you can manage or change your cookie settings.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
