import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from '../src/components/Navbar'
import Zone from './components/Zone'
import About from './components/About'
import Technologies from './components/Technologies'
import Services  from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='font-sans'>
        <Navbar />
        <Zone />
        <About />
        <Technologies />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
