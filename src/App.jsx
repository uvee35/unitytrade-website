import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import Footer from "./Components/Footer/index.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import ShoppingPage from "./Components/ShoppingPage/index.jsx";
import LogIn from "./Components/Login/index.jsx";
import Contact from "./Components/Contact/Index.jsx";
import Tos from "./Components/Tos/index.jsx";
import PrivacyPolicy from "./Components/Privacy/index.jsx";
import DialogflowChat from "./Components/Chatbot/chatbot.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/Log-in" element={<LogIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <DialogflowChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
