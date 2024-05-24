import React from "react";
import "./Start.css";

function Start() {
  return (
    <section className="generalContent bg1">
      <div className="StartContent">
        <div className="infoStart">
          <h1>
            Full Stactk <br /> Software <br /> Developer
            <span className="StartPoint"></span>
          </h1>
          <button className="btnStart">Ir a Proyectos</button>
        </div>
        <div className="imgStart">
          <img src="src/assets/Fondo.avif" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Start;
