import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./About.css";

const About = () => {
    return (
        <section className="about-section ">
            <div className="about-split">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="about-label">WHO WE ARE</span>
                    <h2 className="about-heading">Architects of the <br /> Digital Future</h2>
                    <p className="about-text">
                        Fraylon builds the infrastructure that powers modern digital systems. By combining advanced engineering with scalable cloud and AI technologies, we help organizations innovate faster, operate securely, and scale confidently in an evolving digital world.
                    </p>

                    <div className="stats-grid">
                        <div className="stat-block">
                            <h4>25+</h4>
                            <p>Years of Experience</p>
                        </div>
                        <div className="stat-block">
                            <h4>12k+</h4>
                            <p>Global Workforce</p>
                        </div>
                    </div>

                    <Link to="/leadership">
                        <button className="btn btn-primary" style={{ marginTop: '40px' }}>
                            Our Leadership <FaArrowRight style={{ marginLeft: '10px' }} />
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="about-accent-box"></div>
                    <img
                        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Corporate Meeting"
                        className="about-img"
                        loading='lazy'
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default About;