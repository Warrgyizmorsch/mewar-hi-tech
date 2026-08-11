"use client";

import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  Filter,
  Calendar,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Send,
  User,
  Tag,
} from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  tags: string[];
  readTime: number;
  featured: boolean;
  publishedAt: string;
}

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 9,
    total: 0,
    totalPages: 0,
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [categories, setCategories] = useState<string[]>([
    "all",
    "Industry News",
    "Product Updates",
    "Engineering",
    "Case Studies",
  ]);

  const fetchBlogs = useCallback(async (page: number, cat: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "9",
        ...(cat !== "all" && { category: cat }),
      });
      const res = await fetch(`/api/blogs?${params}`);
      const data = await res.json();

      if (res.ok) {
        setBlogs(data.blogs);
        setPagination(data.pagination);
      } else {
        // Fallback to static data
        const { BLOG_POSTS } = await import("@/data/blog-data");
        const filtered = cat === "all" ? BLOG_POSTS : BLOG_POSTS.filter((b) => b.category === cat);
        setBlogs(
          filtered.map((b, i) => ({ ...b, _id: String(i) })) as BlogPost[]
        );
        setPagination({
          page: 1,
          limit: 9,
          total: filtered.length,
          totalPages: 1,
        });
      }
    } catch {
      // Fallback to static data
      const { BLOG_POSTS } = await import("@/data/blog-data");
      const filtered = cat === "all" ? BLOG_POSTS : BLOG_POSTS.filter((b) => b.category === cat);
      setBlogs(
        filtered.map((b, i) => ({ ...b, _id: String(i) })) as BlogPost[]
      );
      setPagination({
        page: 1,
        limit: 9,
        total: filtered.length,
        totalPages: 1,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const res = await fetch("/api/blogs/categories");
      const data = await res.json();
      if (res.ok && data.categories) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchBlogs(1, category);
  }, [category, fetchBlogs]);

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    fetchBlogs(1, cat);
  };

  const handlePageChange = (page: number) => {
    fetchBlogs(page, category);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!newsletterEmail) return;
      setSubscribing(true);
  
      try {
        const res = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: newsletterEmail }),
        });
  
        const data = await res.json().catch(() => ({}));
  
        if (!res.ok) {
          throw new Error(data.message || "Failed to subscribe");
        }
  
        toast.success("Successfully subscribed to newsletter!");
        setNewsletterEmail("");
      } catch (error: any) {
        toast.error(error.message || "Failed to subscribe. Please try again.");
      } finally {
        setSubscribing(false);
      }
    };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const featuredPost = blogs.find((b) => b.featured) || blogs[0];
  const gridPosts = blogs.filter((b) => b !== featuredPost);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1 select-none">
        {/* Hero */}
        <PageHero
          label="INSIGHTS & KNOWLEDGE"
          title="LATEST NEWS & ARTICLES"
          description="Industry insights, product updates, and engineering perspectives from Mewar Hi-Tech."
          image="/images/backgorund.webp"
        />

        {/* Category Filter Bar */}
        <section className="border-b border-border/60 bg-background sticky top-0 z-30">
          <Container className="py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <Filter size={15} className="text-primary" />
                <span>Filter by Category:</span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200
                      ${
                        category === cat
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-muted text-foreground border border-border hover:border-primary/50"
                      }`}
                  >
                    {cat === "all" ? "All" : cat}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {loading ? (
          /* Loading Skeleton */
          <section className="py-12 lg:py-20">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-2xl overflow-hidden animate-pulse"
                  >
                    <div className="h-[200px] bg-muted" />
                    <div className="p-5 space-y-3">
                      <div className="h-3 bg-muted rounded w-1/3" />
                      <div className="h-5 bg-muted rounded w-full" />
                      <div className="h-5 bg-muted rounded w-2/3" />
                      <div className="h-3 bg-muted rounded w-full" />
                      <div className="h-3 bg-muted rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        ) : blogs.length === 0 ? (
          /* Empty State */
          <section className="py-20">
            <Container>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Tag size={32} className="text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  No Articles Found
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  There are no articles in this category yet. Check back soon or
                  explore a different category.
                </p>
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="blob-btn mt-4"
                >
                  View All Articles
                </button>
              </div>
            </Container>
          </section>
        ) : (
          <>
            {/* Featured Article */}
            {featuredPost && (
              <section className="py-8 lg:py-14">
                <Container>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      href={`/blogs/${featuredPost.slug}`}
                      className="group block"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-5 bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        {/* Image */}
                        <div className="lg:col-span-3 relative h-[240px] sm:h-[300px] lg:h-[420px] overflow-hidden">
                          <Image
                            src={featuredPost.coverImage}
                            alt={featuredPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded-sm">
                            {featuredPost.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4 lg:space-y-5">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-[2.5px] bg-primary rounded-full" />
                            <span className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                              FEATURED ARTICLE
                            </span>
                          </div>

                          <h2 className="common-heading text-xl sm:text-2xl lg:text-3xl text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                            {featuredPost.title}
                          </h2>

                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={13} />
                              {formatDate(featuredPost.publishedAt)}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                              <User size={13} />
                              {featuredPost.author.name}
                            </span>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {featuredPost.excerpt}
                          </p>

                          <div className="pt-2">
                            <span className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                              READ FULL ARTICLE
                              <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </Container>
              </section>
            )}

            {/* Blog Grid */}
            {gridPosts.length > 0 && (
              <section className="py-8 lg:py-14 bg-muted/30">
                <Container>
                  {/* Section Header */}
                  <div className="text-center space-y-3 mb-10">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                      <span className="text-primary font-bold text-xs uppercase tracking-widest font-sans">
                        LATEST ARTICLES
                      </span>
                    </div>
                    <h2 className="common-heading text-2xl sm:text-3xl lg:text-5xl text-foreground">
                      EXPLORE OUR{" "}
                      <span className="text-primary">INSIGHTS</span>
                    </h2>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {gridPosts.map((post, idx) => (
                      <motion.div
                        key={post._id || idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                      >
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="group block h-full"
                        >
                          <div className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                            {/* Card Image */}
                            <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
                              <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                              <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-widest rounded-sm">
                                {post.category}
                              </span>
                              <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 text-white text-[9px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1">
                                <Clock size={10} />
                                {post.readTime} MIN
                              </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-4 sm:p-5 flex flex-col flex-1 space-y-3">
                              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                                <Calendar size={11} />
                                {formatDate(post.publishedAt)}
                              </div>

                              <h3 className="common-heading text-base sm:text-lg text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                {post.title}
                              </h3>

                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                                {post.excerpt}
                              </p>

                              {/* Card Footer */}
                              <div className="flex items-center justify-between pt-3 border-t border-border/60">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                                    <User
                                      size={12}
                                      className="text-secondary-foreground"
                                    />
                                  </div>
                                  <span className="text-[11px] font-medium text-foreground">
                                    {post.author.name}
                                  </span>
                                </div>
                                <span className="text-primary font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                                  READ MORE
                                  <ArrowRight size={12} />
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {pagination.totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-12">
                      <button
                        onClick={() =>
                          handlePageChange(pagination.page - 1)
                        }
                        disabled={pagination.page <= 1}
                        className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      {Array.from(
                        { length: pagination.totalPages },
                        (_, i) => i + 1
                      ).map((p) => (
                        <button
                          key={p}
                          onClick={() => handlePageChange(p)}
                          className={`w-9 h-9 rounded-lg text-xs font-bold transition-colors
                            ${
                              p === pagination.page
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "border border-border text-foreground hover:border-primary hover:text-primary"
                            }`}
                        >
                          {p}
                        </button>
                      ))}

                      <button
                        onClick={() =>
                          handlePageChange(pagination.page + 1)
                        }
                        disabled={
                          pagination.page >= pagination.totalPages
                        }
                        className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </Container>
              </section>
            )}
          </>
        )}

        {/* Newsletter Section */}
        <section className="py-12 lg:py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/backgorund.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="w-6 h-[2.5px] bg-primary rounded-full" />
                  <span className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                    STAY UPDATED
                  </span>
                </div>
                <h2 className="common-heading text-2xl sm:text-3xl lg:text-4xl text-white">
                  SUBSCRIBE TO OUR{" "}
                  <span className="text-primary">NEWSLETTER</span>
                </h2>
                <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
                  Get the latest industry insights and product updates delivered
                  directly to your inbox.
                </p>
              </div>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0 lg:ml-auto w-full"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <BlobButton type="submit" disabled={subscribing}>
                  <Send size={14} />
                  {subscribing ? "SUBSCRIBING..." : "SUBSCRIBE"}
                </BlobButton>
              </form>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
