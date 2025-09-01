import React, { useState, useEffect } from "react";

const MouseHighlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSmall, setIsSmall] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const onResize = () => setIsSmall(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isSmall) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isSmall]);

  if (isSmall) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 w-screen h-screen z-30 transition-all duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default MouseHighlight;
