import { PRODUCTS_DATA } from "@/app/products/data";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.mewarhitech.com";

const urls = [
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
  ...PRODUCTS_DATA.map((product) => `${BASE_URL}/products/${product.slug}`),
];

const uniqueUrls = [...new Set(urls)];

export async function GET() {
  const currentDate = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${uniqueUrls
    .map(
      (loc) => `
    <url>
      <loc>${loc}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
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
