import Button from "@/components/button/Button";
import Link from "next/link";
import React from "react";

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="wrapper container section">
      <div>
        <p>
          Hi, here you can explore a diverse range of captivating projects that
          showcase my skills and creativity, reflecting both my diligent work
          during my studies and the enthusiastic pursuit of my passions in my
          free time.
        </p>
        <p>
          The primary technology stack I employ consists of Vanilla JS, CSS
          (including SCSS), React (with RTK and React Router). The present
          webpage is implemented using Next JS, accompanied by the efficient and
          versatile CSS framework, Tailwind.
        </p>
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
