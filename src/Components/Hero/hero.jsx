import React from 'react'

const HeroSection = () => {
    return (
        <div className="hero-section text-center" style={{ backgroundImage: "url('src/assets/Images/Peyto Lake.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <h1>Welcome to Our Website</h1>
                <p className="lead">This is a sample hero section built with React.js and Bootstrap.</p>
                <button className="btn btn-primary btn-lg">Learn More</button>
            </div>
        </div>
    );
}

export default HeroSection