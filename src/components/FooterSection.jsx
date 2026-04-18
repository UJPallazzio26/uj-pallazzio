import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FooterSection = () => (
  <footer style={{ backgroundColor: "#1a1a1a", color: "white" }}>
    <div className="container" style={{ maxWidth: "1200px", padding: "4rem 1.5rem 2rem" }}>
      <div className="row g-4">
        <motion.div 
          className="col-12 col-lg-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
            UJ Pallazzio
          </h3>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
           UJ Pallazzio – Business Class Luxury Hotel in Tiruvannamalai offering peaceful stay near Arunachaleswarar Temple & Girivalam Path. Ideal for pilgrims, families & business travelers seeking clean AC rooms, secure parking, and easy access away from temple traffic.
          </p>
          <div className="d-flex gap-3">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61569264764553" },
              { Icon: Instagram, href: "https://www.instagram.com/ujpallazzio?igsh=eXd5cWF0bDk5ejM5" },
              { Icon: Youtube, href: "https://www.youtube.com/@UJPALLAZZIO" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white"
                }}
                whileHover={{ backgroundColor: "#ff9800", scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Icon style={{ width: "1.125rem", height: "1.125rem" }} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="col-6 col-lg-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", color: "#ff9800" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Rooms", "Amenities", "Location", "Reviews", "FAQ"].map((link, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                <motion.a 
                  href={`#${link.toLowerCase()}`}
                  style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "0.875rem" }}
                  whileHover={{ color: "#ff9800", x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="col-6 col-lg-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", color: "#ff9800" }}>Contact Us</h4>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-start gap-2">
              <MapPin style={{ width: "1rem", height: "1rem", color: "#ff9800", flexShrink: 0, marginTop: "0.125rem" }} />
              <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.875rem" }}> Vellore Main Road Near Girivalam Path, Tiruvannamalai, Tamil Nadu</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Phone style={{ width: "1rem", height: "1rem", color: "#ff9800", flexShrink: 0 }} />
              <motion.a 
                href="tel:+919361677996" 
                style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "0.875rem" }}
                whileHover={{ color: "#ff9800" }}
              >
                +91 93616 77996
              </motion.a>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Mail style={{ width: "1rem", height: "1rem", color: "#ff9800", flexShrink: 0 }} />
              <motion.a 
                href="mailto:info@ujpallazzio.com" 
                style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "0.875rem" }}
                whileHover={{ color: "#ff9800" }}
              >
                ujpallazzio@gmail.com

              </motion.a>
            </div>
             <div className="d-flex align-items-center gap-2">
              <Phone style={{ width: "1rem", height: "1rem", color: "#ff9800", flexShrink: 0 }} />
              <motion.a 
                href="tel:+919361677996" 
                style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "0.875rem" }}
                whileHover={{ color: "#ff9800" }}
              >
                Contact / Book Now
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="col-12 col-lg-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", color: "#ff9800" }}>Opening Hours</h4>
          <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.875rem" }}>
            <div className="d-flex justify-content-between mb-2">
              <span>Reception</span>
              <span style={{ color: "#ff9800" }}>24 Hours</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Check-in</span>
              <span>12:00 PM</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Check-out</span>
              <span>11:00 AM</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Breakfast</span>
              <span>7:00 AM - 10:00 AM</span>
            </div>
            <div className="d-flex justify-content-left ">
              {/* <span>Breakfast</span> */}
              <span>24/7 Check-in Support</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div 
        className="text-center mt-5 pt-4" 
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.75rem", marginBottom: 0 }}>
           Book Direct at UJ Pallazzio – Best Price Guaranteed Hotel in Tiruvannamalai | Call or WhatsApp for Instant Confirmation
        </p>
         <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.75rem", marginBottom: 0 }}>
          © {new Date().getFullYear()} UJ Pallazzio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;