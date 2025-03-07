import styled from "styled-components"
import AddToCart from "../icons/AddToCart"
import { useCartContext } from "../../context/CartContext"

const StyledCard = styled.div`
    background-color: white;
    padding: 12px 8px ;
    border-radius: 12px;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: end;
        justify-content: space-between;
        li {
            p {
                margin: 0;
            }
        }
    }
`

const Price = styled.p`
    margin-top: 0;
    margin-bottom: 12px;
    color: #7A42AB;
`

const AddToCardButton = styled.button`
    border: 1px solid #7A42AB;
    background-color: ${props => (props.disabled ? '#7A42AB' : 'transparent')};
    /* background-color: transparent; */
    cursor: pointer;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    &:disabled {
        /* opacity: 0.5; */
        cursor: not-allowed;
    }

`

const ProductCard = ({ product }) => {

    const { addToCart, isProductInCart } = useCartContext();

    const isInCart = isProductInCart(product);

    return (
        <StyledCard>
            <img src={product.imageSrc} />
            <Price>
                <strong>
                    {product.price}
                </strong>
            </Price>
            <div>
                <ul>
                    <li>
                        <p>{product.name} <br />
                        {product.color} {product.size}</p>
                    </li>
                    <li>
                        <AddToCardButton
                            disabled={isInCart} 
                            onClick={() => addToCart(product)} 
                        >
                            <AddToCart highligth={isInCart} />
                        </AddToCardButton>
                    </li>
                </ul>
            </div>
        </StyledCard>
    )
}

export default ProductCard

