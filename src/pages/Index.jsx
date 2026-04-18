import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBenefits from "@/components/TrustBenefits";
import AboutUsSection from "@/components/AboutUsSection";
import LocationSection from "@/components/LocationSection";
import RoomSection from "@/components/RoomSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "UJ Pallazzio",
  description: "Business Class Luxury Stay in Tiruvannamalai near Arunachaleswarar Temple",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Girivalam Road",
    addressLocality: "Tiruvannamalai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Centralized AC" },
    { "@type": "LocationFeatureSpecification", name: "Complimentary Breakfast" },
    { "@type": "LocationFeatureSpecification", name: "24 Hour Check-in" },
    { "@type": "LocationFeatureSpecification", name: "Free Parking" },
    { "@type": "LocationFeatureSpecification", name: "WiFi" },
  ],
  checkinTime: "00:00",
  checkoutTime: "11:00",
  starRating: { "@type": "Rating", ratingValue: "4.5" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you provide 24 hour check-in?", acceptedAnswer: { "@type": "Answer", text: "Yes, our front desk operates 24 hours." } },
    { "@type": "Question", name: "Is breakfast complimentary?", acceptedAnswer: { "@type": "Answer", text: "Yes, breakfast is included for direct bookings." } },
    { "@type": "Question", name: "Is parking available?", acceptedAnswer: { "@type": "Answer", text: "Yes, CCTV monitored parking available." } },
    { "@type": "Question", name: "How far is the hotel from the temple?", acceptedAnswer: { "@type": "Answer", text: "5 KM from Arunachaleswarar Temple." } },
  ],
};

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based scrolling
    if (location.hash) {
      const id = location.hash.slice(1); // Remove the '#' from the hash
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
    <Helmet>
      <title>UJ Pallazzio – Business Class Luxury Hotel in Tiruvannamalai</title>
      <meta name="description" content="UJ Pallazzio offers premium business class luxury stay in Tiruvannamalai near Arunachaleswarar Temple. AC rooms, complimentary breakfast, 24-hour check-in. Book direct for best rates." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://ujpallazzio.com" />
      <script type="application/ld+json">{JSON.stringify(hotelSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar />
    <HeroSection />
    <AboutUsSection />
    <div id="amenities">
      <AmenitiesSection />
    </div>
    <div id="rooms">
      <RoomSection />
    </div>
    <TrustBenefits />
    <div id="gallery">
      <GallerySection />
    </div>
    <div id="reviews">
      <ReviewsSection />
    </div>
    <div id="location">
      <LocationSection />
    </div>
    <div id="contact">
      <ContactUs />
    </div>
    <div id="faq">
      <FAQSection />
    </div>
    <CTASection />
    <FooterSection />
    <FloatingButtons />
  </>
  );
};

export default Index;