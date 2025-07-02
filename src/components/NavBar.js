import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SECTIONS } from './sections.config';

export default function NavBar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      <nav className={scrolled ? 'sticky-nav nav-solid' : 'sticky-nav nav-transparent'}>
        <ul>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={activeSection === s.id ? 'active' : ''}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  activeSection: PropTypes.string.isRequired,
};
