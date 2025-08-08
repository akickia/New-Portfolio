import { Heading } from '../../base/Heading/heading';
import { Contact } from '../../base/Contact/contact';
import { Card } from '../../base/Card/card';
import { ReadMore } from '../../base/ReadMoreBtn/readmore';
import { useEffect, useState } from 'react';
import './consult.scss';
import { Doodle } from '../../base/Doodle/doodle';
import { motion } from 'framer-motion';

export const ConsultStart = ({ setIsHomePage }) => {
  useEffect(() => {
    // window.scrollTo(0, 0);
    setIsHomePage(false);
  }, []);
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [showMoreHome, setShowMoreHome] = useState(false);
  const [showMoreCode, setShowMoreCode] = useState(false);
  return (
    <main className="consult">
      <motion.article
        initial={{ x: '1500px' }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeOut', duration: 0.25 }}
        className="hero"
      >
        <h1 className="hero__title">akickia.se</h1>
        <section className="hero__subtitle">
          <div className="hero__subtitle__line"></div>
        </section>
        <section className="hero__subtitle">
          <h3>Konsult inom IT och digitalisering</h3>
        </section>
      </motion.article>
      <article className="content content-top">
        <Card
          title={
            'Digitala verktyg i en skärmfri förskola - varför, när, vad och hur?'
          }
          subheading={'Föreläsning/workshop för förskolepersonal'}
          classname={'huge'}
        >
          <p>
            Från och med sommaren 2025 revideras läroplanen för förskolan och
            benämningarna digital kompetens och digitala verktyg tas bort.
            Ändringen grundar sig i kritik mot skärmtid för små barn och för att
            främja rörelse och lek framför ökat stillasittande. Samtidigt
            kritiseras att begreppet digital kompetens nu inte är prioriterat i
            förskolans utbildning. <br></br>Vad betyder detta för arbetet med
            digitala verktyg i förskolan? <br></br>Ska vi kassera våra
            lärplattor? Får vi fortsätta ha filmstund? Hur gör vi med
            dokumentationen?
          </p>
          <p>
            Med grund i forskning reder jag ut när, varför och hur vi kan och
            bör använda digitala verktyg - på ett korrekt sätt. Välkommen att
            boka in mig för en föreläsning med ambitionen att ge er verktyg att
            fortsätta arbeta med digitala verktyg i förskolan på ett hållbart
            sätt med vetenskaplig grund.
          </p>
          <p>
            Föreläsningen avslutas med en workshop där personalen får chans att
            prova på några olika digitala verktyg och få bekanta sig med
            tekniken. Det finns också möjlighet att ställa frågor och diskutera.
          </p>
          <p>
            <strong>
              <i>
                Specialerbjudande - första 5 bokningarna - 5000 kr / föreläsning
                exklusive moms
              </i>
            </strong>
          </p>
        </Card>
        <Contact classname={'vertical'} />
      </article>
      <Doodle />
      <article className="content content-bottom">
        <Card
          title={'Hemsida för företag'}
          subheading={
            'För företaget som vill synas online men inte göra jobbet'
          }
        >
          <p>
            Vill ditt företag öka sin synlighet med en enklare hemsida? Du
            väljer en av mina färdiga mallar och jag anpassar den efter ditt
            företags behov och önskemål. Du får en enklare hemsida i
            visitkortsformat med information om företaget, kontaktuppgifter och
            eventuellt en bildgalleri. Jag hjälper dig att köpa domän och
            webbhotell och ser till att hemsidan är responsiv och fungerar på
            alla enheter.
          </p>
          <p>
            Jag ser till att din hemsida är aktuell utifrån
            tillgänglighetsperspektiv, säkerhetsperspektiv, sökoptimering och
            gällande regler.
          </p>
          <p>
            <strong>
              Alternativ 1: Hemsida 5000 kr* i engångskostnad. För framtida
              uppdateringar av innehåll, tillgänglihet, säkerhet och
              sökoptimering faktureras 500kr/påbörjad timme.
            </strong>
          </p>
          <p>
            <strong>
              Alternativ 2: Hemsida inklusive fria uppdateringar av innehåll,
              tillgänlighet, säkerhet och sökoptimering. 399kr/månad*. Avtalas
              årsvis.
            </strong>
          </p>
          <p>
            <i>
              *Pris för domän och webhotell tillkommer. Priser exklusive moms.
            </i>
          </p>
        </Card>
        <Card
          title={'Hemsida för privatperson'}
          subheading={
            'Är du uppfödare, vill du visa upp ditt hobbyprojekt eller vill du bara synas?'
          }
        >
          <p>
            Behöver du en hemsida som är professionell men utan att du behöver
            bygga något själv? Du väljer en av mina färdiga mallar och jag
            anpassar den efter dina behov och önskemål. Du kan välja mellan en
            enklare hemsida i visitkortsformat eller en mer omfattande med flera
            sidor. Jag hjälper dig att köpa domän och webbhotell och ser till
            att hemsidan är responsiv och fungerar på alla enheter.
          </p>
          <p>
            Jag ansvarar för att din hemsida är aktuell utifrån
            tillgänglighetsperspektiv, säkerhetsperspektiv och gällande regler.
          </p>
          <p>
            <strong>
              Abonnemang 1: Enklare hemsida inklusive fria uppdateringar av
              innehåll (max 0.5h/mån), tillgänglighet, säkerhet och
              sökoptimering. 199kr/månad*
            </strong>
            <br></br>Passar bra för dig som vill ha en hemsida som är enkel och
            inte behöver uppdateras så ofta men som fortfarande är säker och
            sökoptimerad.
          </p>
          <p>
            <strong>
              Abonnemang 2: Hemsida med 3-5 sidor inklusive fria uppdateringar
              av innehåll (max 2h/mån), tillgänlighet, säkerhet och
              sökoptimering. 349kr/månad*
            </strong>
            <br></br>Passar bra för dig som driver uppfödning av djur eller vill
            uppdatera din sida mer frekvent med aktuella nyheter.
          </p>
          <p>
            <i>
              *Pris för domän och webhotell tillkommer. Priser inklusive moms. 3
              månaders uppsägningstid.
            </i>
          </p>
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
    </main>
  );
};
