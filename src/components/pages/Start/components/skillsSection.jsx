import React from 'react';
import { Card } from '../../../base/Card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAws,
  faCss3,
  faFigma,
  faFontAwesome,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faTrello,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ReadMore } from '../../../base/ReadMoreBtn/readmore';

export const Skills = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card title={'Kompetenser'} line={'line'} classname={'large'}>
        <section className="skills">
          <FontAwesomeIcon icon={faHtml5} color="##23ABBC" title="HTML" />
          <FontAwesomeIcon icon={faCss3} color="##23ABBC" title="CSS" />
          <FontAwesomeIcon icon={faSass} color="##23ABBC" title="Sass" />
          <FontAwesomeIcon icon={faJs} color="##23ABBC" title="JS" />
          <img src="./typescript.svg" title="TypeScript" />
          <FontAwesomeIcon icon={faNodeJs} color="##23ABBC" title="node.js" />
          <FontAwesomeIcon icon={faReact} color="##23ABBC" title="React" />
          <FontAwesomeIcon icon={faVuejs} color="##23ABBC" title="Vue.js" />
          <FontAwesomeIcon icon={faNpm} color="##23ABBC" title="npm" />
          <img src="./api.svg" title="API" />
          <FontAwesomeIcon icon={faAws} color="##23ABBC" title="AWS" />
          <FontAwesomeIcon
            icon={faFontAwesome}
            color="##23ABBC"
            title="Fontawesome"
          />
          <FontAwesomeIcon icon={faGit} color="##23ABBC" title="Git" />
          <FontAwesomeIcon icon={faGithub} color="##23ABBC" title="GitHub" />
          <FontAwesomeIcon icon={faCodeFork} color="##23ABBC" title="Fork" />
          <FontAwesomeIcon icon={faFigma} color="##23ABBC" title="Figma" />
          <FontAwesomeIcon icon={faTrello} color="##23ABBC" title="Trello" />
        </section>
        <ReadMore onClick={() => navigate('/projects')}>
          Gå till mina projekt
        </ReadMore>
      </Card>
    </>
  );
};
