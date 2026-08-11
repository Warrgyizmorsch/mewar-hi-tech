import React from "react";
import BlogForm from "@/components/admin/BlogForm";

export default function CreateBlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Create New Blog</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Draft a new article, news, or case study for your audience.
        </p>
      </div>
      
      <BlogForm />
    </div>
  );
}
