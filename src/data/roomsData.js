import {
  Bed,
  Thermometer,
  Wifi,
  Tv,
  Droplets,
  BathIcon,
  MountainIcon,
  ShieldCheck,
  Sparkles,
  Sofa,
  Coffee,
  Gem,
} from "lucide-react";
import img1 from "../assets/business/img1.png";
import img2 from "../assets/business/img2.jpeg";
import img3 from "../assets/business/img3.png";
import img4 from "../assets/business/img6.JPEG";
import img5 from "../assets/business/img5.JPEG";
import st1 from "../assets/standard/st1.jpeg";
import st2 from "../assets/standard/st2.jpeg";
import st3 from "../assets/standard/st3.jpeg";
import lu1 from "../assets/luxury/lu1.jpeg";
import lu2 from "../assets/luxury/lu2.JPG";
import lu3 from "../assets/luxury/lu3.png";

export const roomsData = [
  {
    id: "business-class",
    name: "Business Comfort Room",
    images: [img1, img2, img3, img4,],
    occupancy: "2 Adults",
    price: "₹1,950",
    bedType: "Queen Size Bed",
    alt: "UJ Pallazzio Business Class with queenbed and modern amenities",
    description:
    " Perfect for business travelers and couples seeking a clean, peaceful stay near Tiruvannamalai Temple with easy access and no traffic hassle.Our Business Class rooms are designed for travelers seeking a blend of comfort and functionality. Featuring a queen-size bed, modern amenities, and a serene ambiance, these rooms provide the perfect retreat after a day of exploring Tiruvannamalai. Enjoy a restful stay with all the essentials for a comfortable and memorable experience.",
    amenities: [
      { icon: Bed, label: "Queen Size Bed" },
      { icon: Thermometer, label: "Centralized AC" },
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Droplets, label: "24hr Hot Water" },
      { icon: BathIcon, label: "Private Bathroom" },
      { icon: ShieldCheck, label: "Daily Housekeeping" },
      { icon: Sparkles, label: "Fresh Linen" },
    ],
    highlights: [
      "Spacious Interior",
      "Clean and Hygienic",
      "24/7 Water Supply",
      "Peaceful Environment",
      "Family Friendly",
      "Budget Friendly",
    ],
  },
  {
    id: "standard-class",
    name: "Premium Comfort Room",
    images: [st1, st2, st3 ,img5],
    occupancy: "2 Adults + 1 Child",
    price: "₹2,250",
    bedType: "King Size Bed",
    alt: "UJ Pallazzio Standard Class with living area and king bed",
    description:
      "Spacious and comfortable room ideal for families visiting Girivalam Path and Arunachaleswarar Temple, offering a calm stay away from crowd and traffic.Our Standard Class rooms blend value with comfort, offering a spacious layout perfect for small families. The room features a king-size bed with premium linens, a cozy seating area, and modern amenities — making your stay at UJ Pallazzio both comfortable and memorable. Conveniently located just minutes from Tiruvannamalai's iconic landmarks.",
    amenities: [
      { icon: Bed, label: "King Size Bed" },
      { icon: Sofa, label: "More comfort" },
      { icon: Thermometer, label: "Centralized AC" },
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Droplets, label: "24hr Hot Water" },
      { icon: BathIcon, label: "Private Bathroom" },
      { icon: ShieldCheck, label: "Daily Housekeeping" },
      // { icon: Sparkles, label: "Fresh Linen" },
    ],
    highlights: [
      "Spacious Interior",
      "Clean and Hygienic",
      "24/7 Water Supply",
      "Peaceful Environment",
      "Family Friendly",
      "Budget Friendly",
    ],
  },
  {
    id: "luxury-class",
    name: "Executive Luxury Room",
    images: [lu1, lu2, lu3],
    occupancy: "4 Adults",
    price: "₹2,750",
    bedType: "Super King Size Bed",
    alt: "UJ Pallazzio Luxury Class with living area and king bed",
    description:
      "Enjoy a premium, spacious stay designed for families and groups seeking comfort, privacy, and peaceful surroundings near Tiruvannamalai Temple.Indulge in the ultimate luxury experience with our Luxury Class rooms, crafted for discerning guests who demand the finest. Featuring expansive living spaces, premium bedding, stunning hill views, and exclusive amenities, this suite is perfect for groups or families seeking a lavish retreat in Tiruvannamalai. Every detail is curated to ensure an unforgettable stay.",
    amenities: [
      { icon: Bed, label: "Super King Size Bed" },
      // { icon: Sofa, label: "Private Living Room" },
      { icon: MountainIcon, label: "Hill View" },
      { icon: Thermometer, label: "Centralized AC" },
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Droplets, label: "24hr Hot Water" },
      { icon: BathIcon, label: "Private Bathroom" },
      // { icon: Coffee, label: "Tea / Coffee Maker" },
      { icon: Gem, label: "Premium Toiletries" },
      // { icon: ShieldCheck, label: "Daily Housekeeping" },
      // { icon: Sparkles, label: "Fresh Linen" },
    ],
    highlights: [
      "Spacious Interior",
      "Clean and Hygienic",
      "24/7 Water Supply",
      "Peaceful Environment",
      "Family Friendly",
      "Budget Friendly",
    ],
  },
];
