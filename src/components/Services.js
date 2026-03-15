import React, { useState, useEffect } from 'react';


import './Services.css';




const Services = ({ services, setSelectedService }) => {
  


  // Sample data
  const sampleServices =[{
  "_id": {
    "$oid": "6975c5d99b1f5f0b325befb8"
  },
  "id": 7,
  "title": "Aqua Pond Lining",
  "description": "Aqua Pond Lining Services from Pavani GeoSynthetic Installers provide complete design, supply and installation of HDPE / LDPE geomembrane liners for new and existing ponds. We use high quality UV stabilised sheets in 300–1000 micron thickness, fabricated to suit your pond size (from small 10 m x 10 m ponds to large farm ponds up to about 1 acre). Our team prepares the soil base, lays and welds the sheets using hot wedge machines, tests all joints for leaks and hands over a clean, ready-to-fill pond suitable for fish culture, irrigation storage and rainwater harvesting.",
  "image_url": "https://i.ibb.co/JWtxRrR4/1.jpg\r\n",
  "features": [
    "Waterproof erosion-resistant lining with rapid-setting concrete prevents seepage and structural cracks",
    "Durable outdoor protection ideal for road and drainage infrastructure projects"
  ],
  "created_at": "2025-11-23 16:31:16",
  "short_description": "HDPE geomembrane pond lining service for farm ponds, fish tanks and water storage with complete supply and installation.",
  "applications": [
    "Roadside drainage channels",
    "Stormwater drains",
    "Culverts and open canals",
    "Road protection and slope stabilization",
    "Infrastructure water diversion systems"
  ]
},
{
  "_id": {
    "$oid": "6975c5d99b1f5f0b325befb9"
  },
  "id": 8,
  "title": "Ash Pond Lining",
  "description": "Ash Pond Lining Services provide a robust and reliable containment solution for industries handling fly ash, bottom ash, and slurry waste. Our geomembrane liners are engineered to withstand harsh industrial environments, offering superior resistance to heat, chemicals, abrasion, and sulfates. We prepare the pond surface, deploy high-quality sheets, weld them with precision, and conduct complete leak testing for maximum protection. This ensures long-term stability, prevents groundwater contamination, and meets environmental safety standards.",
  "image_url": "https://i.ibb.co/cc5nBsMS/2.jpg",
  "features": [
    "Refractory, radiation and sulfate-resistant geomembrane for high-temperature industrial environments",
    "Prevents seepage, protects groundwater with durable long-life performance"
  ],
  "created_at": "2025-11-23 16:36:52",
  "short_description": "Industrial-grade ash pond lining using high-strength geomembrane sheets resistant to heat, chemicals, and industrial waste.",
  "applications": [
    "Fly ash and bottom ash storage ponds",
    "Coal-based thermal power plant waste containment",
    "Industrial slurry and effluent storage areas",
    "Mining waste holding ponds",
    "Environmental protection and pollution control zones"
  ]
},
{
  "_id": {
    "$oid": "6975c5d99b1f5f0b325befba"
  },
  "id": 9,
  "title": "Decorative Pond Lining",
  "description": "Our Decorative Pond Lining Services provide an elegant, leak-proof solution for terrace ponds, garden water bodies, indoor features, and architectural landscaping. The high-quality geomembrane liners used in this service offer superior flexibility, UV stability, water resistance, and long-term strength. We prepare the surface, install the liner with precision, seal all joints, and provide clean finishing to achieve a modern and attractive look. This service is ideal for residential buildings, hotels, apartments, commercial spaces, and landscaped environments where beauty and functionality must blend seamlessly.",
  "image_url": "https://i.ibb.co/Kp7VsZJZ/Gemini-Generated-Image-wt8u0mwt8u0mwt8u.png",
  "features": [
    "High-quality UV-resistant waterproof geomembrane with weather-stable, aesthetic finish",
    "Flexible, customizable installation with sealed joints for leak-proof long-term protection"
  ],
  "created_at": "2025-11-23 16:39:26",
  "short_description": "Aesthetic and durable pond lining service for terraces, gardens, and decorative water features using premium waterproof liners.",
  "applications": [
    "Terrace decorative ponds",
    "Garden and landscape water features",
    "Residential and apartment balcony ponds",
    "Hotel and resort aesthetic installations",
    "Interior or courtyard decorative water bodies",
    "Small fish ponds or ornamental ponds"
  ]
},
{
  "_id": {
    "$oid": "6975c5d99b1f5f0b325befbc"
  },
  "id": 11,
  "title": "Pipeline Welding",
  "description": "Our Pipeline Welding Services offer complete fabrication, installation, and commissioning of HDPE and PP pipeline systems. We provide high-quality butt welding, electrofusion welding, and field jointing for pipelines used in industrial, agricultural, and marine applications. Our team also handles pipeline routing, floatation and sinking, sea-bed installation, valve fixing, hydro testing, and operational maintenance. Using certified welding machines ranging from 63 mm to 630 mm, we ensure precise, durable, and leak-proof pipeline connections. This service is suitable for projects requiring long-distance distribution lines, industrial fluid transfer, irrigation systems, and critical utility infrastructure.",
  "image_url": "https://i.ibb.co/Z60GR2Cz/Gemini-Generated-Image-r7l053r7l053r7l0.png",
  "features": [
    "Professional butt welding and electrofusion welding of HDPE and PP pipes",
    "Certified welding machines ranging from 63 mm to 630 mm",
    "Precise alignment and joint sealing for leak-proof pipelines",
    "On-site pipeline fabrication and installation"
  ],
  "created_at": "2025-11-23 16:44:00",
  "short_description": "Professional HDPE and PP pipeline welding, installation, testing, and commissioning with certified welders and advanced machinery.",
  "applications": [
    "Welding of HDPE pipes",
    "Floatation, shifting, and sinking of pipelines",
    "Installation of pipelines on sea beds",
    "Headworks and generator pipeline installations",
    "Complete pipeline welding and installation",
    "Valve installations and joint integration",
    "Pipeline testing and commissioning",
    "Operation and maintenance support"
  ]
},
{
  "_id": {
    "$oid": "6975c5d99b1f5f0b325befbd"
  },
  "id": 12,
  "title": "Solid Waste Landfill Lining",
  "description": "Our Solid Waste Landfill Lining Services offer a complete, long-term containment solution for municipal and industrial waste disposal sites. Solid waste decomposition produces leachate that can severely pollute the environment if not controlled. Our geomembrane liners act as a strong, impermeable barrier that prevents leakage and protects surrounding soil and groundwater systems. These liners are puncture resistant, abrasion resistant, chemically stable, and designed to withstand heavy loads and harsh weather. Installation includes ground preparation, panel placement, seam welding, leak testing, and integration with leachate collection systems for maximum environmental protection.",
  "image_url": "https://i.ibb.co/xQhrrYN/Gemini-Generated-Image-kx7r9ckx7r9ckx7r-1.png",
  "features": [
    "High-strength geomembrane liner for landfill bases and caps",
    "Excellent puncture, tear, and abrasion resistance",
    "Chemical and UV resistant for long-term outdoor exposure",
    "Prevents leachate leakage and groundwater contamination"
  ],
  "created_at": "2025-11-23 16:46:45",
  "short_description": "High-strength geomembrane lining for solid waste landfills to prevent leachate leakage and protect soil and groundwater.",
  "applications": [
    "Municipal solid waste landfills",
    "Industrial waste landfill sites",
    "Hazardous waste containment areas",
    "Environmental protection and remediation projects",
    "Leachate containment and drainage systems",
    "Landfill base and closure capping projects"
  ]
},
{
  "_id": {
    "$oid": "6975c5d99b1f5f0b325befbe"
  },
  "id": 13,
  "title": "HDPE Lining",
  "description": "Our HDPE Lining Services provide a strong and leak-proof geomembrane barrier suitable for aquaculture ponds, irrigation reservoirs, ETP tanks, decorative ponds, and industrial waste containment. The HDPE liners offer high strength, flexibility, UV resistance, and excellent chemical stability, ensuring long-term performance even in demanding environments. We supply and install liners in various thicknesses with professional welding and complete leak testing to ensure a secure and reliable lining system.",
  "image_url": "https://i.ibb.co/YzYjv7d/Gemini-Generated-Image-k8sdypk8sdypk8sd.png",
  "features": [
    "High-strength waterproof geomembrane",
    "UV and chemical resistant material",
    "Excellent puncture and tear resistance",
    "Available in 0.5mm to 2.5mm thickness",
    "Long-lasting outdoor durability"
  ],
  "created_at": "2025-11-23 16:50:44",
  "short_description": "Durable HDPE geomembrane lining for ponds, tanks, reservoirs, and industrial containment systems.",
  "applications": [
    "Fish and aquaculture ponds",
    "Irrigation ponds and reservoirs",
    "ETP tanks and wastewater treatment",
    "Decorative and landscaping ponds",
    "Industrial containment pits"
  ]
},
{
  "_id": {
    "$oid": "6975c5d99b1f5f0b325befbf"
  },
  "id": 14,
  "title": "Oil Tank Lining",
  "description": "Our Oil Tank Lining Services provide a strong and secure geomembrane barrier designed to resist oil, fuels, chemicals, and harsh industrial conditions. The liners offer high hardness, flexibility, and excellent abrasion resistance, ensuring long-term protection against leaks and corrosion. Our installation process includes surface preparation, liner deployment, precision welding, and full leak testing to deliver a safe and durable oil containment solution.",
  "image_url": "https://i.ibb.co/rKcrdfRy/Gemini-Generated-Image-clrc42clrc42clrc.png",
  "features": [
    "Oil and chemical-resistant geomembrane",
    "High hardness and abrasion resistance",
    "Corrosion and leak protection",
    "Industrial-grade durability",
    "Strong welded joints for sealing"
  ],
  "created_at": "2025-11-23 16:54:26",
  "short_description": "Durable and chemical-resistant lining system for oil tanks and industrial containment pits.",
  "applications": [
    "Oil storage tank lining",
    "Refinery containment pits",
    "Fuel reservoir protection",
    "Chemical storage containment",
    "Industrial bund wall lining"
  ]
},
{
  "_id": {
    "$oid": "6975c5d99b1f5f0b325befc0"
  },
  "id": 15,
  "title": "ETP Tank Lining",
  "description": "Our ETP Tank Lining Services offer a strong, durable, and leak-proof geomembrane barrier ideal for effluent treatment tanks and chemical processing units. The lining material provides excellent tensile and flexural strength, high hardness, and full resistance to corrosive industrial liquids. With precision installation and welded joints, the system ensures long-term containment and prevents leaks, extending the life of the tank and improving operational safety.",
  "image_url": "https://i.ibb.co/m5Qtckcy/Gemini-Generated-Image-n5nwlbn5nwlbn5nw.png",
  "features": [
    "Chemical and effluent-resistant liner",
    "High tensile and flexural strength",
    "Leak-proof welded seams",
    "Corrosion prevention",
    "Industrial-grade long-lasting durability"
  ],
  "created_at": "2025-11-23 16:56:08",
  "short_description": "High-strength and chemical-resistant lining system for ETP tanks and industrial wastewater containment.",
  "applications": [
    "ETP tanks",
    "Industrial wastewater pits",
    "Chemical treatment tanks",
    "Process water containment",
    "Hazardous liquid storage areas"
  ]
},
{
  "_id": {
    "$oid": "6975c5d99b1f5f0b325befc1"
  },
  "id": 16,
  "title": "Road and Drain Lining",
  "description": "Our Road and Drain Lining Services offer a strong, waterproof, and erosion-resistant solution for protecting road surfaces and drainage structures. Using rapid-setting concrete and high-performance waterproofing systems, we ensure fast execution and long-term durability. These linings prevent seepage, cracks, and soil erosion, making them ideal for stormwater drains, roadside channels, culverts, and water diversion systems.",
  "image_url": "https://i.ibb.co/QvjDRs1f/Gemini-Generated-Image-15bjhm15bjhm15bj.png",
  "features": [
    "Waterproof and erosion-resistant lining",
    "Rapid-setting concrete application",
    "Prevents seepage and structural cracks",
    "Durable protection for outdoor conditions",
    "Ideal for road and drainage infrastructure"
  ],
  "created_at": "2025-11-23 16:57:12",
  "short_description": "Durable waterproof lining for roads, drains, and stormwater channels using rapid-setting concrete and protection systems.",
  "applications": [
    "Roadside drainage channels",
    "Stormwater drains",
    "Culverts and open canals",
    "Road protection and slope stabilization",
    "Infrastructure water diversion systems"
  ]
}];

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
