"use client"

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import Footer  from "@/sections/Footer";
import Portfolio from "@/sections/portfolio";
import ReviewsSection from "@/sections/ReviewsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <ReviewsSection />
      <ProductShowcase />
      <Pricing />
      <Footer />
      
    </>
  );
}
