import { motion } from "framer-motion";
import h2 from "../assets/h2.png"

const AboutUsSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffff",
        padding: "80px 24px",
      }}
    >


       <div className="container text-center" style={{ maxWidth: "1200px" }}>
        {/* Badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 152, 0, 0.1)",
              color: "#ff9800",
              fontSize: "1.0rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontFamily: "'Poppins', sans-serif",
              
            }}
          >
            About UJ Pallaizo
          </span>
       </div>
       </div>
      
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "36px",
              fontWeight: 700,
              color: "#2B2B2B",
              marginBottom: "16px",
            }}
          >
            Experience Comfort & Peace at UJ Pallazzio
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#ff9800",
              margin: "0 auto",
            }}
          />
        </motion.div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#6B6B6B",
                marginBottom: "24px",
              }}
            >
              UJ Pallazzio is a premium business hotel in Tiruvannamalai, offering clean rooms, comfortable stay, and peaceful environment near Arunachaleswarar Temple. Ideal for both pilgrims and business travelers, the hotel provides modern amenities and a relaxing atmosphere.
            </p>

            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#6B6B6B",
                marginBottom: "24px",
              }}
            >
             Enjoy a peaceful and comfortable stay at UJ Pallazzio with Centralized air-conditioned rooms, 24/7 hot water, high-speed Wi-Fi, lift access, and clean, modern amenities. Perfect for families, pilgrims, and business travelers, our hotel offers a calm environment away from temple traffic. Book direct for the best rates, priority check-in, and a seamless, personalized stay experience.
            </p>

            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#6B6B6B",
                marginBottom: 0,
              }}
            >
              UJ Pallazzio is perfect for temple stay, Girivalam stay, budget luxury hotel, and business stay in Tiruvannamalai. With focus on hygiene, comfort, and affordable rooms, it is a top choice for a hassle-free stay.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={h2}
              alt="UJ Pallazzio Hotel"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;