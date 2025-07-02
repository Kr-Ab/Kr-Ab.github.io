import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Hero({ profile }) {
  const nameRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    if (nameRef.current) nameRef.current.classList.add('fade-in-up');
    if (titleRef.current) titleRef.current.classList.add('fade-in-up-delay');
  }, []);

  return (
    <header className="hero animated-bg" id="hero">
      <img src={profile.profilePhoto} alt="Profile" className="profile-photo large" />
      <h1 ref={nameRef}>{profile.name}</h1>
      <h2 ref={titleRef}>{profile.jobTitle}</h2>
      <div className="short-intro">{profile.shortIntro}</div>
      <div className="social-icons">
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
