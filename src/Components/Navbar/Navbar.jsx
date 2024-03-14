import React, { useState } from 'react';
import "./Navbar.css";
import logo from "./logo.png";
import cartIcon from "./cart_icon.png";

const Navbar=() =>{
  const[menu,setMenu] =useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>unitytrade-website</p>
      </div>
      <ul>
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("catagories")}}>Categories{menu==="shop"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("sign in")}}>Sign in{menu==="sign in"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("register")}}>Register{menu==="register"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}>Contact{menu==="contact"?<h/>:<></>}</li>
      </ul>
      <div className='nav-login -cart'>
        <button>Login</button>
        <img src={cart_icon} alt='' />
        <div className='nav-cart-count'></div>
      </div>
    </div>
  )
}

export default Navbar
