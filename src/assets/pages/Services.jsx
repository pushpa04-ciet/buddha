function Services() {
  return (
    <div className="inner-page">

      {/* PAGE HEADER */}
      <section className="page-header">
        <p>OUR SERVICES</p>

        <h1>
          Security & Facility
          <br />
          Management Solutions
        </h1>
      </section>


      {/* THREE SERVICE VERTICALS */}
      <section className="services-vertical-section">

        <div className="services-vertical-heading">
          <p>OUR THREE SERVICE VERTICALS</p>

          <h2>
            Complete Workplace
            <br />
            <span>Solutions.</span>
          </h2>

          <p>
            Professional solutions designed to support your
            security, workplace and industrial manpower
            requirements.
          </p>
        </div>


        {/* =================================================
            01 SECURITY SERVICES
        ================================================= */}

        <div className="service-vertical-card">

          <div className="service-vertical-image">
            <img
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=85"
              alt="Security Services"
            />
          </div>


          <div className="service-vertical-content">

            <span className="service-vertical-number">
              01
            </span>

            <div className="service-vertical-icon">
              🛡️
            </div>

            <h2>
              Security Services
            </h2>

            <p>
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
              <li>Premises Patrolling</li>
              <li>Emergency Response</li>
              <li>Incident Reporting</li>
            </ul>

            <a href="/security-force">
              Explore Security Services →
            </a>

          </div>

        </div>


        {/* =================================================
            02 HOUSEKEEPING SERVICES
        ================================================= */}

        <div className="service-vertical-card">

          <div className="service-vertical-image">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85"
              alt="Housekeeping Services"
            />
          </div>


          <div className="service-vertical-content">

            <span className="service-vertical-number">
              02
            </span>

            <div className="service-vertical-icon">
              ✨
            </div>

            <h2>
              Housekeeping Services
            </h2>

            <p>
              Professional housekeeping and workplace support
              services focused on maintaining clean, hygienic
              and well-managed environments.
            </p>

            <ul>
              <li>Corporate Housekeeping</li>
              <li>Commercial Facility Cleaning</li>
              <li>Common Area Maintenance</li>
              <li>Washroom Maintenance</li>
              <li>Workplace Hygiene Support</li>
              <li>Daily Cleaning Support</li>
              <li>Professional Housekeeping Staff</li>
              <li>Facility Maintenance Assistance</li>
            </ul>

            <a href="/services#housekeeping">
              Explore Housekeeping Services →
            </a>

          </div>

        </div>


        {/* =================================================
            03 INDUSTRIAL MANPOWER
        ================================================= */}

        <div className="service-vertical-card">

          <div className="service-vertical-image">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85"
              alt="Industrial Manpower Services"
            />
          </div>


          <div className="service-vertical-content">

            <span className="service-vertical-number">
              03
            </span>

            <div className="service-vertical-icon">
              👷
            </div>

            <h2>
              Industrial Manpower
            </h2>

            <p>
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

            <a href="/services#industrial-manpower">
              Explore Industrial Manpower →
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Services;