import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero_left_panel">
        <h1>Hero</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          blanditiis id officia illum iure nulla incidunt ea similique hic saepe
          necessitatibus dicta dolorum quam sunt animi quia sit vitae quaerat?
        </p>
      </div>
      <div className="hero_img_container">
        <img src="/Hero.png" alt="hero.png" />
      </div>
    </section>
  );
};

export default Hero;
