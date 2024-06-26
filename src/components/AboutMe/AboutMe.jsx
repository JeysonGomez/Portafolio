import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <article className="generalContent allBackground">
      <div className="subAbout">
        <div className="imgAbout">
          <img src="src/assets/Fondo.avif" alt="Foto de mi perfil" />
        </div>

        <div className="contentAboutMe">
          <h2>Sobre Mí</h2>
          <p>
            Hola, soy Jeyson Gómez, un apasionado desarrollador web Full Stack.
            Disfruto trabajar en equipo, aprender constantemente y enfrentar
            nuevos desafíos. Me entusiasma colaborar en nuevos proyectos. <br />
            Poseo una mente creativa e innovadora, y tengo la capacidad de
            aprender rápidamente. Siempre estoy buscando nuevas formas de
            abordar desafíos y puedo asimilar conocimientos de manera ágil.
            <br /> Soy una persona empática y entusiasta, con habilidades
            centradas en el trabajo en equipo, comunicación asertiva, resolución
            de problemas, responsabilidad y proactividad. Disfruto aprendiendo
            de los demás y superándome continuamente. <br /> <br /> ¡Contáctame
            para saber cómo puedo contribuir a tu próximo proyecto!. <br />
          </p>

          <div className="btnAbouts">
            <button className="btnGeneral">Contáctame</button>
            <button className="btnGeneral">Proyectos</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AboutMe;
