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

  const shareImage =
    product.mainImage ||
    product.heroImage ||
    product.gallery?.[0] ||
    "/images/products/cone_crusher.jpg";

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
      images: [{ url: shareImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  };
}

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.id;
  const product = PRODUCTS_DATA.find((item) => item.slug === slug);

  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.mainImage
          ? `https://www.mewarhitech.com${product.mainImage}`
          : product.gallery?.[0]
          ? `https://www.mewarhitech.com${product.gallery[0]}`
          : "https://www.mewarhitech.com/images/products/cone_crusher.jpg",
        description: product.seoDescription || product.introText,
        brand: {
          "@type": "Brand",
          name: "Kingson",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Mewar Hi-Tech Engineering Ltd.",
        },
        url: `https://www.mewarhitech.com/products/${slug}`,
        category: product.category || "Crushing Equipment",
      }
    : null;

  const breadcrumbSchema = product
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
            name: "Products",
            item: "https://www.mewarhitech.com/products",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `https://www.mewarhitech.com/products/${slug}`,
          },
        ],
      }
    : null;

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
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
