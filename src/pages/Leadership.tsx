import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Leadership.css";
import alexFraylonImg from "../assets/images/alex-fraylon.jpg";
import vigneswarImg from "../assets/images/vigneswar-nalluri.jpg";

const leaders = [
  {
    name: "Ram Teja Ch",
    role: "Chief Executive Officer (CEO)",
    image: alexFraylonImg,
    bio: "Founder and visionary leader driving Fraylon's mission to build innovative digital solutions and empower global businesses through technology and strategic leadership.",
  },
  {
    name: "Vigneswar Nalluri",
    role: "Chief Technology Officer (CTO)",
    image: vigneswarImg,
    bio: "Technology leader responsible for shaping Fraylon's technical strategy, leading engineering teams, and building scalable and future-ready digital platforms.",
  },
  {
    name: "Aditi Sen",
    role: "Strategy & Innovation Lead",
    image: "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg",
    bio: "Focused on strategic growth initiatives and innovation, helping Fraylon expand its impact through creative problem solving and forward-thinking solutions.",
  },
  {
    name: "Nikhil Balaji Nandhagiri",
    role: "Chief Marketing Officer (CMO)",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "Leads Fraylon's global marketing strategy, brand positioning, and growth initiatives while building strong relationships with partners and communities.",
  },
  {
    name: "Lavanya Bojja",
    role: "President",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    bio: "Oversees organizational operations and strategic initiatives, ensuring smooth coordination across teams and driving the company toward long-term success.",
  },
  {
    name: "Mahitha Bhatula",
    role: "Co-President",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    bio: "Supports executive leadership in managing operations, strengthening team collaboration, and ensuring the execution of Fraylon's strategic goals.",
  },
  {
    name: "Yuvraj Dudukuru",
    role: "Chief Operating Officer (COO)",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bio: "Responsible for operational excellence at Fraylon, managing business processes, project delivery, and organizational efficiency.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

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
              technology expertise to shape the future of digital
              transformation.
            </motion.p>

          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="leadership-grid-section">
        <div className="leaders-grid">

          {leaders.map((leader) => (
            <motion.div
              className="leader-card"
              key={leader.name}
              {...fadeUp}
              viewport={{ once: true }}
            >

              {/* Image */}
              <div className="leader-image-wrapper-outer">
                <div className="leader-image-accent"></div>

                <div className="leader-image-wrapper">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-image"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="leader-info">

                <div className="leader-role-wrapper">
                  <span className="role-line"></span>
                  <span className="leader-role">{leader.role}</span>
                </div>

                <h3 className="leader-name">{leader.name}</h3>

                <p className="leader-bio">{leader.bio}</p>

                <div className="leader-social-links">
                  <a href="#" className="social-icon">
                    <FaLinkedinIn />
                  </a>

                  <a href="#" className="social-icon">
                    <FaTwitter />
                  </a>
                </div>

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

            <div className="quote-icon">“</div>

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