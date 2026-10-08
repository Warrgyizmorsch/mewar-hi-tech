import { Metadata } from "next";

export const metadata = {
  title: "Events & Exhibitions | Mewar Hi-Tech",
  description: "See upcoming and past events and exhibitions where Mewar Hi-Tech shows its crushing and screening equipment, and meet the team in person.",
  alternates: {
    canonical: "https://www.mewarhitech.com/events",
  },
  openGraph: {
    title: "Events & Exhibitions | Mewar Hi-Tech",
    description: "See upcoming and past events and exhibitions where Mewar Hi-Tech shows its crushing and screening equipment, and meet the team in person.",
    url: "https://www.mewarhitech.com/events",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Exhibitions | Mewar Hi-Tech",
    description: "See upcoming and past events and exhibitions where Mewar Hi-Tech shows its crushing and screening equipment, and meet the team in person.",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
