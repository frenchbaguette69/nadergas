// src/app/about/page.tsx (Over ons-pagina)
import React from 'react';
import { Header } from '@/sections/Header'; 
import  Footer  from '@/sections/Footer';
import { Metadata } from 'next';

// Gebruik de nieuwe Metadata API
export const metadata: Metadata = {
  title: 'Over Ons - Noah Stukadoors | Stukadoor en Tegelzetter in Limburg & Brabant',
  description: 'Leer meer over Noah Stukadoors, uw ervaren stukadoor en tegelzetter in Limburg en Brabant. Wij bieden hoogwaardige diensten voor zowel particulieren als bedrijven.',
};

const About = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Over Noah Stukadoors</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p className="mb-6">
            Welkom bij <strong>Noah Stukadoors</strong>, uw toonaangevende stukadoor en tegelzetter in Limburg en Brabant. 
            Met jarenlange ervaring in de bouwsector, zijn wij gespecialiseerd in het leveren van hoogwaardige stukadoors- 
            en tegelzettersdiensten voor zowel particuliere als zakelijke klanten. Of het nu gaat om nieuwbouw, renovatie, 
            of restauratie, ons team van vakmensen staat klaar om uw project met precisie en zorg uit te voeren.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Onze Missie en Waarden</h2>
          <p className="mb-6">
            Bij Noah Stukadoors geloven we dat vakmanschap en klanttevredenheid hand in hand gaan. Onze missie is simpel: 
            wij streven ernaar om de beste stukadoor en tegelzetter in Limburg en Brabant te zijn door het leveren van 
            uitmuntende kwaliteit en service. Wij zijn trots op ons werk en gaan verder dan alleen het aanbrengen van 
            pleisterwerk of tegels; wij creëren een afgewerkt oppervlak dat bijdraagt aan de schoonheid en duurzaamheid van 
            uw woning of bedrijfspand.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Waarom Kiezen voor Noah Stukadoors?</h2>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">
              <strong>Ervaring en Expertise:</strong> Ons team bestaat uit ervaren stukadoors en tegelzetters die allen 
              over de nodige certificaten en kwalificaties beschikken om hun vakmanschap te garanderen.
            </li>
            <li className="mb-2">
              <strong>Hoogwaardige Materialen:</strong> We gebruiken alleen de beste materialen om een duurzame afwerking 
              te garanderen die jarenlang meegaat, of het nu gaat om pleisterwerk of tegelzetting.
            </li>
            <li className="mb-2">
              <strong>Uitstekende Klantenservice:</strong> Bij Noah Stukadoors staan uw wensen centraal. Wij luisteren 
              aandachtig naar uw eisen en zorgen voor duidelijke communicatie gedurende het hele project.
            </li>
            <li className="mb-2">
              <strong>Betrouwbaarheid:</strong> Wij komen onze afspraken na en zorgen ervoor dat uw project op tijd en 
              binnen budget wordt opgeleverd.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Onze Diensten</h2>
          <p className="mb-6">
            Als toonaangevende stukadoor en tegelzetter in Limburg en Brabant bieden wij een breed scala aan diensten, 
            waaronder:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>Sausklaar Stucwerk:</strong> Perfecte, gladde afwerking van muren en plafonds, klaar om geschilderd te worden.</li>
            <li className="mb-2"><strong>Spachtelputz:</strong> Decoratieve afwerking met sierpleister, beschikbaar in verschillende korreldiktes en kleuren.</li>
            <li className="mb-2"><strong>Tegelzetwerk:</strong> Vakmanschap in het leggen van tegels voor badkamers, keukens, vloeren en wanden.</li>
            <li className="mb-2"><strong>Renovatieprojecten:</strong> Deskundige renovatie van bestaande structuren, met behoud van het karakter van het gebouw.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Werkgebied</h2>
          <p className="mb-6">
            Wij zijn trots op ons uitgebreide werkgebied dat heel Limburg en Brabant beslaat. Of u nu een particulier bent 
            die zijn woning wil verbeteren of een bedrijf dat op zoek is naar hoogwaardige afwerkingen, wij staan voor u klaar. 
            Ons team opereert vanuit strategische locaties in beide provincies, wat ons in staat stelt om snel en efficiënt op 
            uw verzoeken te reageren.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Neem Contact met Ons Op</h2>
          <p className="mb-6">
            Bent u op zoek naar een professionele stukadoor of tegelzetter in Limburg of Brabant? Aarzel dan niet om contact 
            met ons op te nemen. Ons vriendelijke team staat klaar om uw vragen te beantwoorden, u te voorzien van een vrijblijvende 
            offerte, en om uw droomproject werkelijkheid te maken. Bij Noah Stukadoors gaan we voor niets minder dan perfectie.
          </p>

          <p className="text-center mt-8">
            <a href="/contact" className="text-green-500 hover:underline">Neem contact met ons op</a> vandaag nog voor meer informatie!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
