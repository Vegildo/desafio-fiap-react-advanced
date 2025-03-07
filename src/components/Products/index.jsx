import styled from "styled-components";
import ProductCard from "../ProductCard";

const StyledUl = styled.ul`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
`

const Products = ({ products }) => {
    return (
        <StyledUl>
            {products.map(product => <li key={product.id}>
                <ProductCard product={product} />
            </li>)}            
        </StyledUl>
    )
}

export default Products

