import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-line"></div>

            <p className="hero-small">
              PREVENT AND PROTECT
            </p>

            <h1>
              Protect Your
              <br />
              <span>Workplace.</span>
              <br />
              Protect Your People.
            </h1>

            <p className="hero-text">
              Buddha Security Facilities provides professional
              security, housekeeping and industrial manpower
              solutions designed around the specific needs of
              your organization.
            </p>

            <div className="hero-buttons">

              <a
                href="tel:8096083322"
                className="btn-primary"
              >
                Get a Quote →
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

            <strong>
              PREVENT
              <br />
              & PROTECT
            </strong>

            <span>
              Professional Service
            </span>

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
              and Protect
            </span>

          </div>

        </div>


        <div className="about-home-content">

          <p className="section-tag">
            ABOUT BUDDHA SECURITY FACILITIES
          </p>

          <h2>
            More Than a Service.
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
          SECURITY PARTNER SECTION
      ========================================================= */}
      <section className="partner-home">

        <div className="partner-home-content">

          <p className="section-tag">
            YOUR SECURITY PARTNER
          </p>

          <h2>
            Security Is Not Just
            <br />
            <span>Guarding.</span>
          </h2>

          <p>
            We are a specialized security partner for Corporate
            Offices, Universities and Commercial Complexes such as
            Sricity.
          </p>

          <p>
            Modern security requires much more than simply placing
            personnel at an entrance. It involves managing vendor
            entries, delivery verification, visitor movement,
            CCTV monitoring and customer safety while maintaining
            control over the physical and operational environment.
          </p>

          <p>
            Our focus is to combine disciplined manpower,
            professional supervision and systematic reporting to
            create a safer and more controlled workplace.
          </p>

        </div>


        <div className="partner-home-points">

          <div>
            <span>01</span>
            <h3>Vendor Entry Management</h3>
            <p>
              Controlled vendor movement and verification at
              workplace entry points.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Delivery Verification</h3>
            <p>
              Supporting safe and systematic handling of incoming
              deliveries.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>CCTV Monitoring</h3>
            <p>
              Monitoring support to strengthen workplace
              surveillance and awareness.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Customer Safety</h3>
            <p>
              Maintaining a professional and secure environment
              for employees, visitors and customers.
            </p>
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

      <a href="/security-force">
        Explore Security Services →
      </a>

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

      <a href="/services">
        Explore Housekeeping Services →
      </a>

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

      <a href="/services">
        Explore Industrial Manpower →
      </a>

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


      {/* =========================================================
          PROFESSIONAL WORKFORCE
      ========================================================= */}
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

          <div>
            <strong>01</strong>
            <h3>Ex-Service Discipline</h3>
            <p>
              Professional discipline and responsible workplace
              conduct.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>24/7 Supervision</h3>
            <p>
              Continuous supervision to maintain service
              standards.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Daily Reporting</h3>
            <p>
              Systematic reporting for better operational
              visibility.
            </p>
          </div>

          <div>
            <strong>04</strong>
            <h3>Business Focus</h3>
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

    </>
  );
}

export default Home;