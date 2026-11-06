import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { isAdminAuthorized } from "@/lib/auth";
import { getCache, setCache, invalidateCache } from "@/lib/cache";

export const dynamic = "force-dynamic";

// GET /api/blogs/[slug] - Get single blog by slug or ID (Public)
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);

    const cacheKey = `blog_detail_${decodedSlug}`;
    const cachedBlog = getCache<any>(cacheKey);

    if (cachedBlog) {
      return NextResponse.json(
        { blog: cachedBlog },
        {
          headers: {
            "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
            "X-Cache": "HIT",
          },
        }
      );
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed" },
        { status: 503 }
      );
    }

    const isObjectId = mongoose.Types.ObjectId.isValid(decodedSlug);
    const query: any = isObjectId
      ? { $or: [{ _id: decodedSlug }, { slug: decodedSlug }], published: true }
      : { slug: decodedSlug, published: true };

    const blog = await Blog.findOne(query).lean();

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    setCache(cacheKey, blog, 120);

    return NextResponse.json(
      { blog },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
          "X-Cache": "MISS",
        },
      }
    );
  } catch (error: any) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[slug] - Update blog post by slug or ID (Admin Only)
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
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

    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { message: "Invalid JSON request body" },
        { status: 400 }
      );
    }

    // Strip immutable and metadata fields
    const { _id, id, createdAt, updatedAt, __v, ...updateData } = body;

    const isObjectId = mongoose.Types.ObjectId.isValid(decodedSlug);
    const filter = isObjectId
      ? { $or: [{ _id: decodedSlug }, { slug: decodedSlug }] }
      : { slug: decodedSlug };

    const blog = await Blog.findOneAndUpdate(
      filter,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    invalidateCache("blogs");
    invalidateCache("blog_categories");
    invalidateCache(`blog_detail_${decodedSlug}`);
    if (blog.slug) invalidateCache(`blog_detail_${blog.slug}`);

    try {
      revalidatePath("/blogs");
      revalidatePath(`/blogs/${decodedSlug}`);
      if (blog.slug && blog.slug !== decodedSlug) {
        revalidatePath(`/blogs/${blog.slug}`);
      }
    } catch (e) {
      // Ignore in non-ISR contexts
    }

    return NextResponse.json({ message: "Blog updated successfully", blog });
  } catch (error: any) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { message: error.message || "Failed to update blog post" },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[slug] - Delete blog post by slug or ID (Admin Only)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
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

    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const isObjectId = mongoose.Types.ObjectId.isValid(decodedSlug);
    const filter = isObjectId
      ? { $or: [{ _id: decodedSlug }, { slug: decodedSlug }] }
      : { slug: decodedSlug };

    const blog = await Blog.findOneAndDelete(filter);

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    invalidateCache("blogs");
    invalidateCache("blog_categories");
    invalidateCache(`blog_detail_${decodedSlug}`);
    if (blog.slug) invalidateCache(`blog_detail_${blog.slug}`);

    try {
      revalidatePath("/blogs");
      revalidatePath(`/blogs/${decodedSlug}`);
    } catch (e) {
      // Ignore in non-ISR contexts
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { message: error.message || "Failed to delete blog post" },
      { status: 500 }
    );
  }
}

