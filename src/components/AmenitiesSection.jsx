import { motion } from "framer-motion";
import { Car, Coffee, Shirt, Wifi, Wind, Shield, Dumbbell, Utensils, Clock, Phone,ArrowUpDown, Droplets, ShowerHead, Zap, Lock, Bed } from "lucide-react";

const amenities = [
  { icon: Car, label: "Free Parking", desc: "Secure on-site parking for all guests" },
  { icon: Coffee, label: "Complimentary Breakfast", desc: "South Indian & continental options" },
  // { icon: Shirt, label: "Laundry Service", desc: "Same-day laundry and dry cleaning" },
  { icon: Wifi, label: "High-Speed WiFi", desc: "100 Mbps fiber connectivity" },
  { icon: Wind, label: "24/7 Air Conditioning", desc: "Climate control in all rooms" },
  { icon: Shield, label: "24-Hour Security", desc: "CCTV and on-site security staff" },
  // { icon: Dumbbell, label: "Fitness Center", desc: "Modern gym equipment available" },
  // { icon: Utensils, label: "In-Room Dining", desc: "Restaurant-quality meals to your room" },
  { icon: Clock, label: "24-Hour Front Desk", desc: "Assistance anytime, day or night" },
  // { icon: Phone, label: "Concierge Services", desc: "Temple visits, tours & transport" },
  { icon: ArrowUpDown, label: "Lift", desc: "Convenient access to all floors for guests" },
  { icon: Droplets, label: "Hot Water", desc: "24/7 hot water supply in all bathrooms" },
  { icon: ShowerHead, label: "Premium Bathroom Amenities", desc: "Luxury bathroom fixtures and toiletries" },
  { icon: Zap, label: "Power Backup", desc: "Uninterrupted power supply for all rooms" },
    { icon: Bed, label: "Premium Bed Room Amenities", desc: "Luxury bed room Amenities" },
  { icon: Lock, label: "Smart Lock", desc: "Secure keyless entry system for rooms" },];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

const AmenitiesSection = () => (
  <section id="amenities" className="section-padding" style={{ backgroundColor: "#f8f9fa" }}>
    <div className="container text-center" style={{ maxWidth: "1200px" }}>
      <motion.h2 
        className="luxury-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Hotel Amenities
      </motion.h2>
      <motion.div 
        className="gold-divider"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div 
        className="row g-4 mt-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {amenities.map(a => (
          <motion.div 
            key={a.label} 
            className="col-12 col-sm-6 col-lg-4 col-xl-2"
            variants={itemVariants}
          >
            <motion.div 
              className="h-100 p-4"
              style={{ 
                backgroundColor: "#ffffff", 
                borderRadius: "0.75rem", 
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(0, 0, 0, 0.05)"
              }}
              whileHover={{ 
                y: -12, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                borderColor: "rgba(255, 152, 0, 0.3)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div 
                className="d-inline-flex align-items-center justify-content-center mb-3"
                style={{ 
                  width: "3rem", 
                  height: "3rem", 
                  borderRadius: "0.5rem", 
                  backgroundColor: "rgba(255, 152, 0, 0.1)" 
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <a.icon style={{ width: "1.5rem", height: "1.5rem", color: "#ff9800" }} />
              </motion.div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.5rem" }}>{a.label}</h3>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: 0 }}>{a.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AmenitiesSection;