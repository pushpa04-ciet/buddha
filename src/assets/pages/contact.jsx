import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <p>GET IN TOUCH • WE ARE HERE TO HELP</p>

          <h1>
            Contact <span>Us</span>
          </h1>

          <p>
            Let's discuss your security and facility service requirements.
          </p>
        </div>
      </section>


      <section className="contact-section">

        <div className="contact-info">

          <p className="section-tag">BUDDHA SECURITY FACILITIES</p>

          <h2>
            Let's Protect &
            <br />
            <span>Serve Better.</span>
          </h2>

          <p>
            Whether you need professional security personnel,
            housekeeping services or customized facility support,
            our team is ready to understand your requirements.
          </p>


          <div className="contact-box">

            <div className="contact-icon">
              ☎
            </div>

            <div>
              <span>CALL US</span>
              <a href="tel:9908540044">
                9908540044
              </a>
            </div>

          </div>


          <div className="contact-box">

            <div className="contact-icon">
              🛡
            </div>

            <div>
              <span>SECURITY VERTICAL</span>
              <strong>
                Buddha Security Force
              </strong>
            </div>

          </div>


          <div className="contact-box">

            <div className="contact-icon">
              ✦
            </div>

            <div>
              <span>HOUSEKEEPING VERTICAL</span>
              <strong>
                Buddha Housekeeping Services
              </strong>
            </div>

          </div>

        </div>


        <div className="contact-form">

          <p className="section-tag">
            SEND AN ENQUIRY
          </p>

          <h2>
            Tell Us About
            <br />
            <span>Your Requirement.</span>
          </h2>


          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will contact you soon.");
            }}
          >

            <div className="form-row">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

            </div>


            <input
              type="email"
              placeholder="Email Address"
            />


            <select required>

              <option value="">
                Select Service
              </option>

              <option value="security">
                Buddha Security Force
              </option>

            </select>


            <textarea
              rows="6"
              placeholder="Tell us about your requirements..."
              required
            ></textarea>


            <button type="submit">
              SEND ENQUIRY →
            </button>

          </form>

        </div>

      </section>


      <section className="contact-cta">

        <p>
          PROFESSIONAL SECURITY • TRUSTED PROTECTION
        </p>

        <h2>
          Protect Your Workplace.
          <br />
          Protect Your People.
        </h2>

        <a href="tel:9908540044">
          Call 9908540044
        </a>

      </section>


      <section className="contact-footer-message">

        <h2>
          BUDDHA SECURITY FACILITIES
        </h2>

        <p>
          Security You Can Trust • Service You Can Depend On
        </p>

        <Link to="/">
          ← Back to Home
        </Link>

      </section>

    </>
  );
}

export default Contact;