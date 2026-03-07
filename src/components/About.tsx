import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./About.css";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "15+", label: "Global Clients" },
  { number: "20+", label: "Tech Experts" },
];

const About = () => {
  return (
    <section className="about-section">

      <div className="about-split">

        {/* Left Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-label">WHO WE ARE</span>

          <h2 className="about-heading">
            Building the Future of <br /> Digital Innovation
          </h2>

          <p className="about-text">
            Fraylon Technologies is a modern technology company focused on
            creating innovative digital solutions, scalable web platforms,
            and intelligent systems that empower businesses globally.
          </p>

          <p className="about-text">
            By combining engineering expertise, strategic thinking, and
            advanced technologies, we help organizations transform ideas into
            impactful digital products that accelerate growth and innovation.
          </p>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-block" key={index}>
                <h4>{stat.number}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/leadership" className="about-link">
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
          transition={{ duration: 0.7 }}
        >
          <div className="about-accent-box"></div>

          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
            alt="Fraylon team collaboration meeting"
            className="about-img"
            loading="lazy"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default About;