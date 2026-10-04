/**
 * Catalogue of real project photography.
 *
 * Every entry below was checked against the actual image before being tagged,
 * so `tags` can be trusted to select imagery for a service or area page. Adding
 * a photo means looking at it and describing what is genuinely in frame —
 * `alt` text is what a screen reader gets and what Google indexes, and the
 * imagery is the brand's main proof, so a wrong tag is worse than no tag.
 */

export type PhotoTag =
  | "pavers"
  | "turf"
  | "pergola"
  | "lighting"
  | "hardscape"
  | "retaining-wall"
  | "fence"
  | "drainage"
  | "design"
  | "outdoor-kitchen"
  | "play"
  | "full-remodel";

export type Photo = {
  src: string;
  alt: string;
  /** Short human caption shown under or over the image. */
  caption: string;
  tags: PhotoTag[];
};

/** Curated hero-grade photography, shot for the site. */
export const photos: Photo[] = [
  {
    src: "/photos/services/patios01.webp",
    alt: "Large-format grey paver patio with a white pergola and outdoor sectional",
    caption: "Large-format paver patio with pergola and lounge seating",
    tags: ["pavers", "pergola", "hardscape", "full-remodel"],
  },
  {
    src: "/photos/services/patios02.webp",
    alt: "Grey paver patio bordered by a raised planter bed and a wood fence",
    caption: "Paver patio with raised planting beds",
    tags: ["pavers", "hardscape", "design"],
  },
  {
    src: "/photos/services/turf01.webp",
    alt: "Artificial turf putting green with practice cups set into the lawn",
    caption: "Artificial turf putting green",
    tags: ["turf", "play"],
  },
  {
    src: "/photos/services/turf02.webp",
    alt: "Side yard with artificial turf, redwood raised planters and a paver walkway",
    caption: "Turf lawn with redwood raised planters",
    tags: ["turf", "design", "pavers"],
  },
  {
    src: "/photos/services/pergola01.webp",
    alt: "Modern dark-framed pergola over a paver patio beside an artificial turf lawn",
    caption: "Modern pergola over pavers, opening onto turf",
    tags: ["pergola", "pavers", "turf"],
  },
  {
    src: "/photos/services/pergola02.webp",
    alt: "Dark louvered pergola casting striped shadows across a paver patio",
    caption: "Louvered pergola with adjustable shade",
    tags: ["pergola", "pavers"],
  },
  {
    src: "/photos/services/lighting01.webp",
    alt: "Backyard at dusk with a lit built-in seat wall beside an artificial turf lawn",
    caption: "Integrated seat-wall lighting at dusk",
    tags: ["lighting", "hardscape", "turf"],
  },
  {
    src: "/photos/services/lighting02.webp",
    alt: "Curved concrete patio with a lit low retaining wall and gravel border",
    caption: "Curved patio with lit retaining wall",
    tags: ["lighting", "retaining-wall", "hardscape", "drainage"],
  },
  {
    src: "/photos/services/bench01.webp",
    alt: "Turf lawn with concrete stepping pads leading to a built-in bench along the fence",
    caption: "Built-in bench with stepping pads across turf",
    tags: ["hardscape", "turf", "design"],
  },
  {
    src: "/photos/services/bench02.webp",
    alt: "Flagstone patio with a floating cantilevered concrete bench",
    caption: "Flagstone patio with a floating concrete bench",
    tags: ["hardscape", "design"],
  },
  {
    src: "/photos/services/fountain01.webp",
    alt: "Stacked stone water feature set into a gravel dry creek bed",
    caption: "Stone water feature and dry creek bed",
    tags: ["hardscape", "drainage", "design"],
  },
  {
    src: "/photos/services/fountain02.webp",
    alt: "Stone retaining wall with a tiered fountain and planting along the top",
    caption: "Stone retaining wall with tiered fountain",
    tags: ["retaining-wall", "hardscape"],
  },
  // --- Batch added 2026-10-02 from the "service" photo selection. ---
  {
    src: "/photos/services/bench03.webp",
    alt: "Curved white seat wall with built-in lights around an artificial turf lawn and stamped concrete patio at dusk",
    caption: "Lit seat wall around a turf lawn at dusk",
    tags: ["lighting", "turf", "hardscape", "design"],
  },
  {
    src: "/photos/services/fountain03.webp",
    alt: "Stacked-stone water feature with a lit spillway in front of a horizontal redwood fence at night",
    caption: "Stacked-stone water feature with lit spillway",
    tags: ["hardscape", "lighting", "design"],
  },
  {
    src: "/photos/services/patios03.webp",
    alt: "Large-format cream porcelain paver patio along the back of a white two-storey home",
    caption: "Cream porcelain paver patio",
    tags: ["pavers", "hardscape"],
  },
  {
    src: "/photos/services/turf03.webp",
    alt: "Artificial turf backyard with a putting green beside a garden shed",
    caption: "Turf backyard with putting green",
    tags: ["turf", "play"],
  },
  {
    src: "/photos/services/fountain04.webp",
    alt: "Tiered bowl fountain on a stone-veneer seat wall against a cedar fence with lattice top",
    caption: "Bowl fountain on a stone seat wall",
    tags: ["hardscape", "design"],
  },
  {
    src: "/photos/services/patios04.webp",
    alt: "Dark porcelain paver patio with flagstone steppers in gravel and a low raised planter wall along the fence",
    caption: "Dark porcelain patio with flagstone steppers",
    tags: ["pavers", "hardscape", "retaining-wall", "design"],
  },
  {
    src: "/photos/services/turf04.webp",
    alt: "Artificial turf play lawn with concrete stepping pads and children's play equipment",
    caption: "Turf play lawn with stepping pads",
    tags: ["turf", "play"],
  },
  {
    src: "/photos/services/fence01.webp",
    alt: "Horizontal redwood fence and gate beside a new paver patio with young plantings",
    caption: "Horizontal redwood fence and gate",
    tags: ["fence", "pavers"],
  },
  {
    src: "/photos/services/bench04.webp",
    alt: "Curved block seat wall on a paver patio under a mature tree",
    caption: "Curved seat wall under a mature tree",
    tags: ["hardscape", "design"],
  },
  {
    src: "/photos/services/pergola03.webp",
    alt: "Black louvered pergola on a composite deck with lounge seating, set in an artificial turf lawn",
    caption: "Louvered pergola lounge on turf",
    tags: ["pergola", "turf", "full-remodel"],
  },
  {
    src: "/photos/services/turf05.webp",
    alt: "Backyard artificial turf lawn with concrete stepping pads, a paver border and raised planter beds",
    caption: "Turf lawn with stepping pads and paver border",
    tags: ["turf", "pavers", "design"],
  },
  {
    src: "/photos/services/bench05.webp",
    alt: "L-shaped composite bench on artificial turf with flagstone steppers under a tree",
    caption: "Composite bench on turf with flagstone steppers",
    tags: ["turf", "hardscape", "design"],
  },
  {
    src: "/photos/services/patios05.webp",
    alt: "Flagstone patio with a floating wood bench on a white seat wall and bark mulch planting beds",
    caption: "Flagstone patio with floating bench",
    tags: ["hardscape", "design"],
  },
  {
    src: "/photos/services/steppers01.webp",
    alt: "Concrete stepping pads in gravel and artificial turf wrapping around a garden room",
    caption: "Stepping pads in gravel and turf",
    tags: ["hardscape", "turf", "design"],
  },
  {
    src: "/photos/services/pergola04.webp",
    alt: "White louvered pergola over a composite deck with a built-in white planter",
    caption: "White louvered pergola on composite deck",
    tags: ["pergola", "design"],
  },
  {
    src: "/photos/services/fence02.webp",
    alt: "Redwood privacy fence with lattice top and post caps",
    caption: "Redwood fence with lattice top",
    tags: ["fence"],
  },
  {
    src: "/photos/services/bench06.webp",
    alt: "Curved floating bench on a white seat wall over large-format porcelain pavers",
    caption: "Floating bench over porcelain pavers",
    tags: ["pavers", "hardscape", "design"],
  },
  {
    src: "/photos/services/fountain05.webp",
    alt: "Stacked-stone wall fountain in a river rock bed in front of a wood fence",
    caption: "Stacked-stone wall fountain in river rock",
    tags: ["hardscape", "design"],
  },
  {
    src: "/photos/services/steppers02.webp",
    alt: "Grid of large concrete pavers set in artificial turf under a citrus tree",
    caption: "Paver grid set in turf",
    tags: ["pavers", "turf"],
  },
  {
    src: "/photos/services/driveway01.webp",
    alt: "Paver driveway with dark herringbone inlay panels and a light border in front of a wood garage door",
    caption: "Paver driveway with herringbone inlay",
    tags: ["pavers", "hardscape", "design"],
  },
  {
    src: "/photos/services/court01.webp",
    alt: "Paver patio with an in-ground basketball hoop and a low block retaining wall",
    caption: "Paver court with basketball hoop",
    tags: ["pavers", "play", "retaining-wall"],
  },
  {
    src: "/photos/services/wall01.webp",
    alt: "Curved block retaining wall planter with a paver path around a mature tree",
    caption: "Curved retaining wall planter and paver path",
    tags: ["retaining-wall", "pavers", "hardscape"],
  },
  {
    src: "/photos/services/patios06.webp",
    alt: "Large paver patio with a block retaining wall planter and an artificial turf lawn",
    caption: "Paver patio with planter wall and turf",
    tags: ["pavers", "retaining-wall", "turf"],
  },
  {
    src: "/photos/services/patios07.webp",
    alt: "Grey large-format paver patio with a dining set and a gravel border beside the house",
    caption: "Grey paver patio with dining set",
    tags: ["pavers", "hardscape"],
  },
  {
    src: "/photos/services/pavers-detail01.webp",
    alt: "Close-up of a blended multi-size paver pattern",
    caption: "Multi-size paver pattern detail",
    tags: ["pavers"],
  },
  {
    src: "/photos/services/pergola05.webp",
    alt: "Large black louvered pergola over an outdoor kitchen with a built-in grill on a paver patio",
    caption: "Louvered pergola over an outdoor kitchen",
    tags: ["pergola", "outdoor-kitchen", "pavers", "full-remodel"],
  },
  {
    src: "/photos/services/pergola06.webp",
    alt: "Black louvered pergola on a composite deck with sectional seating, artificial turf and pavers",
    caption: "Louvered pergola with sectional seating",
    tags: ["pergola", "turf", "full-remodel"],
  },
  {
    src: "/photos/services/pergola07.webp",
    alt: "White pergola with lounge seating and a hanging egg chair on a composite deck",
    caption: "White pergola lounge with egg chair",
    tags: ["pergola", "design"],
  },
  {
    src: "/photos/services/steppers03.webp",
    alt: "Side yard path of concrete steppers in river rock with new plantings and path lights",
    caption: "Side yard stepper path with lighting",
    tags: ["hardscape", "lighting", "design"],
  },
  {
    src: "/photos/services/design01.webp",
    alt: "Backyard with a pergola lounge, turf lawn, flagstone steppers, paver path and path lights",
    caption: "Complete backyard with pergola and turf",
    tags: ["design", "full-remodel", "pergola", "lighting"],
  },
  {
    src: "/photos/services/aerial01.webp",
    alt: "Drone view of a backyard with turf, a paver patio and a grid of stepping pads",
    caption: "Backyard from above",
    tags: ["design", "turf", "pavers"],
  },
  {
    src: "/photos/services/wall02.webp",
    alt: "Curved white seat wall with planters along a large-format paver patio",
    caption: "White seat wall along a paver patio",
    tags: ["pavers", "hardscape", "design"],
  },
  {
    src: "/photos/services/wall03.webp",
    alt: "Curved block retaining wall planter around a tree beside a paver path",
    caption: "Block retaining wall planter",
    tags: ["retaining-wall", "pavers", "hardscape"],
  },
];

