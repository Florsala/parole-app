import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/LogoFooter.svg";

import Linkedin from "../assets/media/linkedin.svg";
import Facebook from "../assets/media/facebook.svg";
import Instagram from "../assets/media/instagram.svg";

import Envelope from "../assets/envelope.svg";
import Location from "../assets/map.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <img className="logoFooter" src={Logo} alt="" />

        <div className="footer-icons">
          <img src={Linkedin} alt="Linkedin" />
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>

      <div className="container-info">
        <div className="footer-address">
          <h4>
            <span>
              <img src={Location} alt="Dirección" />
            </span>
            Dirección
          </h4>
          <p>La Plata - CP 1900</p>
          <p>Buenos Aires - Argentina</p>
        </div>

        <div className="footer-text">
          <h4>
            <span>
              <img src={Envelope} alt="Mail" />
            </span>
            Contacto
          </h4>
          <p>contacto@parole.com.ar</p>
          <p>+542214955544</p>
        </div>
      </div>

      <div className="bottom-footer">
<p style={{color:'white', fontWeight: '400', fontFamily: 'Nunito'}}>   &copy;{new Date().getFullYear()} Parole Consultora - Todos los derechos reservados</p>

      </div>

    </div>
  );
};

export default Footer;
