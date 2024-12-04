import React from "react";
import "../styles/LandingPage.css"; 
import { Link } from "react-router-dom";

const LandingPage = () => {
  const handleGetStarted = () => {
    window.location.href = "/paradise-nursery/#/products"; 
  };

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery, your destination for beautiful and
          vibrant houseplants. <br/> Discover a variety of plants to brighten your
          home and purify the air. Let us bring nature closer to you!
        </p>
        
        <Link to="/products" className="get-started-btn">
          Get started
        </Link>
        
      </div>
    </div>
  );
};

export default LandingPage;
