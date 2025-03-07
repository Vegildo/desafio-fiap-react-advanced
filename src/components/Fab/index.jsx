import styled, { css } from 'styled-components';

const Fab = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  cursor: pointer;

  ${props => props.$secondary && css`
    background-color: #7A42AB;
  `}

  &:hover {
    opacity: 0.9
  }
`;

export default Fab;
