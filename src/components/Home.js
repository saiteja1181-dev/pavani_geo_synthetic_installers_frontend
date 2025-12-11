import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Pavani Geo Synthetic Installers</h1>
          <p className="home-subtitle">
            Expert HDPE Pipe & Sheet Solutions | Quality Geosynthetic Installations
          </p>
          <p className="home-description">
            Your trusted partner for professional geosynthetic solutions, 
            specializing in HDPE pipe installations, sheet lining, and comprehensive 
            geomembrane applications for industrial and environmental projects.
          </p>
          <div className="home-buttons">
            <a href="#services" className="home-btn home-btn-primary">Our Services</a>
            <a href="#contact" className="home-btn home-btn-secondary">Get Free Quote</a>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat-item">
            <h3 className="home-stat-number">15+</h3>
            <p className="home-stat-label">Years Experience</p>
          </div>
          <div className="home-stat-item">
            <h3 className="home-stat-number">500+</h3>
            <p className="home-stat-label">Projects Completed</p>
          </div>
          <div className="home-stat-item">
            <h3 className="home-stat-number">100%</h3>
            <p className="home-stat-label">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;