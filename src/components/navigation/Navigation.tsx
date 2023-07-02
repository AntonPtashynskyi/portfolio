"use client";

import React, { useState } from "react";
import { useWindowSize } from "usehooks-ts";

import NavBar from "../navbar/NavBar";
import MenuButton from "../menuButton/MenuButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = useWindowSize();

  const isDesktop = width < 1024;

  return (
    <div className="nav-container">
      {isDesktop ? <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} /> : ""}
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} isDesktop={isDesktop} />
    </div>
  );
};

export default Navigation;
