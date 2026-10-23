import { Award, Droplets, Shield, type LucideIcon } from "lucide-react";

export type HeroBadge = {
  Icon: LucideIcon;
  text: string;
};

export const heroBadges: HeroBadge[] = [
  { Icon: Shield, text: "Licensed & insured · CSLB #1101860" },
  { Icon: Award, text: "Techo-Bloc certified Techo-Pro" },
  { Icon: Droplets, text: "NDS certified drainage contractor" },
];
