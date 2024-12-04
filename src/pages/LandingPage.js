import React from "react";
import "../styles/LandingPage.css"; 

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
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
