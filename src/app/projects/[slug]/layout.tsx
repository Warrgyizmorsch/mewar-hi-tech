import { Metadata } from "next";

const seoData: Record<string, { title: string; description: string }> = {
  "stationary-crushing-plants": {
    "title": "Stationary Crushing Plants | Mewar Hi-Tech",
    "description": "Stationary crushing plants designed, built and commissioned by Mewar Hi-Tech for quarries, mines and aggregate producers."
  },
  "stationery-projects": {
    "title": "Stationary Crushing Plants | Mewar Hi-Tech",
    "description": "Stationary crushing plants designed, built and commissioned by Mewar Hi-Tech for quarries, mines and aggregate producers."
  },
  "track-mounted-mobile-projects": {
    "title": "Track Mounted Mobile Crushing Plants | Mewar Hi-Tech",
    "description": "Track mounted mobile crushing and screening plants from Mewar Hi-Tech for quarry and site work. View projects and request a quote."
  },
  "wheel-mounted-mobile-projects": {
    "title": "Wheel Mounted Mobile Crushing Plants | Mewar Hi-Tech",
    "description": "Wheel mounted mobile crushing and screening plants from Mewar Hi-Tech for easy transport between sites. View projects and request a quote."
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
        canonical: `https://www.mewarhitech.com/projects/${slug}`,
      }
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://www.mewarhitech.com/projects/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.mewarhitech.com/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = seoData[slug];

  const breadcrumbSchema = data
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.mewarhitech.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://www.mewarhitech.com/projects",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.title.replace(" | Mewar Hi-Tech", ""),
            item: `https://www.mewarhitech.com/projects/${slug}`,
          },
        ],
      }
    : null;

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {children}
    </>
  );
}
