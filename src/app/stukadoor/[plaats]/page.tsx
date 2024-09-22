import Head from 'next/head';
import { notFound } from 'next/navigation';  // Gebruik voor error handling als route niet bestaat
import plaatsen from '../../data/plaatsen';  // Pas het pad aan naar je data map
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

// Functie voor het genereren van statische params (zoals getStaticPaths)
export async function generateStaticParams() {
  const paths = plaatsen.map((plaats) => ({
    plaats: plaats.toLowerCase(),
  }));

  return paths;
}

// De pagina die wordt weergegeven voor elke specifieke plaats
export default function StukadoorPage({ params }: { params: { plaats: string } }) {
  const { plaats } = params;

  // Controleer of de plaats bestaat in de lijst
  if (!plaatsen.includes(plaats.charAt(0).toUpperCase() + plaats.slice(1))) {
    notFound();  // Als de plaats niet bestaat, toon een 404 pagina
  }

  const capitalizedPlaats = plaats.charAt(0).toUpperCase() + plaats.slice(1);

  // SEO-gerelateerde gegevens
  const seoTitle = `Stukadoor ${capitalizedPlaats} | NOAH Stukadoors`;
  const seoDescription = `Op zoek naar een professionele stukadoor in ${capitalizedPlaats}? NOAH Stukadoors biedt hoogwaardige stukadoorsdiensten in ${capitalizedPlaats}. Neem contact op voor een vrijblijvende offerte.`;

  return (
    <div>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>
      <main>
        <Header />
        <h1>Stukadoor in {capitalizedPlaats}</h1>
        <p>NOAH Stukadoors levert hoogwaardige stukadoorsdiensten in {capitalizedPlaats}, zowel voor renovatie als nieuwbouwprojecten. Wij zijn trots op ons vakmanschap en leveren altijd kwaliteit.</p>
        <Footer />      
      </main>
    </div>
  );
}
