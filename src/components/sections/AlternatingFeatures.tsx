import Image from "next/image";
import { CheckCircle } from "lucide-react";

export type Feature = {
  title: string;
  body: string;
  bullets?: string[];
  image: { src: string; alt: string };
};

interface AlternatingFeaturesProps {
  features: Feature[];
  title?: string;
  intro?: string;
  className?: string;
}

/**
 * Image/text rows that flip sides down the page. Used where a service or place
 * needs explaining next to evidence of it, rather than as a wall of prose.
 */
export default function AlternatingFeatures({
  features,
  title,
  intro,
  className = "bg-background",
}: AlternatingFeaturesProps) {
  if (features.length === 0) return null;

  return (
    <section className={`py-14 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl text-stone-900">{title}</h2>
            {intro && <p className="text-stone-600 mt-3 leading-relaxed">{intro}</p>}
          </div>
        )}

        <div className="space-y-12 lg:space-y-20">
          {features.map((f, i) => (
            <div key={f.title} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={f.image.src}
                  alt={f.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 540px, 100vw"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-heading text-2xl md:text-3xl text-stone-900 mb-4 leading-snug">
                  {f.title}
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">{f.body}</p>
                {f.bullets && f.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-stone-600">
                        <CheckCircle
                          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                          strokeWidth={1.5}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
