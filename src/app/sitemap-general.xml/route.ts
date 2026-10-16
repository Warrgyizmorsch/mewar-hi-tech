const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.mewarhitech.com";

const urls = [
  `${BASE_URL}`,
  `${BASE_URL}/about`,
  `${BASE_URL}/case-studies`,
  `${BASE_URL}/careers`,
  `${BASE_URL}/gallery`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/faq`,
  `${BASE_URL}/privacy-policy`,
  `${BASE_URL}/terms-of-use`,
  `${BASE_URL}/cookie-policy`,
  `${BASE_URL}/events`,
  `${BASE_URL}/industries`,
  `${BASE_URL}/industries/quarrying`,
  `${BASE_URL}/industries/mining`,
  `${BASE_URL}/industries/m-sand`,
  `${BASE_URL}/industries/road-construction`,
  `${BASE_URL}/industries/recycling`,
  `${BASE_URL}/industries/aggregates`,
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
      <lastmod>${loc === BASE_URL ? "2026-10-15" : "2026-09-10"}</lastmod>
      <changefreq>${loc === BASE_URL ? "weekly" : "monthly"}</changefreq>
      <priority>${loc === BASE_URL ? "1.0" : "0.8"}</priority>
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
