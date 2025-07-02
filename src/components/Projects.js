import React from "react";

export default function Projects({projects}) {
  return (
    <section id="projects">
      <h3>Projects</h3>
      <div>
        {projects.map((proj, i) => (
          <div className="project-item" key={i}>
            <h4>{proj.name}</h4>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
