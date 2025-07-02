import React from "react";

export default function Hero({profile}) {
  return (
    <header id="hero">
      <div className="container hero-content">
        <img
          src={profile.profilePhoto}
          alt="Profile"
          className="profile-photo"
        />
        <div>
          <h1>{profile.name}</h1>
          <h2>{profile.jobTitle}</h2>
          <p>{profile.shortIntro}</p>
          <div className="social-icons">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/icons/github.svg" alt="GitHub" />
            </a>
            <a href={`mailto:${profile.social.email}`}>
              <img src="assets/icons/email.svg" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
