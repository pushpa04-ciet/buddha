function Services() {
  return (
    <div className="inner-page">

      <section className="page-header">
        <p>OUR SERVICES</p>

        <h1>
          Security & Facility
          <br />
          Management Solutions
        </h1>
      </section>


      <section className="service-grid">

        <div className="service-card">

          <div className="service-icon">🛡️</div>

          <h2>Buddha Security Force</h2>

          <p>
            Professional security services with trained guards,
            supervisors, access control, patrolling and emergency
            response.
          </p>

          <a href="/security-force">
            Explore Security Services →
          </a>

        </div>


        <div className="service-card">

          <div className="service-icon">✨</div>

          <h2>Buddha Housekeeping Services</h2>

          <p>
            Professional housekeeping and workplace support
            services designed around your organization's needs.
          </p>

          <a href="/housekeeping">
            Explore Housekeeping →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Services;