import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoQuoteOpen, setAutoQuoteOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };
  useEffect(() => {
  const timer = setInterval(() => {
    if (window.innerWidth > 768) {
    nextSlide();
    }
  }, 6000);

  return () => clearInterval(timer);
}, []);

useEffect(() => {
  const quoteTimer = setInterval(() => {
    setAutoQuoteOpen(true);
  }, 90000);

  return () => clearInterval(quoteTimer);
}, []);



  return (
    <>
      {/* ================= HERO ================= */}
<section className="hero">
  <div className="hero-bg"></div>
  <div className="hero-overlay"></div>

  <div className="hero-container">
    <div className="hero-phone">
  ☎ 8096083322
</div>
    {/* LEFT ARROW */}
    <button
      type="button"
      className="hero-arrow hero-arrow-left"
      onClick={prevSlide}
      aria-label="Previous slide"
    >
      ‹
    </button>

    {/* RIGHT ARROW */}
    <button
      type="button"
      className="hero-arrow hero-arrow-right"
      onClick={nextSlide}
      aria-label="Next slide"
    >
      ›
    </button>

    {/* SLIDER */}
    <div className="hero-slider">
      <div
        className="hero-slider-track"
        style={{
          transform: `translateX(-${currentSlide * 33.333333}%)`
        }}
      >

        {/* ================= SLIDE 1 ================= */}
        <div className="hero-slide slide-security">

          <div className="hero-content">

            <div className="hero-brand">
              <h2>BUDDHA SECURITY FACILITIES</h2>
              <span>Prevent and Protect</span>
            </div>

            <div className="hero-line"></div>

            <p className="hero-small">
              PROFESSIONAL SECURITY
            </p>

            <h1>
              Protect Your
              <br />
              <span>Workplace.</span>
              <br />
              Protect Your People.
            </h1>

            <p className="hero-text">
              Professional security solutions designed to protect
              people, property and business operations.
            </p>

            <div className="hero-buttons">
              <a href="tel:8096083322" className="btn-primary">
                Get a Quote →
              </a>

              <Link to="/security-force" className="btn-outline">
                Explore Security
              </Link>
            </div>

          </div>

          {/* SECURITY CARD */}
          <div className="hero-card">
            <div className="hero-card-icon">🛡️</div>

            <strong>
              SECURITY
              <br />
              SERVICES
            </strong>

            <span>
              Professional Protection
            </span>
          </div>

        </div>


        {/* ================= SLIDE 2 ================= */}
        <div className="hero-slide slide-housekeeping">

          <div className="hero-content">

            <div className="hero-brand">
              <h2>BUDDHA SECURITY FACILITIES</h2>
              <span>Prevent and Protect</span>
            </div>

            <div className="hero-line"></div>

            <p className="hero-small">
              HOUSEKEEPING SERVICES
            </p>

            <h1>
              Clean Spaces.
              <br />
              <span>Professional</span>
              <br />
              Workplaces.
            </h1>

            <p className="hero-text">
              Reliable housekeeping services focused on workplace
              hygiene, cleanliness and professional facility support.
            </p>

            <div className="hero-buttons">
              <Link to="/housekeeping" className="btn-primary">
                Get a Quote →
              </Link>

              <Link to="/housekeeping" className="btn-outline">
                Explore Housekeeping
              </Link>
            </div>

          </div>

          {/* HOUSEKEEPING CARD */}
          <div className="hero-card">
            <div className="hero-card-icon">✨</div>

            <strong>
              HOUSEKEEPING
              <br />
              SERVICES
            </strong>

            <span>
              Clean • Safe • Professional
            </span>
          </div>

        </div>


        {/* ================= SLIDE 3 ================= */}
        <div className="hero-slide slide-manpower">

          <div className="hero-content">

            <div className="hero-brand">
              <h2>BUDDHA SECURITY FACILITIES</h2>
              <span>Prevent and Protect</span>
            </div>

            <div className="hero-line"></div>

            <p className="hero-small">
              INDUSTRIAL MANPOWER
            </p>

            <h1>
              Reliable People.
              <br />
              <span>Reliable</span>
              <br />
              Operations.
            </h1>

            <p className="hero-text">
              Dependable skilled and semi-skilled manpower support
              for industrial, warehouse and operational environments.
            </p>

            <div className="hero-buttons">
              <Link to="/industrial-manpower" className="btn-primary">
                Get a Quote →
              </Link>

              <Link
                to="/industrial-manpower"
                className="btn-outline"
              >
                Explore Manpower
              </Link>
            </div>

          </div>

          {/* MANPOWER CARD */}
          <div className="hero-card">
            <div className="hero-card-icon">👷</div>

            <strong>
              INDUSTRIAL
              <br />
              MANPOWER
            </strong>

            <span>
              Skilled & Reliable Workforce
            </span>
          </div>

        </div>

      </div>
    </div>


    {/* DOTS */}
    <div className="hero-dots">

      <span
        className={currentSlide === 0 ? "active" : ""}
        onClick={() => setCurrentSlide(0)}
      ></span>

      <span
        className={currentSlide === 1 ? "active" : ""}
        onClick={() => setCurrentSlide(1)}
      ></span>

      <span
        className={currentSlide === 2 ? "active" : ""}
        onClick={() => setCurrentSlide(2)}
      ></span>

    </div>

  </div>
</section>

      {/* =========================================================
          TRUST / INTRO BAR
      ========================================================= */}
      <section className="trust-bar">

        <div>
          <strong>24×7</strong>
          <span>Security Support</span>
        </div>

        <div>
          <strong>3</strong>
          <span>Service Verticals</span>
        </div>

        <div>
          <strong>EX</strong>
          <span>Service Leadership</span>
        </div>

        <div>
          <strong>PRO</strong>
          <span>Professional Workforce</span>
        </div>

      </section>


      {/* =========================================================
          ABOUT SECTION
      ========================================================= */}
      <section className="about-home">

        <div className="about-photo">

          <img
            src="https://images.unsplash.com/photo-1779764372293-d2b99883cb45?auto=format&fit=crop&w=1400&q=85"
            alt="Professional security service"
          />

          <div className="experience-box">
  <strong>
    Prevent
  </strong>

  <span>
    and
    <br />
    Protect
  </span>
</div>

        </div>


        <div className="about-home-content">

          <p className="section-tag">
            ABOUT BUDDHA SECURITY FACILITIES
          </p>

          <h2>
            More Than a Service.
            <br />
            <span> A Trusted Partner.</span>
          </h2>

          <p>
            Buddha Security Facilities is a professional service
            organization focused on protecting workplaces,
            supporting facility operations and providing dependable
            manpower solutions.
          </p>

          <p>
            We believe that security is not just about guarding a
            gate. Effective protection involves understanding the
            complete workplace environment — people, visitors,
            vendors, deliveries, assets, systems and daily
            operations.
          </p>

          <p>
            Our approach is customized around each organization's
            requirements rather than providing a ready-made
            solution. We focus on discipline, responsibility,
            alertness and professional service delivery.
          </p>


          <div className="check-list">

            <div>
              ✓ Trained & Disciplined Personnel
            </div>

            <div>
              ✓ Customized Service Solutions
            </div>

            <div>
              ✓ Professional Supervision
            </div>

            <div>
              ✓ Reliable Workforce Support
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
      {/* =========================================================
    SECURITY VISUAL SHOWCASE
========================================================= */}
<section className="security-showcase">

  <div className="security-showcase-heading">
    <p className="section-tag">SECURITY IN ACTION</p>

    <h2>
      Protection That
      <br />
      <span>You Can See.</span>
    </h2>

    <p>
      Professional security personnel, disciplined operations
      and dependable protection for every environment.
    </p>
  </div>

  <div className="security-image-grid">

    <div className="security-image-card">
      <img
        src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=85"
        alt="Professional Security Guard"
      />

      <div className="security-image-overlay">
        <span>01</span>
        <h3>Professional Security</h3>
        <p>Trained & disciplined personnel</p>
        <Link to="/security-force" className="security-view-btn">
    View Protection →
  </Link>
      </div>
    </div>

    <div className="security-image-card featured">
      <img
        src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85"
        alt="Security Protection"
      />

      <div className="security-image-overlay">
        <span>02</span>
        <h3>Trusted Protection</h3>
        <p>Workplace safety & security support</p>
         <Link to="/security-force" className="security-view-btn">
    View Protection →
  </Link>
      </div>
    </div>

    <div className="security-image-card">
      <img
        src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=85"
        alt="Security Team"
      />

      <div className="security-image-overlay">
        <span>03</span>
        <h3>Reliable Workforce</h3>
        <p>Professional service delivery</p>
         <Link to="/security-force" className="security-view-btn">
    View Protection →
  </Link>
      </div>
    </div>

  </div>

</section>


      {/* THREE SERVICE VERTICALS */}
<section className="home-verticals">

  <div className="home-verticals-heading">
    <p className="section-tag">
      OUR THREE SERVICE VERTICALS
    </p>

    <h2>
      Complete Workplace
      <br />
      <span>Solutions.</span>
    </h2>

    <p>
      Buddha Security Facilities provides three specialized
      service verticals designed to support security,
      workplace hygiene and industrial manpower requirements.
    </p>
  </div>


  {/* 01 SECURITY SERVICES */}
  <div className="vertical-service-card">

    <div className="vertical-service-image">
      <img
        src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=85"
        alt="Security Services"
      />
    </div>

    <div className="vertical-service-content">

      <div className="vertical-icon">
        🛡️
      </div>

      <span className="vertical-number">
        01
      </span>

      <h3>
        Security Services
      </h3>

      <p className="vertical-description">
        Professional, disciplined and uniformed security
        personnel supported by supervision and systematic
        workplace security practices.
      </p>

      <ul>
        <li>24×7 Security Guards & Supervisors</li>
        <li>Vendor & Visitor Entry Management</li>
        <li>Delivery Verification</li>
        <li>CCTV Monitoring Support</li>
        <li>Employee & Vehicle Entry Management</li>
        <li>Premises Patrolling & Incident Reporting</li>
        <li>Fire & Safety Support</li>
      </ul>

      <Link to="/security-force">
  Explore Security Services →
</Link>

    </div>
  </div>


  {/* 02 HOUSEKEEPING SERVICES */}
  <div className="vertical-service-card">

    <div className="vertical-service-image">
      <img
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85"
        alt="Housekeeping Services"
      />
    </div>

    <div className="vertical-service-content">

      <div className="vertical-icon">
        ✦
      </div>

      <span className="vertical-number">
        02
      </span>

      <h3>
        Housekeeping Services
      </h3>

      <p className="vertical-description">
        Professional housekeeping support focused on
        maintaining clean, hygienic and well-managed
        workplace environments.
      </p>

      <ul>
        <li>Corporate Housekeeping</li>
        <li>Commercial Facility Cleaning</li>
        <li>Common Area Maintenance</li>
        <li>Washroom Maintenance</li>
        <li>Workplace Hygiene Support</li>
        <li>Professional Housekeeping Staff</li>
        <li>Daily Cleaning Support</li>
        <li>Facility Maintenance Assistance</li>
      </ul>

      <Link to="/housekeeping">
  Explore Housekeeping Services →
</Link>

    </div>
  </div>


  {/* 03 INDUSTRIAL MANPOWER */}
  <div className="vertical-service-card">

    <div className="vertical-service-image">
      <img
        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85"
        alt="Industrial Manpower Services"
      />
    </div>

    <div className="vertical-service-content">

      <div className="vertical-icon">
        👥
      </div>

      <span className="vertical-number">
        03
      </span>

      <h3>
        Industrial Manpower
      </h3>

      <p className="vertical-description">
        Dependable manpower support for industrial,
        warehouse, construction and operational
        environments.
      </p>

      <ul>
        <li>Skilled & Semi-Skilled Manpower</li>
        <li>Industrial Workforce Support</li>
        <li>Warehouse Manpower</li>
        <li>Loading & Unloading Support</li>
        <li>Production Support Staff</li>
        <li>Site Support Manpower</li>
        <li>Operational Assistance</li>
        <li>Workforce Supervision</li>
      </ul>

      <Link to="/industrial-manpower">
  Explore Industrial Manpower →
</Link>

    </div>
  </div>

</section>


      {/* =========================================================
          ELECTRONIC SECURITY
      ========================================================= */}
      <section className="electronic-home">

        <div className="electronic-home-content">

          <p className="section-tag">
            TECHNOLOGY ENABLED PROTECTION
          </p>

          <h2>
            Electronic Security
            <br />
            <span>Solutions.</span>
          </h2>

          <p>
            Modern security combines trained people with
            technology. Our electronic security solutions are
            designed to strengthen surveillance, access control
            and workplace safety.
          </p>

          <div className="check-list">

            <div>
              ✓ CCTV & Surveillance Support
            </div>

            <div>
              ✓ Access Control Systems
            </div>

            <div>
              ✓ Fire Alarm Systems
            </div>

            <div>
              ✓ Burglar Alarm Systems
            </div>

            <div>
              ✓ Attendance & Employee Tracking
            </div>

            <div>
              ✓ Doors & Gates Automation
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section className="industries">

        <div className="industries-heading">

          <p className="section-tag">
            INDUSTRIES WE SERVE
          </p>

          <h2>
            Solutions Built Around
            <br />
            <span>Your Industry.</span>
          </h2>

          <p>
            Our services can be customized for different business,
            industrial and institutional environments.
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
            🎓
            <span>Universities</span>
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
            <span>Warehouses & Logistics</span>
          </div>

          <div>
            🏥
            <span>Healthcare Facilities</span>
          </div>

          <div>
            🏘️
            <span>Residential Communities</span>
          </div>

          <div>
            🏬
            <span>Commercial Complexes</span>
          </div>

        </div>

      </section>
      {/* PROFESSIONAL WORKFORCE */}
<section className="workforce-home">

  <div className="workforce-home-content">

    <p className="section-tag">
      OUR PROFESSIONAL WORKFORCE
    </p>

    <h2>
      Disciplined People.
      <br />
      <span>Professional Service.</span>
    </h2>

    <p>
      We provide ex-service, disciplined and uniformed staff
      with professional supervision and systematic daily
      reporting.
    </p>

    <p>
      Our objective is to take care of the operational
      responsibilities entrusted to us, allowing our clients
      to focus on their core business.
    </p>

  </div>


  <div className="workforce-points">

    {/* FEATURE 01 */}
    <div className="workforce-feature">

      <div className="workforce-feature-icon">
        🛡️
      </div>

      <strong>01</strong>

      <h3>
        Ex-Service Discipline
      </h3>

      <p>
        Professional discipline and responsible workplace
        conduct.
      </p>

    </div>


    {/* FEATURE 02 */}
    <div className="workforce-feature">

      <div className="workforce-feature-icon">
        ◉
      </div>

      <strong>02</strong>

      <h3>
        24/7 Supervision
      </h3>

      <p>
        Continuous supervision to maintain service
        standards.
      </p>

    </div>


    {/* FEATURE 03 */}
    <div className="workforce-feature">

      <div className="workforce-feature-icon">
        ✓
      </div>

      <strong>03</strong>

      <h3>
        Daily Reporting
      </h3>

      <p>
        Systematic reporting for better operational
        visibility.
      </p>

    </div>


    {/* FEATURE 04 */}
    <div className="workforce-feature">

      <div className="workforce-feature-icon">
        ◆
      </div>

      <strong>04</strong>

      <h3>
        Business Focus
      </h3>

      <p>
        We manage the service responsibilities so you can
        focus on your business.
      </p>

    </div>

  </div>

</section>


      


      {/* =========================================================
          FOUNDER
      ========================================================= */}
      <section className="founder-home">

        <div className="founder-home-content">

          <p className="section-tag">
            LEADERSHIP
          </p>

          <h2>
            Moturu Venkateswar Rao
          </h2>

          <h3>
            (Air veteran)
          </h3>

          <p>
            Moturu Venkateswar Rao brings experience-driven
            leadership and a strong focus on discipline,
            professional conduct, security awareness and
            responsible service delivery.
          </p>

          <p>
            His approach is built around understanding the
            organization's requirements and creating practical,
            dependable solutions around its operational needs.
          </p>

          <Link
            to="/founder"
            className="text-button"
          >
            Meet Our Founder →
          </Link>

        </div>


        <div className="founder-home-contact">

          <span>
            CONTACT
          </span>

          <a href="tel:8096083322">
            8096083322
          </a>

          <strong>
            PREVENT AND PROTECT
          </strong>

        </div>

      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
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
                Our services are tailored to match the specific
                requirements of each organization.
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
                honesty and responsible professional behaviour.
              </p>

            </div>

          </div>


          <div className="why-item">

            <b>03</b>

            <div>

              <h3>
                Professional Supervision
              </h3>

              <p>
                Supervision and daily reporting help maintain
                consistency and accountability.
              </p>

            </div>

          </div>


          <div className="why-item">

            <b>04</b>

            <div>

              <h3>
                One Trusted Partner
              </h3>

              <p>
                Security, housekeeping and industrial manpower
                solutions under one professional service partner.
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


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="final-cta">

        <div>

          <p>
            PREVENT AND PROTECT
          </p>

          <h2>
            We Would Be Proud
            <br />
            To Be Your Partner.
          </h2>

          <p>
            Tell us about your security, housekeeping or
            manpower requirements and let us build a solution
            around your business.
          </p>

        </div>


        <div className="cta-actions">

          <a href="tel:8096083322">
            Call 8096083322
          </a>

          <Link to="/contact">
            Get In Touch →
          </Link>

        </div>

      </section>
      {/* =========================================================
    AUTOMATIC QUOTE POPUP
========================================================= */}
{autoQuoteOpen && (
  <div
    className="auto-quote-overlay"
    onClick={() => setAutoQuoteOpen(false)}
  >
    <div
      className="auto-quote-card"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        type="button"
        className="auto-quote-close"
        onClick={() => setAutoQuoteOpen(false)}
        aria-label="Close"
      >
        ×
      </button>

      <div className="auto-quote-icon">
        🛡️
      </div>

      <p className="section-tag">
        BUDDHA SECURITY FACILITIES
      </p>

      <h2>
        Need Professional
        <br />
        <span>Security Support?</span>
      </h2>

      <p>
        Talk to our team about your security, housekeeping
        or industrial manpower requirements.
      </p>

      <div className="auto-quote-actions">

        <a href="tel:8096083322">
          📞 Call Now
        </a>

        <Link
          to="/contact"
          onClick={() => setAutoQuoteOpen(false)}
        >
          Get a Quote →
        </Link>

      </div>

    </div>
  </div>
)}

    </>
  );
}

export default Home;