import { NextApiRequest, NextApiResponse } from 'next';
import plaatsen from '../../data/plaatsen';  // Zorg ervoor dat het pad correct is

const baseUrl = 'https://www.noahstukadoors.nl';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const staticPages = [
    '',
    'about',
    'contact',
    'spachtelputz',
    'stukadoorwerk',
    'tarieven',
  ];

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

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).end(sitemap);
}
