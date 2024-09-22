import { notFound } from "next/navigation";
import plaatsen from "../../data/plaatsen";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Pricing } from "@/sections/Pricing";

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
    title: `Tegelzetter ${capitalizedPlaats} | Noah Tegelzetters`,
    description: `Bent u op zoek naar een professionele tegelzetter in ${capitalizedPlaats}? Noah Tegelzetters biedt hoogwaardige tegelzetdiensten in ${capitalizedPlaats}. Vraag nu een offerte aan.`,
    keywords: `tegelzetter, ${capitalizedPlaats}, tegelzetbedrijf, tegelzetter ${capitalizedPlaats}, tegelzetdiensten, tegelzetter tarieven`,
    robots: "index, follow",
    canonical: `https://www.noahstukadoors.nl/tegelzetter/${plaats}`,
  };
}

// De pagina die wordt weergegeven voor elke specifieke plaats
export default function TegelzetterPage({
  params,
}: {
  params: { plaats: string };
}) {
  const { plaats } = params;
  const capitalizedPlaats = plaats.charAt(0).toUpperCase() + plaats.slice(1);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4 md:px-12">
        <article className="bg-white p-8 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Bent u op zoek naar een tegelzetter {capitalizedPlaats}?
          </h1>

          <p className="mb-4 text-gray-600">
            Bij <strong>Noah Tegelzetters</strong> bent u aan het juiste adres
            voor al uw tegelzetklussen in {capitalizedPlaats}. Of het nu gaat om het betegelen van vloeren, wanden, badkamers of keukens, onze ervaren tegelzetters leveren vakwerk met oog voor detail. Wij bieden verschillende tegelzetdiensten, afgestemd op uw specifieke wensen en behoeften.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
            Waarom kiezen voor tegelzetter Noah in {capitalizedPlaats}?
          </h2>

          <p className="mb-4 text-gray-600">
            Noah Tegelzetters staat bekend om onze jarenlange ervaring en ons oog
            voor detail. We werken met hoogwaardige materialen en de nieuwste
            technieken om ervoor te zorgen dat uw vloeren en wanden de perfecte afwerking krijgen. Of u nu kiest voor strakke tegels of een decoratieve afwerking, wij bieden altijd een maatwerkoplossing. Bovendien leveren wij al onze diensten binnen de afgesproken tijd en tegen scherpe tarieven.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-700">
            Soorten tegelzet diensten in {capitalizedPlaats}
          </h3>

          <p className="mb-4 text-gray-600">
            Onze diensten in {capitalizedPlaats} zijn zeer divers en passen bij
            elk type project, van nieuwbouw tot renovatie. Hier is een overzicht
            van onze belangrijkste tegelzetdiensten:
          </p>

          <ul className="list-disc list-inside mb-6 text-gray-600">
            <li>
              <strong>Vloertegels</strong>: Strakke en duurzame afwerkingen voor uw vloeren, perfect voor badkamers, keukens en woonkamers.
            </li>
            <li>
              <strong>Wandtegels</strong>: Hoogwaardige wandtegels voor een moderne en stijlvolle uitstraling in uw interieur.
            </li>
            <li>
              <strong>Badkamertegels</strong>: Wij leveren en plaatsen badkamertegels die zowel functioneel als esthetisch aantrekkelijk zijn.
            </li>
            <li>
              <strong>Keukentegels</strong>: Functionele en decoratieve tegels voor uw keukenwanden en vloeren, bestand tegen vocht en hitte.
            </li>
            <li>
              <strong>Terrastegels</strong>: Duurzame buitenoplossingen voor uw terrassen en patio’s, bestand tegen weersomstandigheden.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
            Tarieven tegelzetter {capitalizedPlaats}
          </h2>

          <p className="mb-4 text-gray-600">
            De tarieven voor een tegelzetter in {capitalizedPlaats} hangen af van verschillende factoren, zoals de grootte van het project, het type tegel en de gebruikte materialen. Wij bij Noah Tegelzetters hanteren transparante prijzen en bieden altijd een vrijblijvende offerte. Zo weet u precies waar u aan toe bent zonder verborgen kosten. Onze tarieven zijn competitief en afgestemd op uw budget zonder in te leveren op kwaliteit.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-700">
            Het Belang van Professioneel Tegelwerk
          </h3>

          <p className="mb-4 text-gray-600">
            Goed gelegde tegels kunnen een groot verschil maken in de uitstraling en functionaliteit van een ruimte. Noah Tegelzetters zorgt ervoor dat uw tegelwerk niet alleen esthetisch aantrekkelijk is, maar ook duurzaam en functioneel. Professioneel tegelwerk voorkomt vochtproblemen en zorgt voor een lange levensduur van uw vloeren en wanden. Ons team in {capitalizedPlaats} is gespecialiseerd in het leveren van hoogwaardig tegelwerk dat aan al uw eisen voldoet.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
            Waarom kiezen voor Noah Tegelzetters in {capitalizedPlaats}?
          </h2>

          <p className="mb-4 text-gray-600">
            Noah Tegelzetters onderscheidt zich door vakmanschap, klantgerichtheid
            en betrouwbaarheid. Wij staan garant voor een strakke en duurzame
            afwerking, of het nu gaat om een klein project of een complete
            renovatie. Ons team in {capitalizedPlaats} werkt nauw samen met u om
            uw visie werkelijkheid te maken. Wij bieden een breed scala aan
            diensten en staan bekend om onze persoonlijke aanpak en
            maatwerkoplossingen.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-700">
            Neem contact op met tegelzetter Noah in {capitalizedPlaats}
          </h3>

          <p className="mb-4 text-gray-600">
            Bent u klaar om uw vloeren en wanden een professionele afwerking te
            geven? Neem vandaag nog contact op met Noah Tegelzetters voor een
            vrijblijvende offerte in {capitalizedPlaats}. Wij bespreken graag uw
            project en helpen u met het kiezen van de juiste oplossing voor uw
            woning of bedrijf.
          </p>
        </article>
      </main>
      <Pricing />
      <Footer />
    </div>
  );
}
