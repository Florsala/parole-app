import React, { useState } from "react";
import logo from "../assets/LOGO.svg";
import logo2 from "../assets/logo-h.svg";

import Hamburger from "../assets/hamburger.svg";
import Xbar from "../assets/xbar.svg";
import { HashLink as Link } from 'react-router-hash-link';


const NavBar = () => {


  const [click, setClick] = useState(false);
  /*  const [open, setOpen] = useState(false); */

  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-logos" >
          <img className="logo-P" src={logo} alt="logo" />
          <img className="logo-parole" src={logo2} alt="parole" />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li onClick={() => scrollToSection(inicio)} className="nav-item">
            <Link to="/#inicio" smooth>INICIO</Link>
            
          </li>
          <span className="active-menu"></span>
          <li onClick={() => scrollToSection(servicios)} className="nav-item">
            <Link to="/#servicios" smooth> SERVICIOS</Link>
           
          </li>
          <li onClick={() => scrollToSection(nosotros)} className="nav-item">
            <Link to="/#nosotros" smooth>NOSOTROS</Link>
            
          </li>
          <li onClick={() => scrollToSection(contacto)} className="nav-item">
            <Link to="/#contacto" smooth>CONTACTO</Link>
            
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <img src={Xbar} alt="X" />
          ) : (
            <img src={Hamburger} alt="menu" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
