import { Metadata } from "next";

const seoData: Record<string, { title: string; description: string }> = {
  "manufacturing": {
    "title": "Crusher Manufacturing Facility | Mewar Hi-Tech",
    "description": "Inside the Mewar Hi-Tech manufacturing facility in Udaipur, with heavy machining, CNC cutting and quality testing for crushing equipment."
  },
  "casting": {
    "title": "In-House Foundry & Steel Casting | Mewar Hi-Tech",
    "description": "Mewar Hi-Tech casts MS and alloy steel parts in-house in its Udaipur foundry, with quality checks on every casting for crusher components."
  },
  "latest-process-machinery": {
    "title": "CNC & Heavy Process Machinery | Mewar Hi-Tech",
    "description": "See the boring, CNC cutting, lathe and furnace machinery used by Mewar Hi-Tech to build precise, heavy-duty crushing equipment in-house."
  },
  "r-d-design": {
    "title": "R&D and Design Engineering | Mewar Hi-Tech",
    "description": "Meet the R&D and design effort behind Mewar Hi-Tech crushing and screening equipment, from drawings and 3D models to tested machines."
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
        canonical: `https://www.mewarhitech.com/infrastructure/${slug}`,
      }
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://www.mewarhitech.com/infrastructure/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.mewarhitech.com/infrastructure/${slug}`,
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
