import React from 'react';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = ({ classname }) => {
  return (
    <section className={`contact ${classname}`}>
      <a href="linkedin/akickia" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} color="#23ABBC" />
      </a>
      <a href="github/akickia" target="_blank">
        <FontAwesomeIcon icon={faGithub} color="#23ABBC" />
      </a>
      <a href="linkedin/akickia" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} color="#23ABBC" />
      </a>
    </section>
  );
};