/**
 * Portfolio set used by the homepage grid. Titles here are what a visitor sees
 * captioned under each photo, so they describe the photo itself rather than a
 * service we would like to sell against it.
 */
export type PortfolioProject = Photo & {
  id: string;
  title: string;
  category: "Hardscaping" | "Landscaping" | "Outdoor Living";
  location: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Deck & Retaining Wall",
    category: "Outdoor Living",
    location: "Los Altos",
    src: "/photos/portfolio/p01.webp",
    alt: "Composite deck with a hanging egg chair, stepping pavers set in artificial turf and a low retaining wall",
    caption: "Deck and retaining wall",
    tags: ["retaining-wall", "turf", "hardscape"],
  },
  {
    id: "2",
    title: "Paver, Pergola & Turf",
    category: "Outdoor Living",
    location: "Los Altos",
    src: "/photos/portfolio/p02.webp",
    alt: "White aluminum pergola over an outdoor sectional, reached by stepping pavers through an artificial turf lawn",
    caption: "Pergola lounge with pavers and turf",
    tags: ["pergola", "pavers", "turf", "full-remodel"],
  },
  {
    id: "3",
    title: "Retaining Wall & Paver Patio",
    category: "Hardscaping",
    location: "San Carlos",
    src: "/photos/portfolio/p03.webp",
    alt: "Curved block retaining wall wrapping a large paver patio with a contrasting border band",
    caption: "Curved retaining wall and paver patio",
    tags: ["retaining-wall", "pavers", "hardscape"],
  },
  {
    id: "4",
    title: "Paver Patio",
    category: "Hardscaping",
    location: "San Jose",
    src: "/photos/portfolio/p04.webp",
    alt: "Large paver patio with a swing set and planted borders along a wood fence",
    caption: "Paver patio with play area",
    tags: ["pavers", "play"],
  },
  {
    id: "5",
    title: "Redwood Horizontal Fence",
    category: "Landscaping",
    location: "Palo Alto",
    src: "/photos/portfolio/p05.webp",
    alt: "Horizontal redwood fence and matching planter boxes around a paver patio",
    caption: "Horizontal redwood fence",
    tags: ["fence", "design"],
  },
  {
    id: "6",
    title: "Deck & Paver Patio",
    category: "Hardscaping",
    location: "Sunnyvale",
    src: "/photos/portfolio/p06.webp",
    alt: "Paver patio and low deck beside the house with an artificial turf lawn",
    caption: "Deck and paver patio",
    tags: ["pavers", "turf"],
  },
  {
    id: "7",
    title: "Deck & Turf",
    category: "Outdoor Living",
    location: "Mountain View",
    src: "/photos/portfolio/p07.webp",
    alt: "Low composite deck stepping down to an artificial turf lawn with stepping pavers",
    caption: "Deck and turf lawn",
    tags: ["turf", "full-remodel"],
  },
  {
    id: "8",
    title: "Lit Stucco Planter, Bench & Turf",
    category: "Outdoor Living",
    location: "San Jose",
    src: "/photos/portfolio/p08.webp",
    alt: "Smooth stucco planter walls with a built-in bench and integrated lighting beside artificial turf",
    caption: "Lit stucco planter and bench",
    tags: ["hardscape", "lighting", "turf"],
  },
  {
    id: "9",
    title: "Backyard Sports Court",
    category: "Outdoor Living",
    location: "San Jose",
    src: "/photos/portfolio/p09.webp",
    alt: "Blue and yellow modular backyard basketball court with a hoop",
    caption: "Backyard sports court",
    tags: ["play", "full-remodel"],
  },
  {
    id: "10",
    title: "Porcelain Paver Patio",
    category: "Hardscaping",
    location: "San Jose",
    src: "/photos/portfolio/p10.webp",
    alt: "Large-format porcelain paver patio with flagstone stepping stones in gravel and curved planting beds",
    caption: "Porcelain paver patio",
    tags: ["pavers", "hardscape", "drainage"],
  },
  {
    id: "11",
    title: "Outdoor Kitchen & Bar",
    category: "Outdoor Living",
    location: "Saratoga",
    src: "/photos/portfolio/p11.webp",
    alt: "Covered outdoor kitchen with a built-in grill and a seated bar counter on a light paver patio",
    caption: "Outdoor kitchen with bar seating",
    tags: ["outdoor-kitchen", "pergola", "full-remodel"],
  },
  {
    id: "12",
    title: "Lit Decking & Stepping Pavers",
    category: "Hardscaping",
    location: "Palo Alto",
    src: "/photos/portfolio/p12.webp",
    alt: "Low deck with recessed deck lights and large stepping pavers in gravel at dusk",
    caption: "Lit decking and stepping pavers",
    tags: ["lighting", "pavers"],
  },
];

