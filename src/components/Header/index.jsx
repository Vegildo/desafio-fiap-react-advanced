import styled from "styled-components"
import Fab from "../Fab"
import Input from "../Input"
import Cart from "../icons/Cart"
import ModalCart from "../ModalCart"

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Input placeholder="Buscar produtos" />
                <ModalCart />
            </StyledHeader>
        </>
    )
}

export default Header