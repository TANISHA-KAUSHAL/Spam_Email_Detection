const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h1>About Project</h1>
      <p>
        This project uses Machine Learning (Logistic Regression + TF-IDF)
        to classify emails as spam or not spam.
      </p>
    </section>
  );
};

const styles = {
  section: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#282a36",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
};

export default About;