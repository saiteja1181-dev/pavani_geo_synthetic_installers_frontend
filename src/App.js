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

const API_URL = 'https://api.pgsi.in/';

// ==================== HARDCODED DATA ====================
const HARDCODED_DATA = {
  company: {
    id: 1,
    name: "Pavani Geo Synthetic Installers",
    description: "Leading providers of HDPE pipe and sheet solutions with years of expertise in geosynthetic installations",
    address: "Lankelapalem, Parawada Mandal, Visakhapatnam",
    phone: "+91-9652657383",
    email: "info@pavanigeosynthetic.com",
    logo_url: "/images/logo.png",
    about_text: "Pavani Geo Synthetic Installers is a premier provider of geosynthetic solutions with over 15 years of experience in the industry. We specialize in HDPE pipe and sheet installations, geomembrane lining, and comprehensive geosynthetic applications.\n\nOur team of certified professionals is dedicated to delivering high-quality, durable solutions for various industries including construction, environmental protection, mining, and agriculture.\n\nWe pride ourselves on our commitment to quality, timely project completion, and customer satisfaction. Our expertise covers a wide range of applications from pond lining and landfill projects to industrial pipe networks and erosion control solutions."
  },
  
  services: [
    {
      id: 7,
      title: "Aqua Pond Lining",
      description: "HDPE geomembrane pond lining service for farm ponds, fish tanks and water storage with complete supply and installation.",
      full_description: "Aqua Pond Lining Services from Pavani GeoSynthetic Installers provide complete design, supply and installation of HDPE / LDPE geomembrane liners for new and existing ponds. We use high quality UV stabilised sheets in 300–1000 micron thickness, fabricated to suit your pond size (from small 10 m x 10 m ponds to large farm ponds up to about 1 acre). Our team prepares the soil base, lays and welds the sheets using hot wedge machines, tests all joints for leaks and hands over a clean, ready-to-fill pond suitable for fish culture, irrigation storage and rainwater harvesting.",
      image_url: "https://i.ibb.co/JWtxRrR4/1.jpg",
      features: [
        "Waterproof erosion-resistant lining with rapid-setting concrete prevents seepage and structural cracks",
        "Durable outdoor protection ideal for road and drainage infrastructure projects"
      ],
      applications: [
        "Roadside drainage channels",
        "Stormwater drains",
        "Culverts and open canals",
        "Road protection and slope stabilization",
        "Infrastructure water diversion systems"
      ]
    },
    {
      id: 8,
      title: "Ash Pond Lining",
      description: "Industrial-grade ash pond lining using high-strength geomembrane sheets resistant to heat, chemicals, and industrial waste.",
      full_description: "Ash Pond Lining Services provide a robust and reliable containment solution for industries handling fly ash, bottom ash, and slurry waste. Our geomembrane liners are engineered to withstand harsh industrial environments, offering superior resistance to heat, chemicals, abrasion, and sulfates. We prepare the pond surface, deploy high-quality sheets, weld them with precision, and conduct complete leak testing for maximum protection. This ensures long-term stability, prevents groundwater contamination, and meets environmental safety standards.",
      image_url: "https://i.ibb.co/cc5nBsMS/2.jpg",
      features: [
        "Refractory, radiation and sulfate-resistant geomembrane for high-temperature industrial environments",
        "Prevents seepage, protects groundwater with durable long-life performance"
      ],
      applications: [
        "Fly ash and bottom ash storage ponds",
        "Coal-based thermal power plant waste containment",
        "Industrial slurry and effluent storage areas",
        "Mining waste holding ponds",
        "Environmental protection and pollution control zones"
      ]
    },
    {
      id: 9,
      title: "Decorative Pond Lining",
      description: "Aesthetic and durable pond lining service for terraces, gardens, and decorative water features using premium waterproof liners.",
      full_description: "Our Decorative Pond Lining Services provide an elegant, leak-proof solution for terrace ponds, garden water bodies, indoor features, and architectural landscaping. The high-quality geomembrane liners used in this service offer superior flexibility, UV stability, water resistance, and long-term strength. We prepare the surface, install the liner with precision, seal all joints, and provide clean finishing to achieve a modern and attractive look. This service is ideal for residential buildings, hotels, apartments, commercial spaces, and landscaped environments where beauty and functionality must blend seamlessly.",
      image_url: "https://i.ibb.co/Kp7VsZJZ/Gemini-Generated-Image-wt8u0mwt8u0mwt8u.png",
      features: [
        "High-quality UV-resistant waterproof geomembrane with weather-stable, aesthetic finish",
        "Flexible, customizable installation with sealed joints for leak-proof long-term protection"
      ],
      applications: [
        "Terrace decorative ponds",
        "Garden and landscape water features",
        "Residential and apartment balcony ponds",
        "Hotel and resort aesthetic installations",
        "Interior or courtyard decorative water bodies",
        "Small fish ponds or ornamental ponds"
      ]
    },
    {
      id: 11,
      title: "Pipeline Welding",
      description: "Professional HDPE and PP pipeline welding, installation, testing, and commissioning with certified welders and advanced machinery.",
      full_description: "Our Pipeline Welding Services offer complete fabrication, installation, and commissioning of HDPE and PP pipeline systems. We provide high-quality butt welding, electrofusion welding, and field jointing for pipelines used in industrial, agricultural, and marine applications. Our team also handles pipeline routing, floatation and sinking, sea-bed installation, valve fixing, hydro testing, and operational maintenance. Using certified welding machines ranging from 63 mm to 630 mm, we ensure precise, durable, and leak-proof pipeline connections. This service is suitable for projects requiring long-distance distribution lines, industrial fluid transfer, irrigation systems, and critical utility infrastructure.",
      image_url: "https://i.ibb.co/Z60GR2Cz/Gemini-Generated-Image-r7l053r7l053r7l0.png",
      features: [
        "Professional butt welding and electrofusion welding of HDPE and PP pipes",
        "Certified welding machines ranging from 63 mm to 630 mm",
        "Precise alignment and joint sealing for leak-proof pipelines",
        "On-site pipeline fabrication and installation"
      ],
      applications: [
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
      id: 12,
      title: "Solid Waste Landfill Lining",
      description: "High-strength geomembrane lining for solid waste landfills to prevent leachate leakage and protect soil and groundwater.",
      full_description: "Our Solid Waste Landfill Lining Services offer a complete, long-term containment solution for municipal and industrial waste disposal sites. Solid waste decomposition produces leachate that can severely pollute the environment if not controlled. Our geomembrane liners act as a strong, impermeable barrier that prevents leakage and protects surrounding soil and groundwater systems. These liners are puncture resistant, abrasion resistant, chemically stable, and designed to withstand heavy loads and harsh weather. Installation includes ground preparation, panel placement, seam welding, leak testing, and integration with leachate collection systems for maximum environmental protection.",
      image_url: "https://i.ibb.co/xQhrrYN/Gemini-Generated-Image-kx7r9ckx7r9ckx7r-1.png",
      features: [
        "High-strength geomembrane liner for landfill bases and caps",
        "Excellent puncture, tear, and abrasion resistance",
        "Chemical and UV resistant for long-term outdoor exposure",
        "Prevents leachate leakage and groundwater contamination"
      ],
      applications: [
        "Municipal solid waste landfills",
        "Industrial waste landfill sites",
        "Hazardous waste containment areas",
        "Environmental protection and remediation projects",
        "Leachate containment and drainage systems",
        "Landfill base and closure capping projects"
      ]
    },
    {
      id: 13,
      title: "HDPE Lining",
      description: "Durable HDPE geomembrane lining for ponds, tanks, reservoirs, and industrial containment systems.",
      full_description: "Our HDPE Lining Services provide a strong and leak-proof geomembrane barrier suitable for aquaculture ponds, irrigation reservoirs, ETP tanks, decorative ponds, and industrial waste containment. The HDPE liners offer high strength, flexibility, UV resistance, and excellent chemical stability, ensuring long-term performance even in demanding environments. We supply and install liners in various thicknesses with professional welding and complete leak testing to ensure a secure and reliable lining system.",
      image_url: "https://i.ibb.co/YzYjv7d/Gemini-Generated-Image-k8sdypk8sdypk8sd.png",
      features: [
        "High-strength waterproof geomembrane",
        "UV and chemical resistant material",
        "Excellent puncture and tear resistance",
        "Available in 0.5mm to 2.5mm thickness",
        "Long-lasting outdoor durability"
      ],
      applications: [
        "Fish and aquaculture ponds",
        "Irrigation ponds and reservoirs",
        "ETP tanks and wastewater treatment",
        "Decorative and landscaping ponds",
        "Industrial containment pits"
      ]
    },
    {
      id: 14,
      title: "Oil Tank Lining",
      description: "Durable and chemical-resistant lining system for oil tanks and industrial containment pits.",
      full_description: "Our Oil Tank Lining Services provide a strong and secure geomembrane barrier designed to resist oil, fuels, chemicals, and harsh industrial conditions. The liners offer high hardness, flexibility, and excellent abrasion resistance, ensuring long-term protection against leaks and corrosion. Our installation process includes surface preparation, liner deployment, precision welding, and full leak testing to deliver a safe and durable oil containment solution.",
      image_url: "https://i.ibb.co/rKcrdfRy/Gemini-Generated-Image-clrc42clrc42clrc.png",
      features: [
        "Oil and chemical-resistant geomembrane",
        "High hardness and abrasion resistance",
        "Corrosion and leak protection",
        "Industrial-grade durability",
        "Strong welded joints for sealing"
      ],
      applications: [
        "Oil storage tank lining",
        "Refinery containment pits",
        "Fuel reservoir protection",
        "Chemical storage containment",
        "Industrial bund wall lining"
      ]
    },
    {
      id: 15,
      title: "ETP Tank Lining",
      description: "High-strength and chemical-resistant lining system for ETP tanks and industrial wastewater containment.",
      full_description: "Our ETP Tank Lining Services offer a strong, durable, and leak-proof geomembrane barrier ideal for effluent treatment tanks and chemical processing units. The lining material provides excellent tensile and flexural strength, high hardness, and full resistance to corrosive industrial liquids. With precision installation and welded joints, the system ensures long-term containment and prevents leaks, extending the life of the tank and improving operational safety.",
      image_url: "https://i.ibb.co/m5Qtckcy/Gemini-Generated-Image-n5nwlbn5nwlbn5nw.png",
      features: [
        "Chemical and effluent-resistant liner",
        "High tensile and flexural strength",
        "Leak-proof welded seams",
        "Corrosion prevention",
        "Industrial-grade long-lasting durability"
      ],
      applications: [
        "ETP tanks",
        "Industrial wastewater pits",
        "Chemical treatment tanks",
        "Process water containment",
        "Hazardous liquid storage areas"
      ]
    },
    {
      id: 16,
      title: "Road and Drain Lining",
      description: "Durable waterproof lining for roads, drains, and stormwater channels using rapid-setting concrete and protection systems.",
      full_description: "Our Road and Drain Lining Services offer a strong, waterproof, and erosion-resistant solution for protecting road surfaces and drainage structures. Using rapid-setting concrete and high-performance waterproofing systems, we ensure fast execution and long-term durability. These linings prevent seepage, cracks, and soil erosion, making them ideal for stormwater drains, roadside channels, culverts, and water diversion systems.",
      image_url: "https://i.ibb.co/QvjDRs1f/Gemini-Generated-Image-15bjhm15bjhm15bj.png",
      features: [
        "Waterproof and erosion-resistant lining",
        "Rapid-setting concrete application",
        "Prevents seepage and structural cracks",
        "Durable protection for outdoor conditions",
        "Ideal for road and drainage infrastructure"
      ],
      applications: [
        "Roadside drainage channels",
        "Stormwater drains",
        "Culverts and open canals",
        "Road protection and slope stabilization",
        "Infrastructure water diversion systems"
      ]
    }
  ],
  
  products: [
    {
      id: 9,
      title: "HDPE Geomembrane Liners",
      description: "High-quality HDPE geomembrane liners designed to provide superior waterproofing, chemical resistance, and long-term durability for industrial, environmental, and civil engineering projects.",
      full_description: "HDPE Geomembrane Liners are engineered containment solutions manufactured from High-Density Polyethylene, known for their strength, flexibility, and long life cycle. These liners serve as an impermeable barrier to prevent leakage, contamination, or seepage in water storage, waste management, industrial facilities, and environmental protection projects.\n\nDesigned to withstand extreme conditions, the liners offer excellent resistance to UV radiation, chemicals, punctures, and environmental stress. Available in both smooth and textured variants, they provide superior performance in slope stability, lining applications, and liquid containment systems. HDPE Geomembrane Liners are trusted across industries for their reliability, eco-safety, and cost-effectiveness.",
      images: "https://i.ibb.co/DHhhJvRt/Gemini-Generated-Image-yoj2uyyoj2uyyoj2.png",
      features: [
        "Seamless leak-proof spiral construction",
        "Excellent chemical and corrosion resistance",
        "Long-lasting and maintenance-free",
        "Lightweight yet highly durable"
      ],
      applications: [
        "Landfills and waste containment systems",
        "Water reservoirs and irrigation ponds",
        "Industrial wastewater and effluent storage",
        "Mining heap leach pads and tailing storage",
        "Canals, dams, and aquaculture pond lining"
      ]
    },
    {
      id: 10,
      title: "Tri-Planar HDPE Geonet",
      description: "A high-flow, tri-planar drainage geonet designed for leak detection, liquid movement, and gas venting in civil and environmental engineering applications.",
      full_description: "Tri-Planar HDPE Geonet is a high-performance drainage core made from high-density polyethylene. Unlike standard biaxial structures, this geonet features a rigid tri-planar design with strong vertical ribs, providing exceptional compressive resistance and long-term flow stability.\n\nGeonets are commonly combined with geotextiles or geomembranes to create integrated drainage and protection systems. They serve a critical role in landfill leak detection layers, gas venting, tunnel waterproofing, road drainage, and other civil engineering applications. The product ensures efficient fluid movement, prevents clogging, and provides long-term stability even under heavy loads.",
      images: "https://i.ibb.co/TqcxvvwW/Screenshot-2025-12-02-144304.png",
      features: [
        "Tri-planar structure for high long-term drainage flow",
        "Rigid ribs for excellent compressive strength",
        "Maintains drainage performance under heavy loads",
        "Durable, chemically resistant, and long-lasting"
      ],
      applications: [
        "Landfill leak detection and collection systems",
        "Drainage layer above or below geomembrane liners",
        "Gas venting and subsurface fluid transmission",
        "Retaining wall and backfill drainage",
        "Tunnel and underground waterproofing systems"
      ]
    },
    {
      id: 11,
      title: "Non-Woven Geotextile Fabric",
      description: "A durable, high-performance geotextile fabric designed for filtration, separation, reinforcement, and drainage in civil engineering and environmental applications.",
      full_description: "Non-Woven Geotextile Fabric is an engineered permeable textile used in construction and environmental projects for soil stabilization, filtration, drainage, and erosion control. It is commonly wrapped around drainage pipes to prevent soil intrusion while allowing water flow, ensuring efficient long-term drainage performance.\n\nManufactured from high-quality polypropylene or polyester synthetic fibers, the fabric is mechanically and thermally bonded to form a strong, uniform, single-layer structure. This product is available in a wide weight range—from 100 GSM to 2000 GSM—to suit different engineering requirements.\n\nDue to its exceptional tensile strength, high permeability, and durability, non-woven geotextile fabric is widely used in road construction, retaining structures, landfills, coastal protection, and geobag manufacturing.",
      images: "https://i.ibb.co/k2WC0HxX/Gemini-Generated-Image-wi6l8xwi6l8xwi6l.png",
      features: [
        "High permeability for efficient water flow and soil retention",
        "Excellent filtration and long-term drainage performance",
        "Durable, tear-resistant, and chemically stable",
        "Prevents soil mixing and improves structural stability",
        "UV and weather-resistant for long service life"
      ],
      applications: [
        "Road construction and embankment stabilization",
        "Highways and pavement separation",
        "Riverbank and erosion control",
        "Landfill geomembrane protection",
        "Drainage and soil stabilization in civil projects"
      ]
    },
    {
      id: 12,
      title: "Geotubes (Hydraulic Erosion Control & Land Reclamation Tubes)",
      description: "High-capacity engineered geotextile tubes designed for shoreline protection, land reclamation, dredged material containment, and erosion control in coastal and marine environments.",
      full_description: "Geotubes are high-strength geotextile containment systems commonly used in hydraulic engineering, coastal protection, and land reclamation projects. These large textile tubes are filled with dredged material such as sand, silt, or slurry, which dewaters naturally through the permeable fabric—leaving a solid, stable, and long-lasting structural mass.\n\nGeotubes are widely used to prevent shoreline erosion, rebuild damaged coastlines, protect riverbanks, and reclaim land lost to tidal action or waves. In large-scale coastal environments, they can even be used to restore or create new islands that are disappearing due to erosion or increased marine traffic.\n\nFor offshore or underwater installations, Geotubes can be positioned using steel frames and filled at controlled depths. Once filled, they may be left exposed or covered with sand, rocks, or protective coating depending on environmental and design specifications.\n\nEngineering design support is available for determining required tube size, seam strength, stacking configuration, filling rate, dewatering schedule, and estimated construction timeline.",
      images: "https://i.ibb.co/JWbt2TNN/Screenshot-2025-12-02-145331.png",
      features: [
        "Prevents shoreline and riverbank erosion",
        "High-strength geotextile suitable for marine and coastal environments",
        "Cost-effective alternative to stone or concrete sea walls",
        "Supports land reclamation and coastal restoration projects",
        "Compatible with dredged fill materials such as sand and slurry"
      ],
      applications: [
        "Shoreline protection",
        "Beach restoration and nourishment",
        "Land reclamation projects",
        "Riverbank and coastal erosion control",
        "Dredged material containment and dewatering"
      ]
    },
    {
      id: 13,
      title: "Geo Cells (Cellular Confinement System)",
      description: "A durable three-dimensional honeycomb structure designed to confine soil, improve load-bearing capacity, and prevent erosion in infrastructure and slope protection projects.",
      full_description: "Geo Cells, also known as Cellular Confinement Systems, are three-dimensional honeycomb-like polymer structures designed to reinforce and stabilize soils. When expanded and filled with sand, gravel, or soil, the cells restrict lateral movement and create a stiff and durable foundation layer. This results in increased soil stability, improved load distribution, and reduced erosion.\n\nGeo Cells are widely used in slope protection, retaining walls, load support for roads and railways, and ground reinforcement applications where high bearing capacity and long-term performance are required.",
      images: "https://i.ibb.co/spphxz4t/Gemini-Generated-Image-1tfsw01tfsw01tfs.png",
      features: [
        "Enhances soil strength and load-bearing capacity",
        "Prevents erosion and soil displacement",
        "Reduces required structural layer thickness",
        "Flexible and durable polymer construction",
        "Suitable for challenging and weak soil conditions"
      ],
      applications: [
        "Road and railway base reinforcement",
        "Slope and embankment stabilization",
        "Retaining wall backfill reinforcement",
        "Channel and shoreline erosion control",
        "Parking lots and heavy vehicle access roads"
      ]
    },
    {
      id: 15,
      title: "HDPE Scrubbers",
      description: "High-performance HDPE scrubbers designed for handling corrosive gases and chemical fumes with excellent durability, corrosion resistance, and long service life.",
      full_description: "HDPE Scrubbers are engineered gas treatment systems designed to remove harmful pollutants, fumes, and corrosive gases before they are released into the atmosphere. Manufactured using high-quality HDPE material and advanced fabrication techniques, these scrubbers offer excellent resistance to corrosive environments and demanding industrial applications.\n\nOur HDPE and PP spiral scrubbers are widely used in industries handling hazardous chemicals, fumes, and processing gases such as pharmaceuticals, dyes, fertilizers, steel plants, and more. Available in sizes ranging from 300mm to 3000mm, they support customized manufacturing based on airflow capacity, chemical type, and process requirements.\n\nThese scrubbers provide long operational life, low maintenance requirements, and cost-effective pollution control performance, meeting industrial safety and environmental standards.",
      images: "https://i.ibb.co/3ydTJSLz/Screenshot-2025-12-02-215027.png",
      features: [
        "Highly corrosion-resistant structure",
        "Durable and long-lasting material design",
        "Lightweight and easy to install",
        "Suitable for highly corrosive industrial environments",
        "Low maintenance and high operational efficiency"
      ],
      applications: [
        "Chemical and fertilizer plants",
        "Pharmaceutical manufacturing units",
        "Steel and metal processing plants",
        "Dyes and intermediates production",
        "Industrial exhaust gas scrubbing and pollution control"
      ]
    },
    {
      id: 16,
      title: "HDPE Spiral Tanks",
      description: "High-strength HDPE spiral tanks suitable for water storage and industrial applications, offering exceptional durability, chemical resistance, and long operational life.",
      full_description: "We manufacture and supply high-quality HDPE Spiral Tanks designed for industrial and commercial applications requiring safe storage of water, chemicals, and corrosive media. Built using advanced spiral-winding technology, these tanks provide superior structural strength, long service life, and resistance to hazardous chemicals.\n\nOur spiral tanks are available in vertical, horizontal, rectangular, and conical variants, with customizable dimensions, fittings, and accessories based on client requirements.",
      images: "https://i.ibb.co/xqdvFvF3/Screenshot-2025-12-02-220019.png",
      features: [
        "Completely Integrated",
        "Double Walled",
        "Durable",
        "Fireproof Certified",
        "Heat Resistant",
        "High Anti-Corrosion Properties",
        "Only virgin imported granules used",
        "Minimal maintenance",
        "Long service life (25-year design life)"
      ],
      applications: [
        "Bulk Drugs & Pharmaceuticals",
        "Chemical & Pollution Control",
        "Water & Wastewater Treatment",
        "Textile Industry",
        "Food Processing",
        "Pulp & Paper Industry",
        "Fertilizer Plants",
        "Oil & Gas / Petrochemicals",
        "Chemical Storage",
        "Transport Vessels",
        "Water Treatment Tanks"
      ]
    },
    {
      id: 17,
      title: "Geosynthetic Clay Liners (GCL)",
      description: "Geosynthetic Clay Liners (GCLs) are advanced waterproofing barriers made from natural sodium bentonite clay bonded between durable geotextiles. When hydrated, the clay swells to form a strong, self-sealing, low-permeability liner ideal for containment and environmental protection.",
      full_description: "Geosynthetic Clay Liners (GCLs) are needle-punched composite liners featuring a uniform layer of natural sodium bentonite clay enclosed between woven and non-woven geotextiles. Once hydrated under pressure, the bentonite expands to form an extremely low-permeability barrier equivalent to several feet of compacted clay. GCLs are widely used in waterproofing and containment systems due to their high sealing efficiency, easy installation, and environmental safety. They offer a reliable solution for landfills, reservoirs, industrial waste storage, and structural waterproofing.",
      images: "https://i.ibb.co/hF5dhcv1/Screenshot-2025-12-02-220351.png",
      features: [
        "Excellent leakage prevention",
        "Permanent waterproof sealing",
        "Self-healing and self-sealing capability",
        "Fast and easy installation",
        "Environment-friendly and safe"
      ],
      applications: [
        "Landfills and waste disposal sites",
        "Artificial lakes and reservoirs",
        "Oil storage and chemical containment fields",
        "Rooftop gardens and basement waterproofing",
        "Industrial wastewater and treatment facilities"
      ]
    },
    {
      id: 18,
      title: "HDPE Chemical Storage Tanks",
      description: "Durable and corrosion-resistant HDPE tanks designed for safe storage of chemicals, industrial liquids, and wastewater. Made using seamless spiral manufacturing for leak-proof and long-life performance.",
      full_description: "HDPE Chemical Storage Tanks are engineered to safely store corrosive and industrial liquids while offering exceptional durability and long-term performance. Manufactured using a seamless spiral winding process, these tanks eliminate welded joints, reducing leak risks and improving structural strength.\n\nThey are lightweight, highly chemical-resistant, maintenance-free, and suitable for harsh industrial environments. Ideal for industries needing reliable containment solutions with minimum maintenance and long operational life.",
      images: "https://i.ibb.co/My5Sg5Z4/Gemini-Generated-Image-75uhpw75uhpw75uh.png",
      features: [
        "Seamless spiral one-piece construction to prevent leakage",
        "High corrosion and chemical resistance",
        "Maintenance-free design with long operational life",
        "Lightweight yet strong and durable",
        "Wide service temperature resistance"
      ],
      applications: [
        "Chemical and pharmaceutical liquid storage",
        "Water and wastewater treatment systems",
        "Oil, gas, and petrochemical industries",
        "Fertilizer and food processing plants",
        "Industrial liquid transportation and storage"
      ]
    },
    {
      id: 19,
      title: "HDPE Square & Rectangular Storage Tanks",
      description: "Durable, leak-proof HDPE square and rectangular tanks designed for chemical storage, industrial processing, and wastewater handling. Lightweight, corrosion-resistant, and customizable for various industrial applications.",
      full_description: "HDPE Square & Rectangular Tanks are engineered using high-grade high-density polyethylene, offering exceptional strength, corrosion resistance, and long operational life. These tanks are designed to meet demanding storage needs across chemical, pharmaceutical, wastewater, and food industries.\n\nTheir seamless and rigid structure ensures leak-proof performance, while their modular flat-wall design allows efficient installation in confined spaces. These tanks can be manufactured with reinforcement frames, lids, nozzles, and accessories based on operational requirements. HDPE tanks are ideal for storing aggressive chemicals, acidic compounds, and process liquids where traditional metal tanks may corrode.",
      images: "https://i.ibb.co/XZgDkkgQ/Gemini-Generated-Image-up7hk8up7hk8up7h.png",
      features: [
        "Strong, rigid design suitable for industrial environments",
        "Corrosion and chemical resistance for aggressive liquids",
        "Leak-proof seamless construction ensures safety",
        "Lightweight and easy to install or relocate",
        "Customizable in size, fittings, and reinforcements"
      ],
      applications: [
        "Chemical and acid storage",
        "Water and wastewater treatment plants",
        "Pharmaceutical and food processing units",
        "Industrial processing and mixing tanks",
        "Effluent and sludge storage"
      ]
    }
  ],
  
  gallery: [
    {
      id: 1,
      title: "Industrial HDPE Pipe Network",
      description: "Complete HDPE pipe installation for industrial water management system",
      image_url: "/images/gallery1.jpg",
      category: "Pipes"
    },
    {
      id: 2,
      title: "Pond Lining Project",
      description: "HDPE sheet lining for large water conservation pond - 5000 sq.m",
      image_url: "/images/gallery2.jpg",
      category: "Sheets"
    },
    {
      id: 3,
      title: "Landfill Lining",
      description: "Geomembrane installation for waste management facility",
      image_url: "/images/gallery3.jpg",
      category: "Geomembranes"
    },
    {
      id: 4,
      title: "Agricultural Drainage",
      description: "HDPE pipe system for agricultural land drainage project",
      image_url: "/images/gallery4.jpg",
      category: "Pipes"
    },
    {
      id: 5,
      title: "Mining Solution",
      description: "Geosynthetic solutions for mining industry tailing dam",
      image_url: "/images/gallery6.jpg",
      category: "Solutions"
    },
    {
      id: 6,
      title: "Industrial Pipe Work",
      description: "HDPE pipe installation for chemical industry",
      image_url: "/images/gallery7.jpg",
      category: "Pipes"
    },
    {
      id: 7,
      title: "Water Tank Lining",
      description: "HDPE lining for industrial water storage tanks",
      image_url: "/images/gallery8.jpg",
      category: "Sheets"
    },
    {
      id: 8,
      title: "Reservoir Lining",
      description: "Water reservoir lining with HDPE sheets - 10,000 sq.m",
      image_url: "/images/gallery5.jpg",
      category: "Sheets"
    }
  ]
};
// ==================== END HARDCODED DATA ====================

function App() {
  // Initialize with HARDCODED data - INSTANT LOADING!
  const [company, setCompany] = useState(HARDCODED_DATA.company);
  const [services, setServices] = useState(HARDCODED_DATA.services);
  const [gallery, setGallery] = useState(HARDCODED_DATA.gallery);
  const [products, setProducts] = useState(HARDCODED_DATA.products);
  
  const [loading, setLoading] = useState(false); // Start with false
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [usingLiveData, setUsingLiveData] = useState(false);
  
  const mainContentRef = useRef(null);

  // Try to fetch live data in background (doesn't block UI)
  useEffect(() => {
    fetchLiveData();
    
    // Refresh every 30 minutes
    const refreshInterval = setInterval(fetchLiveData, 30 * 60 * 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  // Auto-scroll when service/product selected
  useEffect(() => {
    if (selectedService || selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (mainContentRef.current) {
        mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedService, selectedProduct]);

  const fetchLiveData = async () => {
    try {
      setError(null);
      console.log('🔄 Fetching live data from server...');

      const [companyResponse, servicesResponse, galleryResponse, productsResponse] = await Promise.all([
        axios.get(`${API_URL}company_details`, { timeout: 10000 }),
        axios.get(`${API_URL}services`, { timeout: 10000 }),
        axios.get(`${API_URL}gallery`, { timeout: 10000 }),
        axios.get(`${API_URL}products`, { timeout: 10000 })
      ]);

      console.log('✅ Live data fetched successfully');

      // Extract data properly (handle array responses)
      const companyData = Array.isArray(companyResponse.data) && companyResponse.data.length > 0 
        ? companyResponse.data[0] 
        : companyResponse.data;
        
      const servicesData = Array.isArray(servicesResponse.data) ? servicesResponse.data : [];
      const galleryData = Array.isArray(galleryResponse.data) ? galleryResponse.data : [];
      const productsData = Array.isArray(productsResponse.data) ? productsResponse.data : [];

      // Update with live data
      setCompany(companyData);
      setServices(servicesData);
      setGallery(galleryData);
      setProducts(productsData);
      setUsingLiveData(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setUsingLiveData(false), 3000);
      
    } catch (error) {
      console.error('❌ Error fetching live data:', error);
      setError('Could not connect to server. Showing saved data.');
      setUsingLiveData(false);
    }
  };

  const retryConnection = () => {
    setError(null);
    fetchLiveData();
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedProduct(null);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedService(null);
  };

  const handleBackToHome = () => {
    setSelectedService(null);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeaderNavigation = (sectionId) => {
    if (selectedService || selectedProduct) {
      handleBackToHome();
      setTimeout(() => {
        navigateToSection(sectionId);
      }, 300);
    } else {
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

  return (
    <div className="app-container">
      <Header company={company} onNavigate={handleHeaderNavigation} />
      
      {/* Status Banners */}
      {error && (
        <div className="app-error-banner">
          <p>{error}</p>
          <button onClick={retryConnection} className="app-retry-button">
            Retry Connection
          </button>
        </div>
      )}
      
      {usingLiveData && (
        <div className="app-success-banner">
          <p>✓ Connected to server - Showing live data</p>
        </div>
      )}

      {!usingLiveData && !error && (
        <div className="app-info-banner">
          <p>📌 Showing saved content - Syncing with server...</p>
        </div>
      )}
      
      <main className="app-main-content" ref={mainContentRef}>
        {selectedService && (
          <div className="app-detail-view-container">
            <ServiceDetail 
              service={selectedService} 
              onBack={handleBackToHome} 
            />
          </div>
        )}

        {selectedProduct && (
          <div className="app-detail-view-container">
            <ProductDetail 
              product={selectedProduct} 
              onBack={handleBackToHome} 
            />
          </div>
        )}

        <div className={`app-homepage-sections ${selectedService || selectedProduct ? 'app-hidden' : 'app-visible'}`}>
          <Hero company={company} />
          <About company={company} />
          <Services 
            services={services} 
            setSelectedService={handleServiceSelect} 
          />
          <Products 
            products={products} 
            setSelectedProduct={handleProductSelect} 
          />
          <Contact company={company} />
        </div>
      </main>

      <Footer company={company} />
    </div>
  );
}

export default App;
