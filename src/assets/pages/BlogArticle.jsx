import { Link, useParams } from "react-router-dom";
import "./BlogArticle.css";

const articles = {
  "professional-security-services": {
    category: "Security",
    title: "Why Professional Security Services Matter for Businesses",
    intro:
      "Professional security services help businesses create a safer environment for employees, visitors, assets and daily operations.",
    sections: [
      {
        heading: "Protecting People and Property",
        text:
          "A professional security team provides a visible and disciplined presence at the workplace. Trained personnel can monitor access points, identify unusual activity and support a safer working environment.",
      },
      {
        heading: "The Importance of Trained Personnel",
        text:
          "Security personnel need more than physical presence. Alertness, discipline, communication and proper response procedures are important for handling everyday security responsibilities effectively.",
      },
      {
        heading: "Access Control and Visitor Management",
        text:
          "Managing visitors, employees, vehicles and entry points is an important part of workplace security. Proper access control helps organisations maintain better visibility over movement within their premises.",
      },
      {
        heading: "Regular Supervision",
        text:
          "Regular supervision helps maintain operational standards and ensures that security procedures are followed consistently across the workplace.",
      },
    ],
  },

  "corporate-office-security": {
    category: "Corporate Security",
    title: "5 Essential Security Measures for Corporate Offices",
    intro:
      "Corporate offices need practical security measures that protect people, information, property and daily business operations.",
    sections: [
      {
        heading: "1. Controlled Entry and Exit",
        text:
          "A clearly managed entry and exit process helps organisations monitor employees, visitors and other authorised personnel.",
      },
      {
        heading: "2. Visitor Management",
        text:
          "Visitor identification and movement management can improve workplace visibility and help maintain a controlled environment.",
      },
      {
        heading: "3. CCTV Surveillance",
        text:
          "CCTV systems can support monitoring of important areas and provide useful visual information for security management.",
      },
      {
        heading: "4. Trained Security Personnel",
        text:
          "Professional security personnel can monitor premises, conduct regular patrolling and respond to incidents according to established procedures.",
      },
      {
        heading: "5. Regular Security Review",
        text:
          "Periodic security reviews help organisations identify possible gaps and improve their existing security practices.",
      },
    ],
  },

  "cctv-access-control": {
    category: "Electronic Security",
    title: "How CCTV and Access Control Improve Workplace Security",
    intro:
      "Electronic security solutions can complement professional security personnel and provide better visibility across a workplace.",
    sections: [
      {
        heading: "CCTV Surveillance",
        text:
          "CCTV systems help security teams monitor important locations and review activity when required.",
      },
      {
        heading: "Access Control",
        text:
          "Access control solutions help organisations manage who can enter specific areas and support better control over workplace movement.",
      },
      {
        heading: "Combining Technology with People",
        text:
          "Technology works most effectively when supported by trained personnel who can monitor systems, identify concerns and take appropriate action.",
      },
      {
        heading: "A Practical Security Approach",
        text:
          "A combination of physical security, electronic surveillance and regular supervision can provide a more structured approach to workplace protection.",
      },
    ],
  },

  "trained-security-personnel": {
    category: "Security",
    title: "The Importance of Trained Security Personnel",
    intro:
      "Professional training, discipline and alertness are essential qualities for effective security operations.",
    sections: [
      {
        heading: "More Than a Security Presence",
        text:
          "Security personnel represent the first line of workplace protection. Their behaviour, alertness and communication can influence the overall security environment.",
      },
      {
        heading: "Discipline and Responsibility",
        text:
          "Consistent discipline helps security personnel follow workplace procedures and respond responsibly to their assigned duties.",
      },
      {
        heading: "Alertness and Observation",
        text:
          "Good observation skills help personnel identify unusual situations and communicate concerns at the appropriate time.",
      },
      {
        heading: "Continuous Supervision",
        text:
          "Regular supervision supports consistent performance and helps maintain professional standards across security operations.",
      },
    ],
  },

  "workplace-housekeeping": {
    category: "Housekeeping",
    title: "Why Workplace Housekeeping Matters",
    intro:
      "A clean and well-maintained workplace supports hygiene, safety and a more comfortable environment for employees and visitors.",
    sections: [
      {
        heading: "Clean and Professional Workspaces",
        text:
          "Regular cleaning and maintenance help create a workplace that is organised, presentable and comfortable.",
      },
      {
        heading: "Hygiene and Cleanliness",
        text:
          "Consistent housekeeping practices support everyday hygiene and help organisations maintain cleaner working environments.",
      },
      {
        heading: "Common Area Maintenance",
        text:
          "Reception areas, corridors, shared spaces and other common areas require regular attention to maintain workplace standards.",
      },
      {
        heading: "Regular Supervision",
        text:
          "Supervision helps ensure housekeeping activities are carried out consistently according to organisational requirements.",
      },
    ],
  },

  "security-facility-management-partner": {
    category: "Facility Management",
    title: "Choosing the Right Security & Facility Management Partner",
    intro:
      "Choosing a professional partner for security and facility support requires attention to people, processes, supervision and organisational requirements.",
    sections: [
      {
        heading: "Understand Your Requirements",
        text:
          "Every organisation has different operational needs. Understanding the workplace, people, assets and daily activities is an important starting point.",
      },
      {
        heading: "Professional Workforce",
        text:
          "A reliable service partner should focus on trained personnel, discipline, responsibility and professional workplace behaviour.",
      },
      {
        heading: "Supervision and Accountability",
        text:
          "Regular supervision and clear accountability help maintain service quality and ensure responsibilities are properly managed.",
      },
      {
        heading: "Tailored Solutions",
        text:
          "Security, housekeeping and manpower support should be structured around the specific requirements of the organisation rather than using the same approach everywhere.",
      },
    ],
  },
};

function BlogArticle() {
  const { slug } = useParams();
  
  const article = articles[slug];

  if (!article) {
    return (
      <main className="blog-article-page">
        <section className="blog-article-not-found">
          <p className="blog-article-tag">BLOG</p>

          <h1>Article Not Found</h1>

          <p>
            The article you are looking for could not be found.
          </p>

          <Link to="/blog">
            ← Back to Blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="blog-article-page">

      {/* HERO */}
      <section className="blog-article-hero">
        <div className="blog-article-hero-content">

          <p className="blog-article-tag">
            {article.category}
          </p>

          <h1>{article.title}</h1>

          <p className="blog-article-intro">
            {article.intro}
          </p>

        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="blog-article-content">

        <article className="blog-article-card">

          <div className="blog-article-label">
            BUDDHA SECURITY FACILITIES
          </div>

          {article.sections.map((section, index) => (
            <div className="blog-article-section" key={index}>

              <h2>{section.heading}</h2>

              <p>{section.text}</p>

            </div>
          ))}

        </article>
         <Link to="/blog" className="blog-back-link">
          ← Back to Blog
        </Link>


      </section>

      {/* CTA */}
      <section className="blog-article-cta">

        <p className="blog-article-tag">
          NEED PROFESSIONAL SUPPORT?
        </p>

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

export default BlogArticle;