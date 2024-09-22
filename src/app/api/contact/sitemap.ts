import { NextApiRequest, NextApiResponse } from 'next';
import plaatsen from '../../data/plaatsen'; // Importeer je lijst met plaatsen

// Base URL van je website
const baseUrl = 'https://www.noahstukadoors.nl';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Statische pagina's
  const staticPages = [
    '',
    'about',
    'contact',
    'spachtelputz',
    'stukadoorwerk',
    'tarieven',
  ];

  // Dynamische pagina's voor stukadoor en tegelzetter
  const dynamicPagesStukadoor = plaatsen.map((plaats) => `/stukadoor/${plaats.toLowerCase()}`);
  const dynamicPagesTegelzetter = plaatsen.map((plaats) => `/tegelzetter/${plaats.toLowerCase()}`);

  // Combineer alle pagina's in één array
  const allPages = [
    ...staticPages.map((page) => `${baseUrl}/${page}`),
    ...dynamicPagesStukadoor.map((page) => `${baseUrl}${page}`),
    ...dynamicPagesTegelzetter.map((page) => `${baseUrl}${page}`),
  ];

  // Bouw de sitemap op
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

  // Zet de juiste headers voor XML en geef de sitemap terug
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).end(sitemap);
}
