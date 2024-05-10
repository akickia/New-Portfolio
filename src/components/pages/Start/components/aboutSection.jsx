import React from 'react';
import { Card } from '../../../base/Card/card';
import { ReadMore } from '../../../base/ReadMoreBtn/readmore';
import { Contact } from '../../../base/Contact/contact';
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card title={'Kontakta mig'} classname={'small'} line={'line'}>
        <Contact class="" />
      </Card>
      <Card
        title={'Kicki Lindstrand'}
        classname={'large'}
        subheading={'min resa från förskollärare till frontendutvecklare'}
      >
        <p>
          Mitt i livet valde jag att sadla om från Förskollärare till
          Frontendutvecklare. Att gräva ner mig i kod, oavsett det är en
          befintlig kodbas eller ett nytt projekt är en härlig utmaning och att
          lära nytt är vad som driver mig. Med en fot i pedagogikens värld
          brinner jag också för att hjälpa andra att utvecklas. Jag har bland
          annat varit handledare och mentor till lärarstudenter/nyexaminerade
          förskollärare, lärarassistent på Sundsgårdens it-kurser och jag
          hjälper också gärna andra nybörjare med att starta sin kodresa inom
          html, css och JavaScript.
        </p>
        <p>
          När jag inte kodar så umgås jag med min familj, går ut med hunden
          eller lägger ett pussel. Om somrarna reser vi med vår husvagn och
          upplever ny natur i Sverige eller i Europa.
        </p>
        <ReadMore onClick={() => navigate('./about')}>Läs mer här</ReadMore>
      </Card>
    </>
  );
};
