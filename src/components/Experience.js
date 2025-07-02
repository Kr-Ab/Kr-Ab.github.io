import React from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';
import Section from './Section';
import useSectionVisible from './useSectionVisible';

function ExperienceCard({ exp }) {
  const cardRef = useSectionVisible(styles.visible);
  return (
    <div ref={cardRef} className={`${styles.expCard}`}>
      <h4>
        {exp.jobTitle} <span className={styles.atCompany}>@ {exp.company}</span>
      </h4>
      <span className={styles.expMeta}>
        {exp.duration} | {exp.location}
      </span>
      <ul>
        {exp.responsibilities.map((r, j) => (
          <li key={j}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

ExperienceCard.propTypes = {
  exp: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default function Experience({ experience }) {
  return (
    <Section id="experience" title="Experience">
      <div className={styles.expGrid}>
        {experience.map((exp, i) => (
          <ExperienceCard exp={exp} key={i} />
        ))}
      </div>
    </Section>
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
