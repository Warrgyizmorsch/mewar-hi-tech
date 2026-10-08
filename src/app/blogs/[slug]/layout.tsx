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

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
