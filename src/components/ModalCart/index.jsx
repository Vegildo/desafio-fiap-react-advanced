import styled from "styled-components"
import Fab from "../Fab"
import Modal, { ModalHeader, ModalTitle } from "../Modal"
import Back from "../icons/Back"
import ModalCartItem from "../ModalCartItem";
import Button from "../Button";
import Cart from "../icons/Cart";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

// const products = [
//     {
//         id: 1,
//         name: "Woman Sleeve 003",
//         imageSrc: "/products/woman-short-sleeve-003.png",
//         price: 79.99,
//         size: "XL",
//         color: "Blue"
//     },
//     {
//         id: 2,
//         name: "Men Shirt 001",
//         imageSrc: "/products/men-shirt-001.png",
//         price: 89.99,
//         size: "L",
//         color: "Gray"
//     },
//     {
//         id: 3,
//         name: "Men Shirt 002",
//         imageSrc: "/products/men-shirt-002.png",
//         price: 99.99,
//         size: "S",
//         color: "Black"
//     },
// ];


const ModalCartItems = styled.ul`
    margin: 36px 0;
    padding: 0;
    list-style: none;
    border-bottom: 2px dashed #666;
    padding-bottom: 36px;
`

const Summary = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: 600;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const Amount = styled.strong`
    display: block;
    color: #7A42AB;
`

const ModalCartActions = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 32px 0;
`


const ModalCart = () => {

    const { products, getCartTotalValue } = useCartContext();
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Fab $secondary onClick={() => setIsOpen(true)}>
                <Cart />
            </Fab>
            <Modal $isOpen={isOpen}>
                <ModalHeader>
                    <Fab $secondary onClick={() => setIsOpen(false)}>
                        <Back />
                    </Fab>
                    <ModalTitle>Carrinho</ModalTitle>
                </ModalHeader>
                <ModalCartItems>
                    {products.map((item, index) => <li key={index}>
                        <ModalCartItem item={item} />
                    </li>)}
                </ModalCartItems>
                <Summary>
                    <li>
                        <p>Subtotal</p>
                        <Amount>
                            R$ {getCartTotalValue()}
                        </Amount>
                    </li>
                    <li>
                        <p>Descontos</p>
                        <Amount>
                            0
                        </Amount>
                    </li>
                    <li>
                        <p>Total</p>
                        <Amount>
                            R$ {getCartTotalValue()}
                        </Amount>
                    </li>
                </Summary>
                <ModalCartActions>
                    <Button onClick={() => setIsOpen(false)}>
                        Finalizar compra
                    </Button>
                    <Button $secondary onClick={() => setIsOpen(false)}>
                        Continuar Comprando
                    </Button>
                </ModalCartActions>
            </Modal>
        </>
    )
}

export default ModalCart