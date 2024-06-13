import { useEffect, useRef, useState } from "react";
import "./Hero.scss";
import ImageSlider from "./ImageSlider";
import images from "@/data/images";

const Hero = () => {
  return (
    <div className="hero">
      <ImageSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </ImageSlider>
      <div className="hero-content">
        <h1>Looking to drive your own dream car?</h1>
        <button>Inquire Now</button>
      </div>
    </div>
  );
};

export default Hero;
