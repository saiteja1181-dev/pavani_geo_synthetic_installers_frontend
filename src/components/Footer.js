import React from 'react';
import './Footer.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = ({ company }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-company">
            <h3 className="footer-company-name">Pavani Geo Synthetic</h3>
            <p className="footer-company-tagline">
              Professional geosynthetic solutions and HDPE installation services across India.
            </p>
            <div className="footer-company-details">
              <div className="footer-company-detail">
                <strong>GST:</strong> 37EVDPR1364G1ZE
              </div>
              <div className="footer-company-detail">
                <strong>Established:</strong> 2024
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <div className="footer-links-list">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#products">Products</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4 className="footer-links-title">Our Services</h4>
            <div className="footer-links-list">
              <a href="#services">HDPE Pipeline Installation</a>
              <a href="#services">Geomembrane Installation</a>
              <a href="#services">Geosynthetic Solutions</a>
              <a href="#services">Maintenance & Repair</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="footer-contact">
            <h4 className="footer-links-title">Contact Info</h4>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><FaLocationDot/></span>
                <div className="footer-contact-text">
                  <span>Lankelapalem, Parawada</span>
                  <span>Visakhapatnam, Andhra Pradesh</span>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><IoCall/></span>
                <a href="tel:+919652657383">+91-9652657383</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><MdEmail/></span>
                <a href="mailto:pavanigeoinstallers@gmail.com">pavanigeoinstallers@gmail.com</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer-social-section">
              <h4 className="footer-links-title">Follow Us</h4>
              <div className="footer-social-links">
                <a 
                  href="https://wa.me/919652657383" 
                  className="footer-social-link footer-whatsapp"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <span className="footer-social-icon">
                    <FaWhatsapp/>
                    </span>
                </a>
                <a 
                  href="#" 
                  className="footer-social-link footer-instagram"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <span className="footer-social-icon"><FaInstagram/></span>
                </a>
                <a 
                  href="#" 
                  className="footer-social-link footer-youtube"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <span className="footer-social-icon"><FaYoutube/></span>
                </a>
                <a 
                  href="#" 
                  className="footer-social-link footer-facebook"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <span className="footer-social-icon"><FaFacebook/></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} <strong>Pavani Geo Synthetic Installers</strong>. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <span className="footer-divider">|</span>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;