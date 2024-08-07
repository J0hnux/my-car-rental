"use client";

import Link from "next/link";
import Image from "next/image";
import "./HomeHeader.scss";
import { useRef, useState } from "react";
import MobileNav from "./MobileNav";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnMobileNav = useRef(null);

  const toggleMenu = () => {
    setIsOpen((open) => !open);

    if (btnMobileNav.current) {
      btnMobileNav.current.style.color = isOpen ? "#000" : "#fff";
    }

    if (isOpen) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="header-container">
      <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="main-header">
        <Link className="car_logo" href="/">
          <Image
            src="/Cars_Logo.png"
            width={200}
            height={100}
            alt="Cars Logo"
          />
        </Link>
        <button
          ref={btnMobileNav}
          className="btn_mobile_nav"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="header-nav-container">
          <nav>
            <ul>
              <li>
                <Link href="/About">ABOUT</Link>
              </li>
              <li>
                <Link href="/Contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
