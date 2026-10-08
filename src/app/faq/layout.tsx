import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crusher FAQs | Mewar Hi-Tech",
  description: "Answers to common questions about Mewar Hi-Tech crushers, screens, spare parts, delivery, installation and after sales service.",
  alternates: {
    canonical: "https://www.mewarhitech.com/faq",
  },
  openGraph: {
    title: "Crusher FAQs | Mewar Hi-Tech",
    description: "Answers to common questions about Mewar Hi-Tech crushers, screens, spare parts, delivery, installation and after sales service.",
    url: "https://www.mewarhitech.com/faq",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crusher FAQs | Mewar Hi-Tech",
    description: "Answers to common questions about Mewar Hi-Tech crushers, screens, spare parts, delivery, installation and after sales service.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
