import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../Navbar/navbar.css";
import logo from "../../assets/Images/logo.png";
import cartIcon from "../../assets/Images/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Unitytrade</p>
      </div>
      <ul>
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{textDecoration:'none'}} to='/'>Shop</Link>
          {menu === "shop" ? <></> : null}
        </li>
        <li onClick={() => { setMenu("categories") }}>
          <Link style={{textDecoration:'none'}} to='/categories'>Categories</Link> 
          {menu === "categories" ? <></> : null} 
        </li>
        <li onClick={() => { setMenu("sign in") }}>
          <Link style={{textDecoration:'none'}} to='/signin'>Sign in</Link> 
          {menu === "sign in" ? <></> : null} 
        </li>
        <li onClick={() => { setMenu("register") }}>
          <Link style={{textDecoration:'none'}} to='/register'>Register</Link> 
          {menu === "register" ? <></> : null} 
        </li>
        <li onClick={() => { setMenu("contact") }}>
          <Link style={{textDecoration:'none'}} to='/contact'>Contact</Link> 
          {menu === "contact" ? <></> : null} 
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'> <img src={cartIcon} alt='' /></Link>
        <div className='nav-cart-count'></div>
      </div>
    </div>
  );
}

export default Navbar;
