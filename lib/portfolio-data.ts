import { Layers, Code, Paintbrush, TrendingUp, Calendar, LucideIcon } from "lucide-react";

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  client: string;
  title: string;
  category: "development" | "design" | "seo" | "events";
  categoryLabel: string;
  metrics: Metric[];
  description: string;
  highlights: string[];
  tech: string[];
  imageSrc: string;
  liveLink: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All Work", icon: Layers },
  { id: "development", label: "Web Development", icon: Code },
  { id: "design", label: "UI/UX & Design", icon: Paintbrush },
  { id: "seo", label: "AI SEO & Growth", icon: TrendingUp },
  { id: "events", label: "Event Management", icon: Calendar }
];

export const PROJECTS: Project[] = [
  {
    id: "ticket-booking-platform",
    client: "ShowPass Events",
    title: "Dynamic Event Ticket Booking & Gateway Platform",
    category: "development",
    categoryLabel: "Web Development",
    metrics: [
      { label: "Bookings Handled", value: "25,000+" },
      { label: "Payment Success", value: "99.9%" },
      { label: "Email Dispatch", value: "<1.2s" }
    ],
    description: "A secure, modern ticket booking platform featuring automated Razorpay payment gateway integration. Automatically triggers ticket generation pipelines and dispatches transactional confirmation emails to buyers upon successful booking validation.",
    highlights: [
      "Secured Razorpay integration with automated payment webhook verification",
      "Instant email dispatch using custom server transactional mailing templates",
      "Robust Express.js backend API with clustered MongoDB database storage"
    ],
    tech: ["Next.js", "Express.js", "Razorpay", "MongoDB"],
    imageSrc: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://fashlyner.live",
    featured: true
  },
  {
    id: "eventflow-platform",
    client: "EventFlow Systems",
    title: "EventFlow - Guest Check-in & QR Dashboard",
    category: "events",
    categoryLabel: "Event Management",
    metrics: [
      { label: "Check-in Speed", value: "<1.0s / guest" },
      { label: "Pre-Registrations", value: "10,000+" },
      { label: "Entry Accuracy", value: "100%" }
    ],
    description: "A comprehensive event attendee management platform supporting pre-registration, real-time onsite check-ins, and a custom user management dashboard. Generates and emails unique security QR codes to guests, allowing instantaneous scan-to-enter access at venues.",
    highlights: [
      "Interactive pre-registration forms with automated email delivery",
      "Dynamic unique QR code generator and scanning gateway",
      "Comprehensive administrative dashboard for live guest tracking & check-in management"
    ],
    tech: ["Next.js", "Express.js", "MongoDB", "QR Engine", "Nodemailer"],
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://eventflow-iiio.vercel.app/"
  }
];
