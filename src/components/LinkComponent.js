import styled from 'styled-components';

export const LinkComponent = styled.div`
  margin: 0 5px 0 5px;
  padding: 5px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: rgb(251,76,46);
  }
  :active {
    background-color: rgba(251,76,46, .6);
  }
`;
