import React, { useState } from 'react'
import styled from 'styled-components';
import { Section, SectionTitle, SectionContent } from './sections.js';
import { Accordion1, AccordionItem1 } from './accordionStyles';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { LinkComponent } from './LinkComponent';
import { NewTab16 } from '@carbon/icons-react';



export function CenterDiv() {

  return (
    <CenterDivWindow>
      <h3>
        Profile
      </h3>

      <Section>

      <SectionTitle>
        Student Projects
      </SectionTitle>

      <Accordion1>
        <AccordionItem1 title="MMRY - A Peaceful Study Platform">
          <TextBlock>
            A flashcard program designed with vanilla JavaScript and SASS. It generates decks of cards and animates them in 3D depth. It served as great experience for walking the DOM in JavaScript. Because the content is all function generated, you can create new decks and hit play to populate them.
            </TextBlock>
          <LinkComponent>
            <a href="https://dpcii.github.io/mmry/" target="_blank" rel="noopener noreferrer">
              <NewTab16 style={{marginRight:"10px"}} />
              Link to Deployed Project
            </a>
          </LinkComponent>
        </AccordionItem1>

        <AccordionItem1 title="Tower Window - Media Aggregator">
          <TextBlock>
            A full stack media aggregator app using React, Python, Django, and PostgreSQL. The Python back end handled data modeling and queries, while the React front end displayed video content from multiple sources, like YouTube, Vimeo, and the National Archives Database. It contains a very small sample of approved content for testing purposes.
          </TextBlock>
          <LinkComponent>
            <a href="https://www.towerwindow.org/" target="_blank" rel="noopener noreferrer">
              <NewTab16 style={{marginRight:"10px"}} />
              Link to Deployed Project
            </a>
          </LinkComponent>
        </AccordionItem1>

        <AccordionItem1 title="Authia - Group Project: ">
          <TextBlock>
            I joined a team for the National Institute of Science and Technology: Tech to Protect Challenge Hackathon. My role was to write logic in a Node server to extract image exif data, add the cryptographic signed secret to the exif, and re-attach the exif to the image. I then integrated the location data with Google Maps to render coordinates to a handlebars front end. We won Washington DC Regional 1st Place.
          </TextBlock>

          <LinkComponent>
            <a href="https://docs.google.com/presentation/d/e/2PACX-1vShUHIOxNhBYMRnexo6gVQQIMjMGaqveIjr4vFtQ0oX2ld2yhzuiR7NT19dDR2AAxN94zrNVKbrrCSO/embed?start=true&loop=true&delayms=60000">
              <NewTab16 style={{marginRight:"10px"}} />
              Google Slide Presentation
            </a>
          </LinkComponent>

          <div style={{display:"flex", justifyContent:"center"}}>
            <TwitterTweetEmbed tweetId={'1188838037859557376'} />
          </div>
          
        </AccordionItem1>

        <AccordionItem1 title="Federal Agency Budget Dashboard">
          <p>
            This dynamic Vue app pulls budgetary data from a Federal API and conditionally renders the results of the API call. Based on the data returned, it alternates between views as you navigate around the dropdown lists.
          </p>
          <LinkComponent>
            <a href="https://dpcii.github.io/federal-spending-vue" target="_blank" rel="noopener noreferrer">
              <NewTab16 style={{marginRight:"10px"}} />
              Link to Deployed Project
            </a>
          </LinkComponent>
        </AccordionItem1>

        <AccordionItem1 title="newsOrganizer">
          <p>
            A Java API and Java content crawler feed topic-organized news from open sources to a React front end. Currently under construction...
          </p>
        </AccordionItem1>

      </Accordion1>
      </Section>

      <Section>
        <SectionTitle>Interests</SectionTitle>
        <Accordion1>
          <AccordionItem1 title="Natural Language Processing">
            <TextBlock>
              I became interested in Natural Language Processing when I wanted to know how documents are categorized with automation. I experimented with the DL4J (Deep Learning 4 Java) framework and implemented a trained neural network that can identify the topics it is trained to recognize. I quickly learned that structured data training has a bottleneck at the creation of structured or labeled data. So I created a Java program that uses search engine and newspaper headlines to create reasonable quality structured data.
            </TextBlock>
          </AccordionItem1>

          <AccordionItem1 title="Autonomous Flight">
            <TextBlock>
              I'm currently building a Pixelhawk-controlled autonomous aircraft.
            </TextBlock>
          </AccordionItem1>
        </Accordion1>
      </Section>

      <Section>
        <SectionTitle>Background</SectionTitle>

          <SectionContent>
          I'm a software engineer living in the Washington DC area. I was born in Germany and lived in different places and different cultures around the world. I first studied history and politics before transitioning into engineering and I continue to enjoy a lifestyle of broad academic interest. I push myself to take on difficult challenges and learn new skills, and I am especially inspired by governance and security problems.
          </SectionContent>

          <SectionContent>
          My experience in the US Army propelled me beyond my preconceived limits. The challenges I faced forced me to push through physical and mental hurdles I never imagined were possible. I voluntered and was selected for the US Army's Special Forces, learned Mandarin, and fought for American interests abroad. I've worked with tribal fighters on the banks of the Euphrates, comforted families caught in the middle of combat, and treated the mortally wounded. After the Army, I increased sales for a large corporation and studied at one of the world's top universities. The resilience and adaptability I acquired along the way proved invaluable to me.
          </SectionContent>

          <SectionContent>
          I transitioned into engineering because I came to appreciate the power of solving problems through software. I enjoy the process of thinking and writing in code and its endless opportunities for self-improvement. Programming allows me to utilize my strengths of managing chaos and coordinating multivariate systems, both of which are unavoidable in the process of achieving ambitious engineering goals.
          </SectionContent>

      </Section>

      
    </CenterDivWindow>
  )
}

const CenterDivWindow = styled.div`
  margin-top: 100px;
  margin-bottom: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  height: 70%;
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  overflow-y: scroll;
  z-index: 0;
`;

const TextBlock = styled.p`
  padding-top: 5px;
  padding-bottom: 5px;
  line-height: 1.1;
  margin-bottom: 5px;
`;



