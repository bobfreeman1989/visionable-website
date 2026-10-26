import {
  Droplets,
  Fence,
  Home,
  Layers,
  Lightbulb,
  PenTool,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  tag?: string;
  link?: string;
  /** Lead photo for the home Services stage; must be a `src` from gallery.ts `photos`. */
  photo: string;
};

export const featuredServices: ServiceItem[] = [
  {
    Icon: Home,
    title: "Complete Backyard Remodel",
    desc: "The whole yard, designed once and built by one crew: patio, lawn, shade, lighting, planting and drainage working together, on one fixed-price contract.",
    link: "/services/complete-backyard-remodel",
    photo: "/photos/services/pergola05.webp",
    tag: "Design + Build",
  },
  {
    Icon: PenTool,
    title: "Outdoor Living Design",
    desc: "Walk through your future backyard in 3D before we break ground. We design around how you live — where you'll cook, where the kids will play, where you'll unwind after work.",
    link: "/services/landscape-design",
    photo: "/photos/services/design01.webp",
    tag: "Where Every Vision Starts",
  },
];

export const secondaryServices: ServiceItem[] = [
  {
    Icon: Layers,
    title: "Patios & Outdoor Rooms",
    desc: "The foundation of every great outdoor space. Premium stone and pavers that turn bare dirt into your favorite room — no walls required.",
    link: "/services/paver-installation",
    photo: "/photos/services/patios06.webp",
  },
  {
    Icon: Lightbulb,
    title: "Outdoor Lighting",
    desc: "Extend your evenings. Ambient lighting that makes your vision work after dark.",
    link: "/services/outdoor-lighting",
    photo: "/photos/services/bench03.webp",
  },
  {
    Icon: Droplets,
    title: "Irrigation & Drainage",
    desc: "Smart water management so everything stays green without the guilt.",
    link: "/services/irrigation-drainage",
    photo: "/photos/services/patios04.webp",
  },
  {
    Icon: Fence,
    title: "Fences, Pergolas & Shade",
    desc: "Privacy, shade, and structure that frame your outdoor room.",
    link: "/services/pergola-installation",
    photo: "/photos/services/pergola03.webp",
  },
];
