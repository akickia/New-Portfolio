import React from 'react';
import { Heading } from '../../base/Heading/heading';
import { EduCards } from './components/EduCards';
import './eduExp.scss';
import { ExpCards } from './components/ExpCards';

export const EduExp = ({ setIsHomePage }) => {
  setIsHomePage(false);
  return (
    <main className="edu-exp">
      <div className="content">
        <Heading type={'long'}>Utbildning & erfarenhet</Heading>
      </div>
      <article className="content content-top">
        <EduCards />
      </article>
      <img className="doodle" src="./doodle.svg"></img>
      <article className="content content-bottom">
        <ExpCards />
      </article>
    </main>
  );
};
