import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="wrapContent bg1">
      <div className="SkillsContent">
        <div className="infoSkills">
          <h1>Mis Habilidades en:</h1>
        </div>

        <div className="imgSkills">
          <div>
            <img className="github" src="src/assets/GitHub.png" alt="" />
            <p className="titleSkills">GitHub</p>
          </div>
          <div>
            <img className="Html" src="src/assets/Html.png" alt="" />
            <p className="titleSkills">HTML</p>
          </div>
          <div>
            <img className="Css" src="src/assets/Css.png" alt="" />
            <p className="titleSkills">CSS</p>
          </div>
          <div>
            <img className="Java" src="src/assets/Java.png" alt="" />
            <p className="titleSkills">JAVA</p>
          </div>
          <div>
            <img className="Js" src="src/assets/Javascript.png" alt="" />
            <p className="titleSkills">JAVASCRIPT</p>
          </div>
          <div>
            <img className="React" src="src/assets/React.png" alt="" />
            <p className="titleSkills">REACT</p>
          </div>
          <div>
            <img className="Git" src="src/assets/Git.png" alt="" />
            <p className="titleSkills">GIT</p>
          </div>
          <div>
            <img className="Docker" src="src/assets/Docker.png" alt="" />
            <p className="titleSkills">DOCKER</p>
          </div>
          <div>
            <img className="Nodejs" src="src/assets/NodeJS.png" alt="" />
            <p className="titleSkills">NODE JS</p>
          </div>
          <div>
            <img className="Mysql" src="src/assets/MySQL.png" alt="" />
            <p className="titleSkills">MY SQL</p>
          </div>
          <div>
            <img className="Kotlin" src="src/assets/Kotlin.png" alt="" />
            <p className="titleSkills">KOTLIN</p>
          </div>
          <div>
            <img className="Figma" src="src/assets/figma.png" alt="" />
            <p className="titleSkills">FIGMA</p>
          </div>
          <div>
            <img className="Trello" src="src/assets/trello.png" alt="" />
            <p className="titleSkills">TRELLO</p>
          </div>
          <div>
            <img className="Postman" src="src/assets/Postman.png" alt="" />
            <p className="titleSkills">POSTMAN</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
