import React from 'react';
import './Products.css';

const Products = ({ products, setSelectedProduct }) => {
  // Sample data
  const sampleProducts = [
    {
      id: 1,
      name: "HDPE Pipes",
      description: "High-quality HDPE pipes for various industrial applications with excellent durability and corrosion resistance.",
      image_url: "/images/hdpe-pipes.jpg",
      price: "Contact for pricing",
      features: "Corrosion resistant, UV stable, Lightweight, Long lifespan"
    },
    {
      id: 2,
      name: "Geomembranes",
      description: "Premium geomembranes for containment and environmental protection projects with superior waterproofing.",
      image_url: "/images/geomembranes.jpg",
      price: "Contact for pricing",
      features: "Waterproof, Chemical resistant, Flexible, Durable"
    },
    {
      id: 3,
      name: "Geotextiles",
      description: "High-strength geotextiles for soil stabilization and filtration applications with excellent permeability.",
      image_url: "/images/geotextiles.jpg",
      price: "Contact for pricing",
      features: "Permeable, Strong, UV resistant, Easy installation"
    },
    {
      id: 4,
      name: "HDPE Sheets",
      description: "Durable HDPE sheets for lining and construction applications with smooth surface finish.",
      image_url: "/images/hdpe-sheets.jpg",
      price: "Contact for pricing",
      features: "Smooth surface, Chemical resistant, Weather proof, Custom sizes"
    }
  ];

  // Use API data if available, otherwise use sample data
  let productsData = [];
  if (Array.isArray(products) && products.length > 0) {
    productsData = products;
  } else {
    productsData = sampleProducts;
  }

  // Safe feature splitting function
  // Safe feature parsing function
const getFeaturesList = (features) => {
  if (!features) return [];

  // If already array → return as-is
  if (Array.isArray(features)) return features;

  // If stored as JSON array string → parse it
  try {
    const parsed = JSON.parse(features);
    if (Array.isArray(parsed)) return parsed;
  } catch (err) {
    // Not valid JSON → continue
  }

  // If comma-separated string → split normally
  if (typeof features === "string") {
    return features.split(',').map(item => item.trim()).filter(item => item);
  }

  return [];
};

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        {/* Header Section - Left Aligned */}
        <div className="products-header">
          <h2 className="products-section-subtitle">PREMIUM GEOSYNTHETIC PRODUCTS</h2>
          <div className="products-title-container">
            <h1 className="products-section-title">
              Our Quality <span className="products-title-accent">Products</span>
            </h1>
            <div className="products-title-underline"></div>
          </div>
          <p className="products-section-description">
            High-performance HDPE and geosynthetic products engineered for durability, 
            reliability, and exceptional performance in demanding industrial applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {productsData.map(product => {
            const featuresList = getFeaturesList(product.features);
            
            return (
              <div key={product.id} className="products-card">
                <div className="products-image-container">
                  <div className="products-image">
                    {product.images && (
                    <img
                      src={product.images}
                      alt={product.title}
                    />
                  )}
                  {!product.images && (
                    <div className="products-image-placeholder">
                      {product.title}
                    </div>
                  )}
                    
                  </div>
                  <div className="products-overlay">
                    <button 
                      className="products-quick-view-btn"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="products-content">
                  <h3 className="products-title">{product.title || 'Product Name'}</h3>
                  <p className="products-description">{product.short_description || 'No description available.'}</p>
                  
                  <div className="products-features">
                    <h4 className="products-features-title">Key Features:</h4>
                    <div className="products-features-list">
                      {featuresList.length > 0 ? (
                        featuresList.map((feature, index) => (
                          <div key={index} className="products-feature-item">
                            <span className="products-feature-icon">✓</span>
                            <span className="products-feature-text">{feature}</span>
                          </div>
                        ))
                      ) : (
                        <div className="products-feature-item">
                          <span className="products-feature-icon">✓</span>
                          <span className="products-feature-text">High Quality Materials</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="products-footer">
                    <div className="products-actions">
                      <button 
                        className="products-primary-btn"
                        onClick={() => setSelectedProduct(product)}
                      >
                        View Details
                      </button>
                     
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;