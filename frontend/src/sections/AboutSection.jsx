import React from "react";

function AboutSection() {
  const cards = [
    {
      title: "Fast Detection",
      text: "Paste email content and instantly check whether it is spam or safe using your backend model.",
    },
    {
      title: "Clean UI",
      text: "A simple and professional layout designed like a modern SaaS landing page.",
    },
    {
      title: "Responsive Design",
      text: "Works smoothly on desktop, tablet, and mobile with proper spacing and layout.",
    },
  ];

  return (
    <section className="section about" id="about">
      <div className="section-header">
        <p className="section-tag">About Project</p>
        <h2>Why this app is useful</h2>
      </div>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="info-card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;