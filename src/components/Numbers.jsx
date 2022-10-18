import React, { useEffect, useRef, useState } from "react";


import dots from "../assets/dots.svg";
import { HashLink as Link } from "react-router-hash-link";

import { FiChevronsDown } from "react-icons/fi"; 
import { GoChevronDown } from "react-icons/go";

import AOS from 'aos';
import 'aos/dist/aos.css';






const Numbers = () => {

    
useEffect(() => {
    AOS.init({duration: 2000});
  }, [])




    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
  
    const [open, setOpen] = useState(false);
   /*  const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false); */
  
    let mainRef = useRef();
  
    useEffect(() => {
      let handler = (e) => {
        if (!mainRef.current.contains(e.target)) {
          setClick(false);
        
        }
      };
      document.addEventListener("mousedown", handler);
    });


  return (
    <div><section
    style={{
      backgroundImage: `url(${dots})`,
      marginTop: "6rem",
      backgroundRepeat: "repeat",
      marginBottom: "6rem",
    }}
  >
    <div className="grid">
      <div className="elem-1" data-aos="fade-right">
        <img 
          className="circle-img1"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="hands"
        />
      </div>
      <div className="number"  >
        <p className="number-section"> 01.</p>
      </div>

      <div className="number-section_container" ref={mainRef}>
        <h5 className="number-section_title">
          Estamos enfocados en conectar con tus necesidades de staffing
        </h5>

        <GoChevronDown
          className="chevron-down"
          onClick={handleClick}
          
        />
        {click && (
          <p className="number-section_text">
            Nuestro servicio de IT Recruiting comprende tareas de sourcing
            adaptadas a los ritmos rápidos del sector. Co-creamos junto con
            cada cliente un proceso de búsqueda apuntado a lograr una
            conexión significativa con los valores, intereses y objetivos de
            la organización.
          </p>
        )}
      </div>
    </div>

    {/* segunda imagen */}
    <div className="grid2">
      <div className="elem-2" data-aos="fade-left">
        <img
          className="circle-img2"
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="meeting"
        />
      </div>

      <div className="number2">
        <p className="number-section2">02.</p>
      </div>

      <div className="number-section_container2"ref={mainRef} >
        <h5 className="number-section_title2">
          Somos expertos en comunicación y aplicación de Soft Skills{" "}
        </h5>

         <GoChevronDown
          className="chevron-down"
          onClick={handleClick}
           
        />
        {click && (
          <p className="number-section_text2">
            Trabajamos trainings dinámicos y participativos para optimizar
            los vínculos dentro de las compañías y ofrecer soporte a su
            cultura interna. Al trabajar el desarrollo de soft skills con su
            staff, las empresas obtienen relaciones interpersonales fuertes,
            reducción del índice de rotación, mejora del índice de calidad y
            maximización del potencial de los colaboradores.
          </p>
        )} 
      </div>
    </div>
    {/* tercera imagen */}

    <div className="grid3">
      <div className="elem-3" data-aos="fade-right">
        <img
          className="circle-img3"
          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="woman"
        />
      </div>

      <div className="number3">
        <p className="number-section3">03.</p>
      </div>
      <div className="number-section_container3" ref={mainRef}>
        <h5 className="number-section_title3">
          Nos especializamos en el <br /> Sector IT, con servicios 100%
          remotos{" "}
        </h5>

        <GoChevronDown
          className="chevron-down"
          
          onClick={handleClick}
        />
        {click && (
          <p className="number-section_text3">
            Trabajamos en modalidad online desde que Parole nació en 2017
            porque entendimos la necesidad de conexión remota que ya había
            en aquel momento. Decidimos seguir por esa línea convirtiéndonos
            en expertos en el sector IT que fue el que más rápido se adaptó
            a la tendencia y se subió a la ola de transformación digital.
            Hoy desde la virtualidad llegamos a clientes de todo el mundo
            con nuestros servicios de Recruiting y Soft Skills Training.
          </p>
        )}
      </div>
    </div>
    <div
      className="btnpurple-container2"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Link to="/#servicios" smooth>
        <FiChevronsDown
          className="btnpurple2"
          style={{ position: "absolute" }}
        />
      </Link>
    </div>
  </section></div>
  )
}

export default Numbers