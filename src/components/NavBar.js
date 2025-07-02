import React from "react";

export default function NavBar({activeSection}) {
  const sections = [
    {id: "about", label: "About"},
    {id: "experience", label: "Experience"},
    {id: "education", label: "Education"},
    {id: "skills", label: "Skills"},
    {id: "projects", label: "Projects"},
    {id: "resume", label: "Resume"},
  ];
  return (
    <nav>
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={activeSection === s.id ? "active" : ""}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
