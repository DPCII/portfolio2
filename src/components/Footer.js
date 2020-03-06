import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #2c3134;
  background-image: linear-gradient(to bottom, #464e53, #2c3134 5%);
  z-index: 1;
  bottom: 0px;
  color: white;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 700;
`;

export const NavBar = styled.div`
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  justify-content: space-evenly;
  position: relative;
  bottom: 0px;
`;

export const PortfolioBar = styled.div`
  cursor: pointer;
  position: absolute;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 65%;
  font-family: 'Open Sans', sans-serif;
  font-size: 36px;
  text-shadow: 0px 1px 2px 1px black;
`;