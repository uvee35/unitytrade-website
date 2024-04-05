import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/index.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import ShoppingPage from "./Components/ShoppingPage/index.jsx";
import LogIn from "./Components/Login/login.jsx";
import Contact from "./Components/Contact/Index.jsx";
import Tos from "./Components/Tos/index.jsx";
import PrivacyPolicy from "./Components/Privacy/index.jsx";
import Checkout from "./Components/Products/Checkout.jsx"; // Import Checkout component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Discount Banner */}
        <div className="discount-banner">
          <span className="banner-text">
            Super Sale! Up to 50% off on select items!
          </span>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/Log-in" element={<LogIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Define route for Checkout */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
