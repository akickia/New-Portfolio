import React from 'react';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  return (
    <section className="contact">
      <a href="linkedin/akickia" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} color="#23ABBC" />
      </a>
      <a href="linkedin/akickia" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} color="#23ABBC" />
      </a>
    </section>
  );
};
