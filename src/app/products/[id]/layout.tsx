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
        canonical: `https://www.mewarhitech.com/products/${slug}`,
      },
    };
  }

  const title = product.seoTitle || `${product.name} | Mewar Hi-Tech`;
  const description = product.seoDescription || product.introText;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.mewarhitech.com/products/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.mewarhitech.com/products/${slug}`,
      images: [{ url: product.mainImage || "/images/products/cone_crusher.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.mainImage || "/images/products/cone_crusher.jpg"],
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
