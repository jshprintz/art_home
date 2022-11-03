import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AlertBar from "./components/AlertBar/AlertBar";
import Carousel from "./components/Carousel/Carousel";
import Bio from "./components/Bio/Bio";
import LogoModal from "./components/LogoModal/LogoModal";
import DesignComp from "./components/DesignComp/DesignComp";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="landing-page">
      <AlertBar />
      <NavBar />
      <div id="home"></div>
      <Carousel />
      <div id="logo-details"></div>
      <LogoModal />
      <div id="designs-details"></div>
      <DesignComp />
      <div id="story-containor">
        <div id="story">
          <Bio />
        </div>
      </div>
      <div id="reviews-containor">
        
      </div>
    </div>
  );
}

export default App;
