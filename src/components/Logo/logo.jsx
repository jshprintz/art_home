import React, { useState } from "react";
import LogoModal from "../LogoModal/LogoModal";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbLamp } from "react-icons/tb";
import { BiPaint } from "react-icons/bi";
import "./Logo.css";

function LogoDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onClickHandlerDesign() {
    console.log("Handler");
    <LogoModal handleClose={handleClose} handleShow={handleShow} show={show} />;
  }

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

export default LogoDetails;
