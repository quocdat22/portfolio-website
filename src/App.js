import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxHero from './components/ParallaxHero';
import { setupScrollAnimation } from './utils/scrollAnimation';

function App() {
  useEffect(() => {
    setupScrollAnimation();
  }, []);

  return (
    <div className="App">
      <Header title="Your Name" />
      <main className="main-content">
        <ParallaxHero
          name="Your Name"
          title="Fullstack Developer"
          description="Tôi là một lập trình viên Fullstack với kinh nghiệm trong việc phát triển ứng dụng web sử dụng React và Node.js. Tôi đam mê tạo ra các ứng dụng web hiện đại, hiệu quả và dễ sử dụng."
          imageUrl="https://via.placeholder.com/400x400"
        />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
