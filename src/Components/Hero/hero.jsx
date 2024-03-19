import React from "react";
import heroImage from "../../assets/Images/hero3.png";
import "./hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          {/* Text on the left */}
          <div className="col-md-6 hero-text">
            <h1 className="clipped-text display-4">Welcome to Unity Trade</h1>
            <p style={{ color: "white" }} className="lead">
              We are an e-commerce marketplace, offering a wide variety of
              products at competitive prices. Shop now and experience the
              convenience of online shopping with us..
            </p>
            <button className="btn shop-button">Shop Now</button>{" "}
            {/* Updated text and class */}
          </div>

          {/* Image on the right */}
          <div className="col-md-6 hero-image d-none d-md-block">
            <img
              src={heroImage}
              alt="Hero"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
