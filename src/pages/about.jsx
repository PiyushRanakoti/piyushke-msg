import React from "react";

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About This Card</h1>
      <p style={styles.text}>
        Made BY Piyush Ranakoti..... contact him for new addition
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#FFB6C1",
    fontFamily: "'Comic Sans MS', cursive",
    textAlign: "center",
    padding: "0 20px",
  },
  title: {
    fontSize: "6vw",
    color: "#fff",
    textShadow: "2px 2px #ff69b4",
    marginBottom: "4vh",
  },
  text: {
    fontSize: "4vw",
    color: "#fff",
    lineHeight: "1.5",
  },
};
