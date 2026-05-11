import {
  CheckCircle,
  Palette,
  Shield,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export type HeroBadge = {
  Icon: LucideIcon;
  text: string;
};

export const heroBadges: HeroBadge[] = [
  { Icon: Shield, text: "Licensed & Insured" },
  { Icon: Trophy, text: "15+ Years of Excellence" },
  { Icon: CheckCircle, text: "100% Satisfaction Guarantee" },
  { Icon: Palette, text: "Free Design Consultation" },
];
