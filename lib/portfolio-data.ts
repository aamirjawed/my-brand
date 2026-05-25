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
    id: "zenith-ecommerce",
    client: "Zenith Apparel Group",
    title: "Luxury E-Commerce Headless Storefront",
    category: "development",
    categoryLabel: "Web Development",
    metrics: [
      { label: "Conversion Lift", value: "+185%" },
      { label: "Page Load Speed", value: "0.3s" },
      { label: "Mobile Sales Growth", value: "+310%" }
    ],
    description: "A state-of-the-art headless storefront using Next.js and Shopify API. Features instant transitions, custom visual product customizers, and an ultra-lightweight check-out process designed to eliminate client friction.",
    highlights: [
      "Dynamic 3D model product viewer",
      "Stripe & Apple Pay smooth integration",
      "Perfect 100/100 Lighthouse performance score"
    ],
    tech: ["Next.js", "React 19", "Tailwind CSS", "Shopify Storefront API"],
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://zenith-apparel-demo.vercel.app"
  },
  {
    id: "nova-dashboard",
    client: "Nova Analytics",
    title: "B2B Cloud Analytics Dashboard Design",
    category: "design",
    categoryLabel: "UI/UX & Design",
    metrics: [
      { label: "User Engagement", value: "+75%" },
      { label: "Bounce Rate", value: "-28%" },
      { label: "Task Completion Time", value: "-40%" }
    ],
    description: "An intuitive data visualization workspace designed for cloud infrastructure administrators. Focused on high-density information layouts, customizable widgets, sleek dark mode aesthetics, and WCAG accessibility standards.",
    highlights: [
      "Custom components design system library",
      "Interactive SVG drag-and-drop dashboard",
      "Fully responsive high-fidelity prototype"
    ],
    tech: ["Figma", "React Core", "Tailwind CSS", "Framer Motion"],
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://nova-dashboard-demo.vercel.app"
  },
  {
    id: "ascend-seo",
    client: "Ascend Fintech Group",
    title: "Enterprise AI SEO Optimization & Strategy",
    category: "seo",
    categoryLabel: "AI SEO & Growth",
    metrics: [
      { label: "Organic Traffic", value: "+420%" },
      { label: "Top-3 Keywords", value: "90+ Keywords" },
      { label: "Cost Per Lead", value: "-52%" }
    ],
    description: "Designed and executed a modern AI-driven search strategy for a competitive fintech workspace. Re-architected site hierarchy, deployed programmatic semantic schema markup, and automated custom content hub pipelines.",
    highlights: [
      "Programmatic SEO architecture deployment",
      "JSON-LD structured schema engine design",
      "AI-assisted local SEO search visibility multiplier"
    ],
    tech: ["Google Search Console", "Semrush API", "Next.js Static Pages"],
    imageSrc: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://ascend-fintech-demo.vercel.app"
  },
  {
    id: "hyperion-branding",
    client: "Hyperion Capital",
    title: "Fintech Rebrand & Dynamic Asset System",
    category: "design",
    categoryLabel: "UI/UX & Design",
    metrics: [
      { label: "Brand Recall", value: "+45%" },
      { label: "Design Output Speed", value: "+180%" },
      { label: "Asset Adoption", value: "100%" }
    ],
    description: "Developed a modern, trust-focused brand identity system for a leading investment firm. Created logos, tailored typography sets, a CSS-integrated color framework, and interactive vector social graphic libraries.",
    highlights: [
      "Modern minimalist logo system design",
      "Tailwind-integrated visual guidelines stylesheet",
      "Interactive SVG canvas social templates"
    ],
    tech: ["Adobe Illustrator", "Figma", "Tailwind CSS", "SVG Canvas"],
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://hyperion-branding-demo.vercel.app"
  },
  {
    id: "veloce-telemetry",
    client: "Veloce Devops Systems",
    title: "Real-Time DevOps Telemetry Dashboard",
    category: "development",
    categoryLabel: "Web Development",
    metrics: [
      { label: "Updates Frequency", value: "60 fps" },
      { label: "Initial Bundle Size", value: "<95 KB" },
      { label: "Server-side Render", value: "0.2s TTFB" }
    ],
    description: "A highly performant single page application for displaying real-time cluster workloads. Uses WebSocket endpoints, canvas-based memory layouts, and optimized React virtual list rendering.",
    highlights: [
      "Low latency real-time charts integration",
      "Extremely light bundle size optimizations",
      "Sub-second initial paint across global CDN locations"
    ],
    tech: ["React Core", "Vite", "Tailwind CSS", "WebSockets"],
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://veloce-telemetry-demo.vercel.app"
  }
];
