import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hello",
          "Bonjour",
          "Hola",
          "नमस्ते",
          "مرحبا",
          "Привет",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor: ".",
        delay: 75,
        pauseFor: 1500,
        wrapperClassName: "typewriter-text",
        cursorClassName: "typewriter-cursor",
      }}
    />
  );
}

export default Type;
