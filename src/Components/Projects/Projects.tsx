import "./Projects.css";
import proyect1Img from "../../imgs/proyectoIMG.jpg";
import proyect2Img from "../../imgs/proyectoIMG.jpg";
import proyect3Img from "../../imgs/proyectoIMG.jpg";
import proyect4Img from "../../imgs/proyectoIMG.jpg";
import proyect5Img from "../../imgs/proyectoIMG.jpg";
import proyect6Img from "../../imgs/proyectoIMG.jpg";

const porjectsData = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: proyect1Img,
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: proyect2Img,
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: proyect3Img,
  },
  {
    id: 4,
    title: "Proyecto 4",
    description: "Descripción del proyecto 4",
    image: proyect4Img,
  },
  {
    id: 5,
    title: "Proyecto 5",
    description: "Descripción del proyecto 5",
    image: proyect5Img,
  },
  {
    id: 6,
    title: "Proyecto 6",
    description: "Descripción del proyecto 6",
    image: proyect6Img,
  },
];
export function Projects() {
  return (
    <section className="section-projects" id="projects">
      <header>
        <h2>Projects</h2>
      </header>
      <div className="project-container">
        {porjectsData.map((project) => (
          <article key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
