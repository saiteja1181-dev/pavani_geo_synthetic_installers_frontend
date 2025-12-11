import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Satisfied Clients' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <h2 className="about-section-subtitle">PROFESSIONAL GEOSYNTHETIC SOLUTIONS</h2>
          <h1 className="about-section-title">
            Pavani Geo Synthetic <span className="about-title-accent">Installers</span>
          </h1>
          <div className="about-header-divider"></div>
          <p className="about-section-description">
           As India's geosynthetic engineering specialist, we deliver comprehensive HDPE lining systems, geomembrane installations, and precision welding services that set industry standards for quality and reliability. Our certified engineering team combines advanced technical expertise with state-of-the-art equipment to provide leak-proof containment solutions for landfill engineering, water reservoirs, mining operations, and industrial applications nationwide. With operational Office in Visakhapatnam, we execute projects across India using rigorous quality control protocols and innovative installation methodologies that ensure superior structural integrity and long-term environmental protection.
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="about-content-main">
            <div className="about-text-content">
              <p className="about-description-text">
                Our commitment to engineering excellence extends from initial site assessment and customized design through precision installation and comprehensive quality assurance. We provide end-to-end solutions that address complex infrastructure challenges while maintaining uncompromising safety standards and regulatory compliance. By integrating cutting-edge material science with proven engineering practices, we deliver sustainable, high-performance installations that protect environmental resources, enhance project longevity, and provide measurable value for our clients across all industrial sectors.
              </p>

              {/* Features */}
              <div className="about-features-section">
                <h3 className="about-features-title">Why Choose Us</h3>
                <div className="about-features-grid">
                  <div className="about-feature">
                    <h4>Expert Installation</h4>
                    <p>Skilled technicians with specialized tools for all geosynthetic applications</p>
                  </div>
                  <div className="about-feature">
                    <h4>End-to-End Service</h4>
                    <p>Complete solutions from design to installation and maintenance</p>
                  </div>
                  <div className="about-feature">
                    <h4>Quality Assurance</h4>
                    <p>Advanced testing equipment for seam strength and leak detection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications Sidebar */}
            <div className="about-applications-sidebar">
              <div className="about-applications-card">
                <h3>Core Applications</h3>
                <ul className="about-applications-list">
                  <li>Landfills & Waste Management</li>
                  <li>Water Management Systems</li>
                  <li>Industrial Containment</li>
                  <li>Environmental Protection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="about-business-info">
            <div className="about-business-card">
              <h3>Business Details</h3>
              <div className="about-business-details">
                <div className="about-detail-item">
                  <strong>GST Number:</strong>
                  <span>37EVDPR1364G1ZE</span>
                </div>
                <div className="about-detail-item">
                  <strong>Established:</strong>
                  <span>2024</span>
                </div>
                <div className="about-detail-item">
                  <strong>Specialization:</strong>
                  <span>HDPE Pipes & Sheets Export/Import</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;