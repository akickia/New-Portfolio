import React from 'react';
import { Hero } from './components/heroSection';
import './start.scss';
import { StarterCards } from './components/starterCardsSection';
import { About } from './components/aboutSection';
import { Quotes } from './components/quotesSection';
import { Testimonial } from './components/testimonialSection';
import { Skills } from './components/skillsSection';

export const Start = () => {
  return (
    <main>
      <Hero />{' '}
      <article className="content">
        <StarterCards />
        <Skills />
        <About />
        <Quotes />
        <Testimonial />
      </article>
    </main>
  );
};
