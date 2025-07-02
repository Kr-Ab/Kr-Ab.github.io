import React from 'react';
import PropTypes from 'prop-types';
import useSectionVisible from './useSectionVisible';

export default function About({ about }) {
  const sectionRef = useSectionVisible();
  return (
    <section id="about" ref={sectionRef}>
      <h3>About Me</h3>
      <p className="about-text">{about}</p>
    </section>
  );
}

About.propTypes = {
  about: PropTypes.string.isRequired,
};
