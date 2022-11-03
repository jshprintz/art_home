import React from "react";
import "./DesignCard.css";

export default function DesignCard({ imgAlt, imgSrc }) {

    //I think this needs to actually be a card instead of just an image.
    // either that, or we utilize object-fit property and just designate a set height and width




  return (
    <div id="design-card">
      <img id="design-img" src={imgSrc} alt={imgAlt} />
      <div id="image-overlay">
        <div id="text">{imgAlt}</div>
      </div>
    </div>
  );
}
