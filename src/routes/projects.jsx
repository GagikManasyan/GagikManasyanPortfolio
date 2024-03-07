import Project from "../components/project.jsx";
import projects from "../assets/projects.js";
import "../css/projects.css";

function Projects() {
  return (
    <div id="projects">
      <h4>projects</h4>
      <div id="projects-container">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              link={project.link}
              git={project.git}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
