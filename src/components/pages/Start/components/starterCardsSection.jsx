import React from 'react';
import { Card } from '../../../base/Card/card';
import { ReadMore } from '../../../base/ReadMoreBtn/readmore';
import { useNavigate } from 'react-router-dom';

export const StarterCards = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        title={'Frontendutvecklare'}
        subheading={'Examen juni 2024, 400YHp (2 år)'}
      >
        <p className="card__text">
          I utbildningen Frontendutvecklare från Folkuniversitetet har jag bland
          annat fått kunskaper inom HTML/CSS, JavaScript, UX/UI, React,
          statehantering, Node.js, moln(AWS), par/mob programmering, Git och
          Github samt Agilt arbete. Genom mina LIA-perioder har jag fått
          erfarenhet inom till exempel React, sass, Vue.js och Primevue.
        </p>
        <section className="card__btns">
          <ReadMore onClick={() => navigate('/edu-exp')}>Läs mer</ReadMore>
        </section>
      </Card>
      <Card
        title={'Holistic Mind Strängnäs'}
        subheading={'examensarbete, mars 2024'}
      >
        <p className="card__text">
          Från början kodad som eget projekt med grundläggande HTML/Sass och en
          aning JavaScript. Våren 2024 migrerad till React samt skapat backend
          på AWS med möjlighet för kunden att uppdatera tjänster och nyheter
          själv via administratörssida. Sommar 2024 byte av hostingtjänst och
          namn från VeraCare till Holistic Mind Strängnäs. Betyg: VG
        </p>
        <p>
          Tekniker: React, Sass, DynamoDB, serverless webpack, axios, S3 Bucket,
          APIGateway
        </p>
        <section className="card__btns">
          <ReadMore link={'https://github.com/akickia/veracare_2.0'}>
            GitHub
          </ReadMore>
          <ReadMore link={'https://holistic-mind-strangnas.netlify.app'}>
            Länk till demo
          </ReadMore>
          <ReadMore onClick={() => navigate('/projects')}>
            Fler projekt
          </ReadMore>
        </section>
      </Card>
    </>
  );
};
