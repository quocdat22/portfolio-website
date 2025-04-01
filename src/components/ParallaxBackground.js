import React from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = ({ children }) => {
  return (
    <div className="parallax-container">
      <div className="parallax-layers">
        <div className="parallax-layer layer-1"></div>
        <div className="parallax-layer layer-2"></div>
        <div className="parallax-layer layer-3"></div>
        <div className="parallax-layer layer-4"></div>
        <div className="parallax-layer layer-5"></div>
      </div>
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground; 