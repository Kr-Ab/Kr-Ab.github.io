import React, {useEffect, useRef} from "react";

export default function Experience({experience}) {
  const sectionRef = useRef();
  useEffect(() => {
    const section = sectionRef.current;
    const onScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        section.classList.add("visible");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="experience" ref={sectionRef}>
      <h3>Experience</h3>
      <div className="exp-grid">
        {experience.map((exp, i) => (
          <div className="exp-card" key={i}>
            <h4>
              {exp.jobTitle} <span className="at-company">@ {exp.company}</span>
            </h4>
            <span className="exp-meta">
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
