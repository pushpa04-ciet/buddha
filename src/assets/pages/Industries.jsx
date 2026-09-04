function Industries() {
  const industries = [
    {
      icon: "🏢",
      title: "Corporate Offices",
      text: "Professional security solutions for corporate workplaces and business offices."
    },
    {
      icon: "💻",
      title: "IT Companies & Technology Parks",
      text: "Disciplined security support for technology campuses and IT environments."
    },
    {
      icon: "🏬",
      title: "Commercial Buildings",
      text: "Access control, surveillance support and professional security for commercial premises."
    },
    {
      icon: "🏦",
      title: "Banks & Financial Institutions",
      text: "Security services focused on protecting people, premises and sensitive operations."
    },
    {
      icon: "🏭",
      title: "Factories & Industrial Units",
      text: "Security management designed for industrial premises, employees and assets."
    },
    {
      icon: "📦",
      title: "Warehouses & Logistics Centers",
      text: "Reliable security support for storage, movement of goods and premises protection."
    },
    {
      icon: "🏥",
      title: "Hospitals & Healthcare",
      text: "Professional security support for healthcare facilities and their visitors."
    },
    {
      icon: "🎓",
      title: "Schools & Colleges",
      text: "Security personnel and access management for educational institutions."
    },
    {
      icon: "🏘️",
      title: "Residential Communities",
      text: "Gate management, visitor control and premises security for residential communities."
    },
    {
      icon: "🏨",
      title: "Hotels & Hospitality",
      text: "Security solutions designed around guest safety, staff movement and premises protection."
    },
    {
      icon: "🏗️",
      title: "Construction Sites",
      text: "Security support for construction locations, materials, equipment and site access."
    },
    {
      icon: "🛍️",
      title: "Retail & Business Premises",
      text: "Professional security support for retail outlets and business establishments."
    },
    {
      icon: "🎪",
      title: "Events & Exhibitions",
      text: "Crowd management, access control and event security support for organized gatherings."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="industries-hero">
        <div className="industries-hero-overlay"></div>

        <div className="industries-hero-content">
          <p>INDUSTRY EXPERTISE • PROFESSIONAL SECURITY</p>

          <h1>
            Security Across
            <br />
            <span>Different Industries.</span>
          </h1>

          <p>
            Customized security solutions designed around the
            requirements of your organization.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="industries-intro">
        <p className="section-tag">OUR INDUSTRY EXPERIENCE</p>

        <h2>
          Security That
          <br />
          <span>Fits Your Environment.</span>
        </h2>

        <p>
          Every organization has different security requirements.
          At Buddha Security Facilities, we understand the nature
          of each workplace and develop security approaches around
          the operational needs of our clients.
        </p>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="industries-section">

        <div className="section-title">
          <p className="section-tag">SECTORS WE SERVE</p>

          <h2>
            Professional Security
            <br />
            <span>For Every Environment.</span>
          </h2>
        </div>

        <div className="industries-grid">

          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>

              <div className="industry-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="industry-icon">
                {industry.icon}
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.text}</p>

              <div className="industry-line"></div>

            </div>
          ))}

        </div>
      </section>

      {/* APPROACH */}
      <section className="industry-approach">

        <div className="industry-approach-content">

          <p className="section-tag">OUR APPROACH</p>

          <h2>
            Your Industry.
            <br />
            <span>Your Security Requirements.</span>
          </h2>

          <p>
            We do not follow a one-size-fits-all approach.
            Our security planning considers your workplace,
            people, assets, traffic patterns, operating hours
            and specific security concerns.
          </p>

          <p>
            From professional manpower deployment to supervision,
            access control, patrolling, emergency response and
            reporting, our services are structured around your
            organization's requirements.
          </p>

        </div>

        <div className="industry-approach-points">

          <div>
            <span>01</span>
            <h3>Understand</h3>
            <p>Understand your business and security environment.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Assess</h3>
            <p>Identify risks, vulnerabilities and operational requirements.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Customize</h3>
            <p>Develop a security approach suited to your organization.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Deploy</h3>
            <p>Deploy trained and disciplined security personnel.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="industries-cta">

        <p>PROFESSIONAL SECURITY • TRUSTED PROTECTION</p>

        <h2>
          Protect Your Workplace.
          <br />
          Protect Your People.
        </h2>

        <a href="tel:9908540044">
          Call 9908540044
        </a>

      </section>
    </>
  );
}

export default Industries;