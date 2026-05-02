import EmailDetection from "./EmailDetection";

const Detector = () => {
  return (
    <section id="detect" style={styles.section}>
      <EmailDetection />
    </section>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },
};

export default Detector;