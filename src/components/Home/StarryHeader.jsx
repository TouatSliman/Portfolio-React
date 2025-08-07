import React, { useEffect, useState } from "react";

const StarryHeader = () => {
  const [stars, setStars] = useState([]);

  // Generate stars when component mounts
  useEffect(() => {
    const numStars = 60; // Number of stars to generate
    const starsArray = [];

    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 8 + 1; // Random size between 1 and 4
      const left = Math.random() * 100; // Random horizontal position (percentage)
      const top = Math.random() * 100; // Random vertical position (percentage)
      const animationDelay = Math.random() * 5; // Random animation delay for effect

      starsArray.push({
        size,
        left,
        top,
        animationDelay,
      });
    }

    setStars(starsArray);
  }, []);

  return (
    <header style={styles.header}>
      {stars.map((star, index) => (
        <svg
          key={index}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle 3s infinite ${star.animationDelay}s`,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#f4f4f4"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </header>
  );
};

const styles = {
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh", // Make it take up full screen height
    backgroundColor: "transparent",
    overflow: "hidden",
  },
};

export default StarryHeader;
