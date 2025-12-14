import React, { useState, useEffect } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onBack }) => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '', // Added back - will auto-fill with product title
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Auto-fill service with product title when component mounts or product changes
  useEffect(() => {
    if (product) {
      setFormData(prev => ({
        ...prev,
        service: product.title
      }));
    }
  }, [product]);

  if (!product) {
    return (
      <div className="product-detail-section">
        <div className="product-detail-container">
          <div className="product-detail-not-found">
            <h2 className="product-detail-not-found-title">Product Not Found</h2>
            <p className="product-detail-not-found-description">The requested product could not be found.</p>
            <button onClick={onBack} className="product-detail-primary-btn">
              ← Back to Products
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

  // Validate form - Fixed to include service validation
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

    // Added service validation (same as ServiceDetail.js)
    if (!formData.service) {
      newErrors.service = 'Service/Product is required';
    }

    return newErrors;
  };

  // Submit form data to backend - Fixed to include service field
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
      console.log('Sending to backend:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      });

      // Send data to backend - include service field
      const response = await fetch('https://pgsi.in/quote-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone.replace(/\D/g, ''), // Clean phone number
          service: formData.service, // Include service field
          message: formData.message || `Inquiry about ${product.title}`
        }),
      });

      console.log('Response status:', response.status);
      
      // Try to parse response (better error handling)
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
        console.log('Success!', result);
        setSubmitMessage('✓ Thank you! Your inquiry has been submitted.');
        
        // Clear form but keep product name in service field
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: product.title,
          message: ''
        });
        
        // Close form after 3 seconds
        setTimeout(() => {
          setShowQuoteForm(false);
          setSubmitMessage('');
        }, 3000);
      } else {
        console.error('Server error response:', result);
        setSubmitMessage(`✗ ${result.error || 'Failed to submit inquiry'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitMessage('✗ Network error. Please check if backend is running at http://localhost:5000');
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
      service: product.title,
      message: ''
    });
    setErrors({});
    setSubmitMessage('');
  };

  return (
    <>
      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="product-detail-quote-modal">
          <div className="product-detail-quote-modal-content">
            <div className="product-detail-quote-modal-header">
              <h3>Product Inquiry: {product.title}</h3>
              <button 
                className="product-detail-quote-modal-close"
                onClick={handleCloseQuoteForm}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="product-detail-quote-form">
              {/* Hidden service field - auto-filled with product name (same as ServiceDetail.js) */}
              <input type="hidden" name="service" value={formData.service} />
              
              <div className="product-detail-quote-form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'product-detail-quote-input-error' : ''}
                  required
                />
                {errors.name && <div className="product-detail-quote-error-message">{errors.name}</div>}
              </div>
              
              <div className="product-detail-quote-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'product-detail-quote-input-error' : ''}
                  required
                />
                {errors.email && <div className="product-detail-quote-error-message">{errors.email}</div>}
              </div>
              
              <div className="product-detail-quote-form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'product-detail-quote-input-error' : ''}
                  required
                />
                {errors.phone && <div className="product-detail-quote-error-message">{errors.phone}</div>}
              </div>
              
              <div className="product-detail-quote-form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements, quantity needed, or project details..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                />
              </div>
              
              <div className="product-detail-quote-form-buttons">
                <button 
                  type="submit" 
                  className="product-detail-quote-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="product-detail-btn-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
                <button 
                  type="button"
                  className="product-detail-quote-cancel-btn"
                  onClick={handleCloseQuoteForm}
                >
                  Cancel
                </button>
              </div>
              
              {submitMessage && (
                <div className={`product-detail-quote-message ${submitMessage.includes('✓') ? 'product-detail-quote-success' : 'product-detail-quote-error'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Product Detail Content */}
      <div className="product-detail-section">
        <div className="product-detail-container">
          <button onClick={onBack} className="product-detail-back-button">
            ← Back to All Products
          </button>
          
          <div className="product-detail-card">
            {/* Header Section */}
            <div className="product-detail-header">
              <h2 className="product-detail-section-subtitle">PREMIUM QUALITY PRODUCT</h2>
              <h1 className="product-detail-title">
                {product.title} <span className="product-detail-title-accent">Product</span>
              </h1>
              <div className="product-detail-header-divider"></div>
              <p className="product-detail-price-large">{product.price}</p>
            </div>
            
            {/* Content Section */}
            <div className="product-detail-content">
              <div className="product-detail-image-section">
                <div className="product-detail-image">
                  {product.images ? (
                    <img 
                      src={product.images} 
                      alt={product.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : null}
                  <div className="product-detail-image-placeholder">
                    <span>{product.title}</span>
                  </div>
                </div>
              </div>
              
              <div className="product-detail-info-section">
                {/* Product Description */}
                <div className="product-detail-info-card">
                  <div className="product-detail-info-card-header">
                    <h3 className="product-detail-info-card-title">Product Description</h3>
                    <div className="product-detail-info-card-divider"></div>
                  </div>
                  <p className="product-detail-description">{product.description}</p>
                </div>
                
                {/* Product Applications */}
                {product.applications && (
                  <div className="product-detail-info-card">
                    <div className="product-detail-info-card-header">
                      <h3 className="product-detail-info-card-title">Applications</h3>
                      <div className="product-detail-info-card-divider"></div>
                    </div>
                    <div className="product-detail-features-grid">
                      {safeParseList(product.applications).map((app, index) => (
                        <div key={index} className="product-detail-feature-item">
                          <div className="product-detail-feature-icon">✔</div>
                          <span className="product-detail-feature-text">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* CTA Section */}
                <div className="product-detail-info-card product-detail-cta-card">
                  <div className="product-detail-info-card-header">
                    <h3 className="product-detail-info-card-title">Interested in this product?</h3>
                    <div className="product-detail-info-card-divider"></div>
                  </div>
                  <p className="product-detail-cta-description">Contact us for bulk orders and customized pricing details</p>
                  <div className="product-detail-cta-buttons">
                    <button 
                      className="product-detail-primary-btn"
                      onClick={handleCallNow}
                    >
                      <span className="product-detail-btn-icon">📞</span>
                      Call for Quote
                    </button>
                    <button 
                      className="product-detail-secondary-btn"
                      onClick={() => setShowQuoteForm(true)}
                    >
                      <span className="product-detail-btn-icon">📧</span>
                      Send Inquiry
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


export default ProductDetail;
