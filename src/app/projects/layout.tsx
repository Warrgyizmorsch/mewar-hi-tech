import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crushing Plant Projects | Mewar Hi-Tech",
  description: "See stationary and mobile crushing plant projects delivered by Mewar Hi-Tech, from plant layout and manufacturing to commissioning.",
  alternates: {
    canonical: "https://www.mewarhitech.com/projects",
  },
  openGraph: {
    title: "Crushing Plant Projects | Mewar Hi-Tech",
    description: "See stationary and mobile crushing plant projects delivered by Mewar Hi-Tech, from plant layout and manufacturing to commissioning.",
    url: "https://www.mewarhitech.com/projects",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crushing Plant Projects | Mewar Hi-Tech",
    description: "See stationary and mobile crushing plant projects delivered by Mewar Hi-Tech, from plant layout and manufacturing to commissioning.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
