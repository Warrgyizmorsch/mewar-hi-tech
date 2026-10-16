import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { BLOG_POSTS } from "@/data/blog-data";
import { isAdminAuthorized } from "@/lib/auth";

export const dynamic = "force-dynamic";

// POST /api/blogs/seed - Seed blog posts from static data (Admin Only)
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

    // Check if blogs already exist
    const existingCount = await Blog.countDocuments();
    if (existingCount > 0) {
      return NextResponse.json({
        message: `Database already has ${existingCount} blog posts. Skipping seed.`,
        count: existingCount,
      });
    }

    // Insert all blog posts
    const blogs = await Blog.insertMany(BLOG_POSTS);

    return NextResponse.json({
      message: `Successfully seeded ${blogs.length} blog posts`,
      count: blogs.length,
    });
  } catch (error: any) {
    console.error("Error seeding blogs:", error);
    return NextResponse.json(
      { message: "Failed to seed blog posts" },
      { status: 500 }
    );
  }
}

