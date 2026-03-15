import React from 'react';
import './Products.css';

const Products = ({ products, setSelectedProduct }) => {
  // Sample data
  const sampleProducts = [{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befa4"
  },
  "id": 9,
  "title": "HDPE Geomembrane Liners",
  "description": "HDPE Geomembrane Liners are engineered containment solutions manufactured from High-Density Polyethylene, known for their strength, flexibility, and long life cycle. These liners serve as an impermeable barrier to prevent leakage, contamination, or seepage in water storage, waste management, industrial facilities, and environmental protection projects.\n\nDesigned to withstand extreme conditions, the liners offer excellent resistance to UV radiation, chemicals, punctures, and environmental stress. Available in both smooth and textured variants, they provide superior performance in slope stability, lining applications, and liquid containment systems. HDPE Geomembrane Liners are trusted across industries for their reliability, eco-safety, and cost-effectiveness.",
  "short_description": "High-quality HDPE geomembrane liners designed to provide superior waterproofing, chemical resistance, and long-term durability for industrial, environmental, and civil engineering projects.",
  "images": "https://i.ibb.co/DHhhJvRt/Gemini-Generated-Image-yoj2uyyoj2uyyoj2.png",
  "features": "[\r\n  \"Seamless leak-proof spiral construction\",\r\n  \"Excellent chemical and corrosion resistance\",\r\n  \"Long-lasting and maintenance-free\",\r\n  \"Lightweight yet highly durable\"\r\n]\r\n",
  "applications": "[\r\n  \"Landfills and waste containment systems\",\r\n  \"Water reservoirs and irrigation ponds\",\r\n  \"Industrial wastewater and effluent storage\",\r\n  \"Mining heap leach pads and tailing storage\",\r\n  \"Canals, dams, and aquaculture pond lining\"\r\n]\r\n",
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 10:16:35"
},
{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befa5"
  },
  "id": 10,
  "title": "Tri-Planar HDPE Geonet",
  "description": "Tri-Planar HDPE Geonet is a high-performance drainage core made from high-density polyethylene. Unlike standard biaxial structures, this geonet features a rigid tri-planar design with strong vertical ribs, providing exceptional compressive resistance and long-term flow stability.\n\nGeonets are commonly combined with geotextiles or geomembranes to create integrated drainage and protection systems. They serve a critical role in landfill leak detection layers, gas venting, tunnel waterproofing, road drainage, and other civil engineering applications. The product ensures efficient fluid movement, prevents clogging, and provides long-term stability even under heavy loads.",
  "short_description": "A high-flow, tri-planar drainage geonet designed for leak detection, liquid movement, and gas venting in civil and environmental engineering applications.",
  "images": "https://i.ibb.co/TqcxvvwW/Screenshot-2025-12-02-144304.png",
  "features": "[\r\n  \"Tri-planar structure for high long-term drainage flow\",\r\n  \"Rigid ribs for excellent compressive strength\",\r\n  \"Maintains drainage performance under heavy loads\",\r\n  \"Durable, chemically resistant, and long-lasting\"\r\n]\r\n",
  "applications": "[\r\n  \"Landfill leak detection and collection systems\",\r\n  \"Drainage layer above or below geomembrane liners\",\r\n  \"Gas venting and subsurface fluid transmission\",\r\n  \"Retaining wall and backfill drainage\",\r\n  \"Tunnel and underground waterproofing systems\"\r\n]\r\n",
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 11:23:40"
},
{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befa6"
  },
  "id": 11,
  "title": "Non-Woven Geotextile Fabric",
  "description": "Non-Woven Geotextile Fabric is an engineered permeable textile used in construction and environmental projects for soil stabilization, filtration, drainage, and erosion control. It is commonly wrapped around drainage pipes to prevent soil intrusion while allowing water flow, ensuring efficient long-term drainage performance.\n\nManufactured from high-quality polypropylene or polyester synthetic fibers, the fabric is mechanically and thermally bonded to form a strong, uniform, single-layer structure. This product is available in a wide weight range—from 100 GSM to 2000 GSM—to suit different engineering requirements.\n\nDue to its exceptional tensile strength, high permeability, and durability, non-woven geotextile fabric is widely used in road construction, retaining structures, landfills, coastal protection, and geobag manufacturing.",
  "short_description": "A durable, high-performance geotextile fabric designed for filtration, separation, reinforcement, and drainage in civil engineering and environmental applications.",
  "images": "https://i.ibb.co/k2WC0HxX/Gemini-Generated-Image-wi6l8xwi6l8xwi6l.png",
  "features": "[\r\n  \"High permeability for efficient water flow and soil retention\",\r\n  \"Excellent filtration and long-term drainage performance\",\r\n  \"Durable, tear-resistant, and chemically stable\",\r\n  \"Prevents soil mixing and improves structural stability\",\r\n  \"UV and weather-resistant for long service life\"\r\n]\r\n",
  "applications": "[\r\n  \"Road construction and embankment stabilization\",\r\n  \"Highways and pavement separation\",\r\n  \"Riverbank and erosion control\",\r\n  \"Landfill geomembrane protection\",\r\n  \"Drainage and soil stabilization in civil projects\"\r\n]\r\n",
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 11:33:32"
},
{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befa7"
  },
  "id": 12,
  "title": "Geotubes (Hydraulic Erosion Control & Land Reclamation Tubes)",
  "description": "Geotubes are high-strength geotextile containment systems commonly used in hydraulic engineering, coastal protection, and land reclamation projects. These large textile tubes are filled with dredged material such as sand, silt, or slurry, which dewaters naturally through the permeable fabric—leaving a solid, stable, and long-lasting structural mass.\n\nGeotubes are widely used to prevent shoreline erosion, rebuild damaged coastlines, protect riverbanks, and reclaim land lost to tidal action or waves. In large-scale coastal environments, they can even be used to restore or create new islands that are disappearing due to erosion or increased marine traffic.\n\nFor offshore or underwater installations, Geotubes can be positioned using steel frames and filled at controlled depths. Once filled, they may be left exposed or covered with sand, rocks, or protective coating depending on environmental and design specifications.\n\nEngineering design support is available for determining required tube size, seam strength, stacking configuration, filling rate, dewatering schedule, and estimated construction timeline.",
  "short_description": "High-capacity engineered geotextile tubes designed for shoreline protection, land reclamation, dredged material containment, and erosion control in coastal and marine environments.",
  "images": "https://i.ibb.co/JWbt2TNN/Screenshot-2025-12-02-145331.png",
  "features": "[\r\n  \"Prevents shoreline and riverbank erosion\",\r\n  \"High-strength geotextile suitable for marine and coastal environments\",\r\n  \"Cost-effective alternative to stone or concrete sea walls\",\r\n  \"Supports land reclamation and coastal restoration projects\",\r\n  \"Compatible with dredged fill materials such as sand and slurry\"\r\n]\r\n",
  "applications": "[\r\n  \"Shoreline protection\",\r\n  \"Beach restoration and nourishment\",\r\n  \"Land reclamation projects\",\r\n  \"Riverbank and coastal erosion control\",\r\n  \"Dredged material containment and dewatering\"\r\n]\r\n",
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 11:38:46"
},
{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befa8"
  },
  "id": 13,
  "title": "Geo Cells (Cellular Confinement System)",
  "description": "Geo Cells, also known as Cellular Confinement Systems, are three-dimensional honeycomb-like polymer structures designed to reinforce and stabilize soils. When expanded and filled with sand, gravel, or soil, the cells restrict lateral movement and create a stiff and durable foundation layer. This results in increased soil stability, improved load distribution, and reduced erosion.\n\nGeo Cells are widely used in slope protection, retaining walls, load support for roads and railways, and ground reinforcement applications where high bearing capacity and long-term performance are required.",
  "short_description": "A durable three-dimensional honeycomb structure designed to confine soil, improve load-bearing capacity, and prevent erosion in infrastructure and slope protection projects.",
  "images": "https://i.ibb.co/spphxz4t/Gemini-Generated-Image-1tfsw01tfsw01tfs.png",
  "features": "[\r\n  \"Enhances soil strength and load-bearing capacity\",\r\n  \"Prevents erosion and soil displacement\",\r\n  \"Reduces required structural layer thickness\",\r\n  \"Flexible and durable polymer construction\",\r\n  \"Suitable for challenging and weak soil conditions\"\r\n]\r\n",
  "applications": "[\r\n  \"Road and railway base reinforcement\",\r\n  \"Slope and embankment stabilization\",\r\n  \"Retaining wall backfill reinforcement\",\r\n  \"Channel and shoreline erosion control\",\r\n  \"Parking lots and heavy vehicle access roads\"\r\n]\r\n",
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 11:43:18"
},
{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befa9"
  },
  "id": 15,
  "title": "HDPE Scrubbers",
  "description": "HDPE Scrubbers are engineered gas treatment systems designed to remove harmful pollutants, fumes, and corrosive gases before they are released into the atmosphere. Manufactured using high-quality HDPE material and advanced fabrication techniques, these scrubbers offer excellent resistance to corrosive environments and demanding industrial applications.\n\nOur HDPE and PP spiral scrubbers are widely used in industries handling hazardous chemicals, fumes, and processing gases such as pharmaceuticals, dyes, fertilizers, steel plants, and more. Available in sizes ranging from 300mm to 3000mm, they support customized manufacturing based on airflow capacity, chemical type, and process requirements.\n\nThese scrubbers provide long operational life, low maintenance requirements, and cost-effective pollution control performance, meeting industrial safety and environmental standards.",
  "short_description": "High-performance HDPE scrubbers designed for handling corrosive gases and chemical fumes with excellent durability, corrosion resistance, and long service life.",
  "images": "https://i.ibb.co/3ydTJSLz/Screenshot-2025-12-02-215027.png",
  "features": "[\r\n  \"Highly corrosion-resistant structure\",\r\n  \"Durable and long-lasting material design\",\r\n  \"Lightweight and easy to install\",\r\n  \"Suitable for highly corrosive industrial environments\",\r\n  \"Low maintenance and high operational efficiency\"\r\n]\r\n",
  "applications": "[\r\n  \"Chemical and fertilizer plants\",\r\n  \"Pharmaceutical manufacturing units\",\r\n  \"Steel and metal processing plants\",\r\n  \"Dyes and intermediates production\",\r\n  \"Industrial exhaust gas scrubbing and pollution control\"\r\n]\r\n",
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 11:47:48"
},
{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befaa"
  },
  "id": 16,
  "title": "HDPE Spiral Tanks",
  "description": "We manufacture and supply high-quality HDPE Spiral Tanks designed for industrial and commercial applications requiring safe storage of water, chemicals, and corrosive media. Built using advanced spiral-winding technology, these tanks provide superior structural strength, long service life, and resistance to hazardous chemicals.\n\nOur spiral tanks are available in vertical, horizontal, rectangular, and conical variants, with customizable dimensions, fittings, and accessories based on client requirements.",
  "short_description": "High-strength HDPE spiral tanks suitable for water storage and industrial applications, offering exceptional durability, chemical resistance, and long operational life.",
  "images": "https://i.ibb.co/xqdvFvF3/Screenshot-2025-12-02-220019.png",
  "features": "[\r\n  \"Completely Integrated\",\r\n  \"Double Walled\",\r\n  \"Durable\",\r\n  \"Fireproof Certified\",\r\n  \"Heat Resistant\",\r\n  \"High Anti-Corrosion Properties\",\r\n  \"Only virgin imported granules used\",\r\n  \"Minimal maintenance\",\r\n  \"Long service life (25-year design life)\"\r\n]\r\n",
  "applications": "[\r\n  \"Bulk Drugs & Pharmaceuticals\",\r\n  \"Chemical & Pollution Control\",\r\n  \"Water & Wastewater Treatment\",\r\n  \"Textile Industry\",\r\n  \"Food Processing\",\r\n  \"Pulp & Paper Industry\",\r\n  \"Fertilizer Plants\",\r\n  \"Oil & Gas / Petrochemicals\",\r\n  \"Chemical Storage\",\r\n  \"Transport Vessels\",\r\n  \"Water Treatment Tanks\"\r\n]\r\n",
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 11:50:44"
},
{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befab"
  },
  "id": 17,
  "title": "Geosynthetic Clay Liners (GCL)",
  "description": "Geosynthetic Clay Liners (GCLs) are needle-punched composite liners featuring a uniform layer of natural sodium bentonite clay enclosed between woven and non-woven geotextiles. Once hydrated under pressure, the bentonite expands to form an extremely low-permeability barrier equivalent to several feet of compacted clay. GCLs are widely used in waterproofing and containment systems due to their high sealing efficiency, easy installation, and environmental safety. They offer a reliable solution for landfills, reservoirs, industrial waste storage, and structural waterproofing.",
  "short_description": "Geosynthetic Clay Liners (GCLs) are advanced waterproofing barriers made from natural sodium bentonite clay bonded between durable geotextiles. When hydrated, the clay swells to form a strong, self-sealing, low-permeability liner ideal for containment and environmental protection.",
  "images": "https://i.ibb.co/hF5dhcv1/Screenshot-2025-12-02-220351.png",
  "features": [
    "Excellent leakage prevention",
    "Permanent waterproof sealing",
    "Self-healing and self-sealing capability",
    "Fast and easy installation",
    "Environment-friendly and safe"
  ],
  "applications": [
    "Landfills and waste disposal sites",
    "Artificial lakes and reservoirs",
    "Oil storage and chemical containment fields",
    "Rooftop gardens and basement waterproofing",
    "Industrial wastewater and treatment facilities"
  ],
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 12:04:49"
},
{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befac"
  },
  "id": 18,
  "title": "HDPE Chemical Storage Tanks",
  "description": "HDPE Chemical Storage Tanks are engineered to safely store corrosive and industrial liquids while offering exceptional durability and long-term performance. Manufactured using a seamless spiral winding process, these tanks eliminate welded joints, reducing leak risks and improving structural strength.\n\nThey are lightweight, highly chemical-resistant, maintenance-free, and suitable for harsh industrial environments. Ideal for industries needing reliable containment solutions with minimum maintenance and long operational life.",
  "short_description": "Durable and corrosion-resistant HDPE tanks designed for safe storage of chemicals, industrial liquids, and wastewater. Made using seamless spiral manufacturing for leak-proof and long-life performance.",
  "images": "https://i.ibb.co/My5Sg5Z4/Gemini-Generated-Image-75uhpw75uhpw75uh.png",
  "features": "[\r\n  \"Seamless spiral one-piece construction to prevent leakage\",\r\n  \"High corrosion and chemical resistance\",\r\n  \"Maintenance-free design with long operational life\",\r\n  \"Lightweight yet strong and durable\",\r\n  \"Wide service temperature resistance\"\r\n]\r\n",
  "applications": "[\r\n  \"Chemical and pharmaceutical liquid storage\",\r\n  \"Water and wastewater treatment systems\",\r\n  \"Oil, gas, and petrochemical industries\",\r\n  \"Fertilizer and food processing plants\",\r\n  \"Industrial liquid transportation and storage\"\r\n]\r\n",
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 12:13:52"
},
{
  "_id": {
    "$oid": "6975c5c59b1f5f0b325befad"
  },
  "id": 19,
  "title": "HDPE Square & Rectangular Storage Tanks",
  "description": "HDPE Square & Rectangular Tanks are engineered using high-grade high-density polyethylene, offering exceptional strength, corrosion resistance, and long operational life. These tanks are designed to meet demanding storage needs across chemical, pharmaceutical, wastewater, and food industries.\n\nTheir seamless and rigid structure ensures leak-proof performance, while their modular flat-wall design allows efficient installation in confined spaces. These tanks can be manufactured with reinforcement frames, lids, nozzles, and accessories based on operational requirements. HDPE tanks are ideal for storing aggressive chemicals, acidic compounds, and process liquids where traditional metal tanks may corrode.",
  "short_description": "Durable, leak-proof HDPE square and rectangular tanks designed for chemical storage, industrial processing, and wastewater handling. Lightweight, corrosion-resistant, and customizable for various industrial applications.",
  "images": "https://i.ibb.co/XZgDkkgQ/Gemini-Generated-Image-up7hk8up7hk8up7h.png",
  "features": "[\r\n  \"Strong, rigid design suitable for industrial environments\",\r\n  \"Corrosion and chemical resistance for aggressive liquids\",\r\n  \"Leak-proof seamless construction ensures safety\",\r\n  \"Lightweight and easy to install or relocate\",\r\n  \"Customizable in size, fittings, and reinforcements\"\r\n]\r\n",
  "applications": "[\r\n  \"Chemical and acid storage\",\r\n  \"Water and wastewater treatment plants\",\r\n  \"Pharmaceutical and food processing units\",\r\n  \"Industrial processing and mixing tanks\",\r\n  \"Effluent and sludge storage\"\r\n]\r\n",
  "in_stock": 1,
  "is_featured": 0,
  "created_at": "2025-11-23 14:50:27"
}];

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
