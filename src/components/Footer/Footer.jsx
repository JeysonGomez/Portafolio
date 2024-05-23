import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="generalContent bg1">
      <div className="allContent">
        <div className="Content">
          <a className="contentSocial" href="https://github.com/JeysonGomez">
            <img
              className="imgSocial"
              src="src/assets/GitHub.png"
              alt="GitHub"
            />
            GitHub
          </a>
        </div>

        <div className="Content">
          <a
            className="contentSocial"
            href="https://www.linkedin.com/in/jeysongomez17/"
          >
            <img
              className="imgSocial"
              src="src/assets/Logolinkedin.png"
              alt="Linkedin"
            />
            Linkedin
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
