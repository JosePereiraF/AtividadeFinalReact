import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PgInicial } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PgInicial/>
    </>
  )
}

export default App
