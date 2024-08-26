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
          I utbildningen Frontendutvecklare från Folkuniversitetet har jag bland
          annat fått kunskaper inom HTML/CSS, JavaScript, UX/UI, React, Node.js,
          moln(AWS), par/mob programmering, Git och Github samt Agilt arbete.
          Genom mina LIA-perioder har jag fått erfarenhet inom till exempel
          React, sass, Vue.js och Primevue. Utbildningen har gått på heltid och
          genomförts på distans och har till stor del byggt på samarbete genom
          gemensamma projekt, som kompletterats med individuella examinationer
          för att säkerställa kunskapsnivån hos de studerande. Under
          utbildningen har jag varit studeranderepresentant för klassen och på
          så vis varit en del av ledningsgruppen för utbildningen.
        </p>
        <section className="card__btns">
          <ReadMore link={'https://github.com/akickia'}>GitHub</ReadMore>
          <ReadMore
            link={
              'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/frontendutvecklare-distans/'
            }
          >
            Folkuniversitetet
          </ReadMore>

          <ReadMore link={'https://lindstrand.tech'}>Mina projekt</ReadMore>
        </section>
      </Card>
      <Card
        title="IT: Tech for women"
        subheading="Sundsgårdens folkhögskola vt2022"
      >
        <p className="card__text">
          Intensivutbildning på 22 veckor till frontendutvecklare. Individuellt
          arbete såväl som projekt i grupp och en bra introduktion till git
          flow. Innehåll: basic HTML, CSS, JavaScript, React, Agilt abete m.m.
          Undervisning på Engelska. Distans. Heltid.
        </p>
        <section className="card__btns">
          <ReadMore
            link={
              'https://sundsgarden.se/utbildningar-kurser/langa-kurser/distanskurser/it-tech-for-women/'
            }
          >
            Till Sundsgården
          </ReadMore>
        </section>
      </Card>
      <section className="special">
        <a href="./CV.pdf" download>
          Ladda ner mitt CV i pdf här!
        </a>
      </section>
      <Card
        title="Diverse kurser"
        subheading="Programmering 1 (Hermods), Udemy, Scrimba m.m."
      >
        <p className="card__text">
          Diverse kurser online för att öka min kunskap. Programmering 1 läste
          jag parallellt med Tech for women mars - maj 2022, betyg B. Udemy och
          Scrimbakurserna är pågående. Distans.
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
