import React from "react";
import "./Proyects.css";

function Proyects() {
  return (
    <section className="ProyectsContent b1">
      <div className="proyectsContent">
        <div className="infoProyectos">
          <h1>Mis Proyectos</h1>
        </div>
        <div className="imgProyects">
          <div className="imgPs">
            <img
              className="Calculadora"
              src="src/assets/Proyectos/Calculadora.png"
              alt=""
            />
            <h2 className="text2">Calculadora :</h2>
            <p className="descripcionP">
              Pagina desarrollada para realizar tipo de calculos como sumas,
              restas, Multiplicacion, divison, con una interfas sencilla y muy
              sencilla de utilizar.
            </p>
          </div>
          <div className="imgPs">
            <img
              className="Manage"
              src="src/assets/Proyectos/Manage.png"
              alt=""
            />
            <h2 className="text2">Mana Proyect :</h2>
            <p className="descripcionP">
              Proyecto realizado en HTML y CSS en practicas estudiantiles para
              reforzar lo aprendido durante el tiempo de estudio
            </p>
          </div>
          <div className="imgPs">
            <img
              className="PetShop"
              src="src/assets/Proyectos/PetShop.png"
              alt=""
            />
            <h2 className="text2">PetShop Proyect :</h2>
            <p className="descripcionP">
              Pagina desarrollada para tu destino en línea para todo lo
              relacionado con tus amigos peludos de cuatro patas! entendemos que
              tus mascotas son más que solo animales; son parte de tu familia.
            </p>
          </div>
          <div className="imgPs">
            <img
              className="Sportit"
              src="src/assets/Proyectos/Sportit.png"
              alt=""
            />
            <h2 className="text2">SportIt Proyect :</h2>
            <p className="descripcionP">
              Pagina desarrollada para todo lo relacionado con el mundo del
              deporte. Ya seas un fanático apasionado, un atleta dedicado o
              simplemente estés buscando mantenerte al día con las últimas
              noticias y eventos deportivos
            </p>
          </div>
          <div className="imgPs">
            <img
              className="Proyecto1"
              src="src/assets/Proyectos/Proyecto1.png"
              alt=""
            />
            <h2 className="text2">Proyecto :</h2>
            <p className="descripcionP">
              Proyecto realizado en HTML y CSS en practicas estudiantiles para
              reforzar lo aprendido durante el tiempo de estudio
            </p>
          </div>
          <div className="imgPs">
            <img
              className="Proyecto2"
              src="src/assets/Proyectos/Proyecto2.png"
              alt=""
            />
            <h2 className="text2">Proyecto :</h2>
            <p className="descripcionP">
              Proyecto realizado en HTML y CSS en practicas estudiantiles para
              reforzar lo aprendido durante el tiempo de estudio
            </p>
          </div>
          <div className="imgPs">
            <img
              className="Manage"
              src="src/assets/Proyectos/DOREMI.png"
              alt=""
            />
            <h2 className="text2">DoReMi Proyect :</h2>
            <p className="descripcionP">
              Pagina desarrolada con el equipo de estudio, para explorar el
              maravilloso mundo de la música! creemos que la música es más que
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

export default Proyectos;
