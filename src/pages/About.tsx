import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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

        {/* --- Story Section --- */}
        <div className="about-story">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="story-heading">A Decade of relentless innovation.</h2>
            <p className="story-text">
              Founded in 2014, Fraylon began with a simple belief: that technology should not just support business, but drive it. What started as a boutique software studio has evolved into a global digital transformation partner for Fortune 500 companies.
            </p>
            <p className="story-text">
              We don't just write code; we solve complex problems. From legacy system modernization to pioneering AI agents, our work sits at the intersection of robust engineering and visionary strategy.
            </p>
            <div className="story-highlight">
                "Our mission is to empower organizations to navigate the digital age with confidence and agility."
            </div>
          </motion.div>
          <motion.div
            className="story-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Fraylon Team Collaboration"
              className="story-img"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* --- Mission Section --- */}
        <motion.section
          className="mission-section"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mission-container">
            <span className="mission-tag">Our Mission</span>
            <p className="mission-text">
              Empower organizations with
              <span className="mission-highlight"> innovative technology </span>
              that accelerates transformation and drives
              <span className="mission-highlight"> lasting impact</span>.
            </p>
            <div className="mission-underline"></div>
          </div>
        </motion.section>

        {/* --- Stats Section --- */}
        <div className="about-stats">
          <div className="container">
            <motion.div
              className="stats-intro"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <span className="stats-tag">OUR IMPACT</span>
              <h2 className="stats-title">Our Journey in Numbers</h2>
              <p className="stats-description">
                Our growth reflects the trust of our clients and the dedication
                of our team. Over the years, we have delivered innovative
                solutions, built strong partnerships, and expanded our global
                presence.
              </p>
            </motion.div>

            <motion.div
              className="stats-container"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4 }}
            >
              {[
                { end: 10, label: "Years of Excellence", suffix: "+" },
                { end: 150, label: "Enterprise Clients", suffix: "+" },
                { end: 12, label: "Global Offices", suffix: "" },
                { end: 500, label: "Engineers & Strategists", suffix: "+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="stat-item"
                  variants={cardVariants}
                >
                  <div className="stat-number">
                    <CountUp end={stat.end} duration={2.5} enableScrollSpy />{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Values Section --- */}
        <div className="values-section">
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
            {[
              { icon: FaLightbulb, title: "Innovation First", desc: "We constantly explore emerging technologies and bold ideas to build solutions that keep our clients ahead in a rapidly evolving digital world." },
              { icon: FaShieldAlt, title: "Integrity & Trust", desc: "Trust is the foundation of every partnership. We operate with transparency, accountability, and honesty in everything we do." },
              { icon: FaUsers, title: "Client Success", desc: "Our success is defined by the success of our clients. We deeply understand their challenges and deliver solutions that create measurable impact." },
              { icon: FaRocket, title: "Excellence in Execution", desc: "We believe great ideas must be backed by flawless execution. Our teams focus on delivering high-quality, scalable, and reliable solutions." },
              { icon: FaHandshake, title: "Collaboration", desc: "The best innovations happen when diverse minds work together. We foster a culture of collaboration, respect, and shared success." },
              { icon: FaGraduationCap, title: "Continuous Learning", desc: "Technology evolves rapidly, and so do we. We encourage curiosity, learning, and constant improvement to stay ahead of the curve." },
              { icon: FaCheckCircle, title: "Ownership & Accountability", desc: "We take full responsibility for the solutions we build and the outcomes we deliver. Every team member acts with ownership, ensuring reliability, quality, and trust." },
              { icon: FaHeart, title: "Customer-Centric Thinking", desc: "Every decision begins with the customer in mind. We focus on delivering meaningful experiences and long-term value for the organizations we serve." },
            ].map((value, i) => (
              <motion.div key={i} className="value-card" variants={cardVariants}>
                <value.icon className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- CTA Section --- */}
        <div style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginTop: '100px', borderTop: 'none' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <img
              src="https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1"
              alt="Future City"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.8)' }}></div>
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
                className="btn"
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "#00c6a5",
                  color: "#0f172a",
                  padding: "18px 45px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "0",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background-color 0.3s",
                }}
              >
                View Open Positions
              </MotionLink>
              <MotionLink
                to="/leadership"
                className="btn-outline"
                whileTap={{ scale: 0.98 }}
                style={{
                  borderColor: "#fff",
                  color: "#fff",
                  padding: "16px 45px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  border: "1px solid #fff",
                  background: "transparent",
                  borderRadius: "0",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background-color 0.3s",
                }}
              >
                Meet Leadership
              </MotionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
