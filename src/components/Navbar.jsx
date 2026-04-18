import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { handleCallClick } from "@/lib/callHandler";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Rooms", href: "/#rooms" },
    { name: "Amenities", href: "/#amenities" },
    { name: "Location", href: "/#location" },
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <style>{`
        .navbar-logo {
          height: 48px !important;
          width: auto !important;
          object-fit: contain !important;
          display: inline-block !important;
          visibility: visible !important;
          opacity: 1 !important;
          vertical-align: middle;
        }

        @media (max-width: 768px) {
          .site-navbar {
            padding: 0 !important;
            height: 58px !important;
            backdrop-filter: blur(16px) !important;
            background-color: #fbfbfbeb !important;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06) !important;
          }
          .navbar-logo {
            height: 40px !important;
            width: auto !important;
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            flex-shrink: 0;
            object-fit: contain !important;
            max-width: 40px;
          }
          .navbar-brand-text {
            font-size: 1.15rem !important;
            font-weight: 600 !important;
            gap: 10px !important;
            display: flex !important;
            align-items: center !important;
            line-height: 1;
          }
          .site-navbar .container {
            padding: 0 16px !important;
            height: 100% !important;
          }
          .site-navbar .d-flex {
            padding: 0 !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
          }
          .site-navbar .btn {
            background: transparent !important;
            backdrop-filter: none !important;
          }
          
          /* FIXED: Hamburger button - proper touch target (44×44px) */
          .site-navbar button.d-md-none {
            margin-left: auto !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 44px !important;
            min-height: 44px !important;
            padding: 8px !important;
            color:black !important;
          }

          /* FIXED: Mobile menu links - proper touch target (44px minimum height) */
          .d-md-none.pb-3 a {
            min-height: 44px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding: 12px 0 !important;
          }

          /* FIXED: Phone link in mobile menu - proper touch target */
          .d-md-none.pb-3 a[href^="tel:"] {
            gap: 8px !important;
          }

          /* FIXED: Book Now button in mobile menu - proper touch target */
          .d-md-none.pb-3 .btn {
            min-height: 44px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 12px 16px !important;
          }
        }
      `}</style>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="position-fixed w-100 site-navbar"
        style={{
          top: 0,
          left: 0,
          zIndex: 1000,
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
          backgroundColor: isScrolled ? "#fffffff2" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="d-flex align-items-center justify-content-between py-3">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            style={{ display: "contents" }}
          >
            <Link 
              to="/" 
              className="d-flex align-items-center gap-2 navbar-brand-text"
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                fontSize: "1.5rem", 
                fontWeight: 600, 
                color: isScrolled ? "#ffa726" : "#FFA726",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              <img 
                src={logo} 
                alt="UJ Pallazzio Logo" 
                className="navbar-logo"
              />
              UJ Pallazzio
            </Link>
          </motion.div>

          <div className="d-none d-md-flex align-items-center gap-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{ display: "contents" }}
              >
                <Link
                  to={link.href}
                  style={{
                    color: isScrolled ? "#1a1a1a" : "rgba(255, 255, 255, 0.9)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#ff9800"}
                  onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? "#1a1a1a" : "rgba(255, 255, 255, 0.9)"}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="d-none d-md-flex align-items-center gap-3">
            <motion.button
              onClick={handleCallClick}
              className="d-flex align-items-center gap-2"
              style={{
                color: isScrolled ? "#1a1a1a" : "rgba(255, 255, 255, 0.9)",
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              whileHover={{ scale: 1.05, color: "#ff9800" }}
            >
              <Phone style={{ width: "1rem", height: "1rem" }} />
              +91 93616 77996
            </motion.button>
            <motion.a
              href="https://wa.me/919361677996?text=Hi%2C%20I%E2%80%99d%20like%20to%20check%20availability%20at%20UJ%20Pallazzio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              whileHover={{ scale: 1.05, backgroundColor: "#f57c00" }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "#ff9800",
                color: "white",
                fontWeight: 500,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                border: "none",
              }}
            >
              Book Now
            </motion.a>
          </div>

          <motion.button
            className="d-md-none btn p-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            style={{ color: isScrolled ? "#1a1a1a" : "white", border: "none", background: "none" }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X style={{ width: "1.5rem", height: "1.5rem" }} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu style={{ width: "1.5rem", height: "1.5rem" }} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="d-md-none pb-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "#fffffffa",
                backdropFilter: "blur(10px)",
                borderRadius: "0.5rem",
                marginTop: "0.5rem",
                boxShadow: "0 4px 20px #0000001a",
                overflow: "hidden"
              }}
            >
              <div className="d-flex flex-column gap-3 p-3">
                 {navLinks.map((link, index) => (
                   <motion.div
                     key={link.name}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.2, delay: index * 0.05 }}
                     style={{ display: "contents" }}
                   >
                     <Link
                       to={link.href}
                       onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        color: "#1a1a1a",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        padding: "0.5rem 0",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                        transition: "color 0.2s ease",
                        display: "block",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#ff9800"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#1a1a1a"}
                    >
                      {link.name}
                    </Link>
                   </motion.div>
                ))}
                <motion.a
                  href="tel:+919361677996"
                  className="d-flex align-items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                  style={{
                    color: "#1a1a1a",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    padding: "0.5rem 0",
                  }}
                >
                  <Phone style={{ width: "1rem", height: "1rem" }} />
                  +91 93616 77996
                </motion.a>
                <motion.a
                  href="https://wa.me/919361677996?text=Hi%2C%20I%E2%80%99d%20like%20to%20check%20availability%20at%20UJ%20Pallazzio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: "#ff9800",
                    color: "white",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "0.75rem",
                    borderRadius: "0.375rem",
                    border: "none",
                  }}
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
