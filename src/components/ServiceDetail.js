import React, { useState, useEffect } from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service, onBack }) => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '', // Will auto-fill with current service
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Auto-fill service name when component mounts or service changes
  useEffect(() => {
    if (service) {
      setFormData(prev => ({
        ...prev,
        service: service.title
      }));
    }
  }, [service]);

  if (!service) {
    return (
      <div className="service-detail-section">
        <div className="service-detail-container">
          <div className="service-detail-not-found">
            <h2 className="service-detail-not-found-title">Service Not Found</h2>
            <p className="service-detail-not-found-description">The requested service could not be found.</p>
            <button onClick={onBack} className="service-detail-primary-btn">
              ← Back to Services
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Helper parser function
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

  // Handle phone call
  const handleCallNow = () => {
    const phoneNumber = "+919652657383";
    window.location.href = `tel:${phoneNumber}`;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    return newErrors;
  };

  // Submit form data to your backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('Submitting to backend...', formData);
      
      // Send data to YOUR backend endpoint
      const response = await fetch('http://localhost:5000/quote-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message || `Interested in ${service.title} service`
        }),
      });

      console.log('Response status:', response.status);
      
      // Try to parse response
      let result;
      try {
        const responseText = await response.text();
        console.log('Response text:', responseText);
        result = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        throw new Error('Invalid response from server');
      }

      if (response.ok) {
        console.log('Success! Data saved to database:', result);
        setSubmitMessage('✓ Thank you! Your quote request has been submitted successfully.');
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: service.title, // Keep service name
          message: ''
        });
        
        // Close form after 3 seconds
        setTimeout(() => {
          setShowQuoteForm(false);
          setSubmitMessage('');
        }, 3000);
      } else {
        console.error('Server error response:', result);
        setSubmitMessage(`✗ Error: ${result.error || 'Failed to submit quote request'}`);
      }
    } catch (error) {
      console.error('Network/Submit error:', error);
      setSubmitMessage('✗ Network error. Please check if backend server is running (port 5000).');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close quote form
  const handleCloseQuoteForm = () => {
    setShowQuoteForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: service.title, // Keep service name
      message: ''
    });
    setErrors({});
    setSubmitMessage('');
  };

  return (
    <>
      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="service-detail-quote-modal">
          <div className="service-detail-quote-modal-content">
            <div className="service-detail-quote-modal-header">
              <h3>Request Quote for {service.title}</h3>
              <button 
                className="service-detail-quote-modal-close"
                onClick={handleCloseQuoteForm}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="service-detail-quote-form">
              {/* Hidden service field - already auto-filled */}
              <input type="hidden" name="service" value={formData.service} />
              
              <div className="service-detail-quote-form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'service-detail-quote-input-error' : ''}
                  required
                />
                {errors.name && <div className="service-detail-quote-error-message">{errors.name}</div>}
              </div>
              
              <div className="service-detail-quote-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'service-detail-quote-input-error' : ''}
                  required
                />
                {errors.email && <div className="service-detail-quote-error-message">{errors.email}</div>}
              </div>
              
              <div className="service-detail-quote-form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'service-detail-quote-input-error' : ''}
                  required
                />
                {errors.phone && <div className="service-detail-quote-error-message">{errors.phone}</div>}
              </div>
              
              <div className="service-detail-quote-form-group">
                <textarea
                  name="message"
                  placeholder="Additional requirements or project details..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                />
              </div>
              
              <div className="service-detail-quote-form-buttons">
                <button 
                  type="submit" 
                  className="service-detail-quote-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="service-detail-btn-spinner"></div>
                      Submitting...
                    </>
                  ) : (
                    'Submit Quote Request'
                  )}
                </button>
                <button 
                  type="button"
                  className="service-detail-quote-cancel-btn"
                  onClick={handleCloseQuoteForm}
                >
                  Cancel
                </button>
              </div>
              
              {submitMessage && (
                <div className={`service-detail-quote-message ${submitMessage.includes('✓') ? 'service-detail-quote-success' : 'service-detail-quote-error'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Service Detail Content */}
      <div className="service-detail-section">
        <div className="service-detail-container">
          <button onClick={onBack} className="service-detail-back-button">
            ← Back to All Services
          </button>
          
          <div className="service-detail-card">
            {/* Header Section */}
            <div className="service-detail-header">
              <h2 className="service-detail-section-subtitle">PROFESSIONAL SERVICE</h2>
              <h1 className="service-detail-title">
                {service.title} <span className="service-detail-title-accent">Service</span>
              </h1>
              <div className="service-detail-header-divider"></div>
            </div>
            
            {/* Content Section */}
            <div className="service-detail-content">
              <div className="service-detail-image-section">
                <div className="service-detail-image">
                  {service.image_url ? (
                    <img 
                      src={service.image_url}
                      alt={service.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : null}
                  <div className="service-detail-image-placeholder">
                    <span>{service.title}</span>
                  </div>
                </div>
              </div>
              
              <div className="service-detail-info-section">
                {/* Service Description */}
                <div className="service-detail-info-card">
                  <div className="service-detail-info-card-header">
                    <h3 className="service-detail-info-card-title">{service.title}</h3>
                    <div className="service-detail-info-card-divider"></div>
                  </div>
                  <p className="service-detail-description">{service.description}</p>
                </div>
                
                {/* Service Features */}
                {service.features && (
                  <div className="service-detail-info-card">
                    <div className="service-detail-info-card-header">
                      <h3 className="service-detail-info-card-title">Key Features & Benefits</h3>
                      <div className="service-detail-info-card-divider"></div>
                    </div>
                    <div className="service-detail-features-grid">
                      {safeParseList(service.features).map((feature, index) => (
                        <div key={index} className="service-detail-feature-item">
                          <div className="service-detail-feature-icon">✔</div>
                          <span className="service-detail-feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* CTA Section */}
                <div className="service-detail-info-card service-detail-cta-card">
                  <div className="service-detail-info-card-header">
                    <h3 className="service-detail-info-card-title">Interested in this service?</h3>
                    <div className="service-detail-info-card-divider"></div>
                  </div>
                  <p className="service-detail-cta-description">Contact us for more information and customized pricing</p>
                  <div className="service-detail-cta-buttons">
                    <button 
                      className="service-detail-primary-btn"
                      onClick={handleCallNow}
                    >
                      <span className="service-detail-btn-icon">📞</span>
                      Call Now
                    </button>
                    <button 
                      className="service-detail-secondary-btn"
                      onClick={() => setShowQuoteForm(true)}
                    >
                      <span className="service-detail-btn-icon">📧</span>
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;