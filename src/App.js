import React, { useState } from 'react';
import styled from 'styled-components'
import GlobalStyle from './scripts/Global_style'
import { CenterDiv } from './components/CenterDiv';
import { Header } from './components/Header';
import { Footer, NavBar, PortfolioBar } from './components/Footer';
import codingGif from './images/codingAnimated.gif';
import { LinkComponent } from './components/LinkComponent';
import UpChevron from './components/UpChevron.js'


function App() {

  const [doorStyle, setDoorStyle] = useState({
    height: "50vh",
    transition: "height 2s ease-in-out"
  });

  function openDoors() {
    if(doorStyle.height === "50vh" || doorStyle.height === "45vh") 
      setDoorStyle({
        height: "6vh",
        transition: "height 1.15s ease-in-out"
      })
    else
      setDoorStyle({
        height: "50vh",
        transition: "height 1.15s ease-in-out"
      })
  }

  function peekDoors() {
    if(doorStyle.height === "50vh")
      setDoorStyle({
        height: "45vh",
        transition: "height 1.15s ease-in-out"
      })
    else if(doorStyle.height === "45vh")
      setDoorStyle({
        height: "50vh",
        transition: "height 1.15s ease-in-out"
      })
  }

  const [visibilityStyle, setVisibilityStyle] = useState({
    visibility: "visible",
    opacity: "1",
    transition: "visibility 1.25s, opacity 1.25s ease-in-out",
  });

  function changeVisibilityStyle() {
    if(visibilityStyle.visibility === "visible")
      setVisibilityStyle({
        visibility: "hidden",
        opacity: "0",
        transition: "visibility 1.25s, opacity 1.25s ease-in-out",
      })
    else
      setVisibilityStyle({
        visibility: "visible",
        opacity: "1",
        transition: "visibility 1.25s, opacity 1.25s ease-in-out",
      })
    
  }



  return (
    <Window>
      
      <Header 
        onClick={() => { 
          openDoors();
          changeVisibilityStyle();
        }}
        onMouseEnter={() => {
          peekDoors();
        }}
        onMouseLeave={() => {
          peekDoors();
        }}
        style={doorStyle}
        >

        </Header>

      <CenterDiv />

      <PeekFrame style={visibilityStyle}>
        <img alt="coding" src={codingGif} />
      </PeekFrame>

      <Footer 
        style={doorStyle}
        onMouseEnter={() => {
          peekDoors();
        }}
        onMouseLeave={() => {
          peekDoors();
        }}
        >

        <PortfolioBar style={visibilityStyle}
          onClick={() => {
            openDoors();
            changeVisibilityStyle();
          }}
        >
          <UpChevron />
          A Portfolio
        </PortfolioBar>

        <NavBar>

          <LinkComponent>
            <a href="https://github.com/DPCII" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </LinkComponent>

          <LinkComponent>
            <a href="https://www.linkedin.com/in/dpchildsii/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </LinkComponent>

          <LinkComponent>
            <a href="mailto:dpchildsii@gmail.com">
              Email
            </a>
          </LinkComponent>

        </NavBar>
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
  position: relative;
  display: flex;
  justify-content: center;
`;

const PeekFrame = styled.div`
  background-color: #2c3134;
  height: auto;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
`;
