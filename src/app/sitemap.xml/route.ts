const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.mewarhitech.com";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-general.xml</loc>
    <lastmod>2026-10-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-products.xml</loc>
    <lastmod>2026-09-20</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-services.xml</loc>
    <lastmod>2026-09-01</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-blogs.xml</loc>
    <lastmod>2026-10-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-projects.xml</loc>
    <lastmod>2026-09-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-infrastructure.xml</loc>
    <lastmod>2026-08-20</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-investors.xml</loc>
    <lastmod>2026-09-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-3d-experience.xml</loc>
    <lastmod>2026-08-15</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
