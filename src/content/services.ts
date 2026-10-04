import {
  Droplets,
  Fence,
  Layers,
  Lightbulb,
  PenTool,
  TreePine,
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
    Icon: PenTool,
    title: "Outdoor Living Design",
    desc: "Walk through your future backyard in 3D before we break ground. We design around how you live — where you'll cook, where the kids will play, where you'll unwind after work.",
    link: "/services/landscape-design",
    photo: "/photos/services/design01.webp",
    tag: "Where Every Vision Starts",
  },
  {
    Icon: Layers,
    title: "Patios & Outdoor Rooms",
    desc: "The foundation of every great outdoor space. Premium stone and pavers that turn bare dirt into your favorite room — no walls required.",
    link: "/services/paver-installation",
    photo: "/photos/services/patios06.webp",
    tag: "Most Requested",
  },
];

export const secondaryServices: ServiceItem[] = [
  {
    Icon: TreePine,
    title: "Lawns & Play Areas",
    desc: "Soft, green, year-round turf where kids and dogs go barefoot.",
    link: "/services/artificial-turf",
    photo: "/photos/services/turf05.webp",
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
    photo: "/photos/services/pergola06.webp",
  },
];
