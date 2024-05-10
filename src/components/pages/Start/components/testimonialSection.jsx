import React from 'react';
import { Card } from '../../../base/Card/card';

export const Testimonial = () => {
  return (
    <>
      <Card title="Referenser" line="line" classname="huge">
        <article className="content">
          <Card
            title="Michelle Andersson"
            subheading="Kursföreståndare IT-kurser, Sundsgården 2022-2024"
          >
            <p>
              Kicki has been working as my teaching assistant for the courses
              IT: Front-end Developer and IT: Tech for Women at Sundsgården
              Folkhögskola since the fall semester 2022. Before starting as my
              teaching assistant, Kicki studied the course IT: Tech for Women
              during the spring 2022 and it was obvious throughout the course
              that she had a deep desire to really learn how to code. It was
              also apparent throughout the course that Kicki not only wanted to
              really understand the code we were working with, she also
              demonstrated a true passion for writing and diving deep into code
              and problem solving.
            </p>
            <p>
              As my teaching assistant, Kicki has been a tremendous asset. She
              is a quick learner and often takes personal initiatives to help
              students and improve the course. She is creative and focused on
              solving any problem that comes her way. She is good at helping the
              students understand the material and makes the students feel heard
              and appreciated. Kicki works quickly and completes her tasks
              efficiently and with good quality. She is also very clear in her
              communication with me and the students.
            </p>
            <p>
              Working with Kicki is an absolute joy and I hope our partnership
              will continue for a long time.
            </p>
          </Card>
          <div className="testamonial-card">
            <Card
              title="Cecilia Ljungquist"
              subheading="Student Frontendutvecklare YH 2022-2024"
            >
              <p>
                Kicki är en fantastisk klasskamrat. Hon är alltid hjälpsam och
                har en nyfikenhet som ofta leder till intressanta diskussioner
                och lösningar. Kicki är ordningssam och driven, vilket hon
                verkligen har visat genom sitt arbete som klassrepresentant. Jag
                hoppas och ser fram emot att möta henne ute på kommande
                arbetsplatser som en kompetent utvecklare och kollega!
              </p>
            </Card>
            <Card
              title="Adam Sjödin"
              subheading="Student Frontendutvecklare YH 2022-2024"
            >
              <p>
                Att ha Kicki i sin klass är nog det bästa som kunde hänt en.
                Eftersom vi pluggar på distans så har vi inte alltid tillgång
                till vår lärare. Då går jag oftast till Kicki när jag behöver
                hjälp eftersom hon alltid är tillgänglig och villig att hjälpa
                till. Hon är väldigt duktig på att programmera, pedagogisk och
                är alltid peppande! Hon har även lätt för att sätta sig in i kod
                som hon inte skrivit själv, vilket är svårt för många. Är redan
                nu avundsjuk på hennes framtida kollegor som ska jobba med
                henne!
              </p>
            </Card>
          </div>
          <Card
            title="Kamala Lundin"
            subheading="Student Frontendutvecklare YH 2022-2024"
          >
            <p>
              Kicki var vår klassrepresentant när vi studerade
              frontendutveckling tillsammans och jag är tacksam för hur väl hon
              förde klassens talan. Hon är tydlig, inkluderande och vass på
              struktur. Med öga både för detaljer och det större perspektivet
              har hon en förmåga att förutse eventuella problem så att det blir
              lättare att hitta lösningar tidigt i processen. Kicki tar det där
              extra steget för att vara till hjälp för dem omkring henne.
            </p>
          </Card>
        </article>
      </Card>
    </>
  );
};
