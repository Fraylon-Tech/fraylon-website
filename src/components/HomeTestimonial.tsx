import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { solutionsData } from "../data/solutionsData";
import "./HomeTestimonial.css";

const CARD_WIDTH = 344; 

const testimonials = Object.values(solutionsData)
  .map((solution) => solution.testimonial)
  .filter(Boolean);

const HomeTestimonial = () => {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setOffset((prev) => {
      if (prev >= testimonials.length * CARD_WIDTH) {
        return 0; // 🔥 reset to start
      }
      return prev + 1;
    });
  }, 20);

  return () => clearInterval(interval);
}, [isPaused]);

  return (
    <section className="home-testimonial-section">
      <div className="home-testimonial-container">

        <div className="home-testimonial-header-row">
          <div>
            <span className="section-label">TESTIMONIALS</span>
            <h2 className="home-testimonial-title">Don’t take our word for it.</h2>
          </div>
          <div>Over 1000+ people trust us</div>
        </div>

        <div
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${offset}px)`
            }}
          >
            {[...testimonials, ...testimonials].map((t) => (
              <div className="testimonial-card">
                <FaQuoteLeft style={{ opacity: 0.3, marginBottom: "10px" }} />

                <p>"{t.quote}"</p>

                <div>
                    <h4>{t.author}</h4>
                    <span>{t.role}, {t.company}</span>
                </div>
            </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeTestimonial;