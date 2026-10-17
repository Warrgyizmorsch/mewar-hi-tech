"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Save, ArrowLeft } from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";
import SelectionDropdown from "@/components/ui/SelectionDropdown";
import Link from "next/link";
import "react-quill-new/dist/quill.snow.css";
import { toast } from "react-toastify";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
  category: string;
  tags: string;
  readTime: number;
  featured: boolean;
  published: boolean;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

function getInitialFormData(initialData: any): BlogFormData {
  return {
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    coverImage: initialData?.coverImage || "",
    metaTitle: initialData?.metaTitle || initialData?.seoTitle || initialData?.meta_title || "",
    metaDescription: initialData?.metaDescription || initialData?.seoDescription || initialData?.meta_description || "",
    faqs: Array.isArray(initialData?.faqs)
      ? initialData.faqs.map((f: any) => ({
          question: f?.question || "",
          answer: f?.answer || "",
        }))
      : [],
    category: initialData?.category || "",
    tags: Array.isArray(initialData?.tags)
      ? initialData.tags.join(", ")
      : typeof initialData?.tags === "string"
      ? initialData.tags
      : "",
    readTime: Number(initialData?.readTime) || 5,
    featured: Boolean(initialData?.featured),
    published: initialData?.published !== undefined ? Boolean(initialData.published) : true,
    author: {
      name: initialData?.author?.name || "Admin",
      title: initialData?.author?.title || "Content Team",
      avatar: initialData?.author?.avatar || "/images/placeholders/avatar.jpg",
    },
  };
}

