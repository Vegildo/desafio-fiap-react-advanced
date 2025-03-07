import { render, fireEvent, wait } from "react-testing-library";

import { CartProvider } from "./CartContext";
import Cart from "./Cart";

// criar um test de Adicionar ao carrinho: verifique se um produto é corretamente adicionado ao carrinho quando a função addToCart é chamada. Utilize o vitest e react-testing-library para escrever o teste.

test("Adicionar ao carrinho", async () => {
  const { getByTestId, getByText } = render(
    <CartProvider>
      <Cart />
    </CartProvider>
  );

  await wait(() => {
    fireEvent.click(getByTestId("add-to-cart"));
  });

  expect(getByText("R$ 79,99")).toBeInTheDocument();
});


