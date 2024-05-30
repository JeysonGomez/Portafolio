import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="ProjectsContent AllBackground">
      <div className="projectsContent">
        <div className="infoProjects">
          <h1>Mis Proyectos</h1>
        </div>
        <div className="imgProjects">
          <div className="imageProjects">
            <img
              className="Calculadora"
              src="src/assets/Proyectos/Calculadora.png"
              alt="Calculadora"
            />
            <h2 className="titleProject">Proyecto Calculadora :</h2>
            <p className="descriptionProject">
              Página desarrollada para realizar tipo de cálculos como sumas,
              restas, multiplicación, división, con una interfaz sencilla y muy
              sencilla de utilizar.
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="Manage"
              src="src/assets/Proyectos/Manage.png"
              alt="Manage"
            />
            <h2 className="titleProject">Proyecto Manage :</h2>
            <p className="descriptionProject">
              Proyecto realizado en HTML y CSS en prácticas estudiantiles para
              reforzar lo aprendido durante el tiempo de estudio
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="PetShop"
              src="src/assets/Proyectos/PetShop.png"
              alt="Petshop"
            />
            <h2 className="titleProject">Proyecto PetShop :</h2>
            <p className="descriptionProject">
              Página desarrollada para tu destino en línea para todo lo
              ¡Relacionado con tus amigos peludos de cuatro patas! Entendemos
              que tus mascotas son más que solo animales; son parte de tu
              familia.
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="Sportit"
              src="src/assets/Proyectos/Sportit.png"
              alt="SportIt"
            />
            <h2 className="titleProject">Proyecto SportIt :</h2>
            <p className="descriptionProject">
              Página desarrollada para todo lo relacionado con el mundo del
              deporte. Ya seas un fanático apasionado, un atleta dedicado o
              simplemente, estés buscando mantenerte al día con las últimas
              noticias y eventos deportivos
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="Proyecto1"
              src="src/assets/Proyectos/Proyecto1.png"
              alt="Proyecto"
            />
            <h2 className="titleProject">Proyecto :</h2>
            <p className="descriptionProject">
              Proyecto realizado en HTML y CSS en prácticas estudiantiles para
              reforzar lo aprendido durante el tiempo de estudio
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="Proyecto1"
              src="src/assets/Proyectos/Proyecto2.png"
              alt="Proyecto"
            />
            <h2 className="titleProject">Proyecto :</h2>
            <p className="descriptionProject">
              Proyecto realizado en HTML y CSS en prácticas estudiantiles para
              reforzar lo aprendido durante el tiempo de estudio
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="Manage"
              src="src/assets/Proyectos/DOREMI.png"
              alt="DoReMi"
            />
            <h2 className="titleProject">Proyecto DoReMi :</h2>
            <p className="descriptionProject">
              Página desarrollada con el equipo de estudio, para explorar él
              maravilloso mundo de la música! Creemos que la música es más que
              solo sonido; es una forma de vida, una expresión de emociones y
              una conexión universal que une a personas de todas las edades y
              culturas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;