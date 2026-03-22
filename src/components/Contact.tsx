import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-cta-section">
            <div className="cta-bg-graphic"></div>
            <div className="cta-wrapper">
                <div className="cta-content">
                    <h2>Ready to Build What&apos;s Next?</h2>
                    <p>
                        Partner with Fraylon to design, build, and scale the digital infrastructure powering tomorrow&apos;s technology.
                    </p>
                </div>
                <div className="cta-actions">
                    <Link to="/contact">
                        <button className="btn btn-primary">
                            Start a Project
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn btn-outline">
                            Contact Us <FaArrowRight className="btn-icon-right" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;
