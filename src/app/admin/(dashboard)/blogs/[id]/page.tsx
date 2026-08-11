import React from "react";
import BlogForm from "@/components/admin/BlogForm";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  await connectToDatabase();
  
  let blog = null;
  try {
    const rawBlog = await Blog.findById(resolvedParams.id).lean();
    if (rawBlog) {
      // Serialize all ObjectIds and Dates for client component
      blog = JSON.parse(JSON.stringify(rawBlog));
    }
  } catch (error) {
    console.error("Error fetching blog for edit:", error);
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Edit Blog</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Make changes to your existing blog post.
        </p>
      </div>
      
      <BlogForm initialData={blog} />
    </div>
  );
}
