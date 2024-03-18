import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/login";
import { LogoutButton } from "../Login/logout";

import "./navbar.css";
import logo from "../../assets/Images/logo2.png";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Extract username from email
  const username =
    isAuthenticated && user.email ? user.email.split("@")[0] : "";

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              maxWidth: "200%",
              marginLeft: "50px",
            }}
            className="logo-img"
          />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li onClick={() => handleMenuClick("home")}>
            <Link to="/" className={menu === "home" ? "active" : ""}>
              Home
            </Link>
          </li>

          <li onClick={() => handleMenuClick("contact")}>
            <Link to="/contact" className={menu === "contact" ? "active" : ""}>
              Contact Us
            </Link>
          </li>
          <div className="nav-login-cart">
            {isAuthenticated ? (
              <>
                <img
                  src={user.picture}
                  alt={user.name}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                {/* Display username with custom style */}
                <span
                  style={{
                    marginRight: "20px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {username}
                </span>
                <LogoutButton />
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
