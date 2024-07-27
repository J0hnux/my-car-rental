"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import "./FeaturedCar.scss";

const FeaturedCar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnShowModal = useRef(null);
  const fCarDetCont = useRef(null);

  const toggleMenu = () => {
    setIsOpen((open) => !open);

    if (isOpen) {
      btnShowModal.current.innerText = "<";
      if (fCarDetCont.current) {
        fCarDetCont.current.style.backgroundColor = "transparent";
      }
    } else {
      btnShowModal.current.innerText = ">";
      if (fCarDetCont.current) {
        fCarDetCont.current.style.backgroundColor = "#b4b4b4";
      }
    }
  };

  return (
    <div className="featured-car-card">
      <Image
        className="featured-car-card-img"
        src={props.imgURL}
        alt={props.imgAlt}
        width={900}
        height={900}
      />

      <div ref={fCarDetCont} className="featured-car-details-container">
        <button ref={btnShowModal} onClick={toggleMenu}>
          {"<"}
        </button>
        <div
          className={`featured-car-details ${
            isOpen ? "modal-expanded" : "modal-collapsed"
          }`}
        >
          <h2>{props.name}</h2>
          <ul>
            {props.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCar;
