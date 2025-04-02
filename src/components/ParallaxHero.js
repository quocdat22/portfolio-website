import React from 'react';
import './ParallaxHero.css';
import ParallaxBackground from './ParallaxBackground';
import GlassCard from './GlassCard';

const ParallaxHero = () => {
  return (
    <section id="gioi-thieu" className="parallax-hero">
      <ParallaxBackground />
      <div className="hero-content">
        <GlassCard blur={8} opacity={0.15} className="hero-glass-card">
          <h1>Xin chào, tôi là <span className="highlight">Đạt</span></h1>
          <h2>Web & App Developer | Learning & Building with AI</h2>
          <p>
            Tôi thiết kế và phát triển ứng dụng web và ứng dụng di động, tôi cũng quan tâm đến Machine Learning, ứng dụng AI vào việc tối ưu hóa sản phẩm..
          </p>
          <div className="hero-cta">
            <a href="#lien-he" className="primary-btn">Liên hệ</a>
            <a href="#du-an" className="secondary-btn">Xem dự án</a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default ParallaxHero; 