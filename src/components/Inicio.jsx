import React from "react";
import "./Inicio.css";

function Inicio() {
  return (
    <section className="wrapContent bg1">
      <div className="inicioContent">
        <div className="infoInicio">
          <h1>
            Full Stactk <br /> Software <br /> Developer{" "}
            <span className="incioPoint"></span>
          </h1>
          <button className="btoInicio">Ir a Proyectos</button>
        </div>
        <div className="imgInicio">
          <img src="src/assets/Fondo.avif" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Inicio;
