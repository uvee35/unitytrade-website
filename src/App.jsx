import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import Footer from "./Components/Footer/index.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import HeroSection from "./Components/Hero/hero.jsx";
import ShoppingPage from "./Components/ShoppingPage/index.jsx";
import Contact from "./Components/Contact/Index.jsx";
import DialogflowChat from "./Components/Chatbot/chatbot.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          <DialogflowChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
