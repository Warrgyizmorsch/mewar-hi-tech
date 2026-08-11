import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

// GET /api/blogs/[slug] - Get single blog by slug
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed" },
        { status: 503 }
      );
    }

    const { slug } = await params;
    const blog = await Blog.findOne({ slug, published: true });

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog });
  } catch (error: any) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[slug] - Update blog post
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed" },
        { status: 503 }
      );
    }

    const { slug } = await params;
    const body = await req.json();
    console.log("Received body in PUT /api/blogs/[slug]:", JSON.stringify({ metaTitle: body.metaTitle, faqs: body.faqs }));

    const blog = await Blog.findOneAndUpdate({ slug }, body, { new: true });
    if (blog) {
      console.log("Updated blog in DB:", JSON.stringify({ metaTitle: blog.metaTitle, faqs: blog.faqs }));
    }
    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Blog updated successfully", blog });
  } catch (error: any) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[slug] - Delete blog post
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed" },
        { status: 503 }
      );
    }

    const { slug } = await params;
    const blog = await Blog.findOneAndDelete({ slug });

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
