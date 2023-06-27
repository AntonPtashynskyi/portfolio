import React from "react";
import "./button.scss";

const Button = ({ title }: { title: String }) => {
  return (
    <button className="btn">
      <div className="btn__inner-wrapper">{title}</div>
    </button>
  );
};

export default Button;
