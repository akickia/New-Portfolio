import React from 'react';
import { Card } from '../../../base/Card/card';
import { ReadMore } from '../../../base/ReadMoreBtn/readmore';
import { Contact } from '../../../base/Contact/contact';

export const About = () => {
  return (
    <>
      <Card
        title={'Kontakta mig'}
        classname={"small"}
        line={"line"}
      >
        <Contact />
      </Card>
      <Card
        title={'Kicki Lindstrand'}
        classname={"large"}
        subheading={"min resa från förskollärare till frontendutvecklare"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa, voluptatem reprehenderit rem, assumenda impedit sequi fugiat necessitatibus quae totam molestiae nemo cupiditate. Iste optio ab dolorum perspiciatis modi minus?
        <ReadMore>Läs mer här</ReadMore>
      </Card>
    </>
  );
};
