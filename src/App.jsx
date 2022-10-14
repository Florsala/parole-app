import React from "react";

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import Equipo from "./components/Equipo";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <NavBar />

      <Home />
      <Servicios />
      <Equipo />
      <Contacto />

      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
