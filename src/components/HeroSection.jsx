import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, Users, Search } from "lucide-react";
import { handleCallClick } from "@/lib/callHandler";
import logo from "../assets/logo.png";

// Import hero images explicitly
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
// import ctaBg from "../assets/cta-bg.jpg";
// import roomDeluxe from "../assets/room-deluxe.jpg";
// import roomSuite from "../assets/room-suite.jpg";

const heroImages = [h1, h2, h3];

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500); // 4-5 second auto-slide
    return () => clearInterval(interval);
  }, []);



  const handleCheckAvailability = () => {
    window.dispatchEvent(new CustomEvent("track", { detail: "check_availability_click" }));
    const msg = `Hi, I'd like to check availability at UJ Pallazzio.\nCheck-in: ${checkIn || "Flexible"}\nCheck-out: ${checkOut || "Flexible"}\nAdults: ${adults}`;
    window.open(`https://wa.me/919361677996?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCall = () => {
    handleCallClick();
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919361677996?text=Hi, I'm interested in booking a room at UJ Pallazzio.", "_blank");
  };

  return (
    <>
      <style>{`
        /* Mobile horizontal overflow fix */
        @media (max-width: 768px) {
          html, body {
            overflow-x: hidden !important;
            width: 100% !important;
            max-width: 100vw !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          * {
            box-sizing: border-box !important;
            max-width: 100% !important;
          }
          
          /* Preserve framer motion animations while fixing alignment */
          .hero-content > * {
            transform: unset !important;
          }
          
          /* Allow motion elements to keep their animation transforms */
          .motion-div, .motion-h1, .motion-p, .motion-button, motion-* {
            transform: initial !important;
          }
          
          body {
            padding-bottom: 60px !important;
          }
          
          .hero-content {
            padding-top: 70px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-bottom: 2rem !important;
            margin: 0 auto !important;
            width: 100% !important;
            max-width: 100% !important;
            text-align: center !important;
          }

          .hero-content > * {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          
          .hero-content h1 {
            font-size: 1.35rem !important;
            margin-bottom: 12px !important;
            line-height: 1.4 !important;
          }

          .hero-content > p:nth-of-type(1) {
            font-size: 0.9rem !important;
            margin-bottom: 14px !important;
            line-height: 1.5 !important;
            max-width: 90% !important;
          }

          .hero-content > p:nth-of-type(2) {
            font-size: 0.8rem !important;
            margin-bottom: 16px !important;
            line-height: 1.5 !important;
          }

          .hero-buttons {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            margin: 16px 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          
          /* Check Availability - Full Width first position */
          .hero-buttons button:nth-child(3) {
            width: 100% !important;
            order: -1 !important;
          }

          /* Call & WhatsApp - Equal width side by side row */
          .hero-buttons button:nth-child(1),
          .hero-buttons button:nth-child(2) {
            width: calc(50% - 6px) !important;
            flex: 1 !important;
          }
          
          /* Create 2 column row for first two buttons */
          .hero-buttons {
            flex-wrap: wrap !important;
            flex-direction: row !important;
          }
          
          /* Force Check Availability button to take full row */
          .hero-buttons button:nth-child(3) {
            flex-basis: 100% !important;
          }

          .hero-buttons button {
            height: 48px !important;
            padding: 10px 12px !important;
            font-size: 0.85rem !important;
            border-radius: 8px !important;
            justify-content: center !important;
            gap: 6px !important;
          }

          .rating-text {
            margin-bottom: 16px !important;
            padding: 10px !important;
            font-size: 0.8rem !important;
          }

          .booking-form {
            width: 100% !important;
            margin: 0 0 20px 0 !important;
            padding: 16px !important;
            border-radius: 12px !important;
          }
        }
          // /* Trust line/rating text - show prominently for conversion */
          // .rating-text {
          //   font-size: 0.85rem !important;
          //   margin-bottom: 1.5rem !important;
          //   padding: 0.875rem !important;
          //   border-radius: 0.5rem !important;
          //   background: rgba(255, 255, 255, 0.1) !important;
          //   backdrop-filter: blur(8px) !important;
          //   box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
          //   font-weight: 500 !important;
          //   animation: fadeInUp 0.6s ease 0.5s forwards !important;
          //   opacity: 0;
          // }
          /* Booking form optimization with bottom spacing for sticky bar */
          .booking-form {
            width: calc(100% - 32px) !important;
            margin: 0 16px !important;
            padding: 1.25rem !important;
            max-width: 100% !important;
            margin-bottom: 1rem !important;
            position: relative !important;
            z-index: 5 !important;
            animation: fadeInUp 0.6s ease 0.3s forwards !important;
            opacity: 0;
          }
          .booking-form .row {
            gap: 1rem !important;
            row-gap: 1.25rem !important;
          }
          .booking-form .col-12 {
            margin-bottom: 0 !important;
          }
          /* Input field alignment for mobile */
          .booking-form .position-relative {
            display: flex !important;
            align-items: center !important;
            position: relative !important;
          }
          .booking-form input,
          .booking-form select {
            height: 44px !important;
            padding: 0.5rem 0.75rem 0.5rem 2.25rem !important;
            font-size: 0.8125rem !important;
            line-height: 1.5 !important;
            vertical-align: middle !important;
          }
          /* Icon alignment inside input fields */
          .booking-form .position-relative svg {
            position: absolute !important;
            left: 0.75rem !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            width: 0.9rem !important;
            height: 0.9rem !important;
            pointer-events: none !important;
          }
          /* Ensure consistent label spacing */
          .booking-form label {
            display: block !important;
            margin-bottom: 0.4rem !important;
            font-size: 0.7rem !important;
          }
          /* Button spacing from form */
          .booking-form .col-12 .btn {
            margin-top: 0.5rem !important;
          }
          .booking-form button {
            height: 44px !important;
            padding: 0.5rem 1rem !important;
            font-size: 0.8125rem !important;
            line-height: 1.5 !important;
            width: 100% !important;
          }
          
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
        
        /* Desktop: Keep original styling */
        @media (min-width: 769px) {
          .hero-branding {
            display: none !important;
          }
          .hero-content > p:nth-of-type(1) {
            margin-bottom: 2rem !important;
          }
          .hero-content > p:nth-of-type(2) {
            margin-bottom: 2.5rem !important;
          }
          .hero-buttons {
            margin-bottom: 2rem !important;
          }
          .rating-text {
            margin-bottom: 2.5rem !important;
          }
          .booking-form {
            margin-bottom: 0 !important;
          }
        }
      `}</style>
      <section 
        className="position-relative" 
        style={{ 
          minHeight: "100vh", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          overflow: "hidden"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Images Slider */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={heroImages[currentIndex]}
              alt="UJ Pallazzio luxury hotel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
          </AnimatePresence>
        </div>

        {/* Dark Overlay - Lightened to improve background image visibility */}
        <div 
          className="position-absolute w-100 h-100" 
          style={{ 
            top: 0, 
            left: 0, 
            background: "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.52) 100%)",
            zIndex: 1
          }} 
        />

        {/* Mobile-only Dark Overlay for better readability */}
        <div className="hero-overlay-mobile" />

        {/* Content - Vertically and Horizontally Centered */}
        <div className="hero-content position-relative text-center px-4 mx-auto" style={{ zIndex: 10, maxWidth: "900px", width: "100%" }}>
          {/* Hero Branding - Mobile Centered */}
          <motion.div
            className="hero-branding"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={logo} 
              alt="UJ Pallazzio Logo " 
              style={{ height: "60px", width: "auto", objectFit: "contain" }}
            />
            {/* <div className="hero-branding-text">UJ Pallazzio</div> */}
          </motion.div>

        {/* H1 - Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            fontSize: "2rem", 
            fontWeight:70 , 
            color: "white", 
            marginBottom: "1rem",
            lineHeight: 1.2,
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            fontFamily:"poppins bold"
          }}
        >
          Business Class Luxury Hotel in Tiruvannamalai - Peaceful Premium Stay
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255, 255, 255, 0.95)", 
            marginBottom: "2rem",
            fontWeight: 400,
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                        fontFamily:"poppins bold"

          }}
        >
          Near ArunachaleswararTemple | Centralized AC | Breakfast | WiFi | Secure Parking
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            display: "flex", 
            gap: "1rem", 
            justifyContent: "center", 
            flexWrap: "wrap",
            marginBottom: "2rem"
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCall}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#ff9800",
              color: "#ffff",
              fontWeight: 600,
              padding: "0.875rem 1.5rem",
              fontSize: "0.9375rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}
          >
            <Phone size={18} />
            Call Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#25D366",
              color: "white",
              fontWeight: 600,
              padding: "0.875rem 1.5rem",
              fontSize: "0.9375rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}
          >
            <MessageCircle size={18} />
            WhatsApp Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCheckAvailability}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              backgroundColor: "#ff9800",
              color: "white",
              fontWeight: 600,
              padding: "0.875rem 1.5rem",
              fontSize: "0.9375rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}
          >
            <Search size={18} />
            Check Availability
          </motion.button>
        </motion.div>

        {/* Highlight Line */}
        <motion.p
          className="rating-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ 
            fontSize: "0.9375rem", 
            color: "#ffa726",
            fontWeight: 500,
            marginBottom: "2.5rem",
            textShadow: "0 1px 4px rgba(0,0,0,0.5)"
          }}
        >
          ⭐⭐⭐⭐⭐ Highly Rated for Cleanliness & Peaceful Stay
        </motion.p>

        {/* Trust Benefits Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem"
          }}
        >
          {/* <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.9)", fontSize: "0.875rem" }}>
            <span>✔</span> Peaceful Location Away from Temple Traffic
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.9)", fontSize: "0.875rem" }}>
            <span>✔</span> Centralized AC Rooms
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.9)", fontSize: "0.875rem" }}>
            <span>✔</span> 24/7 CCTV Security
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.9)", fontSize: "0.875rem" }}>
            <span>✔</span> High-Speed WiFi
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.9)", fontSize: "0.875rem" }}>
            <span>✔</span> Lift Access
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.9)", fontSize: "0.875rem" }}>
            <span>✔</span> Ample Car Parking
          </div> */}
        </motion.div>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="booking-form bg-white rounded shadow-lg p-4 mx-auto"
          style={{ maxWidth: "900px", backgroundColor: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(8px)", borderRadius: "0.75rem" }}
        >
          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-3 text-start">
              <label style={{ fontSize: "0.75rem", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.25rem" }}>Check-in</label>
              <div className="position-relative">
                <Calendar style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "1rem", height: "1rem", color: "#6b7280" }} />
                <input
                  type="date"
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: "2.5rem", paddingRight: "0.75rem", paddingTop: "0.625rem", paddingBottom: "0.625rem", fontSize: "0.875rem", borderRadius: "0.375rem" }}
                />
              </div>
            </div>
            <div className="col-12 col-md-3 text-start">
              <label style={{ fontSize: "0.75rem", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.25rem" }}>Check-out</label>
              <div className="position-relative">
                <Calendar style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "1rem", height: "1rem", color: "#6b7280" }} />
                <input
                  type="date"
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: "2.5rem", paddingRight: "0.75rem", paddingTop: "0.625rem", paddingBottom: "0.625rem", fontSize: "0.875rem", borderRadius: "0.375rem" }}
                />
              </div>
            </div>
            <div className="col-12 col-md-3 text-start">
              <label style={{ fontSize: "0.75rem", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.25rem" }}>Adults</label>
              <div className="position-relative">
                <Users style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "1rem", height: "1rem", color: "#6b7280" }} />
                <select
                  value={adults}
                  onChange={e => setAdults(e.target.value)}
                  className="form-select"
                  style={{ paddingLeft: "2.5rem", paddingRight: "0.75rem", paddingTop: "0.625rem", paddingBottom: "0.625rem", fontSize: "0.875rem", borderRadius: "0.375rem" }}
                >
                  {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} {n === 1 ? "Adult" : "Adults"}</option>)}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckAvailability}
                className="btn w-100"
                style={{ backgroundColor: "#ff9800", color: "white", fontWeight: 600, padding: "0.500rem 1.25rem", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.0em", borderRadius: "0.375rem", border: "none",textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#f57c00"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#ff9800"}
              >
                Check Availability
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slider Indicators (dots) */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "12px",
        zIndex: 10
      }}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: index === currentIndex ? "#ffa726" : "rgba(255, 255, 255, 0.5)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0
            }}
            onMouseOver={(e) => {
              if (index !== currentIndex) {
                e.target.style.background = "rgba(255, 255, 255, 0.8)";
              }
            }}
            onMouseOut={(e) => {
              if (index !== currentIndex) {
                e.target.style.background = "rgba(255, 255, 255, 0.5)";
              }
            }}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default HeroSection;