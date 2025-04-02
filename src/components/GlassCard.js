import React from 'react';
import './GlassCard.css';

const GlassCard = ({ children, className = '', blur = 10, opacity = 0.2 }) => {
  return (
    <div 
      className={`glass-card ${className}`}
      style={{
        '--blur': `${blur}px`,
        '--opacity': opacity
      }}
    >
      <div className="glass-content">
        {children}
      </div>
    </div>
  );
};

export default GlassCard; 