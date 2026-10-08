import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crushing & Screening Blog | Mewar Hi-Tech",
  description: "Guides, maintenance tips, project stories and industry news on crushers, screens and sand making from the Mewar Hi-Tech team.",
  alternates: {
    canonical: "https://www.mewarhitech.com/blogs",
  },
  openGraph: {
    title: "Crushing & Screening Blog | Mewar Hi-Tech",
    description: "Guides, maintenance tips, project stories and industry news on crushers, screens and sand making from the Mewar Hi-Tech team.",
    url: "https://www.mewarhitech.com/blogs",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crushing & Screening Blog | Mewar Hi-Tech",
    description: "Guides, maintenance tips, project stories and industry news on crushers, screens and sand making from the Mewar Hi-Tech team.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
