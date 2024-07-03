import SocialsPanel from "@/components/SocialsPanel";
import HomeHeader from "@/components/HomeHeader";
import "@/app/globals.css";
import "@/app/style.scss";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about-page">
        <SocialsPanel />
        <HomeHeader />
      </div>
    </>
  );
};

export default About;
