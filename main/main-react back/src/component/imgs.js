import React from "react";
import clone1 from "../imgs/projects/clone1.png";
import clone2 from "../imgs/projects/clone2.png";
import clone3 from "../imgs/projects/clone3.png";
import html01 from "../imgs/projects/html01.png";
import html02 from "../imgs/projects/html02.png";
import html03 from "../imgs/projects/html03.png";
import html04 from "../imgs/projects/html04.png";
import html05 from "../imgs/projects/html05.png";
import html06 from "../imgs/projects/html06.png";
import html07 from "../imgs/projects/html07.png";
import html08 from "../imgs/projects/html08.png";
import html09 from "../imgs/projects/html09.png";
import mobile01 from "../imgs/projects/mobile01.png";
import mobile02 from "../imgs/projects/mobile02.png";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const images = {
  clone1,
  clone2,
  clone3,
  html01,
  html02,
  html03,
  html04,
  html05,
  html06,
  html07,
  html08,
  html09,
  mobile01,
  mobile02,
};

const ImageManager = ({ imageKey }) => {
  const imageSrc = images[imageKey];

  if (!imageSrc) {
    return <p>Image not found</p>;
  }

  return (
    <div>
      <div>
        <img
          src={imageSrc}
          alt={imageKey}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default ImageManager;
