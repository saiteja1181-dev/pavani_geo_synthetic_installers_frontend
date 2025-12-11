import React, { useState } from 'react';
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

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
      // Send data to backend API
      const response = await fetch('http://pgsi.in/quote-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message || 'Contact form inquiry'
        }),
      });

      console.log('Response status:', response.status);
      
      // Get response text first
      const responseText = await response.text();
      console.log('Raw response:', responseText);
      
      // Parse JSON if response exists
      let result;
      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        result = { error: 'Invalid server response' };
      }

      if (response.ok) {
        console.log('Success! Data saved to database:', result);
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        console.error('Server error response:', result);
        setSubmitMessage(`Error: ${result.error || 'Failed to send message'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitMessage('Network error. Please check if backend server is running at http://localhost:5000');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header Section - Left Aligned */}
        <div className="contact-header">
          <h2 className="contact-section-subtitle">GET IN TOUCH WITH US</h2>
          <div className="contact-title-container">
            <h1 className="contact-section-title">
              Request Your <span className="contact-title-accent">Free Quote</span>
            </h1>
            <div className="contact-title-underline"></div>
          </div>
          <p className="contact-section-description">
            Contact us for professional HDPE and geosynthetic solutions. Our experts are ready 
            to provide customized quotes and technical support for your projects.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-card-header">
                <h3 className="contact-info-card-title">Get In Touch</h3>
                <div className="contact-info-card-divider"></div>
              </div>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon-wrapper">
                    <FaLocationDot />
                  </div>
                  <div className="contact-detail-text">
                    <h4>Our Location</h4>
                    <p>Lankelapalem, Parawada<br />Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon-wrapper">
                    <FaPhoneVolume/>
                  </div>
                  <div className="contact-detail-text">
                    <h4>Phone Number</h4>
                    <p>
                      <a href="tel:+919652657383">+91-9652657383</a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon-wrapper">
                    <MdEmail/>
                  </div>
                  <div className="contact-detail-text">
                    <h4>Email Address</h4>
                    <p>
                      <a href="mailto:pavanigeoinstallers@gmail.com">
                        pavanigeoinstallers@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-additional-info">
                <div className="contact-info-highlight">
                  <div className="contact-highlight-icon">🕒</div>
                  <div className="contact-highlight-text">
                    <strong>Business Hours</strong>
                    <span>Monday - Saturday: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <div className="contact-info-highlight">
                  <div className="contact-highlight-icon">🚚</div>
                  <div className="contact-highlight-text">
                    <strong>Service Area</strong>
                    <span>Across India & International Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="contact-quote-form">
            <div className="contact-form-card">
              <div className="contact-form-card-header">
                <h3 className="contact-form-card-title">Request a Quote</h3>
                <div className="contact-form-card-divider"></div>
                <p className="contact-form-card-description">
                  Fill out the form below and our team will get back to you within 24 hours 
                  with a detailed quote and project consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-quote-form-content">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'contact-error' : ''}
                    />
                    {errors.name && <div className="contact-error-message">{errors.name}</div>}
                  </div>

                  <div className="contact-form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'contact-error' : ''}
                    />
                    {errors.email && <div className="contact-error-message">{errors.email}</div>}
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'contact-error' : ''}
                    />
                    {errors.phone && <div className="contact-error-message">{errors.phone}</div>}
                  </div>

                  <div className="contact-form-group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={errors.service ? 'contact-error' : ''}
                    >
                      <option value="">Select Service</option>
                      <option value="hdpe-pipeline">HDPE Pipeline Installation</option>
                      <option value="geomembrane">Geomembrane Installation</option>
                      <option value="geosynthetic">Geosynthetic Solutions</option>
                      <option value="maintenance">Maintenance & Repair</option>
                      <option value="consultation">Project Consultation</option>
                    </select>
                    {errors.service && <div className="contact-error-message">{errors.service}</div>}
                  </div>
                </div>

                <div className="contact-form-group contact-full-width">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'contact-error' : ''}
                  />
                  {errors.message && <div className="contact-error-message">{errors.message}</div>}
                </div>

                <button 
                  type="submit" 
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="contact-btn-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="contact-btn-icon">📨</span>
                      Send Message
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className={`contact-submit-message ${submitMessage.includes('Thank you') ? 'contact-success' : 'contact-error'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
