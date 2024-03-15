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
          <li onClick={() => handleMenuClick("shop")}>
            <Link to="/" className={menu === "shop" ? "active" : ""}>
              Shop
            </Link>
          </li>
          <li onClick={() => handleMenuClick("categories")}>
            <Link
              to="/categories"
              className={menu === "categories" ? "active" : ""}
            >
              Categories
            </Link>
          </li>
          <li onClick={() => handleMenuClick("sign in")}>
            <Link to="/signin" className={menu === "sign in" ? "active" : ""}>
              Sign in
            </Link>
          </li>
          <li onClick={() => handleMenuClick("register")}>
            <Link
              to="/register"
              className={menu === "register" ? "active" : ""}
            >
              Register
            </Link>
          </li>
          <li onClick={() => handleMenuClick("contact")}>
            <Link to="/contact" className={menu === "contact" ? "active" : ""}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        {/* Only display the cart icon once the user is logged in */}
        {/* You can add logic here to conditionally render it */}
      </div>
    </div>
  );
};

export default Navbar;
