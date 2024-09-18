// src/app/tarieven/page.tsx (Tarieven-pagina)
import React from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

// Gebruik de nieuwe Metadata API
export const metadata = {
  title: 'Tarieven - Noah Stukadoors | Stukadoor en Tegelzetter in Limburg & Brabant',
  description: 'Bekijk de tarieven voor stukadoor en tegelzetter diensten bij Noah Stukadoors in Limburg en Brabant. Transparante prijzen voor stucwerk en tegelwerk.',
};

const Tarieven = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Tarieven</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p className="mb-6 text-center">
            Bij <strong>Noah Stukadoors</strong> bieden wij transparante en eerlijke tarieven voor al onze diensten, zodat u precies weet waar u aan toe bent. Van het sausklaar maken van muren tot tegelzetwerk, wij hebben voor ieder project een passende oplossing.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Stukadoor Tarieven</h2>
          <p className="mb-6">
            Onze stukadoor tarieven zijn gebaseerd op het type werk dat u wilt laten uitvoeren. Hieronder vindt u een overzicht van onze prijzen voor de meest voorkomende diensten:
          </p>
          
          <h3 className="text-2xl font-semibold mt-6 mb-4">Met Materiaal</h3>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>Sausklaar (zeer gladde muren):</strong> €18,00 per m² (wanden), +/- 3 á 4 mm dikte</li>
            <li className="mb-2"><strong>Sausklaar (zeer glad plafond):</strong> €21,00 per m² (plafond), +/- 3 á 4 mm dikte</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-4">Zonder Materiaal</h3>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>Sausklaar (zeer gladde muren):</strong> €16,00 per m² (wanden), +/- 3 á 4 mm dikte</li>
            <li className="mb-2"><strong>Sausklaar (zeer glad plafond):</strong> €19,00 per m² (plafond), +/- 3 á 4 mm dikte</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-4">Spachtelputz (Sierpleister)</h3>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2"><strong>Spachtelputz (wanden):</strong> €17,00 per m²</li>
            <li className="mb-2"><strong>Spachtelputz (plafond):</strong> €19,00 per m²</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Tegelzetter Prijzen</h2>
          <p className="mb-6">
            Voor tegelwerk bieden wij prijzen op aanvraag. Neem contact met ons op voor een gepersonaliseerde offerte op basis van uw specifieke projectbehoeften en locatie.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Waarom Kiezen voor Noah Stukadoors?</h2>
          <p className="mb-6">
            Bij Noah Stukadoors garanderen wij vakmanschap en een scherpe prijs-kwaliteitverhouding. Met onze vestigingen in Limburg en Brabant bieden wij een snelle en betrouwbare service, waar u ook woont. Of u nu een ervaren stukadoor of een deskundige tegelzetter zoekt, ons team staat klaar om uw project tot een succes te maken.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Neem Contact met Ons Op voor een Vrijblijvende Offerte</h2>
          <p className="mb-6">
            Heeft u specifieke wensen of bent u benieuwd naar een prijsopgave voor uw project? Neem vandaag nog contact met ons op voor een vrijblijvende offerte. Wij denken graag met u mee en bieden een oplossing op maat.
          </p>
          <p className="text-center mt-8 text-4xl">
            <a href="/contact" className="text-blue-600 hover:underline">Klik hier om contact met ons op te nemen</a><br /> of bel ons op +31 6 16289147.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Tarieven;
