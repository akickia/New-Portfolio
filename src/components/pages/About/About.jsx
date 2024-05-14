import { Heading } from '../../base/Heading/heading';
import { Contact } from '../../base/Contact/contact';
import { Card } from '../../base/Card/card';
import { ReadMore } from '../../base/ReadMoreBtn/readmore';
import { useEffect, useState } from 'react';
import './about.scss';
import { Doodle } from '../../base/Doodle/doodle';

export const About = ({ setIsHomePage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsHomePage(false);
  }, []);
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [showMoreHome, setShowMoreHome] = useState(false);
  const [showMoreCode, setShowMoreCode] = useState(false);
  return (
    <main className="about">
      <div className="content">
        <Heading type={'short'}>Om mig</Heading>
      </div>
      <article className="content content-top">
        <Contact classname={'vertical'} />
        <Card
          title={'Kicki Lindstrand'}
          classname={'large'}
          subheading={
            'Utveckling av människor, produkter och mig själv är det som driver mig'
          }
        >
          <p>
            Mitt i livet valde jag att sadla om från Förskollärare till
            Frontendutvecklare. Att gräva ner mig i kod, oavsett det är en
            befintlig kodbas eller ett nytt projekt är en härlig utmaning och
            att lära nytt är vad som driver mig. Med en fot i pedagogikens värld
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
        </Card>
        <Card title={'Styrkor'} line={'line'} classname={'small'}>
          <ul>
            <li>Strukturerad</li>
            <li>Lär snabbt</li>
            <li>Problemlösare</li>
            <li>Noggrann</li>
            <li>Diplomatisk</li>
            <li>Stabil med livserfarenhet</li>
            <li>Drivande och initiativrik</li>
          </ul>
        </Card>
        <Card title={'Kunskaper'} line={'line'} classname={'small'}>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Git och Github</li>
            <li>node.js</li>
            <li>AWS</li>
          </ul>
        </Card>
        <Card title={'Tycker om'} line={'line'} classname={'small'}>
          <ul>
            <li>Att lära nytt</li>
            <li>Att koda</li>
            <li>Naturen</li>
            <li>Att handleda</li>
            <li>Jordgubbar</li>
            <li>Pussel</li>
            <li>Musik</li>
          </ul>
        </Card>
      </article>
      <Doodle />
      <article className="content content-bottom">
        <Card
          title={'På arbetet'}
          subheading={'Driven, organiserad och diplomatisk'}
        >
          <p>
            Jag har arbetat som lärare/förskollärare sedan min lärarexamen 2010.
            Mellan 2015 och 2022 har min arbetsgivare varit Eskilstuna kommun.
            Jag är mycket ambitiös och tar mitt jobb på allvar. Jag är bra på
            stuktur, att organisera och att ha överblick. Hela mitt liv har jag
            varit en problemlösare och projektledare, och jag kan arbeta såväl
            självständigt som i grupp. Jag lär mig snabbt och är inte rädd att
            ta reda på saker om jag inte kan/vet själv. Jag är övertygad om att
            vi lär bäst i samspel med andra och relationer och kommunikation
            intresserar mig.
          </p>
          {showMoreWork && (
            <>
              <p>
                Som förskollärare är jag också van vid att reflektera över mitt
                arbete och mina prestationer för att kunna utvecklas. Jag kan
                uttrycka mig väl i skrift, framför allt i svenska, men jag
                skriver också mycket på engelska. Flera gånger har jag fått
                förtroendet att skriva/redigera dokument på min arbetsplats och
                har skrivit t.ex. likabehandlingsplan.
              </p>
              <p>
                Jämställdhet och demokrati har alltid varit viktigt för mig. Jag
                har abetat mycket med att medvetandegöra hur vi kan arbeta mot
                diskriminering och kränkande behandling. Alla människors lika
                värde oavsett enicitet, religion, genus eller sexuell läggning
                ligger mig varmt om hjärtat. Olikheter hjälper oss att utvecklas
                och jag är alltid öppen för att slå hål på mina och andras
                fördomar.
              </p>
              <p>
                Att hjälpa andra att utvecklas är för mig lika viktigt som att
                fortsätta utvecklas själv. Jag har därför varit behörig
                handledare för lärarstudenter sedan 2017. 2019 startade
                Eskilstuna kommun ett mentorsprogram för nyanställda
                förskollärare i kommunen och jag blev en av fyra erfarna
                förskollärare som fick ansvaret för detta introduktionsprogram.
                Vi genomförde föreläsningar, ledde diskussionsgrupper och fick
                fortbildning inom ett flertal ämnen relaterade till förkskolan.
                Genom mentorsprogrammet och på andra arbetsrelaterade möten har
                jag arrangerat föreläsningar i exempelvis gruppdynamik,
                systematiskt kvalitetsarbete och HBTQ.
              </p>
              <p>
                Jag kommer aldrig ångra all erfarenhet och alla fantastiska
                relationer åren i förskolan har givit mig, men nu är det dags
                att vandra längs med nya vägar!
              </p>
            </>
          )}
          <ReadMore onClick={() => setShowMoreWork((prev) => !prev)}>
            {showMoreWork ? 'Läs mindre' : 'Läs mer'}
          </ReadMore>
        </Card>
        <Card title={'När jag är hemma'} subheading={'Återhämtning is the key'}>
          <p>
            Sedan ung ålder har jag alltid hittat projekt att engagera mig i,
            från min första tidning som jag sålde till mina klasskamrater i
            lågstadiet till skoltidningsredaktionen jag var del av i högstadiet
            eller när jag var moderator för Lunarstorms största klubb
            "Flicka-klubben" i min ungdom. Jag har varit volontär för
            organisationen "Svenska med baby", varit en av arrangörerna för
            "Barnloppis i Slagsta" samt arrangerat en manifestation för bättre
            arbetsvillkor i förskolan som drog till sig ca 500 deltagare. Bland
            annat så invgningstalade jag och överlämnade namninsamling till
            dåvarande utbildningsminister.
          </p>
          {showMoreHome && (
            <>
              <p>
                Med åren har jag lärt mig värdet av återhämtning och
                självreflektion, så när jag är hemma försöker jag numera därför
                att inte ha för många pågående projekt eller alltför mycket
                planerat. Jag älskar att lägga stora pussel, göra korsord eller
                läsa en bra bok. En film eller skogspromenad med familjen är
                också trevligt. I juni 2022 växte familjen då vår storpudel
                Sixten flyttade in, och han ger och mycket glädje och mys.
              </p>
              <p>
                Som jag redan nämnt är jag bra på att strukturera och
                organisera, och det gäller även mitt privatliv och hur jag
                planerar min tid. Jag är disciplinerad när det kommer till
                studier eller arbete och jag ser till att slutföra det som
                förväntas av mig, och förhoppningsvis lite till, under
                arbetstid. Det är viktigt för mig att det jag levererar håller
                hög kvalitet. Jag arbetar snabbt och effektivt, men jag är också
                noggrann och ser till detaljer och "clean code".
              </p>
              <p>
                Med tre barn och en hund så krävs mycket logistik för att få
                vardagen att gå ihop, och att studera på distans underlättar.
                Jag kan planera mina timmar så att jag kan delta i barnens
                aktiviteteter, gå ut med hunden, och ändå ha tillräckligt med
                tid att göra mina skoluppgifter. I framtiden hoppas jag därför
                kunna finna ett distans eller hybrid arbete som junior
                frontendutvecklare, alternativt ett arbete i Eskilstuna. Jag har
                inga problem att pendla till Stockholm, Västerås eller Örebro en
                eller ett par dagar i veckan, men behöver också några dagar
                hemma för att allting ska fungera.
              </p>
              <p>
                Vi bor i ett radhus i utkanten av Eskilstuna. Om somrarna reser
                vi gärna runt med vår husvagn till olika resmål.
              </p>
            </>
          )}
          <ReadMore onClick={() => setShowMoreHome((prev) => !prev)}>
            {showMoreHome ? 'Läs mindre' : 'Läs mer'}
          </ReadMore>
        </Card>
        <Card
          title={'Varför jag kodar'}
          subheading={
            'Problemlösning, strukturering och nyfikenhet är mina styrkor'
          }
        >
          <p>
            I september 2021 tog jag det svåra beslutet att lämna min karriär
            som förskollärare bakom mig på grund av arbetsbelastningen för
            personal i förskolan.{' '}
          </p>
          <p>
            {' '}
            Jag hade ingen aning om vad jag skulle göra istället och såg mig
            omkring efter olika alternativ. Min man, Martin, arbetar inom
            it-säkerhetsbranchen och han föreslog att kodning borde passa mig
            eftersom jag lär snabbt, har ett öga för struktur och har logiskt
            tänkande. Jag tänkte att han inte var klok.
          </p>
          {showMoreCode && (
            <>
              <p>
                Jag hade ingen som helst erfarenhet och kände att jag inte
                förstod någonting om datorer och teknik, även om jag alltid
                varit en intresserad användare av digitala plattformar och
                verktyg såväl privat som i jobbsammanhang. Jag började söka
                information online, fråga Martin alla möjliga frågor jag kunde
                komma på och testade på några onlinekurser. Tanken började landa
                hos mig och kanske skulle kodning vara något som passade mig
                riktigt bra!
              </p>
              <p>
                Under sen höst/vinter 2021 samlade jag på mig så mycket
                information och kunskap som jag kunde, och i januari tog jag
                tjänstledigt och började jag en intensivutbildnign till
                frontendutvecklare som gavs vid Sundsgårdens folkhögskola.
                Utbildningen pågick i 22 veckor och innehöll html/css/JavaScript
                och React samt nosade på områden som agilt arbete, SEO samt
                copyright. Under samma vår genomförde jag parallellt med
                frontendutbildningen kursen programmering 1 via Hermods, även
                detta på distans. Programmering 1 hade fokus på programmering i
                Python. Efter att jag avslutat min utbildning vid Sundsgårdens
                folkhögskola erbjöds jag deltidsanställning som lärarassistent
                på skolans it-kurser. Jag arbetar sedan hösten 2022 därför 20%
                med att ge studenterna feedback på sin kod samt handleda i
                html/css/JavaScript och React.
              </p>
              <p>
                Jag beslöt efter detta att ta det slutgiltiga steget och avsluta
                min anställning som förskollärare och istället gå
                yrkeshögskoleutbildningen Frontendutvecklare vid
                Folkuniversitetet i Göteborg. Utbildningen är på distans och 2
                år, samt innehåller 19 veckor LIA - praktik, som ger reell
                arbetslivserfarenhet och ökar mina chanser att landa drömjobbet
                så småningom. Jag är även studeranderepresentant för
                utbildningen gentemot utbildningsledning.
              </p>
              <p>
                Jag är i högsta grad fortfarande en junior, men om jag ser
                tillbaka på allt jag lärt mig så har jag kommit en bra bit på
                vägen. Hittills har jag fått kunskaper i HTML, CSS, JavaScript,
                React, node.js, aws, och vue.js samt grundläggande kunskaper i
                agilt arbete och UX/UI. Jag kan använda Sass, Figma, Git/Github
                med mera.
              </p>
              <p>
                Jag har deltagit/slutfört onlinekurser i HTML/CSS, JavaScript,
                React och Python hos bland annat Tjejer kodar, Codecadamy, Udamy
                och Scrimba.
              </p>
              <p>
                Jag vet att jag har SÅÅÅ mycket kvar att lära, men jag börjar
                kunna se samband och förstå hur webapplikationer, hemsidor och
                system kan skapas. Jag tycker det är roligt att hitta på nya
                projekt att genomföra och se dem få liv och bli mer interaktiva
                vartefter mina kunskaper växer.
              </p>
            </>
          )}
          <ReadMore onClick={() => setShowMoreCode((prev) => !prev)}>
            {showMoreCode ? 'Läs mindre' : 'Läs mer'}
          </ReadMore>
        </Card>
        <Card title={'Namnet akickia'} subheading={'Back to the beginning'}>
          <section>
            <p>
              Namnet akickia har funnits med mig sedan jag i högstadiet skulle
              skaffa min första egna mailadress. Mitt efternamn började på den
              tiden på bokstaven a, och olika varianter av Kicki A testades utan
              framgång. Till slut visade det sig att akickia var ledigt, och det
              blev då min första hotmail-adress.
            </p>
            <p>
              Genom åren har jag använt användarnamnet akickia på de flesta
              sidor där jag varit medlem, allt från Lunarstorm till twitter, och
              mycket sällan - om någonsin - har jag mött någon annan som använt
              det. Jag bestämde mig därför att använda detta namn när jag skulle
              skaffa min egen domän.
            </p>
          </section>
        </Card>
      </article>
    </main>
  );
};
