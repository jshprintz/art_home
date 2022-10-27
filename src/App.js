import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AlertBar from "./components/AlertBar/AlertBar"
import Carousel from "./components/Carousel/Carousel";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <AlertBar />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </>
  );
}

export default App;
