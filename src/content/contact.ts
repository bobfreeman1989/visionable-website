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
  { Icon: MapPin, title: "Service Area", main: "Bay Area", sub: "East Bay, South Bay, Peninsula" },
  { Icon: Calendar, title: "Consultations", main: "Available 7 Days", sub: "Evening slots available" },
];

export const whyChooseItems = [
  "See your yard in 3D before we build",
  "One in-house crew, start to finish",
  "Licensed & insured · CSLB #1101860",
] as const;

export const serviceAreas: Record<string, string[]> = {
  "East Bay": ["Fremont", "Union City", "Newark", "Hayward", "San Leandro", "Castro Valley", "Dublin", "Pleasanton", "Livermore", "Danville", "San Ramon", "Walnut Creek", "Concord"],
  "South Bay": ["San Jose", "Milpitas", "Santa Clara", "Sunnyvale", "Cupertino", "Mountain View", "Los Altos", "Saratoga", "Los Gatos", "Campbell", "Morgan Hill", "Gilroy"],
  "Peninsula": ["Palo Alto", "Menlo Park", "Redwood City", "San Mateo", "Foster City", "Belmont", "San Carlos", "Burlingame", "Hillsborough", "Atherton", "Woodside"],
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

export const contactBudgetOptions = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
] as const;
