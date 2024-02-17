import React from 'react';
import { Card } from '../../../base/Card/card';
import { ReadMore } from '../../../base/ReadMoreBtn/readmore';

export const StarterCards = () => {
  return (
    <>
      <Card
        title={'Frontendutvecklare'}
        subheading={'pågående utbildning, examen juni 2024'}
      >
        <p className="card__text">
          Lorem ipsum dolor sit amet consectetur. Porta scelerisque ac at dui
          pharetra id congue tincidunt aliquet. Sed in bibendum facilisis
          maecenas elit risus auctor luctus. Ligula tincidunt nec cursus sit
          vulputate. Rutrum scelerisque varius dignissim augue vitae rhoncus
          ipsum et sollicitudin. Nullam porttitor scelerisque mi orci justo.
        </p>
        <section className="card__btns">
          <ReadMore onClick={() => console.log('clicked read more')}>
            Läs mer
          </ReadMore>
        </section>
      </Card>
      <Card
        title={'Claddagh'}
        subheading={'mitt senaste projekt, fullstack, november 2023'}
      >
        <p className="card__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni
          eos distinctio a pariatur illo quam atque saepe. Nostrum provident
          nobis officia maxime cumque odio debitis id enim magnam temporibus!
        </p>
        <section className="card__btns">
          <ReadMore onClick={() => console.log('clicked read more')}>
            GitHub
          </ReadMore>
          <ReadMore onClick={() => console.log('clicked read more')}>
            Länk till demo
          </ReadMore>
          <ReadMore onClick={() => console.log('clicked read more')}>
            Fler projekt
          </ReadMore>
        </section>
      </Card>
    </>
  );
};
