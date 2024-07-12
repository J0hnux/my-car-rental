"use client";
import SocialsPanel from "@/components/SocialsPanel";
import HomeHeader from "@/components/HomeHeader";
import "@/app/globals.css";
import "@/app/style.scss";
import "./Contact.scss";
import ContactUsForm from "@/components/ContactUsForm";

const Contact = () => {
  return (
    <div className="contact">
      <SocialsPanel />
      <HomeHeader />
      <ContactUsForm />
    </div>
  );
};

export default Contact;
