import React from "react";
import Image from "next/image";
import ContactFrom from "@/components/contactForm/ContactFrom";

const Contacts = () => {
  return (
    <section className="section wrapper container contact-section">
      <div className="contact-section--content">
        <div className="contact-section--image-container">
          <Image
            src="/images/contact.jpg"
            fill={true}
            alt="contact cover"
            className="contact-section--image"
          />
          <h1 className="contact-section--title">Let's keep in touch!</h1>
        </div>
        <ContactFrom />
      </div>
    </section>
  );
};

export default Contacts;
