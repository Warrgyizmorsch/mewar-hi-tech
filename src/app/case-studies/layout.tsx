import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crushing Plant Case Studies | Mewar Hi-Tech",
  description: "Read Mewar Hi-Tech case studies of limestone, sand, infrastructure and cement plant projects, with results on productivity and downtime.",
  alternates: {
    canonical: "https://www.mewarhitech.com/case-studies",
  },
  openGraph: {
    title: "Crushing Plant Case Studies | Mewar Hi-Tech",
    description: "Read Mewar Hi-Tech case studies of limestone, sand, infrastructure and cement plant projects, with results on productivity and downtime.",
    url: "https://www.mewarhitech.com/case-studies",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crushing Plant Case Studies | Mewar Hi-Tech",
    description: "Read Mewar Hi-Tech case studies of limestone, sand, infrastructure and cement plant projects, with results on productivity and downtime.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
