import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="generalContent allBackground">
      <div>
        <div className="informationSkills">
          <h1>Mis Habilidades en:</h1>
        </div>

        <div className="imgSkills">
          <div>
            <img
              className="github"
              src="src/assets/GitHub.png"
              alt="Imagen GitHub"
            />
            <p className="skillsTitle">GitHub</p>
          </div>
          <div>
            <img
              className="Html"
              src="src/assets/Html.png"
              alt="Imagen lenguaje demarcado HTML"
            />
            <p className="skillsTitle">HTML</p>
          </div>
          <div>
            <img
              className="Css"
              src="src/assets/Css.png"
              alt="Imagen lenguaje diseñó gráfico CSS"
            />
            <p className="skillsTitle">CSS</p>
          </div>
          <div>
            <img
              className="Java"
              src="src/assets/Java.png"
              alt="Logo de lenguaje Java"
            />
            <p className="skillsTitle">JAVA</p>
          </div>
          <div>
            <img
              className="Js"
              src="src/assets/Javascript.png"
              alt="Logo de lenguaje JavaScript"
            />
            <p className="skillsTitle">JAVASCRIPT</p>
          </div>
          <div>
            <img
              className="React"
              src="src/assets/React.png"
              alt="Logo de biblioteca React.Js"
            />
            <p className="skillsTitle">REACT JS</p>
          </div>
          <div>
            <img className="Git" src="src/assets/Git.png" alt="Imagen Git" />
            <p className="skillsTitle">GIT</p>
          </div>
          <div>
            <img
              className="Docker"
              src="src/assets/Docker.png"
              alt="Logo sistema operativo Docker"
            />
            <p className="skillsTitle">DOCKER</p>
          </div>
          <div>
            <img
              className="Nodejs"
              src="src/assets/NodeJS.png"
              alt="Logo de entorno Node js"
            />
            <p className="skillsTitle">NODE JS</p>
          </div>
          <div>
            <img
              className="Mysql"
              src="src/assets/MySQL.png"
              alt="Imagen de gestion My SQL"
            />
            <p className="skillsTitle">MY SQL</p>
          </div>
          <div>
            <img
              className="Kotlin"
              src="src/assets/Kotlin.png"
              alt="Logo de lenguaje Kotlin"
            />
            <p className="skillsTitle">KOTLIN</p>
          </div>
          <div>
            <img
              className="Figma"
              src="src/assets/figma.png"
              alt="Editor de gráficos Figma"
            />
            <p className="skillsTitle">FIGMA</p>
          </div>
          <div>
            <img
              className="Trello"
              src="src/assets/trello.png"
              alt="Herramienta para gestión de proyectos Trello"
            />
            <p className="skillsTitle">TRELLO</p>
          </div>
          <div>
            <img
              className="Postman"
              src="src/assets/Postman.png"
              alt="Herramienta construir API's"
            />
            <p className="skillsTitle">POSTMAN</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
