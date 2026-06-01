import { Shield, type LucideIcon } from "lucide-react";

export type HeroBadge = {
  Icon: LucideIcon;
  text: string;
};

export const heroBadges: HeroBadge[] = [
  { Icon: Shield, text: "Licensed & insured · 15+ years in the Bay Area" },
];
