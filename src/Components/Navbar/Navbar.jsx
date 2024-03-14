import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/Images/logo.png";
import cartIcon from "../../assets/Images/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  
  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li onClick={() => handleMenuClick("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("categories")}>
          <Link style={{ textDecoration: "none" }} to="/categories">
            Categories
          </Link>
          {menu === "categories" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("sign in")}>
          <Link style={{ textDecoration: "none" }} to="/signin">
            Sign in
          </Link>
          {menu === "sign in" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("register")}>
          <Link style={{ textDecoration: "none" }} to="/register">
            Register
          </Link>
          {menu === "register" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("contact")}>
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact
          </Link>
          {menu === "contact" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
