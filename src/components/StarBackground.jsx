import { useState, useEffect } from "react";

export const StarBackground = ({ enabled }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (!enabled) {
      setStars([]);
      return;
    }

    const generateStars = () => {
      if (typeof window === "undefined") return;

      const numberOfStars = 120; // fixed count
      const starsArray = Array.from({ length: numberOfStars }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      }));

      setStars(starsArray);
    };

    generateStars();
    window.addEventListener("resize", generateStars);

    return () => window.removeEventListener("resize", generateStars);
  }, [enabled]);

  if (!enabled || stars.length === 0) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse-subtle bg-gray-400 dark:bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
