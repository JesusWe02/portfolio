import './Projects.css';
import proyect1Img from '../../imgs/proyectoIMG.jpg';
import proyect2Img from '../../imgs/proyectoIMG.jpg';
import proyect3Img from '../../imgs/proyectoIMG.jpg';
import proyect4Img from '../../imgs/proyectoIMG.jpg';
import proyect5Img from '../../imgs/proyectoIMG.jpg';
import proyect6Img from '../../imgs/proyectoIMG.jpg';

const porjectsData = [
  {
    id: 1,
    title: 'Yu-Gi-Oh Life Counter',
    description: 'Website created for a client.',
    image: proyect1Img,
  },
  {
    id: 2,
    title: 'E-Comerce for my work',
    description: 'Still in progress to deploy it into production.',
    image: proyect2Img,
  },
  {
    id: 3,
    title: 'E-Comerce for my workzzzssss',
    description:
      'Still in progress to deploy it into productions adasd ss jhbjhy.',
    image: proyect3Img,
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Project Description 4',
    image: proyect4Img,
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Project Description 5',
    image: proyect5Img,
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Project Description 6',
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
            <span className="split"></span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
