import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBrain, FaCloud, FaShieldAlt, FaDatabase, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const SUBCOPY_PHRASES = ['scalable AI', 'cloud', 'cybersecurity'];
const TYPING_MS = 58;
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
                    <div className="hero-copy-column">
                        <motion.p
                            className="hero-kicker"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="hero-kicker-dot" aria-hidden="true" />
                            FRAYLON
                        </motion.p>
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Engineering the digital
                            <br />
                            <span className="hero-title-emphasis">INFRASTRUCTURE</span>
                            <br />
                            <span className="hero-title-soft">of tomorrow.</span>
                        </motion.h1>

                        <motion.div
                            className="hero-subcopy-wrap"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <p className="hero-typing-row" aria-live="polite">
                                <span className="hero-typing-prefix">We design </span>
                                <span className="hero-typing-showcase">
                                    <span className="hero-subcopy-typed">
                                        {SUBCOPY_PHRASES[phraseIndex].slice(0, typedLength)}
                                        {!isErasing && typedLength < SUBCOPY_PHRASES[phraseIndex].length && (
                                            <span className="hero-typing-cursor hero-typing-cursor--large" aria-hidden="true" />
                                        )}
                                    </span>
                                </span>
                            </p>
                            <p className="hero-subcopy-tail">
                                systems for modern enterprises building the next generation of digital products.
                            </p>
                        </motion.div>

                        <motion.div
                            className="hero-cta-row"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link to="/Solutions">
                                <button className="btn-primary-solid btn-primary-solid--hero">Explore capabilities</button>
                            </Link>
                            <Link to="/contact">
                                <button className="btn-outline-ghost">Start a project</button>
                            </Link>
                        </motion.div>

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
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
