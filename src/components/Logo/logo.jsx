import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbLamp } from "react-icons/tb";
import { BiPaint } from "react-icons/bi";
import "./logo.css";

function logoDetails() {
  function onClickHandlerDesign() {}

  function onClickHandlerArt() {}

  function onClickHandlerLighting() {}

  return (
    <div id="logo-container">
      <button href="#" className="icon-btn">
        <MdOutlineDesignServices
          size={60}
          className="icons"
          onClick={onClickHandlerDesign}
        />
      </button>
      <button href="#" className="icon-btn">
        <BiPaint size={60} className="icons" onClick={onClickHandlerArt} />
      </button>
      <button href="#" className="icon-btn">
        <TbLamp size={60} className="icons" onClick={onClickHandlerLighting} />
      </button>
    </div>
  );
}

export default logoDetails;
