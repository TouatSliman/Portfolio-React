import { useEffect, useRef } from "react";
import EasterEgg from "./EasterEgg";
const StyleSheet = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#0f0f0f",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#ff0000",
    textAlign: "center",
    marginTop: "2rem",
  },
  description: {
    fontSize: "1.5rem",
    color: "#ddd",
    textAlign: "center",
    marginTop: "1rem",
  },
};

const NotFound = () => {
  const hasLoggedRef = useRef(false);

  useEffect(() => {
    if (!hasLoggedRef.current) {
      console.error('404 Not Found');
      hasLoggedRef.current = true;
    }
  }, []);

  return (
    <div style={StyleSheet.container}>
      <h1 style={StyleSheet.title}>404 Not Found</h1>
      <p style={StyleSheet.description}>
        The page you are looking for does not exist.
      </p>
      <EasterEgg />
    </div>
  );
};

export default NotFound;
