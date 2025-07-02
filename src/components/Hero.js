import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';

export default function Hero({ profile }) {
  const nameRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    if (nameRef.current) nameRef.current.classList.add('fade-in-up');
    if (titleRef.current) titleRef.current.classList.add('fade-in-up-delay');
  }, []);

  return (
    <header className={`${styles.hero} animated-bg`} id="hero">
      <img
        src={profile.profilePhoto}
        alt="Profile"
        className={styles.profilePhotoLarge}
      />
      <h1 ref={nameRef}>{profile.name}</h1>
      <h2 ref={titleRef}>{profile.jobTitle}</h2>
      <div className={styles.shortIntro}>{profile.shortIntro}</div>
      <div className={styles.socialIcons}>
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
    </header>
  );
}

Hero.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    shortIntro: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    social: PropTypes.shape({
      linkedin: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
