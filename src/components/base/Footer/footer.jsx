import React from 'react';
import './footer.scss';
import { ReadMore } from '../ReadMoreBtn/readmore';
import { Contact } from '../Contact/contact';

export const Footer = () => {
  return (
    <footer className="footer">
      <a className="footer__home" href="https://akickia.se">
        akickia.se
      </a>
      <Contact />
      <nav className="footer__btns">
        <ReadMore>Mer om mig</ReadMore>
        <ReadMore>Folkuniversitetet</ReadMore>
        <ReadMore>Lindstrand.se</ReadMore>
      </nav>
    </footer>
  );
};
