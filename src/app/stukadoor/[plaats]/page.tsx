import { notFound } from "next/navigation";
import plaatsen from "../../data/plaatsen";
import { Header } from "@/sections/Header";
import  Footer  from "@/sections/Footer";
import { Pricing } from "@/sections/Pricing";
import { Hero } from "@/sections/Hero";
import ReviewsSection from "@/sections/ReviewsSection";
import { ProductShowcase } from "@/sections/ProductShowcase";

// Functie voor het genereren van statische params (zoals getStaticPaths)
export async function generateStaticParams() {
  const paths = plaatsen.map((plaats) => ({
    plaats: plaats.toLowerCase(),
  }));

  return paths;
}

// Functie voor dynamische metadata
export async function generateMetadata({
  params,
}: {
  params: { plaats: string };
}) {
  const { plaats } = params;
  const capitalizedPlaats = plaats.charAt(0).toUpperCase() + plaats.slice(1);

  if (!plaatsen.includes(capitalizedPlaats)) {
    notFound();
  }

  return {
    title: `Stukadoor ${capitalizedPlaats} | Noah Stukadoors`,
    description: `Bent u op zoek naar een professionele stukadoor in ${capitalizedPlaats}? Noah Stukadoors biedt hoogwaardige stukadoorsdiensten in ${capitalizedPlaats}. Vraag nu een offerte aan.`,
    keywords: `stukadoor, ${capitalizedPlaats}, stukadoorsbedrijf, stukadoor ${capitalizedPlaats}, stukadoorsdiensten, stukadoor tarieven`,
    robots: "index, follow",
    canonical: `https://www.noahstukadoors.nl/stukadoor/${plaats}`,
  };
}

// De pagina die wordt weergegeven voor elke specifieke plaats
export default function StukadoorPage({
  params,
}: {
  params: { plaats: string };
}) {
  const { plaats } = params;
  const capitalizedPlaats = plaats.charAt(0).toUpperCase() + plaats.slice(1);

  return (
    <div className="">
      <Header />
      <Hero />
      <ReviewsSection />
      <main className="container mx-auto py-8 px-4 md:px-12">
        <article className=" p-8 ">
          
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Bent u op zoek naar een stukadoor {capitalizedPlaats}?
          </h1>

          <p className="mb-4 text-gray-600">
            Bij <strong>Noah Stukadoors</strong> bent u aan het juiste adres
            voor al uw stukadoorsklussen in {capitalizedPlaats}. Of het nu gaat
            om renovatie of nieuwbouw, onze ervaren stukadoors leveren vakwerk
            en zorgen voor een perfect afgewerkte muur en plafond. Wij bieden
            verschillende stukadoorsdiensten, afgestemd op uw specifieke wensen
            en behoeften.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
            Waarom kiezen voor stukadoor Noah in {capitalizedPlaats}?
          </h2>

          <p className="mb-4 text-gray-600">
            Noah Stukadoors staat bekend om onze jarenlange ervaring en ons oog
            voor detail. We werken met hoogwaardige materialen en de nieuwste
            technieken om ervoor te zorgen dat uw muren en plafonds de afwerking
            krijgen die ze verdienen. Of u nu kiest voor strak pleisterwerk of
            een decoratieve afwerking zoals sierpleister, wij bieden altijd een
            maatwerkoplossing. Bovendien leveren wij al onze diensten binnen de
            afgesproken tijd en tegen scherpe tarieven.
          </p>
          <ProductShowcase />
          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-700">
            Soorten stukadoor diensten in {capitalizedPlaats}
          </h3>

          <p className="mb-4 text-gray-600">
            Onze diensten in {capitalizedPlaats} zijn zeer divers en passen bij
            elk type project, van nieuwbouw tot renovatie. Hier is een overzicht
            van onze belangrijkste stukadoorsdiensten:
          </p>
          <Pricing />
          <ul className="list-disc list-inside mb-6 text-gray-600">
            <li>
              <strong>Pleisterwerk</strong>: Een gladde afwerking, ideaal voor
              muren die geschilderd of behangen moeten worden.
            </li>
            <li>
              <strong>Sierpleister</strong>: Decoratieve afwerkingen zoals
              spachtelputz en granol, perfect om uw muren karakter te geven.
            </li>
            <li>
              <strong>Schuurwerk</strong>: Voor een subtiele, golvende structuur
              die een elegante uitstraling aan uw wanden geeft.
            </li>
            <li>
              <strong>Buitenstucwerk</strong>: Duurzame en beschermende
              afwerkingen voor uw gevels en buitenmuren, zowel esthetisch als
              functioneel.
            </li>
            <li>
              <strong>Herstelwerkzaamheden</strong>: Wij repareren beschadigd
              stucwerk en zorgen ervoor dat uw muren er weer als nieuw uitzien.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
            Tarieven stukadoor {capitalizedPlaats}
          </h2>

          <p className="mb-4 text-gray-600">
            De tarieven voor een stukadoor in {capitalizedPlaats} hangen af van
            verschillende factoren, zoals de grootte van het project, het type
            afwerking en de gebruikte materialen. Wij bij Noah Stukadoors
            hanteren transparante prijzen en bieden altijd een vrijblijvende
            offerte. Zo weet u precies waar u aan toe bent zonder verborgen
            kosten. Onze tarieven zijn competitief en afgestemd op uw budget
            zonder in te leveren op kwaliteit.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-700">
            Het Belang van Professioneel Stukadoorwerk
          </h3>

          <p className="mb-4 text-gray-600">
            Een goed afgewerkte muur of plafond maakt een enorm verschil in de
            uitstraling van uw interieur. Bij Noah Stukadoors zorgen wij ervoor
            dat het stukwerk niet alleen esthetisch aantrekkelijk is, maar ook
            duurzaam en functioneel. Professioneel stukadoorwerk biedt
            isolatievoordelen, beschermt tegen vocht en zorgt voor een langere
            levensduur van uw muren. Ons team in {capitalizedPlaats} is
            gespecialiseerd in het leveren van hoogwaardig stucwerk dat aan al
            deze eisen voldoet.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
            Waarom kiezen voor Noah Stukadoors in {capitalizedPlaats}?
          </h2>

          <p className="mb-4 text-gray-600">
            Noah Stukadoors onderscheidt zich door vakmanschap, klantgerichtheid
            en betrouwbaarheid. Wij staan garant voor een strakke en duurzame
            afwerking, of het nu gaat om een klein project of een complete
            renovatie. Ons team in {capitalizedPlaats} werkt nauw samen met u om
            uw visie werkelijkheid te maken. Wij bieden een breed scala aan
            diensten en staan bekend om onze persoonlijke aanpak en
            maatwerkoplossingen.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-700">
            Neem contact op met stukadoor Noah in {capitalizedPlaats}
          </h3>

          <p className="mb-4 text-gray-600">
            Bent u klaar om uw muren en plafonds een professionele afwerking te
            geven? Neem vandaag nog contact op met Noah Stukadoors voor een
            vrijblijvende offerte in {capitalizedPlaats}. Wij bespreken graag uw
            project en helpen u met het kiezen van de juiste oplossing voor uw
            woning of bedrijf.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
