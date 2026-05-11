import type { PortfolioFilter } from "@/content/portfolio";

interface PortfolioFiltersProps {
  categories: readonly PortfolioFilter[];
  active: PortfolioFilter;
  onSelect: (category: PortfolioFilter) => void;
}

export function PortfolioFilters({
  categories,
  active,
  onSelect,
}: PortfolioFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          aria-pressed={active === category}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            active === category
              ? "bg-primary text-white shadow-md"
              : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
