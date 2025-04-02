import React, { useEffect, useRef } from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const moveX = x * 40 - 20;
      const moveY = y * 40 - 20;
      
      backgroundRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      
      // Update gradient position for more depth
      const gradientX = x * 100;
      const gradientY = y * 100;
      
      const bubbles = backgroundRef.current.querySelectorAll('.bubble');
      bubbles.forEach((bubble, index) => {
        const speed = 1 + (index % 3) * 0.2;
        const offsetX = moveX * speed;
        const offsetY = moveY * speed;
        bubble.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate random bubbles
  const bubbles = Array.from({ length: 15 }).map((_, index) => {
    const size = 20 + Math.random() * 80;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 15 + Math.random() * 20;
    
    return (
      <div
        key={index}
        className="bubble"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  });

  return (
    <div className="parallax-background-container">
      <div ref={backgroundRef} className="parallax-background">
        {bubbles}
      </div>
      <div className="gradient-overlay"></div>
    </div>
  );
};

export default ParallaxBackground; 