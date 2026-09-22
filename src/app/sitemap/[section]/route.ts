import { BLOG_POSTS } from "@/data/blog-data";
import { PRODUCTS_DATA } from "@/app/products/data";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.mewarhitech.com";

const productUrls = PRODUCTS_DATA.map((product) => ({
  loc: `${BASE_URL}/products/${product.slug}`,
  lastmod: new Date().toISOString(),
  changefreq: "monthly",
  priority: "0.8",
}));

const blogUrls = BLOG_POSTS.filter((post) => post.published).map((post) => ({
  loc: `${BASE_URL}/blogs/${post.slug}`,
  lastmod: new Date(post.publishedAt).toISOString(),
  changefreq: "monthly",
  priority: "0.7",
}));

const sectionData: Record<string, { loc: string[] }> = {
  products: {
    loc: productUrls.map((item) => item.loc),
  },
  blogs: {
    loc: blogUrls.map((item) => item.loc),
  },
  services: {
    loc: [
      `${BASE_URL}/services`,
      `${BASE_URL}/services/after-sales`,
      `${BASE_URL}/services/spare-parts`,
      `${BASE_URL}/services/erection-commissioning`,
    ],
  },
  projects: {
    loc: [
      `${BASE_URL}/projects`,
      `${BASE_URL}/projects/stationery-projects`,
      `${BASE_URL}/projects/track-mounted-mobile-projects`,
      `${BASE_URL}/projects/wheel-mounted-mobile-projects`,
    ],
  },
  infrastructure: {
    loc: [
      `${BASE_URL}/infrastructure`,
      `${BASE_URL}/infrastructure/manufacturing`,
      `${BASE_URL}/infrastructure/casting`,
      `${BASE_URL}/infrastructure/latest-process-machinery`,
      `${BASE_URL}/infrastructure/r-d-design`,
    ],
  },
  investors: {
    loc: [
      `${BASE_URL}/investors`,
      `${BASE_URL}/investors/corporate-governance`,
      `${BASE_URL}/investors/shareholding-pattern`,
      `${BASE_URL}/investors/shareholders-meetings`,
      `${BASE_URL}/investors/board-meeting`,
      `${BASE_URL}/investors/financial-results`,
      `${BASE_URL}/investors/annual-reports`,
      `${BASE_URL}/investors/annual-returns`,
      `${BASE_URL}/investors/shareholder-information`,
      `${BASE_URL}/investors/investor-contacts`,
      `${BASE_URL}/investors/disclosure-regulation-46`,
    ],
  },
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ section: string }> }
) {
  const { section } = await params;
  const urls = sectionData[section]?.loc ?? [];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (loc) => `
    <url>
      <loc>${loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
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
