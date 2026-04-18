import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const initialFaqs = [
  {
    id: 1,
    question: "Do you accept walk-in bookings?",
    answer: "Yes, we accept walk-in bookings, especially for last-minute travelers and temple visitors.",
  },
  {
    id: 2,
    question: "Is early check-in available?",
    answer: "Early check-in is available based on room availability. Please contact us in advance.",
  },
  {
    id: 3,
    question: "Do you allow late check-in?",
    answer: "Yes, we allow late check-in for guests arriving at any time.",
  },
  {
    id: 4,
    question: "Do you provide breakfast?",
    answer: "Yes, we provide fresh breakfast options through our nearby partner restaurant.",
  },
  {
    id: 5,
    question: "Is breakfast included in room booking?",
    answer: "Breakfast availability depends on the booking plan. Please check at the time of booking.",
  },
];

const hiddenFaqs = [
  {
    id: 6,
    question: "Is there a restaurant in the hotel?",
    answer: "We have a partner restaurant located just a short walk from the hotel for guest convenience.",
  },
  {
    id: 7,
    question: "Do you provide free Wi-Fi?",
    answer: "Yes, we provide complimentary high-speed Wi-Fi for all guests.",
  },
  {
    id: 8,
    question: "Do you have 24-hour hot water?",
    answer: "Yes, 24-hour hot water is available in all rooms.",
  },
  {
    id: 9,
    question: "Do you have power backup?",
    answer: "Yes, we have generator backup to ensure uninterrupted comfort.",
  },
  {
    id: 10,
    question: "Is your hotel suitable for families?",
    answer: "Yes, UJ Pallazzio is ideal for families looking for a safe and peaceful stay in Tiruvannamalai.",
  },
  {
    id: 11,
    question: "Is your hotel suitable for business travelers?",
    answer: "Yes, our hotel is designed for business-class comfort with essential amenities.",
  },
  {
    id: 12,
    question: "What are your room rates?",
    answer: "Room rates vary based on date and availability. Contact us directly for best price offers.",
  },
  {
    id: 13,
    question: "Do you offer last-minute room availability?",
    answer: "Yes, we specialize in last-minute bookings for travelers arriving the same day.",
  },
  {
    id: 14,
    question: "Where is UJ Pallazzio located?",
    answer: "UJ Pallazzio is a peaceful business-class hotel located on Vellore Road, Tiruvannamalai, around 5 km from Arunachaleswarar Temple and close to the Girivalam path.",
  },
  {
    id: 15,
    question: "Is your hotel near Arunachaleswarar Temple?",
    answer: "Yes, our hotel is just 5 km from Arunachaleswarar Temple, offering a calm stay away from heavy temple traffic.",
  },
  {
    id: 16,
    question: "Is your hotel near Girivalam Road?",
    answer: "Yes, UJ Pallazzio is located near Girivalam Road, making it convenient for devotees visiting Tiruvannamalai.",
  },
  {
    id: 17,
    question: "Do you provide car parking?",
    answer: "Yes, we offer ample private car parking with CCTV surveillance for guest safety.",
  },
  {
    id: 18,
    question: "Is parking free at your hotel?",
    answer: "Yes, parking is completely free for all guests staying at UJ Pallazzio.",
  },
  {
    id: 19,
    question: "Do you have lift access?",
    answer: "Yes, our hotel has lift/elevator access for easy movement across all floors.",
  },
  {
    id: 20,
    question: "Do you have AC rooms in Tiruvannamalai?",
    answer: "Yes, all rooms at UJ Pallazzio are fully air-conditioned with additional fan support for comfort.",
  },
  {
    id: 21,
    question: "Are your rooms clean and hygienic?",
    answer: "Yes, we maintain high standards of cleanliness with spotless rooms and bathrooms.",
  },
  {
    id: 22,
    question: "Do you provide extra beds?",
    answer: "Yes, extra beds can be arranged based on availability for families and groups.",
  },
  {
    id: 23,
    question: "How can I book directly?",
    answer: "You can call us directly or contact via WhatsApp to get the best available rates and instant confirmation.",
  },
];

const AccordionItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      style={{ width: "100%" }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "0.75rem",
          border: isOpen ? "1px solid #bfdbfe" : "1px solid #e5e7eb",
          backgroundColor: "#ffffff",
          boxShadow: isOpen
            ? "0 4px 12px rgba(0, 0, 0, 0.08)"
            : "0 1px 4px rgba(0, 0, 0, 0.06)",
          transition: "all 0.3s ease",
        }}
      >
        <button
          onClick={onClick}
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.5rem",
            textAlign: "left",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#111827",
              paddingRight: "1rem",
              flex: 1,
            }}
          >
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ flexShrink: 0 }}
          >
            {isOpen ? (
              <Minus style={{ width: "20px", height: "20px", color: "#3b82f6" }} />
            ) : (
              <Plus style={{ width: "20px", height: "20px", color: "#9ca3af" }} />
            )}
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ padding: "0 1.5rem 1rem 1.5rem" }}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#4b5563",
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const allFaqs = showMore ? [...initialFaqs, ...hiddenFaqs] : initialFaqs;

  return (
    <section
      style={{
        position: "relative",
        padding: "5rem 1rem",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "768px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        {/* Badge */}
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
            FAQ
          </span>
        </div>
        </div>

        {/* Main Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "#111827",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              marginBottom: "0.5rem",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Frequently Asked Questions
          </h2>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#4b5563",
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
            }}
          >
            Everything You Need to Know!
          </h3>
        </div>

        {/* FAQ Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {allFaqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onClick={() => handleToggle(faq.id)}
              index={index}
            />
          ))}
        </div>

        {/* Explore Now Button */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowMore(!showMore)}
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "0.875rem",
              transition: "all 0.3s ease",
              boxShadow: showMore
                ? "0 4px 12px rgba(0, 0, 0, 0.15)"
                : "0 4px 12px rgba(255, 152, 0, 0.25)",
              backgroundColor: showMore ? "#1f2937" : "#ff9800",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {showMore ? "Show Less" : "Explore More"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;