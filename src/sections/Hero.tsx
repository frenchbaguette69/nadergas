"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/HeroBG.jpeg"
import noodleImage from "@/assets/reviews.png"
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 md:pb-20 md:pt-5 md:pb-10 bg-white overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center gap-4">
          <div className="md:w-[478px]">
            <div className="tag">Neem vrijblijvend contact op</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text mt-2 py-3">
              Limburg Stukadoor en tegelzetter
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-8">
              Bent u op zoek naar een betrouwbare tegelzetter of stukadoor dan neem vrijblijvend contact op voor een offerte. Bekijk onze tarieven pagina dan kunt u een groffe inschatting maken
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href="/contact" passHref>
              <button className="btn btn-primary">Contact</button>
              </Link>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-10, 10],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={300}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px]"
              style={{
                translateY: translateY,
              }}
            />
                      <div className="hidden sm:block md:hidden top-[524px] left-[448px]">
            <Image src={noodleImage} alt="reviews" />
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};
