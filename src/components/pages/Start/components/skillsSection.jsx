import React from 'react';
import { Card } from '../../../base/Card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faBootstrap, faCss3, faFontAwesome, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faBatteryEmpty, faTshirt } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
  return (
    <>
      <Card
        title={'Kompetens'}
        line={"line"}
        classname={"large"}
      >
        <section className='skills'>
          <FontAwesomeIcon icon={faHtml5} color='##23ABBC' />
          <FontAwesomeIcon icon={faCss3} color='##23ABBC' />
          <FontAwesomeIcon icon={faNodeJs} color='##23ABBC' />
          <FontAwesomeIcon icon={faJs} color='##23ABBC' />
          <FontAwesomeIcon icon={faSass} color='##23ABBC' />
          <FontAwesomeIcon icon={faReact} color='##23ABBC' />
          <FontAwesomeIcon icon={faAws} color='##23ABBC' />
  
          <FontAwesomeIcon icon={faBootstrap} color='##23ABBC' />

          <FontAwesomeIcon icon={faGit} color='##23ABBC' />
          <FontAwesomeIcon icon={faGithub} color='##23ABBC' />
          <FontAwesomeIcon icon={faFontAwesome} color='##23ABBC' />
          <FontAwesomeIcon icon={faCss3} color='##23ABBC' />
          <FontAwesomeIcon icon={faReact} color='##23ABBC' />
          <FontAwesomeIcon icon={faHtml5} color='##23ABBC' />
          <FontAwesomeIcon icon={faCss3} color='##23ABBC' />
          <FontAwesomeIcon icon={faReact} color='##23ABBC' />
        </section>
        <p className="card__text">
          Vill du veta mer? Kolla in mina senaste projekt här!
        </p>
      </Card>
    </>
  );
};
