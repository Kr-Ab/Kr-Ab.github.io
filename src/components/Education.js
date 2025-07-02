import React, {useEffect, useRef} from "react";

export default function Education({education}) {
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
    <section id="education" ref={sectionRef}>
      <h3>Education</h3>
      <div className="edu-grid">
        {education.map((edu, i) => (
          <div className="edu-card" key={i}>
            <h4>{edu.degree}</h4>
            <span className="edu-meta">
              {edu.institution}, {edu.location} ({edu.duration})
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
