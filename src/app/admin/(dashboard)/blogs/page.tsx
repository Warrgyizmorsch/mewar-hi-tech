import React from "react";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Link from "next/link";
import { FileText, Plus, Eye } from "lucide-react";
import BlogsTable from "./BlogsTable";

export const dynamic = "force-dynamic";

export default async function AdminBlogs() {
  let blogs: any[] = [];
  let dbError = false;

  try {
    const conn = await connectToDatabase();
    if (conn) {
      blogs = await Blog.find()
        .sort({ createdAt: -1 })
        .select("-content")
        .lean();
    }
  } catch (error) {
    console.warn("MongoDB Connection Error in Admin Blogs:", error);
    dbError = true;
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText size={24} className="text-primary" />
            Blog Management
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your blog posts and articles
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/blogs"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium hover:bg-muted/80 transition-colors"
          >
            <Eye size={14} />
            <span className="hidden sm:inline">View Blog</span>
          </Link>
          <Link
            href="/admin/blogs/create"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors"
          >
            <Plus size={14} />
            <span className="hidden sm:inline">Create Blog</span>
            <span className="inline sm:hidden">Create</span>
          </Link>
        </div>
      </div>

      {dbError ? (
        <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
          Database connection failed. Please check your MongoDB configuration.
        </div>
      ) : (
        <BlogsTable initialBlogs={JSON.parse(JSON.stringify(blogs))} />
      )}
    </div>
  );
}
