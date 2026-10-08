const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.mewarhitech.com";

export async function GET() {
  const currentDate = new Date().toISOString();
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-general.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-products.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-services.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-blogs.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-projects.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-infrastructure.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-investors.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-3d-experience.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
