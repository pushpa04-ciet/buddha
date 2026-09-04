import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <div className="hero-container">
          <div className="hero-content">

            <div className="hero-line"></div>

            <p className="hero-small">
              PROFESSIONAL SECURITY • TRUSTED PROTECTION
            </p>

            <h1>
              Protect Your
              <br />
              <span>Workplace.</span>
              <br />
              Protect Your People.
            </h1>

            <p className="hero-text">
              We provide trained, disciplined and professional
              security personnel with customized protection
              solutions designed around your organization.
            </p>

            <div className="hero-buttons">
              <a
                href="tel:9908540044"
                className="btn-primary"
              >
                Get a Security Quote →
              </a>

              <Link
                to="/services"
                className="btn-outline"
              >
                Explore Services
              </Link>
            </div>

          </div>

          <div className="hero-card">
            <div className="hero-card-icon">
              🛡️
            </div>

            <strong>24 × 7</strong>

            <span>
              Security Coverage
            </span>
          </div>

        </div>
      </section>


      {/* TRUST BAR */}
      <section className="trust-bar">

        <div>
          <strong>2017</strong>
          <span>Serving Since</span>
        </div>

        <div>
          <strong>24×7</strong>
          <span>Security Coverage</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Client Focused</span>
        </div>

        <div>
          <strong>5+</strong>
          <span>Industry Sectors</span>
        </div>

      </section>


      {/* ABOUT SECTION */}
      <section className="about-home">

        <div className="about-photo">

          <img
            src="https://images.unsplash.com/photo-1779764372293-d2b99883cb45?auto=format&fit=crop&w=1400&q=85"
            alt="Professional security service"
          />

          <div className="experience-box">
            <strong>Professional</strong>
            <span>Security Services</span>
          </div>

        </div>


        <div className="about-home-content">

          <p className="section-tag">
            ABOUT BUDDHA SECURITY FACILITIES
          </p>

          <h2>
            Security You Can
            <span> Trust.</span>
          </h2>

          <p>
            Buddha Security Facilities provides professional,
            disciplined and dependable security solutions for
            organizations that value safety, people and assets.
          </p>

          <p>
            Our approach is not a ready-made service. We
            understand each client's requirements and create
            a customized security approach around their
            workplace.
          </p>


          <div className="check-list">

            <div>
              ✓ Trained & Disciplined Personnel
            </div>

            <div>
              ✓ Customized Security Solutions
            </div>

            <div>
              ✓ Professional Supervision
            </div>

            <div>
              ✓ Reliable Service Support
            </div>

          </div>


          <Link
            to="/about"
            className="text-button"
          >
            Discover More About Us →
          </Link>

        </div>

      </section>
      {/* TWO SERVICE VERTICALS */}
      <section className="services-home">

        <div className="section-title">

          <p className="section-tag">
            OUR TWO SERVICE VERTICALS
          </p>

          <h2>
            Complete Protection.
            <br />
            <span>Professional Service.</span>
          </h2>

          <p>
            Buddha Security Facilities operates through two
            specialized service verticals designed to support
            your organization's security and workplace needs.
          </p>

        </div>


        <div className="service-main-grid">


          {/* BUDDHA SECURITY FORCE */}
<div className="big-service">

  <div className="service-image">
    <img
      src="https://images.unsplash.com/photo-1779764372293-d2b99883cb45?auto=format&fit=crop&w=1400&q=85"
      alt="Buddha Security Force"
    />
  </div>

  <div className="service-info">
    <span className="number">01</span>

    <h3>Buddha Security Force</h3>

    <p>
      Professional security manpower and supervision designed
      to protect your premises, people and valuable assets.
    </p>

    <ul>
      <li>24×7 Security & Surveillance</li>
      <li>Trained Security Guards & Supervisors</li>
      <li>Visitor & Access Control</li>
      <li>Employee & Vehicle Entry Management</li>
      <li>Premises Patrolling</li>
      <li>Emergency Response & Incident Reporting</li>
    </ul>

    <Link to="/security-force">
      View Security Services →
    </Link>
  </div>

          </div>
    {/* ELECTRONIC SECURITY SOLUTIONS */}

