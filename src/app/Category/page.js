"use client";
import SocialsPanel from "@/components/SocialsPanel";
import HomeHeader from "@/components/HomeHeader";
import "@/app/globals.css";
import "@/app/style.scss";
import "./Category.scss";

const Category = () => {
  return (
    <>
      <div className="category-page">
        <SocialsPanel />
        <HomeHeader />
      </div>
    </>
  );
};

export default Category;
