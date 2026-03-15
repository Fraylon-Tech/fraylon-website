import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBrain, FaCloud, FaShieldAlt, FaDatabase, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const SUBCOPY_PHRASES = ['scalable AI', 'cloud', 'cybersecurity'];
const TYPING_MS = 75;
const ERASE_MS = 45;
const HOLD_MS = 2200;
const PAUSE_BETWEEN_PHRASES_MS = 400;

const Hero = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isMoving, setIsMoving] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [typedLength, setTypedLength] = useState(0);
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        if (!isMoving) return;
        const timeout = setTimeout(() => setIsMoving(false), 150);
        return () => clearTimeout(timeout);
    }, [isMoving, cursorPos]);

    // Rotating typewriter: "We design [scalable AI | cloud | cybersecurity] systems for..."
    useEffect(() => {
        const phrase = SUBCOPY_PHRASES[phraseIndex];
        if (!phrase) return;

        if (!isErasing && typedLength < phrase.length) {
            const t = setTimeout(() => setTypedLength((n) => n + 1), TYPING_MS);
            return () => clearTimeout(t);
        }
        if (!isErasing && typedLength === phrase.length) {
            const t = setTimeout(() => {
                setIsErasing(true);
                setTypedLength((n) => Math.max(0, n - 1));
            }, HOLD_MS);
            return () => clearTimeout(t);
        }
        if (isErasing && typedLength > 0) {
            const t = setTimeout(() => setTypedLength((n) => n - 1), ERASE_MS);
            return () => clearTimeout(t);
        }
        if (isErasing && typedLength === 0) {
            const t = setTimeout(() => {
                setIsErasing(false);
                setPhraseIndex((i) => (i + 1) % SUBCOPY_PHRASES.length);
            }, PAUSE_BETWEEN_PHRASES_MS);
            return () => clearTimeout(t);
        }
    }, [phraseIndex, typedLength, isErasing]);

    return (
        <section
            className="hero-wrapper hero-digital-system"
            onMouseMove={(e) => {
                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                const localX = e.clientX - rect.left;
                const localY = e.clientY - rect.top;
                setCursorPos({
                    x: localX,
                    y: localY,
                });
                setIsMoving(true);
            }}
        >
            {/* Background gradient mesh */}
            <div className="hero-base-gradient" />

            {/* Soft network video layer */}
            <div className="hero-video-layer">
                <video autoPlay muted loop playsInline>
                    <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Cursor glow */}
            <motion.div
                className="hero-cursor-glow"
                animate={{
                    x: cursorPos.x - 150,
                    y: cursorPos.y - 150,
                    opacity: isMoving ? 0.5 : 0.25,
                    scale: isMoving ? 1 : 0.9,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 30,
                    mass: 0.6,
                }}
            />

            {/* Content & layout */}
            <div className="hero-digital-inner">
                <div className="hero-layout">
                    <div>
                        <p className="hero-kicker">FRAYLON</p>
                        <h1 className="hero-title">
                            Engineering the digital
                            <br />
                            <span className="hero-title-emphasis">INFRASTRUCTURE</span>
                            <br />
                            <span className="hero-title-soft">of tomorrow.</span>
                        </h1>
                        <p className="hero-subcopy">
                            We design{' '}
                            <span className="hero-subcopy-typed">
                                {SUBCOPY_PHRASES[phraseIndex].slice(0, typedLength)}
                                {!isErasing && typedLength < SUBCOPY_PHRASES[phraseIndex].length && (
                                    <span className="hero-typing-cursor hero-subcopy-cursor" aria-hidden="true" />
                                )}
                            </span>
                            {' '}systems for modern enterprises building the next generation of digital products.
                        </p>

                        <div className="hero-cta-row">
                            <Link to="/solutions">
                                <button className="btn-primary-solid">Explore capabilities</button>
                            </Link>
                            <Link to="/contact">
                                <button className="btn-outline-ghost">Start a project</button>
                            </Link>
                        </div>

                        <div className="hero-meta">
                            <span>
                                <FaBrain className="hero-meta-icon" />
                                AI Systems
                            </span>
                            <span>
                                <FaCloud className="hero-meta-icon" />
                                Cloud Infrastructure
                            </span>
                            <span>
                                <FaShieldAlt className="hero-meta-icon" />
                                Cybersecurity
                            </span>
                            <span>
                                <FaDatabase className="hero-meta-icon" />
                                Data Platforms
                            </span>
                        </div>

                        <p className="hero-trust">
                            <strong>Trusted by teams</strong> building the next generation of digital systems.
                        </p>
                    </div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="hero-visual-card">
                            <div className="hero-visual-tag">LIVE SYSTEM VIEW</div>
                            <div className="hero-visual-title">Global infrastructure health</div>
                            <div className="hero-visual-meta">
                                128 regions • 4.2M events / min • 99.99% uptime
                            </div>
                            <div className="hero-visual-orbit" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="hero-scroll-hint">
                <span>Scroll</span>
                <FaArrowDown className="hero-scroll-icon" />
            </div>
        </section>
    );
};

export default Hero;
