import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mewar Hi-Tech",
  description: "Read how Mewar Hi-Tech collects, uses and protects personal information shared through its website, contact forms and enquiries.",
  alternates: {
    canonical: "https://www.mewarhitech.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Mewar Hi-Tech",
    description: "Read how Mewar Hi-Tech collects, uses and protects personal information shared through its website, contact forms and enquiries.",
    url: "https://www.mewarhitech.com/privacy-policy",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Mewar Hi-Tech",
    description: "Read how Mewar Hi-Tech collects, uses and protects personal information shared through its website, contact forms and enquiries.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
