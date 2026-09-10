import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const blogs = [
    {
      category: "Security",
      slug: "professional-security-services",
      title: "Why Professional Security Services Matter for Businesses",
      description:
        "Learn how trained security personnel, access control and regular supervision help protect people, property and business operations.",
    },
    {
      category: "Corporate Security",
      slug: "corporate-office-security",
      title: "5 Essential Security Measures for Corporate Offices",
      description:
        "Practical security measures that can help create a safer and more secure corporate workplace.",
    },
    {
      category: "Electronic Security",
      slug: "cctv-access-control",
      title: "How CCTV and Access Control Improve Workplace Security",
      description:
        "Understand how modern electronic security solutions support professional security management.",
    },
    {
      category: "Security",
      slug: "trained-security-personnel",
      title: "The Importance of Trained Security Personnel",
      description:
        "Why professional training, discipline and alertness are important in effective security operations.",
    },
    {
      category: "Housekeeping",
      slug: "workplace-housekeeping",
      title: "Why Workplace Housekeeping Matters",
      description:
        "A clean and well-maintained workplace supports hygiene, safety and a better working environment.",
    },
    {
      category: "Facility Management",
      slug: "security-facility-management-partner",
      title: "Choosing the Right Security & Facility Management Partner",
      description:
        "Key factors to consider when selecting a professional security and facility management partner.",
    },
  ];

  return (
    <main className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <p className="blog-tag">BUDDHA SECURITY FACILITIES</p>

          <h1>
            Security Insights &
            <br />
            <span>Workplace Solutions.</span>
          </h1>

          <p className="blog-hero-text">
            Practical insights on security, housekeeping, manpower and
            workplace safety.
          </p>
        </div>
      </section>

      {/* BLOGS */}
      <section className="blog-section">
        <div className="blog-heading">
          <p className="blog-tag">OUR BLOG</p>

          <h2>
            Security Knowledge.
            <br />
            <span>Professional Insights.</span>
          </h2>

          <p>
            Explore useful insights and practical information about security
            and workplace solutions.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <article className="blog-card" key={index}>
              <div className="blog-card-image">
                🛡️
              </div>

              <div className="blog-card-content">
                <span className="blog-category">
                  {blog.category}
                </span>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <Link to={`/blog/${blog.slug}`}>
  Read More →
</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <p className="blog-tag">NEED PROFESSIONAL SUPPORT?</p>

        <h2>
          Protect Your Workplace.
          <br />
          <span>Protect Your People.</span>
        </h2>

        <Link to="/contact">
          Get a Quote →
        </Link>
      </section>

    </main>
  );
}

export default Blog;