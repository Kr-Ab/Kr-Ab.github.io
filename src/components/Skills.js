import React, {useEffect, useRef} from "react";

export default function Skills({skills}) {
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
    <section id="skills" ref={sectionRef}>
      <h3>Skills</h3>
      <div className="skills-grid">
        {Object.keys(skills).map((group, i) => (
          <div className="skill-card" key={i}>
            <span className="skill-title">{group}:</span>
            <span className="skill-list">{skills[group].join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
