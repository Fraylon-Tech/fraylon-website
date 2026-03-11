import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import './Industries.css';
import { industriesData } from '../data/industriesData';

const displayKeys = ['public', 'banking', 'healthcare', 'retail', 'manufacturing', 'telecom', 'travel', 'hitech'];

const Industries = () => {
    const [activeKey, setActiveKey] = useState('public');
    const activeIndustry = industriesData[activeKey];

    return (
        <section className="industries-section">
            {/* Mobile layout: visible only on smaller screens */}
            <div className="industries-mobile">
                <div className="ind-mobile-header">
                    <span className="ind-overline">Industries</span>
                    <h2 className="ind-mobile-title">End-to-End Domain Reach</h2>
                </div>
                <div className="ind-mobile-pills">
                    {displayKeys.map((key) => {
                        const item = industriesData[key];
                        const isActive = key === activeKey;
                        return (
                            <button
                                key={key}
                                type="button"
                                className={`ind-mobile-pill ${isActive ? 'active' : ''}`}
                                onClick={() => setActiveKey(key)}
                            >
                                {item.title}
                            </button>
                        );
                    })}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeKey}
                        className="ind-mobile-content"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="ind-mobile-image-wrap">
                            <img src={activeIndustry.image} alt={activeIndustry.title} loading="lazy" />
                            <div className="ind-image-overlay" />
                        </div>
                        <h3 className="ind-mobile-heading">{activeIndustry.title}</h3>
                        <p className="ind-mobile-desc">{activeIndustry.description}</p>
                        <ul className="ind-cap-list ind-mobile-caps">
                            {activeIndustry.solutions.slice(0, 4).map((sol, idx) => (
                                <li key={idx}>
                                    <FaCheckCircle className="ind-check-icon" />
                                    <span>{sol.title}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to={`/ind/${activeKey}`}>
                            <button type="button" className="btn-deep-dive">Deep Dive Solutions</button>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="industries-wrapper">
                {/* Left Column: Image */}
                <div className="ind-column ind-image-col">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeKey}
                            className="ind-hero-image-wrapper"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Use a high-quality city/industry image. 
                                Ideally dynamic based on industry, but using a generic premium one for now if specific images aren't available.
                                The screenshot shows a city view.
                             */}
                            <img
                                src={activeIndustry.image}
                                alt={activeIndustry.title}
                                className="ind-hero-bg"
                                loading='lazy'
                            />
                            <div className="ind-image-overlay"></div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="ind-image-content">
                        <div className="ind-quote-box">
                            <p>
                                "Our {activeIndustry.title} practice leverages over a decade of technical R&D to solve complex industry-specific hurdles."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle Column: Content */}
                <div className="ind-column ind-content-col">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeKey}
                            className="ind-content-inner"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="ind-overline">{activeIndustry.tagline}</span>
                            <h2 className="ind-title">{activeIndustry.title}</h2>
                            <p className="ind-description">{activeIndustry.description}</p>

                            <div className="ind-capabilities-section">
                                <h4 className="ind-cap-title">STRATEGIC CAPABILITIES</h4>
                                <ul className="ind-cap-list">
                                    {activeIndustry.solutions.map((sol, idx) => (
                                        <li key={idx}>
                                            <FaCheckCircle className="ind-check-icon" />
                                            <span>{sol.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to={`/ind/${activeKey}`}>
                                <button className="btn-deep-dive">
                                    DEEP DIVE SOLUTIONS
                                </button>
                            </Link>

                            <div className="ind-stats-row">
                                {activeIndustry.stats.slice(0, 2).map((stat, i) => (
                                    <div key={i} className="ind-stat-block">
                                        <div className="stat-val">{stat.value}</div>
                                        <div className="stat-lbl">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Column: Navigation List */}
                <div className="ind-column ind-list-col">
                    <div className="ind-list-header">
                        <h2>End-to-End Domain Reach.</h2>
                    </div>
                    <div className="ind-nav-list">
                        {displayKeys.map((key) => {
                            const item = industriesData[key];
                            const isActive = key === activeKey;
                            const Icon = item.icon;

                            return (
                                <div
                                    key={key}
                                    className={`ind-nav-item ${isActive ? 'active' : ''}`}
                                    onClick={() => setActiveKey(key)}
                                    onMouseEnter={() => setActiveKey(key)}
                                >
                                    <div className="ind-nav-icon-wrapper">
                                        {isActive && <FaArrowLeft className="ind-active-arrow" />}
                                    </div>
                                    <div className="ind-nav-text">
                                        <span className="ind-nav-title">{item.title}</span>
                                        <span className="ind-nav-tagline">{item.tagline}</span>
                                    </div>
                                    <div className="ind-nav-icon-right">
                                        <Icon />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
