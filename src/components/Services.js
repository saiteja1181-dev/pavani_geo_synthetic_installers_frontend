import React, { useState, useEffect } from 'react';


import './Services.css';




const Services = ({ services, setSelectedService }) => {
  


  // Sample data
  const sampleServices = [
    {
      id: 1,
      title: "HDPE Pipeline Installation",
      description: "Professional HDPE pipeline installation services with expert engineering team and precision welding techniques for industrial and municipal applications.",
      image_url: "/images/hdpe-pipeline.jpg",
      features: "Expert welding, Precision installation, Quality assurance, Leak-proof joints",
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      title: "Geomembrane Installation",
      description: "Comprehensive geomembrane lining systems for environmental protection and containment projects with advanced leak detection.",
      image_url: "/images/pipe-maintenance.jpg",
      features: "Advanced welding, Leak detection, Quality testing, Custom solutions",
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      title: "Geosynthetic Solutions",
      description: "Complete geosynthetic installation services including geotextiles, geogrids, and erosion control systems for civil engineering projects.",
      image_url: "/images/geo-solutions.jpg",
      features: "Soil stabilization, Erosion control, Structural reinforcement, Environmental protection",
      created_at: new Date().toISOString()
    },
    {
      id: 4,
      title: "Maintenance & Repair",
      description: "Professional maintenance, inspection, and repair services for existing geosynthetic systems and HDPE pipelines.",
      image_url: "/images/maintenance.jpg",
      features: "Regular inspection, Preventive maintenance, Quick repair, System upgrades",
      created_at: new Date().toISOString()
    }
  ];

  // Use API data if available, otherwise use sample data
  let servicesData = [];
  if (Array.isArray(services) && services.length > 0) {
    servicesData = services;
  } else {
    servicesData = sampleServices;
  }

  const safeParseList = (value) => {
  if (!value) return [];

  if (Array.isArray(value)) return value;

  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed;
  } catch (_) {}

  if (typeof value === "string") {
    return value.split(',').map(v => v.trim()).filter(v => v.length > 0);
  }

  return [];
};


  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header Section - Left Aligned */}
        <div className="services-header">
          <h2 className="services-section-subtitle">PROFESSIONAL INSTALLATION SERVICES</h2>
          <div className="services-title-container">
            <h1 className="services-section-title">
              Our Expert <span className="services-title-accent">Services</span>
            </h1>
            <div className="services-title-underline"></div>
          </div>
          <p className="services-section-description">
            Comprehensive geosynthetic and HDPE installation services delivered by certified professionals 
            with advanced equipment and proven methodologies for guaranteed project success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className="services-card">
              <div className="services-image-container">
                <div className="services-image">
                  {service.image_url && (
                    <img
                      src={service.image_url}
                      alt={service.title}
                    />
                  )}
                  {!service.image_url && (
                    <div className="services-image-placeholder">
                      {service.title}
                    </div>
                  )}
                  <div className="services-image-placeholder">
                    <span>{service.title.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="services-overlay">
                  <button 
                    className="services-quick-view-btn"
                    onClick={() => setSelectedService(service)}
                  >
                    Quick View
                  </button>
                </div>
              </div>
              
              <div className="services-content">
                <h3 className="services-title">{service.title}</h3>
                <p className="services-description">{service.short_description}</p>
                
                <div className="services-features">
                  <h4 className="services-features-title">Key Features:</h4>
                  <div className="services-features-list">
                    {safeParseList(service.features).map((feature, index) => (
                      <div key={index} className="services-feature-item">
                        <span className="services-feature-icon">✓</span>
                        <span className="services-feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="services-actions-right">
                  <button 
                    className="services-primary-btn"
                    onClick={() => setSelectedService(service)}
                  >
                    View Details
                  </button>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;