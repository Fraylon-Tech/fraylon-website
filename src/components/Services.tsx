import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCloud, FaBrain, FaShieldAlt, FaCode, FaChartLine, FaMobileAlt, FaArrowRight } from 'react-icons/fa';
import './Services.css';

interface ServiceItem {
    icon: ReactNode;
    title: string;
    desc: string;
    image: string;
    link: string;
}

const services: ServiceItem[] = [
    {
        icon: <FaCloud />,
        title: "Cloud Infrastructure",
        desc: "Design and deploy cloud-native infrastructure built for reliability and scale. We help organizations modernize platforms using resilient architectures across modern cloud environments.",
        image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/services/digital-transformation"
    },
    {
        icon: <FaBrain />,
        title: "Artificial Intelligence",
        desc: "Build intelligent systems powered by machine learning and advanced data models. Our AI solutions enable automation, predictive insights, and smarter decision-making.",
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/services/ai-integration"
    },
    {
        icon: <FaCode />,
        title: "Digital Engineering",
        desc: "Develop high-performance applications using modern engineering practices and scalable architectures. We build robust systems designed for performance and long-term evolution.",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/services/software-dev"
    },
    {
        icon: <FaShieldAlt />,
        title: "Cybersecurity",
        desc: "Secure digital infrastructure with proactive threat protection, resilient architecture, and continuous monitoring to safeguard critical systems and sensitive data.",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/services/tech-consulting"
    },
    {
        icon: <FaChartLine />,
        title: "Data & Analytics",
        desc: "Transform data into meaningful insights through scalable data platforms, advanced analytics pipelines, and intelligent reporting systems.",
        image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/solutions/data"
    },
    {
        icon: <FaMobileAlt />,
        title: "Enterprise Mobility",
        desc: "Create seamless mobile and cross-platform experiences that connect users, systems, and services across modern digital ecosystems.",
        image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/services/native-app"
    }
];

const ServiceCard = ({ service, index }: { service: ServiceItem, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: Move image vertically as user scrolls
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    // Removed useSpring to prevent initial 'jump' when spring settles from 0 to -10%

    return (
        <motion.div
            ref={ref}
            className="service-card "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
        >
            <Link
  to={service.link}
  className="service-card-link"
  aria-label={`Learn more about ${service.title}`}
>
                <div className="service-icon-wrap">
                    <span className="service-icon" aria-hidden="true">{service.icon}</span>
                </div>
                <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <div className="read-more-link">
                        LEARN MORE <FaArrowRight size={12} />
                    </div>
                </div>
            </Link>

            {/* Background Image with Parallax */}
            <div className="service-image-container"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'hidden' }}>
                <motion.img
                    src={service.image}
                    alt={service.title}
                    className="service-bg-image"
                    style={{
                        y,
                        scale: 1.2,
                        height: '110%',
                        top: '-5%',
                        position: 'absolute'
                    }}
                />
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section className="services-section section">
            <div className="container">
                <div className="section-header">
                    <div>
                        <span className="section-label">OUR EXPERTISE</span>
                        <h2 className="section-title">End-to-End <br /> Digital Capabilities</h2>
                    </div>
                    <p className="section-desc">
                        Fraylon delivers integrated technology solutions across cloud infrastructure, artificial intelligence, cybersecurity, and digital engineering. Our systems are designed for scale, resilience, and long-term growth.
                    </p>
                </div>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;
