import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  
  useEffect(() => {
    generateStars();
    spawnMeteor();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(spawnMeteor, 2000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    }));
    setStars(newStars);
  };

  const spawnMeteor = () => {
    const angleRad = Math.random() * 2 * Math.PI;
    const dx = Math.cos(angleRad) * 800;
    const dy = Math.sin(angleRad) * 800;
    const angleDeg = (angleRad * 180) / Math.PI;

    const meteor = {
      id: Date.now(),
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      animationDuration: Math.random() * 3 + 3,
      dx,
      dy,
      angleDeg,
    };

    setMeteors((prev) => [...prev, meteor]);

    setTimeout(() => {
      setMeteors((prev) => prev.filter((m) => m.id !== meteor.id));
    }, meteor.animationDuration * 1000);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => {
        const animName = `meteor-${meteor.id}`;
        const styleSheet = document.styleSheets[0];
        const keyframes = `
          @keyframes ${animName} {
            0% { transform: translate(0, 0) rotate(${meteor.angleDeg}deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translate(${meteor.dx}px, ${meteor.dy}px) rotate(${meteor.angleDeg}deg); opacity: 0; }
          }
        `;
        try {
          styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        } catch (e) {}

        return (
          <div
            key={meteor.id}
            className="meteor"
            style={{
              position: "absolute",
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              width: `${meteor.size * 50}px`,
              height: `${meteor.size * 2}px`,
              background: "linear-gradient(90deg, white, rgba(255,255,255,0))",
              borderRadius: "9999px",
              boxShadow: "0 0 15px 6px rgba(255,255,255,0.4)",
              animation: `${animName} ${meteor.animationDuration}s linear forwards`,
              transformOrigin: "left center",
            }}
          />
        );
      })}
    </div>
  );
};
