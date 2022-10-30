import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AlertBar from "./components/AlertBar/AlertBar";
import Carousel from "./components/Carousel/Carousel";
import Bio from "./components/Bio/Bio";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="landing-page">
      <AlertBar />
      <NavBar />
      <div id="home"></div>
      <Bio />
      <div id="story-buffer">
        <div id="story">Here is my story.</div>
      </div>

      <div id="bathroom-buffer">
        <div id="bathroom">
          <Carousel />
        </div>
      </div>

    </div>
  );
}

export default App;
