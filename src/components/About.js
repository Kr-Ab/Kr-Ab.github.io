import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';
import Section from './Section';

export default function About({ about }) {
  return (
    <Section id="about" title="About Me">
      <p className={styles.aboutText}>{about}</p>
    </Section>
  );
}

About.propTypes = {
  about: PropTypes.string.isRequired,
};
