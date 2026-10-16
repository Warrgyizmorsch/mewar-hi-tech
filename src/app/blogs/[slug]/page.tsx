import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { BLOG_POSTS } from "@/data/blog-data";
import BlogDetailClient from "./BlogDetailClient";

export const dynamic = "force-dynamic";

interface FormattedBlog {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  tags: string[];
  readTime: number;
  metaTitle?: string;
  metaDescription?: string;
  faqs?: { question: string; answer: string }[];
  featured: boolean;
  publishedAt: string;
}

function formatDbBlog(b: any): FormattedBlog {
  return {
    _id: b._id ? b._id.toString() : "",
    title: String(b.title || ""),
    slug: String(b.slug || ""),
    excerpt: String(b.excerpt || ""),
    content: String(b.content || ""),
    coverImage: String(b.coverImage || "/images/backgorund.webp"),
    category: String(b.category || "Industry News"),
    author: {
      name: String(b.author?.name || "Mewar Hi-Tech"),
      avatar: String(b.author?.avatar || "/images/logo.png"),
      title: String(b.author?.title || "Editorial Team"),
    },
    tags: Array.isArray(b.tags) ? b.tags.map(String) : [],
    readTime: Number(b.readTime) || 5,
    metaTitle: b.metaTitle ? String(b.metaTitle) : undefined,
    metaDescription: b.metaDescription ? String(b.metaDescription) : undefined,
    faqs: Array.isArray(b.faqs)
      ? b.faqs.map((f: any) => ({
          question: String(f.question || ""),
          answer: String(f.answer || ""),
        }))
      : [],
    featured: Boolean(b.featured),
    publishedAt: b.publishedAt
      ? new Date(b.publishedAt).toISOString()
      : new Date().toISOString(),
  };
}

async function getBlogData(slug: string): Promise<{
  blog: FormattedBlog | null;
  relatedBlogs: FormattedBlog[];
  categories: string[];
}> {
  let blog: FormattedBlog | null = null;
  let relatedBlogs: FormattedBlog[] = [];
  let categories: string[] = [];

  try {
    const conn = await connectToDatabase();
    if (conn) {
      const dbBlog = await Blog.findOne({ slug, published: true }).lean();
      if (dbBlog) {
        blog = formatDbBlog(dbBlog);

        // Fetch related blogs from same category in DB
        const dbRelated = await Blog.find({
          slug: { $ne: slug },
          published: true,
          category: dbBlog.category,
        })
          .sort({ publishedAt: -1 })
          .limit(3)
          .lean();

        relatedBlogs = dbRelated.map(formatDbBlog);

        // If fewer than 3, grab other recent published blogs
        if (relatedBlogs.length < 3) {
          const extraDb = await Blog.find({
            slug: { $nin: [slug, ...relatedBlogs.map((r) => r.slug)] },
            published: true,
          })
            .sort({ publishedAt: -1 })
            .limit(3 - relatedBlogs.length)
            .lean();

          relatedBlogs.push(...extraDb.map(formatDbBlog));
        }

        const distinctCats = await Blog.distinct("category", { published: true });
        categories = Array.from(
          new Set([
            ...distinctCats.map(String),
            "Industry News",
            "Product Updates",
            "Engineering",
            "Case Studies",
          ])
        );
      }
    }
  } catch (err) {
    console.warn("Failed to fetch blog from database, checking static fallback:", err);
  }

  // Fallback to static blog data if not found in database
  if (!blog) {
    const staticPost = BLOG_POSTS.find((b) => b.slug === slug);
    if (staticPost) {
      blog = {
        _id: staticPost.slug,
        title: staticPost.title,
        slug: staticPost.slug,
        excerpt: staticPost.excerpt,
        content: staticPost.content,
        coverImage: staticPost.coverImage,
        category: staticPost.category,
        author: staticPost.author,
        tags: staticPost.tags,
        readTime: staticPost.readTime,
        metaTitle: staticPost.metaTitle,
        metaDescription: staticPost.metaDescription,
        featured: staticPost.featured,
        publishedAt: staticPost.publishedAt,
      };

      const staticRelated = BLOG_POSTS.filter(
        (b) => b.category === blog!.category && b.slug !== slug
      ).slice(0, 3);

      relatedBlogs = staticRelated.map((b) => ({
        _id: b.slug,
        title: b.title,
        slug: b.slug,
        excerpt: b.excerpt,
        content: b.content,
        coverImage: b.coverImage,
        category: b.category,
        author: b.author,
        tags: b.tags,
        readTime: b.readTime,
        metaTitle: b.metaTitle,
        metaDescription: b.metaDescription,
        featured: b.featured,
        publishedAt: b.publishedAt,
      }));

      categories = Array.from(new Set(BLOG_POSTS.map((b) => b.category)));
    }
  }

  return { blog, relatedBlogs, categories };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { blog } = await getBlogData(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Mewar Hi-Tech",
      description: "The requested blog article could not be found.",
    };
  }

  const title = blog.metaTitle || `${blog.title} | Mewar Hi-Tech`;
  const description = blog.metaDescription || blog.excerpt;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mewarhitech.com";
  const url = `${siteUrl}/blogs/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author?.name || "Mewar Hi-Tech"],
      images: [
        {
          url: blog.coverImage || `${siteUrl}/images/backgorund.webp`,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [blog.coverImage || `${siteUrl}/images/backgorund.webp`],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const { blog, relatedBlogs, categories } = await getBlogData(slug);

  if (!blog) {
    notFound();
  }

  // Ensure 100% plain serializable JSON across the Server -> Client boundary
  const plainBlog = JSON.parse(JSON.stringify(blog));
  const plainRelated = JSON.parse(JSON.stringify(relatedBlogs));
  const plainCategories = JSON.parse(JSON.stringify(categories));

  return (
    <BlogDetailClient
      blog={plainBlog}
      relatedBlogs={plainRelated}
      categories={plainCategories}
    />
  );
}
