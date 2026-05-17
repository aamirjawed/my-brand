export interface NavLink {
  label: string;
  href: string;
  megaMenu?: MegaMenuCategory[];
}

export interface MegaMenuCategory {
  title: string;
  links: { label: string; href: string }[];
}

export const navigationData: NavLink[] = [
  {
    label: "Development",
    href: "/development",
    megaMenu: [
      {
        title: "WORDPRESS",
        links: [
          { label: "WordPress Development", href: "/development/wordpress" },
          { label: "WordPress Speed Optimization", href: "/development/wordpress-speed" },
          { label: "PSD to WordPress", href: "/development/psd-to-wordpress" },
          { label: "WordPress Support & Maintenance", href: "/development/wordpress-support" },
          { label: "WordPress Customization Service", href: "/development/wordpress-customization" },
        ],
      },
      {
        title: "SHOPIFY",
        links: [
          { label: "Shopify Development", href: "/development/shopify" },
          { label: "Shopify Web Design", href: "/development/shopify-design" },
          { label: "Shopify Marketing", href: "/development/shopify-marketing" },
          { label: "PSD to Shopify", href: "/development/psd-to-shopify" },
          { label: "Shopify Store Migration", href: "/development/shopify-migration" },
        ],
      },
      {
        title: "WEBSITE DEVELOPMENT",
        links: [
          { label: "Landing Page", href: "/landing-page" },
          { label: "Static Website", href: "/static-website" },
          { label: "Custom Website", href: "/custom-website" },
          { label: "Single Page Application", href: "/spa" },
          { label: "Corporate Website", href: "/corporate-website" },
        ],
      },
      {
        title: "APP DEVELOPMENT",
        links: [
          { label: "iOS App Development", href: "/development/ios" },
          { label: "Android App Development", href: "/development/android" },
          { label: "Flutter App Development", href: "/development/flutter" },
          { label: "React Native App Development", href: "/development/react-native" },
          { label: "Custom App Development", href: "/development/custom-app" },
        ],
      },
    ],
  },
  {
    label: "AI SEO",
    href: "/ai-seo",
  },
  {
    label: "Event Management",
    href: "/event-management",
    megaMenu: [
      {
        title: "EVENT SERVICES",
        links: [
          { label: "Corporate Events", href: "/events/corporate" },
          { label: "Weddings", href: "/events/weddings" },
          { label: "Conferences", href: "/events/conferences" },
          { label: "Product Launches", href: "/events/product-launches" },
          { label: "Gala Dinners", href: "/events/gala-dinners" },
        ],
      },
      {
        title: "PLANNING",
        links: [
          { label: "Venue Selection", href: "/events/venue" },
          { label: "Catering", href: "/events/catering" },
          { label: "Entertainment", href: "/events/entertainment" },
          { label: "Decor & Theme", href: "/events/decor" },
          { label: "Photography", href: "/events/photography" },
        ],
      },
    ],
  },
  {
    label: "Design",
    href: "/design",
    megaMenu: [
      {
        title: "CREATIVE",
        links: [
          { label: "Branding & Logo", href: "/design/branding" },
          { label: "UI/UX Design", href: "/design/ui-ux" },
          { label: "Social Graphics", href: "/design/social" },
        ],
      },
    ],
  },
  {
    label: "Content Creation",
    href: "/content-creation",
    megaMenu: [
      {
        title: "CREATION",
        links: [
          { label: "Video Production", href: "/content/video" },
          { label: "Copywriting", href: "/content/copywriting" },
          { label: "Social Media", href: "/content/social" },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
