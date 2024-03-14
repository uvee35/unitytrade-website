import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/shop">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-actions">
        <button><Link to="/signin">Sign In / Login</Link></button>
        <ul>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
