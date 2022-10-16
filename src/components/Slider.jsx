import React from 'react'
import '../styles/slider.css'

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

    
    <img className="slide" src={Quilmes} alt="Quilmes" />
    <img  className="slide" src={Altec} alt="Altec" />
    <img  className="slide" src={Making} alt="Making sense" />
    <img  className="slide" src={Doppler} alt="Dopppler" />
    <img  className="slide" src={Comahue} alt="Comahue" />
    <img  className="slide" src={Tasa} alt="Tasa" />
    <img  className="slide" src={Continental} alt="Continental" />
    <img  className="slide" src={Anilab} alt="Anilab" />
    <img  className="slide" src={Alarz} alt="Alarz" />
    <img className="slide"  src={Remax} alt="Remax" />


    <img className="slide" src={Quilmes} alt="Quilmes" />
    <img  className="slide" src={Altec} alt="Altec" />
    <img  className="slide" src={Making} alt="Making sense" />
    <img  className="slide" src={Doppler} alt="Dopppler" />
    <img  className="slide" src={Comahue} alt="Comahue" />
    <img  className="slide" src={Tasa} alt="Tasa" />
    <img  className="slide" src={Continental} alt="Continental" />
    <img  className="slide" src={Anilab} alt="Anilab" />
    <img  className="slide" src={Alarz} alt="Alarz" />
    <img className="slide"  src={Remax} alt="Remax" />

    </div>
  </div>
  )
}

export default Slider