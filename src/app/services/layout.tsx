import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crusher Services & Support | Mewar Hi-Tech",
  description: "Get after sales support, genuine spare parts and plant erection and commissioning for your crushing equipment from Mewar Hi-Tech.",
  alternates: {
    canonical: "https://www.mewarhitech.com/services",
  },
  openGraph: {
    title: "Crusher Services & Support | Mewar Hi-Tech",
    description: "Get after sales support, genuine spare parts and plant erection and commissioning for your crushing equipment from Mewar Hi-Tech.",
    url: "https://www.mewarhitech.com/services",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crusher Services & Support | Mewar Hi-Tech",
    description: "Get after sales support, genuine spare parts and plant erection and commissioning for your crushing equipment from Mewar Hi-Tech.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
