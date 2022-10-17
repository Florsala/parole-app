import React from "react";
import "../styles/slider.css";

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

const Slider = () => {
  return (
    <div className="empresas-container slider">
      <div className="slide-track">
        <a
          href="https://www.cerveceriaymalteriaquilmes.com/
"
          target={'blank'}
        >
          {" "}
          <img className="slide" src={Quilmes} alt="Quilmes" />
        </a>

        <a
          href=" https://www.altec.com.ar/
"
          target={'blank'}
        >
          <img className="slide" src={Altec} alt="Altec" />
        </a>

        <a href=" https://makingsense.com/" target={'blank'}>
          <img className="slide" src={Making} alt="Making sense" />
        </a>

        <a href="https://www.fromdoppler.com/es/ " target={'blank'}>
          {" "}
          <img className="slide" src={Doppler} alt="Dopppler" />
        </a>

        <a href="https://web.curza.uncoma.edu.ar/" target={'blank'}>
          {" "}
          <img className="slide" src={Comahue} alt="Comahue" />
        </a>

        <a href="https://www.tasalogistica.com.ar" target={'blank'}>
          {" "}
          <img className="slide" src={Tasa} alt="Tasa" />
        </a>

        <a href="https://www.continental.net.ar/" target={'blank'}>
          {" "}
          <img className="slide" src={Continental} alt="Continental" />
        </a>

        <a
          href="http://www.anilab-diagnostico.com/#!/-bienvenido/"
          target={'blank'}
        >
          {" "}
          <img className="slide" src={Anilab} alt="Anilab" />
        </a>

        <a href="https://alarzdeliciasarabes.com/" target={'blank'}>
          {" "}
          <img className="slide" src={Alarz} alt="Alarz" />
        </a>

        <a href="https://www.remax.com.ar/diagonal" target={'blank'}>
          {" "}
          <img className="slide" src={Remax} alt="Remax" />
        </a>

        <a
          href="https://www.cerveceriaymalteriaquilmes.com/
"
          target={'blank'}
        >
          {" "}
          <img className="slide" src={Quilmes} alt="Quilmes" />
        </a>

        <a
          href=" https://www.altec.com.ar/
"
          target={'blank'}
        >
          <img className="slide" src={Altec} alt="Altec" />
        </a>

        <a href=" https://makingsense.com/" target={'blank'}>
          <img className="slide" src={Making} alt="Making sense" />
        </a>

        <a href="https://www.fromdoppler.com/es/ " target={'blank'}>
          {" "}
          <img className="slide" src={Doppler} alt="Dopppler" />
        </a>

        <a href="https://web.curza.uncoma.edu.ar/" target={'blank'}>
          {" "}
          <img className="slide" src={Comahue} alt="Comahue" />
        </a>

        <a href="https://www.tasalogistica.com.ar" target={'blank'}>
          {" "}
          <img className="slide" src={Tasa} alt="Tasa" />
        </a>

        <a href="https://www.continental.net.ar/" target={'blank'}>
          {" "}
          <img className="slide" src={Continental} alt="Continental" />
        </a>

        <a
          href="http://www.anilab-diagnostico.com/#!/-bienvenido/"
          target={'blank'}
        >
          {" "}
          <img className="slide" src={Anilab} alt="Anilab" />
        </a>

        <a href="https://alarzdeliciasarabes.com/" target={'blank'}>
          {" "}
          <img className="slide" src={Alarz} alt="Alarz" />
        </a>

        <a href="https://www.remax.com.ar/diagonal" target={'blank'}>
          {" "}
          <img className="slide" src={Remax} alt="Remax" />
        </a>
      </div>
    </div>
  );
};

export default Slider;
