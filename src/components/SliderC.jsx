import React from "react";

import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/sliderC.css";

import Altec from "../assets/logos-emp/altec.png";
import Anilab from "../assets/logos-emp/anilab.png";
import Comahue from "../assets/logos-emp/comahue.png";
import Continental from "../assets/logos-emp/continental2.png";
import Doppler from "../assets/logos-emp/doppler.png";
import Making from "../assets/logos-emp/making2.svg";
import Alarz from "../assets/logos-emp/alarz.png";
import Tasa from "../assets/logos-emp/Tasa.svg";

import Quilmes from "../assets/logos-emp/quilmes.png";

const SliderC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings} className="empresas-container">
        <div>
          <a
            href="https://www.cerveceriaymalteriaquilmes.com/"
            target={"blank"}
          >
            <img className="slide" src={Quilmes} alt="Quilmes" />
          </a>
        </div>
        <div>
          <a
            href=" https://www.altec.com.ar/
"
            target={"blank"}
          >
            <img className="slide" src={Altec} alt="Altec" />
          </a>
        </div>
        <div>
          <a href=" https://makingsense.com/" target={"blank"}>
            <img className="slide" src={Making} alt="Making sense" />
          </a>
        </div>
        <div>
          <a href="https://www.fromdoppler.com/es/ " target={"blank"}>
            {" "}
            <img className="slide" src={Doppler} alt="Dopppler" />
          </a>
        </div>
        <div>
          <a href="https://web.curza.uncoma.edu.ar/" target={"blank"}>
            {" "}
            <img className="slide" src={Comahue} alt="Comahue" />
          </a>
        </div>
        <div>
          <a href="https://www.tasalogistica.com.ar" target={"blank"}>
            {" "}
            <img className="slide" src={Tasa} alt="Tasa" />
          </a>
        </div>

        <div>
          <a href="https://www.continental.net.ar/" target={"blank"}>
            {" "}
            <img className="slide" src={Continental} alt="Continental" />
          </a>
        </div>
        <div>
          <a
            href="http://www.anilab-diagnostico.com/#!/-bienvenido/"
            target={"blank"}
          >
            {" "}
            <img className="slide" src={Anilab} alt="Anilab" />
          </a>
        </div>

        <div>
          <a href="https://alarzdeliciasarabes.com/" target={"blank"}>
            {" "}
            <img className="slide" src={Alarz} alt="Alarz" />
          </a>
        </div>
      </Slider>
    </div>

    /*  <div className="empresas-container slider">
      <button className="slideBtn">
        <AiOutlineLeftCircle />
      </button>

      
      <div className="slide-track">
        <a
          href="https://www.cerveceriaymalteriaquilmes.com/
"
          target={"blank"}
        >
          {" "}
          <img className="slide" src={Quilmes} alt="Quilmes" />
        </a>

        <a
          href=" https://www.altec.com.ar/
"
          target={"blank"}
        >
          <img className="slide" src={Altec} alt="Altec" />
        </a>

        <a href=" https://makingsense.com/" target={"blank"}>
          <img className="slide" src={Making} alt="Making sense" />
        </a>

        <a href="https://www.fromdoppler.com/es/ " target={"blank"}>
          {" "}
          <img className="slide" src={Doppler} alt="Dopppler" />
        </a>

        <a href="https://web.curza.uncoma.edu.ar/" target={"blank"}>
          {" "}
          <img className="slide" src={Comahue} alt="Comahue" />
        </a>

        <a href="https://www.tasalogistica.com.ar" target={"blank"}>
          {" "}
          <img className="slide" src={Tasa} alt="Tasa" />
        </a>

        <a href="https://www.continental.net.ar/" target={"blank"}>
          {" "}
          <img className="slide" src={Continental} alt="Continental" />
        </a>

        <a
          href="http://www.anilab-diagnostico.com/#!/-bienvenido/"
          target={"blank"}
        >
          {" "}
          <img className="slide" src={Anilab} alt="Anilab" />
        </a>

        <a href="https://alarzdeliciasarabes.com/" target={"blank"}>
          {" "}
          <img className="slide" src={Alarz} alt="Alarz" />
        </a>

        <a
          href="https://www.cerveceriaymalteriaquilmes.com/
"
          target={"blank"}
        >
          {" "}
          <img className="slide" src={Quilmes} alt="Quilmes" />
        </a>

        <a
          href=" https://www.altec.com.ar/
"
          target={"blank"}
        >
          <img className="slide" src={Altec} alt="Altec" />
        </a>

        <a href=" https://makingsense.com/" target={"blank"}>
          <img className="slide" src={Making} alt="Making sense" />
        </a>

        <a href="https://www.fromdoppler.com/es/ " target={"blank"}>
          {" "}
          <img className="slide" src={Doppler} alt="Dopppler" />
        </a>

        <a href="https://web.curza.uncoma.edu.ar/" target={"blank"}>
          {" "}
          <img className="slide" src={Comahue} alt="Comahue" />
        </a>

        <a href="https://www.tasalogistica.com.ar" target={"blank"}>
          {" "}
          <img className="slide" src={Tasa} alt="Tasa" />
        </a>

        <a href="https://www.continental.net.ar/" target={"blank"}>
          {" "}
          <img className="slide" src={Continental} alt="Continental" />
        </a>

        <a
          href="http://www.anilab-diagnostico.com/#!/-bienvenido/"
          target={"blank"}
        >
          {" "}
          <img className="slide" src={Anilab} alt="Anilab" />
        </a>

        <a href="https://alarzdeliciasarabes.com/" target={"blank"}>
          {" "}
          <img className="slide" src={Alarz} alt="Alarz" />
        </a>
      </div>

      <button className="slideBtn">
        <AiOutlineRightCircle />
      </button>
    </div> */
  );
};

export default SliderC;
