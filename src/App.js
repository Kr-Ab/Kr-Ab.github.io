import React, {useEffect, useState} from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [profile, setProfile] = useState(null);
  const [activeSection, setActiveSection] = useState("about");

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

      // Highlight nav link
      const sections = [
        "about",
        "experience",
        "education",
        "skills",
        "projects",
        "resume",
      ];
      let found = "about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) found = id;
      }
      setActiveSection(found);
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
    <div id="app-root" className="App">
      <NavBar activeSection={activeSection} />
      <Hero profile={profile} />
      <main>
        <About about={profile.about} />
        <Experience experience={profile.experience} />
        <Education education={profile.education} />
        <Skills skills={profile.skills} />
        <Projects projects={profile.projects} />
        <Resume />
      </main>
      <Footer profile={profile} />
      <button
        id="scrollTopBtn"
        title="Back to top"
        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
