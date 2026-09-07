function Housekeeping() {
  return (
    <div className="inner-page housekeeping-page">

      {/* TOP CARD */}
      <section className="page-header">
        <p>HOUSEKEEPING SERVICES</p>

        <h1>
          Professional Housekeeping
          <br />
          <span>Clean • Safe • Organized</span>
        </h1>
      </section>

      {/* MAIN SERVICE CARD */}
      <section className="service-detail-page">

        {/* LEFT IMAGE */}
        <div className="service-detail-image">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
            alt="Professional Housekeeping Services"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="service-detail-content">

          <p className="section-tag">
            HOUSEKEEPING SERVICES
          </p>

          <h2>
            Professional Housekeeping
            <br />
            <span>Support for Your Workplace</span>
          </h2>

          <p>
            Our housekeeping services are designed to maintain
            clean, hygienic and well-organized workplaces.
            We provide reliable personnel and structured
            housekeeping support based on your organization's needs.
          </p>

          <div className="service-detail-list">

            <div>
              <strong>✓</strong>
              <span>Workplace Cleaning & Maintenance</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Office Housekeeping Support</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Common Area Maintenance</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Hygiene & Cleanliness Support</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Regular Supervision</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Reliable Housekeeping Manpower</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Housekeeping;