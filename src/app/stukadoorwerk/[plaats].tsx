
import Head from 'next/head';
import plaatsen from '../data/plaatsen';  // Zorg ervoor dat dit pad correct is
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// Definieer het type voor de props die naar de pagina worden doorgegeven
interface StukadoorPageProps {
  plaats: string;
}

// Genereer dynamische routes voor elke plaats
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = plaatsen.map((plaats) => ({
    params: { plaats: plaats.toLowerCase() },
  }));

  return {
    paths,
    fallback: 'blocking',  // Dit zorgt ervoor dat routes tijdens runtime worden gegenereerd
  };
};


// Haal de gegevens op voor een specifieke plaats
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { plaats } = params as { plaats: string };  // Typing voor plaats als string

  return {
    props: {
      plaats,  // Geeft de plaatsnaam door als prop aan de pagina
    },
  };
};

// De pagina die wordt weergegeven voor elke specifieke plaats
const StukadoorPage: NextPage<StukadoorPageProps> = ({ plaats }) => {
  // Capitalize de plaatsnaam voor gebruik in de content
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
        <h1>Stukadoor in {capitalizedPlaats}</h1>
        <p>NOAH Stukadoors levert hoogwaardige stukadoorsdiensten in {capitalizedPlaats}, zowel voor renovatie als nieuwbouwprojecten. Wij zijn trots op ons vakmanschap en leveren altijd kwaliteit.</p>
      </main>
    </div>
  );
};

export default StukadoorPage;
