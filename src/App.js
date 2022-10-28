import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AlertBar from "./components/AlertBar/AlertBar"
import Carousel from "./components/Carousel/Carousel";
import Bio from "./components/Bio/Bio";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <AlertBar />
      <NavBar />
      <div id="home"></div>
      <Bio />
      <div id="story-buffer"></div>
      <div id="story">Here is my story.</div>
      <Carousel />
      <Carousel />
      <Carousel />
    </>
  );
}

export default App;
