import './Clients.css';

const logos = [
    "/logos/google.svg?v=3",
    "/logos/ibm.svg?v=3",
    "/logos/microsoft.svg?v=3",
    "/logos/panasonic.svg?v=3",
    "/logos/cisco.svg?v=3",
    "/logos/tcs.svg?v=3",
    "/logos/samsung.svg?v=3",
    "/logos/amazon.svg?v=3"
];

const Clients = () => {
    // Duplicate logos for seamless infinite scroll
    const marqueeLogos = [...logos, ...logos, ...logos];

    return (
        <section className="clients-section">
            <p className="clients-label">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="marquee-container">
                <div className="marquee-content">
                    {marqueeLogos.map((logo, index) => (
                        <img key={index} src={logo} alt="Client Logo" className="client-logo" loading='lazy'/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
