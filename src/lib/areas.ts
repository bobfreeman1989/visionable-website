import { ratingLong } from "@/content/reviews";
import type { FaqItem } from "@/content/faq";

export interface CityData {
  slug: string;
  /** Date this entry's copy last changed substantively. Drives sitemap
      `lastmod`, so bump it only for real content edits. */
  updatedAt: string;
  name: string;
  /** Page heading when it should differ from "Landscaping in {name}, CA". */
  h1?: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  content: [string, string, string];
  nearbyAreas: string[];
  /** Questions that only apply in this city. Every answer about a local rule
      carries the official page it was checked against; the comment above each
      list says when. Rules change: re-read the source before editing. */
  localFaqs?: FaqItem[];
}

// Ordered by where we most want to be found: the cities at the top lead the
// nav, the footer, the areas index and every service page's city links.
export const areas: CityData[] = [
  {
    slug: "los-altos",
    updatedAt: "2026-11-10",
    name: "Los Altos",
    h1: "Landscape design and build in Los Altos, CA",
    county: "Santa Clara",
    metaTitle: "Los Altos Landscape Design & Build | Patios, Walls, Lighting",
    metaDescription: "Los Altos landscape design-build: backyard remodels, paver and stone patios, retaining walls, pergolas and lighting. Free design consultation. (510) 755-5616.",
    heroText: "Landscape design and construction for Los Altos homes: backyard remodels, stone and paver patios, retaining walls, pergolas, outdoor kitchens and lighting.",
    content: [
      "Los Altos is known for generous lots, mature trees and a semi-rural feel that homeowners want to keep. A Los Altos landscape should feel settled into its site, not dropped on it. We design around existing trees and sightlines, and use materials such as natural stone, quality pavers and warm wood that age well alongside the house.",
      "Front yards matter here. Many of our Los Altos projects include a new entry walk or driveway, lighting along the approach and low-water planting that still looks lush. In the backyard, the brief is usually a full outdoor living space: a terrace for dining, a lounge area around a fire feature, a pergola, and enough open turf or lawn for kids and guests. Recent Los Altos work includes a composite deck with a retaining wall, and a pergola lounge reached by stepping pavers through new turf.",
      "Larger projects need tighter coordination, so we keep design and construction under one roof. Grading, drainage, low-voltage lighting, irrigation and hardscape are planned together in the 3D design and built by our own crew, with daily updates and a final walkthrough before we call it done.",
    ],
    nearbyAreas: ["los-altos-hills", "palo-alto", "mountain-view", "cupertino"],
    // Local rules checked against the linked official pages on 2026-11-10.
    localFaqs: [
      {
        q: "Do I need a permit to remove a tree in Los Altos?",
        a: "For a protected tree, yes. Los Altos requires a Tree Removal Permit before a protected tree can be removed, under its Tree Protection Ordinance (Municipal Code Chapter 11.08). The city's page lists the submittal requirements and its native tree list. We note the existing trees at the first visit and lay out patios, walls and trenching around the ones that are staying.",
        source: { label: "City of Los Altos, Tree Removal", url: "https://www.losaltosca.gov/231/Tree-Removal" },
      },
      {
        q: "Do you also work in Los Altos Hills?",
        a: "Yes. Los Altos Hills has its own rules on development area, fences and outdoor lighting, which are different from the City of Los Altos, so it has its own page, linked under Nearby areas on this page.",
      },
    ],
  },
  {
    slug: "los-altos-hills",
    updatedAt: "2026-11-10",
    name: "Los Altos Hills",
    h1: "Landscape design and build in Los Altos Hills, CA",
    county: "Santa Clara",
    metaTitle: "Los Altos Hills Landscape Design & Build | Visionable",
    metaDescription: "Landscape design-build for Los Altos Hills: patios, retaining walls, drainage, pergolas and lighting planned around the Town's development area and lighting rules. (510) 755-5616.",
    heroText: "Landscape design and construction for Los Altos Hills properties: terraces and patios, retaining walls, drainage, pergolas and lighting, planned around the Town's rules from the first sketch.",
    // This page names no Los Altos Hills project because we have not confirmed
    // one with Bob. Add a real one to the second paragraph when there is one.
    content: [
      "Los Altos Hills regulates outdoor work more closely than most Bay Area towns. Patios, decks, walkways, gravel and artificial turf all count toward a lot's Maximum Development Area. Any new fence, wall, gate or column needs a zoning permit. The Town's lighting policy prohibits up-lighting. A landscape plan here has to work inside those limits from the first sketch, not get trimmed to fit them afterward.",
      "The work itself is what we build everywhere: stone and paver terraces, retaining walls that create level ground on a slope, drainage that keeps winter rain moving away from the house, pergolas, outdoor kitchens and low, shielded lighting. In neighboring Los Altos we have built a composite deck with a retaining wall, and a pergola lounge reached by stepping pavers through new turf. The same crew builds in Los Altos Hills.",
      `We visit and measure for free. In the paid design phase you see the yard in 3D, then sign a fixed-price contract before construction starts. Our own crew builds it and you hear from us daily while we are on site. We are CSLB licensed (#1101860), insured, and rated ${ratingLong}.`,
    ],
    nearbyAreas: ["los-altos", "palo-alto", "cupertino"],
    // Local rules checked against the linked official pages on 2026-11-10.
    localFaqs: [
      {
        q: "Does a new patio count toward Maximum Development Area in Los Altos Hills?",
        a: "Yes. The Town counts patios, decks, walkways and other surfaces made of paving, masonry, stone, wood, decomposed granite, gravel or artificial turf as development area. It is worth knowing how much development area your lot has left before settling the size of a patio or terrace, so we ask for that number at the start of design.",
        source: {
          label: "Town of Los Altos Hills, MFA and MDA worksheet instructions (July 2026)",
          url: "https://www.losaltoshills.ca.gov/DocumentCenter/View/8049/MFA-MDA-PWB-Instructions-and-Worksheets-070826",
        },
      },
      {
        q: "What does Los Altos Hills allow for landscape lighting?",
        a: "Less than most towns. The Town's Outdoor Lighting Policy prohibits up-lighting of any kind, wall-wash lighting, and visible LED strips, tape lights and bistro lights. Lights must be 3000 Kelvin or warmer, and pathway and driveway lights should be fully shielded, aimed down and no taller than 18 inches. We design lighting for Los Altos Hills around downward, shielded fixtures.",
        source: {
          label: "Town of Los Altos Hills, Outdoor Lighting Policy",
          url: "https://www.losaltoshills.ca.gov/DocumentCenter/View/170/Outdoor-Lighting-Policy-PDF",
        },
      },
      {
        q: "Do I need a permit for a fence or wall in Los Altos Hills?",
        a: "Yes. No fence, wall, gate or column may be built or replaced without a zoning or site development permit from the Town. The Town's handout sets a maximum height of 6 feet on property lines and in setbacks away from a road, with lower limits close to a road.",
        source: {
          label: "Town of Los Altos Hills, Fences, Walls, Gates and Columns",
          url: "https://www.losaltoshills.ca.gov/DocumentCenter/View/7670/Fences-Walls-Gates-and-Columns-101725",
        },
      },
      {
        q: "Which trees are protected in Los Altos Hills?",
        a: "Heritage Oaks: any oak with a trunk 36 inches in circumference, about 12 inches in diameter, measured four feet above the root crown. Removing one needs a permit, and work that damages one is prohibited. The Town does not require a permit to remove other species.",
        source: {
          label: "Town of Los Altos Hills, Tree Removal Permit",
          url: "https://www.losaltoshills.ca.gov/295/Tree-Removal-Permit",
        },
      },
    ],
  },
  {
    slug: "palo-alto",
    updatedAt: "2026-11-10",
    name: "Palo Alto",
    h1: "Landscape design and build in Palo Alto, CA",
    county: "Santa Clara",
    metaTitle: "Palo Alto Landscape Design & Paver Patios | Visionable",
    metaDescription: "Palo Alto landscape design-build: paver and stone patios, pergolas, turf and lighting, planned around protected trees. Free design consultation. (510) 755-5616.",
    heroText: "Landscape design-build for Palo Alto homes, from Eichler neighborhoods to Old Palo Alto and Crescent Park. Modern patios, pergolas, turf and lighting.",
    content: [
      "Palo Alto has some of the most distinctive residential architecture in the Bay Area, from the Eichler neighborhoods of Greenmeadow and Midtown to the older homes of Old Palo Alto, Professorville and Crescent Park. A good Palo Alto landscape respects the house it belongs to: clean lines and floor-to-ceiling views for a mid-century home, softer layering and traditional materials for an older one.",
      "Palo Alto protects a wide range of trees, including native oaks and redwoods, and the city's rules affect where you can trench, pave or build near them. We survey the existing trees before design and lay out patios, walls and utility runs accordingly, so permitting questions get answered at the planning stage instead of halfway through construction. Recent Palo Alto projects include a horizontal redwood fence with matching planters, and lit decking with large stepping pavers.",
      `Typical Palo Alto projects for us combine a paver or stone patio, a pergola or shade structure, artificial turf or a small lawn, low-water planting and landscape lighting. You see it all in 3D first, and our own crew builds it with daily updates. We are CSLB licensed (#1101860), insured and rated ${ratingLong}.`,
    ],
    nearbyAreas: ["los-altos", "los-altos-hills", "mountain-view", "san-carlos"],
    // Local rules checked against the linked official pages on 2026-11-10.
    localFaqs: [
      {
        q: "Which trees are protected in Palo Alto?",
        a: "Palo Alto protects six native species once the trunk reaches 11.5 inches in diameter: coast live oak, valley oak, blue oak, California black oak, big leaf maple and California incense cedar. Coast redwoods are protected at 18 inches, and most other mature trees at 15 inches, with invasive and high-water-use species excluded. Protected trees may need a permit for removal, pruning or any work that could affect them, so we map them before we place a patio, wall or trench.",
        source: {
          label: "City of Palo Alto, Protected Trees",
          url: "https://www.paloalto.gov/Departments/Public-Works/Public-Services/Palo-Altos-Urban-Forest/Development-Process/Protected-Trees",
        },
      },
    ],
  },
  {
    slug: "saratoga",
    updatedAt: "2026-11-10",
    name: "Saratoga",
    h1: "Landscape design and build in Saratoga, CA",
    county: "Santa Clara",
    metaTitle: "Saratoga Landscape Design & Build | Patios, Pergolas, Walls",
    metaDescription: "Saratoga landscape design-build: stone and paver patios, pergolas, outdoor kitchens, retaining walls and lighting. Free design consultation. (510) 755-5616.",
    heroText: "Landscape design-build for Saratoga's large lots and foothill properties. Retaining walls, stone and paver patios, lighting and outdoor living, built by our own crew.",
    content: [
      "Saratoga properties run from the flatter lots near the Village and the Golden Triangle to hillside homes up toward the Santa Cruz Mountains foothills. Bigger lots, real slopes and mature oaks mean Saratoga landscapes need more planning than a typical tract backyard: how water moves across the site, where a retaining wall is structural rather than decorative, and how a patio sits against the grade.",
      "Saratoga regulates work around protected trees, so we map the existing trees before we design and plan patios, walls and trenching to stay out of root zones that need protecting. On hillside properties we lean on hardscape, gravel and well-spaced planting close to the house rather than dense shrubs, and we design landscape lighting that shows off the property without glare spilling onto neighboring lots. A recent Saratoga project paired a covered outdoor kitchen and bar with a new paver patio.",
      "Our Saratoga projects tend to be complete outdoor living builds: natural stone or paver terraces, seat walls, outdoor kitchens and fire features, pergolas and layered lighting. One team handles the design, the 3D renderings, grading, drainage and construction, so there is a single point of accountability from first visit to final walkthrough.",
    ],
    nearbyAreas: ["los-gatos", "cupertino", "san-jose"],
    // Local rules checked against the linked official pages on 2026-11-10.
    localFaqs: [
      {
        q: "Which trees are protected in Saratoga?",
        a: "Any tree with a trunk 10 inches or more in diameter, measured 4.5 feet above the ground, whatever the species. Ten native species, including coast live oak, valley oak and coast redwood, are protected from 6 inches. A permit is needed before a protected tree is removed, including a dead or fallen one.",
        source: { label: "City of Saratoga, Trees in Saratoga", url: "https://www.saratoga.ca.us/171/Trees" },
      },
      {
        q: "Can I build a patio or wall near a protected tree in Saratoga?",
        a: "Often yes, but it has to be planned. Saratoga requires a tree encroachment permit when grading, excavating, trenching or building will affect a protected tree's root zone, even if the work needs no other city permit. We locate the protected trees before design so the patio, wall footings and utility trenches are placed with the root zones in mind.",
        source: { label: "City of Saratoga, Trees in Saratoga", url: "https://www.saratoga.ca.us/171/Trees" },
      },
      {
        q: "How close to the property line can a pergola go in Saratoga?",
        a: "For an unenclosed garden structure such as a gazebo, trellis or arbor that is 10 feet tall or less, Saratoga sets the side and rear setback by height: 6 feet from the property line for a structure up to 8 feet tall, 7 feet for one up to 9 feet, and 8 feet for one up to 10 feet. We confirm the requirement for your lot with the city during design.",
        source: { label: "City of Saratoga, Accessory Structures", url: "https://www.saratoga.ca.us/557/Accessory-Structures" },
      },
    ],
  },
  {
    slug: "los-gatos",
    updatedAt: "2026-11-10",
    name: "Los Gatos",
    county: "Santa Clara",
    metaTitle: "Los Gatos Landscaping | Paver Patios, Walls & Pergolas",
    metaDescription: "Los Gatos landscape design-build: retaining walls, drainage, paver & stone patios, pergolas and lighting for hillside homes. Free design consultation. (510) 755-5616.",
    heroText: "Landscaping for Los Gatos homes, from the historic streets near downtown to hillside lots above Blossom Hill. Retaining walls, drainage, patios and lighting done right.",
    content: [
      "Los Gatos has two very different kinds of yards. Near downtown and Almond Grove the lots are older and tighter, and the goal is usually to fit a patio, planting and a dining spot into a small footprint without losing the character of the house. Up in the hills toward Blossom Hill and beyond, the challenge is slope, drainage and making a usable flat area at all.",
      "That is why so many of our Los Gatos projects start with a retaining wall and a drainage plan. Winter rain on a hillside lot will find the weakest point in a yard, so we design the grading, drains and wall backfill first and build the patio, turf or planting on top of a site that can handle it. Los Gatos also protects many trees, and we check what is on the property before anything gets designed near them.",
      "Once the bones are right, the fun part is the outdoor living: paver or natural stone patios, pergolas, fire features and landscape lighting that makes the yard usable after dark. We show you the full design in 3D first, build it with our own crew, and back it with a written workmanship warranty.",
    ],
    nearbyAreas: ["saratoga", "san-jose", "cupertino"],
    // Local rules checked against the linked official pages on 2026-11-10.
    localFaqs: [
      {
        q: "Which trees are protected in Los Gatos?",
        a: "On a developed residential lot, any tree 12 inches or more in diameter, measured 4.5 feet above grade. In the Town's hillside area the threshold is 8 inches. Removing a protected tree needs a permit from the Town, so we note the existing trees before we design around them.",
        source: {
          label: "Town of Los Gatos, Tree Removal Application",
          url: "https://losgatosca.gov/DocumentCenter/View/40478/TreeRemovalApplication---Fillable",
        },
      },
      {
        q: "How tall can a fence be in Los Gatos?",
        a: "Six feet, with one more foot of lattice on top, on most lots. In the hillside area the limit is six feet, and fences in a required front yard or a side yard next to a street are limited to three feet.",
        source: {
          label: "Town of Los Gatos, Regulations for Fences, Walls and Gates",
          url: "https://www.losgatosca.gov/DocumentCenter/View/43245/Regulations-for-Fences-Walls-and-Gates",
        },
      },
    ],
  },
  {
    slug: "cupertino",
    updatedAt: "2026-10-22",
    name: "Cupertino",
    county: "Santa Clara",
    metaTitle: "Cupertino CA Landscaping | Backyard Remodels, Pavers & Turf",
    metaDescription: "Cupertino backyard remodels: paver patios, artificial turf, pergolas and lighting, designed in 3D before we build. Free design consultation. (510) 755-5616.",
    heroText: "Backyard remodels for Cupertino families in Monta Vista, Rancho Rinconada, Seven Springs and beyond. Pavers, turf, pergolas and lighting, designed in 3D first.",
    content: [
      "Cupertino homeowners usually come to us with a clear brief: a backyard the whole family can use, that looks clean year-round and does not take a weekend of work to maintain. In neighborhoods like Monta Vista, Rancho Rinconada, Garden Gate and Seven Springs, that typically means replacing a tired lawn and patchy concrete with a paver patio, artificial turf, a pergola for shade and planting that holds up through dry summers.",
      "Many Cupertino lots are modest in size, so layout matters more than budget. We plan circulation, seating, a play or turf area and storage in the 3D design so every square foot has a job.",
      "Cupertino also regulates protected trees, so mature trees are surveyed and designed around rather than discovered mid-project. From demolition to the final walkthrough, the work is done by our own crew, with daily updates and a written warranty. Book a free design consultation to see what your yard could become.",
    ],
    nearbyAreas: ["sunnyvale", "saratoga", "los-altos", "san-jose"],
  },
  {
    slug: "mountain-view",
    updatedAt: "2026-10-22",
    name: "Mountain View",
    county: "Santa Clara",
    metaTitle: "Mountain View CA Landscaping | Modern Yards, Turf & Pavers",
    metaDescription: "Mountain View landscaping: modern backyards, artificial turf, paver patios, side yards, pergolas and lighting. Free design consultation. (510) 755-5616.",
    heroText: "Modern, low-maintenance landscaping for Mountain View homes, from Old Mountain View bungalows to Waverly Park, Cuesta Park and the Eichlers of Monta Loma.",
    content: [
      "Mountain View has an unusual mix of housing: older bungalows in Old Mountain View, larger lots around Waverly Park and Cuesta Park, Eichler neighborhoods like Monta Loma, and plenty of newer homes with compact yards. That range means there is no single Mountain View backyard, and we do not design one. Each project starts with how you actually use the space.",
      "Our Mountain View clients tend to want clean, modern yards: large-format pavers or concrete, artificial turf for kids and dogs, a pergola or shade structure, and planting that stays tidy without constant care. Side yards are a frequent add-on, turning a strip of dirt and trash cans into a paved path with screening and a gate that actually closes. A recent Mountain View build paired a low composite deck with an artificial turf lawn and stepping pavers.",
      "On a small lot every detail shows, so we focus on clean edges, consistent joints and lighting that is warm rather than glaring. You see the finished design in 3D before we begin, pay a fixed price, and work with our own crew the whole way through.",
    ],
    nearbyAreas: ["sunnyvale", "los-altos", "palo-alto"],
  },
  {
    slug: "sunnyvale",
    updatedAt: "2026-10-22",
    name: "Sunnyvale",
    county: "Santa Clara",
    metaTitle: "Sunnyvale CA Landscaping | Outdoor Kitchens, Turf & Pavers",
    metaDescription: "Sunnyvale landscaping: outdoor kitchens, artificial turf, paver patios, pergolas and lighting, including Eichler yards. Free design consultation. (510) 755-5616.",
    heroText: "Sunnyvale yards rebuilt for real outdoor living: outdoor kitchens, artificial turf, paver patios and lighting, including mid-century Eichler homes.",
    content: [
      "Many Sunnyvale homes sit in mid-century neighborhoods such as Cherry Chase and the Eichler tracts of Fairbrae, where the house opens straight onto the yard through glass walls. In those homes the backyard is part of the living room, so the landscape has to look good from inside as much as from outside.",
      "The most common Sunnyvale request is a low-maintenance backyard: artificial turf instead of a lawn that browns every August, a paver patio sized for a real dining table, and clean modern planting. When budget allows, homeowners add an outdoor kitchen or barbecue island, a pergola and landscape lighting so the yard gets used on weeknights, not just weekends. A recent Sunnyvale project combined a low deck, a paver patio and an artificial turf lawn.",
      "Sunnyvale lots are mostly flat, which makes drainage easy to overlook. We grade every patio and turf area to move water away from the house and tie in drains where the old yard ponded. Everything is designed in 3D before we start and built by our own crew, licensed under CSLB #1101860.",
    ],
    nearbyAreas: ["mountain-view", "cupertino", "los-altos", "san-jose"],
  },
  {
    slug: "san-jose",
    updatedAt: "2026-10-22",
    name: "San Jose",
    county: "Santa Clara",
    metaTitle: "San Jose Landscaping | West San Jose Pavers, Turf & Design",
    metaDescription: "West San Jose landscaping: Willow Glen, Cambrian, Almaden & Rose Garden. Pavers, artificial turf, lighting & backyard remodels. Free design consultation. (510) 755-5616.",
    heroText: "Design-build landscaping for West San Jose homeowners, from Willow Glen and the Rose Garden to Cambrian and Almaden Valley. Pavers, turf, lighting and full backyard remodels.",
    content: [
      "Most of our San Jose work is on the west side of the city: Willow Glen, the Rose Garden, Cambrian, Almaden Valley and the neighborhoods around Westgate. These are established lots with mature trees, older sprinkler systems and side yards that have usually been left as an afterthought. We design around what is already there, keeping the trees and grades worth keeping and replacing what has stopped working.",
      "San Jose homeowners mostly call us for three things: front yards converted from thirsty lawn to artificial turf and planting, paver patios and walkways that finally make the backyard usable, and neglected side yards turned into clean, usable paths. Recent San Jose builds include a large porcelain paver patio, a lit stucco planter with a built-in bench, a backyard sports court and a paver patio with a play area.",
      `Every San Jose project is designed, demolished, graded and built by our own crew. You see the yard in 3D in the design phase before construction starts, sign a fixed-price contract, and hear from us daily while we are on site. We are CSLB licensed (#1101860), insured, and rated ${ratingLong}.`,
    ],
    nearbyAreas: ["saratoga", "los-gatos", "cupertino", "sunnyvale"],
  },
  {
    slug: "san-carlos",
    updatedAt: "2026-10-22",
    name: "San Carlos",
    county: "San Mateo",
    metaTitle: "San Carlos CA Landscaping | Retaining Walls, Patios & Turf",
    metaDescription: "San Carlos landscaping: retaining walls, drainage, paver patios, artificial turf, pergolas and lighting for hillside and flat lots. (510) 755-5616.",
    heroText: "Landscaping for San Carlos homes, from the flatlands near Laurel Street to the hills above. Retaining walls, drainage, paver patios, turf and lighting.",
    content: [
      "San Carlos splits neatly into flat neighborhoods near Laurel Street and the hills to the west, and the two call for different approaches. On the flats, the goal is usually to make a modest backyard work harder: a paver patio, a turf play area, a pergola and good lighting. In the hills, the first question is always how to create usable level space on a slope.",
      "For hillside San Carlos lots we start with retaining walls and drainage. A wall that holds a patio has to be built with proper footing, backfill and drainage behind it, or winter rain will push it out of line within a few seasons. We design the grading and drains with the hardscape so the yard looks clean and stays that way. A recent San Carlos project wrapped a large paver patio in a curved retaining wall.",
      "Our own crew builds every project, and you deal with the same people from first visit to final walkthrough.",
    ],
    nearbyAreas: ["palo-alto", "los-altos"],
  },
  {
    slug: "fremont",
    updatedAt: "2026-10-22",
    name: "Fremont",
    county: "Alameda",
    metaTitle: "Fremont Landscaping & Hardscaping | Pavers, Turf & Remodels",
    metaDescription: "Landscape construction & hardscaping in Fremont, CA, from Mission San Jose to Warm Springs. Pavers, turf & backyard remodels. 5.0-star rated. (510) 755-5616.",
    heroText: "Visionable Landscaping delivers premium design-build services to Fremont homeowners. From pavers and turf to complete backyard remodels, licensed and insured.",
    content: [
      "As Fremont's locally based landscaping company, Visionable Landscaping understands the unique character of this city's diverse neighborhoods. From the established homes of Niles and Mission San Jose to the newer developments in Warm Springs, every Fremont property has distinct landscaping needs shaped by the Mediterranean climate, clay-heavy soils, and local HOA requirements.",
      "Fremont homeowners consistently choose us for paver patios, artificial turf installations, and complete backyard remodels. Being based here means we are close by for site visits and follow-up. Whether you're looking to replace a water-hungry lawn with drought-resistant turf or create an outdoor living space with pavers and lighting, we design it and our own crew builds it.",
      `With 100+ projects completed and a rating of ${ratingLong}, Visionable Landscaping builds for Fremont residents who want quality craftsmanship without the hassle. Every project starts with a free design consultation. 3D renderings in the paid design phase let you see your vision before we break ground.`,
    ],
    nearbyAreas: ["san-jose", "sunnyvale"],
  },
];

