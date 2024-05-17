import "./App.css";
import NavHeader from "./components/NavHeader";
import Inicio from "./components/Inicio";
import AboutMe from "./components/AboutMe";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Redes from "./components/Redes";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavHeader />
      <Inicio />
      <AboutMe />
      <Habilidades />
      <Proyectos />
      <Redes />
      <Footer />
       
    </>
  );
}

export default App;