import React, {useEffect, useRef} from "react";

export default function Projects({projects}) {
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
    <section id="projects" ref={sectionRef}>
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <h4>{proj.name}</h4>
            <p>{proj.description}</p>
            <a
              className="github-btn"
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{verticalAlign: "middle", marginRight: 6}}
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
