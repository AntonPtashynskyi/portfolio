import React from "react";
import Button from "../button/Button";

const ContactFrom = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="name" className="contact-input" />
      <input type="text" placeholder="email" className="contact-input" />
      <textarea
        placeholder="Message to me"
        id=""
        rows="4"
        className="contact-input textarea"
      ></textarea>
      <Button title="Send" />
    </form>
  );
};

export default ContactFrom;
