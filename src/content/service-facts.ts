import type { HeroFact } from "@/components/sections/PageHero";

/**
 * The four things a homeowner wants answered before they read anything else.
 *
 * Every value here is taken from the answers already published in
 * `src/lib/services.ts` — nothing is estimated. If a service's FAQ changes,
 * change the matching fact so the hero never promises what the page later
 * contradicts.
 */
export const serviceFacts: Record<string, HeroFact[]> = {
  "paver-installation": [
    { label: "Typical timeline", value: "3–5 days for a patio" },
    { label: "Pricing", value: "Fixed-price contract" },
    { label: "Lifespan", value: "25+ years" },
    { label: "Upkeep", value: "Reseal every 2–3 years" },
  ],
  "artificial-turf": [
    { label: "Typical timeline", value: "Days, not weeks" },
    { label: "Warranty", value: "15-year manufacturer" },
    { label: "Lifespan", value: "15–20 years" },
    { label: "Safe for", value: "Kids and pets" },
  ],
  "landscape-design": [
    { label: "Design timeline", value: "1–2 weeks" },
    { label: "You see first", value: "3D renderings (paid design phase)" },
    { label: "Team", value: "Design + build in-house" },
    { label: "Site visit", value: "Free" },
  ],
  hardscaping: [
    { label: "Pricing", value: "Fixed-price contract" },
    { label: "Changes", value: "Approved by you in writing" },
    { label: "Permits", value: "Coordinated as needed" },
    { label: "Scope", value: "Walls, patios, kitchens" },
  ],
  "pergola-installation": [
    { label: "Permits", value: "Coordinated as needed" },
    { label: "Fits", value: "New or existing patios" },
    { label: "Common add-ons", value: "Lighting, screens, decking" },
    { label: "Consultation", value: "Free" },
  ],
  "fence-and-gate": [
    { label: "Scope", value: "Install, repair, custom gates" },
    { label: "Matching", value: "Matched to existing fence" },
    { label: "Shared fence lines", value: "Neighbor coordination" },
    { label: "HOA rules", value: "Flagged before work" },
  ],
  "irrigation-drainage": [
    { label: "Best timed", value: "Before pavers or turf" },
    { label: "Systems", value: "Drip, zoning, controllers" },
    { label: "Fixes", value: "Standing water, erosion" },
    { label: "Consultation", value: "Free" },
  ],
  "outdoor-lighting": [
    { label: "Typical timeline", value: "1–2 days" },
    { label: "Energy use", value: "Far less than halogen" },
    { label: "Control", value: "Zones and schedules by phone" },
    { label: "Fixtures", value: "LED, low-voltage" },
  ],
  "retaining-walls": [
    { label: "Built for", value: "Slopes and terraces" },
    { label: "Permits", value: "Coordinated as needed" },
    { label: "Materials", value: "Block, stone, concrete, timber" },
    { label: "Engineering", value: "Licensed engineer over 4 ft" },
  ],
  "complete-backyard-remodel": [
    { label: "Typical timeline", value: "3–6 weeks" },
    { label: "Pricing", value: "Fixed-price contract" },
    { label: "Live at home", value: "Yes, throughout" },
    { label: "Updates", value: "Daily" },
  ],
};
