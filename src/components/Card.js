import React from 'react';
import './Card.css';

const Card = ({ 
  title, 
  children, 
  image, 
  className = '',
  onClick 
}) => {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        <div className="card-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card; 