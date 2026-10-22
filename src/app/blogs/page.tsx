import React from "react";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { BLOG_POSTS } from "@/data/blog-data";
import BlogsClient, { BlogPost, PaginationInfo } from "./BlogsClient";

export const revalidate = 60;

async function getInitialBlogData(): Promise<{
  blogs: BlogPost[];
  pagination: PaginationInfo;
  categories: string[];
}> {
  const defaultCategories = [
    "all",
    "Industry News",
    "Product Updates",
    "Engineering",
    "Case Studies",
  ];

  try {
    const conn = await connectToDatabase();
    if (conn) {
      // Execute count, query, and categories in parallel for 3x speedup
      const [total, dbBlogs, dbCategories] = await Promise.all([
        Blog.countDocuments({ published: true }),
        Blog.find({ published: true })
          .sort({ publishedAt: -1 })
          .limit(9)
          .select("title slug excerpt coverImage category author tags readTime featured publishedAt")
          .lean(),
        Blog.distinct("category", { published: true }),
      ]);

      if (dbBlogs && dbBlogs.length > 0) {
        const categories = [
          "all",
          ...new Set([...defaultCategories.slice(1), ...dbCategories]),
        ];

        const formattedBlogs: BlogPost[] = dbBlogs.map(
          (b: any, index: number) => ({
            _id: b._id ? b._id.toString() : String(index),
            title: String(b.title || ""),
            slug: String(b.slug || ""),
            excerpt: String(b.excerpt || ""),
            coverImage: String(b.coverImage || "/images/backgorund.webp"),
            category: String(b.category || "Industry News"),
            author: {
              name: String(b.author?.name || "Mewar Hi-Tech"),
              avatar: String(b.author?.avatar || "/images/logo.png"),
              title: String(b.author?.title || "Editorial Team"),
            },
            tags: Array.isArray(b.tags) ? b.tags.map(String) : [],
            readTime: Number(b.readTime) || 5,
            featured: Boolean(b.featured),
            publishedAt: b.publishedAt
              ? new Date(b.publishedAt).toISOString()
              : new Date().toISOString(),
          })
        );

        return {
          blogs: formattedBlogs,
          pagination: {
            page: 1,
            limit: 9,
            total,
            totalPages: Math.ceil(total / 9),
          },
          categories,
        };
      }
    }
  } catch (error) {
    console.warn("Server blog fetch failed, falling back to static blogs:", error);
  }

  // Fallback to static blog data
  const staticBlogs: BlogPost[] = BLOG_POSTS.filter((p) => p.published).map(
    (b, i) => ({
      _id: String(i),
      title: b.title,
      slug: b.slug,
      excerpt: b.excerpt,
      coverImage: b.coverImage,
      category: b.category,
      author: b.author,
      tags: b.tags,
      readTime: b.readTime,
      featured: b.featured,
      publishedAt: b.publishedAt,
    })
  );

  return {
    blogs: staticBlogs.slice(0, 9),
    pagination: {
      page: 1,
      limit: 9,
      total: staticBlogs.length,
      totalPages: Math.ceil(staticBlogs.length / 9),
    },
    categories: defaultCategories,
  };
}

export default async function BlogsPage() {
  const { blogs, pagination, categories } = await getInitialBlogData();

  return (
    <BlogsClient
      initialBlogs={blogs}
      initialPagination={pagination}
      initialCategories={categories}
    />
  );
}
