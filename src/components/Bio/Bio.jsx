import React from "react";
import Image from "react-bootstrap/Image";
import "./Bio.css";

function Bio() {
  return (
    <>
      <p id="title-top" className="title">Hi! My name's Leah St. Clair</p>
      <p className="title">and I'm here to kick some ass!</p>
      <div id="profile-pic-container">
        <Image
          id="profile-pic"
          roundedCircle="true"
          thumbnail="true"
          src="https://i.imgur.com/Xpio4Xs.jpg"
          alt="Profile Picture"
        />
      </div>
    </>
  );
}

export default Bio;
