import React from "react";
import Image from "next/image";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import teg1 from "@/assets/tegelzetten1.webp";
import teg2 from "@/assets/tegelzetten2.jpg";
import teg3 from "@/assets/tegelzetten3.jpg";
import { Pricing } from "@/sections/Pricing";

// Gebruik de Metadata API voor SEO
export const metadata = {
  title: 'Tegelzetten - Professionele Tegelzetservice | Noah Stukadoors',
  description:
    'Ontdek onze professionele tegelzetservice. Wij bieden perfect tegelwerk voor vloeren en wanden in badkamers, keukens, en woonkamers. Hoogwaardige afwerking gegarandeerd.',
  keywords:
    'tegelzetten, tegelzetter, vloertegels, wandtegels, badkamertegels, keukentegels, tegels zetten, tegelwerk',
  robots: 'index, follow',
  canonical: 'https://www.noahstukadoors.nl/tegelzetten',
};

const Tegelzetten = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Tegelzetten</h1>

        {/* Inleiding over Tegelzetten */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-4">
              Tegelzetten is een nauwkeurig proces dat vakmanschap vereist. Onze
              ervaren tegelzetters zorgen voor perfecte plaatsing van tegels op
              vloeren en wanden, zowel in badkamers, keukens als andere ruimtes.
              Met oog voor detail en afwerking leveren wij tegelwerk van de
              hoogste kwaliteit.
            </p>
            <p className="text-lg mb-4">
              Wij werken met verschillende soorten tegels, waaronder keramiek,
              natuursteen en mozaïek. Of u nu kiest voor grote vloertegels of
              kleine wandtegels, wij zorgen voor een strakke en duurzame
              afwerking die perfect aansluit op uw wensen.
            </p>
            <p className="text-lg mb-4">
              Onze vakmensen zorgen ervoor dat de tegels met precisie worden
              geplaatst, zodat u kunt genieten van een perfect eindresultaat. Of
              het nu gaat om nieuwbouw of renovatie, wij bieden een
              tegelzetservice op maat.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src={teg3}
              alt="Tegelzetten voorbeeld"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Voordelen van Tegelzetten */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Voordelen van Professioneel Tegelzetten
          </h2>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-2">Strakke en duurzame afwerking</li>
            <li className="mb-2">
              Geschikt voor elke ruimte, van badkamers tot keukens
            </li>
            <li className="mb-2">Breed scala aan tegelsoorten en afmetingen</li>
            <li className="mb-2">Hoogwaardige materialen en voegwerk</li>
            <li className="mb-2">
              Precisie en oog voor detail bij het plaatsen
            </li>
          </ul>
        </div>

        {/* Toepassingsproces */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Het Tegelzetproces</h2>
          <p className="text-lg mb-4">
            Het tegelzetproces begint met het nauwkeurig voorbereiden van de
            ondergrond. Dit zorgt ervoor dat de tegels goed hechten en langdurig
            op hun plaats blijven. Vervolgens worden de tegels met precisie
            geplaatst, met aandacht voor de juiste voegbreedte en lijnvoering.
          </p>
          <p className="text-lg mb-4">
            Onze vakmensen zorgen voor een gelijkmatige plaatsing van de tegels
            en een strak eindresultaat. Wij werken met verschillende patronen en
            indelingen om aan uw wensen te voldoen, van rechtlijnig tot
            diagonaal leggen.
          </p>
        </div>

        {/* Onderhoud en Tips */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Onderhoud van Tegelwerk
          </h2>
          <p className="text-lg mb-4">
            Tegels zijn onderhoudsvriendelijk, maar regelmatig schoonmaken is
            belangrijk voor een lange levensduur. Gebruik milde
            schoonmaakmiddelen en vermijd schurende materialen die de tegels of
            voegen kunnen beschadigen.
          </p>
          <p className="text-lg">
            Door goed onderhoud blijven uw tegels er jarenlang als nieuw
            uitzien, met een frisse uitstraling en strakke voegen.
          </p>
        </div>

        {/* Voorbeeldafbeeldingen */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-0" style={{ paddingBottom: "75%" }}>
              <Image
                src={teg1}
                alt="Tegelzetten in de keuken"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-0" style={{ paddingBottom: "75%" }}>
              <Image
                src={teg2}
                alt="Tegelzetten in de badkamer"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Pricing />
      <Footer />
    </>
  );
};

export default Tegelzetten;
