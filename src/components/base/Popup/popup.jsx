import React, { useContext, useState } from 'react';
import './popup.scss';
import { PopupContext } from '../../../App';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Popup = () => {
  const { handlePopup } = useContext(PopupContext);

  return (
    <article className="popup">
      <button className="close-btn" onClick={() => handlePopup(false)}>
        X
      </button>
      <h2>Kontakta mig: </h2>
      <ul>
        <a href="mailto: kicki.lindstrand@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} color="#23ABBC" />
          kicki.lindstrand@gmail.com
        </a>

        <a href="https://linkedin.com/in/kicki-lindstrand" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} color="#23ABBC" />
          Linkedin - Kicki Lindstrand
        </a>
        <a href="https://github.com/akickia" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} color="#23ABBC" />
          Github - akickia
        </a>
      </ul>
    </article>
  );
};
