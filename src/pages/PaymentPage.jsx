import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    // Load booking data from localStorage
    const storedData = localStorage.getItem("bookingData");
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setBookingData(data);
      } catch (error) {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!bookingData) {
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
            No booking data
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

  const { name, room, amount, checkIn, checkOut } = bookingData;
  const upiLink = `upi://pay?pa=CFST20017776@CUB&pn=UJ%20Pallazzio&am=${amount}&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(upiLink)}`;

  const handlePayNow = () => {
    // Open UPI payment app
    window.location.href = upiLink;

    // Prepare WhatsApp message
    const whatsappMessage = `Hello UJ Pallazzio,

I have reserved a room.

Name: ${name}
Room: ${room}
Check-in: ${new Date(checkIn).toLocaleDateString()}
Check-out: ${new Date(checkOut).toLocaleDateString()}
Amount: ₹${amount}

I am making payment now.`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp after 1 second
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Payment - UJ Pallazzio, Tiruvannamalai</title>
      </Helmet>

      <Navbar />

      <div style={{ height: "72px", backgroundColor: "#ffffff" }} />

      <div
        className="container d-flex flex-column align-items-center justify-content-center py-5"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        <div style={{ maxWidth: "480px", width: "100%", marginBottom: "1rem" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "none",
              border: "none",
              color: "#6b7280",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
              padding: "0.25rem 0",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
              transition: "color 0.2s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#1a1a1a"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; }}
          >
            ← Back
          </button>
        </div>

        <div
          className="text-center"
          style={{
            maxWidth: "480px",
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            border: "1px solid #f0f0f0",
            boxShadow: "0 8px 30px rgba(0,0,0,0.09)",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#1a1a1a",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            Complete Your Booking
          </h2>

          {/* Booking Details */}
          <div className="mb-4 text-left p-3 bg-gray-50 rounded-lg">
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.95rem",
                color: "#374151",
                marginBottom: "0.5rem",
              }}
            >
              <strong>Name:</strong> {name}
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.95rem",
                color: "#374151",
                marginBottom: "0.5rem",
              }}
            >
              <strong>Room:</strong> {room}
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.95rem",
                color: "#374151",
                marginBottom: "0.5rem",
              }}
            >
              <strong>Check-in:</strong> {new Date(checkIn).toLocaleDateString()}
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.95rem",
                color: "#374151",
                marginBottom: "0.5rem",
              }}
            >
              <strong>Check-out:</strong> {new Date(checkOut).toLocaleDateString()}
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#16a34a",
              }}
            >
              Amount: ₹{amount}
            </p>
          </div>

          {/* QR Code - Always Visible */}
          <div className="mb-4">
            <img
              src={qrCodeUrl}
              alt="Payment QR Code"
              style={{
                width: "256px",
                height: "256px",
                borderRadius: "0.75rem",
                border: "1px solid #f0f0f0",
              }}
            />
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.85rem",
                color: "#6b7280",
                marginTop: "0.75rem",
              }}
            >
              Scan the QR using GPay / PhonePe / Paytm to complete payment.
            </p>
          </div>

          <button
            onClick={handlePayNow}
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
            Pay Now via UPI
          </button>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.85rem",
              color: "#6b7280",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            After payment, our team will confirm your booking shortly
          </p>
        </div>
      </div>

      <FloatingButtons />
    </>
  );
};

export default PaymentPage;