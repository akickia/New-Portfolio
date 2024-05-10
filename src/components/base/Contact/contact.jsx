import React from 'react';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = ({ classname }) => {
  return (
    <section className={`contact ${classname}`}>
      <a href="https://linkedin.com/in/kicki-lindstrand" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} color="#23ABBC" />
      </a>
      <a href="https://github.com/akickia" target="_blank">
        <FontAwesomeIcon icon={faGithub} color="#23ABBC" />
      </a>
      <a href="mailto: kicki.lindstrand@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} color="#23ABBC" />
      </a>
    </section>
  );
};
