import React from "react";
import DesignCard from "../DesignCard/DesignCard";
import "./DesignComp.css"

export default function DesignComp(){
    return(
        <div id="design-containor">
            <h3 className="sub-header">Style Any Room Any Way!</h3>
            <div id="design-card-containor">
            <DesignCard imgSrc={"https://i.imgur.com/9RkvEsL.png"} imgAlt={"Farmhouse"}/>
            <DesignCard imgSrc={"https://i.imgur.com/3RsWuJO.png"} imgAlt={"Nook"}/>
            <DesignCard imgSrc={"https://i.imgur.com/DKypIiQ.png"} imgAlt={"Hallway Table"}/>
            </div>
        </div>
    )
}