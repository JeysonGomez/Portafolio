import "./App.css";

import Start from "./components/Start/Start";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavHeader";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Footer />
      <Start />
      <Skills />
      <NavBar />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
