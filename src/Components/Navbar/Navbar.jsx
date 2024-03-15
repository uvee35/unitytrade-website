import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import logo from "../../assets/Images/logo2.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: "200%", marginLeft: "50px" }}
          />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li onClick={() => handleMenuClick("contact")}>
            <Link to="/contact" className={menu === "contact" ? "active" : ""}>
              Contact Us
            </Link>
          </li>
          <div className="nav-login-cart">
            <Link to="/login">
              <button>Log In/Sign Up</button>
            </Link>
            {/* Only display the cart icon once the user is logged in */}
            {/* You can add logic here to conditionally render it */}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
