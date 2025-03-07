import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 50px;
  font-size: 14px;
  background-color: ${props => (props.$secondary ? '#F5F5F5' : '#7A42AB')};
  color: ${props => (props.$secondary ? '#7A42AB' : '#FFFFFF')};
  padding: 14px 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

export default Button