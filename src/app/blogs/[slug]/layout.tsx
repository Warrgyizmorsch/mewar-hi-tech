import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Not Found | Mewar Hi-Tech",
      alternates: {
        canonical: `https://www.mewarhitech.com/blogs/${slug}`,
      }
    };
  }

  const title = post.metaTitle || `${post.title} | Mewar Hi-Tech`;
  const description = post.metaDescription || post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.mewarhitech.com/blogs/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.mewarhitech.com/blogs/${slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const blogSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        image: post.coverImage.startsWith("http")
          ? post.coverImage
          : `https://www.mewarhitech.com${post.coverImage}`,
        datePublished: post.publishedAt || "2026-01-01",
        author: {
          "@type": "Organization",
          name: "Mewar Hi-Tech Engineering Ltd.",
        },
        publisher: {
          "@type": "Organization",
          name: "Mewar Hi-Tech Engineering Ltd.",
          logo: {
            "@type": "ImageObject",
            url: "https://www.mewarhitech.com/images/slider/about-mewar-hi-tech1.jpg",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.mewarhitech.com/blogs/${slug}`,
        },
      }
    : null;

  const breadcrumbSchema = post
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
            name: "Blogs",
            item: "https://www.mewarhitech.com/blogs",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://www.mewarhitech.com/blogs/${slug}`,
          },
        ],
      }
    : null;

  return (
    <>
      {blogSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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
