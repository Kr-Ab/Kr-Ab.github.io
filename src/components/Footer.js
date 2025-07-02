import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

export default function Footer({ profile }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span>
          &copy; {new Date().getFullYear()} {profile.name} &mdash; All rights reserved.
        </span>
        <div className={styles.footerSocial}>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialIcon}
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialIcon}
          >
            <i className="fab fa-github" />
          </a>
          <a
            href={`mailto:${profile.social.email}`}
            aria-label="Email"
            className={styles.socialIcon}
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    social: PropTypes.shape({
      linkedin: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
