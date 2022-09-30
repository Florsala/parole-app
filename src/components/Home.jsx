import React from "react";
import LineTitle from "../assets/LineTitle.svg";

const Home = () => {
  return (
    <div>
      <section id="inicio">
        <div className="circle-1"></div>
        <div className="TitleContainer">
          <h1 className="Title">
            Soluciones para la gestión del
            <span id="Title-purple"> capital humano </span>
            <br />
            en empresas IT
          </h1>
          <div className="LineTitle">
            <img src={LineTitle} alt="linea" />
          </div>
        </div>

        <div className="TextContainer">
          <p>
            Innovamos en la evolución de las organizaciones hacia el alto
            rendimiento, generando líderes conscientes y conectándote con las
            personas talentosas que ayudan a hacer crecer tu empresa.
          </p>
        </div>

        <div style={{ marginTop: "11.875rem", marginLeft: "73px" }}>
          <button className="btnHome-1">Conocenos</button>

          <button className="btnHome-2">Contactanos</button>
        </div>

        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </section>
    </div>
  );
};

export default Home;
