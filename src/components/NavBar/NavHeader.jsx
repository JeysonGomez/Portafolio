import React from "react";
import "./NavHeader.css";

function NavHeader() {
  return (
    <header className="NavContent bg1">
      <nav className="navHeader">
        <div>
          <h1>Desarrollador</h1>
        </div>
        <ul>
          <li>
            <button className="btnHeader">Inicio</button>
          </li>
          <li>
            <button className="btnHeader">Proyectos</button>
          </li>
          <li>
            <button className="btnHeader">Sobre Mi</button>
          </li>
          <li>
            <button className="btnHeaders">Contacto</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavHeader;
