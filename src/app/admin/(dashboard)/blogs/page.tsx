import React from "react";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Link from "next/link";
import { FileText, Plus, Eye, Calendar, Tag } from "lucide-react";

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
      ) : blogs.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
            <FileText size={28} className="text-muted-foreground" />
          </div>
          <h2 className="text-lg font-bold text-foreground">No Blog Posts Yet</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Blog posts will appear here once created. You can seed sample data by
            visiting <code className="bg-muted px-1 rounded">/api/blogs/seed</code>.
          </p>
        </div>
      ) : (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                Total Posts
              </p>
              <p className="text-2xl font-bold text-foreground mt-1">
                {blogs.length}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                Published
              </p>
              <p className="text-2xl font-bold text-green-600 mt-1">
                {blogs.filter((b) => b.published).length}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                Featured
              </p>
              <p className="text-2xl font-bold text-primary mt-1">
                {blogs.filter((b) => b.featured).length}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                Drafts
              </p>
              <p className="text-2xl font-bold text-muted-foreground mt-1">
                {blogs.filter((b) => !b.published).length}
              </p>
            </div>
          </div>

          {/* Blog Posts Table */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground">
                      Title
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                      Category
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                      Author
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground hidden sm:table-cell">
                      Date
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground">
                      Status
                    </th>
                    <th className="text-right px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {blogs.map((blog: any) => (
                    <tr
                      key={blog._id.toString()}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div>
                          <Link
                            href={`/blogs/${blog.slug}`}
                            target="_blank"
                            className="font-medium text-foreground hover:text-primary transition-colors line-clamp-1"
                          >
                            {blog.title}
                          </Link>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                            {blog.excerpt}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                          <Tag size={10} />
                          {blog.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                        {blog.author?.name || "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs hidden sm:table-cell">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {new Date(
                            blog.publishedAt || blog.createdAt
                          ).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            blog.published
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {blog.published ? "Published" : "Draft"}
                        </span>
                        {blog.featured && (
                          <span className="inline-block ml-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href={`/admin/blogs/${blog._id}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-secondary text-white text-xs font-medium hover:bg-secondary/90 transition-colors"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
