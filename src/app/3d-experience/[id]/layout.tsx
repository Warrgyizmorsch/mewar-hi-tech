import { Metadata } from "next";

export function generateStaticParams() {
  return [
    { id: "track-mounted-mobile-project" },
    { id: "track-mounted-mobile-projects-1" },
    { id: "track-mounted-mobile-projects-5" },
    { id: "wheel-mounted-mobile-project" },
  ];
}

const seoData: Record<string, { title: string; description: string }> = {
  "track-mounted-mobile-project": {
    "title": "Track Mounted Mobile Crusher 3D View | Mewar Hi-Tech",
    "description": "View a track mounted mobile crusher from Mewar Hi-Tech in interactive 3D. Rotate the model and explore its main parts and features."
  },
  "track-mounted-mobile-projects-1": {
    "title": "Track Mounted Mobile Crusher 3D View 1 | Mewar Hi-Tech",
    "description": "Interactive 3D view of a Mewar Hi-Tech track mounted mobile crushing plant. Rotate the model and explore its main parts."
  },
  "track-mounted-mobile-projects-5": {
    "title": "Track Mounted Mobile Crusher 3D View 5 | Mewar Hi-Tech",
    "description": "Interactive 3D view of a Mewar Hi-Tech track mounted mobile screening plant. Rotate the model and explore its main parts."
  },
  "wheel-mounted-mobile-project": {
    "title": "Wheel Mounted Mobile Crusher 3D View | Mewar Hi-Tech",
    "description": "View a wheel mounted mobile crusher from Mewar Hi-Tech in interactive 3D. Rotate the model and explore its main parts and features."
  }
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const data = seoData[id];

  if (!data) {
    return {
      title: "3D Experience | Mewar Hi-Tech",
      alternates: {
        canonical: `https://www.mewarhitech.com/3d-experience/${id}`,
      }
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://www.mewarhitech.com/3d-experience/${id}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.mewarhitech.com/3d-experience/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
