import React from 'react';
import { Card } from '../../../base/Card/card';
import { ReadMore } from '../../../base/ReadMoreBtn/readmore';

export const EduCards = () => {
  return (
    <>
      <Card
        title="Frontendutvecklare"
        subheading="Yrkeshögskola Folkuniversitetet 2022-2024"
      >
        <p className="card__text">
          Innehåll: HTML, CSS, JavaScript, React, Node.js, Cloud (AWS), Agilt
          abete, UX/UI m.m. Distans. Heltid.
        </p>
        <section className="card__btns">
          <ReadMore onClick={() => console.log('clicked read more')}>
            GitHub
          </ReadMore>

          <ReadMore onClick={() => console.log('clicked read more')}>
            Folkuniversitetet
          </ReadMore>
        </section>
        <section className="card__btns">
          <ReadMore onClick={() => console.log('clicked read more')}>
            Mina projekt
          </ReadMore>
        </section>
      </Card>
      <Card
        title="IT: Tech for women"
        subheading="Sundsgårdens folkhögskola vt2022"
      >
        <p className="card__text">
          Intensivutbildning på 22 veckor till frontendutvecklare. Innehåll:
          basic HTML, CSS, JavaScript, React, Agilt abete m.m. Undervisning på
          Engelska. Distans. Heltid.
        </p>
        <section className="card__btns">
          <ReadMore onClick={() => console.log('clicked read more')}>
            Till Sundsgården
          </ReadMore>
        </section>
      </Card>
      <section className="special">
        <button>Ladda ner mitt CV i pdf här!</button>
      </section>
      <Card
        title="Diverse kurser"
        subheading="Programmering 1 (Hermods), Udemy, Scrimba m.m."
      >
        <p className="card__text">
          Diverse kurser online för att öka min kunskap. Programmering 1 läste
          jag parallellt med Tech for women mars - maj 2022 av behörighetsskäl,
          betyg B. Udemy och Scrimbakurserna är pågående. Distans.
        </p>
      </Card>
      <Card title="Lärarutbildning" subheading="Örebro universitet 2004-2010">
        <p className="card__text">
          Lärarutbildning inriktning svenska. Behörig förskollärare samt lärare
          i Svenska från förskoleklass - gymnasie + vuxenutbildning (Svenska och
          Svenska som andraspråk). Heltid.
        </p>
      </Card>
      <Card
        title="Lärare och handledning"
        subheading="Mälardalens högskola (numera universitet) 2017 samt 2020"
      >
        <p className="card__text">
          Kurs samt fördjupande kurs i handledning av lärarstudenter inom
          skola/förskola. Inkluderade bland annat kommunikation, gruppdynamik
          och etiska förhållningssätt i förhållande till makt, genus och
          etnicitet. Deltid.
        </p>
      </Card>
    </>
  );
};
