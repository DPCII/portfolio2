import React, { useState } from 'react'
import styled from 'styled-components';
import { Accordion, AccordionItem } from 'carbon-components-react'


export function CenterDiv() {

  return (
    <CenterDivWindow>

      <Accordion1>
        <AccordionItem1 title="MMRY - A Peaceful Study Platform">
          <p>A flashcard program designed with vanilla JavaScript and SASS.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Authia - Group Project: ">
          <p><a href="https://docs.google.com/presentation/d/e/2PACX-1vShUHIOxNhBYMRnexo6gVQQIMjMGaqveIjr4vFtQ0oX2ld2yhzuiR7NT19dDR2AAxN94zrNVKbrrCSO/embed?start=true&loop=true&delayms=60000">Google Slide Presentation</a></p>

          <a href="https://mobile.twitter.com/techtoprotect/status/1188838037859557376">Video</a>

        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>

        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>
        <AccordionItem1 title="Tower Window - Media Aggregator">
          <p>A full stack media aggregator app using React, Python, Django, and PostgreSQL.</p>
          <p>URL goes here</p>
        </AccordionItem1>

      </Accordion1>




      
    </CenterDivWindow>
  )
}

const Accordion1 = styled(Accordion)`
  width: 320px;
  @media(min-width: 321px) {
    width: 480px;
  }
  @media(min-width: 769px) {
    width: 1200px;
  }
`;

const AccordionItem1 = styled(AccordionItem)`
  display: flex;
  flex-direction: column;
`;

const CenterDivWindow = styled.div`
  margin-top: 100px;
  margin-bottom: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  /* border: 1px solid green; */
  height: 70%;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow-y: scroll;
  z-index: 0;
`;

