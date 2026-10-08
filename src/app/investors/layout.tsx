import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations | Mewar Hi-Tech",
  description: "Access Mewar Hi-Tech filings, annual reports, financial results, shareholder information and governance disclosures in one place.",
  alternates: {
    canonical: "https://www.mewarhitech.com/investors",
  },
  openGraph: {
    title: "Investor Relations | Mewar Hi-Tech",
    description: "Access Mewar Hi-Tech filings, annual reports, financial results, shareholder information and governance disclosures in one place.",
    url: "https://www.mewarhitech.com/investors",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Relations | Mewar Hi-Tech",
    description: "Access Mewar Hi-Tech filings, annual reports, financial results, shareholder information and governance disclosures in one place.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
