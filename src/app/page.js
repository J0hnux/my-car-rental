"use client";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Categories from "@/components/Categories";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeHeader from "@/components/HomeHeader";
import SocialsPanel from "@/components/SocialsPanel";
import Testimonials from "@/components/Testimonials";
import { GlobalProvider } from "@/context/GlobalState";

export default function Home() {
  return (
    <GlobalProvider>
      <div className="text-center w-full">
        <SocialsPanel />
        <HomeHeader />
        <Hero />
        <About />
        <FeaturedCars />
        <Categories />
        <Brands />
        <Testimonials />
        <Footer />
      </div>
    </GlobalProvider>
  );
}
