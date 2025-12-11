import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ company, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo" onClick={() => handleNavigation('home')}>
          <span className="logo-prefix">PGSI</span>
          <span className="logo-suffix"> | PAVANI GEO SYNTHETIC INSTALLERS</span>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}
          >
            ABOUT
          </a>
          <a 
            href="#services" 
            onClick={(e) => { e.preventDefault(); handleNavigation('services'); }}
          >
            SERVICES
          </a>
          <a 
            href="#products" 
            onClick={(e) => { e.preventDefault(); handleNavigation('products'); }}
          >
            PRODUCTS
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;