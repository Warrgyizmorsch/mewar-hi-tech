const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.mewarhitech.com";

const urls = [
  `${BASE_URL}/infrastructure`,
  `${BASE_URL}/infrastructure/manufacturing`,
  `${BASE_URL}/infrastructure/casting`,
  `${BASE_URL}/infrastructure/latest-process-machinery`,
  `${BASE_URL}/infrastructure/r-d-design`,
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
      <priority>0.7</priority>
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
