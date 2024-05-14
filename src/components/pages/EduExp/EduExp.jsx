import React, { useEffect } from 'react';
import { Heading } from '../../base/Heading/heading';
import { EduCards } from './components/EduCards';
import './eduExp.scss';
import { ExpCards } from './components/ExpCards';
import { Doodle } from '../../base/Doodle/doodle';

export const EduExp = ({ setIsHomePage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsHomePage(false);
  }, []);
  return (
    <main className="edu-exp">
      <div className="content">
        <Heading type={'long'}>Utbildning & erfarenhet</Heading>
      </div>
      <article className="content content-top">
        <EduCards />
      </article>
      <Doodle />
      <article className="content content-bottom">
        <ExpCards />
      </article>
    </main>
  );
};
