import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/HeroSection";
import About from "./sections/AboutSection";
import Detector from "./sections/DetectionSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Detector />
      </main>
      <Footer />
    </div>
  );
}

export default App;