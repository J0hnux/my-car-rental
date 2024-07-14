"use client";
import SocialsPanel from "@/components/SocialsPanel";
import HomeHeader from "@/components/HomeHeader";
import "@/app/globals.css";
import "@/app/style.scss";
import "./About.scss";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <SocialsPanel />
      <HomeHeader />
      <div className="about-page">
        <div className="about-page-container">
          <h1>ABOUT CLARK CARS</h1>
          <div className="about-page-details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolore minima possimus earum molestias ut perferendis fuga
              praesentium incidunt nihil blanditiis labore nemo magni,
              reprehenderit quibusdam corporis, omnis commodi sed provident
              exercitationem similique optio ab quidem eligendi! Porro eaque
              praesentium, sit accusantium repellat saepe explicabo quasi eius
              illo quia totam, repellendus minus architecto dolore
              necessitatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              in aliquam ab placeat similique? Quam dolor deleniti aliquid ipsa
              earum aperiam sapiente minus sit hic modi, quibusdam accusamus.
              Voluptates illo perspiciatis voluptatum atque, iste ipsam tenetur!
              Recusandae tempora maiores impedit facere. Explicabo nostrum
              pariatur odit. Sed voluptatibus error voluptatem minima
              consequatur aliquam? Distinctio delectus sequi molestiae numquam,
              totam non accusantium nemo quaerat reiciendis commodi quae
              eveniet, ducimus perferendis iste repellendus error illo odio quam
              rerum.
            </p>
          </div>
        </div>
      </div>
      <div className="about-page-review">
        <div className="about-page-review-container">
          <h1>CLARK CARS REVIEWS</h1>
        </div>
      </div>
      <div className="about-page-footer">
        <Footer />
      </div>
    </>
  );
};

export default About;
