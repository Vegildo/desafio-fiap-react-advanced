import styled from 'styled-components';

const RadioGroupContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioOption = styled.div`
  border: none;
  border-radius: 50px;
  font-size: 14px;
  background-color: ${props => (props.$isActive ? '#FDE047' : 'white')};
  padding: 14px 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    text-decoration: underline;
  }
`;

const RadioGroup = () => {
  return (
    <RadioGroupContainer>
        <RadioOption>
            Novidades
        </RadioOption>
        <RadioOption>
            Esporte
        </RadioOption>
        <RadioOption>
            Social
        </RadioOption>
        <RadioOption>
            Casual
        </RadioOption>
        <RadioOption $isActive>
            Ofertas
        </RadioOption>
    </RadioGroupContainer>
  );
};

export default RadioGroup