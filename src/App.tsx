import './App.css'
import Navbar from '../src/components/Navbar'
import Zone from './components/Zone'
import About from './components/About'
import Technologies from './components/Technologies'
import Services  from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Link, animateScroll as scroll } from 'react-scroll';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <main className='font-sans'>
        <Navbar />
        <div id='section1'> 
          <Zone />
        </div>
        <div id='section2'>
          <About />
        </div>
        <div id='section3' >
          <Technologies />
        </div>
        <div id='section4'>
          <Services />
        </div>
        <div id='section5'>
          <Projects />
        </div>
        <div id='section6'>
          <Contact />
        </div>
        <div id='section7'>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
