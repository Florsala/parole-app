import React from "react";
import "../styles/Servicios.css";
import person from "../assets/bxs-group.svg";
import read from "../assets/read.svg";

import down from "../assets/chevron-down.svg";

const Servicios = () => {
  return (
    <>
      <div className="Serv-container">
        <h2 className="Serv-title">Servicios</h2>

        <div className="Serv-circle-pink"></div>
        <div className="Serv-circle-dash"></div>
      </div>

      <div className="Serv-box-container">
        <div className="Serv-box">
          <div className="circle-purple">
            <img style={{ width: "3.125rem" }} src={person} alt="person" />
          </div>

          <div className="Serv-box-content">
            <h5 className="Serv-box-title">
              IT recruiting y Gestión del Talento{" "}
            </h5>
            <div style={{ height: "6.25rem" }}>
              <ul>
                <li>Planificación Estratégica</li>
                <li>Sourcing y Headhunting.</li>
                <li>Entrevistas y elaboración de informes.</li>
              </ul>
            </div>
            <img className="chevron-down" src={down} alt="" />
          </div>
        </div>

        <div className="Serv-box">
          <div className="circle-purple">
            <img style={{ width: "3.125rem" }} src={read} alt="read" />
          </div>

          <div className="Serv-box-content">
            <h5 className="Serv-box-title">
              Soft Skill Trainings para la Industria IT
            </h5>

            <div style={{ height: "6.25rem" }}>
              <ul>
                <li>
                  Soft Skills para el desarrollo profesional y la gestión de
                  talento.
                </li>
              </ul>
            </div>

            <img className="chevron-down" src={down} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
