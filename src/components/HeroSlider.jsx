import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = Object.values(
  import.meta.glob("../assets/*.{jpg,png,jpeg,JPG,JPEG}", { eager: true })
).map((mod) => mod.default);

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4-5 second auto-slide
    return () => clearInterval(interval);
  }, [isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="hero-slider" 
      className="hero-slider-section"
      style={{
        position: "relative",
        height: "80vh",
        minHeight: "500px",
        overflow: "hidden"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out"
            }}
          >
            {/* Dark Overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
              zIndex: 1
            }} />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={goToPrevious}
        style={{
          position: "absolute",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.9)",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          opacity: isHovered ? 1 : 0,
          transition: "all 0.3s ease",
          zIndex: 10,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
        }}
        whileHover={{ scale: 1.1, background: "rgba(255, 255, 255, 1)" }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      <motion.button
        onClick={goToNext}
        style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.9)",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          opacity: isHovered ? 1 : 0,
          transition: "all 0.3s ease",
          zIndex: 10,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
        }}
        whileHover={{ scale: 1.1, background: "rgba(255, 255, 255, 1)" }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {/* Slide Indicators */}
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
            onClick={() => handleDotClick(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: index === currentIndex ? "#C8A96A" : "rgba(255, 255, 255, 0.5)",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease",
              padding: 0
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5
      }}>
        <div style={{ textAlign: "center", maxWidth: "800px", padding: "0 2rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "700",
              color: "white",
              marginBottom: "1rem",
              fontFamily: "'Playfair Display', Georgia, serif",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              lineHeight: 1.2
            }}
          >
            🛏 Rooms in UJ Pallazzio – Comfort Stay in Tiruvannamalai
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "rgba(255, 255, 255, 0.95)",
              marginBottom: "2rem",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.6,
              textShadow: "0 1px 2px rgba(0,0,0,0.3)"
            }}
          >
            Choose from our premium AC rooms designed for families, pilgrims, and business travelers, offering a peaceful stay near Girivalam Path.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}
          >
            <motion.button
              onClick={() => window.open('tel:+919361677996')}
              style={{
                backgroundColor: "#25D366",
                color: "white",
                fontWeight: 600,
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                border: "none",
                fontFamily: "'Poppins', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)"
              }}
              whileHover={{ scale: 1.05, backgroundColor: "#128C7E" }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Call Now
            </motion.button>
            
            <motion.button
              onClick={() => window.open('https://wa.me/919361677996', '_blank')}
              style={{
                backgroundColor: "#C8A96A",
                color: "white",
                fontWeight: 600,
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                border: "none",
                fontFamily: "'Poppins', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 12px rgba(200, 169, 106, 0.3)"
              }}
              whileHover={{ scale: 1.05, backgroundColor: "#b8975a" }}
              whileTap={{ scale: 0.95 }}
            >
              💬 WhatsApp Now
            </motion.button>
            
            <motion.button
              onClick={() => {
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                backgroundColor: "#2B2B2B",
                color: "white",
                fontWeight: 600,
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                border: "none",
                fontFamily: "'Poppins', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 12px rgba(43, 43, 43, 0.3)"
              }}
              whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
              whileTap={{ scale: 0.95 }}
            >
              🔍 Check Availability
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;