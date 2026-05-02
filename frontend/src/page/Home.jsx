const Home = () => {
  return (
    <section id="home" style={styles.hero}>
      <h1 style={styles.heading}>
        Detect Spam Emails <br /> with AI 🚀
      </h1>

      <p style={styles.subtext}>
        Smart machine learning system to identify spam instantly
      </p>

      <a href="#detect" style={styles.button}>
        Try Now ↓
      </a>
    </section>
  );
};

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "16px",
    marginBottom: "20px",
    opacity: 0.8,
  },
  button: {
    padding: "12px 25px",
    background: "#ff7e5f",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },
};

export default Home;