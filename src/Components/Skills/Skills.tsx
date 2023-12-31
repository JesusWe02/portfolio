import "./Skills.css";
import htmlImg from "../../icons/html.svg";
import cssImg from "../../icons/css.svg";
import jsImg from "../../icons/js.svg";
import typeScriptImg from "../../icons/typescript.svg";
import reactImg from "../../icons/react.svg";
import gitImg from "../../icons/git-black.svg";

import javaImg from "../../icons/java-black.svg";
import mysqlImg from "../../icons/mysql-black.svg";
import githublImg from "../../icons/github-logo.svg";
import bootstrapImg from "../../icons/bootstrap.svg";

import moduloI from "../../imgs/CertificadoI.png";
import moduloII from "../../imgs/CertificadoII.png";
import ceprotec from "../../imgs/CeprotecCertificado.png";
import jobs from "../../imgs/JobsCetificado.png";

export function Skills() {
  return (
    <section className="section-skills">
      <article className="aboutMe-section">
        <header>
          <h2>About Me</h2>
        </header>
        <section className="container-aboutMe">
          <div className="firts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              maxime quo inventore aperiam corrupti animi saepe assumenda
              dolorem veritatis consequatur, corporis ratione nemo, quae impedit
              magnam quas sit laudantium blanditiis. Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="second">
            <img src={moduloI} alt="certificadoTest" />
          </div>
          <div className="third">
            <img src={moduloII} alt="certificadoTest" />
          </div>
          <div className="fourth">
            <img src={jobs} alt="certificadoTest" />
          </div>
          <div className="fifth">
            <img src={moduloII} alt="certificadoTest" />
          </div>
          <div className="six">
            <img src={ceprotec} alt="certificadoTest" />
          </div>
        </section>
      </article>
      <article className="skills-section">
        <header>
          <h2>Skills</h2>
        </header>
        <section className="skills">
          <div>
            <img src={htmlImg} alt="htmlIcon" />
            <img src={cssImg} alt="cssIcon" />
            <img src={jsImg} alt="jsIcon" />
            <img src={typeScriptImg} alt="typeScriptIcon" />
            <img src={reactImg} alt="reactIcon" />
            <img src={gitImg} alt="gitIcon" />
          </div>
        </section>
        <section className="other-skills">
          <h3>Others</h3>
          <div>
            <img src={bootstrapImg} alt="bootstrapIcon" />
            <img src={githublImg} alt="githubIcon" />
            <img src={mysqlImg} alt="mysqlIcon" />
            <img src={javaImg} alt="javaIcon" />
          </div>
        </section>
      </article>
    </section>
  );
}
