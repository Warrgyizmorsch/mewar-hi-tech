import React from "react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-data";
import BlogDetailClient from "./BlogDetailClient";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blog = BLOG_POSTS.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = BLOG_POSTS.filter((b) => b.category === blog.category && b.slug !== slug).slice(0, 3);
  const categories = Array.from(new Set(BLOG_POSTS.map((b) => b.category)));

  return (
    <BlogDetailClient
      blog={blog}
      relatedBlogs={relatedBlogs}
      categories={categories}
    />
  );
}
