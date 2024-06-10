import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PagPrincipal } from './pages/homePage/Home'
import { ListarPokemon } from './pages/teste/pokemons'
import { Carrinho } from './pages/carrinho/Carrinho'
import { CartProvider } from './context/CarrinhoContext'





function App() {

  return (
    <>
    <CartProvider>
      <Carrinho/>
    </CartProvider>
    </>
  )
}

export default App
