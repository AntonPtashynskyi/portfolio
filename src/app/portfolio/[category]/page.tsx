"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Poster from "@/components/poster/Poster";
import Button from "@/components/button/Button";
import Link from "next/link";
import Image from "next/image";

const Category = ({ category }: { category: string }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <h1>Filmoteka</h1>
      <div className="py-6">
        <Poster
          title="Filmoteka"
          subtitle="search for the best movies for the evening"
          description="Movies portal witch offer you to follow for movies trends."
          href="https://antonptashynskyi.github.io/project-js/"
        />
      </div>
      <div className="additional-info md:flex md:flex-row-reverse justify-center items-center py-24 ">
        <div className="additional-info__description flex-1 md:pl-24">
          <h2>Project title and some additional information</h2>
          <p>
            Explain what your project is about: what kind of problem does it
            solve, who is the target group, and how does it provide a sufficient
            solution?
          </p>
          <Link href="https://antonptashynskyi.github.io/project-js/">
            <Button title={"Visit page"}></Button>
          </Link>
        </div>
        <div className="additional-info__images flex items-center  justify-center flex-1 md:max-w-[340px]">
          <div className="relative flex gap-3">
            <Image
              alt="Filmoteka library screen"
              src="/images/filmoteka/filmoteka-library-screen.jpg"
              className="image-filmoteka image-filmoteka--library"
              width={250}
              height={400}
            />
            <Image
              alt="Filmoteka home screen"
              src="/images/filmoteka/filmoteka-home-screen.jpg"
              className="image-filmoteka image-filmoteka--home"
              width={250}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="features"></div>
      <div className="more-features"></div>
      <div className="achievement"></div>
    </div>
  );
};

export default Category;
