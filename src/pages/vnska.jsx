import React, { useEffect } from "react";

export default function BirthdayCard() {
  useEffect(() => {
    const emojis = ["🧸", "🌸", "🌺", "🌼", "🌷", "🌻", "🌹"];
    const container = document.getElementById("emoji-container");

    for (let i = 0; i < 100; i++) {
      const span = document.createElement("span");
      span.className = "emoji";
      span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

      const startTop = Math.random() * 100;
      const startLeft = Math.random() * 100;

      span.style.top = startTop + "vh";
      span.style.left = startLeft + "vw";
      span.style.fontSize = 14 + Math.random() * 24 + "px";
      span.style.animationDuration = 5 + Math.random() * 10 + "s";
      span.style.animationDelay = Math.random() * 5 + "s";

      container.appendChild(span);
    }
  }, []);

  return (
    <div style={styles.body}>
      <div id="emoji-container" style={styles.emojiContainer}></div>

      <h1 style={styles.text}>🎉 Happy Birthday, Vanshika! 🎉</h1>

      <img src="/img.jpg" alt="Birthday" style={styles.image} />

      <p style={styles.message}>
        Wishing you smiles, hugs, and love all day 💖✨
      </p>

      <div style={styles.footer}>By PIYUSH … your CS Web Developer</div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(100vh) scale(1); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
          }

          .emoji {
            position: absolute;
            animation: float 10s linear infinite;
            z-index: 1; /* behind everything */
            pointer-events: none;
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "#FFB6C1",
    fontFamily: "'Comic Sans MS', cursive",
    overflow: "hidden",
    position: "relative",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emojiContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0, // behind all
  },
  text: {
    marginTop: "4vh",
    fontSize: "6vw",
    color: "#fff",
    textShadow: "2px 2px #ff69b4",
    zIndex: 2,
  },
  image: {
    marginTop: "5vh",
    width: "40vw",
    height: "40vw",
    maxWidth: "180px",
    maxHeight: "180px",
    borderRadius: "50%",
    border: "4px solid white",
    objectFit: "cover",
    zIndex: 2,
  },
  message: {
    marginTop: "3vh",
    fontSize: "4vw",
    color: "#fff",
    padding: "0 20px",
    zIndex: 2,
  },
  footer: {
    position: "absolute",
    bottom: "2vh",
    width: "100%",
    fontSize: "3vw",
    color: "#fff",
    textShadow: "1px 1px #ff69b4",
    zIndex: 2,
  },
};
