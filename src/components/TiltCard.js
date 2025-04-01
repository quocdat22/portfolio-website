import React, { useRef, useState, useEffect } from 'react';
import './TiltCard.css';

const TiltCard = ({ children, className = '', perspective = 1000, tiltMaxAngle = 15, scale = 1.05 }) => {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position when mouse moves over the card
  const updatePosition = (e) => {
    if (!cardRef.current || !isHovering) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({
      x: x / rect.width,
      y: y / rect.height
    });
  };

  // Update the tilt style based on mouse position
  useEffect(() => {
    if (!isHovering) {
      // Reset when not hovering
      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: 'transform 0.5s ease'
      });
      return;
    }

    // Calculate rotation based on position
    const tiltX = (position.y - 0.5) * 2 * tiltMaxAngle;
    const tiltY = (0.5 - position.x) * 2 * tiltMaxAngle;

    // Apply tilt transform
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`,
      transition: 'transform 0.1s ease'
    });
  }, [isHovering, position, perspective, tiltMaxAngle, scale]);

  return (
    <div 
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={updatePosition}
      onMouseLeave={() => setIsHovering(false)}
      style={tiltStyle}
    >
      {children}
      {isHovering && (
        <div className="tilt-highlight" style={{
          background: `radial-gradient(
            circle at ${position.x * 100}% ${position.y * 100}%,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 50%
          )`
        }}></div>
      )}
    </div>
  );
};

export default TiltCard; 