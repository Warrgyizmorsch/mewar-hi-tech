import { BLOG_POSTS } from "@/data/blog-data";
import { PRODUCTS_DATA } from "@/app/products/data";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.mewarhitech.com";

const urls = [
  `${BASE_URL}`,
  `${BASE_URL}/about`,
  `${BASE_URL}/products`,
  `${BASE_URL}/products/double-toggle-oil-jaw-crusher`,
  `${BASE_URL}/products/single-toggle-grease-jaw-crusher`,
  `${BASE_URL}/products/double-toggle-grease-jaw-crusher`,
  `${BASE_URL}/products/cone-crusher`,
  `${BASE_URL}/products/roll-crusher`,
  `${BASE_URL}/products/horizontal-shaft-impactor`,
  `${BASE_URL}/products/vertical-shaft-impactor`,
  `${BASE_URL}/products/sand-making-machine`,
  `${BASE_URL}/products/vibrating-screen`,
  `${BASE_URL}/products/sand-washer`,
  `${BASE_URL}/products/belt-conveyor`,
  `${BASE_URL}/products/vibro-feeder`,
  `${BASE_URL}/products/single-shaft-feeders`,
  `${BASE_URL}/services`,
  `${BASE_URL}/services/after-sales`,
  `${BASE_URL}/services/spare-parts`,
  `${BASE_URL}/services/erection-commissioning`,
  `${BASE_URL}/projects`,
  `${BASE_URL}/projects/stationery-projects`,
  `${BASE_URL}/projects/track-mounted-mobile-projects`,
  `${BASE_URL}/projects/wheel-mounted-mobile-projects`,
  `${BASE_URL}/industries`,
  `${BASE_URL}/infrastructure`,
  `${BASE_URL}/infrastructure/manufacturing`,
  `${BASE_URL}/infrastructure/casting`,
  `${BASE_URL}/infrastructure/latest-process-machinery`,
  `${BASE_URL}/infrastructure/r-d-design`,
  `${BASE_URL}/case-studies`,
  `${BASE_URL}/blogs`,
  ...BLOG_POSTS.filter((post) => post.published).map((post) => `${BASE_URL}/blogs/${post.slug}`),
  `${BASE_URL}/careers`,
  `${BASE_URL}/gallery`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/faq`,
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
  `${BASE_URL}/privacy-policy`,
  `${BASE_URL}/terms-of-use`,
  `${BASE_URL}/cookie-policy`,
  `${BASE_URL}/3d-experience`,
  ...PRODUCTS_DATA.map((product) => `${BASE_URL}/products/${product.slug}`),
];

const uniqueUrls = [...new Set(urls)];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${uniqueUrls
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
