import {
  type PortfolioFilter,
  type PortfolioProject,
} from "@/content/portfolio";

export function filterPortfolioProjects(
  projects: PortfolioProject[],
  activeCategory: PortfolioFilter
) {
  return activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);
}

export function getPortfolioAspectClass(project: PortfolioProject) {
  if (project.width === project.height) return "aspect-square";
  return project.width < project.height ? "aspect-[3/4]" : "aspect-[4/3]";
}

export function shouldPrioritizePortfolioImage(
  index: number,
  activeCategory: PortfolioFilter
) {
  return activeCategory === "All" && index < 3;
}
