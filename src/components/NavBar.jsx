import React, { useState, useRef } from "react";
import logo from "../assets/LOGO.svg";
import logo2 from "../assets/logo-h.svg";

import Hamburger from "../assets/hamburger.svg";
import Xbar from "../assets/xbar.svg";

const NavBar = () => {

const inicio = useRef(null);
const servicios = useRef(null);
const nosotros = useRef(null);
const contacto = useRef(null);

const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};



  const [click, setClick] = useState(false);
  /*  const [open, setOpen] = useState(false); */

  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="navbar">
        <div style={{ display: "flex", flexFlow: "row nowrap" }}>
          <img
            style={{ marginLeft: "5.375rem", width: "3.125rem" }}
            src={logo}
            alt="logo"
          />
          <img className="logo-parole" src={logo2} alt="parole" />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li onClick={() => scrollToSection(inicio)} className="nav-item">INICIO</li> <span className="active-menu"></span>
          <li  onClick={() => scrollToSection(servicios)} className="nav-item">SERVICIOS</li>
          <li  onClick={() => scrollToSection(nosotros)} className="nav-item">NOSOTROS</li>
          <li  onClick={() => scrollToSection(contacto)} className="nav-item">CONTACTO</li>
        </ul>
      </div>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <img src={Xbar} alt="X" />
        ) : (
          <img src={Hamburger} alt="menu" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
