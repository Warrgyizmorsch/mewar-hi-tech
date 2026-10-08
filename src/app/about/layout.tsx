import { Metadata } from "next";

export const metadata = {
  title: "About Us | In-House Crusher Manufacturing | Mewar Hi-Tech",
  description: "See how Mewar Hi-Tech designs, casts and machines crushing and screening equipment in-house at its Udaipur plant, with strict quality checks.",
  alternates: {
    canonical: "https://www.mewarhitech.com/about",
  },
  openGraph: {
    title: "About Us | In-House Crusher Manufacturing | Mewar Hi-Tech",
    description: "See how Mewar Hi-Tech designs, casts and machines crushing and screening equipment in-house at its Udaipur plant, with strict quality checks.",
    url: "https://www.mewarhitech.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | In-House Crusher Manufacturing | Mewar Hi-Tech",
    description: "See how Mewar Hi-Tech designs, casts and machines crushing and screening equipment in-house at its Udaipur plant, with strict quality checks.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
