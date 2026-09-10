import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from
"react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Services from "./assets/pages/Services";
import SecurityForce from "./assets/pages/SecurityForce";
import Founder from "./assets/pages/Founder";
import VisionMission from "./assets/pages/VisionMission";
import WhyUs from "./assets/pages/WhyUs";
import Contact from "./assets/pages/contact";
import Industries from "./assets/pages/Industries";
import Footer from "./assets/pages/Footer";
import emailjs from "@emailjs/browser";
import Housekeeping from "./assets/pages/Housekeeping";
import IndustrialManpower from "./assets/pages/IndustrialManpower";
import SecurityPartner from "./assets/pages/SecurityPartner";
import Blog from "./assets/pages/Blog";
import BlogArticle from "./assets/pages/BlogArticle";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
  const elements = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        } else {
          entry.target.classList.remove("section-visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => {
    element.classList.add("section-hidden");
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);

  return null;
}
function SecurityNetworkAnimation() {
  return (
    <div className="security-network-animation">

      <div className="security-network-ring ring-one"></div>
      <div className="security-network-ring ring-two"></div>

      <div className="security-node node-one"></div>
      <div className="security-node node-two"></div>
      <div className="security-node node-three"></div>
      <div className="security-node node-four"></div>
      <div className="security-node node-five"></div>
      <div className="security-node node-six"></div>

      <div className="security-line line-one"></div>
      <div className="security-line line-two"></div>
      <div className="security-line line-three"></div>
      <div className="security-line line-four"></div>

      <div className="security-scan-dot"></div>

    </div>
  );
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
 function ScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer;

    const timer = setTimeout(() => {

      const elements = document.querySelectorAll(
        "section, img, h1, h2, h3, p, li, a, .about-vertical-card, .vertical-card, .vertical-service-card, .service-card, .big-service, .industry-grid > div, .why-item, .value-box, .vm-card, .contact-box, .service-item, .feature-card"
      );

      observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {
              entry.target.classList.add("scroll-show");
              entry.target.classList.remove("scroll-hide");
            }

          });

        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px"
        }
      );

      elements.forEach((element) => {

        element.classList.add("scroll-hide");

        observer.observe(element);

      });

    }, 80);
    

    return () => {

      clearTimeout(timer);

      if (observer) {
        observer.disconnect();
      }

    };

  }, [pathname]);

  return null;
}
  function PageBackgroundAnimation() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.classList.remove(
      "page-home",
      "page-about",
      "page-industries",
      "page-security",
      "page-housekeeping",
      "page-manpower",
      "page-partner",
      "page-why",
      "page-founder",
      "page-vision",
      "page-contact",
      "page-services"
    );

    if (pathname === "/") {
      document.body.classList.add("page-home");
    } else if (pathname === "/about") {
      document.body.classList.add("page-about");
    } else if (pathname === "/industries") {
      document.body.classList.add("page-industries");
    } else if (pathname === "/security-force") {
      document.body.classList.add("page-security");
    } else if (pathname === "/housekeeping") {
      document.body.classList.add("page-housekeeping");
    } else if (pathname === "/industrial-manpower") {
      document.body.classList.add("page-manpower");
    } else if (pathname === "/security-partner") {
      document.body.classList.add("page-partner");
    } else if (pathname === "/why-us") {
      document.body.classList.add("page-why");
    } else if (pathname === "/founder") {
      document.body.classList.add("page-founder");
    } else if (pathname === "/vision-mission") {
      document.body.classList.add("page-vision");
    } else if (pathname === "/contact") {
      document.body.classList.add("page-contact");
    } else if (pathname === "/services") {
      document.body.classList.add("page-services");
    }

    return () => {
      document.body.classList.remove(
        "page-home",
        "page-about",
        "page-industries",
        "page-security",
        "page-housekeeping",
        "page-manpower",
        "page-partner",
        "page-why",
        "page-founder",
        "page-vision",
        "page-contact",
        "page-services"
      );
    };
  }, [pathname]);

  return null;
}

  return (
    <BrowserRouter>
    <ScrollToTop />
     <ScrollAnimations />
     <SecurityNetworkAnimation />

      <nav className="navbar">
        <Link to="/" className="logo">
  <img
    src="/images/buddha-logo.jpg"
    alt="Buddha Security Facilities"
  />

  <div className="logo-text">
    <strong>BUDDHA</strong>
    <span>SECURITY FACILITIES</span>
  </div>
</Link>

  <button
    type="button"
    className="menu-toggle"
    onClick={() => setMenuOpen(prev => !prev)}
  >
    ☰
  </button>

  <div className={menuOpen ? "nav-links mobile-open" : "nav-links"}>

    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

    <Link to="/about" onClick={() => setMenuOpen(false)}>
      About Us
    </Link>

    <Link to="/industries" onClick={() => setMenuOpen(false)}>
      Industries
    </Link>
    <Link to="/security-partner" onClick={() => setMenuOpen(false)}>
  Security Partner
</Link>


    <div className="services-menu">

  <Link
    to="/services"
    className="services-link"
    onClick={() => setMenuOpen(false)}
  >
    Services ▾
  </Link>

  <div className="services-dropdown">

    <Link
      to="/security-force"
      onClick={() => setMenuOpen(false)}
    >
      🛡️ Buddha Security Services
    </Link>

    <Link
      to="/housekeeping"
      onClick={() => setMenuOpen(false)}
    >
      ✨ Housekeeping Services
    </Link>

    <Link
      to="/industrial-manpower"
      onClick={() => setMenuOpen(false)}
    >
      👷 Industrial Manpower
    </Link>
    

  </div>

</div>


    <Link to="/why-us" onClick={() => setMenuOpen(false)}>
      Why Choose Us
    </Link>

    <Link to="/founder" onClick={() => setMenuOpen(false)}>
      Founder
    </Link>

    <Link to="/vision-mission" onClick={() => setMenuOpen(false)}>
      Vision & Mission
    </Link>
    <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog
    </Link>

    <Link to="/contact" onClick={() => setMenuOpen(false)}>
      Contact
    </Link>

  </div>

  <button
  type="button"
  className="quote-btn"
  onClick={() => setQuoteOpen(true)}
>
  Get a Quote
</button>
<a
  href="https://wa.me/918096083322?text=Hello%20Buddha%20Security%20Facilities%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
>
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    aria-hidden="true"
  >
    <path
      fill="#fff"
      d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
    />
    <path
      fill="#fff"
      d="M16.02 3C8.83 3 3 8.83 3 16.02c0 2.3.6 4.54 1.74 6.51L3 29l6.64-1.7a12.97 12.97 0 0 0 6.38 1.68h.01C23.2 28.98 29 23.15 29 16.02 29 8.83 23.17 3 16.02 3zm0 23.65c-2.05 0-4.06-.55-5.82-1.59l-.42-.25-3.94 1.01 1.05-3.84-.27-.44a10.96 10.96 0 1 1 9.4 5.11z"
    />
  </svg>
</a>
{showScrollTop && (
  <button
    type="button"
    className="scroll-top-btn"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    aria-label="Go to top"
  >
    𖤹
  </button>
)}

</nav>
{quoteOpen && (
  <>
    <style>{`
      .quote-modal-overlay {
        position: fixed;
        inset: 0;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: rgba(2, 15, 30, .78);
        backdrop-filter: blur(7px);
      }

      .quote-modal {
        position: relative;
        width: 900px;
        height: 540px;
        max-width: 100%;
        display: grid;
        grid-template-columns: 38% 62%;
        overflow: hidden;
        border-radius: 18px;
        background: #fff;
        box-shadow: 0 25px 70px rgba(0,0,0,.35);
        font-family: inherit;
      }

      /* LEFT */

      .quote-modal-left {
        position: relative;
        overflow: hidden;
        padding: 28px;
        display: flex;
        align-items: flex-end;
        background:
          linear-gradient(145deg,#03172b,#07345b,#0b4779);
      }

      .quote-modal-left:before {
        content: "";
        position: absolute;
        width: 240px;
        height: 240px;
        top: -80px;
        right: -80px;
        border-radius: 50%;
        background: rgba(74,160,230,.2);
        filter: blur(25px);
      }

      .quote-modal-pattern {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 7px;
        color: rgba(255,255,255,.08);
        font-weight: 800;
        font-size: 25px;
        letter-spacing: 2px;
      }

      .quote-modal-pattern span:first-child {
        font-size: 38px;
      }

      .quote-modal-left-content {
        position: relative;
        z-index: 2;
        width: 100%;
        padding: 20px;
        border-radius: 14px;
        background: rgba(2,17,32,.72);
      }

      .quote-modal-left-content small {
        color: #55aaff;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 1.5px;
      }

      .quote-modal-left-content h3 {
        margin: 8px 0;
        color: white;
        font-size: 26px;
        line-height: 1.15;
      }

      .quote-modal-left-content p {
        margin: 0;
        color: rgba(255,255,255,.68);
        font-size: 11px;
        line-height: 1.55;
      }

      /* RIGHT */

      .quote-modal-right {
        padding: 30px 34px 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .quote-modal-tag {
        margin: 0 0 7px;
        color: #1266ae;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1.8px;
        text-align: center;
      }

      .quote-modal-title {
        margin: 0;
        color: #061d36;
        font-size: 29px;
        line-height: 1.08;
        font-weight: 800;
        text-align: center;
      }

      .quote-modal-title span {
        color: #1266ae;
      }

      .quote-modal-description {
        margin: 9px auto 17px;
        max-width: 470px;
        color: #718091;
        font-size: 11px;
        line-height: 1.45;
        text-align: center;
      }

      .quote-modal-form {
        width: 100%;
      }

      .quote-modal-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .quote-modal-field {
        margin-bottom: 11px;
      }

      .quote-modal-field label {
        display: block;
        margin-bottom: 5px;
        color: #132b44;
        font-size: 10px;
        font-weight: 700;
      }

      .quote-modal-field input,
      .quote-modal-field select,
      .quote-modal-field textarea {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #d8e1e9;
        border-radius: 7px;
        outline: none;
        background: #f8fafc;
        color: #1b3045;
        font-family: inherit;
        font-size: 11px;
        transition: .2s;
      }

      .quote-modal-field input,
      .quote-modal-field select {
        height: 38px;
        padding: 0 11px;
      }

      .quote-modal-field textarea {
        height: 62px;
        padding: 9px 11px;
        resize: none;
      }

      .quote-modal-field input:focus,
      .quote-modal-field select:focus,
      .quote-modal-field textarea:focus {
        border-color: #1670bd;
        background: white;
        box-shadow: 0 0 0 2px rgba(22,112,189,.1);
      }

      .quote-modal-submit {
        width: 100%;
        height: 42px;
        margin-top: 2px;
        border: 0;
        border-radius: 7px;
        background: linear-gradient(135deg,#061d36,#0d548d);
        color: white;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: .8px;
        cursor: pointer;
        transition: .2s;
      }

      .quote-modal-submit:hover {
        background: linear-gradient(135deg,#0d548d,#1674c2);
        transform: translateY(-1px);
      }

      .quote-modal-note {
        margin: 7px 0 0;
        color: #9aa5af;
        text-align: center;
        font-size: 9px;
      }

      .quote-modal-close {
        position: absolute;
        z-index: 10;
        top: 13px;
        right: 13px;
        width: 34px;
        height: 34px;
        border: 0;
        border-radius: 50%;
        background: white;
        color: #17324b;
        font-size: 22px;
        line-height: 1;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,.16);
      }

      .quote-modal-close:hover {
        background: #092b4d;
        color: white;
      }

      /* TABLET / MOBILE */

      @media (max-width: 720px) {
        .quote-modal {
          width: 500px;
          height: auto;
          max-height: calc(100vh - 30px);
          grid-template-columns: 1fr;
        }

        .quote-modal-left {
          display: none;
        }

        .quote-modal-right {
          padding: 30px 25px 22px;
        }
      }

      @media (max-width: 480px) {
        .quote-modal-overlay {
          padding: 10px;
        }

        .quote-modal-right {
          padding: 27px 18px 18px;
        }

        .quote-modal-title {
          font-size: 24px;
        }

        .quote-modal-row {
          grid-template-columns: 1fr;
          gap: 0;
        }

        .quote-modal-field textarea {
          height: 58px;
        }
      }
    `}</style>

    <div
      className="quote-modal-overlay"
      onClick={() => setQuoteOpen(false)}
    >
      <div
        className="quote-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE */}
        <button
          type="button"
          className="quote-modal-close"
          onClick={() => setQuoteOpen(false)}
        >
          ×
        </button>


        {/* LEFT SIDE */}
        <div className="quote-modal-left">

          <div className="quote-modal-pattern">
            <span>◈</span>
            <span>SECURITY</span>
            <span>24/7</span>
          </div>

          <div className="quote-modal-left-content">

            <small>
              SECURITY • SAFETY • TRUST
            </small>

            <h3>
              Protect What
              <br />
              Matters Most.
            </h3>

            <p>
              Professional security solutions
              designed around your business,
              property and people.
            </p>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="quote-modal-right">

          <p className="quote-modal-tag">
            GET A SECURITY QUOTE
          </p>

          <h2 className="quote-modal-title">
            Share Your Needs
            <br />
            <span>We'll Take Care Of The Rest.</span>
          </h2>

          <p className="quote-modal-description">
            Tell us what you need and our team will
            provide a suitable solution, quote and timeline.
          </p>


          <form
            className="quote-modal-form"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target;

              emailjs
                .sendForm(
                  "service_tcq2vme",
                  "template_lgz3odd",
                  form,
                  "X69VE8Jb7VFb7jzOn"
                )
                .then(() => {

                  alert(
                    "Thank you! Your quote request has been sent successfully."
                  );

                  setQuoteOpen(false);
                  form.reset();

                })
                .catch((error) => {

                  console.error("EmailJS Error:", error);

                  alert(
                    "Unable to send your request. Please try again."
                  );

                });
            }}
          >

            {/* NAME + PHONE */}
            <div className="quote-modal-row">

              <div className="quote-modal-field">
                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="quote-modal-field">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  required
                />
              </div>

            </div>


            {/* COMPANY */}
            <div className="quote-modal-field">

              <label>
                Company / Organization
              </label>

              <input
                type="text"
                name="company"
                placeholder="Enter company name"
              />

            </div>


            {/* SERVICE */}
            <div className="quote-modal-field">

              <label>
                Service Required
              </label>

              <select
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="Buddha Security Force">
                  Buddha Security Force
                </option>

                <option value="CCTV / Surveillance">
                  CCTV / Surveillance
                </option>

                <option value="Access Control">
                  Access Control
                </option>

                <option value="Fire Alarm">
                  Fire Alarm
                </option>

                <option value="Burglar Alarm">
                  Burglar Alarm
                </option>

                <option value="Security Consultation & Audit">
                  Security Consultation & Audit
                </option>

              </select>

            </div>


            {/* REQUIREMENT */}
            <div className="quote-modal-field">

              <label>
                Your Requirements
              </label>

              <textarea
                name="message"
                placeholder="Tell us about your requirements..."
                required
              ></textarea>

            </div>


            {/* SUBMIT */}
            <button
              type="submit"
              className="quote-modal-submit"
            >
              REQUEST A QUOTE&nbsp; →
            </button>

            <p className="quote-modal-note">
              🔒 Your information is kept confidential.
            </p>

          </form>

        </div>

      </div>
    </div>
  </>
)}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/security-force"
          element={
            <SecurityForce />
          }
        />
        <Route path="/housekeeping" element={<Housekeeping />} />

<Route
  path="/industrial-manpower"
  element={<IndustrialManpower />}
  
/>
<Route
  path="/security-partner"
  element={<SecurityPartner />}
/>


        <Route
          path="/why-us"
          element={
            <WhyUs />
          }
        />
        <Route path="/founder"
        element={<Founder />}
        />
        <Route path="/vision-mission"
        element={<VisionMission />}
        />

        <Route
          path="/contact"
          element={
          <Contact />
          }
        />
        <Route path="industries"
        element={<Industries />}
        />
        <Route path="/blog" element={<Blog />} 
        />
        <Route path="/blog/:slug"
        element={<BlogArticle />}
        />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;