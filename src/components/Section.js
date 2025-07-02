import React from 'react';
import PropTypes from 'prop-types';
import useSectionVisible from './useSectionVisible';
import styles from './Section.module.css';

export default function Section({ id, title, children, className }) {
  const sectionRef = useSectionVisible(styles.visible);
  // Always apply both the module section class and any additional className
  const combinedClassName = [styles.section, className].filter(Boolean).join(' ');
  return (
    <section id={id} ref={sectionRef} className={combinedClassName}>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
