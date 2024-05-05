import React from 'react';
import { Heading } from '../../base/Heading/heading';
import { ProjectCards } from './components/ProjectCards';
import './projects.scss';
import { Contact } from '../../base/Contact/contact';

export const Projects = ({ setIsHomePage }) => {
  setIsHomePage(false);
  return (
    <main className="projects">
      <div className="content">
        <Heading>Project</Heading>
      </div>
      <article className="content">
        <ProjectCards />
        <Contact />
      </article>
    </main>
  );
};
