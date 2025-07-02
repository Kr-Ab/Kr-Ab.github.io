import React from 'react';
import PropTypes from 'prop-types';
import useSectionVisible from './useSectionVisible';

export default function Experience({ experience }) {
  const sectionRef = useSectionVisible();
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

Experience.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      jobTitle: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