/** Additional curated shots used to fill galleries beyond the homepage set. */
export const extraPhotos: Photo[] = [
  {
    src: "/photos/portfolio/p13.webp",
    alt: "White pergola over a play area with oversized decorative spheres",
    caption: "Pergola over a family play area",
    tags: ["pergola", "play"],
  },
  {
    src: "/photos/portfolio/p14.webp",
    alt: "Overhead view of a circular flagstone patio with a curved seat wall",
    caption: "Circular flagstone patio with seat wall",
    tags: ["hardscape", "design"],
  },
  {
    src: "/photos/portfolio/p15.webp",
    alt: "Backyard with turf, a climbing structure, outdoor kitchen and pergola",
    caption: "Complete backyard with play, cooking and shade",
    tags: ["full-remodel", "turf", "outdoor-kitchen", "play"],
  },
  {
    src: "/photos/portfolio/p16.webp",
    alt: "Wide paver patio bordered by a low stone retaining wall",
    caption: "Paver patio with low retaining wall",
    tags: ["pavers", "retaining-wall", "hardscape"],
  },
];

const allPhotos: Photo[] = [
  ...photos,
  ...extraPhotos,
  ...portfolioProjects.map(({ src, alt, caption, tags }) => ({ src, alt, caption, tags })),
];

