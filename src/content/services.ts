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
};

export const featuredServices: ServiceItem[] = [
  {
    Icon: PenTool,
    title: "Outdoor Living Design",
    desc: "Walk through your future backyard in 3D before we break ground. We design around how you live — where you'll cook, where the kids will play, where you'll unwind after work.",
    tag: "Where Every Vision Starts",
  },
  {
    Icon: Layers,
    title: "Patios & Outdoor Rooms",
    desc: "The foundation of every great outdoor space. Premium stone and pavers that turn bare dirt into your favorite room — no walls required.",
    link: "/blog/how-to-choose-pavers",
    tag: "Most Requested",
  },
];

export const secondaryServices: ServiceItem[] = [
  {
    Icon: TreePine,
    title: "Lawns & Play Areas",
    desc: "Soft, green, year-round turf where kids and dogs go barefoot.",
    link: "/blog/artificial-turf-pros-cons",
  },
  {
    Icon: Lightbulb,
    title: "Outdoor Lighting",
    desc: "Extend your evenings. Ambient lighting that makes your vision work after dark.",
    link: "/blog/outdoor-lighting-ideas",
  },
  {
    Icon: Droplets,
    title: "Irrigation & Drainage",
    desc: "Smart water management so everything stays green without the guilt.",
  },
  {
    Icon: Fence,
    title: "Fences, Pergolas & Shade",
    desc: "Privacy, shade, and structure that frame your outdoor room.",
  },
];
