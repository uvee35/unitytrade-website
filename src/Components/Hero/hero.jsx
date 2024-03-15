import React from "react";
import heroImage from "../../assets/Images/hero.png";
const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="container">
        <h1 className="text-white display-4">Welcome to Unity Trade</h1>
        <p className="lead text-white">
          This is a sample hero section built with React.js and Bootstrap.
        </p>
        <button className="btn btn-primary btn-lg">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
