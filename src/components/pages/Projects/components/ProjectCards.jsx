import React from 'react';
import { Card } from '../../../base/Card/card';
import { ReadMore } from '../../../base/ReadMoreBtn/readmore';
import { projects } from '../../../../assets/data';

export const ProjectCards = () => {
  const data = projects;

  const projectCardsEl = data.map((project) => {
    return (
      <Card
        key={project.id}
        title={project.title}
        subheading={project.subheading}
      >
        <p className="card__text">{project.text}</p>
        <section className="card__btns">
          <ReadMore link={project.adr1}>{project.link1}</ReadMore>
          {project.adr2 && (
            <ReadMore link={project.adr2}>{project.link2}</ReadMore>
          )}
        </section>
      </Card>
    );
  });
  return <>{projectCardsEl}</>;
};
