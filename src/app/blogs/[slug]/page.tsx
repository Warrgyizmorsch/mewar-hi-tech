"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import BlobButton from "@/components/ui/BlobButton";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  BookOpen,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

interface BlogPost {
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

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setBlog(data.blog);
          fetchRelated(data.blog.category, data.blog.slug);
        } else {
          toast.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelated = async (category: string, currentSlug: string) => {
      try {
        const params = new URLSearchParams({ category, limit: "4" });
        const res = await fetch(`/api/blogs?${params}`);
        if (res.ok) {
          const data = await res.json();
          setRelatedBlogs(data.blogs.filter((b: BlogPost) => b.slug !== currentSlug).slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching related blogs", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/blogs/categories");
        if (res.ok) {
          const data = await res.json();
          setCategories(data.categories.filter((c: string) => c !== "all"));
        }
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchBlog();
    fetchCategories();
  }, [slug]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const sanitizeHtml = (html: string) => {
    if (!html) return "";
    let processed = html;
    if (processed.includes("&lt;h2") || processed.includes("&lt;p") || processed.includes("&lt;h3")) {
      processed = processed.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      processed = processed.replace(/<p>\s*(<h\d[^>]*>)/g, "$1").replace(/(<\/h\d>)\s*<\/p>/g, "$1");
    }
    return processed;
  };

  const extractHeadings = (rawHtml: string) => {
    const html = sanitizeHtml(rawHtml);
    const matches = html.match(/<h2>(.*?)<\/h2>/g) || [];
    return matches.map((m) => {
      let text = m.replace(/<[^>]+>/g, "");
      text = text
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      return { text, id };
    });
  };

  const processContent = (rawHtml: string) => {
    let html = sanitizeHtml(rawHtml);
    if (!html) return "";

    // 1. Auto-convert standalone bold paragraphs into H2
    html = html.replace(/<p>\s*<strong>(.*?)<\/strong>\s*<\/p>/gi, "<h2>$1</h2>");
    
    // 2. Convert bold text followed immediately by a <br> into H2 (fixes pasted PDF content)
    html = html.replace(/<strong>(.*?)<\/strong>\s*<br\s*\/?>/gi, "<h2>$1</h2>");
    
    // Auto-convert standalone bold paragraphs into H2 for users who didn't use heading formats
    html = html.replace(/<p>\s*<b>(.*?)<\/b>\s*<\/p>/gi, "<h2>$1</h2>");

    return html.replace(/<h2>(.*?)<\/h2>/g, (original, text) => {
      let cleanText = text.replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
      const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      return `<h2 id="${id}">${text}</h2>`;
    });
  };

  useEffect(() => {
    if (loading || !blog) return;

    const handleScroll = () => {
      const headings = Array.from(document.querySelectorAll("article h2"));
      if (!headings.length) return;

      // Find the heading that is closest to the top of the viewport
      let currentActiveId = headings[0].id;
      const scrollPosition = window.scrollY;
      const headerOffset = 150; // offset for the fixed header

      headings.forEach((heading) => {
        const offsetTop = heading.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= offsetTop - headerOffset) {
          currentActiveId = heading.id;
        }
      });

      setActiveHeading(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, blog]);

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        toast.error("Failed to submit enquiry.");
      }
    } catch {
      toast.error("Failed to submit enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <Header />
        <main className="flex-1 py-32">
          <Container>
            <div className="max-w-4xl mx-auto space-y-6 animate-pulse">
              <div className="h-12 bg-muted rounded w-2/3" />
              <div className="h-6 bg-muted rounded w-1/3" />
              <div className="h-[400px] bg-muted rounded-2xl" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Article Not Found</h2>
            <Link href="/blogs" className="blob-btn inline-flex items-center gap-2 mt-4">
              <ArrowLeft size={14} /> Back to Blogs
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const headings = extractHeadings(blog.content);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <title>{blog.metaTitle || `${blog.title} | Mewar Hi-Tech`}</title>
      <meta name="description" content={blog.metaDescription || blog.excerpt} />
      <Header />

      <main className="flex-1 pt-32 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <article className="lg:col-span-8 space-y-8">
              {/* Category & Title */}
              <header className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                  <Tag size={14} />
                  {blog.category}
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-foreground leading-tight">
                  {blog.title}
                </h1>
                
                {/* Author & Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground py-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-muted relative">
                      <Image src={blog.author.avatar || "/images/logo.png"} alt={blog.author.name} fill className="object-cover" />
                    </div>
                    <span className="font-medium text-foreground">{blog.author.name}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{formatDate(blog.publishedAt)}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} />
                    <span>{blog.readTime} min read</span>
                  </div>
                </div>
              </header>

              {/* Cover Image */}
              <div className="relative aspect-video md:aspect-[2/1] rounded-2xl overflow-hidden shadow-lg border border-border">
                <Image src={blog.coverImage} alt={blog.title} fill priority className="object-cover" />
              </div>

              <div
                className="prose max-w-none text-muted-foreground text-[15px] sm:text-base leading-[1.8] font-sans break-words
                  prose-headings:font-bold prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-5 prose-headings:leading-snug
                  prose-h2:text-lg prose-h2:sm:text-xl prose-h2:md:text-2xl
                  prose-h3:text-base prose-h3:sm:text-lg prose-h3:md:text-xl
                  prose-p:text-muted-foreground prose-p:text-[15px] prose-p:sm:text-base prose-p:leading-[1.8] prose-p:mb-5
                  prose-ul:my-5 prose-ul:list-disc prose-ul:pl-5
                  prose-li:text-muted-foreground prose-li:text-[15px] prose-li:sm:text-base prose-li:leading-[1.8] prose-li:mb-2 prose-li:marker:text-primary
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-muted-foreground
                  prose-a:text-primary prose-a:font-semibold hover:prose-a:underline
                  prose-table:block prose-table:overflow-x-auto prose-table:w-full prose-table:border-collapse prose-table:border prose-table:border-border prose-table:my-6 prose-table:rounded-lg
                  prose-th:bg-muted prose-th:text-left prose-th:p-4 prose-th:border prose-th:border-border prose-th:text-foreground prose-th:font-semibold prose-th:whitespace-nowrap
                  prose-td:p-4 prose-td:border prose-td:border-border prose-td:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: processContent(blog.content) }}
              />



              {/* Tags & Share */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-border mt-10">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag size={20} className="text-muted-foreground" />
                  <span className="text-[12px] font-bold uppercase text-muted-foreground mr-2">Tags:</span>
                  <span className="bg-primary/10 text-primary text-[12px] px-3 py-1 rounded-sm uppercase font-bold">{blog.category}</span>
                  {blog.tags.map((tag) => (
                    <span key={tag} className="bg-muted text-foreground text-[12px] px-3 py-1 rounded-sm uppercase font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-bold uppercase text-muted-foreground">Share:</span>
                  <div className="flex items-center gap-2">
                    {[
                      { name: "Twitter", icon: <Twitter size={14} /> },
                      { name: "LinkedIn", icon: <Linkedin size={14} /> },
                      { name: "Facebook", icon: <Facebook size={14} /> },
                      { name: "Instagram", icon: <Instagram size={14} /> },
                    ].map((platform) => (
                      <button
                        key={platform.name}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                        title={`Share on ${platform.name}`}
                      >
                        {platform.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Right Column - Sidebar */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 lg:self-start">


              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="hidden lg:block bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                    <BookOpen size={14} className="text-primary" /> Table of Contents
                  </h3>
                  <nav className="space-y-2 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border rounded-full" />
                    {headings.map((heading, i) => {
                      const isActive = activeHeading === heading.id;
                      return (
                        <a
                          key={i}
                          href={`#${heading.id}`}
                          onClick={(e) => scrollToHeading(e, heading.id)}
                          className={`block text-xs sm:text-sm transition-all py-1.5 pl-4 relative ${
                            isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeTOC"
                              className="absolute left-[0px] top-0 bottom-0 w-[2px] bg-primary rounded-full z-10"
                              initial={false}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          {heading.text}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              )}



              {/* Categories */}
              {categories && categories.length > 0 && (
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((cat, idx) => (
                      <Link key={idx} href={`/blogs?category=${encodeURIComponent(cat)}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Useful Links */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Useful Links</h3>
                <div className="space-y-3">
                  {[
                    { label: "Case Studies", href: "/case-studies" },
                    { label: "Our Products", href: "/products" },
                    { label: "About Mewar Hi-Tech", href: "/about" },
                    { label: "Infrastructure", href: "/infrastructure" },
                    { label: "Our Services", href: "/services" },
                    { label: "Contact Us", href: "/contact" },
                  ].map((link, idx) => (
                    <Link key={idx} href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </Container>
      </main>

      {/* FAQs Section at Bottom */}
      {blog.faqs && blog.faqs.length > 0 && (
        <section className="bg-muted py-12 lg:py-16 xl:py-20 border-t border-border/30">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4 font-heading">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-[13px] sm:text-sm lg:text-base">Helpful answers to common questions about our articles and academic guidance.</p>
              </div>
              <div className="space-y-4">
                {blog.faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex text-left items-center gap-3 xl:gap-4 p-4 sm:p-5 xl:p-6 text-foreground font-semibold text-[14px] sm:text-[15px] xl:text-[17px] hover:bg-muted/50 transition-colors"
                      >
                        <div className="shrink-0 text-primary">
                          <svg className="w-4 h-4 xl:w-5 xl:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                          </svg>
                        </div>
                        <span className="flex-1">{faq.question}</span>
                        <span className={`shrink-0 transition-transform duration-300 text-muted-foreground ${isOpen ? "rotate-180" : ""}`}>
                          <svg className="w-4 h-4 xl:w-5 xl:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-5 xl:px-6 pb-4 xl:pb-6 pt-2 text-muted-foreground border-t border-border ml-[28px] sm:ml-[32px] xl:ml-[44px]">
                              <div className="prose max-w-none prose-p:text-muted-foreground prose-a:text-primary text-[13px] sm:text-[14px] xl:text-[16px] leading-[1.7]" dangerouslySetInnerHTML={{ __html: sanitizeHtml(faq.answer) }} />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Related Blogs Section */}
      {relatedBlogs && relatedBlogs.length > 0 && (
        <section className="py-12 lg:py-16 bg-background border-t border-border/30">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8 lg:mb-10">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-heading">Related Articles</h2>
                  <p className="text-muted-foreground mt-2 text-[13px] sm:text-sm">More from {blog.category}</p>
                </div>
                <Link href={`/blogs?category=${encodeURIComponent(blog.category)}`} className="hidden sm:inline-flex items-center gap-2 text-primary font-bold hover:underline text-sm">
                  View All <ArrowLeft size={16} className="rotate-180" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedBlogs.map((post, index) => (
                  <Link key={index} href={`/blogs/${post.slug}`} className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border flex flex-col h-full">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col bg-transparent">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-[11px] sm:text-xs text-muted-foreground font-medium pt-4 border-t border-border mt-auto">
                        <span className="flex items-center gap-1.5"><Calendar size={14}/> {formatDate(post.publishedAt)}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14}/> {post.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="py-12 lg:py-16 bg-background">
        <Container>
          <div className="bg-muted rounded-3xl p-6 lg:p-8 xl:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 shadow-sm border border-border">
            
            {/* Left: Icon & Text */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 lg:gap-8 flex-1">
              <div className="shrink-0">
                {/* Email / Newsletter Icon */}
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-background rounded-xl lg:rounded-2xl shadow-sm border border-border flex items-center justify-center text-primary">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
              </div>
              
              <div className="max-w-xl">
                <h3 className="text-[15px] sm:text-base xl:text-xl font-bold text-foreground mb-1.5 lg:mb-2 leading-snug">
                  Subscribe to our Newsletter for the latest industry insights and product updates.
                </h3>
                <p className="text-muted-foreground text-[13px] sm:text-[14px] xl:text-base">
                  Get updates delivered directly to your inbox. Stay ahead in your field!
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full lg:w-auto shrink-0">
              <form onSubmit={handleEnquirySubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md ml-auto">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="Enter email address..."
                  className="bg-background border border-border text-foreground placeholder:text-muted-foreground px-4 lg:px-5 py-3 lg:py-3.5 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full sm:min-w-[220px] lg:min-w-[250px] shadow-sm text-[13px] lg:text-sm"
                />
                <BlobButton
                  type="submit"
                  disabled={isSubmitting}
                  className="!px-5 lg:!px-10 !py-3 lg:!py-3.5 !rounded-xl !text-[10px] lg:!text-[12px] !tracking-wide flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
                >
                  {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE NOW →"}
                </BlobButton>
              </form>
            </div>

          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
