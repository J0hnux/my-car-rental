"use client";
import Categories from "@/components/Categories";
import ContentPanel from "@/components/ContentPanel";
import FeaturedCars from "@/components/FeaturedCars";
import Hero from "@/components/Hero";
import HomeHeader from "@/components/HomeHeader";
import SignInButton from "@/components/SignInButton";

export default function Home() {
  return (
    <div className="">
      <div className="text-center w-full">
        <HomeHeader />
        <Hero />
        <FeaturedCars />
        <Categories />
      </div>
    </div>
  );
}
