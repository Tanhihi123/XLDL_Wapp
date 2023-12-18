import React, { useEffect, useState } from "react";

const StarsComponent = () => {
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

  const adjustLastMousePosition = (position) => {
    if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
      setLast((prevLast) => ({
        ...prevLast,
        mousePosition: position,
      }));
    }
  };

  const handleOnMove = (e) => {
    const mousePosition = { x: e.clientX, y: e.clientY };

    adjustLastMousePosition(mousePosition);

    const now = new Date().getTime();
    const hasMovedFarEnough =
      calcDistance(last.starPosition, mousePosition) >=
      config.minimumDistanceBetweenStars;
    const hasBeenLongEnough =
      calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

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

  useEffect(() => {
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0])
      );
    };
  }, [last]);

  return <div className="your-container-class"></div>; // Replace with your desired container
};

export default StarsComponent;
