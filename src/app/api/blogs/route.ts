import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";

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

// POST /api/blogs - Create a new blog post
export async function POST(req: NextRequest) {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed" },
        { status: 503 }
      );
    }

    const body = await req.json();
    console.log("Received body in POST /api/blogs:", JSON.stringify({ metaTitle: body.metaTitle, faqs: body.faqs }));

    // Generate slug if not provided
    if (!body.slug) {
      body.slug = body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    const blog = new Blog(body);
    await blog.save();
    console.log("Saved blog to DB:", JSON.stringify({ metaTitle: blog.metaTitle, faqs: blog.faqs }));

    return NextResponse.json(
      { message: "Blog created successfully", blog },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Internal server error: " + (error.message || "Unknown error") },
      { status: 500 }
    );
  }
}
