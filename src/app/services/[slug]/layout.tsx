import { Metadata } from "next";

const seoData: Record<string, { title: string; description: string }> = {
  "after-sales": {
    "title": "After Sales Service for Crushers | Mewar Hi-Tech",
    "description": "Technical support and service for crushing and screening equipment from Mewar Hi-Tech. Call our service team for help with your plant."
  },
  "spare-parts": {
    "title": "Crusher Spare Parts & Wear Parts | Mewar Hi-Tech",
    "description": "Jaw plates, cone mantles, blow bars and other wear parts for crushers, cast in-house by Mewar Hi-Tech in Udaipur. Ask for a quotation."
  },
  "erection-commissioning": {
    "title": "Crusher Plant Erection & Commissioning | Mewar Hi-Tech",
    "description": "On-site erection and commissioning of crushing and screening plants by Mewar Hi-Tech engineers. Contact us to plan your installation."
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = seoData[slug];

  if (!data) {
    return {
      title: "Not Found | Mewar Hi-Tech",
      alternates: {
        canonical: `https://www.mewarhitech.com/services/${slug}`,
      }
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://www.mewarhitech.com/services/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.mewarhitech.com/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
