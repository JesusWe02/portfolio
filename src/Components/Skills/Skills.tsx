import "./Skills.css";
import {
  certificates,
  skillsIcons,
  otherSkillsIcons,
} from "../../Assets/assets";
import { useEffect, useState } from "react";

export function Skills() {
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState<
    number | null
  >(null);
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = (certIndex: number) => {
    setSelectedCertificateIndex(
      certIndex === selectedCertificateIndex ? null : certIndex
    );
    setModalActive(!modalActive);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("active-modal", modalActive);

    return () => {
      document.documentElement.classList.remove("active-modal");
    };
  }, [modalActive]);

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
            <div
              className={`cert-section cert-${index}`}
              key={index}
              onClick={() => toggleModal(index)}
            >
              <img src={cert.imgSrc} alt={cert.alt} />
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
              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                <img src={skill.src} alt={skill.alt} key={index} />
              </a>
            ))}
          </div>
        </section>
        <section className="other-skills">
          <h3>Others</h3>
          <div>
            {otherSkillsIcons.map((otherSkill, index) => (
              <a
                href={otherSkill.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={otherSkill.src} alt={otherSkill.alt} key={index} />
              </a>
            ))}
          </div>
        </section>
      </article>

      {/* Modal */}
      {selectedCertificateIndex !== null && (
        <div className="modal">
          <div
            className="overlay"
            onClick={() => toggleModal(selectedCertificateIndex)}
          ></div>
          <div className="modal-content">
            {certificates[selectedCertificateIndex].expandSrc && (
              <img
                src={certificates[selectedCertificateIndex].expandSrc}
                alt={certificates[selectedCertificateIndex].alt}
                className="imgModal"
              />
            )}
            <button
              className="close-modal"
              onClick={() => toggleModal(selectedCertificateIndex)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
