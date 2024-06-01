import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projectContent allBackground">
      <div className="proyectosContent">
        <div className="infoProyects">
          <h1>Mis Proyectos</h1>
        </div>
        <div className="imgProyects">
          <div className="imageProjects">
            <img
              className="Calculadora"
              src="src/assets/Proyectos/Calculadora.png"
              alt="Imagen calculadora"
            />
            <h2 className="titleProject">Calculadora :</h2>
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
              alt="Imagen Manage"
            />
            <h2 className="titleProject">Mana Proyect :</h2>
            <p className="descriptionProject">
              Proyecto realizado en HTML y CSS en prácticas estudiantiles para
              reforzar lo aprendido durante el tiempo de estudio
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="PetShop"
              src="src/assets/Proyectos/PetShop.png"
              alt="Imagen PetShop"
            />
            <h2 className="titleProject">PetShop Proyect :</h2>
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
              alt="Imagen SportIt"
            />
            <h2 className="titleProject">SportIt Proyect :</h2>
            <p className="descriptionProject">
              Página desarrollada para todo lo relacionado con el mundo del
              deporte. Ya seas un fanático apasionado, un atleta dedicado o
              simplemente, este buscando mantenerte al día con las últimas
              noticias y eventos deportivos.
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="Proyecto1"
              src="src/assets/Proyectos/Proyecto1.png"
              alt="Imagen Proyecto estudiantil"
            />
            <h2 className="titleProject">Student project :</h2>
            <p className="descriptionProject">
              Proyecto realizado en HTML y CSS en prácticas estudiantiles para
              reforzar lo aprendido durante el tiempo de estudio
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="Proyecto1"
              src="src/assets/Proyectos/Proyecto2.png"
              alt="Imagen Proyecto estudiantil"
            />
            <h2 className="titleProject">Student project:</h2>
            <p className="descriptionProject">
              Proyecto realizado en HTML y CSS en prácticas estudiantiles para
              reforzar lo aprendido durante el tiempo de estudio
            </p>
          </div>
          <div className="imageProjects">
            <img
              className="Manage"
              src="src/assets/Proyectos/DOREMI.png"
              alt="Imagen DoReMi"
            />
            <h2 className="titleProject">DoReMi Proyect :</h2>
            <p className="descriptionProject">
              Página desarrollada con el equipo de estudio, para explorar él
              ¡Maravilloso mundo de la música! Creemos que la música es más que
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
