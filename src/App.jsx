import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from
"react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Services from "./assets/pages/Services";
import SecurityForce from "./assets/pages/SecurityForce";
import Founder from "./assets/pages/Founder";
import VisionMission from "./assets/pages/VisionMission";
import WhyUs from "./assets/pages/WhyUs";
import Contact from "./assets/pages/Contact";
import Industries from "./assets/pages/Industries";
import Footer from "./assets/pages/Footer";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />

      <nav className="navbar">

        <Link to="/" className="logo">
          <span>BUDDHA</span>
          SECURITY FACILITIES
        </Link>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/about">About Us</Link>
          <Link to="/industries">Industries</Link>

          <div className="services-menu">
            <span className="services-link">
              Services ▾
            </span>

            <div className="services-dropdown">
              <Link to="/security-force">
                🛡️ Buddha Security Force
              </Link>

            </div>
          </div>

          <Link to="/why-us">Why Choose Us</Link>
          <Link to="/founder">Founder</Link>
          <Link to="/vision-mission">Vision & Mission</Link>


          <Link to="/contact">Contact</Link>

        </div>

        <a
          href="tel:9908540044"
          className="quote-btn"
        >
          Get a Quote
        </a>

      </nav>

      <Routes>

        <Route
          path="/home"
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