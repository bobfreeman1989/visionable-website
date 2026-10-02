import { Award, Droplets, Shield, type LucideIcon } from "lucide-react";

export type HeroBadge = {
  Icon: LucideIcon;
  text: string;
};

export const heroBadges: HeroBadge[] = [
  { Icon: Shield, text: "Licensed & insured · 15+ years in the Bay Area" },
  { Icon: Award, text: "Techo-Bloc certified Techo-Pro" },
  { Icon: Droplets, text: "NDS certified drainage contractor" },
];
