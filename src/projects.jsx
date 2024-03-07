import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Project from "./components/project.jsx";
import projects from "./assets/projects.js";
import "./css/projects.css";

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(inView);
  }, [inView]);
  return (
    <div id="projects" ref={ref}>
      {active && (
        <>
          <h2>projects</h2>
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
        </>
      )}
    </div>
  );
}
export default Projects;
