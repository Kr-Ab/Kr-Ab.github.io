import React from "react";

export default function Experience({experience}) {
  return (
    <section id="experience">
      <h3>Experience</h3>
      <div>
        {experience.map((exp, i) => (
          <div className="exp-item" key={i}>
            <h4>
              {exp.jobTitle} @ {exp.company}
            </h4>
            <span>
              {exp.duration} | {exp.location}
            </span>
            <ul>
              {exp.responsibilities.map((r, j) => (
                <li key={j}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
