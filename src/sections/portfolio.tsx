"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tegel from "@/assets/tegelwerken.jpg";
import Stukadoor from "@/assets/stukadoorfoto.png";
import Reviews from "@/assets/stars.png";
import Nederland from "@/assets/nederland.png";

const Portfolio = () => {
  return (
    <div className=''>
    <div className="container mx-auto py-10 p-5">
      <h2 className=" text-4xl font-bold mb-16">
        Bekijk onze diensten
      </h2>

      {/* Stukadoorwerk kaart */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-md p-5 flex flex-col">
          <Image 
            src={Stukadoor}
            alt="Stukadoor aan het werk"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Professioneel Stukadoorwerk</h3>
          <p className="text-lg mb-4">
            Onze ervaren stukadoors zorgen voor strakke wanden en plafonds met technieken zoals sierpleister en glad pleisterwerk. 
            Geschikt voor zowel nieuwbouw als renovatie.
          </p>
          <div className="mt-auto">
            <Link href="/stukadoorwerk" passHref>
              <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 w-auto">
                Bekijk diensten
              </button>
            </Link>
          </div>
        </div>

        {/* Tegelzetten kaart */}
        <div className="bg-white rounded-xl shadow-md p-5 flex flex-col">
          <Image 
            src={Tegel}
            alt="Tegelzetten in de badkamer"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Tegelzetten voor Badkamers en Vloeren</h3>
          <p className="text-lg mb-4">
            Van het betegelen van badkamers tot het leggen van vloertegels, wij bieden een breed scala aan tegelzetdiensten.
          </p>
          <div className="mt-auto">
            <Link href="/tegelzetten" passHref>
              <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 w-auto">
                Bekijk diensten
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
