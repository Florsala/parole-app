import React from "react";
import "../styles/Servicios.css";
import person from "../assets/bxs-group.svg";
import read from "../assets/read.svg";

import down from "../assets/chevron-down.svg";
import dots from "../assets/dots.svg";


import Slider from "./Slider";

const Servicios = () => {
  return (
    <>
      <section
        id="servicios"
        style={{
          backgroundImage: `url(${dots})`,

          backgroundRepeat: "repeat",
          /* height: "60rem", */
        }}
      >
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
              <div style={{ height: "4.5rem", overflowY: "clip" }}>
                <ul>
                  <li>Planificación Estratégica</li>
                  <li>Sourcing y Headhunting.</li>
                  <li>Entrevistas y elaboración de informes.</li>
                  <li>Engagement y fidelización del colaborador.</li>
                  <li>Onboarding.</li>
                </ul>
              </div>
              <img className="chevron-down_svs" src={down} alt="" />
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

              <div style={{ height: "4.5rem", overflowY: "clip" }}>
                <ul>
                  <li>
                    Soft Skills para el desarrollo profesional y la gestión de
                    talento.
                  </li>
                  <li>Diseño y ejecución de soluciones de aprendizaje.</li>
                  <li>Entrenamiento y formación continua del personal.</li>
                  <li>Desarrollo de liderazgo accountable y empowerment.</li>
                  <li>Desarrollo de habilidades de management.</li>
                  <li>Creación de equipos de alto rendimiento.</li>
                </ul>
              </div>

              <img className="chevron-down_svs " src={down} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Serv-container">
          <h2 className="Serv-title">Quiénes confían en nosotros</h2>

          <div className="Serv-circle-pink"></div>
        </div>

       <Slider/>

      </section>
    </>
  );
};

export default Servicios;
