import type { PortfolioFilter, PortfolioProject } from "@/content/portfolio";
import { shouldPrioritizePortfolioImage } from "@/lib/portfolio";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";

interface PortfolioGridProps {
  projects: PortfolioProject[];
  activeFilter: PortfolioFilter;
  animKey: number;
}

export function PortfolioGrid({
  projects,
  activeFilter,
  animKey,
}: PortfolioGridProps) {
  return (
    <div key={animKey} className="columns-1 sm:columns-2 lg:columns-3 gap-4 animate-fade-in">
      {projects.map((project, index) => (
        <PortfolioCard
          key={project.id}
          project={project}
          priority={shouldPrioritizePortfolioImage(index, activeFilter)}
        />
      ))}
    </div>
  );
}
