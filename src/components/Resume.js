import React, {useEffect, useRef} from "react";

export default function Resume() {
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
    <section id="resume" ref={sectionRef}>
      <h3>Resume</h3>
      <a href="/resume.pdf" download className="download-btn">
        Download Resume (PDF)
      </a>
    </section>
  );
}
