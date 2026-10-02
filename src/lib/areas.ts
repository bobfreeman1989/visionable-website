export interface CityData {
  slug: string;
  /** Date this entry's copy last changed substantively. Drives sitemap
      `lastmod`, so bump it only for real content edits. */
  updatedAt: string;
  name: string;
  county: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  content: [string, string, string];
  nearbyAreas: string[];
}

export const areas: CityData[] = [
  {
    slug: "san-jose",
    updatedAt: "2026-10-02",
    name: "San Jose",
    county: "Santa Clara",
    region: "South Bay",
    metaTitle: "San Jose Landscaping | West San Jose Pavers, Turf & Design",
    metaDescription: "West San Jose landscaping: Willow Glen, Cambrian, Almaden & Rose Garden. Pavers, artificial turf, lighting & backyard remodels. Free 3D design. (510) 755-5616.",
    heroText: "Design-build landscaping for West San Jose homeowners, from Willow Glen and the Rose Garden to Cambrian and Almaden Valley. Pavers, turf, lighting and full backyard remodels.",
    content: [
      "Most of our San Jose work is on the west side of the city: Willow Glen, the Rose Garden, Cambrian, Almaden Valley and the neighborhoods around Westgate. These are established lots with mature trees, older sprinkler systems and side yards that have usually been left as an afterthought. We design around what is already there, keeping the trees and grades worth keeping and replacing what has stopped working.",
      "San Jose homeowners mostly call us for three things: front yards converted from thirsty lawn to artificial turf and planting, paver patios and walkways that finally make the backyard usable, and neglected side yards turned into clean, usable paths. Before a lawn comes out we check whether the homeowner wants to apply for Valley Water's landscape rebate, because the program has its own pre-approval steps and they have to happen before demolition, not after. Recent San Jose builds include a large porcelain paver patio, a lit stucco planter with a built-in bench, a backyard sports court and a paver patio with a play area.",
      "Every San Jose project is designed, demolished, graded and built by our own crew, with no subcontractor hand-offs. You see the yard in 3D before construction starts, get a fixed proposal, and hear from us daily while we are on site. We are CSLB licensed (#1101860), insured, and rated 5.0 on Google and Yelp.",
    ],
    nearbyAreas: ["saratoga", "los-gatos", "cupertino", "milpitas"],
  },
  {
    slug: "saratoga",
    updatedAt: "2026-10-02",
    name: "Saratoga",
    county: "Santa Clara",
    region: "West Valley",
    metaTitle: "Saratoga CA Landscaping | Hillside Patios, Walls & Lighting",
    metaDescription: "Landscape design-build in Saratoga, CA. Hillside retaining walls, stone & paver patios, lighting and outdoor living. Free 3D consultation. (510) 755-5616.",
    heroText: "Landscape design-build for Saratoga's large lots and foothill properties. Retaining walls, stone and paver patios, lighting and outdoor living, built by one in-house crew.",
    content: [
      "Saratoga properties run from the flatter lots near the Village and the Golden Triangle to hillside homes up toward the Santa Cruz Mountains foothills. Bigger lots, real slopes and mature oaks mean Saratoga landscapes need more planning than a typical tract backyard: how water moves across the site, where a retaining wall is structural rather than decorative, and how a patio sits against the grade.",
      "Saratoga regulates work around protected trees, so we map the existing trees before we design and plan patios, walls and trenching to stay out of root zones that need protecting. On hillside properties we lean on hardscape, gravel and well-spaced planting close to the house rather than dense shrubs, and we design landscape lighting that shows off the property without glare spilling onto neighboring lots. A recent Saratoga project paired a covered outdoor kitchen and bar with a new paver patio.",
      "Our Saratoga projects tend to be complete outdoor living builds: natural stone or paver terraces, seat walls, outdoor kitchens and fire features, pergolas and layered lighting. One team handles the design, the 3D renderings, grading, drainage and construction, so there is a single point of accountability from first visit to final walkthrough.",
    ],
    nearbyAreas: ["los-gatos", "cupertino", "san-jose"],
  },
  {
    slug: "los-gatos",
    updatedAt: "2026-10-01",
    name: "Los Gatos",
    county: "Santa Clara",
    region: "West Valley",
    metaTitle: "Los Gatos Landscaping | Retaining Walls, Patios & Lighting",
    metaDescription: "Los Gatos landscape design-build: retaining walls, drainage, paver & stone patios, pergolas and lighting for hillside homes. Free consultation. (510) 755-5616.",
    heroText: "Landscaping for Los Gatos homes, from the historic streets near downtown to hillside lots above Blossom Hill. Retaining walls, drainage, patios and lighting done right.",
    content: [
      "Los Gatos has two very different kinds of yards. Near downtown and Almond Grove the lots are older and tighter, and the goal is usually to fit a patio, planting and a dining spot into a small footprint without losing the character of the house. Up in the hills toward Blossom Hill and beyond, the challenge is slope, drainage and making a usable flat area at all.",
      "That is why so many of our Los Gatos projects start with a retaining wall and a drainage plan. Winter rain on a hillside lot will find the weakest point in a yard, so we design the grading, drains and wall backfill first and build the patio, turf or planting on top of a site that can handle it. Los Gatos also protects many trees, and we check what is on the property before anything gets designed near them.",
      "Once the bones are right, the fun part is the outdoor living: paver or natural stone patios, pergolas, fire features and landscape lighting that makes the yard usable after dark. We show you the full design in 3D first, build it with our own crew, and back it with a warranty on materials and workmanship.",
    ],
    nearbyAreas: ["saratoga", "san-jose", "cupertino"],
  },
  {
    slug: "cupertino",
    updatedAt: "2026-10-01",
    name: "Cupertino",
    county: "Santa Clara",
    region: "West Valley",
    metaTitle: "Cupertino CA Landscaping | Backyard Remodels, Pavers & Turf",
    metaDescription: "Cupertino backyard remodels: paver patios, artificial turf, pergolas and lighting, designed in 3D before we build. Free consultation. (510) 755-5616.",
    heroText: "Backyard remodels for Cupertino families in Monta Vista, Rancho Rinconada, Seven Springs and beyond. Pavers, turf, pergolas and lighting, designed in 3D first.",
    content: [
      "Cupertino homeowners usually come to us with a clear brief: a backyard the whole family can use, that looks clean year-round and does not take a weekend of work to maintain. In neighborhoods like Monta Vista, Rancho Rinconada, Garden Gate and Seven Springs, that typically means replacing a tired lawn and patchy concrete with a paver patio, artificial turf, a pergola for shade and planting that holds up through dry summers.",
      "Many Cupertino lots are modest in size, so layout matters more than budget. We plan circulation, seating, a play or turf area and storage in the 3D design so every square foot has a job. Where a lawn is being converted, we talk through Valley Water's landscape rebate early because it requires approval before the existing lawn is removed.",
      "Cupertino also regulates protected trees, so mature trees are surveyed and designed around rather than discovered mid-project. From demolition to the final walkthrough, the work is done by our in-house crew, with daily updates and a written warranty. Book a free on-site consultation to see what your yard could become.",
    ],
    nearbyAreas: ["sunnyvale", "saratoga", "los-altos", "san-jose"],
  },
  {
    slug: "sunnyvale",
    updatedAt: "2026-10-02",
    name: "Sunnyvale",
    county: "Santa Clara",
    region: "Silicon Valley",
    metaTitle: "Sunnyvale CA Landscaping | Outdoor Kitchens, Turf & Pavers",
    metaDescription: "Sunnyvale landscaping: outdoor kitchens, artificial turf, paver patios, pergolas and lighting, including Eichler yards. Free 3D consultation. (510) 755-5616.",
    heroText: "Sunnyvale yards rebuilt for real outdoor living: outdoor kitchens, artificial turf, paver patios and lighting, including mid-century Eichler homes.",
    content: [
      "Many Sunnyvale homes sit in mid-century neighborhoods such as Cherry Chase and the Eichler tracts of Fairbrae, where the house opens straight onto the yard through glass walls. In those homes the backyard is part of the living room, so the landscape has to look good from inside as much as from outside.",
      "The most common Sunnyvale request is a low-maintenance backyard: artificial turf instead of a lawn that browns every August, a paver patio sized for a real dining table, and clean modern planting. When budget allows, homeowners add an outdoor kitchen or barbecue island, a pergola and landscape lighting so the yard gets used on weeknights, not just weekends. A recent Sunnyvale project combined a low deck, a paver patio and an artificial turf lawn.",
      "Sunnyvale lots are mostly flat, which makes drainage easy to overlook. We grade every patio and turf area to move water away from the house and tie in drains where the old yard ponded. Everything is designed in 3D before we start and built by our own crew, licensed under CSLB #1101860.",
    ],
    nearbyAreas: ["mountain-view", "cupertino", "los-altos", "san-jose"],
  },
  {
    slug: "mountain-view",
    updatedAt: "2026-10-02",
    name: "Mountain View",
    county: "Santa Clara",
    region: "Silicon Valley",
    metaTitle: "Mountain View CA Landscaping | Modern Yards, Turf & Pavers",
    metaDescription: "Mountain View landscaping: modern backyards, artificial turf, paver patios, side yards, pergolas and lighting. Free 3D design consultation. (510) 755-5616.",
    heroText: "Modern, low-maintenance landscaping for Mountain View homes, from Old Mountain View bungalows to Waverly Park, Cuesta Park and the Eichlers of Monta Loma.",
    content: [
      "Mountain View has an unusual mix of housing: older bungalows in Old Mountain View, larger lots around Waverly Park and Cuesta Park, Eichler neighborhoods like Monta Loma, and plenty of newer homes with compact yards. That range means there is no single Mountain View backyard, and we do not design one. Each project starts with how you actually use the space.",
      "Our Mountain View clients tend to want clean, modern yards: large-format pavers or concrete, artificial turf for kids and dogs, a pergola or shade structure, and planting that stays tidy without constant care. Side yards are a frequent add-on, turning a strip of dirt and trash cans into a paved path with screening and a gate that actually closes. A recent Mountain View build paired a low composite deck with an artificial turf lawn and stepping pavers.",
      "On a small lot every detail shows, so we focus on clean edges, consistent joints and lighting that is warm rather than glaring. You see the finished design in 3D before we begin, pay a fixed price, and work with one in-house crew the whole way through.",
    ],
    nearbyAreas: ["sunnyvale", "los-altos", "palo-alto"],
  },
  {
    slug: "los-altos",
    updatedAt: "2026-10-02",
    name: "Los Altos",
    county: "Santa Clara",
    region: "Silicon Valley",
    metaTitle: "Los Altos CA Landscaping | Luxury Design-Build & Hardscape",
    metaDescription: "Premium Los Altos landscape design-build: curb appeal, stone & paver patios, pergolas, outdoor kitchens and lighting. Free 3D consultation. (510) 755-5616.",
    heroText: "Premium landscape design-build for Los Altos homes on generous lots: curb appeal, stone and paver patios, pergolas, outdoor kitchens and lighting.",
    content: [
      "Los Altos is known for generous lots, mature trees and a semi-rural feel that homeowners want to keep. A Los Altos landscape should feel settled into its site, not dropped on it. We design around existing trees and sightlines, and use materials such as natural stone, quality pavers and warm wood that age well alongside the house.",
      "Front yards matter here. Many of our Los Altos projects include a new entry walk or driveway, lighting along the approach and low-water planting that still looks lush. In the backyard, the brief is usually a full outdoor living space: a terrace for dining, a lounge area around a fire feature, a pergola, and enough open turf or lawn for kids and guests. Recent Los Altos work includes a composite deck with a retaining wall, and a pergola lounge reached by stepping pavers through new turf.",
      "Larger projects need tighter coordination, so we keep design and construction under one roof. Grading, drainage, low-voltage lighting, irrigation and hardscape are planned together in the 3D design and built by our own crew, with daily updates and a final walkthrough before we call it done.",
    ],
    nearbyAreas: ["palo-alto", "mountain-view", "cupertino"],
  },
  {
    slug: "palo-alto",
    updatedAt: "2026-10-02",
    name: "Palo Alto",
    county: "Santa Clara",
    region: "Silicon Valley",
    metaTitle: "Palo Alto CA Landscaping | Eichler Yards, Patios & Lighting",
    metaDescription: "Palo Alto landscape design-build: Eichler-friendly modern yards, paver & stone patios, pergolas, turf and lighting. Free 3D consultation. (510) 755-5616.",
    heroText: "Landscape design-build for Palo Alto homes, from Eichler neighborhoods to Old Palo Alto and Crescent Park. Modern patios, pergolas, turf and lighting.",
    content: [
      "Palo Alto has some of the most distinctive residential architecture in the Bay Area, from the Eichler neighborhoods of Greenmeadow and Midtown to the older homes of Old Palo Alto, Professorville and Crescent Park. A good Palo Alto landscape respects the house it belongs to: clean lines and floor-to-ceiling views for a mid-century home, softer layering and traditional materials for an older one.",
      "Palo Alto protects a wide range of trees, including native oaks and redwoods, and the city's rules affect where you can trench, pave or build near them. We survey the existing trees before design and lay out patios, walls and utility runs accordingly, so permitting questions get answered at the planning stage instead of halfway through construction. Recent Palo Alto projects include a horizontal redwood fence with matching planters, and lit decking with large stepping pavers.",
      "Typical Palo Alto projects for us combine a paver or stone patio, a pergola or shade structure, artificial turf or a small lawn, low-water planting and landscape lighting. You see it all in 3D first, and our in-house crew builds it with daily updates. We are CSLB licensed (#1101860), insured and rated 5.0 on Google and Yelp.",
    ],
    nearbyAreas: ["los-altos", "mountain-view", "san-carlos"],
  },
  {
    slug: "san-carlos",
    updatedAt: "2026-10-02",
    name: "San Carlos",
    county: "San Mateo",
    region: "Peninsula",
    metaTitle: "San Carlos CA Landscaping | Retaining Walls, Patios & Turf",
    metaDescription: "San Carlos landscaping: retaining walls, drainage, paver patios, artificial turf, pergolas and lighting for hillside and flat lots. (510) 755-5616.",
    heroText: "Landscaping for San Carlos homes, from the flatlands near Laurel Street to the hills above. Retaining walls, drainage, paver patios, turf and lighting.",
    content: [
      "San Carlos splits neatly into flat neighborhoods near Laurel Street and the hills to the west, and the two call for different approaches. On the flats, the goal is usually to make a modest backyard work harder: a paver patio, a turf play area, a pergola and good lighting. In the hills, the first question is always how to create usable level space on a slope.",
      "For hillside San Carlos lots we start with retaining walls and drainage. A wall that holds a patio has to be built with proper footing, backfill and drainage behind it, or winter rain will push it out of line within a few seasons. We design the grading and drains with the hardscape so the yard looks clean and stays that way. A recent San Carlos project wrapped a large paver patio in a curved retaining wall.",
      "Before a lawn is removed, we recommend checking the current lawn-replacement rebates offered through your water provider, since most require approval before work starts. From the first visit and 3D design to construction and final walkthrough, your project is handled by one in-house team rather than a chain of subcontractors.",
    ],
    nearbyAreas: ["palo-alto", "los-altos"],
  },
  {
    slug: "milpitas",
    updatedAt: "2026-10-01",
    name: "Milpitas",
    county: "Santa Clara",
    region: "South Bay",
    metaTitle: "Milpitas CA Landscaping | Artificial Turf & Paver Patios",
    metaDescription: "Expert landscaping in Milpitas, CA. Artificial turf, pavers, hardscaping & outdoor lighting. 5.0-star rated, CSLB licensed. Free consultation. (510) 755-5616.",
    heroText: "Professional landscaping for Milpitas homeowners at the northern edge of Silicon Valley. Design-build excellence from a locally trusted team.",
    content: [
      "Milpitas sits at the crossroads of Silicon Valley and the East Bay, and its landscaping needs reflect that unique position. Visionable Landscaping has transformed dozens of Milpitas yards, from the hillside properties near Ed Levin County Park to the family neighborhoods around Calaveras Boulevard. We understand the specific challenges Milpitas homeowners face, including varied terrain, strict water conservation requirements, and HOA guidelines.",
      "Artificial turf is especially popular among Milpitas residents looking to cut water bills without sacrificing curb appeal. Our premium turf installations include proper drainage, realistic blade profiles, and a 15-year warranty. For homeowners wanting a more comprehensive transformation, our complete backyard remodels combine pavers, lighting, turf, and custom plantings into a cohesive outdoor living space.",
      "As a locally owned company just up the road in Fremont, we offer Milpitas homeowners the rare combination of premium quality and local accountability. Our 5.0-star reviews on Google and Yelp speak for themselves. Book a free consultation and see why your neighbors trust Visionable.",
    ],
    nearbyAreas: ["san-jose", "fremont", "sunnyvale"],
  },
  {
    slug: "fremont",
    updatedAt: "2026-10-01",
    name: "Fremont",
    county: "Alameda",
    region: "East Bay",
    metaTitle: "Fremont CA Landscaping | Pavers, Turf & Backyard Remodels",
    metaDescription: "Landscaping in Fremont, CA from our Fremont base. Pavers, artificial turf, landscape design & hardscaping. 5.0-star rated. Free consultation. (510) 755-5616.",
    heroText: "Visionable Landscaping delivers premium design-build services to Fremont homeowners. From pavers and turf to complete backyard remodels, 5.0-star rated, licensed, and insured.",
    content: [
      "As Fremont's locally based landscaping company, Visionable Landscaping understands the unique character of this city's diverse neighborhoods. From the established homes of Niles and Mission San Jose to the newer developments in Warm Springs, every Fremont property has distinct landscaping needs shaped by the Mediterranean climate, clay-heavy soils, and local HOA requirements.",
      "Fremont homeowners consistently choose us for paver patios, artificial turf installations, and complete backyard remodels. Our proximity means faster response times, lower project costs, and deep familiarity with Fremont's permitting process. Whether you're looking to replace a water-hungry lawn with drought-resistant turf or create an outdoor living space with pavers and lighting, we bring years of local expertise to every project.",
      "With 200+ completed projects across the Bay Area and a perfect 5.0-star rating, Visionable Landscaping builds for Fremont residents who want quality craftsmanship without the hassle. Every project starts with a free on-site consultation and 3D design rendering so you can see your vision before we break ground.",
    ],
    nearbyAreas: ["milpitas", "san-jose", "sunnyvale"],
  },
];

