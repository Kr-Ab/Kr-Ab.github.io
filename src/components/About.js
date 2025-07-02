import React, {useEffect, useRef} from "react";

export default function About({about}) {
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
    <section id="about" ref={sectionRef}>
      <h3>About Me</h3>
      <p className="about-text">{about}</p>
    </section>
  );
}
