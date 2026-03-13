import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const slides = [
    {
        id: '01',
        tag: "FEATURED INSIGHT",
        headlinePrefix: "Resilience",
        highlight: "Motion.",
        lead: "How legacy enterprises are outpacing digital natives by adopting agentic workflows and vertical cloud infrastructure.",
        btnText: "Read the Report",
        btnLink: "/insights",
        links: [
            { text: "Cloud Solutions", url: "/services/digital-transformation" },
            { text: "AI Governance", url: "/services/ai-integration" }
        ],
        nextTitle: "Sustainable Banking Infrastructure",
        video: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
    },
    {
        id: '02',
        tag: "TECH STRATEGY",
        headlinePrefix: "Digital",
        highlight: "Evolution.",
        lead: "Modernizing core systems with scalable microservices and cloud-native architectures for the future-proof enterprise.",
        btnText: "Explore Strategy",
        btnLink: "/services/tech-consulting",
        links: [
            { text: "Core Modernization", url: "/services/digital-transformation" },
            { text: "Digital Engineering", url: "/services/software-dev" }
        ],
        nextTitle: "Adaptive Security Frameworks",
        video: "https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4"
    },
    {
        id: '03',
        tag: "INNOVATION LAB",
        headlinePrefix: "Quantum",
        highlight: "Leap.",
        lead: "Harnessing the power of high-performance computing to solve the most complex logistical challenges in global supply chains.",
        btnText: "View Case Study",
        btnLink: "/projects",
        links: [
            { text: "Supply Chain", url: "/solutions/supply-chain" },
            { text: "Quantum Computing", url: "/insights" }
        ],
        nextTitle: "Resilience In Motion.",
        video: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section className="hero-wrapper">
            <div className="hero-split-layout">

                {/* Left Content Column (Solid Sidebar) */}
                <div className="hero-left-panel">
                    <div className="content-inner">
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: -25 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 25 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className="insight-tag">{slide.tag}</span>

                                <h1 className="hero-headline">
                                    {slide.headlinePrefix} <br />
                                    In <span className="highlight-text">{slide.highlight}</span>
                                </h1>

                                <p className="hero-lead-text">
                                    {slide.lead}
                                </p>

                                <div className="cta-container">
                                    <Link to={slide.btnLink}>
                                        <button className="btn btn-primary">
                                            {slide.btnText}
                                            <FaArrowRight className="btn-icon" />
                                        </button>
                                    </Link>
                                    <div className="link-group">
                                        {slide.links.map((link, idx) => (
                                            <Link key={idx} to={link.url} className="text-link">{link.text}</Link>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom aligned Navigation Indicators */}
                    <div className="slide-indicators">
                        {slides.map((s, idx) => (
                            <span
                                key={s.id}
                                className={currentSlide === idx ? "active-dot" : "dot"}
                                onClick={() => setCurrentSlide(idx)}
                                style={{ cursor: 'pointer' }}
                            >
                                {s.id}
                            </span>
                        ))}
                        <div className="dots-line">
                            <motion.div
                                className="line-progress"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                key={currentSlide}
                                transition={{ duration: 8, ease: "linear" }}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Visual Column */}
                <div className="hero-right-panel" onClick={nextSlide}>
                    <div className="video-container">
                        <AnimatePresence>
                            <motion.video
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.85 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5 }}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="hero-video"
                            >
                                <source src={slide.video} type="video/mp4" />
                            </motion.video>
                        </AnimatePresence>
                        <div className="video-overlay-grad"></div>
                    </div>

                    {/* Floating 'Next' Teaser Card */}
                    <motion.div
                        className="next-insight-card"
                        key={`next-${currentSlide}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            nextSlide();
                        }}
                    >
                        <span className="mini-label">UP NEXT</span>
                        <h4>{slides[(currentSlide + 1) % slides.length].headlinePrefix} In {slides[(currentSlide + 1) % slides.length].highlight}</h4>
                        <FaChevronRight className="card-icon" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
