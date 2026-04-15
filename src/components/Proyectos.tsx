import projects, {type Project} from "../data/projects";
import { FaGithub } from "react-icons/fa";

function Proyectos() {
    return (
        <section id="proyectos" className="projects container">
            <h2>Proyectos</h2>
            <p className="subtitle">Algunos proyectos en los que he trabajado</p>

      <div className="projects-grid">
        {projects.map((project: Project, index: number) => (
          <div className="project-card" key={index} data-aos="zoom-in">
            
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="techs">
              {project.techs.map((tech: string, i: number) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" title="Github Repo">
                  <FaGithub />
                </a>
              )}

              {project.private && (
                <span className="private">Código privado</span>
              )}
            </div>

          </div>
        ))}
      </div>
        </section>
    );
}

export default Proyectos;

