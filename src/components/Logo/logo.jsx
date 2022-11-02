import React from 'react';
import { MdOutlineDesignServices } from "react-icons/md";
import { TbLamp } from "react-icons/tb";
import { BiPaint } from "react-icons/bi";
import "./logo.css";

function logoDetails() {
    
    
    return(
        <div id='logo-container'>

            <MdOutlineDesignServices size={60} className="icons"/>
            <BiPaint size={60} className="icons"/>
            <TbLamp size={60} className="icons"/>
            
        </div>
    )
}

export default logoDetails;