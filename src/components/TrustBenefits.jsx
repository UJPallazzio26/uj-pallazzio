import { motion } from "framer-motion";
import { Gift, BadgeCheck, Clock, Star, ArrowUpDown } from "lucide-react";

const benefits = [
  { icon: Gift, title: "Complimentary Breakfast", desc: "Fresh daily breakfast included with every direct booking" },
  { icon: BadgeCheck, title: "Best Price Guarantee", desc: "Book direct for the lowest rate — guaranteed" },
  { icon: Clock, title: "Free Early Check-in", desc: "Subject to availability for direct guests" },
  { icon: Star, title: "Priority Room Allocation", desc: "Room Upgrade For Returning Guest" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const TrustBenefits = () => (
  <section className="section-padding" style={{ backgroundColor: "#ffffff" }}>
    <div className="container text-center" style={{ maxWidth: "1000px" }}>
      <motion.h2 
        className="luxury-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
         Book Direct With UJ Pallazzio - Business Class Luxury Hotel
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
        viewport={{ once: true, margin: "-100px" }}
      >
        {benefits.map(b => (
          <motion.div 
            key={b.title} 
            className="col-12 col-sm-6 col-lg-3"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="d-flex flex-column align-items-center text-center">
              <motion.div 
                className="d-flex align-items-center justify-content-center mb-3" 
                style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", backgroundColor: "rgba(255, 152, 0, 0.1)" }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 152, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <b.icon style={{ width: "1.5rem", height: "1.5rem", color: "#ff9800" }} />
              </motion.div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.125rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.5rem" }}>{b.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustBenefits;