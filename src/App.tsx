import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from '../src/components/Navbar'
import Zone from './components/Zone'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<main className='font-sans'>
<Navbar />
      <Zone />
</main>
    </>
  )
}

export default App
