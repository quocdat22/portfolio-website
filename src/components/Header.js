import React, { useState, useEffect } from 'react';
import './Header.css';
import GlassCard from './GlassCard';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('gioi-thieu');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if dark mode is already enabled
  useEffect(() => {
    if (document.body.classList.contains('dark-mode')) {
      setIsDarkMode(true);
    }
  }, []);

  // Detect scroll for header transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['gioi-thieu', 'du-an', 'lien-he'];
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section with offset
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
    
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <GlassCard 
        className="header-glass" 
        blur={isScrolled ? 8 : 4} 
        opacity={isScrolled ? 0.2 : 0.1}
      >
        <div className="header-content">
          {/* <div className="logo">
            <h1>Thanh</h1>
          </div> */}
          <button 
            className="mobile-menu-button" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a 
                  href="#gioi-thieu" 
                  className={activeSection === 'gioi-thieu' ? 'active' : ''}
                  onClick={(e) => scrollToSection(e, 'gioi-thieu')}
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a 
                  href="#du-an" 
                  className={activeSection === 'du-an' ? 'active' : ''}
                  onClick={(e) => scrollToSection(e, 'du-an')}
                >
                  Dự án
                </a>
              </li>
              <li>
                <a 
                  href="#lien-he" 
                  className={activeSection === 'lien-he' ? 'active' : ''}
                  onClick={(e) => scrollToSection(e, 'lien-he')}
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </nav>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </GlassCard>
    </header>
  );
};

export default Header; 