import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { isAdminAuthorized } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/blogs - List blogs with pagination and category filter
export async function GET(req: NextRequest) {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed" },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "9");
    const category = searchParams.get("category") || "";

    const query: any = { published: true };
    if (category && category !== "all") {
      query.category = category;
    }

    const total = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .select("-content");

    return NextResponse.json({
      blogs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/blogs - Create a new blog post (Admin Only)
export async function POST(req: NextRequest) {
  try {
    const isAuth = await isAdminAuthorized(req);
    if (!isAuth) {
      return NextResponse.json(
        { message: "Unauthorized. Admin authentication required." },
        { status: 401 }
      );
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed" },
        { status: 503 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { message: "Invalid JSON request body" },
        { status: 400 }
      );
    }

    if (!body || !body.title) {
      return NextResponse.json(
        { message: "Blog title is required" },
        { status: 400 }
      );
    }

    // Generate slug if not provided
    const slug = (body.slug || body.title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Sanitize and construct clean document
    const cleanFaqs = Array.isArray(body.faqs)
      ? body.faqs
          .map((f: any) => ({
            question: String(f.question || "").trim(),
            answer: String(f.answer || "").trim(),
          }))
          .filter((f: any) => f.question || f.answer)
      : [];

    const blogDoc = {
      title: body.title.trim(),
      slug,
      excerpt: body.excerpt || "",
      content: body.content || "",
      coverImage: body.coverImage || "/images/backgorund.webp",
      category: body.category || "Industry News",
      author: {
        name: body.author?.name || "Admin",
        title: body.author?.title || "Content Team",
        avatar: body.author?.avatar || "/images/placeholders/avatar.jpg",
      },
      tags: Array.isArray(body.tags) ? body.tags.map((t: any) => String(t).trim()).filter(Boolean) : [],
      readTime: Number(body.readTime) || 5,
      metaTitle: body.metaTitle || body.seoTitle || "",
      metaDescription: body.metaDescription || body.seoDescription || "",
      faqs: cleanFaqs,
      featured: Boolean(body.featured),
      published: body.published !== undefined ? Boolean(body.published) : true,
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : new Date(),
    };

    const blog = new Blog(blogDoc);
    await blog.save();

    return NextResponse.json(
      { message: "Blog created successfully", blog },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Failed to create blog post" },
      { status: 500 }
    );
  }
}

