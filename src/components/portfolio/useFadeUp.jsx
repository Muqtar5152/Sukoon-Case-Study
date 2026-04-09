import { useEffect, useRef } from 'react';

export default function useFadeUp() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const fadeEls = el.querySelectorAll('.fade-up');
    fadeEls.forEach((child) => observer.observe(child));

    return () => {
      fadeEls.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return ref;
}