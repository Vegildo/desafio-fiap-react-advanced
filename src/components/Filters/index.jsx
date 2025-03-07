import styled from "styled-components"
import Button from "../Button"
import RadioGroup from "../RadioGroup"

const StyledSection = styled.section`
  display: flex;
  gap: 10px;
  margin: 24px 0;
`

const Filters = () => {
    return (
        <StyledSection>
            <Button>
                Todos os produtos
            </Button>
            <RadioGroup />
        </StyledSection>
    )
}

export default Filters