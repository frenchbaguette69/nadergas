import React from "react";
import Image from "next/image";
import { Header } from "@/sections/Header";
import  Footer  from "@/sections/Footer";
import stuk1 from "@/assets/stukadoor1.jpg";
import stuk2 from "@/assets/stukadoor2.jpeg";
import stuk3 from "@/assets/stukadoor3.jpg";
import { Pricing } from "@/sections/Pricing";

// Gebruik de nieuwe Metadata API voor SEO
export const metadata = {
  title: 'Stukadoor - Professioneel Stukadoorwerk | Noah Stukadoors',
  description:
    'Ontdek onze professionele stukadoor diensten. Strakke muren en plafonds, zowel voor nieuwbouw als renovatie. Onze stukadoors leveren perfect werk met oog voor detail.',
  keywords: 'stukadoor, stukadoorwerk, muren, plafonds, nieuwbouw, renovatie, pleisterwerk, gladde muren, sierpleister',
  robots: 'index, follow',
  canonical: 'https://www.noahstukadoors.nl/stukadoor',
};

const Stukadoor = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Professioneel Stukadoorwerk</h1>

        {/* Inleiding over Stukadoorwerk */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-4">
              Stukadoorwerk is een essentieel onderdeel van elk bouw- of renovatieproject.
              Onze ervaren stukadoors zorgen voor strakke muren en plafonds die perfect zijn afgewerkt.
              Wij leveren zowel traditioneel als modern stukadoorwerk met oog voor detail en kwaliteit.
            </p>
            <p className="text-lg mb-4">
              Of u nu kiest voor glad pleisterwerk, sierpleister, of spachtelputz, onze vakmensen zorgen
              voor een duurzame en hoogwaardige afwerking die voldoet aan uw verwachtingen. Van kleine
              renovaties tot grote nieuwbouwprojecten, wij staan klaar om u te helpen.
            </p>
            <p className="text-lg mb-4">
              Ons team maakt gebruik van hoogwaardige materialen en de nieuwste technieken om ervoor te
              zorgen dat uw muren en plafonds er jarenlang perfect uitzien.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src={stuk1}
              alt="Stukadoor aan het werk"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              layout="responsive"
            />
          </div>
        </div>

        {/* Voordelen van Stukadoorwerk */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Voordelen van Professioneel Stukadoorwerk</h2>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-2">Strakke en duurzame afwerking</li>
            <li className="mb-2">Geschikt voor zowel nieuwbouw als renovaties</li>
            <li className="mb-2">Verschillende soorten pleisterwerk mogelijk</li>
            <li className="mb-2">Hoogwaardige materialen</li>
            <li className="mb-2">Oog voor detail en afwerking</li>
            <li className="mb-2">Snelle en efficiënte uitvoering</li>
          </ul>
        </div>

        {/* Toepassingsproces */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Het Stukadoorproces</h2>
          <p className="text-lg mb-4">
            Het stukadoorproces begint met het voorbereiden van de ondergrond. Dit is een cruciale stap om ervoor
            te zorgen dat het pleisterwerk goed hecht en duurzaam is. Vervolgens brengen onze vakmensen het
            pleisterwerk gelijkmatig aan, met gebruik van moderne gereedschappen en technieken.
          </p>
          <p className="text-lg mb-4">
            Na het aanbrengen van het pleister wordt het oppervlak gladgestreken of voorzien van de gewenste structuur.
            Het eindresultaat is een perfect afgewerkte muur of plafond die klaar is voor verdere afwerking zoals schilderen of behangen.
          </p>
        </div>

        {/* Onderhoud en Tips */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Onderhoud van Stukadoorwerk</h2>
          <p className="text-lg mb-4">
            Hoewel stukadoorwerk duurzaam is, is het belangrijk om het regelmatig te inspecteren op eventuele scheurtjes
            of beschadigingen. Kleine scheurtjes kunnen eenvoudig worden gerepareerd met een pleisterreparatieset.
          </p>
          <p className="text-lg">
            Voor een lange levensduur adviseren wij om uw muren regelmatig te reinigen met een zachte doek en mild
            schoonmaakmiddel. Vermijd agressieve schoonmaakmiddelen om de pleisterlaag te beschermen.
          </p>
        </div>

        {/* Voorbeeldafbeeldingen */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <Image
              src={stuk2}
              alt="Stukadoorwerk in een woonkamer"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={stuk3}
              alt="Stukadoor aan het werk in een badkamer"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              layout="responsive"
            />
          </div>
        </div>

      </div>

      <Pricing />
      <Footer />
    </>
  );
};

export default Stukadoor;
