import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { handleCallClick } from "@/lib/callHandler";

const FloatingButtons = () => {
  const handleCall = () => {
    window.dispatchEvent(new CustomEvent("track", { detail: "floating_call_click" }));
    handleCallClick();
  };

  const handleWhatsApp = () => {
    window.dispatchEvent(new CustomEvent("track", { detail: "floating_whatsapp_click" }));
    window.open("https://wa.me/919361677996?text=Hi%2C%20I%E2%80%99d%20like%20to%20inquire%20about%20room%20availability%20at%20UJ%20Pallazzio.", "_blank");
  };

  return (
    <>
      <style>{`
        /* Desktop floating buttons */
        .floating-buttons-container {
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 999;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .floating-btn-circular {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          border: none;
          color: white;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        
        .floating-btn-circular.call {
          background-color: #ff9800;
          box-shadow: 0 4px 15px rgba(255, 152, 0, 0.4);
        }
        
        .floating-btn-circular.call:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(255, 152, 0, 0.6);
        }
        
        .floating-btn-circular.whatsapp {
          background-color: #25D366;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        }
        
        .floating-btn-circular.whatsapp:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }
        
        /* Mobile sticky bottom bar */
        .floating-buttons-sticky {
          display: none;
        }
        
        @media (max-width: 768px) {
          /* Hide desktop floating buttons on mobile */
          .floating-buttons-container {
            display: none !important;
          }
          
          /* Show mobile sticky bar */
          .floating-buttons-sticky {
            display: flex !important;
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            background: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(10px) !important;
            box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08) !important;
            z-index: 1000 !important;
            gap: 12px !important;
            padding: 10px 16px !important;
            height: 60px !important;
          }
          
          .sticky-btn {
            flex: 1 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 6px !important;
            height: 40px !important;
            border: none !important;
            border-radius: 10px !important;
            font-weight: 600 !important;
            font-size: 0.8rem !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
            text-transform: uppercase !important;
            letter-spacing: 0.05em !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
          }
          
          .sticky-btn.call {
            background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%) !important;
            color: white !important;
            box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3) !important;
          }
          
          .sticky-btn.call:active {
            transform: scale(0.98) !important;
          }
          
          .sticky-btn.whatsapp {
            background: linear-gradient(135deg, #25D366 0%, #1fb954 100%) !important;
            color: white !important;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3) !important;
          }
          
          .sticky-btn.whatsapp:active {
            transform: scale(0.98) !important;
          }
          
          .sticky-btn svg {
            width: 1.25rem !important;
            height: 1.25rem !important;
          }
        }
      `}</style>
      
      {/* Desktop Floating Buttons */}
      <div className="floating-buttons-container position-fixed">
        <motion.button
          onClick={handleCall}
          className="floating-btn-circular call btn p-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Call us"
        >
          <Phone style={{ width: "1.5rem", height: "1.5rem" }} />
        </motion.button>
        
        <motion.button
          onClick={handleWhatsApp}
          className="floating-btn-circular whatsapp btn p-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle style={{ width: "1.5rem", height: "1.5rem" }} />
        </motion.button>
      </div>
      
      {/* Mobile Sticky Bottom Bar */}
      <div className="floating-buttons-sticky">
        <motion.button
          onClick={handleCall}
          className="sticky-btn call"
          whileTap={{ scale: 0.98 }}
          aria-label="Call us"
        >
          <Phone size={20} />
          <span>Call Now</span>
        </motion.button>
        
        <motion.button
          onClick={handleWhatsApp}
          className="sticky-btn whatsapp"
          whileTap={{ scale: 0.98 }}
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </motion.button>
      </div>
    </>
  );
};

export default FloatingButtons;