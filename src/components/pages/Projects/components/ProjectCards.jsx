import React from 'react';
import { Card } from '../../../base/Card/card';
import { ReadMore } from '../../../base/ReadMoreBtn/readmore';
import { projects } from '../../../../assets/data';

export const ProjectCards = () => {
  const data = projects;

  const projectCardsEl = data.map((project, i) => {
    return (
      <Card key={i} title={project.title} subheading={project.subheading}>
        <p className="card__text">{project.text}</p>
        <section className="card__btns">
          <ReadMore onClick={() => console.log('clicked read more')}>
            {project.link1}
          </ReadMore>
          <ReadMore onClick={() => console.log('clicked read more')}>
            {project.link2}
          </ReadMore>
        </section>
      </Card>
    );
  });
  return <>{projectCardsEl}</>;
};
