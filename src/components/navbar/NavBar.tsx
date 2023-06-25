import Link from "next/link";
import Image from "next/image";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
    iconPath: "/images/svg/home-icon.svg",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
    iconPath: "/images/svg/pallet-icon.svg",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
    iconPath: "/images/svg/miter-icon.svg",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
    iconPath: "/images/svg/linkedin-icon.svg",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contacts",
    iconPath: "/images/svg/photo-icon.svg",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
    iconPath: "/images/svg/ball-icon.svg",
  },
];

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__wrapper">
        <ul className="flex flex-col items-center gap-[2px]">
          {links?.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={`nav-bar__link ${
                link.title === "Contact" ? "line" : ""
              }`}
            >
              <Image
                alt={link.title}
                src={link.iconPath}
                width={32}
                height={32}
                className="nav-bar__icon"
              />
              <p className="nav-bar__title">{link.title}</p>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
