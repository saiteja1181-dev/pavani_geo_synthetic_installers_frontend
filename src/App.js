import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Products from './components/Products';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import './App.css';

const API_URL = 'http://pgsi.in/';

function App() {
  const [company, setCompany] = useState(null);
  const [services, setServices] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const mainContentRef = useRef(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  // Auto-scroll to top when service/product is selected
  useEffect(() => {
    if (selectedService || selectedProduct) {
      // Scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Alternatively, scroll to main content
      if (mainContentRef.current) {
        mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedService, selectedProduct]);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🔄 Fetching data from database...');

      const [companyResponse, servicesResponse, galleryResponse, productsResponse] = await Promise.all([
        axios.get(`${API_URL}company_details`),
        axios.get(`${API_URL}services`),
        axios.get(`${API_URL}gallery`),
        axios.get(`${API_URL}products`)
      ]);

      console.log('✅ Data fetched successfully from all tables');

      setCompany(companyResponse.data);
      setServices(servicesResponse.data);
      setGallery(galleryResponse.data);
      setProducts(productsResponse.data);
      
    } catch (error) {
      console.error('❌ Error fetching data:', error);
      setError(`Connection error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const retryConnection = () => {
    fetchAllData();
  };

  // Handle service selection
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedProduct(null); // Clear product if any
  };

  // Handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedService(null); // Clear service if any
  };

  // Handle back to home
  const handleBackToHome = () => {
    setSelectedService(null);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigation from header
  const handleHeaderNavigation = (sectionId) => {
    if (selectedService || selectedProduct) {
      // If we're in detail view, clear it first
      handleBackToHome();
      
      // Wait a moment for state to update, then navigate to section
      setTimeout(() => {
        navigateToSection(sectionId);
      }, 300);
    } else {
      // Normal navigation
      navigateToSection(sectionId);
    }
  };

  const navigateToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Get company data with fallbacks
  const getCompanyData = () => {
    if (company && Array.isArray(company) && company.length > 0) {
      return company[0];
    }
    if (company && typeof company === 'object') {
      return company;
    }
    
    return {
      name: 'Pavani Geo Synthetic',
      description: 'Leading HDPE Pipe and Sheet Solutions Provider',
      phone: '+91-9652657383',
      email: 'info@pavanigeosynthetic.com',
      address: 'Industrial Area, City, State',
      about_text: 'Professional HDPE solutions provider with years of experience.'
    };
  };

  if (loading) {
    return (
      <div className="app-container">
        <Header company={getCompanyData()} onNavigate={handleHeaderNavigation} />
        <div className="app-loading-container">
          <div className="app-loading-spinner"></div>
          <p>Loading data from database...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header company={getCompanyData()} onNavigate={handleHeaderNavigation} />
      
      <main className="app-main-content" ref={mainContentRef}>
        {/* Show Service Detail View at the TOP */}
        {selectedService && (
          <div className="app-detail-view-container">
            <ServiceDetail 
              service={selectedService} 
              onBack={handleBackToHome} 
            />
          </div>
        )}

        {/* Show Product Detail View at the TOP */}
        {selectedProduct && (
          <div className="app-detail-view-container">
            <ProductDetail 
              product={selectedProduct} 
              onBack={handleBackToHome} 
            />
          </div>
        )}

        {/* Show Homepage Sections (hidden when detail view is active) */}
        <div className={`app-homepage-sections ${selectedService || selectedProduct ? 'app-hidden' : 'app-visible'}`}>
          <Hero company={getCompanyData()} />
          <About company={getCompanyData()} />
          <Services 
            services={services} 
            setSelectedService={handleServiceSelect} 
          />
          <Products 
            products={products} 
            setSelectedProduct={handleProductSelect} 
          />
          <Contact company={getCompanyData()} />
        </div>
      </main>

      <Footer company={getCompanyData()} />
    </div>
  );
}

export default App;
