import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="Footer">
      <div className="allContent">

        <div className="Content1">
          <a  className="img1" href="https://github.com/JeysonGomez">
            <img className="imgRedes" src="src/assets/GitHub.png" alt="" />GitHub
          </a>
        </div>

        <div className="Content1">
          <a className="img1" href="https://www.linkedin.com/in/jeysongomez17/">
            <img className="imgRedes" src="src/assets/Logolinkedin.png" alt="Linkedin" />Linkedin
          </a>
        </div>
      </div>

      <div className="textCopy">
        <span>Copyright@ | Code With</span>
        <span>Jeyson Gomez</span>
      </div>
    </section>
  );
}

export default Footer;
