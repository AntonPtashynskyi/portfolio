"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Poster from "@/components/poster/Poster";

const Category = ({ category }: { category: string }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <h1>Filmoteka</h1>
      <Poster
        title="Filmoteka"
        subtitle="search for the best movies for the evening"
        description="Movies portal witch offer you to follow for movies trends."
        href="https://antonptashynskyi.github.io/project-js/"
      />
    </div>
  );
};

export default Category;
