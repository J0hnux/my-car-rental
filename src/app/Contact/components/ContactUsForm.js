"use client";
import "./ContactUsForm.scss";
import MapGoogle from "./GoogleMap/MapGoogle";

const ContactUsForm = () => {
  const handleSubmit = () => {
    console.log("Send details to Telegram!");
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
          {/* Re-Captcha */}
          <button>Submit</button>
        </form>
      </div>
      <div className="cont-form-right-panel">
        <div className="cont-form-rp-container">
          <MapGoogle />
          <div className="cont-form-rp-details">
            <b>
              <u>CALL US</u>
            </b>
            +63 123 456 7890
            <b>
              <u>EMAIL US</u>
            </b>
            clark.doliente@abcdefg.com
            <b>
              <u>VISIT US</u>
            </b>
            2nd Flr. 4027 Calambaga St, Calamba City, Laguna, Philippines
            <b>
              <u>OFFICE HOURS</u>
            </b>
            Monday to Sunday 8AM to 11PM
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
