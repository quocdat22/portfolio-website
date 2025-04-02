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
      <Header />
      <main className="main-content">
        <ParallaxHero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
