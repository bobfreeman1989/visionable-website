export const portfolioCategories = [
  "All",
  "Hardscaping",
  "Landscaping",
  "Outdoor Living",
] as const;

export type PortfolioCategory = Exclude<(typeof portfolioCategories)[number], "All">;
export type PortfolioFilter = (typeof portfolioCategories)[number];

export type PortfolioProject = {
  id: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  image: string;
  width: number;
  height: number;
  alt: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Paver Patio & Turf",
    category: "Hardscaping",
    location: "Fremont",
    image: "/photos/portfolio/p01.webp",
    width: 600,
    height: 800,
    alt: "Paver patio and artificial turf installation in Fremont, CA by Visionable Landscaping",
  },
  {
    id: "2",
    title: "Custom Hardscape",
    category: "Hardscaping",
    location: "Union City",
    image: "/photos/portfolio/p02.webp",
    width: 600,
    height: 800,
    alt: "Custom hardscape installation in Union City, CA by Visionable Landscaping",
  },
  {
    id: "3",
    title: "Backyard Remodel",
    category: "Landscaping",
    location: "Milpitas",
    image: "/photos/portfolio/p03.webp",
    width: 600,
    height: 800,
    alt: "Backyard remodel with refreshed landscaping in Milpitas, CA by Visionable Landscaping",
  },
  {
    id: "5",
    title: "Front Yard Design",
    category: "Landscaping",
    location: "Newark",
    image: "/photos/portfolio/p05.webp",
    width: 600,
    height: 450,
    alt: "Front yard landscape design in Newark, CA by Visionable Landscaping",
  },
  {
    id: "7",
    title: "Pergola & Outdoor Room",
    category: "Outdoor Living",
    location: "Dublin",
    image: "/photos/portfolio/p07.webp",
    width: 600,
    height: 600,
    alt: "Pergola and outdoor room project in Dublin, CA by Visionable Landscaping",
  },
  {
    id: "9",
    title: "Stone Walkway",
    category: "Hardscaping",
    location: "Danville",
    image: "/photos/portfolio/p09.webp",
    width: 600,
    height: 450,
    alt: "Stone walkway installation in Danville, CA by Visionable Landscaping",
  },
  {
    id: "4",
    title: "Outdoor Living Space",
    category: "Outdoor Living",
    location: "San Ramon",
    image: "/photos/portfolio/p04.webp",
    width: 600,
    height: 800,
    alt: "Outdoor living space with patio seating in San Ramon, CA by Visionable Landscaping",
  },
  {
    id: "10",
    title: "Landscape Lighting",
    category: "Outdoor Living",
    location: "San Jose",
    image: "/photos/portfolio/p10.webp",
    width: 600,
    height: 450,
    alt: "Landscape lighting installation in San Jose, CA by Visionable Landscaping",
  },
  {
    id: "8",
    title: "Complete Backyard",
    category: "Outdoor Living",
    location: "Pleasanton",
    image: "/photos/portfolio/p08.webp",
    width: 600,
    height: 600,
    alt: "Complete backyard outdoor living upgrade in Pleasanton, CA by Visionable Landscaping",
  },
  {
    id: "6",
    title: "Retaining Wall & Patio",
    category: "Hardscaping",
    location: "Hayward",
    image: "/photos/portfolio/p06.webp",
    width: 600,
    height: 800,
    alt: "Retaining wall and patio installation in Hayward, CA by Visionable Landscaping",
  },
  {
    id: "12",
    title: "Fountain & Hardscape",
    category: "Hardscaping",
    location: "Walnut Creek",
    image: "/photos/portfolio/p12.webp",
    width: 600,
    height: 450,
    alt: "Fountain and hardscape project in Walnut Creek, CA by Visionable Landscaping",
  },
  {
    id: "11",
    title: "Artificial Turf Install",
    category: "Landscaping",
    location: "Sunnyvale",
    image: "/photos/portfolio/p11.webp",
    width: 600,
    height: 600,
    alt: "Artificial turf installation in Sunnyvale, CA by Visionable Landscaping",
  },
];
