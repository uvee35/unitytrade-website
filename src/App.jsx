import React from 'react'
import Footer from './Components/Footer/index.jsx'
import './App.css'
import Contact from './Components/Contact/Index.jsx'
import CarouselSlider from "./Components/Carousel/carousel.jsx";
import HeroSection from './Components/Hero/hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'


function App() {
  return (
    <div>
        <main>
        <HeroSection/>
        <CarouselSlider />
        <Contact />
        </main>
        <Footer />
    </div>
  )
}

export default App
