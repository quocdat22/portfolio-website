import React from 'react';
import './About.css';

const About = ({ 
  name, 
  title, 
  description, 
  imageUrl 
}) => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="about-text">
          <h2>{name}</h2>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:your.email@example.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 