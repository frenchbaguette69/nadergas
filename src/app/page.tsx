import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import Portfolio from "@/sections/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <ProductShowcase />
      
      <Pricing />
      <Testimonials />
      <Footer />
      
    </>
  );
}
