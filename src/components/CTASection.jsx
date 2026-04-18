import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const handleBookNow = () => {
    window.dispatchEvent(new CustomEvent("track", { detail: "cta_book_now_click" }));
    window.open("https://wa.me/919361677996?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20room%20at%20UJ%20Pallazzio.", "_blank");
  };

  return (
    <section className="position-relative" style={{ overflow: "hidden" }}>
      <div 
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div 
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          backgroundColor: "rgba(26, 26, 26, 0.85)"
        }}
      />
      
      <div className="position-relative container text-center" style={{ maxWidth: "800px", padding: "6rem 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontSize: "2.5rem", 
              fontWeight: 600, 
              color: "white", 
              marginBottom: "1rem" 
            }}
          >
            Ready for Your Stay?
          </h2>
          <p 
            style={{ 
              fontSize: "1.125rem", 
              color: "rgba(255, 255, 255, 0.8)", 
              marginBottom: "0.5rem",
              maxWidth: "600px",
              margin: "0 auto 0.5rem auto"
            }}
          >
            Experience comfort and convenience at UJ Pallazzio
          </p>
          <p 
            style={{ 
              fontSize: "1rem", 
              color: "#ffa726", 
              marginBottom: "2rem",
              letterSpacing: "0.1em"
            }}
          >
            Best rates guaranteed when you book directly
          </p>
          
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
            <motion.a
              href="tel:+919361677996"
              className="btn d-flex align-items-center gap-2"
              style={{
                backgroundColor: "#ffa726",
                color: "white",
                // border: "2px solid white",
                fontWeight: 500,
                padding: "0.875rem 2rem",
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderRadius: "0.375rem"
              }}
              whileHover={{ scale: 1.05, backgroundColor: "#ffa726" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone style={{ width: "1.125rem", height: "1.125rem" }} />
              Call Us
            </motion.a>
            <motion.button
              onClick={handleBookNow}
              className="btn d-flex align-items-center gap-2"
              style={{
                backgroundColor: "#04f500",
                color: "white",
                fontWeight: 500,
                padding: "0.875rem 2rem",
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderRadius: "0.375rem",
                border: "none"
              }}
              whileHover={{ scale: 1.05, backgroundColor: "#04f500" }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle style={{ width: "1.125rem", height: "1.125rem" }} />
              Book via WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;