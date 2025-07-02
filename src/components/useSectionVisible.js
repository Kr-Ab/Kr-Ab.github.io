import { useEffect, useRef } from 'react';

/**
 * Custom hook to add 'visible' class to a section when it enters the viewport.
 * Uses IntersectionObserver for better performance and accessibility.
 * Returns a ref to be attached to the section element.
 */
export default function useSectionVisible() {
  const sectionRef = useRef();
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return sectionRef;
}
