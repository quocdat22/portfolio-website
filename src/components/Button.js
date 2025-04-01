import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', // primary, secondary, outline
  size = 'medium', // small, medium, large
  onClick,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      className={`custom-button ${variant} ${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 