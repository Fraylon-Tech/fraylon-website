import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for subscribing!");
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand-col">
                    <div className="footer-brand">
                        <div className="footer-logo-icon" />
                        <h3>FRAYLON</h3>
                        <div className="footer-tagline">Engineering the Future. Delivering Measurable Impact.</div>
                    </div>
                    <div className="newsletter-section">
                        <h3>Get Industry Insights</h3>
                        <div>Monthly strategies on AI, Cloud & Digital Transformation</div>
                        <form className="newsletter-form" onSubmit={handleSubscribe}>
                            <input type="email" placeholder="Enter your email" className="newsletter-input"
                            aria-label="Email address" />
                            <button type="submit" className="subscribe-btn" aria-label="Subscribe to newsletter">Join</button>
                        </form>
                    </div>
                    <div className="footer-contact-info-brand">
                        <p>Hyderabad, Telangana, India, 500001</p>
                        <p><a href="mailto:contact@fraylontech.com">contact@fraylontech.com</a></p>
                        <p><a href="tel:+919381617904">+91 93816 17904</a></p>
                        <p className="footer-certification">ISO 27001 Compliant | GDPR Ready</p>
                    </div>
                </div>

                <div className="footer-nav-col">
                    <h3>Services</h3>
                    <ul className="footer-links">
                        <li><Link to="/services/no-code">No Code Development</Link></li>
                        <li><Link to="/services/custom-dev">Custom Development</Link></li>
                        <li><Link to="/services/design">Design Services</Link></li>
                        <li><Link to="/services/marketing">Marketing Services</Link></li>
                        <li><Link to="/services/ai-data">AI & Data Science</Link></li>
                        <li><Link to="/services/mobile-app">Mobile App Development</Link></li>
                        <li><Link to="/services/zero-to-one">Zero To One</Link></li>
                    </ul>
                </div>

                <div className="footer-nav-col">
                    <h3>Solutions</h3>
                    <ul className="footer-links">
                        <li><Link to="/services/it-solutions">IT Solutions</Link></li>
                        <li><Link to="/solutions/cloud">Cloud Transformation</Link></li>
                        <li><Link to="/solutions/cyber">Cyber Security</Link></li>
                        <li><Link to="/solutions/sap">Enterprise ERP</Link></li>
                        <li><Link to="/solutions/data">Data Analytics</Link></li>
                    </ul>
                </div>

                <div className="footer-nav-col">
                    <h3>Industries</h3>
                    <ul className="footer-links">
                        <li><Link to="/ind/banking">Banking & Finance</Link></li>
                        <li><Link to="/ind/health">Healthcare</Link></li>
                        <li><Link to="/ind/manufacturing">Manufacturing</Link></li>
                        <li><Link to="/ind/retail">Retail & E-commerce</Link></li>
                        <li><Link to="/ind/energy">Energy & Utilities</Link></li>
                        <li><Link to="/ind/public">Public Sector</Link></li>
                    </ul>
                </div>

                <div className="footer-nav-col">
                    <h3>Company</h3>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/news">News & Media</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="copyright">
                    <p>&copy; {currentYear} Fraylon Technologies. All rights reserved.</p>
                </div>
                <div className="footer-bottom-links">
                    <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
                    <Link to="/terms-of-use" className="footer-bottom-link">Terms of Use</Link>
                    <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
                    <Link to="/cookie-settings" className="footer-bottom-link">Cookie Settings</Link>
                </div>
                 <div className="social-links">
                        <a href="https://www.linkedin.com/company/fraylontechnologies" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://x.com/FraylonT53985" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://www.instagram.com/fraylontechnologies/" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                    </div> 
            </div>
        </footer>
    );
};

export default Footer;
