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
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12
        }
      }
    };
    const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
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

        {/* --- Story Section --- */}
        <div className="about-story">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="story-heading">
              A decade of innovation and impact.
            </h2>

            <p className="story-text">
              Founded in 2014, Fraylon began with a vision to help organizations
              harness the full power of technology. What started as a small team
              of passionate engineers has grown into a trusted global partner
              delivering digital transformation for enterprises around the
              world.
            </p>

            <p className="story-text">
              At Fraylon, we believe technology should be a catalyst for growth
              and innovation. From modernizing legacy systems to building
              intelligent AI-driven platforms, our work combines deep technical
              expertise with strategic thinking to solve real business
              challenges.
            </p>
          </motion.div>

          <motion.div
            className="story-image-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Fraylon Team Collaboration"
              className="story-img"
            />
          </motion.div>
        </div>
        {/* mission section */}
        <motion.section
            className="mission-section"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
          <div className="container mission-container">
            <span className="mission-tag">Our Mission</span>

            <p className="mission-text">
              Empower organizations with innovative technology that accelerates
              transformation, unlocks new opportunities, and drives lasting
              impact.
            </p>
          </div>
        </motion.section>

        {/* <div className="about-story">
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
                        <div style={{ marginTop: '40px', paddingLeft: '20px', borderLeft: '4px solid var(--color-primary)' }}>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', fontStyle: 'italic', color: 'var(--color-brand-black)' }}>
                                "Our mission is to empower organizations to navigate the digital age with confidence and agility."
                            </p>
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
                            loading='lazy'
                        />
                    </motion.div>
                </div> */}

        {/* --- Stats Section --- */}
        <div className="about-stats">
          <motion.section
            className="about-stats"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
              <motion.div
                className="stats-container"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.25
                    }
                  }
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
                      transition: { duration: 0.6, ease: "easeOut" }
                    }
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
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
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
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
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
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
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
      <div className="values-section">
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
            viewport={{ once: true }}
          >
            <motion.div
              className="value-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaLightbulb className="value-icon" />
              <h3>Innovation First</h3>
              <p>
                We constantly explore emerging technologies and bold ideas to
                build solutions that keep our clients ahead in a rapidly
                evolving digital world.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaShieldAlt className="value-icon" />
              <h3>Integrity & Trust</h3>
              <p>
                Trust is the foundation of every partnership. We operate with
                transparency, accountability, and honesty in everything we do.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaUsers className="value-icon" />
              <h3>Client Success</h3>
              <p>
                Our success is defined by the success of our clients. We deeply
                understand their challenges and deliver solutions that create
                measurable impact.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaRocket className="value-icon" />
              <h3>Excellence in Execution</h3>
              <p>
                We believe great ideas must be backed by flawless execution. Our
                teams focus on delivering high-quality, scalable, and reliable
                solutions.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaHandshake className="value-icon" />
              <h3>Collaboration</h3>
              <p>
                The best innovations happen when diverse minds work together. We
                foster a culture of collaboration, respect, and shared success.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaGraduationCap className="value-icon" />
              <h3>Continuous Learning</h3>
              <p>
                Technology evolves rapidly, and so do we. We encourage
                curiosity, learning, and constant improvement to stay ahead of
                the curve.
              </p>
            </motion.div>
            <motion.div
              className="value-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaCheckCircle className="value-icon" />
              <h3>Ownership & Accountability</h3>
              <p>
                We take full responsibility for the solutions we build and the
                outcomes we deliver. Every team member acts with ownership,
                ensuring reliability, quality, and trust.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaHeart className="value-icon" />
              <h3>Customer-Centric Thinking</h3>
              <p>
                Every decision begins with the customer in mind. We focus on
                delivering meaningful experiences and long-term value for the
                organizations we serve.
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
            src="https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1"
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
  );
};

export default About;
