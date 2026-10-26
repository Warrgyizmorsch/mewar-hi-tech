"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Pencil,
  Trash2,
  Calendar,
  Tag,
  Search,
  FileText,
  X,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { toast } from "react-toastify";
import SelectionDropdown from "@/components/ui/SelectionDropdown";

interface BlogsTableProps {
  initialBlogs: any[];
}

export default function BlogsTable({ initialBlogs }: BlogsTableProps) {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>(initialBlogs);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [blogToDelete, setBlogToDelete] = useState<any | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Available categories
  const categories = Array.from(
    new Set(blogs.map((b) => b.category).filter(Boolean)),
  );

  const categoryOptions = [
    { value: "ALL", label: "All Categories" },
    ...categories.map((cat) => ({ value: cat, label: cat })),
  ];

  // Filtered list
  const filteredBlogs = blogs.filter((blog) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      blog.title?.toLowerCase().includes(q) ||
      blog.excerpt?.toLowerCase().includes(q) ||
      blog.author?.name?.toLowerCase().includes(q);

    const matchesCategory =
      selectedCategory === "ALL" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDelete = async () => {
    if (!blogToDelete) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/blogs/${blogToDelete._id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to delete blog post");
      }

      setBlogs((prev) => prev.filter((b) => b._id !== blogToDelete._id));
      toast.success("Blog post deleted successfully");
      setBlogToDelete(null);
      router.refresh();
    } catch (error: any) {
      console.error("Error deleting blog post:", error);
      toast.error(error.message || "Error deleting blog post");
    } finally {
      setIsDeleting(false);
    }
  };

  if (blogs.length === 0) {
    return (
      <div className="text-center py-16 space-y-4 bg-card border border-border rounded-xl">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
          <FileText size={28} className="text-muted-foreground" />
        </div>
        <h2 className="text-lg font-bold text-foreground">No Blog Posts Yet</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Blog posts will appear here once created. You can seed sample data by
          visiting{" "}
          <code className="bg-muted px-1 rounded">/api/blogs/seed</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
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

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search by title, excerpt, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-card border border-border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {categories.length > 0 && (
          <div className="w-full sm:w-60 shrink-0">
            <SelectionDropdown
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={categoryOptions}
              placeholder="All Categories"
              buttonClassName="border border-border rounded-lg text-sm py-2 px-3.5 bg-white dark:bg-card shadow-2xs font-medium"
            />
          </div>
        )}
      </div>

      {/* Blog Posts Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground">
                  Title
                </th>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell whitespace-nowrap">
                  Category
                </th>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell whitespace-nowrap">
                  Author
                </th>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground hidden sm:table-cell whitespace-nowrap">
                  Date
                </th>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                  Status
                </th>
                <th className="text-right px-4 py-3 font-bold text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-muted-foreground"
                  >
                    <p className="text-sm">
                      No blog posts match your search or filter.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("ALL");
                      }}
                      className="mt-2 text-xs font-semibold text-primary hover:underline"
                    >
                      Clear filters
                    </button>
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog: any) => (
                  <tr
                    key={blog._id}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="max-w-md">
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
                    <td className="px-4 py-3 hidden md:table-cell whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                        <Tag size={10} className="shrink-0" />
                        <span>{blog.category}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell whitespace-nowrap">
                      {blog.author?.name || "—"}
                    </td>
                    <td
                      className="px-4 py-3 text-muted-foreground text-xs hidden sm:table-cell whitespace-nowrap"
                      suppressHydrationWarning
                    >
                      <span
                        className="inline-flex items-center gap-1.5 whitespace-nowrap"
                        suppressHydrationWarning
                      >
                        <Calendar
                          size={13}
                          className="shrink-0 text-muted-foreground"
                        />
                        <span>
                          {blog.publishedAt || blog.createdAt
                            ? new Date(
                                blog.publishedAt || blog.createdAt,
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "-"}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
                          blog.published
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                      {blog.featured && (
                        <span className="inline-block ml-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                          Featured
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        {/* Pencil Edit Option */}
                        <Link
                          href={`/admin/blogs/${blog._id}`}
                          className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors flex items-center justify-center shrink-0"
                          title="Edit Post"
                        >
                          <Pencil size={15} />
                        </Link>

                        {/* Delete Option */}
                        <button
                          type="button"
                          onClick={() => setBlogToDelete(blog)}
                          className="w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                          title="Delete Post"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {blogToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white dark:bg-card rounded-2xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col border border-border">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 flex items-center justify-center mb-4">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Delete Blog Post?
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Are you sure you want to delete this blog post? This action
                cannot be undone and will permanently remove it from the
                website.
              </p>
              <div className="mt-4 p-3 bg-muted rounded-lg border border-border">
                <p className="text-xs font-semibold text-foreground line-clamp-2">
                  {blogToDelete.title}
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-muted/50 border-t border-border flex justify-end gap-3">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setBlogToDelete(null)}
                className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDelete}
                className="px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors inline-flex items-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isDeleting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <>
                    <Trash2 size={16} />
                    <span>Yes, Delete</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
