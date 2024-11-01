import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="px-24 flex flex-col">
        <div className="text-left md:text-left mb-6 md:mb-10">
          <div>
            <h2 className="text-4xl font-extrabold tracking-widest">NOAH STUKADOOR</h2>
            <p className="mt-2">Bel direct met een van onze vakmannen op:</p>
            <a href="tel:+31645036627" className="text-green-500 hover:underline">
            +31 6 45036627
            </a>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg w-full md:flex justify-between hidden">
          <div><h3 className="text-2xl font-semibold text-black">
            Bereken je voordeel
          </h3>
          <p className="text-gray-600">
            Binnen 24 uur gratis en vrijblijvend advies.
          </p>
          </div>
          <div className="flex">
  <Link
    href="/contact"
    className="bg-green-500 text-white px-8 py-4 text-xl font-semibold rounded-md hover:bg-green-600"
  >
    Vrijblijvende offerte
  </Link>
</div>

        </div>
      </div>
      <div className="text-center mt-6 text-gray-500 text-sm">
        <a href="https://pafb.nl" className="hover:underline">
        gemaakt door PAFB.NL
        </a>{""}
        &nbsp; | &nbsp;{" "}
        <a href="/stukadoorwerk" className="hover:underline">
          Stukadoorwerk
        </a>{" "}
        &nbsp; | &nbsp;{" "}
        <a href="#" className="hover:underline">
          Privacybeleid
        </a>
      </div>
    </footer>
  );
};

export default Footer;
