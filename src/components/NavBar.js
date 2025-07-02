import React, {useEffect, useState} from "react";

export default function NavBar({activeSection}) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = [
    {id: "about", label: "About"},
    {id: "experience", label: "Experience"},
    {id: "education", label: "Education"},
    {id: "skills", label: "Skills"},
    {id: "projects", label: "Projects"},
    {id: "resume", label: "Resume"},
  ];
  return (
    <>
      <div
        className="scroll-progress-bar"
        style={{width: `${scrollProgress}%`}}
      />
      <nav
        className={
          scrolled ? "sticky-nav nav-solid" : "sticky-nav nav-transparent"
        }
      >
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
    </>
  );
}
