import React, { useRef } from 'react';
import Section from './Section';
import styles from './Resume.module.css';

export default function Resume() {
  const btnRef = useRef(null);

  // Ripple effect handler
  const handleRipple = (e) => {
    const button = btnRef.current;
    if (!button) return;
    const ripple = document.createElement('span');
    ripple.className = styles.ripple;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    button.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  };

  return (
    <Section id="resume" title="Resume">
      <a
        href="/resume.pdf"
        download
        className={styles.downloadBtn}
        aria-label="Download Resume as PDF"
        ref={btnRef}
        onClick={handleRipple}
      >
        <span className={styles.downloadIcon} aria-hidden="true">
          {/* Heroicons solid download SVG */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 16.5C4 16.2239 4.22386 16 4.5 16H15.5C15.7761 16 16 16.2239 16 16.5C16 16.7761 15.7761 17 15.5 17H4.5C4.22386 17 4 16.7761 4 16.5ZM10.7071 14.2071C10.3166 14.5976 9.68342 14.5976 9.29289 14.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L9 11.0858V3.5C9 2.94772 9.44772 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5V11.0858L13.2929 8.79289C13.6834 8.40237 14.3166 8.40237 14.7071 8.79289C15.0976 9.18342 15.0976 9.81658 14.7071 10.2071L10.7071 14.2071Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className={styles.downloadText}>Download Resume (PDF)</span>
      </a>
    </Section>
  );
}
