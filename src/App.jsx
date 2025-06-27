import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Descover from './components/Descover'
import Exploge from './components/Exploge'
import Traveling from './components/Travelingt'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <About/>
    <Descover/>
    <Exploge/>
    <Traveling/>
    <Footer/>
    </div>
  )
}

export default App