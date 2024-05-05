import React, { useEffect, useState } from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const checkScreenWidth = () => {
    const isDesktopSize = window.matchMedia('(min-width: 915px)').matches;
    setIsDesktop(isDesktopSize);
  };
  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);
  return (
    <header>
      <NavLink to="./">
        <img src="./akickia.se.png"></img>
      </NavLink>
      <nav className={`${isDesktop ? 'desktop-nav' : 'mobile-nav'}`}>
        {!isDesktop && (
          <FontAwesomeIcon
            onClick={() => setShowNav((prev) => !prev)}
            icon={faEllipsisV}
            color="#23ABBC"
          />
        )}
        {isDesktop ||
          (!isDesktop && showNav && (
            <>
              <Link to="/projects">Projekt</Link>
              <Link to="/edu-exp">Utbildning & erfarenhet</Link>
              <Link to="/about">Om mig</Link>
              <a href="#">
                <button>Kontakt</button>
              </a>
            </>
          ))}
      </nav>
    </header>
  );
};
