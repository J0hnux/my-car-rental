import SocialsPanel from "@/components/SocialsPanel";
import HomeHeader from "@/components/HomeHeader";
import "@/app/globals.css";
import "@/app/style.scss";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <SocialsPanel />
      <HomeHeader />
    </div>
  );
};

export default Contact;
