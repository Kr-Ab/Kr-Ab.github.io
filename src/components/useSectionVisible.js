import { useEffect, useRef } from 'react';

/**
 * Custom hook to add a class to a section when it enters the viewport.
 * Accepts a className (from CSS module) to add when visible.
 */
export default function useSectionVisible(visibleClass) {
  const sectionRef = useRef();
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleClass) {
          section.classList.add(visibleClass);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [visibleClass]);
  return sectionRef;
}
