import React from 'react';
import PropTypes from 'prop-types';
import useSectionVisible from './useSectionVisible';

export default function Skills({ skills }) {
  const sectionRef = useSectionVisible();
  return (
    <section id="skills" ref={sectionRef}>
      <h3>Skills</h3>
      <div className="skills-grid">
        {Object.keys(skills).map((group, i) => (
          <div className="skill-card" key={i}>
            <span className="skill-title">{group}:</span>
            <span className="skill-list">{skills[group].join(', ')}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

Skills.propTypes = {
  skills: PropTypes.objectOf(PropTypes.array).isRequired,
};
