import React from "react";
import Image from 'react-bootstrap/Image'
import "./Bio.css"

function Bio(){
    return (
        <div id="profile-pic-container">
        <Image 
            id="profile-pic"
            roundedCircle="true"
            thumbnail="true"
            src="https://i.imgur.com/Xpio4Xs.jpg" 
            alt="Profile Picture"
            />
        </div>
    )
}

export default Bio;