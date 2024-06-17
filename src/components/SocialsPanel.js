import "./SocialsPanel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialsPanel = () => {
  return (
    <div className="socials-panel">
      <div className="social-left-side">
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faPhone} color="#fff" />
            </span>
            +63 123 456 7890
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </span>
            clark.doliente@abcdefg.com
          </li>
        </ul>
      </div>
      <div className="social-right-side">
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebook} color="#fff" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} color="#fff" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank">
              <FontAwesomeIcon icon={faYoutube} color="#fff" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialsPanel;
