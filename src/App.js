import React, { useState } from 'react';
import styled from 'styled-components'
import GlobalStyle from './scripts/Global_style'
import { CenterDiv } from './components/CenterDiv';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {

  const [doorStyle, setDoorStyle] = useState({
    height: "45vh",
    maxWidth: "100%",
    transition: "height 2s ease-in-out"
  });

  function changeHeight() {
    if(doorStyle.height === "45vh") 
      setDoorStyle({
        height: "6vh",
        maxWidth: "100%",
        transition: "height 1.15s ease-in-out"
      })
    else
      setDoorStyle({
        height: "45vh",
        maxWidth: "100%",
        transition: "height 1.15s ease-in-out"
      })
  }
  

  return (
    <Window>
      
      <Header onClick={() => changeHeight()} style={doorStyle}></Header>

      <CenterDiv>
        Lorem, ipsum
      </CenterDiv>

      <Footer style={doorStyle}>

        <LinkComponent>Github</LinkComponent>
        <LinkComponent>LinkedIn</LinkComponent>
        <LinkComponent>Email</LinkComponent>
      </Footer>

      <GlobalStyle />

    </Window>
  );
}

export default App;

const Window = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  background-color: snow;
`;

const LinkComponent = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: rgba(150, 150, 150, .5);
  }

  :active {
    background-color: rgba(220, 158, 70, .9);
  }

`;

