import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowLeft, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import { roomsData } from "@/data/roomsData";

const HeroCarousel = ({ images, alt, initialIndex = 0 }) => {
  const [current, setCurrent] = useState(initialIndex);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setCurrent(initialIndex);
  }, [initialIndex]);

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (hovered) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, hovered]);

  return (
    <div
      className="room-hero-media room-image-fade"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${alt} - view ${i + 1}`}
          className={`room-hero-slide ${i === current ? "is-active" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className="room-hero-overlay" />

      {[
        { dir: "prev", fn: prev, side: { left: "1.25rem" }, Icon: ChevronLeft },
        { dir: "next", fn: next, side: { right: "1.25rem" }, Icon: ChevronRight },
      ].map(({ dir, fn, side, Icon }) => (
        <button
          key={dir}
          onClick={fn}
          aria-label={dir === "prev" ? "Previous image" : "Next image"}
          className="room-hero-arrow"
          style={side}
        >
          <Icon style={{ width: "22px", height: "22px", color: "#1a1a1a" }} />
        </button>
      ))}

      <div className="room-hero-dots">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`room-hero-dot ${i === current ? "is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

const AmenityCard = ({ icon: Icon, label }) => (
  <div
    className="d-flex flex-column align-items-center justify-content-center text-center p-3 room-amenity-card"
    style={{
      backgroundColor: "#fff",
      borderRadius: "0.75rem",
      border: "1px solid rgba(255,152,0,0.2)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      minHeight: "90px",
      gap: "0.5rem",
      transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
    }}
  >
    <div
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        backgroundColor: "rgba(255,152,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Icon style={{ width: "20px", height: "20px", color: "#ff9800" }} />
    </div>
    <span
      style={{
        fontSize: "0.78rem",
        fontWeight: 500,
        color: "#374151",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: 1.3,
      }}
    >
      {label}
    </span>
  </div>
);

const BookingButtons = ({ onBook, onAvailability }) => (
  <div className="d-flex flex-column gap-2">
    <button
      onClick={onBook}
      style={{
        width: "100%",
        backgroundColor: "#ff9800",
        color: "#fff",
        fontWeight: 600,
        padding: "0.7rem 1rem",
        fontSize: "0.9rem",
        borderRadius: "0.5rem",
        border: "2px solid #ff9800",
        fontFamily: "'Poppins', sans-serif",
        cursor: "pointer",
        letterSpacing: "0.04em",
        transition: "transform 0.2s ease, background-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f57c00";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#ff9800";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      Book Now
    </button>

    <button
      onClick={onAvailability}
      style={{
        width: "100%",
        backgroundColor: "transparent",
        color: "#ff9800",
        fontWeight: 600,
        padding: "0.7rem 1rem",
        fontSize: "0.9rem",
        borderRadius: "0.5rem",
        border: "2px solid #ff9800",
        fontFamily: "'Poppins', sans-serif",
        cursor: "pointer",
        letterSpacing: "0.04em",
        transition: "transform 0.2s ease, background-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255,152,0,0.08)";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      Instant confirmation via Call / WhatsApp
    </button>

    <p
      style={{
        textAlign: "center",
        color: "#e53935",
        fontSize: "14px",
        fontWeight: 600,
        marginTop: "0.25rem",
        marginBottom: 0,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Highly Rated for Comfort and Cleanliness
    </p>
  </div>
);

const BookingCard = ({ room, onBook, onAvailability, className = "", guestName, setGuestName, checkIn, setCheckIn, checkOut, setCheckOut, nights, totalAmount, roomPrice, formError }) => {
  const perks = (room?.amenities || [])
    .slice(0, 3)
    .map((amenity) => amenity.label)
    .join(" · ");

  return (
  <form onSubmit={onBook}
    className={className}
    style={{
      backgroundColor: "#fff",
      borderRadius: "1rem",
      border: "1px solid #f0f0f0",
      boxShadow: "0 8px 30px rgba(0,0,0,0.09)",
      padding: "2rem",
    }}
  >
    <div className="text-left mb-3">
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem", color: "#374151", marginBottom: "0.25rem" }}>
        <strong>Room:</strong> {room.name}
      </p>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem", color: "#374151", marginBottom: "0.25rem" }}>
        <strong>Price:</strong> ₹{roomPrice} per night
      </p>
      {room.bedType && (
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>
        <span style={{ width: "16px", height: "16px", color: "#ff9800", display: "inline-flex", alignItems: "center", justifyContent: "center", marginRight: "0.25rem" }}>🛏️</span>
        {room.bedType}
      </p>
      )}
    </div>

    <hr style={{ borderColor: "#f0f0f0", marginBottom: "1.25rem" }} />

    <div className="mb-3 text-left">
      <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#374151", marginBottom: "0.5rem", display: "block" }}>
        Guest Name *
      </label>
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        placeholder="Enter your full name"
        className="form-control"
        style={{
          fontFamily: "'Poppins', sans-serif",
          padding: "0.6rem 0.85rem",
          borderRadius: "0.5rem",
          border: "2px solid #e5e7eb",
          fontSize: "0.9rem",
          width: "100%"
        }}
      />
    </div>

    <div className="row g-3 mb-3">
      <div className="col-6 text-left">
        <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#374151", marginBottom: "0.5rem", display: "block" }}>
          Check-in *
        </label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          className="form-control"
          style={{
            fontFamily: "'Poppins', sans-serif",
            padding: "0.6rem 0.85rem",
            borderRadius: "0.5rem",
            border: "2px solid #e5e7eb",
            fontSize: "0.9rem",
            width: "100%"
          }}
        />
      </div>
      <div className="col-6 text-left">
        <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#374151", marginBottom: "0.5rem", display: "block" }}>
          Check-out *
        </label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn}
          className="form-control"
          style={{
            fontFamily: "'Poppins', sans-serif",
            padding: "0.6rem 0.85rem",
            borderRadius: "0.5rem",
            border: "2px solid #e5e7eb",
            fontSize: "0.9rem",
            width: "100%"
          }}
        />
      </div>
    </div>

    {formError && (
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.8rem", color: "#dc2626", marginBottom: "1rem", textAlign: "left" }}>
        {formError}
      </p>
    )}

    <div className="text-left p-3 bg-gray-50 rounded-lg mb-3">
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem", color: "#374151", marginBottom: "0.25rem" }}>
        {nights} Night(s) × ₹{roomPrice}
      </p>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#16a34a" }}>
        Total: ₹{totalAmount}
      </p>
    </div>

    <hr style={{ borderColor: "#f0f0f0", marginBottom: "1.25rem" }} />

    <button
      type="submit"
      style={{
        width: "100%",
        backgroundColor: "#ff9800",
        color: "#fff",
        fontWeight: 600,
        padding: "0.7rem 1rem",
        fontSize: "0.9rem",
        borderRadius: "0.5rem",
        border: "2px solid #ff9800",
        fontFamily: "'Poppins', sans-serif",
        cursor: "pointer",
        letterSpacing: "0.04em",
        transition: "transform 0.2s ease, background-color 0.2s ease",
        marginBottom: "0.75rem"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f57c00";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#ff9800";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      Proceed to Payment
    </button>

    <button
      type="button"
      onClick={onAvailability}
      style={{
        width: "100%",
        backgroundColor: "transparent",
        color: "#ff9800",
        fontWeight: 600,
        padding: "0.7rem 1rem",
        fontSize: "0.9rem",
        borderRadius: "0.5rem",
        border: "2px solid #ff9800",
        fontFamily: "'Poppins', sans-serif",
        cursor: "pointer",
        letterSpacing: "0.04em",
        transition: "transform 0.2s ease, background-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255,152,0,0.08)";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      Check Availability
    </button>

    <p
      style={{
        textAlign: "center",
        color: "#e53935",
        fontSize: "14px",
        fontWeight: 600,
        marginTop: "1rem",
        marginBottom: 0,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Highly Rated for Comfort and Cleanliness
    </p>
  </form>
  );
};

const RoomDetailPage = ({ roomIdOverride }) => {
  const { roomId } = useParams();
  const resolvedRoomId = roomIdOverride || roomId;
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const amenitiesRef = useRef(null);
  const highlightsRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [amenitiesVisible, setAmenitiesVisible] = useState(false);
  const [highlightsVisible, setHighlightsVisible] = useState(false);

  const room = roomsData.find((r) => String(r.id) === resolvedRoomId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [resolvedRoomId]);

  useEffect(() => {
    setAboutVisible(false);
    setAmenitiesVisible(false);
    setHighlightsVisible(false);

    const observers = [];

    if (aboutRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAboutVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(aboutRef.current);
      observers.push(observer);
    }

    if (amenitiesRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAmenitiesVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(amenitiesRef.current);
      observers.push(observer);
    }

    if (highlightsRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHighlightsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(highlightsRef.current);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [resolvedRoomId]);

  if (!room) {
    return (
      <>
        <Navbar />
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "80vh" }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#1a1a1a",
              marginBottom: "1rem",
            }}
          >
            Room not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="btn"
            style={{
              backgroundColor: "#ff9800",
              color: "#fff",
              border: "none",
              padding: "0.6rem 1.5rem",
              borderRadius: "0.375rem",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Back to Home
          </button>
        </div>
        <FloatingButtons />
      </>
    );
  }

  const [guestName, setGuestName] = useState("");
  const [checkIn, setCheckIn] = useState(new Date().toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(new Date(Date.now() + 86400000).toISOString().split('T')[0]);
  const [formError, setFormError] = useState("");

  const roomPrice = parseInt(room.price.replace(/[^0-9]/g, ''));
  
  // Calculate nights and total amount
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const totalAmount = nights * roomPrice;

  const handleBook = (e) => {
    e.preventDefault();
    setFormError("");

    // Validate form
    if (!guestName.trim()) {
      setFormError("Please enter your name");
      return;
    }
    if (!checkIn) {
      setFormError("Please select check-in date");
      return;
    }
    if (!checkOut) {
      setFormError("Please select check-out date");
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      setFormError("Check-out date must be after check-in date");
      return;
    }

    // Collect booking details
    const bookingData = {
      name: guestName.trim(),
      phone: "",
      room: room.name,
      roomPrice: roomPrice,
      amount: totalAmount,
      nights: nights,
      checkIn: checkIn,
      checkOut: checkOut
    };

    // Save to localStorage
    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    // Redirect to Payment Page
    navigate("/payment");
  };

  const handleAvailability = () => {
    const msg = `Hi, I'd like to check availability for the ${room.name} at UJ Pallazzio.`;
    window.open(`https://wa.me/919361677996?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>{room.name} - UJ Pallazzio, Tiruvannamalai</title>
        <meta
          name="description"
          content={`Book ${room.name} at UJ Pallazzio. ${room.occupancy} | ${room.price} per night. ${room.description.slice(0, 120)}...`}
        />
      </Helmet>

      <style>{`
        .room-detail-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
          padding-bottom: 40px;
        }
        .room-detail-hero {
          width: 100%;
          height: 350px;
          overflow: hidden;
        }
        .room-hero-media {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          opacity: 0;
          animation: fadeIn 0.6s ease forwards;
        }
        .room-hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .room-hero-slide.is-active {
          opacity: 1;
        }
        .room-hero-overlay {
          position: absolute;
          inset: auto 0 0 0;
          height: 35%;
          background: linear-gradient(to top, rgba(0,0,0,0.55), transparent);
          pointer-events: none;
        }
        .room-hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: opacity 0.3s ease, transform 0.2s ease;
          opacity: 1;
        }
        .room-hero-arrow:hover {
          transform: translateY(-50%) scale(1.08);
        }
        .room-hero-dots {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 5;
        }
        .room-hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.6);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: width 0.3s ease, background 0.3s ease;
        }
        .room-hero-dot.is-active {
          width: 24px;
          background: #ff9800;
        }
        .room-detail-heading {
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .room-two-column {
          margin-top: 12px;
          margin-bottom: 40px;
        }
        .room-additional-images {
          margin-bottom: 24px;
        }
        .room-additional-thumb {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 0.75rem;
          border: 1px solid #f0f0f0;
        }
        .room-section-card {
          background-color: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
          height: 100%;
        }
        .room-about-animate {
          opacity: 0;
          transform: translateY(20px);
        }
        .room-about-animate.is-visible {
          animation: fadeUp 0.5s ease forwards;
        }
        .room-price-animate {
          opacity: 0;
          transform: translateX(40px);
          animation: slideInRight 0.5s ease forwards;
        }
        .room-amenities-grid .room-amenity-item {
          opacity: 0;
          transform: translateY(20px);
        }
        .room-amenities-grid.is-visible .room-amenity-item {
          animation: fadeUp 0.5s ease forwards;
        }
        .room-amenity-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(255,152,0,0.15) !important;
          border-color: rgba(255,152,0,0.5) !important;
        }
        .room-highlights-grid .room-highlight-item {
          opacity: 0;
          transform: translateY(20px);
        }
        .room-highlights-grid.is-visible .room-highlight-item {
          animation: fadeUpHighlight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .room-highlight-card {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          will-change: transform, background-color, box-shadow, border-color;
        }
        .room-highlight-card:hover {
          transform: scale(1.03) translateZ(0);
          background-color: #fff7ed !important;
          border-color: #f97316 !important;
          box-shadow: 0 12px 32px rgba(249, 115, 22, 0.25) !important;
        }
        .room-highlight-icon {
          transition: color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .room-highlight-card:hover .room-highlight-icon {
          color: #ea580c !important;
        }
        @keyframes fadeUpHighlight {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 768px) {
          .room-detail-hero {
            height: 500px;
          }
        }
        @media (min-width: 1024px) {
          .room-detail-hero {
            height: 700px;
          }
        }
        @media (max-width: 767px) {
          .room-detail-shell {
            display: flex;
            flex-direction: column;
          }
          .room-two-column {
            display: contents;
          }
          .room-two-column > .col-lg-8 {
            order: 1;
          }
          .room-two-column > .col-lg-4 {
            order: 4;
          }
          .room-detail-shell > section:first-of-type {
            order: 2;
          }
          .room-detail-shell > section:last-of-type {
            order: 3;
          }
        }
      `}</style>

      <Navbar />

      <div style={{ height: "72px", backgroundColor: "#ffffff" }} />

      <div
        style={{
          backgroundColor: "#fafafa",
          borderBottom: "1px solid #f0f0f0",
          padding: "0.75rem 0",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px" }}>
          <button
            onClick={() => navigate("/#rooms")}
            className="d-flex align-items-center gap-2"
            style={{
              background: "none",
              border: "none",
              color: "#ff9800",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
              padding: "0.25rem 0",
            }}
          >
            <ArrowLeft style={{ width: "16px", height: "16px" }} />
            Back to Rooms
          </button>
        </div>
      </div>

      <div className="room-detail-shell">
        <div className="room-detail-hero">
          <HeroCarousel images={room.images} alt={room.alt} />
        </div>

        <h1
          className="room-detail-heading"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#1a1a1a",
            textAlign: "left",
          }}
        >
          {room.name} 
        </h1>

        {room.images?.length > 1 && (
          <div className="room-additional-images">
            <div className="row g-3">
              {room.images.slice(1).map((image, index) => (
                <div key={`${room.id}-extra-${index}`} className="col-6 col-md-4">
                  <img
                    src={image}
                    alt={`${room.name} additional view ${index + 1}`}
                    className="room-additional-thumb"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="row g-4 room-two-column">
          <div className="col-12 col-lg-8">
            <section
              ref={aboutRef}
              className={`room-section-card room-about-animate ${aboutVisible ? "is-visible" : ""}`}
            >
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                }}
              >
                About the Room
              </h2>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.95rem",
                  color: "#4b5563",
                  lineHeight: 1.85,
                  marginBottom: 0,
                }}
              >
                {room.description}
              </p>
            </section>
          </div>

          <div className="col-12 col-lg-4">
            <div className="room-price-animate">
              <BookingCard 
                room={room} 
                onBook={handleBook} 
                onAvailability={handleAvailability}
                guestName={guestName}
                setGuestName={setGuestName}
                checkIn={checkIn}
                setCheckIn={setCheckIn}
                checkOut={checkOut}
                setCheckOut={setCheckOut}
                nights={nights}
                totalAmount={totalAmount}
                roomPrice={roomPrice}
                formError={formError}
              />
            </div>
          </div>
        </div>

        <section ref={amenitiesRef} style={{ marginTop: "40px", marginBottom: "40px" }}>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#1a1a1a",
              marginBottom: "1.25rem",
            }}
          >
            Room Amenities
          </h2>

          <div className={`row g-3 room-amenities-grid ${amenitiesVisible ? "is-visible" : ""}`}>
            {room.amenities.map((amenity, i) => (
              <div
                key={amenity.label}
                className="col-6 col-sm-4 col-md-3 room-amenity-item"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <AmenityCard icon={amenity.icon} label={amenity.label} />
              </div>
            ))}
          </div>
        </section>

        {Array.isArray(room.highlights) && room.highlights.length > 0 && (
          <section ref={highlightsRef} style={{ marginTop: "40px", marginBottom: "40px" }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#1a1a1a",
                marginBottom: "1rem",
              }}
            >
              Room Highlights
            </h2>
            <div className={`row g-3 room-highlights-grid ${highlightsVisible ? "is-visible" : ""}`}>
              {room.highlights.map((highlight, index) => (
                <div key={highlight} className="col-12 col-md-6 room-highlight-item" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <div
                    className="room-highlight-card"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #f0f0f0",
                      borderRadius: "0.75rem",
                      padding: "0.85rem 1rem",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.95rem",
                      color: "#374151",
                      boxShadow: "0 2px 8px rgba(249, 115, 22, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span className="room-highlight-icon" style={{ color: "#f97316", fontSize: "1.2rem", fontWeight: "bold", flexShrink: 0 }}>•</span>
                    <span>{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <FloatingButtons />
    </>
  );
};

export default RoomDetailPage;
