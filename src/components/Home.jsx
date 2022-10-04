import React from "react";
import LineTitle from "../assets/LineTitle.svg";
import btnpurple from "../assets/btn-purple.svg";
import lineHome from "../assets/line-home.svg";

import down from "../assets/chevron-down.svg";
import dots from "../assets/dots.svg";

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

        <div>
          <img className="btnpurple" src={btnpurple} alt="" />
        </div>

        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="circle-5"></div>
      </section>

      <section id="inicio-2p">
        <div className="circle-6"></div>

        <div className="Box-1">
          <p>
            Con nuestro servicio de <span>IT Recruiting </span> resolvemos las
            necesidades de staffing de tu compañía logrando el match perfecto
            que necesitás para seguir creciendo.
          </p>
        </div>

        <div className="circle-7"></div>

        <div>
          <img
            className="circle-8"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt=""
          />
        </div>

        <div className="Box-2">
          <p>
            Con nuestros <span> Trainings</span> los colaboradores de tu empresa
            incorporan y elevan sus soft skills mejorando los vínculos
            personales y el desempeño profesional.
          </p>
        </div>

        <div>
          <img className="lineHome" src={lineHome} alt="linea" />
        </div>
      </section>

      <section>
        <div>
          <img className="number-bcg" src={dots} alt="" />
        </div>

        <div className="container01">
          <div>
            <img
              className="circle-img1"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="hands"
            />
            <div className="out-circle"></div>
          </div>

          

          <div className="number-section_container">
<p className="number-section"> 01.</p>

            <h5 className="number-section_title">
              Estamos enfocados en conectar con tus necesidades de staffing
            </h5>

            <img className="chevron-down" src={down} alt="chevron" />

            <p className="number-section_text">
              Nuestro servicio de IT Recruiting comprende tareas de sourcing
              adaptadas a los ritmos rápidos del sector. Co-creamos junto con
              cada cliente un proceso de búsqueda apuntado a lograr una conexión
              significativa con los valores, intereses y objetivos de la
              organización.
            </p>
          </div>
        </div>

        {/* segunda imagen */}

        {/* <div>
          <img
            className="circle-img2"
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="meeting"
          />
          <div className="out-circle2"></div>

          <div className="number-section2">02.</div>

          <div className="number-section_container2">
            <h5 className="number-section_title2">
              Somos expertos en comunicación y aplicación de Soft Skills{" "}
            </h5>

            <img className="chevron-down" src={down} alt="chevron" />

            <p className="number-section_text2">
              Trabajamos trainings dinámicos y participativos para optimizar los
              vínculos dentro de las compañías y ofrecer soporte a su cultura
              interna. Al trabajar el desarrollo de soft skills con su staff,
              las empresas obtienen relaciones interpersonales fuertes,
              reducción del índice de rotación, mejora del índice de calidad y
              maximización del potencial de los colaboradores.
            </p>
          </div>
        </div> */}

        {/* tercera imagen */}

       {/*  <section>
          <div>
            <img className="number-bcg3" src={dots} alt="dots" />
          </div>

          <div>
            <img
              className="circle-img3"
              src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="woman"
            />
            <div className="out-circle3"></div>

            <div className="number-section3">03.</div>

            <div className="number-section_container3">
              <h5 className="number-section_title3">
                Nos especializamos en el Sector IT, con servicios 100% remotos{" "}
              </h5>

              <img className="chevron-down3" src={down} alt="chevron" />

              <p className="number-section_text3">
                Trabajamos en modalidad online desde que Parole nació en 2017
                porque entendimos la necesidad de conexión remota que ya había
                en aquel momento. Decidimos seguir por esa línea convirtiéndonos
                en expertos en el sector IT que fue el que más rápido se adaptó
                a la tendencia y se subió a la ola de transformación digital.
                Hoy desde la virtualidad llegamos a clientes de todo el mundo
                con nuestros servicios de Recruiting y Soft Skills Training.
              </p>
            </div>
          </div>
        </section> */}
      </section>
    </div>
  );
};

export default Home;
