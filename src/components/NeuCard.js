import React, { useState } from 'react';
import './NeuCard.css';

const NeuCard = ({ children, className = '', depth = 6, isPressed = false }) => {
  const [pressed, setPressed] = useState(isPressed);
  
  return (
    <div 
      className={`neu-card ${className} ${pressed ? 'pressed' : ''}`}
      style={{ '--depth': `${depth}px` }}
      onClick={() => setPressed(!pressed)}
    >
      {children}
    </div>
  );
};

export default NeuCard; 