import captchaData from "@/data/captcha";
import Captcha from "./Captcha/Captcha";
import "./ContactUsForm.scss";
import MapGoogle from "./GoogleMap/MapGoogle";
import { useEffect, useState } from "react";

const ContactUsForm = () => {
  const [randomCaptcha, setRandomCaptcha] = useState(null);
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (answer === randomCaptcha.answer) {
      alert("Proceed");
    } else {
      alert("Try again!");
    }
  };

  useEffect(() => {
    setRandomCaptcha(getRandomItem(captchaData));
  }, []);

  const getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  return (
    <>
      <div className="contact-form-container">
        <h1 className="contact-form-header">CONTACT US</h1>
        <form className="contact-form-area" onSubmit={handleSubmit}>
          <div className="cont-form-horizontal-field">
            <div className="cont-form-element">
              <label htmlFor="text">First Name</label>
              <input type="text" placeholder="First Name" />
            </div>

            <div className="cont-form-element">
              <label htmlFor="text">Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="cont-form-horizontal-field">
            <div className="cont-form-element">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="cont-form-element">
              <label htmlFor="email">Confirm Email</label>
              <input type="email" placeholder="Confirm Email" />
            </div>
          </div>
          <div className="cont-form-element cfe-last">
            <label htmlFor="text">Phone Number</label>
            <input type="text" placeholder="+" />
          </div>
          <div className="cont-form-element cfe-last">
            <label htmlFor="text">Message</label>
            <textarea placeholder="message" />
          </div>
          {/* Captcha */}
          {randomCaptcha ? (
            <Captcha
              imgURL={randomCaptcha.imgURL}
              imgAlt={randomCaptcha.imgAlt}
              value={(e) => setAnswer(e.target.value)}
            />
          ) : (
            "Loading Captcha..."
          )}
          <button className="mt-6">Submit</button>
        </form>
      </div>
      <div className="cont-form-right-panel">
        <div className="cont-form-rp-container">
          <MapGoogle />
          <div className="cont-form-rp-details">
            <b>
              <u>
                <p>CALL US</p>
              </u>
            </b>
            <p>+63 123 456 7890</p>
            <b>
              <u>
                <p>EMAIL US</p>
              </u>
            </b>
            <p>clark.doliente@abcdefg.com</p>
            <b>
              <u>
                <p>VISIT US</p>
              </u>
            </b>
            <p>2nd Flr. 4027 Calambaga St, Calamba City, Laguna, Philippines</p>
            <b>
              <u>
                <p>OFFICE HOURS</p>
              </u>
            </b>
            <p>Monday to Sunday 8AM to 11PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
