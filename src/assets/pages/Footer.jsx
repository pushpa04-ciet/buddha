import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* COMPANY */}

        <div className="footer-column footer-company">

          <Link to="/" className="footer-logo">
            <span>BUDDHA</span>
            SECURITY FACILITIES
          </Link>

          <p>
            Professional security and facility support solutions
            designed around your organization's requirements.
          </p>

          <p className="footer-tagline">
            Security You Can Trust • Service You Can Depend On
          </p>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/why-us">Why Choose Us</Link>
          <Link to="/founder">Founder</Link>
          <Link to="/vision-mission">
            Vision & Mission
          </Link>
          <Link to="/contact">Contact</Link>

        </div>


        {/* SERVICES */}

        <div className="footer-column">

          <h3>OUR SERVICES</h3>

          <Link to="/security-force">
            Buddha Security Force
          </Link>


          <span>24×7 Security & Surveillance</span>

          <span>Visitor & Access Control</span>

          

          <span>Customized Manpower</span>

        </div>


        {/* CONTACT */}

        <div className="footer-column">

          <h3>CONTACT US</h3>

          <p className="footer-contact-label">
            CALL US
          </p>

          <a
            href="tel:9908540044"
            className="footer-phone"
          >
            9908540044
          </a>

          <p className="footer-contact-label">
            SECURITY
          </p>

          <span>
            Professional Security • Trusted Protection
          </span>

        
        </div>

      </div>


      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Buddha Security Facilities.
          All Rights Reserved.
        </p>

        <p>
          Security You Can Trust • Service You Can Depend On
        </p>

      </div>

    </footer>
  );
}

export default Footer;