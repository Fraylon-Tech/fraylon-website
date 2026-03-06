import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">

      <div className="about-split">

        {/* Left Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-label">WHO WE ARE</span>

          <h2 className="about-heading">
            Building the Future of <br /> Digital Innovation
          </h2>

          <p className="about-text">
            Fraylon Technologies is a modern technology company dedicated to
            building innovative digital solutions, scalable platforms, and
            intelligent systems that empower businesses worldwide.
          </p>

          <p className="about-text">
            By combining engineering excellence, strategic thinking, and
            cutting-edge technologies, our team helps organizations transform
            ideas into impactful digital products that drive growth and
            innovation.
          </p>

          {/* Stats */}
          <div className="stats-grid">

            <div className="stat-block">
              <h4>50+</h4>
              <p>Projects Delivered</p>
            </div>

            <div className="stat-block">
              <h4>15+</h4>
              <p>Global Clients</p>
            </div>

            <div className="stat-block">
              <h4>20+</h4>
              <p>Tech Experts</p>
            </div>

          </div>

          {/* Button */}

          <Link to="/leadership">
            <button className="btn btn-primary about-btn">
              Meet Our Leadership
              <FaArrowRight style={{ marginLeft: "10px" }} />
            </button>
          </Link>

        </motion.div>

        {/* Right Image */}

        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-accent-box"></div>

          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
            alt="Fraylon Team Collaboration"
            className="about-img"
            loading="lazy"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default About;