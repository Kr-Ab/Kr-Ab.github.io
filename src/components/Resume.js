import React from 'react';
import useSectionVisible from './useSectionVisible';

export default function Resume() {
  const sectionRef = useSectionVisible();
  return (
    <section id="resume" ref={sectionRef}>
      <h3>Resume</h3>
      <a href="/resume.pdf" download className="download-btn">
        Download Resume (PDF)
      </a>
    </section>
  );
}
