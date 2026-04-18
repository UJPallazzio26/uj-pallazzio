import { motion } from "framer-motion";
import { Navigation, Landmark, Bus, Train, Hospital, ExternalLink, Car } from "lucide-react";

const landmarks = [
  { icon: Navigation, name: "Girivalam Path", distance: "2.5 km" },
  { icon: Landmark, name: "Arunachaleswarar Temple", distance: "5 km" },
  { icon: Bus, name: "Bus Stand", distance: "4 km" },
  { icon: Train, name: "Railway Station", distance: " 4 km" },
  { icon: Hospital, name: "Hospital", distance: "1 km" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const MAPS_URL =
  "https://maps.google.com/?q=UJ+PALLAZZIO+Business+Class+Luxury+Hotel+Tiruvannamalai";

const LocationSection = () => (
  <section id="location" className="section-padding" style={{ backgroundColor: "#ffffff" }}>
    <div className="container" style={{ maxWidth: "1200px" }}>
      {/* Section Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#ff9800",
            borderRadius: "9999px",
            padding: "0.375rem 1rem",
            backgroundColor: "#ff98001a",
            marginBottom: "12px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          LOCATION ADVANTAGE
        </span>
        <h2
          className="luxury-heading"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Best Hotel Located in Tiruvannamalai
        </h2>
        <div className="gold-divider" />
      </motion.div>

      <div className="row g-4 mt-4 align-items-stretch">
        {/* LEFT — Nearby Places */}
        <motion.div
          className="col-12 col-lg-6"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div
            className="h-100 p-4 d-flex flex-column"
            style={{
              backgroundColor: "#ffff",
              borderRadius: "0.875rem",
              boxShadow: "0 2px 16px hsla(0, 0%, 0%, 0.06)",
            }}
          >
            {/* Card Header */}
            <div style={{ marginBottom: "1.50rem" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#2B2B2B",
                  marginBottom: "0.4rem",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Nearby Places
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6B6B6B",
                  marginBottom: 0,
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1.6,
                }}
              >
                This helps travelers plan easily.
              </p>
            </div>

            {/* Landmark List */}
            <motion.div
              className="d-flex flex-column"
              style={{ gap: "0.75rem" }}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {landmarks.map(({ icon: Icon, name, distance }) => (
                <motion.div
                  key={name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    backgroundColor: "#ffffff",
                    borderRadius: "0.625rem",
                    padding: "0.875rem 1rem",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                    cursor: "default",
                  }}
                >
                  {/* Icon bubble */}
                  <div
                    style={{
                      minWidth: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(200, 169, 106, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: "20px", height: "20px", color: "#ff9800" }} />
                  </div>

                  {/* Name */}
                  <span
                    style={{
                      flex: 1,
                      fontSize: "0.7375rem",
                      fontWeight: 700,
                      color: "#2B2B2B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {name}
                  </span>

                  {/* Distance badge */}
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: "#ff9800",
                      backgroundColor: "rgba(200, 169, 106, 0.1)",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "999px",
                      flexShrink: 0,
                      fontFamily: "'Poppins', sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {distance}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Transport Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
              style={{
                marginTop: "1.25rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.875rem",
                background: "linear-gradient(135deg, #fffde7 0%, #fff9e6 100%)",
                borderRadius: "0.75rem",
                padding: "1rem 1.1rem",
                boxShadow: "0 2px 12px rgba(200,169,106,0.13)",
                border: "1px solid rgba(200,169,106,0.18)",
              }}
            >
              {/* Icon bubble */}
              <div
                style={{
                  minWidth: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(200,169,106,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                <Car style={{ width: "20px", height: "20px", color: "#C8A96A" }} />
              </div>

              {/* Text */}
              <div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#2B2B2B",
                    marginBottom: "0.3rem",
                    lineHeight: 1.4,
                  }}
                >
                  Transport Arrangements Available for Girivalam
                </p>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.825rem",
                    fontWeight: 400,
                    color: "#6B6B6B",
                    lineHeight: 1.6,
                  }}
                >
                  Smooth and hassle-free travel assistance can be arranged on request.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — Google Map */}
        <motion.div
          className="col-12 col-lg-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="h-100 d-flex flex-column" style={{ gap: "1rem" }}>
            {/* Map embed */}
            <div
              style={{
                flex: 1,
                borderRadius: "0.875rem",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.10)",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4937392727056!2d79.0694906!3d12.282501000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc10019c9740d%3A0x1f32da82ec5bdd20!2sUJ%20PALLAZZIO%20-%20Business%20Class%20Luxury%20Hotel!5e0!3m2!1sen!2sin!4v1775643637626!5m2!1sen!2sin"
                className="location-map"
                style={{ border: 0, width: "100%", display: "block", flex: 1 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UJ Pallazzio Location Map"
              />
            </div>

            {/* Open in Google Maps button */}
            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-100"
              style={{
                backgroundColor: "#ff9800",
                color: "#ffffff",
                fontWeight: 600,
                padding: "0.9rem 1rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                border: "none",
                fontFamily: "'Poppins', sans-serif",
                textAlign: "center",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                boxShadow: "0 2px 10px rgba(200,169,106,0.28)",
              }}
              whileHover={{
                y: -3,
                backgroundColor: "#b8975a",
                boxShadow: "0 10px 28px rgba(200,169,106,0.45)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink style={{ width: "18px", height: "18px" }} />
              Open in Google Maps
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
