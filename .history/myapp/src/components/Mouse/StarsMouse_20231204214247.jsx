import React, { useEffect, useState } from 'react';

const StarsMouse = () => {
  const [last, setLast] = useState({
    starTimestamp: 0,
    starPosition: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0 },
  });

  const config = {
    starAnimationDuration: 1500,
    minimumTimeBetweenStars: 250,
    minimumDistanceBetweenStars: 75,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    colors: ["249 146 253", "252 254 255"],
    sizes: ["1.4rem", "1rem", "0.6rem"],
    animations: ["fall-1", "fall-2", "fall-3"],
  };

  // Your other helper functions and constants go here
  let count = 0;

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    selectRandom = (items) => items[rand(0, items.length - 1)];

  const withUnit = (value, unit) => `${value}${unit}`,
    px = (value) => withUnit(value, "px"),
    ms = (value) => withUnit(value, "ms");

  const calcDistance = (a, b) => {
    const diffX = b.x - a.x,
      diffY = b.y - a.y;

    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  };
  useEffect(() => {
    const handleOnMove = (e) => {
      const mousePosition = { x: e.clientX, y: e.clientY };

      // Your existing logic for handling mouse move
      adjustLastMousePosition(mousePosition);

      const now = new Date().getTime();
      const hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars;
      const hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);

        setLast((prevLast) => ({
          ...prevLast,
          starPosition: mousePosition,
          starTimestamp: now,
        }));
      }

      createGlow(last.mousePosition, mousePosition);

      setLast((prevLast) => ({
        ...prevLast,
        mousePosition,
      }));
    };

    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
    };
  }, [last]);

  return (
    <div className="stars-container">
      {/* Render stars and glow points here using React state */}
    </div>
  );
};

export default StarsMouse;
