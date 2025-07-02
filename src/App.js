import React, {useEffect, useState, Suspense, lazy} from "react";
import "./App.css";
const Section = lazy(() => import("./components/Section"));

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/profile.json")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  useEffect(() => {
    // Show/hide scroll-to-top button
    const handleScroll = () => {
      const btn = document.getElementById("scrollTopBtn");
      if (!btn) return;
      if (window.scrollY > 200) btn.style.display = "block";
      else btn.style.display = "none";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.onclick = function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({behavior: "smooth"});
      };
    });
  }, [profile]);

  if (!profile) return <div className="App">Loading...</div>;

  return (
    <div className="App">
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
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Loading sections...</div>}>
          <Section id="about" title="About Me">
            <p>{profile.about}</p>
          </Section>
          <Section id="experience" title="Experience">
            <div>
              {profile.experience.map((exp, i) => (
                <div className="exp-item" key={i}>
                  <h4>
                    {exp.jobTitle} @ {exp.company}
                  </h4>
                  <span>
                    {exp.duration} | {exp.location}
                  </span>
                  <ul>
                    {exp.responsibilities.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
          <Section id="education" title="Education">
            <div>
              {profile.education.map((edu, i) => (
                <div className="edu-item" key={i}>
                  <h4>{edu.degree}</h4>
                  <span>
                    {edu.institution}, {edu.location} ({edu.duration})
                  </span>
                </div>
              ))}
            </div>
          </Section>
          <Section id="skills" title="Skills">
            <div>
              {Object.keys(profile.skills).map((group, i) => (
                <div className="skill-group" key={i}>
                  <strong>{group}:</strong> {profile.skills[group].join(", ")}
                </div>
              ))}
            </div>
          </Section>
          <Section id="projects" title="Projects">
            <div>
              {profile.projects.map((proj, i) => (
                <div className="project-item" key={i}>
                  <h4>{proj.name}</h4>
                  <p>{proj.description}</p>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              ))}
            </div>
          </Section>
          <Section id="resume" title="Resume">
            <a href="/resume.pdf" download className="download-btn">
              Download Resume (PDF)
            </a>
          </Section>
        </Suspense>
      </main>
      <button
        id="scrollTopBtn"
        title="Go to top"
        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
