import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>
          &copy; {new Date().getFullYear()} {profile.name} &mdash; All rights reserved.
        </span>
        <div className="footer-social">
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={`mailto:${profile.social.email}`}>
            <i className="fas fa-envelope"></i>
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
