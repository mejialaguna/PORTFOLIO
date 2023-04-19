import uniqid from "uniqid";
import { projects } from "../portfolio";
import { ProjectContainer } from "../ProjectContainer";
import "./Projects.css";

export const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={project?.name} project={project} />
        ))}
      </div>
    </section>
  );
};
