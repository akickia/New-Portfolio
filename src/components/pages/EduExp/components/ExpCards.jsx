import React from 'react';
import { Card } from '../../../base/Card/card';
import { ReadMore } from '../../../base/ReadMoreBtn/readmore';
import { Contact } from '../../../base/Contact/contact';

export const ExpCards = () => {
  return (
    <>
      <Card
        title="Teachiq / Kunskapsmatrisen"
        subheading="Lia 2, 10 veckor vt 2024"
      >
        <p className="card__text">
          Arbetade skarpt i befintligt team (frontend, backend, design) med
          uppdatering av produkten Kunskapsmatrisen. En mycket lärorik process
          att arbeta i befintligt professionellt team och allt vad det innebär
          med workflow, git, fork, backend, testmiljöer m.m. Arbetade med
          Vue.js, TypeScript, Sass, PrimeVue, axios, Pinia m.m. Hybrid. Heltid.
        </p>
        <section className="card__btns">
          <ReadMore link={'https://km.se/'}>Till Kunskapsmatrisen</ReadMore>
        </section>
      </Card>
      <Card title="Zocom" subheading="Lia 1, 9 veckor vt 2024">
        <p className="card__text">
          Arbetade agilt i team i skarpa projekt och utvecklade bland annat en
          frontendlösning till en av företagets tjänster. Lärde mig mycket om
          att arbeta i team utifrån mål från produktägare och processen kring
          detta. Arbetade med React, TypeScript, Zustand, axios, Tanstack m.m.
          Distans. Heltid.
        </p>
        <section className="card__btns">
          <ReadMore link={'https://www.zocom.com/'}>Till ZoCom</ReadMore>
        </section>
      </Card>
      <Card
        title="Lärarassistent Frontend-kurser"
        subheading="Sundsgårdens folkhögskola 2022-2024"
      >
        <p className="card__text">
          Assisterade lärare med att ge feedback på uppgifter samt erbjöd
          studenter hjälp och handledning i mån av tid. Studenterna lär sig
          basic HTML/CSS/JavaScript/React under 22 veckor. Oerhört värdefullt
          för min egen förståelse att förklara och hjälpa andra och har
          fördjupat mina kunskaper. Undervisning på engelska. Distans. Deltid.
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
      <Contact classname="vertical" />
      <Card title="Förskollärare" subheading="Kommunal förskola 2011-2022">
        <p className="card__text">
          Legitimerad förskollärare med stort intresse för handledning,
          värdegrundsarbete och verksamhetsutveckling. Arbetslagsledare
          2013-2021. Handledare för lärarstudenter 2017-2021. Mentor, utbildare
          och samtalsledare för nyanställda i kommunen 2019-2021. Heltid.
        </p>
      </Card>
      <Card title="Diverse" subheading="Projekt under åren">
        <p className="card__text">
          Exempel på projekt jag har drivit eller varit inblandad i:
        </p>
        <ul>
          <li>Förskoleupproret - för bättre arbetsvilkor i förskolan</li>
          <li>
            Fli!cka - om källkritik, normer och ideal inom media genom
            Socialdepartementet
          </li>
          <li>
            Svenska för baby - föräldraträffar i syfte att skapa integrerande
            och välkomna mötesplatser
          </li>
          <li>Barnloppis i Slagsta - lokal barnloppis</li>
          <li>Kattklubben Mälarkatten - kattklubb</li>
        </ul>
      </Card>
    </>
  );
};
