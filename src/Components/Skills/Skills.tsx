{
  /*

  import Modal from '../Modal/Modal';
  import './Skills.css';
  
  import htmlImg from '../../icons/html.svg';
  import cssImg from '../../icons/css.svg';
  import jsImg from '../../icons/js.svg';
  import typeScriptImg from '../../icons/typescript.svg';
  import reactImg from '../../icons/react.svg';
  import gitImg from '../../icons/git-black.svg';
  
  import javaImg from '../../icons/java-black.svg';
  import mysqlImg from '../../icons/mysql-black.svg';
  import githublImg from '../../icons/github-logo.svg';
  import bootstrapImg from '../../icons/bootstrap.svg';
  
  import testTitulo from '../../imgs/testCertificado.jpg';
  import moduloI from '../../imgs/CertificadoI.png';
  import moduloII from '../../imgs/CertificadoII.png';
  import ceprotec from '../../imgs/CeprotecCertificado.png';
  import jobs from '../../imgs/JobsCetificado.png';
  
  import expandModuloI from '../../imgs/ExpandModuloI.png';
  import expandModuloII from '../../imgs/ExpandModuloII.png';
  import expandJobs from '../../imgs/ExpandJobs.png';
  import expandCeprotec from '../../imgs/ExpandCeprotec.png';
  
  export function Skills() {
    return (
      <section className="section-skills" id="skills">
        <article className="aboutMe-section">
          <header>
            <h2>About Me</h2>
          </header>
          <section className="container-aboutMe">
            <div className="first">
              <div className="first-content">
                <p>
                  Hello, I'm Jesus! I'm new to the world of programming and strive
                  to get better every day. Since childhood, I've always been
                  passionate about everything related to technology and computers,
                  leading me to assemble my first computer at a young age. In my
                  free time, I enjoy assembling and maintaining computers, as well
                  as solving issues for my clients.
                </p>
                <br />
                <p>
                  Currently, I am looking to enter this new field of programming
                  to grow professionally and, above all, as an individual.
                </p>
              </div>
            </div>
            <div className="second">
              <Modal
                trigger={<img src={testTitulo} alt="Titulo Cibertec" />}
                maxWidth="1100px"
                maxHeight="90%"
              >
                <img
                  src={testTitulo}
                  alt="Titulo Cibertec"
                  className="imgModal"
                />
              </Modal>
            </div>
            <div className="third">
              <Modal
                trigger={<img src={moduloI} alt="Modulo I" />}
                maxWidth="1100px"
                maxHeight="90%"
              >
                <img src={expandModuloI} alt="ModuloI" className="imgModal" />
              </Modal>
            </div>
            <div className="fourth">
              <Modal
                trigger={<img src={jobs} alt="certificadoTest" />}
                maxWidth="540px"
                maxHeight="90%"
              >
                <img
                  src={expandJobs}
                  alt="CertificadoJobs"
                  className="imgModal"
                />
              </Modal>
            </div>
            <div className="fifth">
              <Modal
                trigger={<img src={moduloII} alt="certificadoTest" />}
                maxWidth="1100px"
                maxHeight="90%"
              >
                <img src={expandModuloII} alt="ModuloI" className="imgModal" />
              </Modal>
            </div>
            <div className="six">
              <Modal
                trigger={<img src={ceprotec} alt="certificadoTest" />}
                maxWidth="1100px"
                maxHeight="90%"
              >
                <img src={expandCeprotec} alt="ModuloI" className="imgModal" />
              </Modal>
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





 */
}

import Modal from '../Modal/Modal';
import './Skills.css';
import {
  certificates,
  skillsIcons,
  otherSkillsIcons,
} from '../../Assets/assets';

export function Skills() {
  return (
    <section className="section-skills" id="skills">
      <article className="aboutMe-section">
        <header>
          <h2>About Me</h2>
        </header>
        <section className="container-aboutMe">
          <div className="first">
            <div className="first-content">
              <p>
                Hello, I'm Jesus! I'm new to the world of programming and strive
                to get better every day. Since childhood, I've always been
                passionate about everything related to technology and computers,
                leading me to assemble my first computer at a young age. In my
                free time, I enjoy assembling and maintaining computers, as well
                as solving issues for my clients.
              </p>
              <br />
              <p>
                Currently, I am looking to enter this new field of programming
                to grow professionally and, above all, as an individual.
              </p>
            </div>
          </div>
          {certificates.map((cert, index) => (
            <div className={`cert-section cert-${index}`} key={index}>
              <Modal
                trigger={<img src={cert.imgSrc} alt={cert.alt} />}
                maxWidth="1100px"
                maxHeight="90%"
              >
                <img src={cert.expandSrc} alt={cert.alt} className="imgModal" />
              </Modal>
            </div>
          ))}
        </section>
      </article>
      <article className="skills-section">
        <header>
          <h2>Skills</h2>
        </header>
        <section className="skills">
          <div>
            {skillsIcons.map((skill, index) => (
              <img src={skill.src} alt={skill.alt} key={index} />
            ))}
          </div>
        </section>
        <section className="other-skills">
          <h3>Others</h3>
          <div>
            {otherSkillsIcons.map((otherSkill, index) => (
              <img src={otherSkill.src} alt={otherSkill.alt} key={index} />
            ))}
          </div>
        </section>
      </article>
    </section>
  );
}
