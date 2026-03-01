import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaWordpress, FaWix, FaShopify, FaMagento, FaCode, FaBrain, FaTools,
  FaLaptopCode, FaColumns, FaShoppingCart, FaBullhorn, FaSearch,
  FaHashtag, FaRocket, FaDraftingCompass, FaUserFriends, FaLightbulb, FaGlobe,
  FaPenNib, FaPalette, FaImage, FaMobile, FaLayerGroup, FaRobot, FaPaintBrush,
  FaCommentDots, FaCloud, FaDatabase, FaCogs, FaTruck, FaUsers, FaShieldAlt,
  FaNetworkWired, FaLock, FaBalanceScale, FaUniversity, FaUmbrella, FaCreditCard,
  FaChartLine, FaStore, FaHeartbeat, FaDna, FaPlane, FaIndustry, FaCar, FaBolt,
  FaFlask, FaBroadcastTower, FaFilm, FaMicrochip, FaLandmark, FaComment,
  FaInfoCircle, FaUserTie, FaHandshake, FaNewspaper,
  FaBars, FaTimes, FaChevronDown, FaChevronUp, FaChevronRight, FaLinkedin, FaFacebook, FaInstagram
} from 'react-icons/fa';
import { SiWebflow, SiFramer, SiSap, SiOracle } from 'react-icons/si';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (window.innerWidth > 991) {
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 991) {
      setActiveMenu(null);
    }
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileExpand = (menu: string) => {
    setMobileExpanded(mobileExpanded === menu ? null : menu);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to="/" className="logo" onClick={closeMenu}>
        <div className="logo-icon" />
        FRAYLON
      </Link>

      <div className="nav-links desktop-only">

        {/* SERVICES MEGA MENU */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="nav-link" style={activeMenu === 'services' ? { textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--color-primary)' } : {}}>Services</span>
          <div className={`mega-menu ${activeMenu === 'services' ? 'visible' : ''}`} onClick={closeMenu} data-lenis-prevent>
            <div className="mega-content-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>

              {/* Service Column 1 */}
              <div className="mega-col">
                <h4>No Code Development</h4>
                <Link to="/services/wordpress"><FaWordpress /> WordPress Development</Link>
                <Link to="/services/webflow"><SiWebflow /> Webflow Development</Link>
                <Link to="/services/wix"><FaWix /> Wix Development</Link>
                <Link to="/services/shopify"><FaShopify /> Shopify Development</Link>
                <Link to="/services/magento"><FaMagento /> Magento Development</Link>
                <Link to="/services/bubble"><FaComment /> Bubble.io Development</Link>
                <Link to="/services/framer"><SiFramer /> Framer Development</Link>
                <Link to="/services/dora"><FaPaintBrush /> Dora Development</Link>
                <Link to="/services/studio-ai"><FaRobot /> Studio AI Development</Link>

                <h4 style={{ marginTop: '20px' }}>IT Solutions</h4>
                <Link to="/services/digital-transformation"><FaCloud /> Digital Transformation</Link>
                <Link to="/services/staff-augmentation"><FaUserFriends /> IT Staff Augmentation</Link>
                <Link to="/services/tech-consulting"><FaLightbulb /> Technology Consulting</Link>
                <Link to="/services/maintenance"><FaTools /> Maintenance & Support</Link>
              </div>

              {/* Service Column 2 */}
              <div className="mega-col">
                <h4>Custom Development</h4>
                <Link to="/services/software-dev"><FaCode /> Software Development</Link>
                <Link to="/services/web-app-dev"><FaGlobe /> Web Application Development</Link>
                <Link to="/services/custom-cms"><FaLaptopCode /> Custom Website & CMS</Link>
                <Link to="/services/portals"><FaColumns /> Enterprise Portals & Dashboard</Link>
                <Link to="/services/ecommerce"><FaShoppingCart /> eCommerce Website Dev</Link>

                <h4 style={{ marginTop: '20px' }}>AI & Data Science</h4>
                <Link to="/services/ai-integration"><FaBrain /> AI Integration & Strategy</Link>
                <Link to="/services/ai-agents"><FaRobot /> AI Agents Development</Link>
                <Link to="/services/nlp"><FaCommentDots /> Natural Language Processing</Link>
              </div>

              {/* Service Column 3 */}
              <div className="mega-col">
                <h4>Design Services</h4>
                <Link to="/services/ui-ux"><FaPenNib /> UI/UX & Product Design</Link>
                <Link to="/services/branding"><FaPalette /> Branding & Visual Identity</Link>
                <Link to="/services/graphic-design"><FaImage /> Graphic Design</Link>

                <h4 style={{ marginTop: '20px' }}>Mobile App Development</h4>
                <Link to="/services/native-app"><FaMobile /> Native Mobile App</Link>
                <Link to="/services/hybrid-app"><FaLayerGroup /> Hybrid Mobile App</Link>
              </div>

              {/* Service Column 4 + Highlight */}
              <div className="mega-col">
                <h4>Marketing Services</h4>
                <Link to="/services/inbound-marketing"><FaBullhorn /> Inbound Marketing</Link>
                <Link to="/services/seo"><FaSearch /> SEO Services</Link>
                <Link to="/services/social-media"><FaHashtag /> Social Media & Paid Ads</Link>

                <h4 style={{ marginTop: '20px' }}>Zero To One</h4>
                <Link to="/services/mvp-development"><FaRocket /> MVP Development</Link>
                <Link to="/services/prototyping"><FaDraftingCompass /> Rapid Prototyping</Link>

                <div className="nav-highlight-card">
                  <div className="highlight-image">
                    <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Consultation" />
                  </div>
                  <div className="highlight-content">
                    <h5>Not sure what you need?</h5>
                    <p>Book a free 15-min engineering consult to discuss your architecture.</p>
                    <Link to="/contact" className="highlight-link">Book Consult <span style={{ marginLeft: '4px' }}>→</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SOLUTIONS MEGA MENU (Core + Industries) */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('solutions')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="nav-link" style={activeMenu === 'solutions' ? { textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--color-primary)' } : {}}>Solutions</span>
          <div className={`mega-menu ${activeMenu === 'solutions' ? 'visible' : ''}`} onClick={closeMenu} data-lenis-prevent>

            {/* CORE SOLUTIONS SECTION */}
            <div className="mega-section-header">Core Solutions</div>
            <div className="mega-content-grid" style={{ marginBottom: '50px' }}>
              <div className="mega-col">
                <h4>Digital Core</h4>
                <Link to="/solutions/cloud"><FaCloud /> Cloud Transformation</Link>
                <Link to="/solutions/data"><FaDatabase /> Data & Analytics</Link>
                <Link to="/solutions/ai"><FaBrain /> Artificial Intelligence</Link>
                <Link to="/solutions/automation"><FaCogs /> Intelligent Automation</Link>
              </div>
              <div className="mega-col">
                <h4>Enterprise</h4>
                <Link to="/solutions/sap"><SiSap /> SAP S/4HANA</Link>
                <Link to="/solutions/oracle"><SiOracle /> Oracle Cloud</Link>
                <Link to="/solutions/supply-chain"><FaTruck /> Smart Supply Chain</Link>
                <Link to="/solutions/hr"><FaUsers /> HR Transformation</Link>
              </div>
              <div className="mega-col">
                <h4>Security & Infra</h4>
                <Link to="/solutions/cyber"><FaShieldAlt /> Cybersecurity</Link>
                <Link to="/solutions/network"><FaNetworkWired /> Network Modernization</Link>
                <Link to="/solutions/cloud-sec"><FaLock /> Cloud Security</Link>
                <Link to="/solutions/grc"><FaBalanceScale /> Governance & Risk</Link>
              </div>
              {/* Featured Card */}
              <div className="mega-featured">
                <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg" alt="Featured Solution" />
                <div className="mega-featured-text">
                  <h5>Agentic AI is Here</h5>
                  <p>Discover our new autonomous enterprise platform.</p>
                </div>
              </div>
            </div>

            {/* INDUSTRIES SECTION */}
            <div className="mega-section-header">Industries</div>
            <div className="mega-content-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>

              <div className="mega-col">
                <h4>Financial Services</h4>
                <Link to="/ind/banking"><FaUniversity /> Banking & Capital Markets</Link>
                <Link to="/ind/insurance"><FaUmbrella /> Insurance</Link>
                <Link to="/ind/payments"><FaCreditCard /> Payments & Fintech</Link>
                <Link to="/ind/wealth"><FaChartLine /> Wealth Management</Link>
              </div>

              <div className="mega-col">
                <h4>Consumer & Health</h4>
                <Link to="/ind/retail"><FaStore /> Retail & Consumer Goods</Link>
                <Link to="/ind/health"><FaHeartbeat /> Healthcare Payers & Providers</Link>
                <Link to="/ind/life-sci"><FaDna /> Life Sciences</Link>
                <Link to="/ind/travel"><FaPlane /> Travel, Transport & Logistics</Link>
              </div>

              <div className="mega-col">
                <h4>Industrial & Energy</h4>
                <Link to="/ind/manufacturing"><FaIndustry /> Industrial Manufacturing</Link>
                <Link to="/ind/auto"><FaCar /> Automotive</Link>
                <Link to="/ind/energy"><FaBolt /> Energy, Resources & Utilities</Link>
                <Link to="/ind/chem"><FaFlask /> Chemicals & Agriculture</Link>
              </div>

              <div className="mega-col">
                <h4>TMT & Public</h4>
                <Link to="/ind/telecom"><FaBroadcastTower /> Telecommunications</Link>
                <Link to="/ind/media"><FaFilm /> Media & Entertainment</Link>
                <Link to="/ind/hitech"><FaMicrochip /> High Tech & Semiconductors</Link>
                <Link to="/ind/public"><FaLandmark /> Public Sector & Education</Link>
              </div>
            </div>

          </div>
        </div>

        {/* COMPANY MEGA MENU */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('company')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="nav-link" style={activeMenu === 'company' ? { textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--color-primary)' } : {}}>Company</span>
          <div className={`mega-menu ${activeMenu === 'company' ? 'visible' : ''}`} onClick={closeMenu} data-lenis-prevent>
            <div className="mega-content-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr 1.5fr' }}>

              <div className="mega-col">
                <h4>Who We Are</h4>
                <Link to="/about"><FaInfoCircle /> About Fraylon</Link>
                <Link to="/leadership"><FaUserTie /> Leadership Team</Link>
                <Link to="/partners"><FaHandshake /> Strategic Partners</Link>
                <Link to="/news"><FaNewspaper /> News & Media</Link>
              </div>

              <div className="mega-col">
                {/* Spacer or additional links if needed */}
              </div>

              <div className="mega-col">
                {/* Spacer */}
              </div>

              {/* Featured Card */}
              <div className="mega-featured">
                <img src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Team" />
                <div className="mega-featured-text">
                  <h5>Join the Vision</h5>
                  <p>Explore career opportunities and become part of our journey.</p>
                  <Link to="/careers" style={{ color: '#fff', marginTop: '10px', textDecoration: 'underline' }}>View Careers</Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Link to="/insights" className="nav-link" onClick={closeMenu}>Insights</Link>
        <Link to="/careers" className="nav-link" onClick={closeMenu}>Careers</Link>
      </div>

      <div className="nav-actions">
        <Link to="/contact" className="desktop-only"><button className="nav-cta">Contact Us</button></Link>
        <button className="hamburger-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="mobile-menu-topbar">
              <button className="mobile-close-btn" onClick={closeMenu}>
                <FaTimes />
              </button>
              <div className="mobile-lang-selector">
                <FaGlobe style={{ marginRight: '6px' }} /> India <FaChevronDown style={{ fontSize: '0.7em', marginLeft: '6px' }} />
              </div>
            </div>

            <div className="mobile-menu-content-wrapper">
              <div className="mobile-menu-content">

                <div className="mobile-accordion">
                  <div className={`mobile-accordion-header ${mobileExpanded === 'services' ? 'expanded' : ''}`} onClick={() => toggleMobileExpand('services')}>
                    <span>Services</span>
                    <FaChevronRight className="mobile-chevron" />
                  </div>
                  <AnimatePresence>
                    {mobileExpanded === 'services' && (
                      <motion.div
                        className="mobile-accordion-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <Link to="/services/software-dev" onClick={closeMenu}>Custom Software</Link>
                        <Link to="/services/ai-integration" onClick={closeMenu}>AI & Data</Link>
                        <Link to="/services/ui-ux" onClick={closeMenu}>Design</Link>
                        <Link to="/services/digital-transformation" onClick={closeMenu}>IT Solutions</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mobile-accordion">
                  <div className={`mobile-accordion-header ${mobileExpanded === 'solutions' ? 'expanded' : ''}`} onClick={() => toggleMobileExpand('solutions')}>
                    <span>Solutions</span>
                    <FaChevronRight className="mobile-chevron" />
                  </div>
                  <AnimatePresence>
                    {mobileExpanded === 'solutions' && (
                      <motion.div
                        className="mobile-accordion-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <Link to="/solutions/cloud" onClick={closeMenu}>Cloud</Link>
                        <Link to="/solutions/ai" onClick={closeMenu}>AI Solutions</Link>
                        <Link to="/ind/banking" onClick={closeMenu}>Industries</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mobile-accordion">
                  <div className={`mobile-accordion-header ${mobileExpanded === 'company' ? 'expanded' : ''}`} onClick={() => toggleMobileExpand('company')}>
                    <span>Company</span>
                    <FaChevronRight className="mobile-chevron" />
                  </div>
                  <AnimatePresence>
                    {mobileExpanded === 'company' && (
                      <motion.div
                        className="mobile-accordion-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <Link to="/about" onClick={closeMenu}>About Us</Link>
                        <Link to="/leadership" onClick={closeMenu}>Leadership</Link>
                        <Link to="/partners" onClick={closeMenu}>Partners</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mobile-accordion">
                  <Link to="/insights" className="mobile-accordion-header" style={{ textDecoration: 'none' }} onClick={closeMenu}>
                    <span>Insights</span>
                    <FaChevronRight className="mobile-chevron" />
                  </Link>
                </div>

                <div className="mobile-accordion">
                  <Link to="/careers" className="mobile-accordion-header" style={{ textDecoration: 'none' }} onClick={closeMenu}>
                    <span>Careers</span>
                    <FaChevronRight className="mobile-chevron" />
                  </Link>
                </div>

                <div className="mobile-menu-spacer"></div>

                <div className="mobile-secondary-links">
                  <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                  <Link to="/careers" onClick={closeMenu}>Careers</Link>
                  <Link to="/about" onClick={closeMenu}>Locations</Link>
                </div>

                <div className="mobile-social-icons">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
