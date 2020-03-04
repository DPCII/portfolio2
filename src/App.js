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

  const [portfolioStyle, setPortfolioStyle] = useState({
    visibility: "visible",
    opacity: "1",
    transition: "visibility 1s, opacity 1s ease-in-out",
  });

  function changePortfolioStyle() {
    if(portfolioStyle.visibility === "visible")
      setPortfolioStyle({
        visibility: "hidden",
        opacity: "0",
        transition: "visibility 1s, opacity 1s ease-in-out",
      })
    else
      setPortfolioStyle({
        visibility: "visible",
        opacity: "1",
        transition: "visibility 1s, opacity 1s ease-in-out",
      })
    
  }
  

  return (
    <Window>
      
      <Header onClick={() => { 
        changeHeight();
        changePortfolioStyle();
        }} style={doorStyle}></Header>

      <CenterDiv />

      <Footer style={doorStyle}>

        <PortfolioBar style={portfolioStyle}>
          A Portfolio
        </PortfolioBar>

        <NavBar>
          <LinkComponent>Github</LinkComponent>
          <LinkComponent>LinkedIn</LinkComponent>
          <LinkComponent>Email</LinkComponent>
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
  font-family: 'IBM Plex Sans';
  font-size: 28px;
`;

const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  bottom: 12px;
`;

const LinkComponent = styled.div`
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

