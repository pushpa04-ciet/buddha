import { Link } from "react-router-dom";

function WhyUs() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="why-main-hero">

        <div className="why-hero-overlay"></div>

        <div className="why-hero-content">

          <p className="hero-small">
            BUDDHA SECURITY FACILITIES
          </p>

          <h1>
            WHY THEY WANT
            <br />
            <span>OUR SERVICES</span>
          </h1>

          <div className="hero-line"></div>

          <h2>
            OFFICE SECURITY SERVICES
          </h2>

          <h3>
            PROFESSIONAL SECURITY • TRUSTED PROTECTION
          </h3>

          <p>
            Protect Your Workplace. Protect Your People.
          </p>

        </div>

      </section>


      {/* ================= WHY CHOOSE US STRIP ================= */}

      <section className="why-benefits">

        <div className="benefit-title">
          <h2>
            WHY CHOOSE
            <br />
            US?
          </h2>
        </div>


        <div className="benefit-item">

          <div className="benefit-icon shield-icon">
            <svg viewBox="0 0 64 64">
              <path d="M32 5L54 13V29C54 43 44 54 32 59C20 54 10 43 10 29V13L32 5Z" />
              <path d="M21 31L29 39L44 23" />
            </svg>
          </div>

          <h3>
            EXPERT
            <br />
            PROFESSIONALS
          </h3>

        </div>


        <div className="benefit-item">

          <div className="benefit-icon">
            <svg viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="24" />
              <path d="M32 17V32L42 38" />
            </svg>
          </div>

          <h3>
            TIMELY
            <br />
            DELIVERY
          </h3>

        </div>


        <div className="benefit-item">

          <div className="benefit-icon">
            <svg viewBox="0 0 64 64">
              <rect x="16" y="28" width="32" height="25" rx="3" />
              <path d="M23 28V20C23 9 41 9 41 20V28" />
              <circle cx="32" cy="39" r="3" />
              <path d="M32 42V48" />
            </svg>
          </div>

          <h3>
            DATA
            <br />
            SECURITY
          </h3>

        </div>


        <div className="benefit-item">

          <div className="benefit-icon">
            <svg viewBox="0 0 64 64">
              <path d="M19 29V52H11V29H19Z" />
              <path d="M19 32L28 13C30 9 35 11 34 16L32 25H47C51 25 53 29 51 33L47 48C46 51 43 53 40 53H19Z" />
            </svg>
          </div>

          <h3>
            SATISFACTION
            <br />
            GUARANTEED
          </h3>

        </div>


        <div className="benefit-item">

          <div className="benefit-icon">
            <svg viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="25" />
              <text x="32" y="42" textAnchor="middle">
                ₹
              </text>
            </svg>
          </div>

          <h3>
            COST EFFECTIVE
            <br />
            SOLUTIONS
          </h3>

        </div>

      </section>


      {/* ================= THREE VERTICALS ================= */}

<section className="vertical-section">

  <div className="section-heading">

    <p>OUR KEY VERTICALS</p>

    <h2>
      Complete Facility
      <br />
      <span>Solutions.</span>
    </h2>

    <p className="heading-description">
      Buddha Security Facilities provides professional services
      through specialized verticals designed to support
      organizations across different operational requirements.
    </p>

  </div>


  <div className="vertical-grid">


    {/* ================= SECURITY FORCE ================= */}

    <div className="vertical-card security-vertical">

      <div className="vertical-number">
        01
      </div>

      <div className="vertical-icon">
        🛡
      </div>

      <p className="vertical-tag">
        SECURITY VERTICAL
      </p>

      <h2>
        Buddha
        <br />
        <span>Security Force</span>
      </h2>

      <p>
        Professional security personnel and tailored security
        solutions for industries, corporations and businesses.
      </p>

      <ul>

        <li>✓ Trained & Professional Security Personnel</li>

        <li>✓ 24×7 Security & Surveillance</li>

        <li>✓ Access Control & Visitor Management</li>

        <li>✓ Industrial & Corporate Security</li>

        <li>✓ Emergency Response</li>

      </ul>

      <Link to="/security-force">
        Explore Security Force →
      </Link>

    </div>


    {/* ================= HOUSEKEEPING ================= */}

    <div className="vertical-card housekeeping-vertical">

      <div className="vertical-number">
        02
      </div>

      <div className="vertical-icon">
        ✨
      </div>

      <p className="vertical-tag">
        HOUSEKEEPING VERTICAL
      </p>

      <h2>
        Buddha
        <br />
        <span>Housekeeping Services</span>
      </h2>

      <p>
        Professional housekeeping services designed to maintain
        clean, hygienic and well-organized workplaces.
      </p>

      <ul>

        <li>✓ Workplace Cleaning & Maintenance</li>

        <li>✓ Office Housekeeping Support</li>

        <li>✓ Common Area Maintenance</li>

        <li>✓ Hygiene & Cleanliness Support</li>

        <li>✓ Regular Supervision</li>

      </ul>

      <Link to="/housekeeping">
        Explore Housekeeping Services →
      </Link>

    </div>


    {/* ================= INDUSTRIAL MANPOWER ================= */}

    <div className="vertical-card manpower-vertical">

      <div className="vertical-number">
        03
      </div>

      <div className="vertical-icon">
        👷
      </div>

      <p className="vertical-tag">
        INDUSTRIAL MANPOWER
      </p>

      <h2>
        Buddha
        <br />
        <span>Industrial Manpower</span>
      </h2>

      <p>
        Dependable manpower support for industrial and commercial
        operations with reliable workforce deployment.
      </p>

      <ul>

        <li>✓ Industrial Support Staff</li>

        <li>✓ General Manpower Support</li>

        <li>✓ Workplace Support Personnel</li>

        <li>✓ Operational Support</li>

        <li>✓ Regular Supervision</li>

      </ul>

      <Link to="/industrial-manpower">
        Explore Industrial Manpower →
      </Link>

    </div>


  </div>

</section>

      {/* ================= INDUSTRIES ================= */}

      <section className="industries-section">

        <div className="section-heading">

          <p>WHERE WE SERVE</p>

          <h2>
            Security For
            <br />
            <span>Different Workplaces.</span>
          </h2>

        </div>


        <div className="industry-list">

          <div>Corporate Offices</div>

          <div>IT Companies</div>

          <div>Commercial Buildings</div>

          <div>Banks & Financial Institutions</div>

          <div>Factories & Industrial Units</div>

          <div>Warehouses & Business Premises</div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-priority">

        <div className="priority-content">

          <p>
            WHY CHOOSE US?
          </p>

          <h2>
            Discipline • Alertness
            <br />
            Trust • Professionalism
          </h2>

          <div className="priority-line"></div>

          <p className="priority-description">
            We deliver dependable manpower tailored to your
            organization's security requirements.
          </p>

        </div>

      </section>


      {/* ================= SAFETY ================= */}

      <section className="safety-section">

        <p>
          YOUR SAFETY IS OUR PRIORITY
        </p>

        <h2>
          Professional Protection.
          <br />
          Dependable Service.
        </h2>

        <a href="tel:8096083322">
          ☎ 8096083322
        </a>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="why-contact">

        <p>
          CONTACT US
        </p>

        <h2>
          BUDDHA SECURITY FACILITIES
        </h2>

        <p>
          Security You Can Trust • Service You Can Depend On
        </p>

        <a href="tel:8096083322">
          Call 8096083322
        </a>

      </section>

    </>
  );
}

export default WhyUs;