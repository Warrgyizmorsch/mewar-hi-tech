import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Jobs in Udaipur | Mewar Hi-Tech",
  description: "Explore career openings at Mewar Hi-Tech in Udaipur, and join a team building heavy-duty crushing and screening machinery.",
  alternates: {
    canonical: "https://www.mewarhitech.com/careers",
  },
  openGraph: {
    title: "Careers & Jobs in Udaipur | Mewar Hi-Tech",
    description: "Explore career openings at Mewar Hi-Tech in Udaipur, and join a team building heavy-duty crushing and screening machinery.",
    url: "https://www.mewarhitech.com/careers",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Jobs in Udaipur | Mewar Hi-Tech",
    description: "Explore career openings at Mewar Hi-Tech in Udaipur, and join a team building heavy-duty crushing and screening machinery.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
