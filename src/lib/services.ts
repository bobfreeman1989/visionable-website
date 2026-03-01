export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  content: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "paver-installation",
    title: "Paver Installation",
    shortDesc: "Premium interlocking pavers for patios, driveways, and walkways.",
    metaTitle: "Paver Installation Bay Area | Visionable Landscaping",
    metaDescription: "Professional paver installation in the Bay Area. Patios, driveways, walkways with premium interlocking pavers. 5.0-star rated. Free consultation. (510) 755-5616.",
    heroText: "Transform your outdoor space with premium interlocking pavers. Custom-designed patios, driveways, and walkways built to last by Visionable Landscaping.",
    content: [
      "Paver installation is one of our core specialties at Visionable Landscaping. We use premium interlocking pavers from trusted manufacturers to create patios, driveways, walkways, and pool decks that are both beautiful and built to last. Unlike poured concrete, pavers offer superior durability, easier maintenance, and virtually unlimited design possibilities.",
      "Our paver installation process begins with proper site preparation — excavation, grading, and compacted base material — which is the foundation of a long-lasting paver surface. We then install edge restraints, bedding sand, and each paver with precision. The result is a level, well-drained surface that resists cracking, shifting, and settling for decades.",
      "From classic brick patterns to contemporary large-format slabs, we offer a wide range of paver styles, colors, and textures. Our design team creates custom layouts using 3D rendering software so you can visualize your new patio or driveway before installation begins. Every paver project includes a comprehensive warranty on both materials and workmanship.",
    ],
    benefits: [
      "Lasts 25+ years with minimal maintenance",
      "Individual pavers can be replaced if damaged",
      "Superior drainage compared to poured concrete",
      "Wide range of colors, textures, and patterns",
      "Increases property value and curb appeal",
      "Resistant to cracking from freeze-thaw cycles",
    ],
    faqs: [
      { q: "How long does paver installation take?", a: "Most paver patios take 3-5 days. Larger projects like driveways may take 1-2 weeks including site preparation, base work, and paver installation." },
      { q: "How much do pavers cost?", a: "Paver projects typically range from $15-$35 per square foot installed, depending on the paver type, pattern complexity, and site conditions. We provide detailed estimates after a free on-site consultation." },
      { q: "Do pavers require maintenance?", a: "Pavers are very low-maintenance. Occasional sweeping and rinsing keep them looking great. We recommend resealing every 2-3 years to maintain color and prevent weed growth between joints." },
    ],
  },
  {
    slug: "artificial-turf",
    title: "Artificial Turf",
    shortDesc: "Low-maintenance, water-saving synthetic turf that looks and feels natural.",
    metaTitle: "Artificial Turf Installation Bay Area | Visionable Landscaping",
    metaDescription: "Professional artificial turf installation in the Bay Area. Water-saving, low-maintenance synthetic grass. 15-year warranty. Free consultation. (510) 755-5616.",
    heroText: "Save water, eliminate mowing, and enjoy a green lawn year-round with premium artificial turf installed by Visionable Landscaping.",
    content: [
      "Artificial turf has become one of the most popular landscaping upgrades for Bay Area homeowners, and for good reason. Our premium synthetic turf installations eliminate watering, mowing, fertilizing, and pesticide use while providing a lush, green lawn that looks natural in every season. With California's water concerns, artificial turf is both an environmentally responsible and financially smart choice.",
      "We use only top-tier turf products with realistic blade profiles, natural color variations, and built-in UV protection. Our installation process includes removing existing sod, grading for proper drainage, installing a compacted base, and securing the turf with professional-grade infill. The result is a soft, durable surface that is safe for children and pets.",
      "Every artificial turf installation comes with a 15-year manufacturer warranty. We install turf for front yards, backyards, side yards, pet areas, putting greens, and commercial properties throughout the I-680 corridor. Our free consultation includes turf samples so you can see and feel the product before committing.",
    ],
    benefits: [
      "Saves thousands of gallons of water annually",
      "No mowing, fertilizing, or pesticides needed",
      "Stays green and lush year-round",
      "Safe and durable for kids and pets",
      "15-year manufacturer warranty",
      "Pays for itself in water savings within 3-5 years",
    ],
    faqs: [
      { q: "How long does artificial turf last?", a: "Quality artificial turf lasts 15-20 years with proper installation. Our products come with a 15-year manufacturer warranty." },
      { q: "Is artificial turf safe for pets?", a: "Absolutely. Our turf products are non-toxic and designed for pet use. We install proper drainage and antimicrobial infill to keep the surface clean and odor-free." },
      { q: "Does artificial turf get hot?", a: "Turf can warm up on hot days, but our premium products include heat-reducing technology. A quick rinse with water cools the surface immediately." },
    ],
  },
  {
    slug: "landscape-design",
    title: "Landscape Design",
    shortDesc: "Custom 3D landscape designs tailored to your property and lifestyle.",
    metaTitle: "Landscape Design Bay Area | Visionable Landscaping",
    metaDescription: "Custom landscape design in the Bay Area. 3D renderings, drought-tolerant plans & complete design-build services. 5.0-star rated. Free consultation. (510) 755-5616.",
    heroText: "See your dream yard before we build it. Custom 3D landscape designs tailored to your property, lifestyle, and budget.",
    content: [
      "Great landscaping starts with great design. At Visionable Landscaping, every project begins with a thorough design phase where we listen to your goals, assess your property, and create a custom plan that maximizes both beauty and functionality. Our design process uses professional 3D rendering software so you can see exactly what your finished yard will look like — before any work begins.",
      "Our landscape designs consider every factor: sun exposure, drainage patterns, soil conditions, existing structures, HOA requirements, and your personal aesthetic preferences. We specialize in drought-tolerant designs that thrive in the Bay Area climate, combining native and adapted plants with hardscaping elements like pavers, retaining walls, and lighting to create cohesive, low-maintenance outdoor spaces.",
      "As a design-build company, we handle everything from initial concept through final construction. This integrated approach eliminates the gap between designer vision and builder execution, resulting in projects that match the plan precisely. Our design consultation is always free, and you receive detailed 3D renderings with your proposal.",
    ],
    benefits: [
      "Free 3D design renderings before construction",
      "Designs tailored to Bay Area climate and soils",
      "Drought-tolerant and water-efficient options",
      "Integrated design-build eliminates miscommunication",
      "HOA-compliant designs when required",
      "Maximizes property value and curb appeal",
    ],
    faqs: [
      { q: "Do I need to hire a separate designer?", a: "No. As a design-build company, we handle both design and construction in-house. This saves you time, money, and the headaches of coordinating between separate firms." },
      { q: "How long does the design process take?", a: "Typically 1-2 weeks from initial consultation to final design presentation. We refine the design based on your feedback until it is exactly right." },
      { q: "Can I see what my yard will look like first?", a: "Yes. We create detailed 3D renderings that show your yard from multiple angles, including plant maturity projections. You will see exactly what you are getting before we start." },
    ],
  },
  {
    slug: "hardscaping",
    title: "Hardscaping",
    shortDesc: "Retaining walls, fire pits, outdoor kitchens, and stone features.",
    metaTitle: "Hardscaping Services Bay Area | Visionable Landscaping",
    metaDescription: "Professional hardscaping in the Bay Area. Fire pits, outdoor kitchens, stone features & decorative walls. 5.0-star rated. Free consultation. (510) 755-5616.",
    heroText: "Add structure, function, and beauty to your yard with custom hardscaping. Fire pits, outdoor kitchens, stone walls, and more — built to last.",
    content: [
      "Hardscaping forms the structural backbone of any great landscape. Visionable Landscaping designs and builds custom hardscape features including fire pits, outdoor kitchens, seat walls, stone veneer, water features, and decorative borders. These elements add both functionality and visual interest to your outdoor space while increasing your property's value.",
      "Our hardscaping projects use premium materials — natural stone, manufactured stone veneer, concrete block, and porcelain — selected for durability and aesthetics. Every hardscape element is engineered with proper footings, drainage, and structural support to withstand the Bay Area's conditions for decades. Whether you want a cozy fire pit for cool evenings or a full outdoor kitchen for entertaining, we build it right the first time.",
      "We integrate hardscaping seamlessly with softscape elements like turf, plantings, and lighting to create a unified outdoor living environment. Our design team works with you to select materials, finishes, and layouts that complement your home's architecture and your personal style. See our portfolio for examples of our hardscaping work across the I-680 corridor.",
    ],
    benefits: [
      "Adds significant value to your property",
      "Creates functional outdoor living and entertaining areas",
      "Built with premium, long-lasting materials",
      "Engineered for proper drainage and structural integrity",
      "Seamlessly integrated with landscaping and lighting",
      "Custom designs to match your home's architecture",
    ],
    faqs: [
      { q: "What is hardscaping?", a: "Hardscaping refers to the non-plant elements of landscaping — pavers, walls, fire pits, outdoor kitchens, stone features, and any built structure in your yard." },
      { q: "How much does hardscaping cost?", a: "Hardscaping costs vary widely based on scope. A fire pit may start around $3K-$5K, while a full outdoor kitchen ranges from $15K-$40K+. We provide detailed estimates after consultation." },
      { q: "Do hardscape features need permits?", a: "Some features like outdoor kitchens with gas lines or large retaining walls may require permits. We handle all permitting as part of our service." },
    ],
  },
  {
    slug: "outdoor-lighting",
    title: "Outdoor Lighting",
    shortDesc: "Accent, pathway, and security lighting that transforms your yard at night.",
    metaTitle: "Outdoor Lighting Installation Bay Area | Visionable Landscaping",
    metaDescription: "Professional outdoor lighting in the Bay Area. LED landscape lighting for pathways, accents & security. Energy-efficient. Free consultation. (510) 755-5616.",
    heroText: "Extend your outdoor living into the evening with professional landscape lighting. Accent, pathway, and security lighting designed and installed by Visionable.",
    content: [
      "Outdoor lighting transforms your landscape from a daytime-only space into an evening destination. Visionable Landscaping designs and installs professional LED landscape lighting systems that highlight architectural features, illuminate pathways, create ambiance around entertaining areas, and enhance security — all while keeping energy costs low.",
      "Our lighting designs are carefully planned to create layers of light: uplighting for trees and architectural features, downlighting for natural moonlight effects, pathway lights for safety, and accent lighting for focal points like water features and garden beds. We use commercial-grade LED fixtures that are energy-efficient, long-lasting, and designed to withstand outdoor conditions.",
      "Every lighting installation includes a low-voltage transformer, weather-rated wiring, and professional-grade fixtures with a manufacturer warranty. We program timers and smart controls so your lighting operates automatically. Our design consultation helps you see lighting placement options before installation, ensuring the finished result matches your vision.",
    ],
    benefits: [
      "Energy-efficient LED technology",
      "Extends usable outdoor hours into evening",
      "Enhances home security and safety",
      "Highlights landscape and architectural features",
      "Smart timers and automated controls",
      "Commercial-grade fixtures with manufacturer warranty",
    ],
    faqs: [
      { q: "Are LED landscape lights energy-efficient?", a: "Yes. LED landscape lighting uses up to 80% less energy than traditional halogen fixtures and lasts 10-15 times longer. Most systems cost just pennies per day to operate." },
      { q: "Can I control the lights from my phone?", a: "Yes. We offer smart lighting controls that let you adjust brightness, set schedules, and control zones from your smartphone." },
      { q: "How long does lighting installation take?", a: "Most landscape lighting projects take 1-2 days. Larger properties or complex designs may take 3-4 days." },
    ],
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    shortDesc: "Structural and decorative walls for slopes, terraces, and garden beds.",
    metaTitle: "Retaining Wall Installation Bay Area | Visionable Landscaping",
    metaDescription: "Professional retaining wall installation in the Bay Area. Structural & decorative walls for slopes and terraces. CSLB licensed. Free consultation. (510) 755-5616.",
    heroText: "Solve slope challenges and create usable outdoor space with professionally engineered retaining walls from Visionable Landscaping.",
    content: [
      "Retaining walls are essential for Bay Area properties with slopes, grade changes, or erosion challenges. Visionable Landscaping designs and builds retaining walls that are both structurally sound and visually appealing. Whether you need a small garden wall or a major hillside retention system, we engineer every wall for long-term stability and proper drainage.",
      "We build retaining walls using a variety of materials including segmental concrete block, natural stone, poured concrete, and timber. Each material has its advantages, and we help you select the best option based on wall height, soil conditions, aesthetic preferences, and budget. For walls over four feet, we work with licensed engineers to ensure code compliance and structural integrity.",
      "Beyond their functional purpose, retaining walls create opportunities for terraced gardens, flat usable areas on sloped lots, raised planting beds, and integrated seating. We often combine retaining walls with paver patios, lighting, and plantings to create multi-level outdoor living spaces that maximize every square foot of your property.",
    ],
    benefits: [
      "Prevents erosion and manages water runoff",
      "Creates usable flat areas on sloped lots",
      "Multiple material options for any aesthetic",
      "Engineered for structural integrity and code compliance",
      "Integrates with patios, gardens, and lighting",
      "Adds significant property value",
    ],
    faqs: [
      { q: "Do retaining walls need permits?", a: "In most Bay Area cities, walls over 4 feet tall require a building permit and engineering. We handle all permitting and engineering as part of our service." },
      { q: "What materials do you use for retaining walls?", a: "We use segmental concrete block, natural stone, poured concrete, and timber depending on the application. We will recommend the best option during your free consultation." },
      { q: "How long do retaining walls last?", a: "A properly built retaining wall with good drainage lasts 50+ years. Drainage is the key — and we engineer every wall with proper backfill and drainage systems." },
    ],
  },
  {
    slug: "complete-backyard-remodel",
    title: "Complete Backyard Remodel",
    shortDesc: "Full yard transformations from design to build, handled entirely in-house.",
    metaTitle: "Complete Backyard Remodel Bay Area | Visionable Landscaping",
    metaDescription: "Full backyard remodels in the Bay Area. Design-build transformations with pavers, turf, lighting & more. 5.0-star rated. Free consultation. (510) 755-5616.",
    heroText: "Transform your entire backyard from concept to completion. One team, one vision, one stunning result — handled entirely in-house by Visionable Landscaping.",
    content: [
      "A complete backyard remodel is the ultimate outdoor transformation, and Visionable Landscaping is the Bay Area's trusted partner for these ambitious projects. We handle everything in-house — design, demolition, grading, hardscaping, planting, irrigation, lighting, and finishing — so there is no miscommunication between trades and every element works together seamlessly.",
      "Our complete remodels typically include a combination of paver patios, artificial turf, retaining walls, outdoor lighting, plantings, and custom features like fire pits, outdoor kitchens, or water features. Every project starts with a detailed 3D design that lets you see and refine your vision before construction begins. We lock in pricing upfront so there are no surprises.",
      "From initial consultation to final walkthrough, a complete backyard remodel with Visionable typically takes 3-6 weeks depending on scope. You receive daily progress updates, and our project manager is always available to answer questions. The result is a backyard that feels like a resort — designed for your lifestyle and built to last for decades.",
    ],
    benefits: [
      "Single team handles everything from design to build",
      "3D design renderings before construction begins",
      "Locked-in pricing with no hidden fees",
      "Daily progress updates throughout construction",
      "Comprehensive warranty on materials and workmanship",
      "Typical completion in 3-6 weeks",
    ],
    faqs: [
      { q: "How much does a complete backyard remodel cost?", a: "Complete remodels typically range from $20K-$60K+ depending on size and features. We provide a detailed, transparent estimate after your free consultation. No hidden fees." },
      { q: "How long does a full remodel take?", a: "Most complete backyard remodels take 3-6 weeks from start to finish. We set a clear timeline upfront and keep you updated daily." },
      { q: "Do I need to move out during construction?", a: "No. Our crew works during business hours and keeps the work area clean and contained. You can continue living comfortably in your home throughout the project." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
