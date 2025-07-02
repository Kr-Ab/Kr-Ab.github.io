import React from "react";

export default function Footer({profile}) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>
          &copy; {new Date().getFullYear()} {profile.name} &mdash; All rights
          reserved.
        </span>
        <div className="footer-social">
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
    </footer>
  );
}
