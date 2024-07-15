import Image from "next/image";

const Captcha = (props) => {
  return (
    <div className="contact-form-captcha">
      <h1>VERIFY YOU{"'"}RE HUMAN</h1>
      <div className="cfc-captcha-area">
        <Image
          className="cfcca-captcha-image"
          src={props.imgURL}
          alt={props.imgAlt}
          width={150}
          height={150}
        />
        <input
          className="cfcca-your-answer"
          type="text"
          placeholder="Your answer..."
        />
      </div>
    </div>
  );
};

export default Captcha;
