import { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Crusher Experience | Mewar Hi-Tech",
  description: "Explore Mewar Hi-Tech crushing plants and machines in an interactive 3D view, with 360 degree rotation, hotspots and specifications.",
  alternates: {
    canonical: "https://www.mewarhitech.com/3d-experience",
  },
  openGraph: {
    title: "3D Crusher Experience | Mewar Hi-Tech",
    description: "Explore Mewar Hi-Tech crushing plants and machines in an interactive 3D view, with 360 degree rotation, hotspots and specifications.",
    url: "https://www.mewarhitech.com/3d-experience",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Crusher Experience | Mewar Hi-Tech",
    description: "Explore Mewar Hi-Tech crushing plants and machines in an interactive 3D view, with 360 degree rotation, hotspots and specifications.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
