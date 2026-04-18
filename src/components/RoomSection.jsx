import { motion } from "framer-motion";
import { Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { roomsData } from "@/data/roomsData";

const rooms = roomsData;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ImageCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  }, [images.length]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [goToNext, isHovered]);

  return (
    <div
      style={{ position: "relative", height: "100%", width: "100%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`${alt} - Image ${index + 1}`}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            loading="lazy"
            initial={false}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.9)",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 10,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft
          style={{ width: "20px", height: "20px", color: "#1a1a1a" }}
        />
      </motion.button>

      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.9)",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 10,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight
          style={{ width: "20px", height: "20px", color: "#1a1a1a" }}
        />
      </motion.button>

      {/* Dots Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 10,
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background:
                index === currentIndex ? "#ff9800" : "rgba(255, 255, 255, 0.5)",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const RoomSection = () => {
  const navigate = useNavigate();

  const handleBook = (roomName) => {
    window.dispatchEvent(
      new CustomEvent("track", { detail: "book_room_click" }),
    );
    const msg = `Hi, I'd like to book the ${roomName} at UJ Pallazzio.`;
    window.open(
      `https://wa.me/919361677996?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section
      id="rooms"
      className="section-padding"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container text-center" style={{ maxWidth: "1200px" }}>
        <motion.h2
          className="luxury-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Rooms
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
          {rooms.map((room) => (
            <motion.div
              key={room.name}
              className="col-12 col-md-4"
              variants={cardVariants}
            >
              <motion.div
                className="card h-100 shadow"
                style={{
                  border: "none",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/rooms/${room.id}`)}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ height: "16rem", overflow: "hidden" }}>
                  <ImageCarousel images={room.images} alt={room.alt} />
                </div>

                <div
                  className="card-body text-start p-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {room.name}
                  </h3>

                  <div
                    className="d-flex align-items-center gap-2 mb-3"
                    style={{ color: "#6b7280", fontSize: "0.875rem" }}
                  >
                    <Users style={{ width: "1rem", height: "1rem" }} />{" "}
                    {room.occupancy}
                  </div>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {room.amenities.map((a) => (
                      <motion.span
                        key={a.label}
                        className="d-flex align-items-center gap-1"
                        style={{
                          fontSize: "0.75rem",
                          color: "#6b7280",
                          backgroundColor: "rgba(255, 152, 0, 0.1)",
                          padding: "0.25rem 0.625rem",
                          borderRadius: "9999px",
                        }}
                        whileHover={{
                          backgroundColor: "rgba(255, 152, 0, 0.2)",
                        }}
                      >
                        <a.icon
                          style={{
                            width: "0.875rem",
                            height: "0.875rem",
                            color: "#ff9800",
                          }}
                        />{" "}
                        {a.label}
                      </motion.span>
                    ))}
                  </div>

                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#6b7280",
                      marginBottom: "1rem",
                    }}
                  >
                    {room.name === "Business Comfort Room" 
                      ? "Couple friendly and suitable for business travelers" 
                      : room.name === "Premium Comfort Room" 
                      ? "Most booked room by families" 
                      : room.name === "Executive Luxury Room" 
                      ? "Perfect for Family stay with premium stay experience" 
                      : "Couple friendly room"}
                  </p>

                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: "bold",
                          color: "#1a1a1a",
                        }}
                      >
                        {room.price}
                      </span>
                      <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                        {" "}
                        / night
                      </span>
                    </div>

                    {/* <motion.button
                      onClick={() => handleBook(room.name)}
                      className="btn"
                      style={{
                        backgroundColor: "#ff9800",
                        color: "white",
                        fontWeight: 500,
                        padding: "0.5rem 1.25rem",
                        fontSize: "0.875rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        borderRadius: "0.375rem",
                        border: "none",
                      }}
                      whileHover={{ scale: 1.05, backgroundColor: "#f57c00" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book This Room
                    </motion.button> */}
                  </div>

                  {/* CTA Buttons */}
                  <div className="d-flex gap-2 mt-3">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/rooms/${room.id}`);
                      }}
                      style={{
                        flex: 1,
                        backgroundColor: "#ff9800",
                        color: "white",
                        fontWeight: 500,
                        padding: "0.5rem 0.75rem",
                        fontSize: "0.875rem",
                        borderRadius: "0.375rem",
                        border: "2px solid #ff9800",
                        fontFamily: "'Poppins', sans-serif",
                        cursor: "pointer",
                      }}
                      whileHover={{ backgroundColor: "#f57c00", scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Reserve This Room
                    </motion.button>
                  </div>

                  {/* Scarcity text */}
                  <motion.p
                    style={{
                      textAlign: "center",
                      color: "#e53935",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      marginTop: "0.5rem",
                      marginBottom: 0,
                      fontFamily: "'Poppins', sans-serif",
                      display: "inline-block",
                      width: "100%",
                      cursor: "default",
                    }}
                    whileHover={{ color: "#b71c1c", scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    Only few rooms left
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoomSection;
