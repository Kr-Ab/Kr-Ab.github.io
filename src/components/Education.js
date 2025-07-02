import React from "react";

export default function Education({education}) {
  return (
    <section id="education">
      <h3>Education</h3>
      <div>
        {education.map((edu, i) => (
          <div className="edu-item" key={i}>
            <h4>{edu.degree}</h4>
            <span>
              {edu.institution}, {edu.location} ({edu.duration})
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
