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
    title: "Paver Patio & Turf",
    category: "Hardscaping",
    location: "Fremont",
    src: "/photos/portfolio/p01.webp",
    alt: "Paver patio with a hanging egg chair and turf border",
    caption: "Paver patio and turf",
    tags: ["pavers", "turf"],
  },
  {
    id: "2",
    title: "Pergola & Turf Lounge",
    category: "Outdoor Living",
    location: "Union City",
    src: "/photos/portfolio/p02.webp",
    alt: "White pergola sheltering an outdoor sectional beside an artificial turf lawn",
    caption: "Pergola lounge over turf",
    tags: ["pergola", "turf", "full-remodel"],
  },
  {
    id: "3",
    title: "Retaining Wall & Paver Patio",
    category: "Hardscaping",
    location: "Milpitas",
    src: "/photos/portfolio/p03.webp",
    alt: "Curved stone retaining wall wrapping a large paver patio",
    caption: "Curved retaining wall and paver patio",
    tags: ["retaining-wall", "pavers", "hardscape"],
  },
  {
    id: "4",
    title: "Backyard Play Area",
    category: "Landscaping",
    location: "San Ramon",
    src: "/photos/portfolio/p04.webp",
    alt: "Children's swing set on a paver surface with planting along the fence",
    caption: "Swing set and planted borders",
    tags: ["play", "pavers"],
  },
  {
    id: "5",
    title: "Redwood Planters & Screening",
    category: "Landscaping",
    location: "Newark",
    src: "/photos/portfolio/p05.webp",
    alt: "Redwood slatted planters and screening along a side yard",
    caption: "Redwood planters and privacy screening",
    tags: ["fence", "design"],
  },
  {
    id: "6",
    title: "Paver Patio & Lawn",
    category: "Hardscaping",
    location: "Hayward",
    src: "/photos/portfolio/p06.webp",
    alt: "Paver patio running the length of a house with a turf lawn alongside",
    caption: "Full-width paver patio with lawn",
    tags: ["pavers", "turf"],
  },
  {
    id: "7",
    title: "Deck & Turf Yard",
    category: "Outdoor Living",
    location: "Dublin",
    src: "/photos/portfolio/p07.webp",
    alt: "Raised deck with dining furniture overlooking an artificial turf lawn",
    caption: "Raised deck above a turf lawn",
    tags: ["turf", "full-remodel"],
  },
  {
    id: "8",
    title: "Lit Seat Wall & Turf",
    category: "Outdoor Living",
    location: "Pleasanton",
    src: "/photos/portfolio/p08.webp",
    alt: "Built-in seat wall with integrated lighting beside an artificial turf lawn",
    caption: "Seat wall with integrated lighting",
    tags: ["hardscape", "lighting", "turf"],
  },
  {
    id: "9",
    title: "Backyard Sport Court",
    category: "Outdoor Living",
    location: "Danville",
    src: "/photos/portfolio/p09.webp",
    alt: "Blue and yellow modular backyard basketball court with a wall-mounted hoop",
    caption: "Modular backyard sport court",
    tags: ["play", "full-remodel"],
  },
  {
    id: "10",
    title: "Paver Side Yard",
    category: "Hardscaping",
    location: "San Jose",
    src: "/photos/portfolio/p10.webp",
    alt: "Narrow side yard paved with pavers and stepping stones set in gravel",
    caption: "Side yard pavers and stepping stones",
    tags: ["pavers", "hardscape", "drainage"],
  },
  {
    id: "11",
    title: "Outdoor Kitchen & Bar",
    category: "Outdoor Living",
    location: "Sunnyvale",
    src: "/photos/portfolio/p11.webp",
    alt: "Covered outdoor kitchen with a built-in grill and a seated bar counter",
    caption: "Outdoor kitchen with bar seating",
    tags: ["outdoor-kitchen", "pergola", "full-remodel"],
  },
  {
    id: "12",
    title: "Lit Entry & Driveway",
    category: "Hardscaping",
    location: "Walnut Creek",
    src: "/photos/portfolio/p12.webp",
    alt: "Home entry and driveway at dusk lined with recessed path lighting",
    caption: "Path-lit entry and driveway",
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
  const index = Math.max(0, allSlugs.indexOf(slug));
  const offset = (index * 3) % allPhotos.length;
  const seen = new Set<string>();
  const out: Photo[] = [];
  for (let i = 0; i < allPhotos.length && out.length < count; i++) {
    const p = allPhotos[(offset + i) % allPhotos.length];
    if (seen.has(p.src)) continue;
    seen.add(p.src);
    out.push(p);
  }
  return out;
}
