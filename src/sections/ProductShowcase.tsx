"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TegelZetter from "@/assets/tegelzetter.webp";
import StukaDoor from "@/assets/stukadoor.jpg";


export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#19ce89]/50 md:py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <h2 className="text-4xl font-bold text-center mt-5">Tarieven voor stukadoor en tegelwerken</h2>
          <p className="section-description mt-5">
            Wij bieden stukadoor diensten voor het plafond en voor de muren.
            Daarnaast bieden wij ook tegelzetten voor vloer en muur.
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-8">
  {/* Stukadoor Werk Card */}
  <div className="bg-white shadow-lg rounded-xl grid md:grid-cols-2 overflow-hidden">
    <div className="p-4">
      <Image
        src={StukaDoor}
        alt="Stukadoor in Roermond, Limburg en Brabant"
        className="rounded-lg object-cover h-full w-full"
      />
    </div>
    <div className="flex flex-col justify-center items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800">Stukadoor Werk</h2>
      <p className="text-gray-600 mt-4 text-center">
        Als stukadoor in Roermond bieden wij professionele stucwerkzaamheden voor zowel muren als plafonds. Onze diensten zijn beschikbaar in Limburg en Brabant, en wij werken zowel met als zonder materialen.
      </p>
      <ul className="mt-6 text-left text-gray-600 list-disc list-inside">
        <strong>Met materiaal:</strong>
        <ul className="list-disc list-inside ml-5">
          <li>Sausklaar (zeer gladde muren): €18,00 p/m² (wanden) +/- 3 á 4 mm dikte</li>
          <li>Sausklaar (zeer glad plafond): €21,00 p/m² (plafond) +/- 3 á 4 mm dikte</li>
        </ul>
        <strong>Zonder materiaal:</strong>
        <ul className="list-disc list-inside ml-5">
          <li>Sausklaar (zeer gladde muren): €16,00 p/m² (wanden) +/- 3 á 4 mm dikte</li>
          <li>Sausklaar (zeer glad plafond): €19,00 p/m² (plafond) +/- 3 á 4 mm dikte</li>
        </ul>
       <strong>Spachtelputz (sierpleister):</strong>
        <ul className="list-disc list-inside ml-5">
          <li>€17,00 p/m² (wanden)</li>
          <li>€19,00 p/m² (plafond)</li>
        </ul>
      </ul>
    </div>
  </div>

  {/* Tegelzetter Werk Card */}
  <div className="bg-white shadow-lg rounded-xl grid md:grid-cols-2 overflow-hidden">
    <div className="p-4">
      <Image
        src={TegelZetter}
        alt="Tegelzetter in Roermond, Limburg en Brabant"
        className="rounded-lg object-cover h-full w-full"
      />
    </div>
    <div className="flex flex-col justify-center items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800">Tegelzetter Werk</h2>
      <p className="text-gray-600 mt-4 text-center">
        Als ervaren tegelzetter bieden wij kwalitatieve tegelwerkzaamheden in Roermond en omgeving, actief in zowel Limburg als Brabant. Wij werken met diverse soorten tegels en zorgen voor een professioneel afgewerkt resultaat. Bent u opzoek naar een tegelzetter in limburg. Neem dan vrijblijven contact op
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};
