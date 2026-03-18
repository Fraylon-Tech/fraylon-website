import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

import {
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaRocket,
  FaHandshake,
  FaGraduationCap,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";
import "./About.css";

const MotionLink = motion(Link);

const About = () => {


  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const isMobile = window.innerWidth < 768;

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isMobile ? -15 : 0,
      y: !isMobile ? 10 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.12,
        ease: "easeOut",
      },
    },
  };
const slides = [
  {
    type: "intro",
    title: "Our Journey",
    subtitle: "A Decade of Building the Digital Future",
    text: `Fraylon was founded with a simple yet powerful belief: technology should empower organizations to innovate faster, operate smarter, and create meaningful impact. Over the past decade we have partnered with enterprises across industries to design digital platforms, modernize infrastructure, and unlock new possibilities through intelligent technology. Our journey is defined by continuous innovation, trusted partnerships, and a relentless commitment to building solutions that shape the future.`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000"
  },

  {
    year: "2014",
    title: "The Beginning",
    text: `Fraylon began as a small group of passionate engineers and technology strategists united by a shared vision: to help organizations harness the full potential of modern technology. In the early years we focused on solving complex engineering challenges and delivering high-impact digital solutions that enabled businesses to modernize their systems and improve operational efficiency. This foundation laid the groundwork for what would soon become a global technology partner.`,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=2000"
  },

  {
    year: "2018",
    title: "Scaling Innovation",
    text: `As digital transformation accelerated across industries, Fraylon expanded its capabilities and global reach. Our teams began working closely with enterprise organizations to modernize legacy systems, implement cloud-native architectures, and develop scalable digital platforms designed for long-term growth. This period marked a turning point where Fraylon evolved from a technology services provider into a strategic partner guiding organizations through complex transformation journeys.`,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=2000"
  },

  {
    year: "2022",
    title: "Global Impact",
    text: `By 2022, Fraylon had established itself as a trusted digital partner delivering enterprise-grade solutions across industries. Our work in cloud transformation, intelligent data platforms, and scalable application ecosystems enabled organizations to unlock new insights, improve agility, and accelerate innovation. Through long-term partnerships and collaborative delivery models, we helped businesses navigate an increasingly complex digital landscape with confidence.`,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000"
  },

  {
    year: "Today",
    title: "Architecting the Future",
    text: `Today, Fraylon continues to push the boundaries of what technology can achieve. By combining deep engineering expertise with strategic thinking, we design intelligent digital ecosystems that empower organizations to innovate faster and scale sustainably. As industries evolve and new technologies emerge, our mission remains the same: to build transformative solutions that help organizations shape the future with confidence.`,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=2000"
  }
];

const [currentSlide, setCurrentSlide] = useState(0);

// auto slide
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 6000);

  return () => clearInterval(interval);
}, []);

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
};
const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
const missionText = [
  "Empower",
  "organizations",
  "with",
  "innovative",
  "technology",
  "that",
  "accelerates",
  "transformation",
  "and",
  "drives",
  "lasting",
  "impact."
];
  return (
    <div className="about-page">
      <div className="container">
        {/* --- Hero Section --- */}
        <div className="about-hero">
          <motion.span
            className="about-tag"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Who We Are
          </motion.span>

          <motion.h1 className="about-title">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              We are
            </motion.span>{" "}
            <motion.span
              className="brand-highlight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Fraylon
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Architects of the Digital Future.
            </motion.span>
          </motion.h1>

          <motion.p
            className="about-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A global technology partner helping ambitious organizations build,
            scale, and innovate in the digital age.
          </motion.p>
        </div>

{/* ===== STORY JOURNEY SECTION ===== */}
<section className="story-slider">

  <div className="slides-container">

    {slides.map((slide, index) => (
  <motion.div
    key={index}
    className={`slide ${index === currentSlide ? "active" : ""}`}
    style={{ backgroundImage: `url(${slide.image})` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: index === currentSlide ? 1 : 0 }}
    transition={{ duration: 0.6 }}
  >

    

    <div className="slide-content">

      {slide.type === "intro" ? (
        <>
          <span className="slide-tag">Our Journey</span>
          <h1 className="slide-hero">{slide.subtitle}</h1>
          <p className="slide-summary">{slide.text}</p>
        </>
      ) : (
        <>
          <span className="slide-year">{slide.year}</span>
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
        </>
      )}

    </div>

  </motion.div>
))}

  </div>

  <button className="slide-btn left" onClick={prevSlide}>‹</button>
  <button className="slide-btn right" onClick={nextSlide}>›</button>

</section>
        {/* mission section */}
        {/* ===== PREMIUM MISSION SECTION ===== */}

<motion.section
  className="mission-section"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="container mission-container">

    <div className="mission-grid">

      {/* LEFT → TEXT */}
      <div className="mission-left">

        <span className="mission-tag">Our Mission</span>

        <motion.p
          className="mission-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          {missionText.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 }
                }
              }}
              className={
                word.toLowerCase() === "innovative" ||
                word.toLowerCase() === "impact."
                  ? "mission-focus"
                  : "mission-word"
              }
            >
              {
                word.toLowerCase() === "innovative" ||
                word.toLowerCase() === "impact."
                  ? word.toUpperCase()
                  : word
              }
              &nbsp;
            </motion.span>
          ))}
        </motion.p>

      </div>

      {/* RIGHT → VISUAL */}
      <div className="mission-right">

        <div className="mission-visual">

          {/* Image 1 (Main) */}
          <div className="mission-img img-main">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200" />
          </div>

          {/* Image 2 */}
          <div className="mission-img img-middle">
            <img src="https://i.pinimg.com/1200x/f9/95/11/f99511c85b628e69ee6f643c07246667.jpg" />
          </div>

          {/* Image 3 */}
          <div className="mission-img img-top">
            <img src="https://i.pinimg.com/736x/a0/93/9e/a0939e468791db6e1d83581ec1c1fba7.jpg" />
          </div>

        </div>

      </div>

    </div>

  </div>
