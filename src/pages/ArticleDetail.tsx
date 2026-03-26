import { useParams, useNavigate } from "react-router-dom";
import { aboutArticles } from "../data/articlesData";
import { motion, useScroll } from "framer-motion";
import { FaClock, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import "./ArticleDetail.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  const article = aboutArticles.find((a) => a.id === id);
  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-page">

      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

      <div className="container article-back">
       <button
  className="back-btn"
  onClick={() => navigate("/about")}
>
  ← BACK 
</button>
      </div>

<section
  className="article-hero hero-bg"
  style={{ backgroundImage: `url(${article.image})` }}
>
  {/* DARK TOP OVERLAY */}
  <div className="hero-top-overlay" />

  {/* BOTTOM FADE */}
  <div className="hero-bottom-fade" />

  <div className="container hero-content">

    <span className="article-category">
      {article.category.toUpperCase()}
    </span>

    <h1>{article.title}</h1>

    <div className="hero-meta">
  <span><FaUser /> {article.author}</span>
  <span><FaCalendarAlt /> {article.date}</span>
  <span><FaClock /> {article.readTime}</span>
</div>

  </div>
</section>

      
<section className="article-body">
  <div className="container article-layout">

    {/* LEFT CONTENT */}
    <motion.div
      className="article-text"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </motion.div>

    {/* RIGHT SIDEBAR */}
   <aside className="article-sidebar">

  {/* 1️⃣ AUTHOR FIRST */}
  <div className="sidebar-author">
    <h4>About the Author</h4>

    <img src={article.authorImage} />
    <h5>{article.author}</h5>
    <span>{article.authorRole}</span>

    <p className="author-bio">
  {article.authorBio}
</p>
  </div>

  {/* 2️⃣ TAKEAWAYS SECOND */}
  <div className="takeaways-card">
    <h4>Key Takeaways</h4>

    {article.keyTakeaways.map((item, i) => (
      <div key={i} className="takeaway-item">
        <span className="dot" />
        <div>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>

  {/* 3️⃣ SHARE LAST */}
  <div className="share-card">
    <h4>Share Insight</h4>

    <div className="share-buttons">
      <button><FaTwitter /> X / Twitter</button>
      <button><FaLinkedin /> LinkedIn</button>
      <button><FaGlobe /> Email</button>
    </div>
  </div>

</aside>

  </div>
</section>

      {/* RELATED ARTICLES */}
      <section className="related-articles container">
        <h2>Explore More Insights</h2>

        <div className="related-grid">
          {aboutArticles
            .filter((a) => a.id !== article.id)
            .map((item) => (
              <div
                key={item.id}
                className="related-card"
                onClick={() => navigate(`/about/article/${item.id}`)}
              >
                <img src={item.image} />
                <div className="related-content">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button>Read Article →</button>
                </div>
              </div>
            ))}
        </div>
      </section>

    </div>
  );
};

export default ArticleDetail;