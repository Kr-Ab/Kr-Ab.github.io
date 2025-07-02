import React, { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { SECTIONS } from './components/sections.config';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));

const COMPONENT_MAP = { About, Experience, Education, Skills, Projects, Resume };

function App() {
  const [profile, setProfile] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode);
  }, [lightMode]);

  useEffect(() => {
    fetch('/profile.json')
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('scrollTopBtn');
      if (btn) btn.style.display = window.scrollY > 200 ? 'block' : 'none';
      let found = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) found = id;
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.onclick = function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      };
    });
  }, [profile]);

  if (!profile) return <div className="App">Loading...</div>;

  return (
    <div id="app-root">
      <button
        className="theme-toggle"
        aria-label="Toggle light/dark mode"
        onClick={() => setLightMode((m) => !m)}
        style={{ position: 'fixed', top: 18, right: 24, zIndex: 300 }}
      >
        {lightMode ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
      </button>
      <NavBar activeSection={activeSection} />
      <Hero profile={profile} />
      <main>
        <Suspense fallback={<div>Loading section...</div>}>
          {SECTIONS.map(({ id, component }) => {
            const SectionComponent = COMPONENT_MAP[component];
            if (!SectionComponent) return null;
            const sectionProps =
              id === 'about'
                ? { about: profile.about }
                : id === 'experience'
                  ? { experience: profile.experience }
                  : id === 'education'
                    ? { education: profile.education }
                    : id === 'skills'
                      ? { skills: profile.skills }
                      : id === 'projects'
                        ? { projects: profile.projects }
                        : {};
            return <SectionComponent key={id} {...sectionProps} />;
          })}
        </Suspense>
      </main>
      <Footer profile={profile} />
      <button
        id="scrollTopBtn"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
