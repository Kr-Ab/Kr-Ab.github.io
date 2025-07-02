import React from 'react';
import PropTypes from 'prop-types';
import useSectionVisible from './useSectionVisible';

export default function Education({ education }) {
  const sectionRef = useSectionVisible();
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

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
};
