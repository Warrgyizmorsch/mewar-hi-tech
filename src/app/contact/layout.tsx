import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Mewar Hi-Tech | Crusher Sales & Support",
  description: "Contact Mewar Hi-Tech for crusher quotes, spare parts and service. Visit us at Hawa Magri Industrial Area, Sukher, Udaipur, Rajasthan.",
  alternates: {
    canonical: "https://www.mewarhitech.com/contact",
  },
  openGraph: {
    title: "Contact Mewar Hi-Tech | Crusher Sales & Support",
    description: "Contact Mewar Hi-Tech for crusher quotes, spare parts and service. Visit us at Hawa Magri Industrial Area, Sukher, Udaipur, Rajasthan.",
    url: "https://www.mewarhitech.com/contact",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mewar Hi-Tech | Crusher Sales & Support",
    description: "Contact Mewar Hi-Tech for crusher quotes, spare parts and service. Visit us at Hawa Magri Industrial Area, Sukher, Udaipur, Rajasthan.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
