import Image from "next/image";
import { MapPin } from "lucide-react";
import type { PortfolioProject } from "@/content/portfolio";
import { getPortfolioAspectClass } from "@/lib/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
  priority?: boolean;
}

export function PortfolioCard({ project, priority = false }: PortfolioCardProps) {
  return (
    <article className="group relative break-inside-avoid mb-4 rounded-xl overflow-hidden">
      <div className={`relative ${getPortfolioAspectClass(project)}`}>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white font-bold text-lg">{project.title}</h3>
          <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
            <MapPin className="w-3.5 h-3.5" />
            {project.location}, CA
          </div>
        </div>
      </div>
    </article>
  );
}
