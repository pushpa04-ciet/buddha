import { Link } from "react-router-dom";
function SecurityPartner() {
  return (
    <div className="security-partner-page">

      {/* HERO */}

      <section className="security-partner-hero">

        <div className="security-partner-hero-overlay"></div>

        <div className="security-partner-hero-content">

          <p>
            YOUR SECURITY PARTNER
          </p>

          <h1>
            Security Is Not Just
            <br />
            <span>Guarding.</span>
          </h1>

          <div className="security-partner-line"></div>

          <p className="security-partner-hero-text">
            Professional security management built around
            people, movement, technology and workplace safety.
          </p>

        </div>

      </section>


      {/* INTRO */}

      <section className="security-partner-intro">

        <div className="security-partner-intro-content">

          <p className="section-tag">
            A COMPLETE SECURITY APPROACH
          </p>

          <h2>
            Your Business Deserves
            <br />
            <span>More Than Guarding.</span>
          </h2>

          <p>
            We are a specialized security partner for Corporate
            Offices, Universities and Commercial Complexes such as
            Sricity.
          </p>

          <p>
            Modern security requires much more than simply
            placing personnel at an entrance. It involves
            managing vendor entries, delivery verification,
            visitor movement, CCTV monitoring and customer
            safety while maintaining control over the physical
            and operational environment.
          </p>

          <p>
            Our focus is to combine disciplined manpower,
            professional supervision and systematic reporting
            to create a safer and more controlled workplace.
          </p>

        </div>

      </section>


      {/* FOUR SECURITY MATTERS */}

      <section className="security-partner-matters">

        <div className="security-partner-heading">

          <p className="section-tag">
            SECURITY MANAGEMENT
          </p>

          <h2>
            Four Areas That
            <br />
            <span>Strengthen Your Security.</span>
          </h2>

          <p>
            Effective workplace security depends on managing
            every important movement and activity around your
            premises.
          </p>

        </div>


        <div className="security-partner-grid">

          {/* 01 */}

          <div className="security-partner-card">

            <div className="security-partner-number">
              01
            </div>

            <div className="security-partner-icon">
              ⇥
            </div>

            <h3>
              Vendor Entry Management
            </h3>

            <p>
              Controlled vendor movement and verification
              at workplace entry points, helping maintain
              visibility and discipline around vendor access.
            </p>

            <span className="security-card-line"></span>

          </div>


          {/* 02 */}

          <div className="security-partner-card">

            <div className="security-partner-number">
              02
            </div>

            <div className="security-partner-icon">
              ✓
            </div>

            <h3>
              Delivery Verification
            </h3>

            <p>
              Supporting safe and systematic handling of
              incoming deliveries while maintaining proper
              workplace entry procedures.
            </p>

            <span className="security-card-line"></span>

          </div>


          {/* 03 */}

          <div className="security-partner-card">

            <div className="security-partner-number">
              03
            </div>

            <div className="security-partner-icon">
              ◉
            </div>

            <h3>
              Visitor Movement & Access Control
            </h3>

            <p>
              Professional management of visitor movement
              and access points to support a more controlled
              and secure environment.
            </p>

            <span className="security-card-line"></span>

          </div>


          {/* 04 */}

          <div className="security-partner-card">

            <div className="security-partner-number">
              04
            </div>

            <div className="security-partner-icon">
              ◉
            </div>

            <h3>
              CCTV Monitoring & Customer Safety
            </h3>

            <p>
              Monitoring support to strengthen workplace
              surveillance, awareness and safety for
              employees, visitors and customers.
            </p>

            <span className="security-card-line"></span>

          </div>

        </div>

      </section>


      {/* OUR APPROACH */}

      <section className="security-partner-approach">

        <div className="security-partner-approach-left">

          <p className="section-tag">
            OUR APPROACH
          </p>

          <h2>
            We Manage the
            <br />
            <span>Security Responsibility.</span>
          </h2>

        </div>


        <div className="security-partner-approach-right">

          <p>
            Our focus is to take responsibility for the
            security requirements entrusted to us while
            maintaining professional service, supervision
            and reporting.
          </p>

          <p>
            We combine disciplined manpower, professional
            supervision and systematic reporting to support
            a safer and more controlled workplace.
          </p>

          <div className="security-approach-points">

            <div>
              <strong>01</strong>
              <span>Disciplined Manpower</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Professional Supervision</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Systematic Reporting</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Workplace Safety</span>
            </div>

          </div>

        </div>

      </section>


      {/* FINAL MESSAGE */}

      <section className="security-partner-final">

        <p className="section-tag">
          YOUR SECURITY PARTNER
        </p>

        <h2>
          We Manage Everything.
          <br />
          <span>You Focus On Your Business.</span>
        </h2>

        <p>
          We would be proud to be your security partner.
        </p>

        <Link to="/contact">
  TALK TO OUR TEAM →
</Link>
      </section>

    </div>
  );
}

export default SecurityPartner;