export function getAreaBySlug(slug: string): CityData | undefined {
  return areas.find((a) => a.slug === slug);
}

/** City FAQs are generated from the city's own data rather than hand-written
 *  once per city. Every answer restates a commitment already made
 *  elsewhere on the site (licence number, free design consultation, own crew,
 *  warranty) so no page can drift into promising something the others do not. */
export function faqsForCity(city: CityData): FaqItem[] {
  const nearbyNames = city.nearbyAreas
    .map((slug) => getAreaBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name));

  const nearbyList =
    nearbyNames.length > 1
      ? `${nearbyNames.slice(0, -1).join(", ")} and ${nearbyNames[nearbyNames.length - 1]}`
      : nearbyNames[0] ?? "the surrounding area";

  return [
    ...(city.localFaqs ?? []),
    {
      q: `Do you take on projects in ${city.name}?`,
      a: `Yes. ${city.name} is one of the Bay Area cities we focus on. Our office is at 581 Emerson St in Fremont, and our own crews build throughout ${city.county} County. We also work in nearby ${nearbyList}.`,
    },
    {
      q: `What happens at the free ${city.name} consultation?`,
      a: `We come to the property, measure it, and talk through how you want to use the space. The site visit is free. 3D renderings are part of the paid design phase, so you see the yard before anything is built.`,
    },
    {
      q: `Are you licensed and insured to work in ${city.name}?`,
      a: `We are CSLB licensed (#1101860) and insured. Our own crew builds every project, and you deal with the same people from first visit to final walkthrough. Every project comes with a written workmanship warranty.`,
    },
    {
      q: `What kinds of yards do you build in ${city.name}?`,
      a: `Anything from a single paver patio or artificial turf install to a complete backyard remodel combining hardscaping, a pergola, lighting and planting. We have completed 100+ projects and hold a rating of ${ratingLong}.`,
    },
  ];
}
