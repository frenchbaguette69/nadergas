import { notFound } from 'next/navigation';
import plaatsen from '../../data/plaatsen';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

// Functie voor het genereren van statische params (zoals getStaticPaths)
export async function generateStaticParams() {
  const paths = plaatsen.map((plaats) => ({
    plaats: plaats.toLowerCase(),
  }));

  return paths;
}

// Functie voor dynamische metadata
export async function generateMetadata({ params }: { params: { plaats: string } }) {
  const { plaats } = params;
  const capitalizedPlaats = plaats.charAt(0).toUpperCase() + plaats.slice(1);

  if (!plaatsen.includes(capitalizedPlaats)) {
    notFound();
  }

  return {
    title: `Stukadoor ${capitalizedPlaats} | Noah Stukadoors`,
    description: `Op zoek naar een professionele stukadoor in ${capitalizedPlaats}? NOAH Stukadoors biedt hoogwaardige stukadoorsdiensten in ${capitalizedPlaats}. Neem contact op voor een vrijblijvende offerte.`,
    keywords: `stukadoor, ${capitalizedPlaats}, stukadoorsbedrijf, stukadoorsdiensten, stukwerk`,
    robots: 'index, follow',
    canonical: `https://www.noahstukadoors.nl/stukadoor/${plaats}`,
  };
}

// De pagina die wordt weergegeven voor elke specifieke plaats
export default function StukadoorPage({ params }: { params: { plaats: string } }) {
  const { plaats } = params;
  const capitalizedPlaats = plaats.charAt(0).toUpperCase() + plaats.slice(1);

  return (
    <div>
      <main>
        <Header />
        <div className="container">
          <h1>Bent u op zoek naar een stukadoor in {capitalizedPlaats}?</h1>

          <section>
            <h2>Waarom kiezen voor stukadoor Noah in {capitalizedPlaats}?</h2>
            <p>
              Bent u op zoek naar een betrouwbare en professionele stukadoor in {capitalizedPlaats}? 
              Bij <strong>Noah Stukadoors</strong> zijn wij gespecialiseerd in een breed scala aan 
              stukadoorsdiensten die voldoen aan de hoogste kwaliteitsnormen. Met jarenlange ervaring 
              in zowel renovatieprojecten als nieuwbouw, bieden wij een op maat gemaakte aanpak die perfect aansluit 
              op uw wensen. Kies voor een gladde, strakke afwerking en duurzame materialen met ons team van 
              ervaren stukadoors.
            </p>

            <h3>Soorten stukadoor diensten in {capitalizedPlaats}</h3>
            <p>
              Bij Noah Stukadoors bieden we verschillende stukadoorsdiensten in {capitalizedPlaats}, die zijn afgestemd 
              op zowel particuliere als commerciële projecten. Of u nu een nieuwe woning bouwt of uw huidige interieur 
              wilt opfrissen, wij bieden oplossingen die aan uw behoeften voldoen.
            </p>
            <ul>
              <li><strong>Pleisterwerk</strong>: Voor een gladde ondergrond, ideaal voor schilderen of behangen.</li>
              <li><strong>Sierpleister</strong>: Decoratieve afwerkingen zoals spachtelputz en granol voor een uniek karakter.</li>
              <li><strong>Schuurwerk</strong>: Een elegante afwerking met een subtiele structuur, perfect voor woonkamers en slaapkamers.</li>
              <li><strong>Buitenstucwerk</strong>: Duurzaam stukwerk voor gevels en buitenmuren, beschermend en stijlvol.</li>
              <li><strong>Herstelwerkzaamheden</strong>: Reparatie van beschadigd pleisterwerk of renovatie van oude muren.</li>
            </ul>

            <h3>Tarieven voor stukadoor in {capitalizedPlaats}</h3>
            <p>
              Bij Noah Stukadoors hanteren we transparante en eerlijke tarieven voor onze stukadoorsdiensten in {capitalizedPlaats}.
              De kosten zijn afhankelijk van verschillende factoren, zoals de grootte van het project, het type afwerking en de gebruikte materialen.
              Wij bieden altijd een vrijblijvende offerte aan, zodat u precies weet waar u aan toe bent. Onze tarieven zijn competitief, 
              terwijl we nooit inleveren op de kwaliteit van ons werk.
            </p>

            <h2>Waarom Noah Stukadoors Kiezen?</h2>
            <p>
              Wij zijn de juiste keuze voor al uw stukadoorsklussen in {capitalizedPlaats} omdat wij kwaliteit, vakmanschap en betrouwbaarheid bieden.
              Onze klanten waarderen onze persoonlijke aanpak, waarbij wij ervoor zorgen dat elk detail van uw project perfect wordt uitgevoerd.
              Of het nu gaat om traditioneel pleisterwerk of decoratief stucwerk, ons team zorgt voor een vlekkeloze afwerking die uw verwachtingen overtreft.
            </p>

            <h3>Neem Contact op met Noah Stukadoors in {capitalizedPlaats}</h3>
            <p>
              Bent u op zoek naar een professionele stukadoor in {capitalizedPlaats}? Neem dan vandaag nog contact met ons op.
              Wij bespreken graag uw wensen en bieden u een vrijblijvende offerte voor uw project. Ons team staat klaar om u te helpen 
              bij het realiseren van het perfecte stukwerk.
            </p>

            <h3>Wat Kunt u Verwachten van Onze Stukadoorsdiensten?</h3>
            <p>
              Bij Noah Stukadoors leveren we uitsluitend de beste kwaliteit. Van het eerste adviesgesprek tot de afronding van het project,
              wij staan voor u klaar om het stukwerk volledig naar uw wensen uit te voeren. U kunt rekenen op een gladde afwerking,
              gebruik van hoogwaardige materialen en een nette oplevering binnen de afgesproken tijd.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
