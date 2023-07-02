import React from "react";
import Image from "next/image";

type PosterProps = {
  title: string;
  subtitle?: string;
  imagePath?: string;
  description?: string;
  href?: string;
};

const Poster = ({
  title,
  imagePath = "/images/poster_cover.jpg",
  subtitle = "Some description",
  description,
  href,
}: PosterProps) => {
  return (
    <div className="poster">
      <div className="poster__wrapper">
        <div className="poster__content">
          <a className="image_block" href={href} target="_blank">
            <img alt={title} src={imagePath} />
            <div className="image_desc">
              <h2 className="poster__title">{title}</h2>
              <p className="poster__subtitle">{subtitle}</p>
            </div>
          </a>
          {description ? (
            <div className="description_block">
              <p>{description}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Poster;
