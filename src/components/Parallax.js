import React, { useEffect, useRef } from 'react';
import './Parallax.css';

const Parallax = ({ children, speed = 0.5, className = '' }) => {
  const parallaxRef = useRef(null);
  
  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    
    const handleScroll = () => {
      if (!parallaxElement) return;
      
      const scrollTop = window.pageYOffset;
      const elementTop = parallaxElement.offsetTop;
      const elementHeight = parallaxElement.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Only update when element is visible in viewport
      if (
        scrollTop + viewportHeight > elementTop &&
        scrollTop < elementTop + elementHeight
      ) {
        const relativeScroll = scrollTop - elementTop;
        const translateY = relativeScroll * speed;
        
        // Apply transform with GPU acceleration
        parallaxElement.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <div ref={parallaxRef} className={`parallax-element ${className}`}>
      {children}
    </div>
  );
};

export default Parallax; 