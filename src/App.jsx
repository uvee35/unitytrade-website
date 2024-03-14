import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import Footer from './Components/Footer/index.jsx';
import './App.css';
import Contact from './Components/Contact/Index.jsx';
import CarouselSlider from "./Components/Carousel/carousel.jsx";
import HeroSection from './Components/Hero/hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import DialogflowChat from './Components/Chatbot/chatbot.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <HeroSection />
          <CarouselSlider />
          <Contact />
          <DialogflowChat />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
