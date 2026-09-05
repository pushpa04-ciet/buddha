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
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  useEffect(() => {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);
  return (
    <BrowserRouter>
    <ScrollToTop />

      <nav className="navbar">

  <Link to="/" className="logo">
  <img src="/logo.jpg" alt="Buddha Security Facilities" />
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

    <div className="services-menu">
      <span className="services-link">
        Services ▾
      </span>

      <div className="services-dropdown">
        <Link
          to="/security-force"
          onClick={() => setMenuOpen(false)}
        >
          🛡️ Buddha Security Force
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

</nav>
{quoteOpen && (
  <div className="quote-overlay" onClick={() => setQuoteOpen(false)}>
    <div
      className="quote-popup"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="quote-close"
        onClick={() => setQuoteOpen(false)}
      >
        ×
      </button>

      <p className="section-tag">GET A SECURITY QUOTE</p>

      <h2>
        SHARE YOUR NEEDS AND WE'LL
        <br />
        <span>PROVIDE A QUOTE AND TIMELINES</span>
      </h2>
      <div className="quote-image">
  <img
    src="/security-quote.jpg"
    alt="Professional Security Services"
  />
  <div className="quote-image-overlay">
    <h3>Professional Security</h3>
    <p>Trusted Protection • 24/7</p>
  </div>
</div>

      <form
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.target;

   emailjs.sendForm(
  "service_tcq2vme",
  "template_lgz3odd",
  form,
  "X69VE8Jb7VFb7jzOn"
)
  .then(() => {
    alert("Thank you! Your quote request has been sent successfully.");
    setQuoteOpen(false);
    form.reset();
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    console.log("Status:", error.status);
    console.log("Text:", error.text);

    alert(
      "EmailJS Error\n\nStatus: " +
      error.status +
      "\nMessage: " +
      error.text
    );
  });
  }}
>
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

        <input
          type="text"
          placeholder="Company / Organization"
        />

        <select required>
          <option value="">Select Service</option>
          <option>Buddha Security Force</option>
          <option>CCTV / Surveillance</option>
          <option>Access Control</option>
          <option>Fire Alarm</option>
          <option>Burglar Alarm</option>
          <option>Security Consultation & Audit</option>
        </select>

        <textarea
          rows="4"
          placeholder="Tell us about your requirements..."
          required
        ></textarea>

        <button type="submit" className="quote-submit">
          REQUEST A QUOTE →
        </button>
      </form>
    </div>
  </div>
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

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;