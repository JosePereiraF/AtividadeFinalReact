import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PagPrincipal } from './pages/homePage/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PagPrincipal/>
    </>
  )
}

export default App
