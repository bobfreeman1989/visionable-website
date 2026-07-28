import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type RelatedCard = {
  href: string;
  title: string;
  blurb: string;
  image: { src: string; alt: string };
  meta?: string;
};

interface RelatedCardsProps {
  cards: RelatedCard[];
  title: string;
  intro?: string;
  className?: string;
  columns?: 2 | 3 | 4;
}

/** Cross-links that carry a photograph, so a related service reads as work. */
export default function RelatedCards({
  cards,
  title,
  intro,
  className = "bg-surface",
  columns = 3,
}: RelatedCardsProps) {
  if (cards.length === 0) return null;
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];

  return (
    <section className={`py-14 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-stone-900">{title}</h2>
          {intro && <p className="text-stone-600 mt-3">{intro}</p>}
        </div>

        <div className={`grid gap-5 ${cols}`}>
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group bg-white border border-stone-200 rounded-2xl overflow-hidden transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                {c.meta && (
                  <p className="text-xs uppercase tracking-[0.14em] text-primary font-semibold mb-2">
                    {c.meta}
                  </p>
                )}
                <h3 className="text-xl text-stone-900 mb-2 group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{c.blurb}</p>
                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1.5">
                  Learn more <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
