import React from "react";
import logo from "../assets/LOGO.svg";
import logo2 from "../assets/logo-h.svg";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div>
          <img style={{ marginLeft: "3.375rem" }} src={logo} alt="logo" />
          <img className="logo-parole" src={logo2} alt="parole" />
        </div>

        <ul className="nav-menu">
          <li className="nav-item">INICIO</li> <span className="active"></span>


          <li className="nav-item">SERVICIOS</li>
          <li className="nav-item">NOSOTROS</li>
          <li className="nav-item">CONTACTO</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
