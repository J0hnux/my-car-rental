import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image-slider">
        <img src="/Hero.jpg" alt="luxury car image" />
      </div>
      <div className="hero-content">
        <h1>Looking to drive your own dream car?</h1>
        <button>Inquire Now</button>
      </div>
    </div>
  );
};

export default Hero;
