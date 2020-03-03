import styled from 'styled-components';
import bgimage from '../images/undergroundE.png';


export const Header = styled.div`
  cursor: ns-resize;
  width: 100%;
  min-height: 80px;
  background-color: #2c3134;
  background-image: url(${bgimage});
  background-size: 300%;
  background-position: bottom center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;

  @media (min-width: 768px) {
    background-size: auto;
  }
`;