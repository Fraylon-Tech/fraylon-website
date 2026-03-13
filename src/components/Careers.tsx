import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Careers.css';

const Careers = () => {
    return (
        <section className="careers-section ">
            <div className="careers-container">

                <motion.div
                    className="career-content"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">JOIN US</span>
                    <h2>Be The Change <br /> You Want To Code.</h2>
                    <p>
                        At Fraylon, we don't just write code; we architect the future. Join a team of visionaries, engineers, and creators who are redefining the boundaries of possibility.
                    </p>

                    <div className="culture-features">
                        <div className="culture-item">
                            <h4><span className="accent-line"></span> Innovation First</h4>
                            <p>Work on bleeding-edge projects in AI, Quantum, and Cloud.</p>
                        </div>
                        <div className="culture-item">
                            <h4><span className="accent-line"></span> Global Impact</h4>
                            <p>Collaborate with cross-functional teams across 15 countries.</p>
                        </div>
                    </div>

                    <Link to="/careers">
                        <button className="btn btn-primary">
                            View Open Roles <FaArrowRight style={{ marginLeft: '10px' }} />
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    className="career-visuals"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="career-card-1">
                        <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team Brainstorming" className="career-img" loading='lazy'/>
                    </div>
                    <div className="career-card-2">
                        <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Coding Setup" className="career-img" loading='lazy'/>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Careers;
