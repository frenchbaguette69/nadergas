import { NextResponse } from 'next/server';
import plaatsen from '../../data/plaatsen';  // Zorg dat het pad klopt

export async function GET() {
  const baseUrl = 'https://noah-stukadoor.nl';  // Voor lokaal testen

  const staticPages = ['about', 'contact', 'spachtelputz', 'stukadoorwerk', 'tarieven'];
  const dynamicPagesStukadoor = plaatsen.map((plaats) => `/stukadoor/${plaats.toLowerCase()}`);
  const dynamicPagesTegelzetter = plaatsen.map((plaats) => `/tegelzetter/${plaats.toLowerCase()}`);

  const allPages = [
    ...staticPages.map((page) => `${baseUrl}/${page}`),
    ...dynamicPagesStukadoor.map((page) => `${baseUrl}${page}`),
    ...dynamicPagesTegelzetter.map((page) => `${baseUrl}${page}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((url) => {
      return `
        <url>
          <loc>${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