<div className="big-service">

  <div className="service-image">

    <img
  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=85"
  alt="CCTV Surveillance Security"
/>

  </div>

  <div className="service-info">

    <span className="number">
      02
    </span>

    <h3>
      Electronic Security Solutions
    </h3>

    <p>
      Technology-enabled security solutions designed to
      strengthen surveillance, access control and workplace
      safety.
    </p>

    <ul>

      <li>
        CCTV & Surveillance Support
      </li>

      <li>
        Access Control Systems
      </li>

      <li>
        Fire Alarm Systems
      </li>

      <li>
        Burglar Alarm Systems
      </li>

      <li>
        Attendance & Employee Tracking
      </li>

      <li>
        Doors & Gates Automation
      </li>

    </ul>

    <Link to="/security-force">
      Explore Security Solutions →
    </Link>
</div>
  </div>

</div>
</section>
      
      {/* INDUSTRIES */}
      <section className="industries">

        <div className="industries-heading">

          <p className="section-tag">
            INDUSTRIES WE SERVE
          </p>

          <h2>
            Security Built Around
            <br />
            <span>Your Industry.</span>
          </h2>

          <p>
            Our experience extends across different business
            environments and operational requirements.
          </p>

        </div>


        <div className="industry-grid">

          <div>
            🏭
            <span>Manufacturing</span>
          </div>

          <div>
            🏢
            <span>Corporate Offices</span>
          </div>

          <div>
            💻
            <span>IT Companies</span>
          </div>

          <div>
            🏨
            <span>Hospitality</span>
          </div>

          <div>
            🥛
            <span>Dairy</span>
          </div>

          <div>
            🏗️
            <span>Construction</span>
          </div>

          <div>
            🏦
            <span>Banks & Financial Institutions</span>
          </div>

          <div>
            📦
            <span>Warehouses & Business Premises</span>
          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="why-home">

        <div className="why-image">

          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
            alt="Professional workplace"
          />

        </div>


        <div className="why-content">

          <p className="section-tag">
            WHY CHOOSE US?
          </p>

          <h2>
            More Than Security.
            <br />
            <span>A Trusted Partnership.</span>
          </h2>


          <div className="why-item">

            <b>01</b>

            <div>
              <h3>
                Customized Solutions
              </h3>

              <p>
                Our services are tailored to match the
                organization's specific requirements.
              </p>
            </div>

          </div>


          <div className="why-item">

            <b>02</b>

            <div>
              <h3>
                Discipline & Alertness
              </h3>

              <p>
                We focus on discipline, alertness, sincerity,
                honesty and responsible behaviour.
              </p>
            </div>

          </div>


          <div className="why-item">

            <b>03</b>

            <div>
              <h3>
                Experienced Leadership
              </h3>

              <p>
                Professional security operations supported by
                extensive practical experience and training.
              </p>
            </div>

          </div>


          <div className="why-item">

            <b>04</b>

            <div>
              <h3>
                Cost-Effective Protection
              </h3>

              <p>
                We aim to balance security requirements,
                Fire & Safety services and cost-effectiveness.
              </p>
            </div>

          </div>


          <Link
            to="/why-us"
            className="text-button"
          >
            Why Choose Buddha →
          </Link>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="final-cta">

        <div>

          <p>
            YOUR SAFETY IS OUR PRIORITY
          </p>

          <h2>
            Let's Build a Safer
            <br />
            Workplace Together.
          </h2>

        </div>


        <div className="cta-actions">

          <a href="tel:9908540044">
            Call 9908540044
          </a>

          <Link to="/contact">
            Get In Touch →
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;