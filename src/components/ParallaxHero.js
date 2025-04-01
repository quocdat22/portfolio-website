import React from 'react';
import './ParallaxHero.css';
import Parallax from './Parallax';
import ParallaxBackground from './ParallaxBackground';

const ParallaxHero = ({ 
  name, 
  title, 
  description, 
  imageUrl 
}) => {
  return (
    <section id="about" className="parallax-hero-section">
      <ParallaxBackground>
        <div className="parallax-hero-content">
          <div className="hero-left">
            <Parallax speed={-0.2} className="profile-image-container">
              <div className="profile-circle">
                <img src={imageUrl} alt={name} className="profile-image" />
              </div>
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
              </div>
            </Parallax>
          </div>
          <div className="hero-right">
            <Parallax speed={0.1}>
              <div className="hero-headline">
                <div className="hero-greeting">Xin chào, tôi là</div>
                <h1 className="hero-name">{name}</h1>
                <h2 className="hero-title">{title}</h2>
              </div>
            </Parallax>
            
            <Parallax speed={0.3}>
              <div className="hero-text">
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
                <div className="hero-cta">
                  <a href="#contact" className="primary-btn">Liên hệ</a>
                  <a href="#projects" className="outline-btn">Xem dự án</a>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </ParallaxBackground>
    </section>
  );
};

export default ParallaxHero; 