import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Leadership.css";
import { leadershipData } from "../data/leadershipData";

const Leadership = () => {
  return (
    <div className="leadership-page">

      {/* Hero Section */}
      <section className="leadership-hero">
        <div className="container">

          <motion.span
            className="hero-tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Our Leadership
          </motion.span>

          <div className="hero-content">

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              Visionaries Guiding <br /> the Next Era
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              Meet the collective intelligence behind Fraylon's success.
              Our leadership team combines innovation, strategy and
              technology expertise to shape the future of digital transformation.
            </motion.p>

          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="leadership-grid-section">
        <div className="leaders-grid">

          {leadershipData.map((leader, index) => (
            <motion.div
              className="leader-card"
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Image Side */}
              <div className="leader-image-wrapper-outer">
                <div className="leader-image-accent"></div>
                <div className="leader-image-wrapper">
                  <img src={leader.image} alt={leader.name} className="leader-image" loading="lazy" />
                </div>
              </div>

              {/* Info Side */}
              <div className="leader-info">
                <motion.div
                  className="leader-role-wrapper"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="role-line"></span>
                  <span className="leader-role">{leader.role}</span>
                </motion.div>

                <motion.h3
                  className="leader-name"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {leader.name}
                </motion.h3>

                <motion.p
                  className="leader-bio"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {leader.bio}
                </motion.p>

                <motion.div
                  className="leader-social-links"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <a href="#" className="social-icon">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social-icon">
                    <FaTwitter />
                  </a>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">

          <motion.div
            className="philosophy-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            

            <h2 className="philosophy-text">
              True leadership is not about being in charge.
              <br />
              It is about taking care of those in your charge
              and inspiring them to achieve their greatest potential.
            </h2>

            <div className="philosophy-divider"></div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Leadership;