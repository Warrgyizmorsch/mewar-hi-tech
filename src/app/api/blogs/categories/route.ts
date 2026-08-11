import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    // Get unique categories from published blogs
    const categories = await Blog.distinct("category", { published: true });
    
    // Always include 'all' as the first category, then sort the rest alphabetically (removing any 'all' from db)
    const sortedCategories = ["all", ...categories.filter(c => c.toLowerCase() !== "all").sort()];

    return NextResponse.json({ categories: sortedCategories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Fallback to default categories if DB fails
    return NextResponse.json({ 
      categories: ["all", "Industry News", "Product Updates", "Engineering", "Case Studies"]
    });
  }
}
