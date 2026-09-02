import "./App.css";

function App() {
  const services = [
    ["🛡️", "24×7 Security Guards", "Security coverage throughout the day and night."],
    ["👮", "Trained Security Personnel", "Professionally trained and disciplined guards for workplace safety."],
    ["📋", "Security Supervisors", "Experienced supervisors monitor performance and coordinate duties."],
    ["🔐", "Visitor & Access Control", "Manage visitor entry, permissions and security records."],
    ["🚗", "Employee & Vehicle Entry", "Monitor employee movement, vehicle entry and delivery access."],
    ["🔎", "Premises Patrolling", "Regular patrols to identify suspicious activity and risks."],
    ["📹", "CCTV Monitoring Support", "Support surveillance operations and report unusual activity."],
    ["🔥", "Fire & Safety Support", "Emergency communication and evacuation support."],
    ["🚨", "Emergency Response", "Quick response to security incidents and emergencies."],
    ["📝", "Incident Reporting", "Clear records of activities, visitors and incidents."],
    ["🎯", "Event Security", "Security personnel for events, exhibitions and gatherings."],
  ];

  const industries = [
    "Corporate Offices",
    "IT Companies & Technology Parks",
    "Commercial Buildings",
    "Banks & Financial Institutions",
    "Factories & Industrial Units",
    "Warehouses & Logistics Centers",
    "Hospitals & Healthcare Facilities",
    "Schools & Educational Institutions",
    "Residential Communities",
    "Hotels & Hospitality",
    "Construction Sites",
    "Retail & Business Premises",
  ];

  const process = [
    ["01", "Security Assessment", "Understand your premises, risk areas and requirements."],
    ["02", "Customized Security Plan", "Recommend guards, supervisors, shifts and procedures."],
    ["03", "Professional Deployment", "Assign trained personnel according to your site."],
    ["04", "Regular Supervision", "Conduct inspections and coordinate with management."],
    ["05", "Continuous Improvement", "Review performance and update procedures."],
  ];

  return (
    <div>
      <header className="header">
        <div className="container nav">
          <a href="#home" className="logo">
            BUDDHA <span>SECURITY</span>
          </a>
          <nav>
            <button className="menu-btn" onClick={() => setMenuOpen(! setMenuOpen)} >
            ≡
          </button>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#why-us">Why Choose Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="quote-btn">
            Get a Quote
          </a>
        </div>
      </header>
      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="small-title">BUDDHA SECURITY FACILITIES</p>

            <h1>
              Professional Security.
              <br />
              <span>Trusted Protection.</span>
            </h1>

            <p className="hero-description">
              Protecting your workplace, people and property with trained,
              disciplined and dependable security personnel.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="primary-btn">
                Get a Security Quote
              </a>

              <a href="tel:9908540044" className="secondary-btn">
                Call 9908540044
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="https://dynaleyagencies.com/assets/img/cat_security_1770379997859.png"
            alt="Professional Security Officer"
            className="hero-security-image"/>
            <div className="image-box">
              <div className="shield">🛡️</div>
              <h3>Security You Can Trust</h3>
              <p>Professional • Disciplined • Dependable</p>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-strip">
        <div className="container trust-grid">
          <div>
            <strong>Expert Professionals</strong>
            <span>Trained & disciplined personnel</span>
          </div>

          <div>
            <strong>Timely Service</strong>
            <span>Reliable security coverage</span>
          </div>

          <div>
            <strong>Data Security</strong>
            <span>Responsible information handling</span>
          </div>

          <div>
            <strong>Client Focused</strong>
            <span>Solutions tailored to needs</span>
          </div>
        </div>
      </section>
      <section className="section about" id="about">
        <div className="container two-column">
          <div className="about-image">
            <div className="about-card">
              <div className="support-card">

    <div className="support-icon">
        <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3L20 6V11C20 16 16.5 20 12 21C7.5 20 4 16 4 11V6L12 3Z"/>
            <path d="M9 12L11 14L15 10"/>
        </svg>
    </div>
    </div>

              <span>24×7</span>
              <p>Security Support</p>
            </div>
          </div>

          <div>
            <p className="section-label">ABOUT US</p>

            <h2>Security You Can Trust</h2>

            <p>
              At Buddha Security Facilities, we provide reliable, disciplined
              and professional security solutions designed to protect your
              workplace, employees, customers and valuable assets.
            </p>

            <p>
              Our trained security personnel work with alertness, integrity
              and responsibility to maintain a safe and secure environment
              around the clock.
            </p>

            <ul className="check-list">
              <li>Professional Security Personnel</li>
              <li>Reliable Security Coverage</li>
              <li>Customized Security Solutions</li>
              <li>Responsive Support</li>
            </ul>

            <a href="#contact" className="primary-btn">
              Read More
            </a>
          </div>
        </div>
      </section>
      <section className="section light-section" id="industries">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">INDUSTRIES WE SERVE</p>
            <h2>Security Solutions for Every Business</h2>
            <p>
              Reliable security support designed for different business
              environments and operational requirements.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry, index) => (
              <div className="industry-card" key={index}>
                <span>▣</span>
                <h3>{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">OUR SERVICES</p>
            <h2>Complete Security Solutions</h2>
            <p>
              From trained security personnel to access control and emergency
              response, we provide dependable security support tailored to your
              organization's requirements.
            </p>
          </div>

          <div className="service-grid">
            {services.map(([icon, title, description], index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="special-section">
        <div className="container two-column">
          <div>
            <p className="section-label">SPECIALIZED SERVICES</p>

<section className="specialized-services">
  <h2>Specialized Services</h2>

  <div className="specialized-grid">
    <div className="specialized-card">
      <h3>Electronic Security Solutions</h3>
      <p>CCTV / Surveillance Systems</p>
      <p>Access Control System</p>
      <p>Fire Alarm System</p>
      <p>Burglar Alarm System</p>
      <p>Attendance & Employee Tracking</p>
    </div>

    <div className="specialized-card">
      <h3>Security Consultation & Audit / Risk Analysis</h3>
      <p>Security assessment and audit</p>
      <p>Risk analysis</p>
      <p>Evaluation of existing security systems</p>
      <p>Security awareness and management controls</p>
      <p>Compliance review</p>
    </div>
  </div>
</section>

            <h2>Technology-Driven Security</h2>
            <p>
              Intelligent security technology can strengthen protection and
              support human security operations.
            </p>

            <div className="special-list">
              <div>✓ CCTV / Surveillance Systems</div>
              <div>✓ Access Control Systems</div>
              <div>✓ Fire Alarm Systems</div>
              <div>✓ Burglar Alarm Systems</div>
              <div>✓ Attendance & Employee Tracking</div>
            </div>
          </div>

          <div className="audit-box">
            <span>RISK MANAGEMENT</span>
            <h3>Security Consultation & Audit</h3>
            <p>
              Security assessment, risk analysis, evaluation of existing
              systems and procedures, awareness and compliance review.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">OUR PROCESS</p>
            <h2>Security That Starts With Understanding</h2>
          </div>

          <div className="process-grid">
            {process.map(([number, title, description]) => (
              <div className="process-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="why-us">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">WHY CHOOSE US</p>
            <h2>Built Around Trust & Professionalism</h2>
          </div>

          <div className="why-grid">
            <div>
              <h3>DISCIPLINE</h3>
              <p>Clear instructions, proper procedures and professional standards.</p>
            </div>

            <div>
              <h3>ALERTNESS</h3>
              <p>Constant observation and quick reporting of unusual activity.</p>
            </div>
            const [menuOpen, setMenuOpen] = useState(false);

            <div>
              <h3>TRUST</h3>
              <p>Responsible protection of people, property and business operations.</p>
            </div>

            <div>
              <h3>PROFESSIONALISM</h3>
              <p>Respectful behavior, communication and punctuality.</p>
            </div>

            <div>
              <h3>RELIABLE MANPOWER</h3>
              <p>Consistent security coverage with organized supervision.</p>
            </div>

            <div>
              <h3>CUSTOMIZED SOLUTIONS</h3>
              <p>Services based on location, working hours and operational needs.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="training-section">
        <div className="container">
          <p className="section-label">TRAINING & STANDARDS</p>
          <h2>Trained to Protect. Prepared to Respond.</h2>

          <div className="training-grid">
            <div>
              <h3>Professional Training</h3>
              <p>Structured training focused on professionalism and ethical conduct.</p>
            </div>

            <div>
              <h3>Emergency Preparedness</h3>
              <p>Training designed to prepare personnel for emergency scenarios.</p>
            </div>

            <div>
              <h3>On-the-Job Training</h3>
              <p>Practical learning based on real workplace situations.</p>
            </div>

            <div>
              <h3>Communication Skills</h3>
              <p>Professional communication and conflict-resolution skills.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="final-cta">
        <div className="container">
          <p>YOUR SAFETY IS OUR PRIORITY</p>
          <h2>Your Business Deserves Dependable Protection.</h2>
          <span>
            Talk to our security team and find a solution for your requirements.
          </span>

          <div>
            <a href="#contact" className="primary-btn white-btn">
              Get a Security Quote
            </a>

            <a href="tel:9908540044" className="call-link">
              9908540044
            </a>
          </div>
        </div>
      </section>
      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="section-label">CONTACT US</p>
            <h2>Let's Secure Your Business</h2>

            <p>
              Tell us about your security requirements and our team can
              understand the solution you need.
            </p>

            <a href="tel:9908540044" className="phone">
              9908540044
            </a>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Company Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email" />

            <select>
              <option>Security Requirement</option>
              <option>Office Security</option>
              <option>Industrial Security</option>
              <option>Event Security</option>
              <option>Security Guards</option>
              <option>Security Supervisors</option>
              <option>Access Control</option>
              <option>Other</option>
            </select>

            <textarea placeholder="Message"></textarea>

            <button type="button">Request a Quote</button>
          </form>
        </div>
      </section>
      <footer>
        <div className="container footer-grid">
          <div>
            <h3>BUDDHA SECURITY FACILITIES</h3>
            <p>Security You Can Trust • Service You Can Depend On</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h4>Services</h4>
            <p>Security Guards</p>
            <p>Supervisors</p>
            <p>Access Control</p>
            <p>Patrolling</p>
            <p>Event Security</p>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="tel:9908540044">9908540044</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 Buddha Security Facilities. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
<section className="about-section" id="about">
  <div className="about-content">

    <div className="about-text">
      <span className="section-tag">ABOUT US</span>

      <h2>Your Safety Is Our Priority</h2>

      <p>
        Buddha Security Facilities provides professional and dependable
        security solutions for workplaces, people and property.
      </p>

      <p>
        Our trained security personnel are committed to maintaining a
        safe, disciplined and secure environment.
      </p>

      <a href="#contact" className="about-btn">
        Learn More
      </a>
    </div>

    <div className="about-card">
      <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=700&q=80"
      alt="Security Professional"
      className="about-security-image"/>
      <div className="about-support">
        <span>24*7</span>
      <p>Security Support</p>
      </div>
      <div className="about-icon">🛡️</div>
      <h3>Professional Security</h3>
      <p>Trusted • Disciplined • Dependable</p>
    </div>

  </div>
</section>
{/* SERVICES SECTION */}
<section className="services-section" id="services">

  <div className="services-heading">
    <span className="section-tag">OUR SERVICES</span>
    <h2>Security Services We Provide</h2>
    <p>
      Professional security solutions designed to protect people,
      property and businesses.
    </p>
  </div>

  <div className="services-container">

    <div className="service-card">
      <div className="service-icon">🛡️</div>
      <h3>Security Guards</h3>
      <p>
        Trained and disciplined security personnel for reliable protection.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">🏢</div>
      <h3>Corporate Security</h3>
      <p>
        Professional security services for offices and corporate facilities.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">🏭</div>
      <h3>Industrial Security</h3>
      <p>
        Security solutions to protect industrial sites and valuable assets.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">🚨</div>
      <h3>Event Security</h3>
      <p>
        Safe and organized security support for events and gatherings.
      </p>
    </div>

  </div>

</section>