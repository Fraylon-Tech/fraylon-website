import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { insightsData } from '../data/insightsData';
import './Insights.css';

const Insights = () => {
    // Select specific insights for the bento grid
    const mainInsight = insightsData.find(i => i.id === 1);
    const tallInsight = insightsData.find(i => i.id === 2);
    const smallInsight1 = insightsData.find(i => i.id === 3);
    const smallInsight2 = insightsData.find(i => i.id === 6);

    return (
        <section className="insights-section">
            <div className="insights-header">
                <div>
                    <span className="section-label">THOUGHT LEADERSHIP</span>
                    <h2 className="section-title">Perspectives on The Future</h2>
                </div>
                <Link to="/insights" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    View All Insights <FaArrowRight style={{ marginLeft: '10px' }} />
                </Link>
            </div>

            <div className="bento-grid">

                {/* Main Feature */}
                <motion.div
                    className="insight-large"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Link to={`/insights/${mainInsight?.id}`} className="insight-link-wrapper">
                        <img src={mainInsight?.image} alt={mainInsight?.title} className="insight-img" loading='lazy'/>
                        <div className="insight-content-overlay">
                            <span className="tag">{mainInsight?.category}</span>
                            <h3>{mainInsight?.title}</h3>
                            <p style={{ color: '#cbd5e1', maxWidth: '80%' }}>
                                {mainInsight?.excerpt}
                            </p>
                        </div>
                    </Link>
                </motion.div>

                {/* Tall Feature */}
                <motion.div
                    className="insight-tall"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <Link to={`/insights/${tallInsight?.id}`} className="insight-link-wrapper">
                        <img src={tallInsight?.image} alt={tallInsight?.title} className="insight-img" loading='lazy'/>
                        <div className="insight-content-overlay">
                            <span className="tag">{tallInsight?.category}</span>
                            <h3>{tallInsight?.title}</h3>
                        </div>
                    </Link>
                </motion.div>

                {/* Small Feature 1 */}
                <motion.div
                    className="insight-small"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link to={`/insights/${smallInsight1?.id}`} className="insight-link-wrapper">
                        <img src={smallInsight1?.image} alt={smallInsight1?.title} className="insight-img" loading='lazy'/>
                        <div className="insight-content-overlay-small">
                            <span className="tag">{smallInsight1?.category}</span>
                            <h3>{smallInsight1?.title}</h3>
                            <span className="date">{smallInsight1?.date} • {smallInsight1?.readTime}</span>
                        </div>
                    </Link>
                </motion.div>

                {/* Small Feature 2 */}
                <motion.div
                    className="insight-small"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Link to={`/insights/${smallInsight2?.id}`} className="insight-link-wrapper">
                        <img src={smallInsight2?.image} alt={smallInsight2?.title} className="insight-img" loading='lazy'/>
                        <div className="insight-content-overlay-small">
                            <span className="tag">{smallInsight2?.category}</span>
                            <h3>{smallInsight2?.title}</h3>
                            <span className="date">{smallInsight2?.date} • {smallInsight2?.readTime}</span>
                        </div>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default Insights;
