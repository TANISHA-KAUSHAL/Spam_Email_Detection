import React, { useState } from "react";

function DetectionSection() {
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState("");
  const [isSpam, setIsSpam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckSpam = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult("");
    setIsSpam(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: emailText }),
      });

      if (!response.ok) {
        throw new Error("Failed to get prediction from API");
      }

      const data = await response.json();

      if (data.prediction === 1) {
        setResult("Spam Email 🚨");
        setIsSpam(true);
      } else {
        setResult("Not Spam Email ✅");
        setIsSpam(false);
      }
    } catch (err) {
      setError("Server not working.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section detector" id="detector">
      <div className="section-header">
        <p className="section-tag">Email Detection</p>
        <h2>Check if your email is spam</h2>
      </div>

      <div className="detector-card">
        <form onSubmit={handleCheckSpam}>
          <textarea
            className="email-input"
            placeholder="Paste your email text here..."
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            rows="8"
          />

          <button className="primary-btn" type="submit" disabled={loading || !emailText.trim()}>
            {loading ? "Checking..." : "Check Spam"}
          </button>
        </form>

        {result && (
          <div className={`result-box ${isSpam ? "spam" : "safe"}`}>
            {result}
          </div>
        )}

        {error && <div className="result-box error">{error}</div>}
      </div>
    </section>
  );
}

export default DetectionSection;