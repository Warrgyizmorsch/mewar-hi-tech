import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { BLOG_POSTS } from "@/data/blog-data";

export const dynamic = "force-dynamic";

// POST /api/blogs/seed - Seed blog posts from static data
export async function POST() {
  try {
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
      { message: "Error seeding blogs: " + (error.message || "Unknown error") },
      { status: 500 }
    );
  }
}
