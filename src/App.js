import React, { useState } from 'react';
import styled from 'styled-components'
import GlobalStyle from './scripts/Global_style'
import { CenterDiv } from './components/CenterDiv';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import codingGif from './images/codingAnimated.gif';
import { LinkComponent } from './components/LinkComponent';


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
      
      <Header onClick={() => { 
        changeHeight();
        changeVisibilityStyle();
        }} 
        style={doorStyle}></Header>

      <CenterDiv />

      <MapFrame onClick={() => {
        changeHeight();
        changeVisibilityStyle();
      }} 
        style={visibilityStyle}>
        <img alt="coding" src={codingGif} />
      </MapFrame>

      <Footer style={doorStyle}>

        <PortfolioBar style={visibilityStyle}>
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

const PortfolioBar = styled.div`
  position: relative;
  bottom: 30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 36px;
  text-shadow: 0px 1px 2px 1px black;
`;

const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  bottom: 18px;
`;

const MapFrame = styled.div`
  background-color: #2c3134;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
`;
