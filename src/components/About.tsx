import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section className="about-section w-full px-4 md:px-8 overflow-x-hidden">
            <div className="about-split">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                </motion.div>
                    <span className="about-label">WHO WE ARE</span>
                    <h2 className="about-heading">Architects of the <br /> Digital Future</h2>
                    <p className="about-text">
                        Fraylon Technologies is a global leader in next-generation digital services and consulting. We enable clients in more than 20 countries to navigate their digital transformation.
                    </p>
                    <p className="about-text">
                        With over three decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey. We do it by enabling the enterprise with an AI-powered core that helps prioritize the execution of change.
                    </p>

                        <motion.div
                        className="stats-grid"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        >
                        
                        <div className="stat-block">
                            <h4>25+</h4>
                            <p>Years of Experience</p>
                        </div>
                        <div className="stat-block">
                            <h4>12k+</h4>
                            <p>Global Workforce</p>
                        </div>
                    

                    <Link to="/leadership">
                    <motion.button
                        className="btn btn-primary"
                        style={{ marginTop: '40px' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Our Leadership <FaArrowRight style={{ marginLeft: '10px' }} />
                    </motion.button>
                    </Link>
                </motion.div>

                        <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                    <div className="about-accent-box"></div>
                    <img
                        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                        alt="Corporate Meeting"
                        className="about-img"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
