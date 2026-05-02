import React from "react";

function HeroSection() {
  const handleScroll = () => {
    const element = document.getElementById("detector");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="section hero" id="home">
      <div className="hero-content">
        <p className="section-tag">Spam Email Detection App</p>
        <h1>MAIL DETECTOR</h1>
        <p className="hero-text">
          Detect whether an email is spam or not using a simple and modern React interface connected to your Flask API.
        </p>
        <button className="primary-btn" onClick={handleScroll}>
          Try Detection
        </button>
      </div>
    </section>
  );
}

export default HeroSection;