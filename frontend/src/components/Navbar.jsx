import React from "react";

function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-logo">MAIL DETECTOR</div>
      <nav className="nav-links">
        <button onClick={() => handleScroll("home")}>Home</button>
        <button onClick={() => handleScroll("about")}>About</button>
        <button onClick={() => handleScroll("detector")}>Detect</button>
      </nav>
    </header>
  );
}

export default Navbar;