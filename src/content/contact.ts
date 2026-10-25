import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

export type ContactInfoItem = {
  Icon: LucideIcon;
  title: string;
  main: string;
  sub: string;
};

export const contactInfo: ContactInfoItem[] = [
  { Icon: Phone, title: "Call Us", main: "(510) 755-5616", sub: "Mon-Fri, 7:30 AM - 5:00 PM" },
  { Icon: Mail, title: "Email", main: "info@visionable\nlandscaping.com", sub: "We reply within 24 hours" },
  { Icon: MapPin, title: "Service Area", main: "Bay Area", sub: "Based in Fremont" },
  { Icon: Calendar, title: "Site Visits", main: "7 days a week", sub: "Evenings by appointment" },
];

export const whyChooseItems = [
  "See your yard in 3D in the design phase, before we build",
  "Our own crew, start to finish",
  "Licensed & insured · CSLB #1101860",
  "Techo-Bloc certified Techo-Pro contractor",
  "NDS certified professional drainage contractor",
] as const;

export const serviceAreas: Record<string, string[]> = {
  "Bay Area": ["San Jose", "Santa Clara", "Sunnyvale", "Cupertino", "Mountain View", "Los Altos", "Saratoga", "Los Gatos", "Palo Alto", "Atherton", "San Carlos", "San Mateo"],
  "Home base": ["Fremont"],
};

export const contactServiceOptions = [
  "Complete Backyard Redesign",
  "Hardscaping / Pavers",
  "Artificial Turf",
  "Pergola / Shade Structures",
  "Fencing & Gates",
  "Outdoor Lighting",
  "Irrigation / Drainage",
  "Landscape Design Only",
  "Not sure yet",
] as const;

export const contactSourceOptions = [
  "Google Maps",
  "Google Search",
  "Houzz",
  "Yelp",
  "Nextdoor",
  "ChatGPT or other AI",
  "Referral",
  "Techo-Bloc",
  "Other",
] as const;

export const contactBudgetOptions = [
  "Under $30,000",
  "$30,000–$60,000",
  "$60,000–$100,000",
  "$100,000+",
  "Not sure yet",
] as const;
