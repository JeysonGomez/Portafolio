import React from "react";
import "./NavBar/NavBar.css";

function NavBar() {
  return (
    <header className="NavHeaderContent bg1">
      <nav className="navBar">
        <div>
          <h1>Full Stack Developer</h1>
        </div>
        <ul>
          <li>
            <button className="btoHeader">Inicio</button>
          </li>
          <li>
            <button className="btoHeader">Proyectos</button>
          </li>
          <li>
            <button className="btoHeader">Sobre Mi</button>
          </li>
          <li>
            <button className="btoHeader">Contacto</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavHeader;
