import React, {useEffect, useRef} from "react";

export default function Hero({profile}) {
  const nameRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    if (nameRef.current) nameRef.current.classList.add("fade-in-up");
    if (titleRef.current) titleRef.current.classList.add("fade-in-up-delay");
  }, []);

  return (
    <header className="hero animated-bg" id="hero">
      <img
        src={profile.profilePhoto}
        alt="Profile"
        className="profile-photo large"
      />
      <h1 ref={nameRef}>{profile.name}</h1>
      <h2 ref={titleRef}>{profile.jobTitle}</h2>
      <div className="short-intro">{profile.shortIntro}</div>
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
    </header>
  );
}
