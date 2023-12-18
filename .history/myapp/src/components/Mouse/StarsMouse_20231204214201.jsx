import React, { useEffect, useState } from 'react';

const StarsComponent = () => {
  const [last, setLast] = useState({
    starTimestamp: 0,
    starPosition: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0 },
  });

  const config = {
    // ... your existing config object
  };

  // Your other helper functions and constants go here

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

export default StarsComponent;
