"use client";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Categories from "@/components/Categories";
import FeaturedCars from "@/components/FeaturedCars";
import Hero from "@/components/Hero";
import HomeHeader from "@/components/HomeHeader";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <div className="text-center w-full">
        <HomeHeader />
        <Hero />
        <About />
        <FeaturedCars />
        <Categories />
        <Brands />
        <Testimonials />
      </div>
    </div>
  );
}