export function getAreaBySlug(slug: string): CityData | undefined {
  return areas.find((a) => a.slug === slug);
}

/** City FAQs are generated from the city's own data rather than hand-written
 *  once per city. Every answer restates a commitment already made
 *  elsewhere on the site (licence number, free consultation, in-house crew,
 *  warranty) so no page can drift into promising something the others do not. */
export function faqsForCity(city: CityData): { q: string; a: string }[] {
  const nearbyNames = city.nearbyAreas
    .map((slug) => getAreaBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name));

  const nearbyList =
    nearbyNames.length > 1
      ? `${nearbyNames.slice(0, -1).join(", ")} and ${nearbyNames[nearbyNames.length - 1]}`
      : nearbyNames[0] ?? "the surrounding area";

  return [
    {
      q: `Do you take on projects in ${city.name}?`,
      a: `Yes. ${city.name} is one of the ${city.region} cities we focus on. Our office is at 581 Emerson St in Fremont, and our own crews build throughout ${city.county} County. We also work in nearby ${nearbyList}.`,
    },
    {
      q: `What happens at the free ${city.name} consultation?`,
      a: `We come to the property, measure it, and talk through how you want to use the space. You then get 3D renderings of the design before anything is built. The visit and the renderings cost nothing, and you only pay if you decide to build.`,
    },
    {
      q: `Are you licensed and insured to work in ${city.name}?`,
      a: `We are CSLB licensed (#1101860) and insured. Your project is built by our own in-house crew rather than subcontractors, and it comes with a warranty on both materials and workmanship.`,
    },
    {
      q: `What kinds of yards do you build in ${city.name}?`,
      a: `Anything from a single paver patio or artificial turf install to a complete backyard remodel combining hardscaping, a pergola, lighting and planting. We have completed 200+ Bay Area yards and hold a 5.0 rating on both Google and Yelp.`,
    },
  ];
}
