import { useState } from 'react'
import GlobalStyle from './components/GlobalStyles'
import Header from './components/Header'
import AppContainer from './components/AppContainer'
import Filters from './components/Filters'
import Products from './components/Products'
import { CartProvider } from './context/CartContext'

const products = [
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
  },
  {
      id: 3,
      name: "Men Shirt 002",
      imageSrc: "/products/men-shirt-002.png",
      price: 99.99,
      size: "S",
      color: "Black"
  },
  {
      id: 4,
      name: "Neck T-Shirt",
      imageSrc: "/products/neck-tshirt.png",
      price: 69.99,
      size: "XL",
      color: "White"
  },
  {
      id: 5,
      name: "Polo Shirt",
      imageSrc: "/products/polo-shirt.png",
      price: 119.99,
      size: "M",
      color: "Red"
  },
  {
      id: 6,
      name: "Short Sleeve Shirt",
      imageSrc: "/products/shor-sleeve.png",
      price: 49.99,
      size: "XS",
      color: "Yellow"
  },
  {
      id: 7,
      name: "Striped Shirt",
      imageSrc: "/products/striped-shirt.png",
      price: 109.99,
      size: "M",
      color: "Blue"
  },
  {
      id: 8,
      name: "V-Neck Shirt Men",
      imageSrc: "/products/vneck-shirt-men.png",
      price: 79.99,
      size: "L",
      color: "Green"
  },
  {
      id: 9,
      name: "Woman Plaid Shirt",
      imageSrc: "/products/woman-plaid-shirt.png",
      price: 89.99,
      size: "M",
      color: "Pink"
  },
  {
      id: 10,
      name: "Woman Sleeve 001",
      imageSrc: "/products/woman-short-sleeve-001.png",
      price: 59.99,
      size: "L",
      color: "White"
  },
  {
      id: 11,
      name: "Woman Sleeve 002",
      imageSrc: "/products/woman-short-sleeve-002.png",
      price: 69.99,
      size: "XS",
      color: "Black"
  },
  {
      id: 12,
      name: "Blue Shirt",
      imageSrc: "/products/blue-shirt.png",
      price: 79.99,
      size: "M",
      color: "Blue"
  }
];

function App() {
  return (
    <>
      <GlobalStyle />
      <CartProvider>
        {/* Aqui sim se tem acesso aos dados do provider */}
        <AppContainer>
            <Header />
            <Filters />
            <Products products={products}/>
        </AppContainer>
      </CartProvider>
      <>
        {/* Aqui não se tem acesso ao CartContext */}
      </>
    </>
  )
}

export default App
