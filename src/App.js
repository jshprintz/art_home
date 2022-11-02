import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AlertBar from "./components/AlertBar/AlertBar";
import Carousel from "./components/Carousel/Carousel";
import Bio from "./components/Bio/Bio";
import Logo from "./components/Logo/Logo";

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
      <Logo />



      <div id="story-buffer">
        <div id="story">
          <Bio />
        </div>
      </div>

      <div id="art-buffer">
        <div id="art">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default App;
