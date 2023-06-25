import React from "react";
import "./button.scss";

const Button = ({ children }: { children: String }) => {
  return <button className="button">{children}</button>;
};

export default Button;
