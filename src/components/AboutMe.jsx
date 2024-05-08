import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <article className="wrapContent bg1">
      <div className="subWrapAM">
        <div className="imgAbout">
          <img src="src/assets/Fondo.avif" alt="" />
        </div>

        <div className="content-aboutMe">
          <h2>Sobre Mi</h2>
          <p>
            Que tal me presento soy Jeyson Gomez, un apasionado desarrollador web
            Full Stack. <br /> Disfruto trabajar en equipo, aprender constantemente y
            enfrentar nuevos desafíos. <br /> Me entusiasma colaborar en nuevos
            proyectos. Poseo una mente creativa e innovadora, y tengo la
            capacidad de aprender rápidamente. <br />Siempre estoy buscando nuevas
            formas de abordar desafíos y puedo asimilar conocimientos de manera
            ágil. <br /> Soy una persona empática y entusiasta, poseo habilidades
            centradas en el trabajo en equipo, comunicación asertiva, resolución
            de problemas, responsabilidad y proactividad. <br /> Disfruto aprendiendo
            de los demás y superándome continuamente. ¡Contáctame para saber
            cómo puedo contribuir a tu próximo proyecto!.
          </p>

          <div className="btoAbout">
            <button className="bto1">Here Me</button>
            <button className="bto2">
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
