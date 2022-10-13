import React from "react";
import "../styles/Contacto.css";

import Mail from "../assets/mailbox.svg";

const Contacto = () => {
  return (
    <div >
      <div className="Ct-container">
        <h2 className="Serv-title">¿Podemos ayudarte con algo más?</h2>

        <div className="Ct-circle-pink"></div>
      </div>

      <div>
        <div className="Ct-container-2">
          <div className="Ct-container-text">
            <div className="Ct-container-head">
              <h3>¡Contactanos!</h3>
            </div>
          </div>

          <form action="" className="form-2">
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                id="nombre"
                /*  value={inputNombre}
            onChange={handleInputNombre} */
                required
              />

              <input
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                /*  value={inputNombre}
            onChange={handleInputNombre} */
                required
              />

              <img
                style={{
                  padding: "0.5rem ",
                  width: "9.375rem",
                  height: "9.375rem",
                }}
                src={Mail}
                alt=""
              />
            </div>
            <div style={{ display: "flex" }}>
              <textarea
                name="mensaje"
                as="textarea"
                cols="30"
                rows="1"
                aria-required="true"
                aria-invalid="false"
                placeholder="Tu mensaje"
                /*  value={inputMsg}
            onChange={handleInputMsg} */
                required
              />

              <button className="btnForm" type="submit" value="Enviar">
                {" "}
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
