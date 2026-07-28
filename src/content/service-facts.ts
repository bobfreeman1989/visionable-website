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
    { label: "Installed cost", value: "$15–$35 / sq ft" },
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
    { label: "You see first", value: "3D renderings" },
    { label: "Team", value: "Design + build in-house" },
    { label: "Consultation", value: "Free" },
  ],
  hardscaping: [
    { label: "Fire pits from", value: "$3K–$5K" },
    { label: "Outdoor kitchens", value: "$15K–$40K+" },
    { label: "Permits", value: "Handled by us" },
    { label: "Scope", value: "Walls, patios, kitchens" },
  ],
  "pergola-installation": [
    { label: "Permits", value: "Reviewed + coordinated" },
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
    { label: "Energy use", value: "Up to 80% less than halogen" },
    { label: "Control", value: "Zones and schedules by phone" },
    { label: "Fixture life", value: "10–15× halogen" },
  ],
  "retaining-walls": [
    { label: "Lifespan", value: "50+ years" },
    { label: "Permits", value: "Over 4 ft, handled by us" },
    { label: "Materials", value: "Block, stone, concrete, timber" },
    { label: "Engineering", value: "Included" },
  ],
  "complete-backyard-remodel": [
    { label: "Typical timeline", value: "3–6 weeks" },
    { label: "Typical range", value: "$20K–$60K+" },
    { label: "Live at home", value: "Yes, throughout" },
    { label: "Updates", value: "Daily" },
  ],
};
