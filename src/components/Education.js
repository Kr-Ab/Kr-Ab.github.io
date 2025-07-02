import React from 'react';
import PropTypes from 'prop-types';
import styles from './Education.module.css';
import Section from './Section';
import useSectionVisible from './useSectionVisible';

function EducationCard({ edu }) {
  const cardRef = useSectionVisible(styles.visible);
  return (
    <div ref={cardRef} className={styles.eduCard}>
      <h4>{edu.degree}</h4>
      <span className={styles.eduMeta}>
        {edu.institution}, {edu.location} ({edu.duration})
      </span>
    </div>
  );
}

EducationCard.propTypes = {
  edu: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Education({ education }) {
  return (
    <Section id="education" title="Education">
      <div className={styles.eduGrid}>
        {education.map((edu, i) => (
          <EducationCard edu={edu} key={i} />
        ))}
      </div>
    </Section>
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
