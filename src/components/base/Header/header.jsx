import React, { useContext, useEffect, useState } from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { PopupContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const checkScreenWidth = () => {
    const isDesktopSize = window.matchMedia('(min-width: 700px)').matches;
    setIsDesktop(isDesktopSize);
  };
  const { handlePopup } = useContext(PopupContext);

  const handleShowNav = () => {
    setShowNav((prev) => !prev);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);
  return (
    <header>
      <NavLink to="./" onClick={() => setShowNav(false)}>
        <img src="./akickia.se.png"></img>
      </NavLink>
      <nav className={`${isDesktop ? 'desktop-nav' : 'mobile-nav'}`}>
        {!isDesktop && (
          <FontAwesomeIcon
            onClick={() => handleShowNav()}
            icon={faEllipsisV}
            color="#23ABBC"
          />
        )}
        {(isDesktop || showNav) && (
          <>
            <Link to="/projects" onClick={() => handleShowNav()}>
              Projekt
            </Link>
            <Link to="/edu-exp" onClick={() => handleShowNav()}>
              Utbildning & erfarenhet
            </Link>
            <Link to="/about" onClick={() => handleShowNav()}>
              Om mig
            </Link>
            <a href="#">
              <button onClick={() => handlePopup(true)}>Kontakt</button>
            </a>
          </>
        )}
      </nav>
    </header>
  );
};
