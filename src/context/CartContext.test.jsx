import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { CartProvider, useCartContext } from './CartContext';

describe('CartContext', () => {
  it('adiciona um produto ao carrinho', async () => {
    const product = { id: 1, name: 'Produto 1', price: 10.99 };

    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    const addButton = getByTestId('add-to-cart');

    fireEvent.click(addButton);

    await waitFor(() => {
      const cartList = getByTestId('cart-list');
      expect(cartList).toContainElement(getByText(product.name));
    });
  });
  
});


const TestComponent = () => {
  const { addToCart } = useCartContext();

  return (
    <button onClick={() => addToCart({ id: 1, name: 'Produto 1', price: 10.99 })}>
      Adicionar ao carrinho
    </button>
  );
};