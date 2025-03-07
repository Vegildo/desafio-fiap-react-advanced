import { createContext, useContext, useState } from "react";

const initialCartproducts = [
  {
      id: 1,
      name: "Woman Sleeve 003",
      imageSrc: "/products/woman-short-sleeve-003.png",
      price: 79.99,
      size: "XL",
      color: "Blue"
  },
  {
      id: 2,
      name: "Men Shirt 001",
      imageSrc: "/products/men-shirt-001.png",
      price: 89.99,
      size: "L",
      color: "Gray"
  }
];

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [products, setProducts] = useState(initialCartproducts);

  const addToCart = (prod) => {
    setProducts((oldState) => {
      const isProductInCart = oldState.some((item) => item.id === prod.id);
      if (!isProductInCart) {
        return [...oldState, prod];
      }
      return oldState;
    });
  };

  const removeFromCart = (prodID) => {
    setProducts((oldState) => {
      return [...oldState.filter((item) => item.id != prodID)];
    });
  };

  const getCartTotalValue = () => {
    return products.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const isProductInCart = (product) => {
    return products.some((item) => item.id === product.id);
  };

  return (
    <CartContext.Provider value={{
      products,
      addToCart,
      removeFromCart,
      getCartTotalValue,
      isProductInCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

