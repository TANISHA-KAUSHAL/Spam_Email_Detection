import React, { useState } from "react";

const EmailDetection = () => {
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckSpam = async () => {
    if (!emailText.trim()) {
      setResult("Please enter email text");
      return;
    }

    try {
      setLoading(true);
      setResult("");

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: emailText }),
      });

      const data = await response.json();

      if (data.prediction === 1) {
        setResult("Spam Email 🚨");
      } else {
        setResult("Not Spam Email ✅");
      }
    } catch (error) {
      setResult("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Email Spam Detector</h1>
        <p style={styles.subtitle}>
          Paste your email content and check instantly
        </p>

        <textarea
          placeholder="Enter email content..."
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          style={styles.textarea}
        />

        <button style={styles.button} onClick={handleCheckSpam}>
          {loading ? "Checking..." : "Check Email"}
        </button>

        {result && (
          <div
            style={{
              ...styles.result,
              color: result.includes("Spam") ? "#d32f2f" : "#2e7d32",
              background: result.includes("Spam")
                ? "#fdecea"
                : "#e8f5e9",
            }}
          >
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f7fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Inter, sans-serif",
  },

  card: {
    width: "420px",
    maxWidth: "100%",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  title: {
    marginBottom: "8px",
    fontSize: "22px",
    fontWeight: "600",
    color: "#333",
  },

  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#777",
  },

  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px",
    marginBottom: "15px",
    resize: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#4a6cf7",
    color: "#fff",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.3s",
  },

  result: {
    marginTop: "20px",
    padding: "12px",
    borderRadius: "10px",
    fontWeight: "500",
  },
};

export default EmailDetection;