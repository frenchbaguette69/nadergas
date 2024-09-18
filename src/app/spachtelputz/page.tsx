import React from "react";
import Image from "next/image";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Head from "next/head";
import spa1 from "@/assets/spachtelputz.jpg"
import Logo from "@/assets/logonoah.png"
import spa2 from "@/assets/spachtelputzsierpleister.jpg"
import spa3 from "@/assets/220913-6.jpg"
import { Pricing } from "@/sections/Pricing";

export const metadata = {
  title: 'Spachtelputz - Sierpleister | Noah Stukadoors',
  description: 'Ontdek de voordelen van Spachtelputz sierpleister voor uw muren en plafonds. Stootvast, onderhoudsvriendelijk en geschikt voor elke ruimte. Professioneel aangebracht door Noah Stukadoors.',
};

const Spachtelputz = () => {

  return (
    <div>
      

      <Header />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Spachtelputz (Sierpleister)
        </h1>

        {/* Inleiding over Spachtelputz */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-4">
              Spachtelputz, ook wel sierpleister genoemd, is een van de meest
              populaire afwerkingsmaterialen voor muren en plafonds. Het biedt
              een duurzaam, stootvast en onderhoudsvriendelijk oppervlak dat
              jarenlang meegaat. De decoratieve structuur zorgt voor een
              elegante afwerking die in elke ruimte past.
            </p>
            <p className="text-lg mb-4">
              Spachtelputz kan in verschillende korreldiktes worden aangebracht,
              afhankelijk van de gewenste uitstraling. Het is een veelzijdig
              product dat zowel in woonkamers, slaapkamers als badkamers
              gebruikt kan worden. Wij bieden een breed scala aan kleuren en
              afwerkingen om aan uw specifieke wensen te voldoen.
            </p>
            <p className="text-lg mb-4">
              Onze vakmensen hebben jarenlange ervaring met het aanbrengen van
              Spachtelputz en zorgen voor een professionele en strakke afwerking.
              Of u nu kiest voor een fijne of grove structuur, wij garanderen
              een perfect eindresultaat dat uw interieur naar een hoger niveau
              tilt.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src={spa3}
              alt="Spachtelputz voorbeeld"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Voordelen van Spachtelputz */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Voordelen van Spachtelputz</h2>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-2">Stootvast en duurzaam</li>
            <li className="mb-2">Onderhoudsvriendelijk</li>
            <li className="mb-2">Geschikt voor elke ruimte</li>
            <li className="mb-2">Verkrijgbaar in verschillende korreldiktes</li>
            <li className="mb-2">Breed scala aan kleuren</li>
            <li className="mb-2">Perfect voor zowel muren als plafonds</li>
          </ul>
        </div>

        {/* Toepassingsproces */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Het Toepassingsproces</h2>
          <p className="text-lg mb-4">
            Het aanbrengen van Spachtelputz gebeurt in een aantal zorgvuldig uitgevoerde stappen.
            Eerst worden de ondergronden voorbereid en geëgaliseerd. Vervolgens wordt de pleister
            in de juiste dikte aangebracht met behulp van specialistische gereedschappen.
          </p>
          <p className="text-lg mb-4">
            Na het aanbrengen wordt de pleisterstructuur gemaakt, afhankelijk van de gewenste
            korrelgrootte en textuur. Onze vakmensen zorgen ervoor dat alles nauwkeurig en
            gelijkmatig wordt afgewerkt, zodat u een perfect eindresultaat krijgt.
          </p>
        </div>

        {/* Onderhoud en Tips */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Onderhoud van Spachtelputz</h2>
          <p className="text-lg mb-4">
            Spachtelputz is een onderhoudsvriendelijk materiaal, maar het is belangrijk om het
            regelmatig schoon te houden voor een optimale levensduur. Het oppervlak kan eenvoudig
            worden gereinigd met een vochtige doek en een mild schoonmaakmiddel. Voor hardnekkigere
            vlekken kunt u een zachte borstel gebruiken.
          </p>
          <p className="text-lg">
            Vermijd het gebruik van agressieve schoonmaakmiddelen of schuursponsjes, omdat deze de
            pleister kunnen beschadigen. Met het juiste onderhoud blijft uw Spachtelputz jarenlang
            mooi.
          </p>
        </div>

        {/* Voorbeeldafbeeldingen */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <Image
            src={spa1}
            alt="Spachtelputz in de woonkamer"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <Image
            src={spa2}
            alt="Spachtelputz in de badkamer"
            width={600}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    <Pricing />
      <Footer />
    </div>
  );
};

export default Spachtelputz;
