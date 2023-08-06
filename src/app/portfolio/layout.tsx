import Button from "@/components/button/Button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="wrapper container section">
      <div className="portfolio-context">
        <div className="portfolio-description">
          <h1 className="portfolio-title">Portfolio</h1>
          <p>
            Hi, here you can explore a diverse range of captivating projects
            that showcase my skills and creativity, reflecting both my diligent
            work during my studies and the enthusiastic pursuit of my passions
            in my free time.
          </p>
          <p>
            The primary technology stack I employ consists of Vanilla{" "}
            <span>JS, CSS SCSS</span>,{" "}
            <span>React (with RTK and React Router)</span>. The present webpage
            is implemented using <span>Next JS</span>, accompanied by the
            efficient and versatile CSS framework, <span>Tailwind</span>.
          </p>
        </div>
        <div className="flex-1 p-[1px] bg-slate-50 image-gradient">
          <div className=" w-full h-full p-3 bg-primary_bg">
            <div className="portfolio-image">
              <Image
                alt="portfolio image"
                src="/images/poster_cover.jpg"
                width={750}
                height={350}
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-layout">
        <div className="portfolio-layout--link">
          <Link href="/portfolio/b">
            <Button title="Filmoteka" />
          </Link>
          <Link href="/portfolio/d">
            <Button title="Ice Cream Shop" />
          </Link>
          <Link href="/portfolio/c">
            <Button title="Phone Book" />
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
};

export default PortfolioLayout;
