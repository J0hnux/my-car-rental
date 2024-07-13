import Link from "next/link";
import "./MobileNav.scss";

const MobileNav = (props) => {
  return (
    <nav className={`mobile__nav ${props.isOpen ? "is-open" : ""} `}>
      <ul>
        <li>
          <Link href="/About" onClick={props.toggleMenu}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/Contact" onClick={props.toggleMenu}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
