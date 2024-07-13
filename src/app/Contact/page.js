"use client";
import SocialsPanel from "@/components/SocialsPanel";
import HomeHeader from "@/components/HomeHeader";
import "@/app/globals.css";
import "@/app/style.scss";
import "./Contact.scss";
import ContactUsForm from "./components/ContactUsForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <SocialsPanel />
      <HomeHeader />
      <div className="contact">
        <ContactUsForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
