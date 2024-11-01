"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="md:py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-4xl font-bold text-center mt-5">Tarieven voor Stukadoor- en Tegelwerken</h2>
          <p className="section-description mt-5 text-center text-lg text-gray-600">
            Wij bieden gedetailleerde tarieven voor onze professionele diensten in stucwerk en tegelzetten. Of u nu muren of plafonds wilt laten stucen, of uw vloeren en muren wilt laten betegelen, wij bieden transparante prijzen en hoogwaardige service.
          </p>
        </div>
        <div className="flex flex-col gap-12 mt-12">

          {/* Stukadoor Tarieven */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tarieven Stukadoorwerk</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="border border-gray-300 px-4 py-2 text-left">Type Werk</th>
                    <th className="border border-gray-300 px-4 py-2">Prijs per m² (Met Materiaal)</th>
                    <th className="border border-gray-300 px-4 py-2">Prijs per m² (Zonder Materiaal)</th>
                    <th className="border border-gray-300 px-4 py-2">Dikte</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Sausklaar (gladde muren)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">€18,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">€16,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">3-4 mm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Sausklaar (glad plafond)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">€21,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">€19,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">3-4 mm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Spachtelputz (sierpleister)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">€17,00 (wanden)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">N/A</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">N/A</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Spachtelputz (plafond)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">€19,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">N/A</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Alle prijzen zijn inclusief BTW. Neem contact met ons op voor een specifieke offerte of aanvullende details.
            </p>
          </div>

          {/* Tegelzetter Tarieven */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tarieven Tegelzetter</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="border border-gray-300 px-4 py-2 text-left">Type Werk</th>
                    <th className="border border-gray-300 px-4 py-2">Prijs per m²</th>
                    <th className="border border-gray-300 px-4 py-2">Inclusief Materialen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Vloertegels leggen</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">€30,00 - €50,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Optioneel</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Muurtegels plaatsen (badkamer)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">€25,00 - €45,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Optioneel</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Mosaïek leggen</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">€40,00 - €60,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Optioneel</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Onze tarieven voor tegelzetten zijn afhankelijk van het type tegel en de complexiteit van het werk. Neem contact met ons op voor een nauwkeurige prijsopgave.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
