import { BLOG_POSTS } from "@/data/blog-data";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.mewarhitech.com";

export async function GET() {
  const fallbackDate = "2026-09-10";
  const urls: { loc: string; lastmod: string }[] = [
    { loc: `${BASE_URL}/blogs`, lastmod: "2026-10-15" },
  ];

  try {
    const conn = await connectToDatabase();
    if (conn) {
      const dbBlogs = await Blog.find({ published: true }, { slug: 1, updatedAt: 1 }).lean();
      dbBlogs.forEach((b: any) => {
        urls.push({
          loc: `${BASE_URL}/blogs/${b.slug}`,
          lastmod: b.updatedAt ? new Date(b.updatedAt).toISOString() : fallbackDate,
        });
      });
    }
  } catch (err) {
    console.warn("Sitemap: Failed to fetch blogs from database, using fallback:", err);
  }

  // Add static blog fallbacks if not already in urls
  BLOG_POSTS.filter((post) => post.published).forEach((post) => {
    const loc = `${BASE_URL}/blogs/${post.slug}`;
    if (!urls.some((u) => u.loc === loc)) {
      urls.push({
        loc,
        lastmod: post.publishedAt || fallbackDate,
      });
    }
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (item) => `
    <url>
      <loc>${item.loc}</loc>
      <lastmod>${item.lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
