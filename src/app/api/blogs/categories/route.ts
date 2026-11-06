import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getCache, setCache } from "@/lib/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cacheKey = "blog_categories";
    const cachedCategories = getCache<string[]>(cacheKey);

    if (cachedCategories) {
      return NextResponse.json(
        { categories: cachedCategories },
        {
          headers: {
            "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
            "X-Cache": "HIT",
          },
        }
      );
    }

    await connectToDatabase();
    // Get unique categories from published blogs
    const categories = await Blog.distinct("category", { published: true });
    
    // Always include 'all' as the first category, then sort the rest alphabetically (removing any 'all' from db)
    const sortedCategories = ["all", ...categories.filter(c => c.toLowerCase() !== "all").sort()];

    setCache(cacheKey, sortedCategories, 300);

    return NextResponse.json(
      { categories: sortedCategories },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
          "X-Cache": "MISS",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Fallback to default categories if DB fails
    return NextResponse.json({ 
      categories: ["all", "Industry News", "Product Updates", "Engineering", "Case Studies"]
    });
  }
}
