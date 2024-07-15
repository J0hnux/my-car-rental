import { useEffect, useRef, useState } from "react";
import "./Hero.scss";
import ImageSlider from "./ImageSlider";
import images from "@/data/images";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <ImageSlider>
        {images.map((image, index) => {
          return (
            <Image
              className=""
              key={index}
              src={image.imgURL}
              alt={image.imgAlt}
              width={9000}
              height={9000}
            />
          );
        })}
      </ImageSlider>
      <div className="hero-content">
        <h1>Looking to drive your own dream car?</h1>
        <Link className="hero-inquire-now" href="/Contact">
          Inquire Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
