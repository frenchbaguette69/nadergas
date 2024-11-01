"use client";
import Image from "next/image";
import Link from "next/link";
import muur from "@/assets/muur.jpg";

export const Hero = () => {
  return (
    <section className="md:pb-20 md:pt-5 overflow-x-clip relative" style={{ maxHeight: "900px" }}>
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full hidden md:block">
        <Image
          src={muur}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>

      <div className="md:px-52 relative z-10">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[600px] bg-white  p-10  md:p-16 rounded-3xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text mt-2 py-3">
             NOAH Stukadoor en tegelzetter
            </h2>
            <p className="text-xl text-[#010D3E] tracking-tight mt-8">
              Bent u op zoek naar een betrouwbare tegelzetter of stukadoor dan
              neem vrijblijvend contact op voor een offerte. Bekijk onze
              tarieven pagina dan kunt u een groffe inschatting maken.
            </p>
            <div className="flex gap-4 items-center mt-[30px]">
              <Link href="/contact" passHref>
                <button className="btn btn-primary">Contact</button>
              </Link>
              <Link href="https://wa.me/+31645036627" passHref>
                <button className="btn btn-primary">Whatsapp</button>
              </Link>
              <Link href="tel:+31645036627" passHref>
                <button className="btn btn-primary">Bellen</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
