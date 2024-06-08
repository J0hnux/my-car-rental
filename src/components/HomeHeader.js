import Link from "next/link";
import "./HomeHeader.scss";
import SignInButton from "./SignInButton";
import SocialsPanel from "./SocialsPanel";

const HomeHeader = () => {
  return (
    <div className="header-container">
      <SocialsPanel />
      <div className="main-header">
        <button className="mobile_nav">
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
        <h1>
          <Link className="logo-text" href="/">
            CLARK CARS
          </Link>
        </h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
              <li>
                <Link href="/Login">Inquire Now</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
