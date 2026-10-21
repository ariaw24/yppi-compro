import { useEffect } from 'react';
import type { PageName } from '@/types';

const REVEAL_SELECTORS = [
  '.hero__copy',
  '.hero__visual',
  '.quick__grid',
  '.about__visual',
  '.about__copy',
  '.values .section-intro',
  '.values__cards',
  '.programs .section-heading-row',
  '.programs__grid',
  '.featured__heading',
  '.featured__grid',
  '.activities .section-intro',
  '.activities__grid',
  '.facilities .section-heading-row',
  '.facilities__grid',
  '.people__grid > div',
  '.portrait-grid',
  '.news .section-heading-row',
  '.news__grid',
  '.ppdb__panel',
  '.faq__grid > div',
  '.accordion',
  '.contact__copy',
  '.map-placeholder',
  '.profile-hero__copy',
  '.profile-hero__visual',
  '.profile-tabs',
  '.profile-tab-panel',
  '.identity__grid > div',
  '.identity-list',
  '.history .section-heading-row',
  '.timeline',
  '.profile-vision__grid > div',
  '.profile-vision__content',
  '.profile-values .section-intro',
  '.profile-values__grid',
  '.leadership__grid > div',
  '.organization .section-heading-row',
  '.org-chart',
  '.profile-people__grid',
  '.profile-cta__panel',
  '.inner-hero__copy',
  '.inner-hero__visual',
  '.content-tabs',
  '.academic-overview__panel',
  '.learning-programs .section-heading-row',
  '.learning-programs__grid',
  '.learning-approach__grid > div',
  '.academic-calendar .section-heading-row',
  '.calendar-layout',
  '.student-intro__grid > *',
  '.extracurricular .section-heading-row',
  '.activity-filters',
  '.extracurricular__grid',
  '.character__grid > div',
  '.student-gallery .section-intro',
  '.student-gallery__grid',
  '.achievements__grid > div',
  '.inner-cta__panel',
];

export function useRevealAnimation(activePage: PageName) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS.join(','));

    root.classList.add('motion-ready');
    targets.forEach((target) => target.classList.add('reveal-target'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      targets.forEach((target) => target.classList.remove('reveal-target', 'is-visible'));
      root.classList.remove('motion-ready');
    };
  }, [activePage]);
}
