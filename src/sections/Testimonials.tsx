"use client";
import { motion } from "framer-motion";
import React from "react";


const testimonials = [
  {
    text: "Ik ben ontzettend tevreden met het resultaat. De muren zien er weer als nieuw uit!",
    imageSrc: "",
    name: "Pieter de Vries",
    username: "@pietertje123",
  },
  {
    text: "Uitstekende service en prachtig vakmanschap. Mijn badkamertegels zijn perfect geplaatst.",
    imageSrc: "",
    name: "Sven Jansen",
    username: "@sven.jans",
  },
  {
    text: "Zeer professioneel team dat alles netjes achterlaat. Echt een aanrader!",
    imageSrc: "",
    name: "Eva van Dijk",
    username: "@evadijk456",
  },
  {
    text: "Het werk werd snel en nauwkeurig uitgevoerd. Ik ben erg blij met het eindresultaat.",
    imageSrc: "",
    name: "Martijn Bakker",
    username: "@martijnbakker",
  },
  {
    text: "Vriendelijk personeel en uitstekende kwaliteit. Ik zou ze zeker opnieuw inhuren.",
    imageSrc: "",
    name: "Sanne Visser",
    username: "@sannevisser01",
  },
  {
    text: "Geweldige ervaring van begin tot eind. Mijn woonkamer ziet er fantastisch uit!",
    imageSrc: "",
    name: "Ruben Vermeulen",
    username: "@rubenv123",
  },
  {
    text: "Ik had nooit gedacht dat het zo makkelijk zou zijn om alles te laten doen. Super tevreden!",
    imageSrc: "",
    name: "Laura Bos",
    username: "@laurabos87",
  },
  {
    text: "Ze hebben perfect werk geleverd en waren erg behulpzaam. Aanrader!",
    imageSrc: "",
    name: "Thomas de Graaf",
    username: "@thomasg",
  },
  {
    text: "Professionele service met oog voor detail. Ik ben erg blij met de resultaten!",
    imageSrc: "",
    name: "Nina Janssen",
    username: "@ninaj1990",
  },
  {
    text: "De stukadoors waren vriendelijk en werkten erg snel. Onze muren zien er prachtig uit.",
    imageSrc: "",
    name: "Marco Kuiper",
    username: "@marcokuip",
  },
  {
    text: "Het tegelwerk in de keuken is fantastisch gedaan. Alles tot in de kleinste details afgewerkt.",
    imageSrc: "",
    name: "Lotte de Wit",
    username: "@lottedewit",
  },
  {
    text: "Mijn plafond is keurig gestukt en het team was erg professioneel. Zeker de moeite waard.",
    imageSrc: "",
    name: "Henk Meijer",
    username: "@henkmeijer",
  },
  {
    text: "Uitstekende communicatie en snelle service. Het resultaat is verbluffend!",
    imageSrc: "",
    name: "Fleur Smit",
    username: "@fleursmit",
  },
  {
    text: "Ze hebben ons echt geholpen met het plannen van ons renovatieproject. Bedankt voor de geweldige service!",
    imageSrc: "",
    name: "Bram Koster",
    username: "@bramkoster",
  },
  {
    text: "Erg blij met de afwerking van onze nieuwe badkamer. Het team was professioneel en vriendelijk.",
    imageSrc: "",
    name: "Anouk Scholten",
    username: "@anoukscholten",
  },
  {
    text: "De beste keuze die we konden maken voor onze verbouwing. Zeer kundig en betrouwbaar.",
    imageSrc: "",
    name: "David Mulder",
    username: "@davidmulder",
  },
  {
    text: "Onze woonkamer is nu een stuk lichter en ruimer. Het stucwerk is geweldig gedaan!",
    imageSrc: "",
    name: "Iris de Boer",
    username: "@irisboer89",
  },
  {
    text: "Betrouwbaar, snel en een prachtige afwerking. Ik zou ze iedereen aanraden.",
    imageSrc: "",
    name: "Max van Leeuwen",
    username: "@maxvleeuwen",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Reviews</div>
          </div>
          <h2 className="section-title mt-5">Wat onze klanten zeggen</h2>
          <p className="section-description mt-5">
            bekijk hoe tevreden onze klanten zijn met de werkzaamheden die wij hebben geleverd
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
