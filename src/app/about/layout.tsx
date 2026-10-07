import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mewar Hi-Tech",
  description: "Manufacturer of Crushing, Screening and Size Reduction Equipment. Combining 100% in-house manufacturing, cutting-edge technology, and unyielding quality.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Mewar Hi-Tech",
    description: "Manufacturer of Crushing, Screening and Size Reduction Equipment. Combining 100% in-house manufacturing, cutting-edge technology, and unyielding quality.",
    url: "https://www.mewarhitech.com/about",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mewar Hi-Tech",
    description: "Manufacturer of Crushing, Screening and Size Reduction Equipment.",
    images: ["/images/slider/about-mewar-hi-tech1.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
