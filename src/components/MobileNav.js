import Link from "next/link";
import "./MobileNav.scss";

const MobileNav = (props) => {
  return (
    <nav className={`mobile__nav ${props.isOpen ? "is-open" : ""} `}>
      <ul>
        <li>
          <Link href="/About">ABOUT</Link>
        </li>
        <li>
          <Link href="/Contact">CONTACT US</Link>
        </li>
        <li>
          <Link href="/Login">INQUIRE NOW</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
