// src/app/contact/page.tsx (Contact-pagina)
import React from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Pricing } from '@/sections/Pricing'; // Importeer de Pricing component als het contactformulier

// Gebruik de nieuwe Metadata API
export const metadata = {
  title: 'Contact - Noah Stukadoors | Stukadoor en Tegelzetter in Limburg & Brabant',
  description: 'Neem contact op met Noah Stukadoors voor al uw stukadoors- en tegelzetwerk in Limburg en Brabant. Vraag een vrijblijvende offerte aan via ons contactformulier.',
};

const Contact = () => {
  return (
    <>
      <Header />
     
        <Pricing />
      <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Neem Contact Op</h1>
        <p className="mb-6 text-center">
          Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte aanvragen? Vul dan onderstaand formulier in en wij nemen zo spoedig mogelijk contact met u op.
        </p>

        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mt-12">
          <h2 className="text-3xl font-semibold mb-4">Waarom Kiezen voor Noah Stukadoors?</h2>
          <p className="mb-6">
            Noah Stukadoors is uw betrouwbare partner voor al uw stukadoors- en tegelzetwerk in Limburg en Brabant. Met onze jarenlange ervaring en expertise in de bouwsector, bieden wij hoogwaardige diensten aan voor zowel particuliere als zakelijke klanten. Of u nu op zoek bent naar een vakkundige stukadoor voor het glad maken van uw muren, een tegelzetter voor uw badkamer, of een complete renovatie, bij ons bent u aan het juiste adres.
          </p>
          <p className="mb-6">
            Wij zijn trots op ons vakmanschap en staan garant voor kwaliteit, betrouwbaarheid en uitstekende service. Vanuit onze vestigingen in Limburg en Brabant bedienen wij een breed klantenbestand, van Maastricht tot Eindhoven en van Venlo tot Tilburg. Laat uw project aan ons over en ervaar zelf waarom wij worden gezien als de beste stukadoor en tegelzetter in de regio.
          </p>
          <p className="mb-6">
            Neem vandaag nog contact met ons op via het formulier hierboven, of bel ons direct op 06-45036627. Wij kijken ernaar uit om samen met u uw project tot een succes te maken!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
