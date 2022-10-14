import React from "react";
import "../styles/Servicios.css";
import person from "../assets/bxs-group.svg";
import read from "../assets/read.svg";

import down from "../assets/chevron-down.svg";
import dots from "../assets/dots.svg";

import Altec from "../assets/logos-emp/altec.png";
import Anilab from "../assets/logos-emp/anilab.png";
import Comahue from "../assets/logos-emp/comahue.png";
import Continental from "../assets/logos-emp/continental2.png";
import Doppler from "../assets/logos-emp/doppler.png";
import Making from "../assets/logos-emp/making2.svg";
import Alarz from "../assets/logos-emp/alarz.png";
import Remax from "../assets/logos-emp/REMAX_logo.svg.png";
import Tasa from "../assets/logos-emp/Tasa.svg";

import Quilmes from "../assets/logos-emp/quilmes.png";

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

        <div className="empresas-container">
           <img src={Quilmes} alt="Quilmes" /> 
         <img src={Altec} alt="Altec" />
         <img src={Making} alt="Making sense" />
         <img src={Doppler} alt="Dopppler" />
         <img src={Comahue} alt="Comahue" />
         <img src={Tasa} alt="Tasa" />
         <img src={Continental} alt="Continental" />
         <img src={Anilab} alt="Anilab" />
        <img src={Alarz} alt="Alarz" />
        <img src={Remax} alt="Remax" />      
         
  
         
        </div>
      </section>
    </>
  );
};

export default Servicios;