/** Which tags speak for each service, most representative first. */
const serviceTags: Record<string, PhotoTag[]> = {
  "paver-installation": ["pavers", "hardscape"],
  "artificial-turf": ["turf", "play"],
  "landscape-design": ["design", "full-remodel"],
  hardscaping: ["hardscape", "retaining-wall"],
  "pergola-installation": ["pergola"],
  "fence-and-gate": ["fence", "design"],
  "irrigation-drainage": ["drainage", "design"],
  "outdoor-lighting": ["lighting"],
  "retaining-walls": ["retaining-wall", "hardscape"],
  "complete-backyard-remodel": ["full-remodel", "outdoor-kitchen", "play"],
};

/**
 * Photos for a service, best match first.
 *
 * Ranking counts how many of the service's tags a photo carries, so a paver
 * page leads with photographs that are mostly pavers rather than anything that
 * merely happens to include some. Ties keep catalogue order, which makes the
 * result stable across builds. Falls through to the wider set so a gallery is
 * never short, and never repeats within one call.
 */
export function photosForService(slug: string, count = 6): Photo[] {
  const tags = serviceTags[slug] ?? [];
  const matches = (p: Photo) => tags.filter((t) => p.tags.includes(t)).length;
  const ranked = [...allPhotos]
    .map((p, i) => ({ p, i, score: matches(p) }))
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .map(({ p }) => p);
  const seen = new Set<string>();
  return ranked.filter((p) => !seen.has(p.src) && seen.add(p.src)).slice(0, count);
}

/** The single strongest image for a service, used as its page hero. */
export function heroForService(slug: string): Photo {
  return photosForService(slug, 1)[0];
}

/**
 * A stable, distinct photo set per city. Cities previously all rendered the
 * same eight images; offsetting by index gives each page its own selection
 * while staying deterministic across builds.
 */
export function photosForArea(slug: string, allSlugs: string[], count = 6): Photo[] {
  // Projects actually built in this city lead, so a city page shows local work
  // first; the rest of the catalogue fills in at a per-city offset.
  const local = portfolioProjects.filter(
    (p) => p.location.toLowerCase().replace(/\s+/g, "-") === slug
  );
  const index = Math.max(0, allSlugs.indexOf(slug));
  const offset = (index * 3) % allPhotos.length;
  const seen = new Set<string>();
  const out: Photo[] = [];
  for (const p of local) {
    if (out.length >= count) break;
    seen.add(p.src);
    out.push(p);
  }
  for (let i = 0; i < allPhotos.length && out.length < count; i++) {
    const p = allPhotos[(offset + i) % allPhotos.length];
    if (seen.has(p.src)) continue;
    seen.add(p.src);
    out.push(p);
  }
  return out;
}
