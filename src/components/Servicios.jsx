import React, { useState, useEffect } from "react";
import "../styles/Servicios.css";
import person from "../assets/bxs-group.svg";
import read from "../assets/read.svg";

import dots from "../assets/dots.svg";

import {FiChevronDown,FiChevronUp} from "react-icons/fi";
import Slider from "./Slider";

const Servicios = () => {
  const [click, setClick] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClick = () => setClick(!click);

  const [click2, setClick2] = useState(false);


  const handleClick2 = () => setClick2(!click2);

  useEffect(() => {
    let handler = () => {
      setClick(false);
      setClick2(false);
    
    };
    document.addEventListener("mousedown", handler)
  })


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
          <div  className={click ? "Serv-box open" : "Serv-box"}>
            <div className="circle-purple">
              <img style={{ width: "3.125rem" }} src={person} alt="person" />
            </div>

            <div className=" Serv-box-content" >
              <h5 className="Serv-box-title">
                IT recruiting y Gestión del Talento{" "}
              </h5>
              <div className={click ? "Serv-box-text open" : "Serv-box-text"}>
                <ul>
                  <li>Planificación Estratégica</li>
                  <li>Sourcing y Headhunting.</li>
                  <li>Entrevistas y elaboración de informes.</li>
                  <li>Engagement y fidelización del colaborador.</li>
                  <li>Onboarding.</li>
                </ul>
              </div>
              <div onClick={handleClick} >
                {!click ? (
                  <FiChevronDown className="chevron-down_svs open" />
                ) : (
                  <FiChevronUp className="chevron-up"/>

                )}

              </div>
             {/*  <FiChevronDown onClick={() => setOpen(!open)} 
              className={open ? "chevron-down_svs open"
              
              : "chevron-down_svs"}/> */}

              
            </div>
          </div>

          <div className={click2 ? "Serv-box2 open" : "Serv-box2"}>
            <div className="circle-purple">
              <img style={{ width: "3.125rem" }} src={read} alt="read" />
            </div>

            <div className="Serv-box-content2">
              <h5 className="Serv-box-title">
                Soft Skill Trainings para la Industria IT
              </h5>

              <div className={click2 ? "Serv-box-text2 open" : "Serv-box-text2"}>
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

              <div onClick={handleClick2}>
                {!click2 ? (
                  <FiChevronDown className="chevron-down_svs2 open"/>
                ) : (
                  <FiChevronUp className="chevron-up2"/>

                )}

              </div>
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
