const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.mewarhitech.com";

const urls = [
  `${BASE_URL}/services`,
  `${BASE_URL}/services/after-sales`,
  `${BASE_URL}/services/spare-parts`,
  `${BASE_URL}/services/erection-commissioning`,
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
