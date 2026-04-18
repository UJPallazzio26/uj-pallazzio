import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// Manual image imports from assets gallery section folder
import img1 from '../assets/gallery section/img1.JPG';
import img2 from '../assets/gallery section/img2.jpg';
import img3 from '../assets/gallery section/img3.jpeg';
import img4 from '../assets/gallery section/img4.jpg';
import img5 from '../assets/gallery section/img5.jpeg';
import img6 from '../assets/gallery section/img6.jpeg';

// Gallery images array
const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const GallerySection = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const images = galleryImages.map((src, index) => ({
        id: index + 1,
        src: src,
        category: "all",
        alt: `Gallery Image ${index + 1}`
      }));

      setGalleryItems(images);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  const categories = [
    { id: "all", label: "All" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredItems[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, filteredItems]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  if (isLoading) {
    return (
      <section
        id="gallery"
        className="section-padding"
        style={{ backgroundColor: "#ffffff", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            style={{
              width: "48px",
              height: "48px",
              border: "4px solid rgba(255, 152, 0, 0.2)",
              borderTop: "4px solid #ff9800",
              borderRadius: "50%",
              margin: "0 auto",
            }}
          />
          <p style={{ marginTop: "1rem", color: "#6b7280", fontFamily: "'Poppins', sans-serif" }}>Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="gallery"
      className="section-padding"
      style={{ backgroundColor: "#ffffff" }}
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
            Gallery
          </span>
        </div>

        {/* Main Heading */}
        <motion.h2
          className="luxury-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Spaces
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="gold-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1.125rem",
            color: "#6b7280",
            marginTop: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          Take a look at our rooms, amenities, and surroundings
        </motion.p>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "all 0.3s ease",
                backgroundColor:
                  activeCategory === category.id ? "#ff9800" : "#f3f4f6",
                color:
                  activeCategory === category.id ? "#ffffff" : "#6b7280",
              }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="col-12 col-sm-6 col-lg-4"
                variants={itemVariants}
                layout
              >
                <motion.div
                  style={{
                    position: "relative",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                    cursor: "pointer",
                    aspectRatio: "4/3",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease-in-out",
                    }}
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <ZoomIn style={{ width: "2rem", height: "2rem", color: "#ffffff" }} />
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      View
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ padding: "3rem", textAlign: "center", color: "#6b7280" }}
          >
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>
              No images found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.9 }}
            >
              <X style={{ width: "24px", height: "24px", color: "#ffffff" }} />
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              style={{
                position: "absolute",
                left: "2rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft style={{ width: "24px", height: "24px", color: "#ffffff" }} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              style={{
                position: "absolute",
                right: "2rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight style={{ width: "24px", height: "24px", color: "#ffffff" }} />
            </motion.button>

            {/* Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90%",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "0.5rem",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              }}
            />

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                color: "#ffffff",
                fontSize: "0.875rem",
                fontFamily: "'Poppins', sans-serif",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
              }}
            >
              {currentIndex + 1} / {filteredItems.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;