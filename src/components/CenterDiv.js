import React, { useState } from 'react'
import styled from 'styled-components';
import { Accordion, AccordionItem } from 'carbon-components-react'


export function CenterDiv() {

  const styleTest = {
    width: "320px"
  }

  return (
    <CenterDivWindow>

      <Test1 style={styleTest}>
        <AccordionItem title="MMRY - A Peaceful Study Platform">
          This is a flashcard program designed with vanilla JavaScript and SASS on the DOM.
        </AccordionItem>
      </Test1>


      
    </CenterDivWindow>
  )
}

const Test1 = styled(Accordion)`
  background-color: green;
`;

const CenterDivWindow = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Accordion = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 320px;
//   height: auto;
// `;

// const AccordionHeader = styled.div`
//   background-color: lightblue;
//   width: 320px;
//   height: 50px;
// `;

// const AccordionItem = styled.div`
//   width: 320px;
//   background-color: gray;
//   display: none;
// `;