</motion.section>

        {/* --- Stats Section --- */}

        <div className="about-stats">
          <motion.section
            className="about-stats"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            {/* NEW INTRO SECTION */}
            <div className="stats-intro">
              <span className="stats-tag">OUR IMPACT</span>

              <motion.h2
                className="stats-title"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Journey in Numbers
              </motion.h2>

              <p className="stats-description">
                Our growth reflects the trust of our clients and the dedication
                of our team. Over the years, we have delivered innovative
                solutions, built strong partnerships, and expanded our global
                presence.
              </p>
            </div>

            <motion.div
              className="stats-container"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.25,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4 }}
            >
              <motion.div
                className="stat-item"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <div className="stat-number">
                  <CountUp end={10} duration={2.5} enableScrollSpy />+
                </div>
                <div className="stat-label">Years of Excellence</div>
              </motion.div>

              <motion.div
                className="stat-item"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <div className="stat-number">
                  <CountUp end={150} duration={2.5} enableScrollSpy />+
                </div>
                <div className="stat-label">Enterprise Clients</div>
              </motion.div>

              <motion.div
                className="stat-item"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <div className="stat-number">
                  <CountUp end={12} duration={2.5} enableScrollSpy />
                </div>
                <div className="stat-label">Global Offices</div>
              </motion.div>

              <motion.div
                className="stat-item"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <div className="stat-number">
                  <CountUp end={500} duration={2.5} enableScrollSpy />+
                </div>
                <div className="stat-label">Engineers & Strategists</div>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* --- Values Section --- */}
      <div className="values-section ">
        <div className="container">
          <div className="values-header">
            <span className="about-tag">Our Core Principles</span>
            <h2>
              Driven by <span>values</span>, defined by results.
            </h2>
          </div>

          <motion.div
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.05 }}
          >
            <motion.div
              className="value-card interactive-card"
              custom={0}
              variants={cardVariants}
            >
              <FaLightbulb className="value-icon" />
              <h3>Innovation First</h3>
              <p>
  We bring forward-thinking solutions that help our clients stay ahead in a fast-changing digital world.
</p>
            </motion.div>

            <motion.div
              className="value-card interactive-card"
              custom={1}
              variants={cardVariants}
            >
              <FaShieldAlt className="value-icon" />
              <h3>Integrity & Trust</h3>
              <p>
  We build long-term partnerships through transparency, accountability, and consistent delivery.
</p>
            </motion.div>

            <motion.div
              className="value-card interactive-card"
              custom={2}
              variants={cardVariants}
            >
              <FaUsers className="value-icon" />
              <h3>Client Success</h3>
              <p>
  Every solution we deliver is designed to create measurable value and drive real business outcomes.
</p>
            </motion.div>

            <motion.div
              className="value-card interactive-card"
              custom={3}
              variants={cardVariants}
            >
              <FaRocket className="value-icon" />
              <h3>Excellence in Execution</h3>
              <p>
  We ensure every solution is scalable, reliable, and built to perform in real-world environments.
</p>
            </motion.div>

            <motion.div
              className="value-card interactive-card"
              custom={4}
              variants={cardVariants}
            >
              <FaHandshake className="value-icon" />
              <h3>Collaboration</h3>
              <p>
  We work closely with our clients, combining perspectives to deliver stronger and more effective solutions.
</p>
            </motion.div>

            <motion.div
              className="value-card interactive-card"
              custom={5}
              variants={cardVariants}
            >
              <FaGraduationCap className="value-icon" />
              <h3>Continuous Learning</h3>
              <p>
  We continuously evolve our expertise to help clients navigate change and adopt emerging technologies.
</p>
            </motion.div>

            <motion.div
              className="value-card interactive-card"
              custom={6}
              variants={cardVariants}
            >
              <FaCheckCircle className="value-icon" />
              <h3>Ownership & Accountability</h3>
              <p>
  We take responsibility for outcomes, ensuring every delivery meets the highest standards of quality.
</p>
            </motion.div>

            <motion.div
              className="value-card interactive-card"
              custom={7}
              variants={cardVariants}
            >
              <FaHeart className="value-icon" />
              <h3>Customer-Centric Thinking</h3>
              <p>
  We design every experience with the end user in mind, focusing on value, usability, and impact.
</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- Original CTA Section --- */}
      <div
        style={{
          position: "relative",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <img
            src="https://i.pinimg.com/1200x/c4/de/a3/c4dea33085f3492af9efae1bfeedc655.jpg"
            alt="Future City"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(15, 23, 42, 0.8)",
            }}
          ></div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "800px",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: "4rem",
              color: "#fff",
              marginBottom: "30px",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Ready to Shape <br /> the Future?
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#cbd5e1",
              marginBottom: "50px",
              lineHeight: "1.6",
            }}
          >
            Join a team that challenges the status quo. Discover your next
            career breakthrough at Fraylon.
          </p>
          <div
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <MotionLink
  to="/careers"
  className="btn btn-primary"
  whileTap={{ scale: 0.98 }}
>
  View Open Positions
</MotionLink>
            <MotionLink
  to="/leadership"
  className="btn btn-primary"
  whileTap={{ scale: 0.98 }}
>
  Meet Leadership
</MotionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
