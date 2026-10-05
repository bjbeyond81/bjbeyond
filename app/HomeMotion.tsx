'use client';
import { useEffect } from 'react';
export function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const nodes = document.querySelectorAll<HTMLElement>('.edge-thesis-grid, .edge-manifesto blockquote, .edge-section-heading, .edge-phoenix, .edge-project, .edge-art-content, .edge-article, .edge-capability, .edge-contact-row');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('edge-arrived');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    nodes.forEach(node => {
      if (node.getBoundingClientRect().top < window.innerHeight * .94) return;
      node.classList.add('edge-scroll-reveal');
      observer.observe(node);
    });
    return () => {
      observer.disconnect();
      nodes.forEach(node => node.classList.remove('edge-scroll-reveal', 'edge-arrived'));
    };
  }, []);
  return null;
}
