import React from "react";

export default function Skills({skills}) {
  return (
    <section id="skills">
      <h3>Skills</h3>
      <div>
        {Object.keys(skills).map((group, i) => (
          <div className="skill-group" key={i}>
            <strong>{group}:</strong> {skills[group].join(", ")}
          </div>
        ))}
      </div>
    </section>
  );
}