export default function BlogForm({ initialData = null }: { initialData?: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const [categories, setCategories] = useState<string[]>(() => {
    const defaultList = [
      "Industry News",
      "Product Updates",
      "Engineering",
      "Case Studies",
      "Sand & Washing Systems",
      "Crushing & Screening",
    ];
    if (initialData?.category && !defaultList.includes(initialData.category)) {
      return [initialData.category, ...defaultList];
    }
    return defaultList;
  });

  const [formData, setFormData] = useState(() => getInitialFormData(initialData));

  useEffect(() => {
    // Sync state if initialData changes
    if (initialData) {
      setFormData(getInitialFormData(initialData));
      if (initialData.category) {
        setCategories((prev) => Array.from(new Set([initialData.category, ...prev])));
      }
    }
  }, [initialData]);

  useEffect(() => {
    // Fetch available categories from database
    fetch("/api/blogs/categories")
      .then((res) => res.json())
      .then((data) => {
        if (data.categories) {
          const fetchedCats = data.categories.filter((c: string) => c !== "all");
          setCategories((prev) => Array.from(new Set([...prev, ...fetchedCats])));
        }
      })
      .catch((err) => console.warn("Failed to fetch categories:", err));
  }, []);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title), // Only auto-generate if slug is empty
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const cleanFaqs = (formData.faqs || [])
        .map((f: { question: string; answer: string }) => ({
          question: (f.question || "").trim(),
          answer: (f.answer || "").trim(),
        }))
        .filter((f: { question: string; answer: string }) => f.question || f.answer);

      const payload = {
        title: (formData.title || "").trim(),
        slug: (formData.slug || "").trim(),
        excerpt: (formData.excerpt || "").trim(),
        content: formData.content || "",
        coverImage: (formData.coverImage || "").trim() || "/images/backgorund.webp",
        metaTitle: (formData.metaTitle || "").trim(),
        metaDescription: (formData.metaDescription || "").trim(),
        faqs: cleanFaqs,
        category: newCategory.trim() || formData.category || "Industry News",
        tags: (typeof formData.tags === "string" ? formData.tags : "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        readTime: Number(formData.readTime) || 5,
        featured: Boolean(formData.featured),
        published: Boolean(formData.published),
        author: {
          name: (formData.author?.name || "").trim() || "Admin",
          title: (formData.author?.title || "").trim() || "Content Team",
          avatar: (formData.author?.avatar || "").trim() || "/images/placeholders/avatar.jpg",
        },
      };

      const identifier = initialData?._id || initialData?.slug;
      const url = initialData
        ? `/api/blogs/${encodeURIComponent(identifier)}`
        : "/api/blogs";
      const method = initialData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(`Blog ${initialData ? "updated" : "created"} successfully!`);
        router.push("/admin/blogs");
        router.refresh();
      } else {
        toast.error(data.message || data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Failed to save blog:", error);
      toast.error("Failed to save blog.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'avatar') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (type === 'cover') setUploadingImage(true);
    else setUploadingAvatar(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      
      if (res.ok && data.url) {
        if (type === 'cover') {
          setFormData((prev) => ({ ...prev, coverImage: data.url }));
        } else {
          setFormData((prev) => ({ ...prev, author: { ...prev.author, avatar: data.url } }));
        }
        toast.success("Image uploaded successfully");
      } else {
        toast.error(data.error || "Upload failed");
      }
    } catch {
      toast.error("Upload failed");
    } finally {
      if (type === 'cover') setUploadingImage(false);
      else setUploadingAvatar(false);
    }
  };

  // ReactQuill modules configuration for toolbar
  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }], // Use H2 for Table of Contents
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <Link
          href="/admin/blogs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} /> Back to Blogs
        </Link>
        <BlobButton type="submit" disabled={loading} className="px-6 py-2">
          <Save size={16} />
          {loading ? "Saving..." : "Save Blog"}
        </BlobButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">
              Basic Information
            </h3>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Title
              </label>
              <input
                type="text"
                required
                value={formData.title || ""}
                onChange={handleTitleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                placeholder="Enter blog title"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Slug (URL)
              </label>
              <input
                type="text"
                required
                value={formData.slug || ""}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                placeholder="enter-blog-slug"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Excerpt
              </label>
              <textarea
                required
                rows={3}
                value={formData.excerpt || ""}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
                placeholder="Short description for the blog card..."
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">
              Blog Content
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Tip: Use Heading 2 (H2) for main sections. The Table of Contents is automatically generated from H2 tags.
            </p>
            <div className="bg-background text-foreground h-[500px] rounded-lg overflow-hidden [&_.ql-toolbar]:bg-muted [&_.ql-toolbar]:border-border [&_.ql-container]:border-border [&_.ql-editor]:min-h-[450px]">
              <ReactQuill
                theme="snow"
                value={formData.content || ""}
                onChange={(val) => setFormData({ ...formData, content: val })}
                modules={modules}
                className="h-full"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">
              SEO Information
            </h3>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Meta Title
              </label>
              <input
                type="text"
                value={formData.metaTitle || ""}
                onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                placeholder="SEO Title (e.g. Best Crushing Equipment 2026)"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Meta Description
              </label>
              <textarea
                rows={3}
                value={formData.metaDescription || ""}
                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
                placeholder="SEO Description (shows in Google search results)"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-2 mb-4">
              <h3 className="text-lg font-bold text-foreground">
                FAQs
              </h3>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, faqs: [...(formData.faqs || []), { question: "", answer: "" }] })}
                className="text-sm font-bold text-primary hover:text-primary/80 transition-colors"
              >
                + Add FAQ
              </button>
            </div>
            
            <div className="space-y-6">
              {(formData.faqs || []).map((faq: { question: string; answer: string }, index: number) => (
                <div key={index} className="space-y-4 p-4 border border-border rounded-lg bg-background/50 relative">
                  <button
                    type="button"
                    onClick={() => {
                      const newFaqs = [...(formData.faqs || [])];
                      newFaqs.splice(index, 1);
                      setFormData({ ...formData, faqs: newFaqs });
                    }}
                    className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                  <div className="space-y-2 pr-16">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                      Question
                    </label>
                    <input
                      type="text"
                      value={faq.question || ""}
                      onChange={(e) => {
                        const newFaqs = [...(formData.faqs || [])];
                        newFaqs[index] = { ...(newFaqs[index] || {}), question: e.target.value };
                        setFormData({ ...formData, faqs: newFaqs });
                      }}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                      placeholder="e.g. How does this product work?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                      Answer
                    </label>
                    <textarea
                      value={faq.answer || ""}
                      onChange={(e) => {
                        const newFaqs = [...(formData.faqs || [])];
                        newFaqs[index] = { ...(newFaqs[index] || {}), answer: e.target.value };
                        setFormData({ ...formData, faqs: newFaqs });
                      }}
                      rows={4}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
                      placeholder="Write the answer here..."
                    />
                  </div>
                </div>
              ))}
              {(formData.faqs || []).length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">No FAQs added yet. Click "+ Add FAQ" to create one.</p>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Status & Visibility */}
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">
              Status & Visibility
            </h3>
            
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(formData.published)}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm font-medium text-foreground">Published</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(formData.featured)}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm font-medium text-foreground">Featured (Hero Blog)</span>
            </label>
          </div>

          {/* Categorization */}
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">
              Categorization
            </h3>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Category
              </label>
              <SelectionDropdown
                value={formData.category || ""}
                onChange={(val) => setFormData({ ...formData, category: val })}
                options={categories}
                placeholder="Select a category..."
                className="w-full text-foreground"
              />
              <div className="text-xs text-muted-foreground text-center my-1">OR</div>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Create new category"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Tags (Comma separated)
              </label>
              <input
                type="text"
                value={formData.tags || ""}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                placeholder="Industry, Mining, Safety"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Read Time (Mins)
              </label>
              <input
                type="number"
                min="1"
                value={formData.readTime ?? 5}
                onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) || 5 })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Media */}
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">
              Cover Image
            </h3>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Upload Image</label>
              <div className="flex gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'cover')}
                  disabled={uploadingImage}
                  className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-colors"
                />
              </div>
              {uploadingImage && <p className="text-xs text-muted-foreground">Uploading...</p>}
              
              <div className="text-xs text-muted-foreground text-center my-1">OR</div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.coverImage || ""}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
                  placeholder="Paste Image URL here..."
                />
              </div>
              {formData.coverImage && (
                <div className="mt-4 relative aspect-video rounded-lg overflow-hidden border border-border">
                  <Image src={formData.coverImage} alt="Cover Preview" className="object-cover w-full h-full" loading="lazy" width={800} height={600} />
                </div>
              )}
            </div>
          </div>

          {/* Author */}
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">
              Author Details
            </h3>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Name</label>
              <input
                type="text"
                required
                value={formData.author?.name || ""}
                onChange={(e) => setFormData({ ...formData, author: { ...(formData.author || {}), name: e.target.value } as any })}
                className="w-full px-3 py-1.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Title/Role</label>
              <input
                type="text"
                required
                value={formData.author?.title || ""}
                onChange={(e) => setFormData({ ...formData, author: { ...(formData.author || {}), title: e.target.value } as any })}
                className="w-full px-3 py-1.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Upload Avatar</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'avatar')}
                disabled={uploadingAvatar}
                className="w-full text-xs text-muted-foreground file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-colors"
              />
              {uploadingAvatar && <p className="text-xs text-muted-foreground">Uploading...</p>}
              <div className="text-xs text-muted-foreground text-center my-1">OR URL</div>
              <input
                type="text"
                value={formData.author?.avatar || ""}
                onChange={(e) => setFormData({ ...formData, author: { ...(formData.author || {}), avatar: e.target.value } as any })}
                className="w-full px-3 py-1.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
                placeholder="/images/placeholders/avatar.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
