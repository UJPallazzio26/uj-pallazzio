import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1.5px solid #e5e7eb",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  fontFamily: "'Poppins', sans-serif",
  color: "#1a1a1a",
  backgroundColor: "#ffffff",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "#374151",
  marginBottom: "0.4rem",
  fontFamily: "'Poppins', sans-serif",
};

const contactItems = [
  { icon: Phone,          label: "Phone / Hotline", value: "+91 93616 77996" },
  { icon: MessageCircle,  label: "WhatsApp / SMS",   value: "+91 93616 77996" },
  { icon: Mail,           label: "Email",            value: "ujpallazzio@gmail.com" },
];

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I have a query.\nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919361677996?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          /* Contact cards mobile responsiveness */
          #contact div[style*="display: flex"][style*="align-items: center"] {
            flex-wrap: nowrap !important;
          }
          
          #contact div[style*="display: flex"][style*="align-items: center"] > div:last-child {
            min-width: 0 !important;
            flex: 1 1 auto !important;
            width: 1px !important;
          }
          
          #contact div[style*="display: flex"][style*="align-items: center"] > div:last-child p:last-child {
            overflow-wrap: anywhere !important;
            word-break: break-word !important;
            white-space: normal !important;
            hyphens: auto !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
      <section
        id="contact"
        className="section-padding"
        style={{ backgroundColor: "#f8f9fa" }}
      >
      <div className="container" style={{ maxWidth: "1200px" }}>

        {/* Section Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#ff9800",
               padding: "0.375rem 1rem",
               backgroundColor: "#ff98001a",
               borderRadius: "9999px",

              marginBottom: "12px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            GET IN TOUCH
          </span>
          <h2
            className="luxury-heading"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Contact Us
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Two-column layout */}
        <div className="row g-4 align-items-stretch">

          {/* LEFT — Contact Form */}
          <motion.div
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "0.5rem",
                }}
              >
                Send us a message
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6B6B6B",
                  marginBottom: "1.75rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Have a question or need help? Feel free to contact us.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Row 1: First Name + Last Name */}
                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label style={labelStyle}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label style={labelStyle}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2: Email + Contact Number */}
                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label style={labelStyle}>Contact Number</label>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <select
                        style={{
                          ...inputStyle,
                          width: "80px",
                          flexShrink: 0,
                          paddingRight: "0.5rem",
                        }}
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        style={{ ...inputStyle, flex: 1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="mb-4">
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#ff9800",
                    color: "white",
                    fontWeight: 600,
                    padding: "0.875rem",
                    fontSize: "1rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    fontFamily: "'Poppins', sans-serif",
                    cursor: "pointer",
                  }}
                  whileHover={{ backgroundColor: "#f57c00", scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT — Contact Info Panel */}
          <motion.div
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "2rem",
                  lineHeight: 1.4,
                }}
              >
                Hi! We are always here to help you.
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                      borderRadius: "12px",
                      padding: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.11)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      style={{
                        minWidth: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(200, 169, 106, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon style={{ width: "22px", height: "22px", color: "#C8A96A" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.45)",
                          marginBottom: "0.25rem",
                          fontFamily: "'Poppins', sans-serif",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#ffffff",
                          marginBottom: 0,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
