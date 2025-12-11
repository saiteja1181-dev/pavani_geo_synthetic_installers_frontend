import React, { useState, useEffect } from 'react';
import './Hero.css';

const images = [
    'https://i.ibb.co/Gv7kWt3K/6.jpg',
'https://i.ibb.co/sZnZxJJ/5.jpg',
'https://i.ibb.co/gZFFpFh7/4.jpg',
'https://i.ibb.co/C53ptsRq/3.jpg',
'https://i.ibb.co/Bkb5cP0/2.jpg',
'https://i.ibb.co/ccCpHSbK/1.jpg',
    ];

const SLIDE_INTERVAL = 5000;

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, SLIDE_INTERVAL);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Enhanced Overlay for Better Visibility */}
        <div className="hero-overlay"></div>
        
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-main-content">
            <div className="hero-text-content">
              <h1 className="hero-title">
                PAVANI GEO SYNTHETIC <span className="hero-title-accent">INSTALLERS</span>
              </h1>
              <div className="hero-divider"></div>
              <p className="hero-description">
                Professional HDPE pipeline installation and geosynthetic solutions for industrial, 
                municipal, and environmental applications. Expert engineering with quality assurance.
              </p>
              <div className="hero-features">
                <div className="hero-feature-tag">✓ Expert Engineering</div>
                <div className="hero-feature-tag">✓ Quality Materials</div>
                <div className="hero-feature-tag">✓ Timely Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;