import React from "react";
import "../styles/Equipo.css";
import dots from "../assets/dots.svg";

import Dana from "../assets/Equipo/Dana.png";
import Lorena from "../assets/Equipo/Lorena.png";

import Daiana from "../assets/Equipo/Daiana.png";

const Equipo = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${dots})`,

        backgroundRepeat: "repeat",
        height: "60rem",
      }}
    >
      <div className="Eq-container">
        <h2 className="Serv-title">Nuestro equipo</h2>

        <div className="Eq-circle-pink"></div>
        <div className="Eq-circle-dash"></div>
      </div>
      <div className="Eq-container-p">
        <div className="Eq-container-p-box">
          <div className="box-img" >
            <img src={Dana} alt="Dana Licht" />
            <div className="drop"></div>
          </div>
          <div className="box-text" >
            <h5>Dana Licht</h5>
            <ul>
              <li>Desarrollo del capital humano en soft skills.</li>
              <li>Reclutadora IT.</li>
              <li>Coach Ontológico y Organizacional.</li>
              <li>Asesora de Imagen.</li>
            </ul>
          </div>
        </div>

        <div className="Eq-container-p-box">
          <div className="box-img">
            <img src={Lorena} alt="Lorena Nardi" />
            <div className="drop"></div>
          </div>
          <div className="box-text">
            <h5>Lorena Nardi</h5>
            <ul>
              <li>Desarrollo del capital humano en soft skills.</li>
              <li>Reclutadora IT.</li>
              <li>Coach Ontológico y Organizacional.</li>
              <li>Bioingeniera.</li>
            </ul>
          </div>
        </div>

        <div className="Eq-container-p-box">
          <div className="box-img">
            <img src={Daiana} alt="Daiana Perez" />
            <div className="drop"></div>
          </div>
          <div className="box-text">
            <h5>Daiana Perez Mamakiant</h5>
            <ul>
              <li>Lic. en Gestión de Negocios.</li>
              <li>Técnica superior de RRHH.</li>
              <li>Coach Ontológico.</li>
              <li>Estudiante avanzada de Máster en Dirección de RRHH.</li>
              <li>Máster en Gestión de Equipos y MBA.</li>
            </ul>
          </div>
        </div>
      </div>



<div className="trab-container">

    <div className="trab-container-text">
        <h3>Trabajá con nosotros</h3>
    </div>


</div>

    </div>
  );
};

export default Equipo;
