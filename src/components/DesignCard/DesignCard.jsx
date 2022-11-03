import React from "react";
import "./DesignCard.css";

export default function DesignCard({ imgAlt, imgSrc }) {
  return (
    <div id="design-card">
      <div id="image-overlay">
        <img
          id="design-img"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    </div>
  );
}
