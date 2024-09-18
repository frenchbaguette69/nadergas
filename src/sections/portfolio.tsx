import React from 'react';
import Image from 'next/image';
import Tegel from "@/assets/tegelwerken.jpg";
import Stukadoor from "@/assets/stukadoorfoto.png"
import Reviews from "@/assets/stars.png"
import Nederland from "@/assets/nederland.png"

const Portfolio = () => {
  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-center text-4xl font-bold mb-16">
        Wij bieden Stukadoorwerk en Tegelzetten in Heel Nederland
      </h2>

      {/* Sectie over Stukadoorwerk */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Professioneel Stukadoorwerk</h3>
        <p className="mb-4 text-lg">
          Stukadoorwerk is een essentieel onderdeel van elk bouw- of renovatieproject. Onze stukadoors door heel Nederland
          zijn ervaren vakmensen die zorgen voor strakke wanden en plafonds, of het nu gaat om nieuwbouw of renovatie. 
          Wij leveren zowel traditioneel als modern stukadoorwerk, waarbij we verschillende technieken gebruiken, 
          zoals sierpleister, glad pleisterwerk, en spachtelputz.
        </p>
        <p className="mb-4 text-lg">
          Of u nu een klein project hebt of een groot project voor uw hele huis, wij bieden flexibele opties aan, 
          altijd met oog voor detail en kwaliteit. Wij werken met hoogwaardige materialen en streven ernaar om 
          elke klus snel en efficiënt af te ronden.
        </p>
        <div className="my-8">
          <Image 
            src={Stukadoor}
            alt="Stukadoor aan het werk" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Sectie over Tegelzetten */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Tegelzetten voor Badkamers en Vloeren</h3>
        <p className="mb-4 text-lg">
          Naast stukadoorwerk, zijn wij ook gespecialiseerd in tegelzetten. Van het betegelen van badkamers tot het leggen van 
          vloertegels in woonkamers of keukens, wij bieden een breed scala aan tegelzetdiensten door heel Nederland.
        </p>
        <p className="mb-4 text-lg">
          Tegels zijn een duurzaam en veelzijdig materiaal dat perfect is voor zowel natte als droge ruimtes. Wij werken met 
          verschillende soorten tegels, zoals keramiek, natuursteen, en mozaïek, en zorgen voor een nauwkeurige plaatsing met 
          strakke voegen. 
        </p>
        <p className="mb-4 text-lg">
          Onze vakmensen zorgen ervoor dat elke tegel op de juiste manier wordt geplaatst, zodat u jarenlang van uw vloer of 
          badkamer kunt genieten. Wij houden altijd rekening met uw wensen en adviseren over de beste tegelopties die passen 
          bij de ruimte en het gebruik ervan.
        </p>
        <div className="my-8">
          <Image 
            src={Tegel}
            alt="Tegelzetten in de badkamer" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Sectie over Werkgebieden */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Werkgebied: Heel Nederland</h3>
        <p className="mb-4 text-lg">
          Wij bieden onze diensten aan in heel Nederland, waar we al vele tevreden klanten hebben geholpen met hun 
          stukadoor- en tegelzetprojecten. Of u nu in Amsterdam, Rotterdam, Utrecht, Groningen of een andere plaats woont, 
          wij staan klaar om uw project tot een succes te maken.
        </p>
        <p className="mb-4 text-lg">
          Door onze landelijke dekking kunnen wij snel en flexibel inspelen op uw wensen. Neem vandaag nog contact met ons op 
          voor een vrijblijvende offerte!
        </p>
        <div className="my-8">
          <Image 
            src={Nederland}
            alt="Werkgebied in heel Nederland" 
            width={200} 
            height={100} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Waarom kiezen voor ons */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Waarom Kiezen Voor Onze Diensten?</h3>
        <p className="mb-4 text-lg">
          Bij ons krijgt u vakmanschap van de hoogste kwaliteit. Wij bieden:
        </p>
        <ul className="list-disc ml-5 text-lg">
          <li className="mb-2">Jarenlange ervaring in stukadoor- en tegelwerk</li>
          <li className="mb-2">Hoogwaardige materialen en afwerking</li>
          <li className="mb-2">Flexibele planning en snelle uitvoering</li>
          <li className="mb-2">Diensten beschikbaar in heel Nederland</li>
        </ul>
        <p className="mb-4 text-lg">
          Onze klanten waarderen ons oog voor detail, onze klantgerichte aanpak, en het feit dat we altijd streven naar 
          een perfect eindresultaat. Neem gerust contact met ons op voor meer informatie over wat wij voor u kunnen betekenen.
        </p>
      </div>
      <div className="my-8">
          <Image 
            src={Reviews}
            alt="Stukadoor aan het werk" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>
    </div>
  );
}

export default Portfolio;
