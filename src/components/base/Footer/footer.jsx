import React from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.scss';
import { ReadMore } from '../ReadMoreBtn/readmore';
import { Contact } from '../Contact/contact';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <a className="footer__home" href="https://akickia.se">
        akickia.se
      </a>
      <Contact />
      <nav className="footer__btns">
        <ReadMore onClick={() => navigate('/about')}>Mer om mig</ReadMore>
        <ReadMore
          link={
            'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/frontendutvecklare-distans/'
          }
        >
          Folkuniversitetet
        </ReadMore>
        <ReadMore link={'http://lindstrand.tech'}>Lindstrand.tech</ReadMore>
      </nav>
    </footer>
  );
};
