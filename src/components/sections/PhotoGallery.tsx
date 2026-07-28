import Image from "next/image";
import type { Photo } from "@/content/gallery";

interface PhotoGalleryProps {
  photos: Photo[];
  title: string;
  intro?: string;
  /** Right-hand link in the section header, e.g. back to the full portfolio. */
  action?: React.ReactNode;
  className?: string;
}

/**
 * Project gallery with a deliberate rhythm: the first photo runs double-wide so
 * the section opens on one strong image instead of a uniform tile grid, which
 * DESIGN.md calls out as the template look to avoid.
 */
export default function PhotoGallery({
  photos,
  title,
  intro,
  action,
  className = "bg-surface",
}: PhotoGalleryProps) {
  if (photos.length === 0) return null;

  return (
    <section className={`py-14 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-stone-900">{title}</h2>
            {intro && <p className="text-stone-600 max-w-2xl mt-3">{intro}</p>}
          </div>
          {action}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 ? "col-span-2 row-span-2 aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm text-white/95">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
