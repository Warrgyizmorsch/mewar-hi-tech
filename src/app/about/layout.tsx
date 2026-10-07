import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mewar Hi-Tech",
  description: "Manufacturer of Crushing, Screening and Size Reduction Equipment. Combining 100% in-house manufacturing, cutting-edge technology, and unyielding quality.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
