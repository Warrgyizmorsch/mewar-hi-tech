import type { Metadata } from "next";
import { PRODUCTS_DATA } from "../data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.id;
  const product = PRODUCTS_DATA.find((item) => item.slug === slug);

  if (!product) {
    return {
      alternates: {
        canonical: `/products/${slug}`,
      },
    };
  }

  return {
    title: `${product.name} | Mewar Hi-Tech`,
    description: product.introText,
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
